import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  statSync,
  unlinkSync,
  writeFileSync,
} from 'fs';
import { join, relative, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';
import { execSync } from 'child_process';

const require = createRequire(import.meta.url);
// eslint-disable-next-line no-underscore-dangle
const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const packages = [
  { src: 'hrb-nav-content', zip: 'hrb-nav-content-1.0.0.zip' },
  { src: 'hrb-footer-content', zip: 'hrb-footer-content-1.0.0.zip' },
];

function walk(dir, files = []) {
  // eslint-disable-next-line no-restricted-syntax
  for (const name of readdirSync(dir)) {
    // eslint-disable-next-line no-continue
    if (name === 'README.md') continue;
    const full = join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) walk(full, files);
    else files.push(full);
  }
  return files;
}

let AdmZip;
try {
  // eslint-disable-next-line import/no-unresolved, global-require
  AdmZip = require('adm-zip');
} catch {
  AdmZip = null;
}

function zipWithDotNet(src, out) {
  const ps1 = join(root, 'scripts', '.zip-package.tmp.ps1');
  const srcEsc = src.replace(/'/g, "''");
  const outEsc = out.replace(/'/g, "''");
  const script = [
    'Add-Type -AssemblyName System.IO.Compression',
    'Add-Type -AssemblyName System.IO.Compression.FileSystem',
    `$src = '${srcEsc}'`,
    `$out = '${outEsc}'`,
    'if (Test-Path $out) { Remove-Item $out -Force }',
    '$stream = [IO.File]::Open($out, [IO.FileMode]::Create)',
    '$zip = New-Object IO.Compression.ZipArchive($stream, [IO.Compression.ZipArchiveMode]::Create)',
    'function Add-File($full, $entryName) {',
    '  $entry = $zip.CreateEntry($entryName, [IO.Compression.CompressionLevel]::Optimal)',
    '  $es = $entry.Open()',
    '  $fs = [IO.File]::OpenRead($full)',
    '  $fs.CopyTo($es)',
    '  $fs.Close(); $es.Close()',
    '}',
    "Get-ChildItem -Path $src -Recurse -File | Where-Object { $_.Name -ne 'README.md' } | ForEach-Object {",
    "  $rel = $_.FullName.Substring($src.Length).TrimStart('\\','/').Replace('\\','/')",
    '  Add-File $_.FullName $rel',
    '}',
    '$zip.Dispose(); $stream.Close()',
    'Write-Host "Created $out"',
    '',
  ].join('\n');
  writeFileSync(ps1, script);
  try {
    execSync(`powershell -NoProfile -File ${JSON.stringify(ps1)}`, { stdio: 'inherit' });
  } finally {
    if (existsSync(ps1)) unlinkSync(ps1);
  }
}

function zipPackage(srcDir, outZip) {
  if (!existsSync(srcDir)) {
    // eslint-disable-next-line no-console
    console.error('Missing package source:', srcDir);
    process.exit(1);
  }
  mkdirSync(join(root, 'packages'), { recursive: true });
  if (existsSync(outZip)) unlinkSync(outZip);

  if (AdmZip) {
    const zip = new AdmZip();
    // eslint-disable-next-line no-restricted-syntax
    for (const file of walk(srcDir)) {
      const entry = relative(srcDir, file).split('\\').join('/');
      zip.addFile(entry, readFileSync(file));
    }
    zip.writeZip(outZip);
    // eslint-disable-next-line no-console
    console.log('Created', outZip);
    return;
  }

  zipWithDotNet(srcDir, outZip);
}

packages.forEach(({ src, zip }) => {
  zipPackage(join(root, 'packages', src), join(root, 'packages', zip));
});
