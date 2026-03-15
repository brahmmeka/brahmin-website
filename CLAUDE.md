# CLAUDE.md — Brahmin Solutions Website

> Single source of truth. Read this before starting any work.
> Detailed page specs live in `specs/` — reference them when working on specific pages.

---

## PROJECT OVERVIEW

**Company:** Brahmin Solutions
**Product:** Cloud-based MRP and inventory management software
**Target:** Small to mid-sized manufacturers (up to $50M revenue)
**Website:** https://www.brahmin-solutions.com

**Tech Stack:**
- Next.js 14 (App Router) + React 18 + TypeScript
- Tailwind CSS
- Sanity CMS (blog only)
- Vercel (hosting)
- HubSpot (forms, tracking, chat)

---

## PRODUCT FACTS (Do Not Get Wrong)

| Fact | Detail |
|------|--------|
| **Integration sync direction** | Most data syncs **one-way from Brahmin to platforms** (QuickBooks, Xero, Shopify, etc.). **Exception: Sales orders are two-way** — closing an order on Shopify closes it in Brahmin, and closing in Brahmin pushes carrier/tracking info back. Never say "two-way sync" or "bidirectional" for the overall integration. |
| **Go-live timeline** | 3-6 weeks average. Not "21 days", not "2-4 weeks". |
| **Starting price** | $199/month |
| **Pricing model** | Flat per tier, unlimited users. No per-user fees. |
| **Founded** | 2015 (serving customers since 2019) |
| **Customers** | 300+ |
| **Support response** | <15 minutes average |
| **Native integrations** | 8: QuickBooks Online, Xero, Shopify, WooCommerce, BigCommerce, Faire, SPS Commerce, ShipStation. Plus Zapier (5,000+ apps). REST API in beta. |

---

## DESIGN SYSTEM

### Colors
- **Primary (brand blue):** primary-600 = `#2563eb`
- **Accent (CTA green):** accent-500 = `#22c55e`
- **Backgrounds:** `white`, `slate-50`
- **Text:** `slate-900` (headings), `slate-600` (body)
- **Emerald text:** Use `emerald-700` (not 600) for accessibility

Full color scales defined in `tailwind.config.ts` (primary, slate, accent).

### Typography
- Font: `Inter, system-ui, -apple-system, sans-serif`
- **Sentence case** for ALL headings, titles, buttons, navigation
- Exceptions: Proper nouns (Brahmin, QuickBooks), Acronyms (MRP, ERP, 3PL)

### Spacing
- Section padding: `py-section` (6rem / 96px)
- Container: `container mx-auto px-6 max-w-7xl`

### Component Patterns
```jsx
// Primary CTA (green)
bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-lg font-semibold

// Secondary (outline)
border-2 border-primary-600 text-primary-600 hover:bg-primary-50 px-6 py-3 rounded-lg font-semibold

// Standard card
bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow

// Section wrapper
<section className="py-section">
  <div className="container mx-auto px-6 max-w-7xl">

// Eyebrow label
<span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 mb-4">
```

---

## CODING STANDARDS

- TypeScript for all files
- Functional components with hooks
- Tailwind CSS exclusively (no custom CSS)
- Mobile-first responsive approach
- Every page: unique `<title>` and `<meta description>`
- All images: alt text required
- One H1 per page, proper heading hierarchy
- Lazy load below-the-fold content
- Comparison tables use `boolean | string` RowValue type with Check/Dash/text Cell component

---

## FOLDER STRUCTURE

```
app/
├── layout.tsx                         # Root layout (Organization JSON-LD)
├── page.tsx                           # Homepage (8 sections)
├── sitemap.ts                         # Auto-generated sitemap
├── features/
│   ├── page.tsx                       # Features overview
│   ├── inventory/page.tsx
│   ├── production/page.tsx
│   ├── traceability/page.tsx
│   ├── purchasing/page.tsx
│   ├── mrp/page.tsx
│   ├── warehouse/page.tsx
│   ├── b2b-portal/page.tsx
│   └── mobile/page.tsx
├── industries/
│   ├── page.tsx                       # Industries hub (9-industry grid)
│   ├── manufacturing/page.tsx
│   ├── food-beverage/page.tsx
│   ├── wholesale-distribution/page.tsx
│   ├── cosmetics/page.tsx
│   ├── supplements/page.tsx
│   ├── apparel/page.tsx
│   ├── electronics/page.tsx
│   ├── cannabis/page.tsx
│   ├── medical-devices/page.tsx
│   └── health-wellness/page.tsx
├── compare/                           # No hub page
│   ├── katana/page.tsx
│   ├── wherefour/page.tsx
│   ├── mrpeasy/page.tsx
│   ├── fishbowl/page.tsx
│   ├── cin7/page.tsx
│   ├── netsuite/page.tsx
│   ├── sap-business-one/page.tsx
│   ├── odoo/page.tsx
│   ├── inflow/page.tsx
│   ├── craftybase/page.tsx
│   └── spreadsheets/page.tsx
├── mrp-software/page.tsx              # Pillar page
├── inventory-management-software/page.tsx
├── production-planning-software/page.tsx
├── manufacturing-erp/page.tsx
├── lot-tracking-software/page.tsx
├── bom-software/page.tsx
├── pricing/page.tsx
├── demo/page.tsx
├── contact/page.tsx
├── about/page.tsx
├── faq/page.tsx
├── customers/page.tsx
├── roi-calculator/page.tsx
├── blog/
│   ├── page.tsx                       # Blog listing (Sanity CMS)
│   └── [slug]/page.tsx
├── studio/[[...tool]]/page.tsx        # Sanity Studio
└── not-found.tsx

components/
├── layout/
│   ├── Header.tsx                     # Mega-menu navigation (all nav logic)
│   └── Footer.tsx                     # 6-column footer
├── sections/                          # Homepage sections
│   ├── Hero.tsx, TrustBar.tsx, BeforeAfter.tsx
│   ├── FeaturesTabbed.tsx, WhoItsFor.tsx, WhyBrahmin.tsx
│   ├── SocialProof.tsx, FinalCTA.tsx
├── about/                             # About page (8 components)
├── contact/                           # ContactFAQ.tsx, ContactForm.tsx
├── roi-calculator/                    # ROICalculator.tsx (client)
├── blog/                              # PostCard.tsx, PostContent.tsx
└── ui/                                # Button, Card, Accordion, ComparisonTable

lib/
├── sanity.ts                          # Lazy proxy client (safe when env vars missing)
└── utils.ts

public/images/
├── logo.webp
├── customers/ryan-chugach.jpg
└── logos/                             # 12 customer logos
```

