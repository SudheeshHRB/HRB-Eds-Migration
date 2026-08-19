---
title: Nav XF Master
description: H&R Block primary navigation + mega menus for Edge Delivery Services
---

# Navigation Experience Fragment

**Live reference:** https://www.hrblock.com/  
**Delivery path:** `/nav` (loaded by the auto `header` block)  
**Authoring guide:** [docs/nav-footer-universal-editor.md](../docs/nav-footer-universal-editor.md)

## Content tree (author in Universal Editor)

```
/content/NewHRBEds/nav     (UE title: Header)
├── Section 1 — Brand
│   └── Nav Brand — DAM logo + home link
├── Section 2 — Mega menus
│   └── Nav Panel × n (Taxes, Financial products, Business services, Tools…)
│       ├── Mega Explore
│       ├── Mega Primary Links
│       ├── Mega Column × n
│       └── Mega Card × n (style: green | cream | accent)
├── Section 3 — Tools
│   └── Nav Tools
│       ├── Nav Tool × n
│       └── Nav Sign In
└── Section 4 — Secondary
    └── Nav Secondary — Explore All Topics + topic links
```

All labels, URLs, and DAM images are authored in UE. Block JS only decorates markup.

## Behavior

- Desktop: click top nav → full-width mega panel + dimmed overlay; underline active item  
- Click links inside mega → navigate  
- Click outside / Escape → close  
- Mobile: hamburger + accordion panels  
