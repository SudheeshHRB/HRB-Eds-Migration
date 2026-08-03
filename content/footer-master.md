---
title: Footer XF Master
description: H&R Block site footer — Experience Fragment for Edge Delivery Services
---

# Footer Experience Fragment

**Live reference:** https://hrbcomlnp.hrblock.com/  
**XF path:** `/content/experience-fragments/hrblock/us/en/site/footer/master`

## Block Tree (matches flowchart)

```
Footer XF master
└── SECTION (hrblock-footer) — green-dark-theme / site-footer
    ├── SECTION S1 — Need Support
    │   └── FOOTER-SUPPORT (custom) — title + 3 CTAs
    ├── SECTION S2 — Link Columns
    │   └── FOOTER-LINKS (custom) — 4 cols, 7 menus, 48 links
    ├── SECTION S3 — Legal and Social
    │   └── FOOTER-LEGAL (custom) — copyright + 5 socials
    └── SECTION S4 — Seals
        └── FOOTER-SEALS (custom) — TRUSTe + Privacy Choices
```

---

## S1 — Need Support (`footer-support`)

| Field | Value |
|-------|-------|
| title | Need support? |
| help_label / help_link | Customer help → `/support/` |
| office_label / office_action | Find an office → `#find-office` |
| search_label / search_action | Search → `#site-search` |

---

## S2 — Footer Links (`footer-links`)

| Column | Menus |
|--------|-------|
| Col 1 | Tax Services (10) + Small Business Services (6) |
| Col 2 | Tax Tools (9) + Legal (3) |
| Col 3 | Financial Services (6) + Resources (5) |
| Col 4 | About H&R Block (9) |

---

## S3 — Legal + Social (`footer-legal`)

Copyright © 2025-2026 HRB Digital LLC. All Rights Reserved.  
Bank products and services are offered by Pathward®, N.A.  
All deposit accounts through Pathward® are FDIC insured.

| Network | URL |
|---------|-----|
| TikTok | https://www.tiktok.com/@hrblock |
| Facebook | https://www.facebook.com/hrblock |
| Instagram | https://www.instagram.com/hrblock/ |
| YouTube | https://www.youtube.com/hrblock |
| LinkedIn | https://www.linkedin.com/company/h&r-block |

---

## S4 — Seals (`footer-seals`)

| Field | Value |
|-------|-------|
| seal_src | `//privacy-policy.truste.com/privacy-seal/seal?rid=d3f53dd3-a8a0-4f4e-84aa-56378ed8565d` |
| seal_href | `//privacy.truste.com/privacy-seal/validation?rid=d3f53dd3-a8a0-4f4e-84aa-56378ed8565d` |
| privacy_label | Your Privacy Choices |
| privacy_href | TrustArc validation URL |

---

## Universal Editor authoring steps

1. Create XF at the path above.
2. Drop **H&R Block Footer** (root section, theme `green-dark-theme`).
3. Add four child sections (or drop blocks directly under root):
   - **Footer Support**
   - **Footer Links** (pre-seeded with production links)
   - **Footer Legal**
   - **Footer Seals**
4. Reference XF from page templates via footer fragment / experience fragment.