---

## NAVIGATION

**5 top-level items:** Features (mega-menu), Industries (mega-menu), Integrations (direct link), Resources (mega-menu), Pricing (direct link)

**Right side:** Login (external) + "Book a demo" button (emerald-600)

**Pillar pages** (MRP, Inventory, Production, ERP, Lot Tracking, BOM) are in the **footer Solutions column only**, not in the header mega-menu.

**Footer columns:** Product | Solutions (6 pillar pages) | Industries (5) | Compare (11, 2-col grid) | Company

Full navigation spec: `specs/NAV-SPEC.md`

---

## SITEMAP

Auto-generated by `app/sitemap.ts` — scans `app/` directory for `page.tsx` files.
- Priority: homepage=1.0, pillar pages=0.9, features=0.8, industries/features sub-pages=0.7, compare=0.6
- Excluded: `/studio`, `/not-found`, dynamic routes `[slug]`
- `public/robots.txt` points to `https://www.brahmin-solutions.com/sitemap.xml`

No manual sitemap maintenance needed.

---

## POST-BUILD CHECKLIST

After building or editing a page:

1. **Update `CLAUDE.md`** folder structure if new route added
2. **Create or update `specs/[PAGE]-SPEC.md`** documenting structure, copy, meta tags
3. **Verify** sentence case headings, product facts, meta tags

After deleting a page:
1. Remove from folder structure above
2. Delete corresponding spec file

---

## PROJECT STATUS

### All Pages Built
- **Homepage** — 8 sections (see `specs/HOMEPAGE-SPEC.md`)
- **Features** — overview + 8 sub-pages (inventory, production, traceability, purchasing, mrp, warehouse, b2b-portal, mobile)
- **Industries** — hub + 10 pages (manufacturing, food-beverage, wholesale-distribution, cosmetics, supplements, apparel, electronics, cannabis, medical-devices, health-wellness)
- **Compare** — 11 pages (katana, wherefour, mrpeasy, fishbowl, cin7, netsuite, sap-business-one, odoo, inflow, craftybase, spreadsheets). dear-systems skipped (same as Cin7).
- **Pillar pages** — 6 SEO pages (mrp-software, inventory-management-software, production-planning-software, manufacturing-erp, lot-tracking-software, bom-software)
- **Core** — pricing, demo, contact, about, faq, customers, roi-calculator
- **Blog** — listing + dynamic posts (Sanity CMS, sample data fallback)

### Pending
- [ ] Add Brahm's headshot to `/public/images/brahm-meka.jpg`
- [ ] Add team photos to `/public/images/team/`
- [ ] Blog migration from Webflow to Sanity
- [ ] Webinars page (`/webinars`) — linked in nav, not built
- [ ] Free tools page (`/tools`) — linked in nav, not built
- [ ] Help center — linked in nav, external URL

### Notes
- **AEO/Schema:** Organization JSON-LD in layout.tsx, FAQPage on /faq, SoftwareApplication on homepage/pricing/pillar pages, BreadcrumbList on interior pages. Full spec: `specs/AEO-SPEC.md`
- **Sanity CMS:** Lazy proxy client — safe when env vars missing. Sample data fallback in `lib/sanity.sample.ts`.

---

## SPEC FILES

Detailed page specifications in `specs/`:

| File | Purpose |
|------|---------|
| `HOMEPAGE-SPEC.md` | Homepage 8 sections, copy, mockup details |
| `ABOUT-PAGE-SPEC.md` | About page 8 sections, founder story |
| `NAV-SPEC.md` | Full navigation structure, mega-menus, mobile |
| `AEO-SPEC.md` | Schema markup, FAQ strategy, AI optimization |
| `PRICING-SPEC.md` | Pricing page documentation |
| `FEATURES-SPEC.md` | Features overview page |
| `FAQ-SPEC.md` | FAQ page structure |
| `INTEGRATIONS-SPEC.md` | Integrations page |
| `CONTACT-SPEC.md` | Contact page |
| `ROI-CALCULATOR-SPEC.md` | ROI calculator page + component |
| `MRP-SOFTWARE-SPEC.md` | MRP pillar page |
| `COMPARE-TEMPLATE-SPEC.md` | Compare page template/pattern |
| `INDUSTRY-TEMPLATE-SPEC.md` | Industry page template/pattern |
