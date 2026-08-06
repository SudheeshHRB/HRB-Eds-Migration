---
title: Footer XF Master
description: H&R Block site footer — Experience Fragment for Edge Delivery Services
---

# Footer Experience Fragment

**Live reference:** https://hrbcomlnp.hrblock.com/  
**XF path:** `/content/experience-fragments/hrblock/us/en/site/footer/master`  
**Delivery path:** `/footer` (loaded by the auto `footer` block)

## Architecture

```
Footer XF master
└── SECTION (hrblock-footer) — site-footer green-dark-theme
    ├── FOOTER-SUPPORT — heading + support-action items
    ├── FOOTER-LINKS — footer-column items (richtext menus)
    ├── FOOTER-LEGAL — legal richtext + social-link items
    └── FOOTER-SEALS — footer-seal items (image and/or text links)
```

All copy, URLs, icons, and seals are authored in Universal Editor. Block JS only decorates markup — no hardcoded content.

## Reusable blocks

| Block | Children | Authorable fields |
|-------|----------|-------------------|
| **footer-support** | `support-action` | Heading; per action: DAM icon, link, label |
| **footer-links** | `footer-column` | Per column: richtext (H5 + link lists) |
| **footer-legal** | `social-link` | Legal richtext; per social: DAM icon + link |
| **footer-seals** | `footer-seal` | Per seal: DAM image, alt, link, label |

Icons and seal images are selected from DAM — no hardcoded icon lists.

## Universal Editor authoring

1. Create / open the footer XF (or `/footer` page).
2. Add **H&R Block Footer** section (theme: Green Dark Theme).
3. Inside it, add:
   - **Footer Support** → set heading → add Support Action items
   - **Footer Links** → add Footer Column items with menu richtext
   - **Footer Legal** → set legal copy → add Social Link items
   - **Footer Seals** → add Footer Seal items (DAM image and/or text link)
4. Publish. Pages pick it up via the standard footer fragment (`footer` metadata or `/footer`).

## Production content checklist (author in UE — do not hardcode)

**Support:** Need support? → Customer help `/support/` · Find an office `#find-office` · Search `#site-search`

**Link columns:** Tax Services, Small Business, Tax Tools, Legal, Financial Services, Resources, About H&R Block

**Legal:** Copyright / Pathward / FDIC copy + TikTok, Facebook, Instagram, YouTube, LinkedIn

**Seals:** TRUSTe seal image + Your Privacy Choices link
