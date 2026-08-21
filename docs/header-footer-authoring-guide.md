# Header & Footer — Complete Authoring Details

**Pages to author**

| Surface | AEM path | EDS path |
|---------|----------|----------|
| Header | `/content/NewHRBEds/nav` | `/nav` |
| Footer | `/content/NewHRBEds/footer` | `/footer` |

**Author only text and links** (labels, URLs, richtext, headings, styles).  
Icon/image assets are optional and not covered here — leave them blank or keep existing DAM picks.

Use a **Header** section for nav blocks and a **Footer** section for footer blocks.

---

# HEADER (`/nav`)

## Content tree

```
Header
├── Section 1 — Nav Family
│   ├── Family Brand — H&R Block (Active)
│   ├── Family Brand — Block Advisors
│   └── Family Brand — Spruce
├── Section 2 — Nav Brand
├── Section 3 — Mega menus
│   ├── Nav Panel — Taxes
│   ├── Nav Panel — Financial products
│   ├── Nav Panel — Business services
│   └── Nav Panel — Tools and resources
├── Section 4 — Nav Tools
│   ├── Nav Tool — Find an office
│   ├── Nav Tool — Search
│   └── Nav Sign In
└── Section 5 — Nav Secondary (Tax Center)
    ├── Nav Secondary Explore
    ├── Nav Secondary Link — Life Stages
    ├── Nav Secondary Link — Work
    ├── Nav Secondary Link — Taxes 101
    ├── Nav Secondary Link — Tax Breaks and Money
    └── Nav Secondary Link — What's New
```

---

## 1. Nav Family

| Item | Brand Label | Brand Link | Link Title | Style |
|------|-------------|------------|------------|-------|
| 1 | H&R Block | `/` | H&R Block | Active (white pill) |
| 2 | Block Advisors | `https://www.blockadvisors.com/` | Block Advisors | Default |
| 3 | Spruce | `/financial-services/spruce/` | Spruce | Default |

**UE fields:** Brand Label · Brand Link · Link Title · Style  
Authors may add/remove/reorder brands and change any label or URL.

---

## 2. Nav Brand

| Field | Value |
|-------|-------|
| Logo Link | `/` |
| Accessible Name | H&R Block |
| Link Title | H&R Block Home |

---

## 3. Nav Panel — Taxes

### Panel fields

| Field | Value |
|-------|-------|
| Top Nav Label | Taxes |
| Top Nav Link | `/taxes/` |
| Link Title | Taxes |

### Children (author in this order)

#### Mega Explore

| Field | Value |
|-------|-------|
| Explore Label | Explore taxes |
| Explore Link | `/taxes/` |
| Link Title | Explore taxes |

#### Mega Primary Links (richtext)

| Label | URL |
|-------|-----|
| File online | `/online-tax-filing/` |
| File with a pro | `/tax-offices/` |
| Download software | `/tax-software/` |
| Small business taxes | `/tax-offices/business-services/small-business-tax/` |

#### Mega Column — More tax services

| Field | Value |
|-------|-------|
| Column Heading | More tax services |

| Label | URL |
|-------|-----|
| Second Look® Review | `/tax-offices/extended-tax-services/past-taxes/` |
| Peace of Mind® | `/tax-offices/tax-prep/extended-service/` |
| Tax Identity Shield® | `/tax-offices/product-services/tax-identity-shield/` |
| Tax Notice Services | `/guarantees/` |
| ITIN application | `/tax-offices/extended-tax-services/itin/` |

#### Mega Column — Your tax appointment

| Field | Value |
|-------|-------|
| Column Heading | Your tax appointment |

| Label | URL |
|-------|-----|
| Tax appointment prep | `/tax-appointment-preparation/` |
| Manage appointment | `/tax-offices/manage-appointment/` |
| Español | `/es/` |

#### Mega Column — International

| Field | Value |
|-------|-------|
| Column Heading | International |

| Label | URL |
|-------|-----|
| Expat taxes | `/tax-offices/extended-tax-services/expat/` |
| International offices | `/tax-offices/international/` |

#### Mega Card 1

