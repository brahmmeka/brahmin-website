# HANDOFF.md — Context from Planning Session

> **Purpose:** This file captures all decisions and specs from the Claude.ai planning session.
> **For Claude Code:** Read `INSTRUCTIONS.md` first, then this file + `CLAUDE.md` before making any changes.
> **Keep Updated:** After every task, update the status sections in this file.

---

## PROJECT STATUS

### Pages Built ✅
- Homepage (`/`)
- Features (`/features`) — renamed from `/product`
- Pricing (`/pricing`) — interactive plan builder, 4 tiers, revenue toggle
- Comparison pages (`/compare/*`)
- Industry pages (`/industries/*`)

### Pages NOT Built ❌
- About (`/about`) — **Spec ready, needs to be built**

---

## KEY DECISIONS MADE

### 1. Homepage Structure (8 sections)
| # | Section | Component |
|---|---------|-----------|
| 1 | Hero | Hero.tsx |
| 2 | Trust Bar | TrustBar.tsx |
| 3 | Before/After | BeforeAfter.tsx |
| 4 | Capabilities | FeaturesTabbed.tsx (7 tabs, all interactive) |
| 5 | Who It's For | WhoItsFor.tsx |
| 6 | Why Brahmin | WhyBrahmin.tsx |
| 7 | Social Proof | SocialProof.tsx |
| 8 | Final CTA | CTA.tsx |

### 2. FeaturesTabbed — 7 Interactive Tabs
1. 📍 Inventory — Clickable stat cards (On Hand/Allocated/Expected/Shortage)
2. 🛒 Purchasing — 3 tabs (POs/Reorder Alerts/Vendors)
3. 🏭 Production — 3 tabs (Recipe/Costs/Timeline)
4. 🏷️ Traceability — Expandable timeline + recall report
5. 🔌 Integrations — Expandable app details + Add modal
6. 👥 B2B Portal — Working cart with +/- buttons
7. 📱 Mobile — Clickable menu with sub-screens

### 3. Pricing
- **Price:** $199/month (Starter, never $129)
- No per-transaction fees, no per-seat charges
- Includes dedicated support
- **4 plans:** Starter ($199) | Growth ($499/$449 annual) | Pro ($999/$899 annual) | Enterprise (custom)
- **Revenue toggle:** Under $1M → Starter (50% off everything) | $1M+ → Growth/Pro/Enterprise
- **Annual discount:** 10% off Growth and Pro (Starter is monthly-only — already 50% off)
- **Free trial:** 14-day for Starter (no credit card) | 30-day money-back for Growth/Pro
- **Starter apps:** Pick 1 free (Mobile or B2B Portal); add second for $50/mo
- **Pro includes all add-ons** (Manufacturing Pro, Compliance Essentials, Planning & Analytics)
- **Interactive plan builder:** Real-time pricing with sliders for orders & locations
- **Full spec:** See `PRICING-SPEC.md`

### 4. Navigation Structure
- `/product` renamed to `/features`
- Comparison pages at `/compare/[competitor]`
- Industry pages at `/industries/[industry]`

---

## ABOUT PAGE SPEC (Ready to Build)

**URL:** `/about`
**Tone:** Polished & confident (not humble/apologetic)

### 8 Sections:
1. **Hero** — Brahm photo + "I built Brahmin because small manufacturers deserve enterprise-grade tools"
2. **The Gap** — Enterprise vs SMB data problem (emotional hook)
3. **Origin Story** — Enterprise WMS background → Family food business pain → Solution (3 paragraphs)
4. **By The Numbers** — 2015 | 100+ | <15 min | 0 VC
5. **How We're Different** — 3 cards (Built to last, Real humans, Made for manufacturers)
6. **The Team** — Brahm (featured) + 2-4 key people
7. **Values** — Build to last, Support like we mean it, Ship what matters, Stay lean
8. **CTA** — "Ready to see the difference?"

### Founder Story Key Points:
- Worked at Kuehne + Nagel (Fortune 1000 freight forwarding)
- Worked at Lenoir Technologies (cloud WMS)
- Family food business struggled with spreadsheets
- Founded 2015, beta 2018, all beta customers converted
- Independently owned (small friends/family raise in 2021, stopped taking funding)
- 100+ manufacturers served

### Values (Action Verbs):
1. **Build to last** — No shortcuts, long-term decisions
2. **Support like we mean it** — Real humans, fast responses, follow-through
3. **Ship what matters** — Features that help, not flashy demos
4. **Stay lean** — Small team, fast, close to customers

---

