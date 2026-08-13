# HRB Nav & Footer — AEM Content Package

Installable CRX package that seeds authorable **Nav** and **Footer** pages for Edge Delivery Services + Universal Editor.

## Package file

After building (see below):

`packages/hrb-nav-footer-content-1.0.0.zip`

## What it installs

| AEM path | EDS path | Purpose |
|----------|----------|---------|
| `/content/hrb-eds-migration/nav` | `/nav` | Header + mega menus |
| `/content/hrb-eds-migration/footer` | `/footer` | Site footer |

**Important:** If your site root is not `/content/hrb-eds-migration`, update:

1. `META-INF/vault/filter.xml`
2. Folder `jcr_root/content/hrb-eds-migration/` → rename to your site name  
Then rebuild the zip.

Your site must already exist under `/content/...` (create via AEM Site template if needed).

## Install (Package Manager / CRX)

1. Open Author → **Tools → Deployment → Packages**  
   (or `http://localhost:4502/crx/packmgr` / Cloud Author package manager)
2. **Upload Package** → select `hrb-nav-footer-content-1.0.0.zip`
3. **Install**
4. Open Sites console → `nav` and `footer` pages
5. **Edit** in Universal Editor
6. Assign **DAM images/icons** (logo, tools icons, mega card photos, social icons, seals)
7. **Publish** (Preview) both pages so EDS receives `/nav` and `/footer`

## After install checklist

- [ ] Site root path matches package filter
- [ ] `paths.json` / EDS site config maps site root so `/nav` and `/footer` resolve
- [ ] Logo + tool icons set from DAM
- [ ] Mega card images set for Financial (Spruce) + Business cards
- [ ] Footer support / social / seal icons set from DAM
- [ ] Preview `/nav` and `/footer` on `*.aem.page`

## Build zip (Windows PowerShell)

```powershell
cd packages
if (Test-Path hrb-nav-footer-content-1.0.0.zip) { Remove-Item hrb-nav-footer-content-1.0.0.zip }
Compress-Archive -Path hrb-nav-footer-content\* -DestinationPath hrb-nav-footer-content-1.0.0.zip
```

Or from repo root:

```powershell
npm run package:nav-footer
```

(if script is added to `package.json`)

## Notes

- Text, links, and structure are pre-filled for H&R Block nav/footer.
- Image fields are left empty so authors pick production DAM assets.
- Local `nav.plain.html` / `drafts/` remain for developer testing only — this package is for **AEM Author**.
