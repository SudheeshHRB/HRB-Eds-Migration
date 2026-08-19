---
title: Footer XF Master
description: H&R Block site footer — Experience Fragment for Edge Delivery Services
---

# Footer Experience Fragment

**Live reference:** https://www.hrblock.com/  
**Delivery path:** `/footer` (loaded by the auto `footer` block)  
**Authoring guide:** [docs/nav-footer-universal-editor.md](../docs/nav-footer-universal-editor.md)

## Content tree (author in Universal Editor)

```
/content/NewHRBEds/footer     (UE title: Footer)
└── H&R Block Footer   (site-footer + green-dark-theme)
    ├── Footer Disclosures — groups + notes
    ├── Footer Support — heading + Support Action items
    ├── Footer Links — Footer Column items (richtext menus)
    ├── Footer Legal — legal richtext + Social Link items
    └── Footer Seals — Footer Seal items (image and/or text links)
```

All copy, URLs, icons, and seals are authored in Universal Editor. Block JS only decorates markup.

## Reusable blocks

| Block | Children | Authorable fields |
|-------|----------|-------------------|
| **footer-support** | `support-action` | Heading; per action: DAM icon, link, label |
| **footer-links** | `footer-column` | Per column: richtext (H5 + link lists) |
| **footer-legal** | `social-link` | Legal richtext; per social: DAM icon + link |
| **footer-seals** | `footer-seal` | Per seal: DAM image, alt, link, label |
