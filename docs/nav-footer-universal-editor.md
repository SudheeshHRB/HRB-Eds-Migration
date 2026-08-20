# Nav & Footer — Universal Editor Authoring Guide

Authors control **all** nav and footer copy, links, icons, and cards in Universal Editor.  
Block JavaScript only decorates markup — **nothing is hardcoded**.

| Surface | Authored page / XF | Loaded by | Default path | AEM (NewHRBEds) |
|---------|-------------------|-----------|--------------|-----------------|
| Header / mega menu | Header page (`nav`) | `header` block | `/nav` | `/content/NewHRBEds/nav` |
| Footer | Footer page (`footer`) | `footer` block | `/footer` | `/content/NewHRBEds/footer` |

Optional page metadata overrides:

- `nav` → path to an alternate nav XF  
- `footer` → path to an alternate footer XF  

---

## 1. Architecture (template → content)

```mermaid
flowchart TD
  page["Any site page"] --> hdr["header block"]
  page --> ftr["footer block"]

  hdr --> navXf["/nav XF"]
  ftr --> footerXf["/footer XF"]

  navXf --> sBrand["Section 1 Brand"]
  navXf --> sMega["Section 2 Mega menus"]
  navXf --> sTools["Section 3 Tools"]
  navXf --> sSub["Section 4 Secondary (optional)"]

  sBrand --> brand["Nav Brand"]
  sMega --> panel1["Nav Panel Taxes"]
  sMega --> panelN["Nav Panel …"]
  sTools --> tools["Nav Tools"]
  sSub --> subnav["Nav Secondary"]

  footerXf --> footSec["Footer section"]
  footSec --> support["Footer Support"]
  support --> disclosures["Footer Disclosures inside support wrapper"]
  footSec --> links["Footer Links"]
  footSec --> legal["Footer Legal"]
  footSec --> seals["Footer Seals"]
```

---

## 2. Nav content tree (Universal Editor + CRXDE)

Page: **Header** (`/content/NewHRBEds/nav` → EDS `/nav`).

```
nav / jcr:content / root
├── section_brand
│   └── nav_brand                         Nav Brand  (logo + /)
├── section_mega
│   ├── nav_panel_taxes                   Taxes
│   │   ├── item_0  mega-explore          Explore taxes
│   │   ├── item_1  mega-primary          File online, File with a pro, Download software, Small business taxes
│   │   ├── item_2  mega-column           More tax services (Second Look, Peace of Mind, Tax Identity Shield, Tax Notice, ITIN)
│   │   ├── item_3  mega-column           Your tax appointment (prep, manage, Español)
│   │   ├── item_4  mega-column           International (Expat, International offices)
│   │   ├── item_5  mega-card green       File with a tax pro
│   │   └── item_6  mega-card cream       File online
│   ├── nav_panel_financial               Financial products
│   │   ├── item_0  mega-explore          Explore financial products
│   │   ├── item_1  mega-primary          Refund Transfer, Spruce, Emerald Card®
│   │   ├── item_2  mega-column           Loans
│   │   ├── item_3  mega-column           Spruce (Explore, Features, Sign up, Log in)
│   │   └── item_4  mega-card accent      Make the most of every dollar with Spruce
│   ├── nav_panel_business                Business services
│   │   ├── item_0  mega-primary          Small business taxes, Bookkeeping, Payroll, Business formation
│   │   ├── item_1  mega-column           Small business taxes (Self-Employed, S/C corps, Partnerships)
│   │   ├── item_2  mega-column           Form your business
│   │   ├── item_3  mega-card green       File my business taxes
│   │   └── item_4  mega-card cream       The Creator Suite
│   └── nav_panel_tools                   Tools and resources
│       ├── item_0  mega-explore          Visit the Resource Center
│       ├── item_1  mega-primary          Tax calculator, checklist, W-4, refund, tax questions
│       ├── item_2  mega-column           Tax articles
│       ├── item_3  mega-column           Help center
│       ├── item_4  mega-column           Our mobile apps
│       ├── item_5  mega-card green       Estimate my taxes
│       └── item_6  mega-card cream       Big Beautiful Bill tax changes
├── section_tools
│   └── nav_tools
│       ├── item_0  nav-tool              Find an office
│       ├── item_1  nav-tool              Search
│       └── item_2  nav-signin            Sign in to MyBlock
└── section_secondary
    └── nav_secondary
        ├── item_0  nav-secondary-explore Explore All Topics (+ topics dropdown)
        ├── item_1  nav-secondary-link    Life Stages
        ├── item_2  nav-secondary-link    Work
        ├── item_3  nav-secondary-link    Taxes 101
        ├── item_4  nav-secondary-link    Tax Breaks and Money
        └── item_5  nav-secondary-link    What's New
```

