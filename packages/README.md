# AEM content packages — NewHRBEds Header + Footer

Two **separate** CRX packages, matching the Universal Editor page list:

| UE title | Node name | AEM path | EDS path | Package zip |
|----------|-----------|----------|----------|-------------|
| Index | `index` | `/content/NewHRBEds/index` | `/` | *(not in these packages)* |
| Header | `nav` | `/content/NewHRBEds/nav` | `/nav` | `hrb-nav-content-1.0.0.zip` |
| Footer | `footer` | `/content/NewHRBEds/footer` | `/footer` | `hrb-footer-content-1.0.0.zip` |

Site root `/content/NewHRBEds` must already exist. These packages **replace only** `nav` and `footer`.

Node names below are what you see in **CRXDE**. The label in parentheses is the Universal Editor component `name` / `model`.

---

## Site pages (UE list)

```
/content/NewHRBEds
├── index     cq:Page    UE: Index
├── nav       cq:Page    UE: Header     ← hrb-nav-content
└── footer    cq:Page    UE: Footer     ← hrb-footer-content
```

---

## Header — full CRXDE tree

Path: `/content/NewHRBEds/nav`

```
nav                                              cq:Page
└── jcr:content                                  cq:PageContent
    │                                            jcr:title = Header
    │                                            cq:template = /libs/core/franklin/templates/page
    │                                            sling:resourceType = core/franklin/components/page/v1/page
    └── root                                     nt:unstructured  (franklin root)
        │
        ├── section_brand                        section  name=Brand
        │   └── nav_brand                        block    model=nav-brand
        │       │                                imageAlt = H&R Block
        │       │                                link = /
        │       │                                linkText = H&R Block
        │       │                                linkTitle = H&R Block Home
        │       └── (DAM image left empty for author)
        │
        ├── section_mega                         section  name=Mega menus
        │   │
        │   ├── nav_panel_taxes                  block    model=nav-panel
        │   │   │                                link=/taxes/  linkText=Taxes
        │   │   ├── item_0                       item     model=mega-explore
        │   │   │                                link=/taxes/  linkText=Explore taxes
        │   │   ├── item_1                       item     model=mega-primary
        │   │   │                                File online
        │   │   │                                File with a pro
        │   │   │                                Download software
        │   │   │                                Small business taxes
        │   │   ├── item_2                       item     model=mega-column
        │   │   │                                heading=More tax services
        │   │   │                                Second Look® Review
        │   │   │                                Peace of Mind®
        │   │   │                                Tax Identity Shield®
        │   │   │                                Tax Notice Services
        │   │   │                                ITIN application
        │   │   ├── item_3                       item     model=mega-column
        │   │   │                                heading=Your tax appointment
        │   │   │                                Tax appointment prep
        │   │   │                                Manage appointment
        │   │   │                                Español
        │   │   ├── item_4                       item     model=mega-column
        │   │   │                                heading=International
        │   │   │                                Expat taxes
        │   │   │                                International offices
        │   │   ├── item_5                       item     model=mega-card  classes=green
        │   │   │                                File with a tax pro
        │   │   └── item_6                       item     model=mega-card  classes=cream
        │   │                                    File online
        │   │
        │   ├── nav_panel_financial              block    model=nav-panel
        │   │   │                                link=/financial-services/
        │   │   │                                linkText=Financial products
        │   │   ├── item_0                       item     model=mega-explore
        │   │   │                                Explore financial products
        │   │   ├── item_1                       item     model=mega-primary
        │   │   │                                Refund Transfer
        │   │   │                                Spruce
        │   │   │                                Emerald Card®
        │   │   ├── item_2                       item     model=mega-column
        │   │   │                                heading=Loans
        │   │   │                                Explore loans
        │   │   │                                Refund Advance Loan
        │   │   │                                Emerald Advance® Loan
        │   │   ├── item_3                       item     model=mega-column
        │   │   │                                heading=Spruce
        │   │   │                                Explore Spruce / Features / Sign up / Log in
        │   │   └── item_4                       item     model=mega-card  classes=accent
        │   │                                    Make the most of every dollar with Spruce
        │   │
        │   ├── nav_panel_business               block    model=nav-panel
        │   │   │                                link=/tax-offices/business-services/
        │   │   │                                linkText=Business services
        │   │   ├── item_0                       item     model=mega-primary
        │   │   │                                Small business taxes
        │   │   │                                Bookkeeping
        │   │   │                                Payroll
        │   │   │                                Business formation
        │   │   ├── item_1                       item     model=mega-column
        │   │   │                                heading=Small business taxes
        │   │   │                                Explore / Self-Employed / S corps / C corps / Partnerships
        │   │   ├── item_2                       item     model=mega-column
        │   │   │                                heading=Form your business
        │   │   │                                Explore business formation
        │   │   │                                Help me choose
        │   │   ├── item_3                       item     model=mega-card  classes=green
        │   │   │                                File my business taxes
        │   │   └── item_4                       item     model=mega-card  classes=cream
        │   │                                    The Creator Suite
        │   │
        │   └── nav_panel_tools                  block    model=nav-panel
        │       │                                link=/tax-center/
        │       │                                linkText=Tools and resources
        │       ├── item_0                       item     model=mega-explore
        │       │                                Visit the Resource Center
        │       ├── item_1                       item     model=mega-primary
        │       │                                Tax calculator
        │       │                                Tax prep checklist
        │       │                                W-4 calculator
        │       │                                Where's my refund
        │       │                                Tax questions
        │       ├── item_2                       item     model=mega-column
        │       │                                heading=Tax articles
        │       │                                Life stages / Work / Taxes 101 / Tax Breaks and Money
        │       ├── item_3                       item     model=mega-column
        │       │                                heading=Help center
        │       │                                Visit the Help Center
        │       │                                Online filing / Tax pro / Tax software support
        │       ├── item_4                       item     model=mega-column
        │       │                                heading=Our mobile apps
        │       │                                View our mobile apps / MyBlock® / Spruce mobile banking
        │       ├── item_5                       item     model=mega-card  classes=green
        │       │                                Estimate my taxes
        │       └── item_6                       item     model=mega-card  classes=cream
        │                                        Big Beautiful Bill tax changes
        │
        ├── section_tools                        section  name=Tools
        │   └── nav_tools                        block    filter=nav-tools
        │       ├── item_0                       item     model=nav-tool
        │       │                                Find an office  → /tax-offices/local/
        │       ├── item_1                       item     model=nav-tool
        │       │                                Search  → #site-search
        │       └── item_2                       item     model=nav-signin
        │                                        eyebrow=Sign in to
        │                                        linkText=MyBlock  → /myblock/
        │
        └── section_secondary                    section  name=Secondary
            └── nav_secondary                    block    filter=nav-secondary
                ├── item_0                       item     model=nav-secondary-explore
                │                                Explore All Topics  → /tax-center/
                │                                topics dropdown:
                │                                  Life Stages / Work / Taxes 101 /
                │                                  Tax Breaks and Money / What's New
                ├── item_1                       item     model=nav-secondary-link
                │                                Life Stages  → /tax-center/life-stages/
                ├── item_2                       item     model=nav-secondary-link
                │                                Work  → /tax-center/work/
                ├── item_3                       item     model=nav-secondary-link
                │                                Taxes 101  → /tax-center/taxes-101/
                ├── item_4                       item     model=nav-secondary-link
                │                                Tax Breaks and Money  → /tax-center/tax-breaks-and-money/
                └── item_5                       item     model=nav-secondary-link
                                                 What's New  → /tax-center/whats-new/
```