## DESIGN SYSTEM

### Colors
- Primary blue: `#2563eb` (blue-600)
- Accent green: `#22c55e` (emerald-600)
- Backgrounds: `slate-50`, `white`
- Text: `slate-900` (headings), `slate-600` (body)

### Typography
- Font: Inter
- **Sentence case for ALL headings** (not Title Case)
- Exception: Proper nouns (Brahmin, QuickBooks), Acronyms (MRP, ERP)

### Components
- Cards: `rounded-xl shadow-sm border border-slate-200`
- Buttons: Emerald for primary CTA, white/ghost for secondary
- Section padding: `py-16` or `py-20`

---

## COMPETITOR PAGES MAPPED (13 total)

| Competitor | URL | Key Angle |
|------------|-----|-----------|
| Katana | `/compare/katana` | Better traceability, faster support, no VC baggage |
| Wherefour | `/compare/wherefour` | Simpler UI, faster go-live |
| MRPeasy | `/compare/mrpeasy` | US support, food/bev features |
| Fishbowl | `/compare/fishbowl` | Modern cloud, simpler |
| Cin7 | `/compare/cin7` | Manufacturing-first |
| DEAR Systems | `/compare/dear-systems` | Stability, production focus |
| NetSuite | `/compare/netsuite` | Right-sized, 10x cheaper |
| SAP B1 | `/compare/sap-business-one` | No IT needed |
| Odoo | `/compare/odoo` | Works out of box |
| inFlow | `/compare/inflow` | Full manufacturing |
| Craftybase | `/compare/craftybase` | Scales with growth |
| Sortly | `/compare/sortly` | Real MRP features |
| Spreadsheets | `/compare/spreadsheets` | Real-time, no errors |

---

## INDUSTRY PAGES MAPPED (5 total)

| Industry | URL |
|----------|-----|
| Manufacturing | `/industries/manufacturing` |
| Food & Beverage | `/industries/food-beverage` |
| Cosmetics | `/industries/cosmetics` |
| Supplements | `/industries/supplements` |
| Wholesale/Distribution | `/industries/wholesale-distribution` |

---

## META TAGS

### Homepage
- **Title:** Brahmin Solutions | Inventory and production software that just works
- **Description:** Production tracking, inventory control, and traceability for small and mid-sized manufacturers. Go live in weeks with dedicated support. Free 14-day trial.

### About
- **Title:** About Us | Brahmin Solutions
- **Description:** Founded in 2015 by Brahm Meka. Brahmin Solutions helps 100+ small manufacturers move from spreadsheets to a single source of truth. Independently owned, customer-funded.

### Pricing
- **Title:** Pricing | Brahmin Solutions MRP Software
- **Description:** Brahmin Solutions starts at $199/month. No per-transaction fees. Includes dedicated support and implementation. See all plans and pricing.

---

## FILES IN THIS REPO

### Spec Files (Root)
- `CLAUDE.md` — Master website specification
- `HANDOFF.md` — This file (context from planning)
- `ABOUT-PAGE-SPEC.md` — Detailed About page spec
- `PROMPT-About.md` — Quick prompt for building About page
- `PROMPT-Homepage.md` — Quick prompt for Homepage
- `SITEMAP-Complete.md` — Full 28-page sitemap

### Key Components
- `FeaturesTabbed.jsx` — Interactive 7-tab features component (ready to use)

---

## NEXT ACTIONS

### Immediate
1. [ ] Build About page using ABOUT-PAGE-SPEC.md
2. [ ] Add Brahm's headshot to `/public/images/`
3. [ ] Collect 2-4 team member photos + titles

### Audit Needed
1. [ ] Review all built pages against CLAUDE.md spec
2. [ ] Check FeaturesTabbed is integrated into homepage
3. [ ] Verify pricing shows $199/month everywhere
4. [ ] Confirm all pages use sentence case headings

### Future
1. [ ] Blog migration from Webflow (see MIGRATION-Webflow-to-Sanity.md)
2. [ ] Customer stories page
3. [ ] FAQ page

---

## HOW TO USE THIS FILE

**For Claude Code:**
```
Read HANDOFF.md and CLAUDE.md to understand the project context, 
then [your specific request here].
```

**For audits:**
```
Read HANDOFF.md and CLAUDE.md, then audit the current codebase. 
Show me what's built, what's missing, and what doesn't match the specs.
```

**For building About page:**
```
Read HANDOFF.md, CLAUDE.md, and ABOUT-PAGE-SPEC.md, 
then build the About page at /app/about/page.tsx with all 8 sections.
```