| Field | Value |
|-------|-------|
| Card Title | File with a tax pro |
| Card Link | `/tax-offices/` |
| Link Title | File with a tax pro |
| Description | Get expert help from a tax pro online, or visit an office. |
| Card Style | green |

#### Mega Card 2

| Field | Value |
|-------|-------|
| Card Title | File online |
| Card Link | `/online-tax-filing/` |
| Link Title | File online |
| Description | Use step-by-step instructions to file your own taxes at your own pace. |
| Card Style | cream |

---

## 4. Nav Panel — Financial products

### Panel fields

| Field | Value |
|-------|-------|
| Top Nav Label | Financial products |
| Top Nav Link | `/financial-services/` |
| Link Title | Financial products |

### Children

#### Mega Explore

| Field | Value |
|-------|-------|
| Explore Label | Explore financial products |
| Explore Link | `/financial-services/` |
| Link Title | Explore financial products |

#### Mega Primary Links

| Label | URL |
|-------|-----|
| Refund Transfer | `/financial-services/tax-refund-payment/` |
| Spruce | `/financial-services/spruce/` |
| Emerald Card® | `/financial-services/emerald-card-services/` |

#### Mega Column — Loans

| Field | Value |
|-------|-------|
| Column Heading | Loans |

| Label | URL |
|-------|-----|
| Explore loans | `/financial-services/emerald-advance-loan-vs-refund-advance/` |
| Refund Advance Loan | `/offers/refund-advance/` |
| Emerald Advance® Loan | `/financial-services/emerald-advance/` |

#### Mega Column — Spruce

| Field | Value |
|-------|-------|
| Column Heading | Spruce |

| Label | URL |
|-------|-----|
| Explore Spruce | `/financial-services/spruce/` |
| Features | `/financial-services/spruce/features/` |
| Sign up | `/financial-services/spruce/sign-up/` |
| Log in | `/financial-services/spruce/log-in/` |

#### Mega Card

| Field | Value |
|-------|-------|
| Card Title | Make the most of every dollar with Spruce |
| Card Link | `/financial-services/spruce/` |
| Link Title | Make the most of every dollar with Spruce |
| Description | Spruce is an all-in-one mobile banking app by H&R Block to help you manage your money. |
| Disclaimer (2nd paragraph) | Bank products by Pathward®, N.A., Member FDIC. |
| Card Style | accent |

---

## 5. Nav Panel — Business services

### Panel fields

| Field | Value |
|-------|-------|
| Top Nav Label | Business services |
| Top Nav Link | `/tax-offices/business-services/` |
| Link Title | Business services |

### Children

#### Mega Primary Links

| Label | URL |
|-------|-----|
| Small business taxes | `/tax-offices/business-services/small-business-tax/` |
| Bookkeeping | `/tax-offices/business-services/small-business-bookkeeping-services/` |
| Payroll | `/tax-offices/business-services/small-business-payroll-services/` |
| Business formation | `/tax-offices/business-services/` |

#### Mega Column — Small business taxes

| Field | Value |
|-------|-------|
| Column Heading | Small business taxes |

| Label | URL |
|-------|-----|
| Explore small business taxes | `/tax-offices/business-services/small-business-tax/` |
| Self-Employed | `/tax-offices/business-services/small-business-tax/self-employed/` |
| S corps | `/tax-offices/business-services/small-business-tax/s-corps/` |
| C corps | `/tax-offices/business-services/small-business-tax/c-corps/` |
| Partnerships | `/tax-offices/business-services/small-business-tax/partnerships/` |

#### Mega Column — Form your business

| Field | Value |
|-------|-------|
| Column Heading | Form your business |

| Label | URL |
|-------|-----|
| Explore business formation | `/tax-offices/business-services/` |
| Help me choose | `/tax-offices/business-services/help-me-choose/` |

#### Mega Card 1

| Field | Value |
|-------|-------|
| Card Title | File my business taxes |
| Card Link | `/tax-offices/business-services/small-business-tax/` |
| Link Title | File my business taxes |
| Description | File yourself or with a small business certified tax professional. |
| Card Style | green |

#### Mega Card 2

