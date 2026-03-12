# HOMEPAGE-SPEC.md — Homepage Sections

**URL:** `/`
**File:** `app/page.tsx`
**Status:** Built
**Sections:** 8

---

## Section Overview

| # | Section | Component | Purpose |
|---|---------|-----------|---------|
| 1 | Hero | `Hero.tsx` | Hook + primary CTA + dashboard preview |
| 2 | Trust Bar | `TrustBar.tsx` | Quick credibility stats |
| 3 | Before/After | `BeforeAfter.tsx` | Pain points embedded in visual comparison |
| 4 | Capabilities | `FeaturesTabbed.tsx` | 7 features with pill tabs + dashboard mockups |
| 5 | Who It's For | `WhoItsFor.tsx` | 3 personas: Makers, Movers, Sellers |
| 6 | Why Brahmin | `WhyBrahmin.tsx` | Switching reasons + support differentiator |
| 7 | Social Proof | `SocialProof.tsx` | Testimonials + logo wall |
| 8 | Final CTA | `FinalCTA.tsx` | Book demo with reassurance |

---

## Section 1: Hero

**File:** `components/sections/Hero.tsx`

**H1:** "Inventory and production software that just works"

**Subheadline:** "Cloud-based inventory and production management for small manufacturers--backed by a team that knows your business by name."

**Primary CTA:** "Book a demo"
**Secondary CTA:** "See how it works"

**Reassurance:** "No credit card required . 14-day free trial . Live in 3-6 weeks"

**Visual:** Dashboard mockup in browser frame (built in code, not image)

**Dashboard Elements (built in code):**
- Browser frame with traffic lights
- 4 stat cards: Orders (147), Inventory (2,847), Production (89%), Revenue ($124K)
- Area chart with green gradient
- Activity feed items

---

## Section 2: Trust Bar

**File:** `components/sections/TrustBar.tsx`

**Format:** Stat badges in a row (not logos)

| Stat | Label |
|------|-------|
| 300+ | Manufacturers |
| Since 2019 | In business |
| 8 native | Integrations (+ 5,000+ via Zapier) |
| <15 min | Support response |
| 3-6 weeks | Avg. go-live |

---

## Section 3: Before/After

**File:** `components/sections/BeforeAfter.tsx`

**Headline:** "Stop juggling. Start running."
**Subheadline:** "Most manufacturers run on duct tape and spreadsheets. Here's what life looks like on the other side."

**Layout:** Side-by-side comparison (grid-cols-2), stack on mobile

### LEFT: "BEFORE BRAHMIN"
Desktop chaos mockup: File browser with messy xlsx files, QuickBooks widget ("Manual sync needed"), Shopify widget ("Inventory not synced"), YOUR BRAIN footer.

Pain Points:
- Inventory counts nobody trusts
- Three versions of every spreadsheet
- Orders falling through the cracks
- No real-time visibility into costs

### RIGHT: "AFTER BRAHMIN"
Clean dashboard mockup: Browser with app URL, live indicator, 4 stat cards (Inventory 2,841 SKUs, Orders 47, Production 12 active, Revenue $84,291), recent orders table, "Shopify synced" badge.

Benefits:
- One source of truth for every team
- Real-time inventory across every location
- Orders, production, and costs all connected
- Live in 3-6 weeks with a dedicated manager

---

## Section 4: Capabilities (Tabbed)

**File:** `components/sections/FeaturesTabbed.tsx`

**Headline:** "Everything you need. Nothing you don't."
**Subheadline:** "Purpose-built for small manufacturers. No bloat, no complexity -- just the tools your team actually uses."

### Tab Design
- Layout: Horizontal pill tabs, centered
- Inactive: `bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 px-5 py-2.5 rounded-full text-sm font-medium`
- Active: `bg-emerald-600 text-white shadow-lg shadow-emerald-200 px-5 py-2.5 rounded-full text-sm font-medium`

### The 7 Tabs