---

## Footer — full CRXDE tree

Path: `/content/NewHRBEds/footer`

```
footer                                           cq:Page
└── jcr:content                                  cq:PageContent
    │                                            jcr:title = Footer
    │                                            cq:template = /libs/core/franklin/templates/page
    │                                            sling:resourceType = core/franklin/components/page/v1/page
    └── root                                     nt:unstructured  (franklin root)
        └── section_footer                       section  model=hrblock-footer
            │                                    name=Site Footer
            │                                    style=[site-footer, green-dark-theme]
            │
            ├── footer_disclosures               block    model=footer-disclosures
            │   │                                title=Offer details and disclosures
            │   │                                titleType=h2
            │   ├── item_0                       item     model=disclosure-group
            │   │                                heading=Full Site Disclaimers
            │   │                                File Online
            │   │                                Tax Software
            │   │                                Retail
            │   │                                Financial Services
            │   │                                Income Tax Course
            │   └── item_1                       item     model=disclosure-notes
            │                                    1. Additional fees apply for tax expert support.
            │
            ├── footer_support                   block    model=footer-support
            │   │                                title=Need support?
            │   │                                titleType=h2
            │   ├── item_0                       item     model=support-action
            │   │                                Customer help  → /support/
            │   ├── item_1                       item     model=support-action
            │   │                                Find an office  → /tax-offices/local/
            │   └── item_2                       item     model=support-action
            │                                    Search  → #site-search
            │
            ├── footer_links                     block    filter=footer-links
            │   ├── item_0                       item     model=footer-column
            │   │                                Tax Services
            │   │                                  Reschedule or manage appointment
            │   │                                  Online tax filing
            │   │                                  File with a tax pro
            │   │                                  Free online tax filing
            │   │                                  Tax software
            │   │                                  Second Look Review
            │   │                                  Peace of Mind
            │   │                                  Tax Identity Shield
            │   │                                  Audit & Tax Notice Support
            │   │                                  Expat tax services
            │   │                                Small Business Services
            │   │                                  Block Advisors
            │   │                                  Small business taxes
            │   │                                  Small business bookkeeping
            │   │                                  Small business payroll
            │   │                                  Business formation services
            │   │                                  Wave Financial
            │   ├── item_1                       item     model=footer-column
            │   │                                Tax Tools
            │   │                                  MyBlock
            │   │                                  Mobile apps
            │   │                                  Tax calculator
            │   │                                  Tax prep checklist
            │   │                                  Appointment Prep Guide
            │   │                                  Refund & payment options
            │   │                                  Tax payment center
            │   │                                  Where's my refund?
            │   │                                  W-4 calculator
            │   │                                Legal
            │   │                                  Terms
            │   │                                  Privacy notice
            │   │                                  Pathward privacy notice
            │   ├── item_2                       item     model=footer-column
            │   │                                Financial Services
            │   │                                  Explore loans
            │   │                                  Spruce
            │   │                                  Emerald Card
            │   │                                  Refund Transfer
            │   │                                  Emerald Advance Loan
            │   │                                  Refund Advance
            │   │                                Resources
            │   │                                  Customer help & support
            │   │                                  Tax questions
            │   │                                  Office locations
            │   │                                  International locations
            │   │                                  Sitemap
            │   └── item_3                       item     model=footer-column
            │                                    About H&R Block
            │                                      About us
            │                                      Make Every Block Better
            │                                      Careers
            │                                      Buy or sell an office
            │                                      Income tax course
            │                                      News Center
            │                                      Investor relations
            │                                      The Tax Institute
            │                                      Guarantees
            │
            ├── footer_legal                     block    model=footer-legal
            │   │                                legal = copyright + Pathward / FDIC copy
            │   ├── item_0                       item     model=social-link   TikTok
            │   ├── item_1                       item     model=social-link   Facebook
            │   ├── item_2                       item     model=social-link   Instagram
            │   ├── item_3                       item     model=social-link   YouTube
            │   ├── item_4                       item     model=social-link   X
            │   └── item_5                       item     model=social-link   LinkedIn
            │
            └── footer_seals                     block    filter=footer-seals
                ├── item_0                       item     model=footer-seal
                │                                TRUSTe Privacy Certification
                └── item_1                       item     model=footer-seal
                                                 Your Privacy Choices
```