CRXDE annotated tree with every link: [packages/README.md](../packages/README.md)

Build **4 sections** in this order:

### 2.1 Nav Brand

| Field | Author freedom | Example |
|-------|----------------|---------|
| Logo Image | DAM reference | H&R Block logo |
| Logo Alt Text | free text | `H&R Block` |
| Logo Link | any page / URL | `/` |
| Accessible Name | free text | `H&R Block` |
| Link Title | free text | optional |

### 2.2 Nav Panel (one per top-nav label)

| Field | Author freedom | Example |
|-------|----------------|---------|
| Top Nav Link | any page / URL | `/taxes/` |
| Top Nav Label | free text | `Taxes` |
| Link Title | free text | optional |

**Children** (add as many as you need — order = left → right / top → bottom in the mega menu):

| Child | Purpose | Key fields |
|-------|---------|------------|
| **Mega Explore** | Large “Explore …” heading link | Link + label (e.g. `Explore taxes`) |
| **Mega Primary Links** | Bold primary link list | Richtext list of links |
| **Mega Column** | Headed column of links | Heading + richtext link list |
| **Mega Card** | Promo tile | Optional DAM image, title, description, **Card Style** (`green` / `cream` / `accent`), optional disclaimer paragraph |

Authors may:

- Add / remove / reorder panels  
- Leave explore, primary, columns, or cards empty  
- Use text-only cards (no image) or image + text cards  

### 2.3 Nav Tools

Inside **Nav Tools**, add items freely:

| Child | Purpose | Key fields |
|-------|---------|------------|
| **Nav Tool** | Utility link (office, search, …) | DAM icon, link, label |
| **Nav Sign In** | Pill CTA | DAM icon, eyebrow (`Sign in to`), primary label (`MyBlock`), link |

Add as many Nav Tools as needed; place Sign In last for typical desktop layout.

### 2.4 Nav Secondary (optional — Tax Center)

Add as **Section 4** of `/nav` (or a page-specific nav XF). Omit this section on pages that should not show the topic bar.

| Child | Purpose | Key fields |
|-------|---------|------------|
| **Nav Secondary Explore** | “Explore All Topics” with grid icon | DAM icon, label, optional topics list |
| **Nav Secondary Link** | Category link in the topic bar | Link + label (Life Stages, Work, Taxes 101, …) |

---

## 3. Footer content tree (Universal Editor + CRXDE)

Page: **Footer** (`/content/NewHRBEds/footer` → EDS `/footer`).

**Preferred:** add one **Footer** section (auto styles: `site-footer` + `green-dark-theme`).

**Alternate:** use a normal Section and set Style → **Site Footer** + **Green Dark Theme**.

Authors still insert **Footer Disclosures** as a sibling of **Footer Support** (EDS cannot nest blocks in UE). After decorate, the footer moves Disclosures **inside** `.footer-support-wrapper` so it sits above “Need support?” in the same support region.

```
footer / jcr:content / root
└── section_footer                    model=footer  style=[site-footer, green-dark-theme]
    ├── footer_disclosures            model=footer-disclosures
    │   ├── item_0  disclosure-group  Full Site Disclaimers
    │   │                             File Online, Tax Software, Retail,
    │   │                             Financial Services, Income Tax Course
    │   └── item_1  disclosure-notes  1. Additional fees apply for tax expert support.
    ├── footer_support                model=footer-support  Need support?
    │   ├── item_0  support-action    Customer help
    │   ├── item_1  support-action    Find an office
    │   └── item_2  support-action    Search
    ├── footer_links                  filter=footer-links
    │   ├── item_0  footer-column     Tax Services + Small Business Services
    │   ├── item_1  footer-column     Tax Tools + Legal
    │   ├── item_2  footer-column     Financial Services + Resources
    │   └── item_3  footer-column     About H&R Block
    ├── footer_legal                  model=footer-legal
    │   ├── item_0  social-link       TikTok
    │   ├── item_1  social-link       Facebook
    │   ├── item_2  social-link       Instagram
    │   ├── item_3  social-link       YouTube
    │   ├── item_4  social-link       X
    │   └── item_5  social-link       LinkedIn
    └── footer_seals                  filter=footer-seals
        ├── item_0  footer-seal       TRUSTe Privacy Certification
        └── item_1  footer-seal       Your Privacy Choices
```

CRXDE annotated tree with every column link: [packages/README.md](../packages/README.md)

### 3.1 Footer Disclosures

Collapsible accordion for offer details. Place it **first** in the Footer section (before Footer Support). The page then loads it **inside** `.footer-support-wrapper`, above the Need support? row.

