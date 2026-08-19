# Footer — AEM content package

| | |
|--|--|
| UE title | Footer |
| Node name | `footer` |
| AEM path | `/content/NewHRBEds/footer` |
| EDS path | `/footer` |
| Zip | `packages/hrb-footer-content-1.0.0.zip` |

Does **not** touch `index` or `nav`.

## Child nodes (CRXDE)

```
/content/NewHRBEds/footer
└── jcr:content                         jcr:title=Footer
    └── root
        └── section_footer              model=hrblock-footer
                                        style=[site-footer, green-dark-theme]
            ├── footer_disclosures      model=footer-disclosures
            │   │                       title=Offer details and disclosures
            │   ├── item_0              disclosure-group   Full Site Disclaimers
            │   │                         File Online, Tax Software, Retail,
            │   │                         Financial Services, Income Tax Course
            │   └── item_1              disclosure-notes   numbered offer notes
            ├── footer_support          model=footer-support
            │   │                       title=Need support?
            │   ├── item_0              support-action     Customer help
            │   ├── item_1              support-action     Find an office
            │   └── item_2              support-action     Search
            ├── footer_links            filter=footer-links
            │   ├── item_0              footer-column      Tax Services + Small Business Services
            │   ├── item_1              footer-column      Tax Tools + Legal
            │   ├── item_2              footer-column      Financial Services + Resources
            │   └── item_3              footer-column      About H&R Block
            ├── footer_legal            model=footer-legal
            │   ├── item_0              social-link        TikTok
            │   ├── item_1              social-link        Facebook
            │   ├── item_2              social-link        Instagram
            │   ├── item_3              social-link        YouTube
            │   ├── item_4              social-link        X
            │   └── item_5              social-link        LinkedIn
            └── footer_seals            filter=footer-seals
                ├── item_0              footer-seal        TRUSTe Privacy Certification
                └── item_1              footer-seal        Your Privacy Choices
```

Full annotated tree (every column link listed): [packages/README.md](../README.md)
