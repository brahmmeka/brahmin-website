# MRP-SOFTWARE-SPEC.md — MRP Software Pillar Page

## Overview
- **URL:** `/mrp-software`
- **Purpose:** SEO pillar page targeting "mrp software" keyword. Educational hub linking to industry pages, feature pages, and blog posts. Positions Brahmin as the simple, fast MRP alternative for growing manufacturers.
- **Tone:** Educational, confident, direct. Speaks to smart business owners, not software engineers.
- **Word count:** 3,000+ words
- **Target audience:** SMB manufacturers ($500K–$50M) outgrowing spreadsheets

## Sections (in order)

1. **Breadcrumb** — Home > MRP Software (visible + JSON-LD schema)
2. **Hero** — Dark gradient (slate-900) with glow orbs. H1: "MRP software for growing manufacturers". Dual CTAs: Book a demo + See pricing. Trust badge: "Trusted by 300+ manufacturers"
3. **Key takeaways** — Glass card with 4 bullet summary for skimmers/featured snippet potential
4. **What is MRP software?** — ~500 words. Plain English definition, 3-question visual cards, MRP vs ERP explainer, green callout box with key stat
5. **6 signs you've outgrown spreadsheets** — Expandable accordion (first open by default). Numbered items with descriptions. Links to /compare/spreadsheets
6. **Mid-page CTA** — Gradient blue-to-violet bar. "Ready to ditch the spreadsheets?" + 4 trust stats (300+, 3–6 weeks, <15 min, $199/mo)
7. **Key features** — 6 cards in 3-column grid. Gradient SVG icon containers. Each links to feature page. Integration callout at bottom links to /integrations
8. **MRP by industry** — 5 industry cards with colored top borders and tags. Links to /industries/* pages
9. **Implementation comparison** — Side-by-side: Enterprise MRP (red Xs) vs Modern Cloud MRP (green checks). 5-step getting started timeline with connecting line
10. **How to evaluate MRP** — 6 numbered buyer questions with guidance
11. **Testimonials** — 3 placeholder testimonials with colored gradient top borders, highlight badges, star ratings
12. **FAQ** — 10 expandable questions with animated chevron + hover circle. FAQPage JSON-LD schema
13. **Final CTA** — Dark gradient (slate-900) with glow orbs. Gradient text heading. Dual CTAs

## Key Copy
- **H1:** "MRP software for growing manufacturers"
- **Hero subhead:** "You've outgrown spreadsheets but you don't need a six-figure ERP system."
- **Mid-page CTA:** "Ready to ditch the spreadsheets?"
- **Final CTA:** "Ready to see what MRP software can do for you?"
- **Pricing mention:** "$199/month" appears 4+ times throughout

## Design Patterns
- **Stripe-inspired:** Dark hero with glow orbs, gradient text, gradient icon containers, colored top borders on cards, animated hover arrows, glassmorphism on callouts
- **Colors:** Gradient icons (blue→indigo, violet→purple, cyan→blue, amber→orange, rose→pink, emerald→teal), gradient CTA bar (blue→indigo→violet)
- **Cards:** `rounded-2xl` with `hover:shadow-lg hover:-translate-y-1 transition-all duration-200`
- **Arrows:** All "Learn more" links have arrow SVG with `group-hover:translate-x-1`
- **FAQ chevron:** Wrapped in circle bg, rotates on open, changes color on hover

## Schema Markup (JSON-LD)
- **SoftwareApplication** — name, category, price ($199/USD/monthly), feature list, audience
- **FAQPage** — 10 questions dynamically generated from data array
- **BreadcrumbList** — Home → MRP Software

## Internal Links
| Destination | Location |
|-------------|----------|
| /demo | Hero CTA, Mid-page CTA, Final CTA |
| /pricing | Hero CTA, Final CTA |
| /features/production | BOM card, Scheduling card, Costing card |
| /features/inventory | Inventory card |
| /features/purchasing | Purchase orders card |
| /features/traceability | Lot tracking card |
| /integrations | Integration callout |
| /industries/food-beverage | Industry section |
| /industries/cosmetics | Industry section |
| /industries/supplements | Industry section |
| /industries/electronics | Industry section |
| /industries/manufacturing | Industry section |
| /compare/spreadsheets | Spreadsheet signs section |

## Meta Tags
```
Title: MRP Software for Small Manufacturers | Brahmin Solutions
Description: MRP software that helps growing manufacturers plan production, manage inventory, and know their true costs. Starting from $199/month. Go live in weeks, not months.
OG Title: MRP Software for Growing Manufacturers
OG Description: Plan production, manage materials, and finally know your true costs — without enterprise complexity.
```

## SEO/AEO Notes
- FAQPage schema covers 10 long-tail keyword questions
- SoftwareApplication schema makes price/category machine-readable
- BreadcrumbList for site hierarchy
- Key takeaways box optimized for featured snippet extraction
- Go-live time: 3–6 weeks (updated from 2–4 per owner feedback)