---

## How nodes map in CRXDE vs Universal Editor

| CRXDE node | `sling:resourceType` | UE type |
|------------|----------------------|---------|
| `nav`, `footer` | `cq:Page` | Page |
| `jcr:content` | `core/franklin/components/page/v1/page` | Page content |
| `root` | `core/franklin/components/root/v1/root` | Page root |
| `section_*` | `core/franklin/components/section/v1/section` | Section |
| `nav_brand`, `nav_panel_*`, `nav_tools`, `nav_secondary`, `footer_*` | `core/franklin/components/block/v1/block` | Block |
| `item_*` | `core/franklin/components/block/v1/block/item` | Block item (child) |

Image / DAM fields are left empty in the package. After install, authors pick logo, icons, mega-card photos, social icons, and seals in Universal Editor.

---

## Install

1. Author → **Tools → Deployment → Packages** (`/crx/packmgr`)
2. Upload **`packages/hrb-nav-content-1.0.0.zip`** → Install
3. Upload **`packages/hrb-footer-content-1.0.0.zip`** → Install
4. CRXDE: `/content/NewHRBEds/nav` and `/content/NewHRBEds/footer`
5. Universal Editor: Header + Footer → assign DAM images
6. Publish (Preview) so EDS receives `/nav` and `/footer`

Rebuild zips: `npm run package:nav-footer`
