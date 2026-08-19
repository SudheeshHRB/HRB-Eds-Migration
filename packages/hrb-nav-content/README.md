# Header / Nav — AEM content package

| | |
|--|--|
| UE title | Header |
| Node name | `nav` |
| AEM path | `/content/NewHRBEds/nav` |
| EDS path | `/nav` |
| Zip | `packages/hrb-nav-content-1.0.0.zip` |

Does **not** touch `index` or `footer`.

## Child nodes (CRXDE)

```
/content/NewHRBEds/nav
└── jcr:content                         jcr:title=Header
    └── root
        ├── section_brand
        │   └── nav_brand               model=nav-brand  (H&R Block → /)
        ├── section_mega
        │   ├── nav_panel_taxes         model=nav-panel  Taxes
        │   │   ├── item_0              mega-explore     Explore taxes
        │   │   ├── item_1              mega-primary     File online, File with a pro, Download software, Small business taxes
        │   │   ├── item_2              mega-column      More tax services
        │   │   ├── item_3              mega-column      Your tax appointment
        │   │   ├── item_4              mega-column      International
        │   │   ├── item_5              mega-card green  File with a tax pro
        │   │   └── item_6              mega-card cream  File online
        │   ├── nav_panel_financial     model=nav-panel  Financial products
        │   │   ├── item_0              mega-explore     Explore financial products
        │   │   ├── item_1              mega-primary     Refund Transfer, Spruce, Emerald Card®
        │   │   ├── item_2              mega-column      Loans
        │   │   ├── item_3              mega-column      Spruce
        │   │   └── item_4              mega-card accent Spruce
        │   ├── nav_panel_business      model=nav-panel  Business services
        │   │   ├── item_0              mega-primary     Small business taxes, Bookkeeping, Payroll, Business formation
        │   │   ├── item_1              mega-column      Small business taxes
        │   │   ├── item_2              mega-column      Form your business
        │   │   ├── item_3              mega-card green  File my business taxes
        │   │   └── item_4              mega-card cream  The Creator Suite
        │   └── nav_panel_tools         model=nav-panel  Tools and resources
        │       ├── item_0              mega-explore     Visit the Resource Center
        │       ├── item_1              mega-primary     Tax calculator, checklist, W-4, refund, questions
        │       ├── item_2              mega-column      Tax articles
        │       ├── item_3              mega-column      Help center
        │       ├── item_4              mega-column      Our mobile apps
        │       ├── item_5              mega-card green  Estimate my taxes
        │       └── item_6              mega-card cream  Big Beautiful Bill tax changes
        ├── section_tools
        │   └── nav_tools               filter=nav-tools
        │       ├── item_0              nav-tool         Find an office
        │       ├── item_1              nav-tool         Search
        │       └── item_2              nav-signin       Sign in to MyBlock
        └── section_secondary
            └── nav_secondary           filter=nav-secondary
                ├── item_0              nav-secondary-explore   Explore All Topics
                ├── item_1              nav-secondary-link      Life Stages
                ├── item_2              nav-secondary-link      Work
                ├── item_3              nav-secondary-link      Taxes 101
                ├── item_4              nav-secondary-link      Tax Breaks and Money
                └── item_5              nav-secondary-link      What's New
```

Full annotated tree (including every link under mega columns): [packages/README.md](../README.md)