| Field | Value |
|-------|-------|
| Card Title | The Creator Suite |
| Card Link | `/tax-offices/business-services/creator-suite/` |
| Link Title | The Creator Suite |
| Description | Get the tips and tools creators need for filing taxes and growing your business. |
| Card Style | cream |

---

## 6. Nav Panel — Tools and resources

### Panel fields

| Field | Value |
|-------|-------|
| Top Nav Label | Tools and resources |
| Top Nav Link | `/tax-center/` |
| Link Title | Tools and resources |

### Children

#### Mega Explore

| Field | Value |
|-------|-------|
| Explore Label | Visit the Resource Center |
| Explore Link | `/tax-center/` |
| Link Title | Visit the Resource Center |

#### Mega Primary Links

| Label | URL |
|-------|-----|
| Tax calculator | `/tax-calculator/` |
| Tax prep checklist | `/tax-prep-checklist/` |
| W-4 calculator | `/w-4-calculator/` |
| Where's my refund | `/wheres-my-refund/` |
| Tax questions | `/tax-questions/` |

#### Mega Column — Tax articles

| Field | Value |
|-------|-------|
| Column Heading | Tax articles |

| Label | URL |
|-------|-----|
| Life stages | `/tax-center/life-stages/` |
| Work | `/tax-center/work/` |
| Taxes 101 | `/tax-center/taxes-101/` |
| Tax Breaks and Money | `/tax-center/tax-breaks-and-money/` |

#### Mega Column — Help center

| Field | Value |
|-------|-------|
| Column Heading | Help center |

| Label | URL |
|-------|-----|
| Visit the Help Center | `/support/` |
| Online filing support | `/support/online-filing/` |
| Tax pro support | `/support/tax-pro/` |
| Tax software support | `/support/tax-software/` |

#### Mega Column — Our mobile apps

| Field | Value |
|-------|-------|
| Column Heading | Our mobile apps |

| Label | URL |
|-------|-----|
| View our mobile apps | `/mobile/` |
| MyBlock® | `/myblock-benefits/` |
| Spruce mobile banking | `/financial-services/spruce/` |

#### Mega Card 1

| Field | Value |
|-------|-------|
| Card Title | Estimate my taxes |
| Card Link | `/tax-calculator/` |
| Link Title | Estimate my taxes |
| Description | Use a tax calculator to estimate your refund or the amount you may owe. |
| Card Style | green |

#### Mega Card 2

| Field | Value |
|-------|-------|
| Card Title | Big Beautiful Bill tax changes |
| Card Link | `/tax-center/obbba/` |
| Link Title | Big Beautiful Bill tax changes |
| Description | Learn how OBBBA changes taxes for individuals, families, and businesses. |
| Card Style | cream |

---

## 7. Nav Tools

| Child | Label / copy | Link | Link Title |
|-------|--------------|------|------------|
| Nav Tool | Find an office | `/tax-offices/local/` | Find an office |
| Nav Tool | Search | `#site-search` | Search |
| Nav Sign In | Eyebrow: `Sign in to` · Primary Label: `MyBlock` | `/myblock/` | Sign in to MyBlock |

Authors may add more Nav Tool items or change any label/URL.

---

## 8. Nav Secondary (Tax Center topic bar)

### Nav Secondary Explore

| Field | Value |
|-------|-------|
| Label | Explore All Topics |
| Fallback Link | `/tax-center/` |
| Link Title | Explore All Topics |

**All Topics List (dropdown richtext)**

| Label | URL |
|-------|-----|
| Life Stages | `/tax-center/life-stages/` |
| Work | `/tax-center/work/` |
| Taxes 101 | `/tax-center/taxes-101/` |
| Tax Breaks and Money | `/tax-center/tax-breaks-and-money/` |
| What's New | `/tax-center/whats-new/` |

### Nav Secondary Links (bar)

| Label | URL | Link Title |
|-------|-----|------------|
| Life Stages | `/tax-center/life-stages/` | Life Stages |
| Work | `/tax-center/work/` | Work |
| Taxes 101 | `/tax-center/taxes-101/` | Taxes 101 |
| Tax Breaks and Money | `/tax-center/tax-breaks-and-money/` | Tax Breaks and Money |
| What's New | `/tax-center/whats-new/` | What's New |

