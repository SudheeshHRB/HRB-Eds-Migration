# Author checklist — Nav & Footer

Use this when creating or updating **`/nav`** and **`/footer`** in Universal Editor.  
All labels, links, icons, and images below are authorable. Styling stays in code.

---

## `/nav` (Header)

### Structure (3 sections, plus optional Tax Center bar)
1. **Brand** → one **Nav Brand**
2. **Mega menus** → one **Nav Panel** per top heading
3. **Tools** → one **Nav Tools** block
4. **Secondary** (optional) → one **Nav Secondary** topic bar

### Section 1 — Nav Brand
- [ ] Logo Image (DAM)
- [ ] Logo Alt Text
- [ ] Logo Link (usually `/`)
- [ ] Accessible Name
- [ ] Link Title (optional)

### Section 2 — Nav Panel (repeat for each top heading)
**Panel fields**
- [ ] Top Nav Label (e.g. Taxes)
- [ ] Top Nav Link
- [ ] Link Title (optional)

**Children (add / remove / reorder as needed)**
- [ ] **Mega Explore** — Explore Label + Link (optional; skip for Business-style left list)
- [ ] **Mega Primary Links** — bold left link list
- [ ] **Mega Column** × n — Column Heading + Column Links
- [ ] **Mega Card** × n
  - [ ] Card Title + Card Link
  - [ ] Description (and disclaimer paragraph if needed)
  - [ ] Card Style: `green` / `cream` / `accent`
  - [ ] Card Image (DAM) — optional; use for Spruce / Business photo cards
  - [ ] Image Alt Text (if image set)

**Typical panels**
- [ ] Taxes
- [ ] Financial products
- [ ] Business services
- [ ] Tools and resources

### Section 3 — Nav Tools
- [ ] **Nav Tool** — Find an office (icon + label + URL)
- [ ] **Nav Tool** — Search (icon + label + URL)
- [ ] **Nav Sign In** — icon, Eyebrow (`Sign in to`), Primary Label (`MyBlock`), URL

### Section 4 — Nav Secondary (optional, Tax Center)
- [ ] **Nav Secondary Explore** — Explore All Topics (grid icon + optional topics list)
- [ ] **Nav Secondary Link** — Life Stages, Work, Taxes 101, Tax Breaks and Money, What's New

### QA — Nav
- [ ] Desktop: hover each top heading → correct mega menu opens
- [ ] Mobile: hamburger + accordion works
- [ ] Image cards show DAM (or placeholder) images where expected
- [ ] Publish `/nav`

---

## `/footer` (Footer)

### Structure
1. Add **Footer** section (styles: Site Footer + Green Dark Theme)  
   **or** normal Section with those two styles selected  
2. Insert blocks in this order: **Footer Disclosures** → **Footer Support** → **Footer Links** → **Footer Legal** → **Footer Seals**  

Footer Disclosures is authored as its own block (do not nest it under Footer Support in UE). After publish, it renders **inside** the Footer Support wrapper, above “Need support?”.

### Footer Disclosures
- [ ] Place this block **first** in the footer section (before Footer Support)
- [ ] Heading (e.g. Offer details and disclosures)
- [ ] Disclosure Group — Full Site Disclaimers + links
- [ ] Disclosure Notes — numbered footnotes

### Footer Support
- [ ] Heading (e.g. Need support?)
- [ ] Heading Type (H2 / H3 / H4)
- [ ] Support Actions (icon + label + URL) — Customer help, Find an office, Search, etc.

### Footer Links
- [ ] Footer Columns (usually 4) — richtext with H5 headings + link lists
- [ ] All business link labels and URLs updated

### Footer Legal
- [ ] Legal / Copyright Text (richtext)
- [ ] Social Links (icon + URL + accessible name) — TikTok, Facebook, Instagram, YouTube, X, etc.

### Footer Seals
- [ ] Seal items — image seal and/or text-only link (e.g. TRUSTe, Your Privacy Choices)

### QA — Footer
- [ ] Disclosures accordion appears inside the support region, above “Need support?”
- [ ] Support row is one line on desktop (“Need support?” does not wrap badly)
- [ ] Long footer links wrap cleanly
- [ ] Social icons and seals open correct URLs
- [ ] Publish `/footer`

---

## Page wiring (optional)
On any page metadata:
- [ ] `nav` → path if not default `/nav`
- [ ] `footer` → path if not default `/footer`

---

## Not authorable (code / brand system)
Colors, spacing, mega hover behavior, footer theme layout — do not change in UE.

For full field details see [nav-footer-universal-editor.md](./nav-footer-universal-editor.md).  
For **div-by-div content + Tax Center defaults** see [header-footer-authoring-guide.md](./header-footer-authoring-guide.md).