| Field / child | Author freedom |
|---------------|----------------|
| Heading | free text (e.g. `Offer details and disclosures`) |
| Heading Type | H2 / H3 / H4 |
| **Disclosure Group** × n | Group heading + richtext link list (e.g. Full Site Disclaimers) |
| **Disclosure Notes** | richtext footnotes (e.g. `3. Additional fees apply…`) |

### 3.2 Footer Support

| Field / child | Author freedom |
|---------------|----------------|
| Heading | free text (e.g. `Need support?`) |
| Heading Type | H2 / H3 / H4 |
| **Support Action** × n | DAM icon, link, label — add/remove/reorder freely |

### 3.3 Footer Links

Add **Footer Column** items (typically 4). Each column is richtext:

```html
<h5><strong>Tax Services</strong></h5>
<ul>
  <li><a href="/…">Reschedule or manage appointment</a></li>
  …
</ul>
<h5><strong>Small Business Services</strong></h5>
<ul>…</ul>
```

Authors control headings, link text, URLs, and how many menus sit in each column.

### 3.4 Footer Legal

| Field / child | Author freedom |
|---------------|----------------|
| Legal / Copyright Text | richtext — any paragraphs |
| **Social Link** × n | DAM icon + URL + accessible name |

### 3.5 Footer Seals

| Child | Author freedom |
|-------|----------------|
| **Footer Seal** | DAM image (optional), alt, link, label — image seal **or** text-only link |

---

## 4. Universal Editor step-by-step

### Nav

1. Open `/nav` (or the XF mapped to `/nav`) in Universal Editor.  
2. Add **Section 1** → insert **Nav Brand** → pick logo from DAM, set home link.  
3. Add **Section 2** → for each top nav item insert **Nav Panel** → fill label/link → add Explore / Primary / Columns / Cards as needed.  
4. Add **Section 3** → insert **Nav Tools** → add Nav Tool items + Nav Sign In.  
5. Optionally add **Section 4** → insert **Nav Secondary** (Tax Center topic bar).  
6. Preview on desktop (mega open) and mobile (hamburger).  
7. Publish. Site pages load it via the `header` block.

### Footer

1. Open `/footer` (or footer XF) in Universal Editor.  
2. Add **Footer** (or Section with Site Footer + Green Dark Theme).  
3. Insert **Footer Disclosures** first → heading + Disclosure Group + Notes (optional). It will render inside the Footer Support wrapper.
4. Insert **Footer Support** → heading + Support Actions.
5. Insert **Footer Links** → Footer Columns with richtext menus.
6. Insert **Footer Legal** → copyright + Social Links.
7. Insert **Footer Seals** → seals / privacy links.
8. Publish. Site pages load it via the `footer` block.

---

## 5. Author freedom checklist

| Area | Fully authorable |
|------|------------------|
| Logo & brand link | Yes — DAM + URL |
| Top nav labels & URLs | Yes — any number of Nav Panels |
| Mega explore / primary / columns / cards | Yes — add, remove, reorder |
| Card images & styles | Yes — DAM + green/cream/accent |
| Find office / Search / other utilities | Yes — any number of Nav Tools |
| Sign-in eyebrow, label, icon, URL | Yes |
| Tax Center topic bar | Yes — Nav Secondary (optional section 4) |
| Footer disclosures accordion | Yes — groups + notes |
| Footer heading & support actions | Yes |
| Footer link columns & menus | Yes — richtext |
| Copyright / legal copy | Yes — richtext |
| Social icons | Yes — DAM + URLs |
| Seals & privacy links | Yes — DAM and/or text |

Styling (colors, spacing, mega layout, footer theme) is provided by CSS. Authors do not need to edit code to change content.

---

## 6. Production content reference (optional starting point)

Use live [hrblock.com](https://www.hrblock.com/) as a content checklist when first authoring — copy labels and URLs into UE fields. Do **not** put that content in JavaScript.

**Nav panels often include:** Taxes · Financial products · Business services · Tools and resources  

**Footer support often includes:** Need support? · Customer help · Find an office · Search  

**Footer columns often include:** Tax Services, Small Business Services, Tax Tools, Legal, Financial Services, Resources, About H&R Block  

---

## 7. Developer notes (for implementers)

- `blocks/header/header.js` → `loadFragment(nav metadata || '/nav')`  
- `blocks/footer/footer.js` → `loadFragment(footer metadata || '/footer')`  
- Footer Disclosures is authored as a sibling block. `footer-support.js` and `footer.js` prepend it into `.footer-support-wrapper` so it loads with the support region (preview: `/drafts/footer`).  
- Models live in `blocks/nav-*` and `blocks/footer-*` `_*.json` files; run `npm run build:json` after model changes  
- Section styles `site-footer` / `green-dark-theme` are defined in `models/_section.json` and styled in `styles/lazy-styles.css`  