Omit this entire section on pages that should not show the Tax Center topic bar.

---

## Header — UE steps

1. Open `/content/NewHRBEds/nav`.  
2. Add **Header** section → **Nav Family** → 3 Family Brands (table above).  
3. Add **Header** section → **Nav Brand** → link + accessible name.  
4. Add **Header** section → 4 **Nav Panels** (Taxes, Financial, Business, Tools) → fill children from tables.  
5. Add **Header** section → **Nav Tools** → Find an office, Search, Sign In.  
6. Add **Header** section → **Nav Secondary** → Explore + 5 topic links.  
7. Preview → Publish.

---

# FOOTER (`/footer`)

## Content tree

```
Footer   (Style: Site Footer + Green Dark Theme)
├── Footer Disclosures
│   ├── Disclosure Group × n
│   └── Disclosure Notes (optional)
├── Footer Support
│   └── Support Action × n
├── Footer Links
│   └── Footer Column × 4
├── Footer Legal
│   └── Social Link × n
└── Footer Seals
    └── Footer Seal × n
```

Author **Footer Disclosures first**, then Support, Links, Legal, Seals.

---

## 1. Footer Disclosures

| Field | Value |
|-------|-------|
| Heading | Offer details and disclosures |
| Heading Type | H2 |

### Disclosure Groups

| Group heading | Notes / links (richtext) |
|---------------|--------------------------|
| Full Site Disclaimers | `3. Additional fees apply for tax expert support.` |
| File Online | `22. H&R Block Free Online is for simple returns only. Not everyone qualifies. All tax situations are different. Additional fees may apply.` · `26. Enrolled Agents do not provide legal representation; signed Power of Attorney required.` |
| Tax Software | `41. Personal state programs are $39.95 each (state e-file available for $19.95).` |
| Retail | `87. Comparison based on starting price for H&R Block file with a tax pro. Prices may vary by office.` |
| Financial Services | `109. This is an optional tax refund-related loan from Pathward, N.A.; it is not your tax refund.` |
| Income Tax Course | `160. Enrollment in, or completion of, the H&R Block Income Tax Course is neither an offer nor a guarantee of employment.` |

Authors may add/remove groups and edit all note text.

---

## 2. Footer Support

| Field | Value |
|-------|-------|
| Heading | Need support? |
| Heading Type | H2 |

### Support Actions (label + link only)

| Label | Link | Link Title |
|-------|------|------------|
| Customer help | `/support/` | Customer help |
| Find an office | `/tax-offices/local/` | Find an office |
| Search | `#site-search` | Search |

---

## 3. Footer Links — 4 columns

Each **Footer Column** is one richtext field. Use `H5` for menu titles and lists for links.

### Column 1

#### Tax Services

| Label | URL |
|-------|-----|
| Reschedule or manage appointment | `/tax-offices/manage-appointment/` |
| Online tax filing | `/online-tax-filing/` |
| File with a tax pro | `/tax-offices/` |
| Free online tax filing | `/online-tax-filing/free-online-tax-filing/` |
| Tax software | `/tax-software/` |
| Second Look Review | `/tax-offices/extended-tax-services/past-taxes/` |
| Peace of Mind | `/tax-offices/tax-prep/extended-service/` |
| Tax Identity Shield | `/tax-offices/product-services/tax-identity-shield/` |
| Audit & Tax Notice Support | `/guarantees/` |
| Expat tax services | `/tax-offices/extended-tax-services/expat/` |

#### Small Business Services

| Label | URL |
|-------|-----|
| Block Advisors | `https://www.blockadvisors.com/` |
| Small business taxes | `/tax-offices/business-services/small-business-tax/` |
| Small business bookkeeping | `/tax-offices/business-services/small-business-bookkeeping-services/` |
| Small business payroll | `/tax-offices/business-services/small-business-payroll-services/` |
| Business formation services | `/tax-offices/business-services/` |
| Wave Financial | `https://www.waveapps.com/` |

### Column 2

#### Tax Tools