| Tab | Headline | Bullets |
|-----|----------|---------|
| Inventory | See stock everywhere | Multi-location tracking, Real-time stock levels, Batch & lot visibility, Barcode scanning |
| Purchasing | Never run out of materials | Purchase order management, Vendor management, Auto reorder points, Receiving & inspection |
| Production | Know what it costs | Multi-level BOMs, Work order management, Real-time cost visibility, Labor & overhead tracking |
| Traceability | Stay recall-ready | Full lot genealogy, One-click recall reports, FDA & FSMA compliant, Supplier traceability |
| Integrations | Connect everything | QuickBooks & Xero, Shopify & Faire, ShipStation & SPS Commerce, 8 native integrations |
| B2B Portal | Let customers order 24/7 | Customer-specific pricing, Self-service ordering, Order history & reorder, Payment processing |
| Mobile | Run the floor anywhere | Barcode scanning, Inventory receiving, Pick pack & ship, Works offline |

### Dashboard Mockups (per tab) - ALL INTERACTIVE

**Inventory:** Interactive SKU detail modal with clickable stat cards (On Hand, Allocated, Expected, Shortage)
**Purchasing:** Interactive PO management with 3 tabs (Purchase Orders, Reorder Alerts, Vendors)
**Production:** Interactive work order with 3 tabs (Recipe, Costs, Timeline)
**Traceability:** Interactive lot trace with expandable timeline + recall report
**Integrations:** Interactive connected apps list with expand/collapse
**B2B Portal:** Interactive wholesale ordering cart with quantity buttons
**Mobile:** Interactive phone mockup with clickable menu screens

### Bottom Elements
**CTA:** "See all features ->"
**Mini-testimonial:** "We cut inventory counting time by 75% in the first month." -- Sarah Chen, Operations Manager, Elevated Oats

---

## Section 5: Who It's For

**File:** `components/sections/WhoItsFor.tsx`

**Headline:** "Built for how you work"
**Subheadline:** "Whether you make it, move it, or sell it--Brahmin has the workflow for you."

| Card | Badge | Headline | Features |
|------|-------|----------|----------|
| Makers | In-house manufacturing | You make it | BOM, Work orders, Cost visibility |
| Movers | Distribution & 3PL | You move it | Multi-location, 3PL sync, Real-time |
| Sellers | Wholesale & DTC | You sell it | Shopify, Price lists, B2B portal |

---

## Section 6: Why Brahmin

**File:** `components/sections/WhyBrahmin.tsx`

**Headline:** "Why manufacturers switch to Brahmin"

### Part A: Where You're Coming From (3 migration cards)
1. **Spreadsheets** -- "We'll migrate your data and get you live in 3-6 weeks"
2. **Other Software** -- "Support that responds in 15 minutes -- not 3 days"
3. **Enterprise ERP** -- "Paying for features you'll never use"

### Part B: What You Get With Us
Badge: "REAL HUMANS. NO CHATBOT."
Stats: <15 min response, 3-6 weeks implementation, Dedicated manager, Unlimited training, 6 countries, 2+ features/month

---

## Section 7: Social Proof

**File:** `components/sections/SocialProof.tsx`

**Headline:** "Real results from real manufacturers"

### Testimonials
- **Ryan, Chugach Chocolates** (featured with photo): "Brahmin syncs to all our systems..."
- **Tameer, Bakkar Sweets** (5 stars): "Easy to use, quick, and always improving"
- **Sfoglini Pasta** (5 stars): Mock recalls went smoothest ever
- **Sheldon, FLFF** (5 stars): "Full visibility from purchase order to manufacturing to sales"

### Logo Wall (12)
sfoglini, wild-zora, elevated-oats, codexing, oyin-handmade, nanustudio, caterstyle, daily-concepts, cusatea, kalamazoo-candle, pse, bakkar-sweets

---

## Section 8: Final CTA

**File:** `components/sections/FinalCTA.tsx`

**Headline:** "Ready to stop fighting your software?"
**Subheadline:** "Book a 30-minute demo. We'll show you the software with your actual products and workflows."
**CTA:** "Book your demo"
**Reassurance:** "No credit card required . 14-day free trial available."
**Stats:** 300+ Manufacturers | 3-6 weeks Avg. go-live | <15 min Support response
