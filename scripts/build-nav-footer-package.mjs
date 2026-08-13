import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  statSync,
  unlinkSync,
} from 'fs';
import { join, relative, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
// eslint-disable-next-line no-underscore-dangle
const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const src = join(root, 'packages', 'hrb-nav-footer-content');
const out = join(root, 'packages', 'hrb-nav-footer-content-1.0.0.zip');

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

if (!existsSync(src)) {
  // eslint-disable-next-line no-console
  console.error('Missing package source:', src);
  process.exit(1);
}

mkdirSync(join(root, 'packages'), { recursive: true });
if (existsSync(out)) unlinkSync(out);

// Use adm-zip if available; otherwise PowerShell with entry rewrite via .NET
let AdmZip;
try {
  // eslint-disable-next-line import/no-unresolved, global-require
  AdmZip = require('adm-zip');
} catch {
  AdmZip = null;
}

if (AdmZip) {
  const zip = new AdmZip();
  // eslint-disable-next-line no-restricted-syntax
  for (const file of walk(src)) {
    const entry = relative(src, file).split('\\').join('/');
    zip.addFile(entry, readFileSync(file));
  }
  zip.writeZip(out);
  // eslint-disable-next-line no-console
  console.log('Created', out);
  process.exit(0);
}

// Fallback: .NET ZipArchive with forward-slash names (Windows)
const ps = `
Add-Type -AssemblyName System.IO.Compression
Add-Type -AssemblyName System.IO.Compression.FileSystem
$src = '${src.replace(/'/g, "''")}'
$out = '${out.replace(/'/g, "''")}'
if (Test-Path $out) { Remove-Item $out -Force }
$stream = [IO.File]::Open($out, [IO.FileMode]::Create)
$zip = New-Object IO.Compression.ZipArchive($stream, [IO.Compression.ZipArchiveMode]::Create)
function Add-File($full, $entryName) {
  $entry = $zip.CreateEntry($entryName, [IO.Compression.CompressionLevel]::Optimal)
  $es = $entry.Open()
  $fs = [IO.File]::OpenRead($full)
  $fs.CopyTo($es)
  $fs.Close(); $es.Close()
}
Get-ChildItem -Path $src -Recurse -File | Where-Object { $_.Name -ne 'README.md' } | ForEach-Object {
  $rel = $_.FullName.Substring($src.Length).TrimStart('\\','/').Replace('\\','/')
  Add-File $_.FullName $rel
}
$zip.Dispose(); $stream.Close()
Write-Host "Created $out"
`;

const { execSync } = await import('child_process');
execSync(`powershell -NoProfile -Command ${JSON.stringify(ps)}`, { stdio: 'inherit' });
