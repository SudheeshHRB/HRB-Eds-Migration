---
title: Nav XF Master
description: H&R Block primary navigation + mega menus for Edge Delivery Services
---

# Navigation Experience Fragment

**Live reference:** https://www.hrblock.com/  
**Delivery path:** `/nav` (loaded by the auto `header` block)

## Architecture

```
/nav page (3 sections — order matters)
├── Section 1 — Brand
│   └── NAV-BRAND — DAM logo + home link
├── Section 2 — Mega menus
│   └── NAV-PANEL × n (Taxes, Financial products, Business services, Tools…)
│       ├── Mega Explore — “Explore taxes →”
│       ├── Mega Primary Links — bold link list
│       ├── Mega Column × n — heading + link list
│       └── Mega Card × n — DAM image + title + description + style
└── Section 3 — Tools
    └── NAV-TOOLS
        ├── NAV-TOOL × n — Find office, Search
        └── NAV-SIGN IN — pill CTA
```

## Nav Panel authoring (matches production dropdowns)

For each top nav label (Taxes, Financial products, …):

1. Add **Nav Panel** → set Top Nav Label + Link  
2. Add **Mega Explore** → e.g. Explore taxes  
3. Add **Mega Primary Links** → richtext list (File online, File with a pro, …)  
4. Add **Mega Column** items → heading + link lists  
5. Add **Mega Card** items → DAM image, title, description, style class (`green` | `cream` | `accent`), optional disclaimer  

No icon/network lists hardcoded — images from DAM, all copy/URLs authored.

## Behavior

- Desktop: click top nav → full-width mega panel + dimmed overlay; underline active item  
- Click links inside mega → navigate  
- Click outside / Escape → close  
- Mobile: hamburger + accordion panels  
