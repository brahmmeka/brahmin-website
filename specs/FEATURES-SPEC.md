# FEATURES-SPEC.md — Feature Pages Documentation

> **Last Updated:** March 2026
> **Status:** All 9 pages ✅ Built

---

## OVERVIEW PAGE `/features`

**File:** `app/features/page.tsx`

### Meta Tags
- **Title:** MRP Software Features | Brahmin Solutions
- **Description:** Inventory management, production tracking, batch traceability, B2B portal, and 50+ integrations. Built for small manufacturers.

### Page Structure

| # | Section | Content |
|---|---------|---------|
| 1 | Hero | Eyebrow "Features", H1 "Everything you need to run your operation", subhead, two CTAs |
| 2 | Feature cards grid | 8 clickable cards → `/features/[slug]` |
| 3 | "Plus everything you need" | Pill grid of 15 additional features |
| 4 | Pricing callout | "All features. One flat price. $199/month." |
| 5 | CTA | `<CTA />` component |

### 8 Feature Cards

| Card | URL | Description |
|------|-----|-------------|
| Inventory Management | `/features/inventory` | Real-time stock tracking across all locations |
| Production & Manufacturing | `/features/production` | Plan, schedule, and track work orders |
| Traceability & Compliance | `/features/traceability` | Lot/batch tracking and instant recall reports |
| Purchasing | `/features/purchasing` | Automate reorders and manage vendor relationships |
| MRP & Forecasting | `/features/mrp` | Know what to make and buy before you run out |
| Warehouse Management | `/features/warehouse` | Bin locations, pick/pack, multi-warehouse |
| B2B Portal | `/features/b2b-portal` | Let wholesale customers order 24/7 |
| Mobile App | `/features/mobile` | Receive, pick, and adjust inventory from anywhere |

---

## FEATURE SUB-PAGE TEMPLATE

All 8 sub-pages share this pattern:

| # | Section | Description |
|---|---------|-------------|
| 1 | Hero | Breadcrumb trail, eyebrow, H1, subhead, two CTAs, trust pills |
| 2 | Feature section A | Text left, UI mockup right |
| 3 | Feature section B | UI mockup left, text right (alternating) |
| 4 | Feature section C | Text left, UI mockup right |
| 5 | Feature checklist | 15-item full feature list |
| 6 | Testimonial | Real customer quote |
| 7 | Related features | 3 cards linking to other feature pages |
| 8 | CTA | `<CTA />` component |

**All UI mockups are built in Tailwind — no images.**

---

## INDIVIDUAL FEATURE PAGES

### `/features/inventory`
- **H1:** Real-time inventory management
- **Meta title:** Inventory Management Software | Brahmin Solutions
- **Meta desc:** Real-time stock tracking across all locations. Avoid stockouts, reduce overstock, and stay compliant with batch and lot traceability.
- **3 sections:** Real-time visibility (stock table mockup) · Multi-location (location cards mockup) · Scanning & alerts (alert panel mockup)
- **Testimonial:** Sarah Chen, Operations Manager, Elevated Oats

### `/features/production`
- **H1:** Production planning and shop floor control
- **Meta title:** Production Planning Software | Brahmin Solutions
- **Meta desc:** Plan, schedule, and track work orders from start to finish. Shop floor control made simple for small manufacturers.
- **3 sections:** Work order management (work order mockup with BOM) · Cost visibility (bar chart cost breakdown) · Yield & scrap (yield rate + confirmation banner)
- **Testimonial:** Sheldon, FLFF

### `/features/traceability`
- **H1:** Full lot and batch traceability
- **Meta title:** Lot Traceability & Compliance Software | Brahmin Solutions
- **Meta desc:** Full forward and backward traceability. Generate recall reports in seconds. Stay audit-ready with complete batch tracking.
- **3 sections:** Lot trace timeline (4-step Received→Production→QA→Shipped) · Recall readiness (recall report mockup with stats) · Audit trail (timestamped events)
- **Testimonial:** Sfoglini Pasta (exact quote about recall inspections)
- **⚠️ Note:** Lot/batch traceability is an add-on on Starter/Growth plans, included on Pro

### `/features/purchasing`
- **H1:** Smarter purchasing and reordering
- **Meta title:** Purchasing & Reorder Management | Brahmin Solutions
- **Meta desc:** Automate purchase orders, set reorder points, and manage vendor relationships. Never run out of materials again.
- **3 sections:** PO management (PO list with status badges) · Receiving (receive-against-PO with lot codes) · Vendor management (4 metrics + pricing list)
- **Testimonial:** Tameer, Bakkar Sweets (exact quote)

### `/features/mrp`
- **H1:** Know what to make before you run out
- **Meta title:** MRP & Demand Forecasting | Brahmin Solutions
- **Meta desc:** Material requirements planning that tells you what to make and buy before you run out. Plan with confidence.
- **3 sections:** MRP output (make/buy action table with dates) · Shortage alerts (3 severity-coded cards) · Scenario planning (what-if +30% demand panel)
- **Testimonial:** Ryan, Chugach Chocolates

### `/features/warehouse`
- **H1:** Multi-location warehouse management
- **Meta title:** Warehouse Management Software | Brahmin Solutions
- **Meta desc:** Bin locations, pick/pack workflows, and multi-warehouse support. Organize your warehouse operations.
- **3 sections:** Pick & pack (pick list with bin locations) · Bin management (color-coded bin grid) · Cycle counting (bin scan with discrepancy indicator)
- **Testimonial:** Sarah Chen, Elevated Oats

### `/features/b2b-portal`
- **H1:** 24/7 wholesale ordering portal
- **Meta title:** B2B Wholesale Portal | Brahmin Solutions
- **Meta desc:** Let wholesale customers place orders 24/7. Custom pricing, order history, and one-click reordering.
- **3 sections:** Ordering portal (dark-header cart with +/- buttons) · Customer pricing (4 tier table) · Order history (3 past orders with reorder button)
- **Testimonial:** Ryan, Chugach Chocolates

### `/features/mobile`
- **H1:** Manage inventory from anywhere
- **Meta title:** Mobile Inventory App | Brahmin Solutions
- **Meta desc:** Receive, pick, and adjust inventory from your phone or tablet. Works online and offline.
- **3 sections:** Phone mockup (realistic frame with 5-item menu) · Barcode scanning (dark scan zone with lot auto-assign) · Offline mode (amber banner + queued actions)
- **Testimonial:** Wild Zora Foods

---

## KNOWN ISSUES / TODO

- [ ] Eyebrow on `/features` overview hero says "Product" — should say "Features" (minor, low priority)
- [ ] Traceability page: note in copy that lot tracking is add-on on Starter/Growth per pricing page