| Label | URL |
|-------|-----|
| MyBlock | `/myblock-benefits/` |
| Mobile apps | `/mobile/` |
| Tax calculator | `/tax-calculator/` |
| Tax prep checklist | `/tax-prep-checklist/` |
| Appointment Prep Guide | `/tax-appointment-preparation/` |
| Refund & payment options | `/financial-services/tax-refund-payment/` |
| Tax payment center | `/tax-payment-center/` |
| Where's my refund? | `/wheres-my-refund/` |
| W-4 calculator | `/w-4-calculator/` |

#### Legal

| Label | URL |
|-------|-----|
| Terms | `/universal/terms/` |
| Privacy notice | `/universal/digital-online-mobile-privacy-principles/` |
| Manage Cookie Settings | `#manage-cookies` |
| California privacy notice | `/universal/california-privacy-notice/` |

### Column 3

#### Financial Services

| Label | URL |
|-------|-----|
| Explore loans | `/financial-services/emerald-advance-loan-vs-refund-advance/` |
| Spruce | `/financial-services/spruce/` |
| Emerald Card | `/financial-services/emerald-card-services/` |
| Refund Transfer | `/financial-services/tax-refund-payment/` |
| Emerald Advance Loan | `/financial-services/emerald-advance/` |
| Refund Advance | `/offers/refund-advance/` |

#### Resources

| Label | URL |
|-------|-----|
| Customer help & support | `/support/` |
| Tax questions | `/tax-questions/` |
| Office locations | `/tax-offices/local/` |
| International locations | `/tax-offices/international/` |
| Sitemap | `/taxes-site-index/` |

### Column 4

#### About H&R Block

| Label | URL |
|-------|-----|
| About us | `/corporate/` |
| Make Every Block Better | `/corporate/make-every-block-better/` |
| Careers | `https://careers.hrblock.com` |
| Buy or sell an office | `/corporate/franchise/` |
| Income tax course | `/income-tax-course/` |
| News Center | `/newsroom/` |
| Investor relations | `https://investors.hrblock.com/` |
| The Tax Institute | `/tax-center/irs/` |
| Guarantees | `/guarantees/` |

---

## 4. Footer Legal

### Legal / Copyright Text (richtext)

```
Copyright © 2023-2024 HRB Digital LLC. All Rights Reserved.

Bank products and services are offered by Pathward®, N.A.

All deposit accounts through Pathward® are FDIC insured.
```

### Social Links (label + URL only)

| Label / Link Title | URL |
|--------------------|-----|
| TikTok | `https://www.tiktok.com/@hrblock` |
| Facebook | `https://www.facebook.com/hrblock` |
| Instagram | `https://www.instagram.com/hrblock/` |
| X | `https://twitter.com/hrblock` |
| YouTube | `https://www.youtube.com/hrblock` |
| LinkedIn | `https://www.linkedin.com/company/h%26r-block` |

---

## 5. Footer Seals (label + link only)

| Label / Link Title | URL |
|--------------------|-----|
| TRUSTe Certified Privacy | `https://privacy.truste.com/privacy-seal/validation?rid=d3f53dd3-a8a0-4f4e-84aa-56378ed8565d` |
| Your Privacy Choices | `https://submit-irm.trustarc.com/services/validation/aa9303a8-87ee-42b9-b4db-84819fdef107` |

---

## Footer — UE steps

1. Open `/content/NewHRBEds/footer`.  
2. Add **Footer** section (Site Footer + Green Dark Theme).  
3. **Footer Disclosures** → heading + groups from table.  
4. **Footer Support** → `Need support?` + 3 actions.  
5. **Footer Links** → 4 columns with all menus/links above.  
6. **Footer Legal** → copyright paragraphs + social labels/URLs.  
7. **Footer Seals** → TRUSTe + Your Privacy Choices labels/URLs.  
8. Preview → Publish.

---

## Author freedom

| Can change in UE | Cannot change in UE |
|------------------|---------------------|
| Every label, URL, heading, richtext | Layout, colors, spacing |
| Add / remove / reorder panels, columns, items | Mega open / hamburger behavior |
| Card style (`green` / `cream` / `accent`) | Theme CSS |
| Family brand Active vs Default | — |
| Omit Nav Secondary on non–Tax Center pages | — |

All values above are starting defaults. Authors can edit any text or link after the page is created.
