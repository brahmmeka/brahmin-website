# CLAUDE.md - Brahmin Solutions Website

> **IMPORTANT:** This file contains all specifications for the Brahmin Solutions website.
> Read this file completely before starting any work.

---

## PROJECT OVERVIEW

**Company:** Brahmin Solutions  
**Product:** Cloud-based MRP and inventory management software  
**Target:** Small to mid-sized manufacturers (up to $50M revenue)  
**Founded:** 2015  
**Customers:** 300+  
**Starting Price:** $199/month

**Tech Stack:**
- Next.js 14 (App Router)
- React 18
- Tailwind CSS
- Sanity CMS (for blog)
- Vercel (hosting)
- HubSpot (forms, tracking, chat)

---

## FOLDER STRUCTURE

```
brahmin-website/
├── app/
│   ├── layout.tsx              # Root layout with header/footer
│   ├── page.tsx                # Homepage
│   ├── features/
│   │   ├── page.tsx            # Features overview
│   │   ├── inventory/page.tsx  # Inventory Management
│   │   ├── production/page.tsx # Production & Manufacturing
│   │   ├── traceability/page.tsx # Traceability & Compliance
│   │   ├── purchasing/page.tsx # Purchasing
│   │   ├── mrp/page.tsx        # MRP & Forecasting
│   │   ├── warehouse/page.tsx  # Warehouse Management
│   │   ├── b2b-portal/page.tsx # B2B Portal
│   │   └── mobile/page.tsx     # Mobile App
│   ├── pricing/page.tsx        # Pricing page
│   ├── integrations/page.tsx   # Integrations overview
│   ├── demo/page.tsx           # Book demo page
│   ├── contact/page.tsx        # Contact us page
│   ├── roi-calculator/page.tsx # ROI Calculator
│   ├── faq/page.tsx            # FAQ page
│   ├── about/page.tsx          # About us page
│   ├── customers/page.tsx      # Customer stories
│   │
│   ├── industries/             # Industry pages
│   │   ├── manufacturing/page.tsx
│   │   ├── food-beverage/page.tsx
│   │   ├── cosmetics/page.tsx
│   │   ├── supplements/page.tsx
│   │   └── wholesale-distribution/page.tsx
│   │
│   ├── compare/                # Competitor comparison pages
│   │   ├── page.tsx            # Comparison hub/overview
│   │   ├── katana/page.tsx
│   │   ├── wherefour/page.tsx
│   │   ├── mrpeasy/page.tsx
│   │   ├── fishbowl/page.tsx
│   │   ├── cin7/page.tsx
│   │   ├── dear-systems/page.tsx
│   │   ├── netsuite/page.tsx
│   │   ├── sap-business-one/page.tsx
│   │   ├── odoo/page.tsx
│   │   ├── inflow/page.tsx
│   │   ├── craftybase/page.tsx
│   │   ├── sortly/page.tsx
│   │   └── spreadsheets/page.tsx
│   │
│   ├── blog/
│   │   ├── page.tsx            # Blog listing
│   │   └── [slug]/page.tsx     # Individual post
│   │
│   └── not-found.tsx           # 404 page
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Katana-style mega-menu (all nav logic here)
│   │   └── Footer.tsx          # Navigation.tsx does NOT exist — removed
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Accordion.tsx
│   │   ├── ComparisonTable.tsx
│   │   └── ...
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── TrustBar.tsx
│   │   ├── BeforeAfter.tsx
│   │   ├── FeaturesTabbed.tsx
│   │   ├── WhoItsFor.tsx
│   │   ├── WhyBrahmin.tsx
│   │   ├── SocialProof.tsx
│   │   └── FinalCTA.tsx
│   └── blog/
│       ├── PostCard.tsx
│       └── PostContent.tsx
│   ├── contact/
│   │   ├── ContactFAQ.tsx       # Client component — FAQ accordion for contact page
│   │   └── ContactForm.tsx      # Client component — static placeholder form
│   ├── roi-calculator/
│   │   └── ROICalculator.tsx    # Client component — full 3-mode interactive calculator
│   └── about/
│       ├── AboutHero.tsx
│       ├── TheGap.tsx
│       ├── OriginStory.tsx
│       ├── ByTheNumbers.tsx
│       ├── HowWereDifferent.tsx
│       ├── TheTeam.tsx
│       ├── Values.tsx
│       └── AboutCTA.tsx
├── lib/
│   ├── sanity.ts
│   └── utils.ts
├── public/
│   ├── images/
│   │   ├── logo.svg
│   │   ├── customers/
│   │   ├── integrations/
│   │   └── competitors/
│   ├── robots.txt
│   └── sitemap.xml
├── sanity/
│   ├── schemas/
│   │   └── post.ts
│   └── sanity.config.ts
├── styles/
│   └── globals.css
├── tailwind.config.ts
├── next.config.js
└── package.json
```

---

## DESIGN SYSTEM

### Colors

```javascript
// tailwind.config.ts
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',  // Main brand color
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },
  slate: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
  },
  accent: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',  // CTA color
    600: '#16a34a',
    700: '#15803d',
  },
}
```

### Typography

```javascript
fontFamily: {
  sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
}

fontSize: {
  'xs': '0.75rem',
  'sm': '0.875rem',
  'base': '1rem',
  'lg': '1.125rem',
  'xl': '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
  '5xl': '3rem',
  '6xl': '3.75rem',
}
```

**Capitalization:** Use sentence case for ALL headings, titles, buttons, and navigation.

| Element | ❌ Don't | ✅ Do |
|---------|---------|-------|
| H1 | "Inventory and Production Software That Just Works" | "Inventory and production software that just works" |
| H2 | "Everything You Need. Nothing You Don't." | "Everything you need. Nothing you don't." |
| Buttons | "Book A Demo" | "Book a demo" |

**Exceptions:** Proper nouns (Brahmin, QuickBooks), Acronyms (MRP, ERP, 3PL)

### Spacing

```javascript
spacing: {
  'section': '6rem',      // 96px
  'component': '3rem',    // 48px
  'element': '1.5rem',    // 24px
  'tight': '0.75rem',     // 12px
}
```

### Components

```jsx
// Primary CTA (green)
<Button variant="primary">Book a demo</Button>
// bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-lg font-semibold

// Secondary (outline)
<Button variant="secondary">Learn more</Button>
// border-2 border-primary-600 text-primary-600 hover:bg-primary-50 px-6 py-3 rounded-lg font-semibold

// Ghost (text link)
<Button variant="ghost">See how it works →</Button>
// text-primary-600 hover:text-primary-700 font-medium

// Standard card
<Card>...</Card>
// bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow

// Standard section
<section className="py-section">
  <div className="container mx-auto px-6 max-w-7xl">
    {/* content */}
  </div>
</section>
```

---

## HOMEPAGE SECTIONS (8 Total)

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

## SECTION 1: Hero

**File:** `components/sections/Hero.tsx`

**H1:** "Inventory and production software that just works"

**Subheadline:** "Cloud-based inventory and production management for small manufacturers—backed by a team that knows your business by name."

**Primary CTA:** "Book a demo"  
**Secondary CTA:** "See how it works"

**Reassurance:** "No credit card required · 14-day free trial · Live in 21 days"

**Visual:** Dashboard mockup in browser frame (built in code, not image)

```
┌─────────────────────────────────────────────────────────────────┐
│  [Dark gradient: slate-900 → slate-800 + blur orbs]            │
│                                                                 │
│       TRUSTED BY 300+ MANUFACTURERS SINCE 2015                  │
│                                                                 │
│    Inventory and production software                            │
│         that just works                                         │
│                                                                 │
│  Cloud-based inventory and production management...             │
│                                                                 │
│      [Book a demo]    [See how it works]                        │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │ ● ● ●   app.brahmin-solutions.com                         │  │
│  │ ┌─────────────────────────────────────────────────────┐   │  │
│  │ │  Orders: 147  │  Inventory: 2,847  │  Production: 89%│  │  │
│  │ │  [chart]         [chart]              [chart]        │  │  │
│  │ └─────────────────────────────────────────────────────┘   │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ✓ No credit card required  ✓ 14-day trial  ✓ Setup in minutes │
└─────────────────────────────────────────────────────────────────┘
```

**Dashboard Elements (built in code):**
- Browser frame with traffic lights
- 4 stat cards: Orders (147), Inventory (2,847), Production (89%), Revenue ($124K)
- Area chart with green gradient
- Activity feed items

---

## SECTION 2: Trust Bar

**File:** `components/sections/TrustBar.tsx`

**Format:** Stat badges in a row (not logos)

| Stat | Label |
|------|-------|
| 300+ | Manufacturers |
| Since 2015 | In business |
| 8 native | Integrations (+ 5,000+ via Zapier) |
| <15 min | Support response |
| 21 days | Avg. go-live |

---

## SECTION 3: Before/After

**File:** `components/sections/BeforeAfter.tsx`

**Headline:** "Stop juggling. Start running."

**Subheadline:** "Most manufacturers run on duct tape and spreadsheets. Here's what life looks like on the other side."

**Layout:** Side-by-side comparison (grid-cols-2), stack on mobile

### LEFT: "✕ BEFORE BRAHMIN"

Desktop chaos mockup showing:
- File browser with messy xlsx files
- QuickBooks widget: "⚠ Manual sync needed"
- Shopify widget: "⚠ Inventory not synced"
- Bottom bar: 😫 YOUR BRAIN "which file has the right inventory count?"

**Pain Points (below):**
- ✕ Inventory counts nobody trusts
- ✕ Three versions of every spreadsheet
- ✕ Orders falling through the cracks
- ✕ No real-time visibility into costs

### RIGHT: "✓ AFTER BRAHMIN"

Clean dashboard mockup showing:
- Browser with "app.brahmin-solutions.com/dashboard"
- Live indicator (green dot)
- "✓ Everything connected — no spreadsheets needed"
- 4 stat cards: Inventory 2,841 SKUs, Orders 47, Production 12 active, Revenue $84,291
- Recent orders table with status badges
- "Shopify synced ✓"

**Benefits (below):**
- ✓ One source of truth for every team
- ✓ Real-time inventory across every location
- ✓ Orders, production, and costs all connected
- ✓ Live in 2–4 weeks with a dedicated manager

---

## SECTION 4: Capabilities (Tabbed)

**File:** `components/sections/FeaturesTabbed.tsx`

**Headline:** "Everything you need. Nothing you don't."

**Subheadline:** "Purpose-built for small manufacturers. No bloat, no complexity — just the tools your team actually uses."

### Tab Design

**Layout:** Horizontal pill tabs, centered

**Tab Styles:**
- Inactive: `bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 px-5 py-2.5 rounded-full text-sm font-medium`
- Active: `bg-emerald-600 text-white shadow-lg shadow-emerald-200 px-5 py-2.5 rounded-full text-sm font-medium`

### The 7 Tabs

| Tab | Icon | Headline | Description | Bullets |
|-----|------|----------|-------------|---------|
| Inventory | 📍 | See stock everywhere | Track inventory across warehouses, 3PLs, and co-manufacturers — updated in real time as orders ship and production runs complete. | Multi-location tracking, Real-time stock levels, Batch & lot visibility, Barcode scanning |
| Purchasing | 🛒 | Never run out of materials | Create purchase orders, track deliveries, and manage vendors — with automatic reorder points to keep production running smoothly. | Purchase order management, Vendor management, Auto reorder points, Receiving & inspection |
| Production | 🏭 | Know what it costs | Build recipes, schedule production runs, and see true landed costs — including labor, overhead, and yield loss. | Multi-level BOMs, Work order management, Real-time cost visibility, Labor & overhead tracking |
| Traceability | 🏷️ | Stay recall-ready | Track every ingredient from receiving to customer. Generate recall reports in minutes, not days. | Full lot genealogy, One-click recall reports, FDA & FSMA compliant, Supplier traceability |
| Integrations | 🔌 | Connect everything | Sync with the tools you already use. No more double-entry or copy-paste between systems. | QuickBooks & Xero, Shopify & Faire, ShipStation & SPS Commerce, 8 native integrations |
| B2B Portal | 👥 | Let customers order 24/7 | Give wholesale buyers their own login to place orders, view pricing, and track shipments. | Customer-specific pricing, Self-service ordering, Order history & reorder, Payment processing |
| Mobile | 📱 | Run the floor anywhere | Scan barcodes, receive inventory, and pick orders from any phone or tablet. | Barcode scanning, Inventory receiving, Pick pack & ship, Works offline |

### Content Layout

50/50 split: Text left, Dashboard mockup right

```
┌────────────────────────────┬────────────────────────────┐
│  🏭                        │  ┌──────────────────────┐  │
│                            │  │                      │  │
│  Know what it costs        │  │  [DASHBOARD MOCKUP]  │  │
│                            │  │  Work Order #1042    │  │
│  Description text...       │  │  Cost Breakdown      │  │
│                            │  │  $1,445.00 total     │  │
│  ✓ Multi-level BOMs        │  │                      │  │
│  ✓ Work order management   │  └──────────────────────┘  │
│  ✓ Real-time cost          │                            │
│  ✓ Labor tracking          │                            │
│                            │                            │
│  [Learn more →]            │                            │
└────────────────────────────┴────────────────────────────┘
```

### Dashboard Mockups (per tab) - ALL INTERACTIVE

**Inventory:** Interactive SKU detail modal with clickable stat cards
- Header: Product name ("Organic Maple Granola") + status badge + SKU
- 4 clickable stat cards: On Hand (12,847 - blue), Allocated (8,234 - amber), Expected (3,500 - purple), Shortage (892 - red)
- Click On Hand → shows warehouse breakdown table
- Click Allocated → shows orders table with status badges
- Click Expected → shows incoming PO info
- Click Shortage → shows shortage alert
- Generic product/warehouse names (not customer data)

**Purchasing:** Interactive PO management with 3 tabs (Purchase Orders, Reorder Alerts, Vendors)
- "+ New PO" button in header
- Purchase Orders Tab: List of POs with status badges (Pending/Shipped/Received), click to expand with View/Receive buttons
- Reorder Alerts Tab: Items below reorder point with current vs. minimum quantities, "Create PO" button per item
- Vendors Tab: Vendor list with star ratings, item count, last order date, "+ Add Vendor" button

**Production:** Interactive work order with 3 tabs (Recipe, Costs, Timeline)
- Work Order #WO-1042, "In Progress" badge
- Recipe Tab: Ingredient list with pick status (green dots for picked)
- Costs Tab: Bar visualization of ingredient/labor/overhead costs, total $1,445.00
- Timeline Tab: Progress steps with animated "in progress" indicator

**Traceability:** Interactive lot trace with expandable timeline
- Lot #: LOT-2026-0342
- Click each step (Received → Production → QA → Shipped) to expand details
- Expanded view shows: Location, PO#, Temperature, Tests passed, Tracking#
- "Generate Recall Report" button opens preview with affected lots/units/customers
- Download button in recall preview

**Integrations:** Interactive connected apps list
- Click each app (QuickBooks, Shopify, ShipStation, Amazon) to expand
- Expanded view shows: Last Sync, Records count, Sync Type
- Action buttons: "Sync Now" and "Settings"
- "+ Add Integration" reveals grid of available apps (Xero, WooCommerce, etc.)

**B2B Portal:** Interactive wholesale ordering cart
- Products with +/- quantity buttons (live updating)
- Click product to expand: Case Price, Line Total, Stock status
- "+ Add Product" button adds new item to cart
- Dynamic order total calculation
- "Place Order" shows success confirmation with email message

**Mobile:** Interactive phone mockup matching actual Brahmin app
- Phone frame with status bar and home indicator
- App header with Brahmin logo
- Main menu: Receive, Work Order, Pick & Pack, Inventory Adjustment, Cycle Count
- Clickable buttons open sub-screens:
  - Receive: Barcode scan + recent receives
  - Work Order: Active work orders list
  - Pick & Pack: Scan to pick + orders to pick
  - Inventory Adjustment: Scan item interface
  - Cycle Count: Active counts with progress
- Each sub-screen has back navigation  
**Traceability:** Lot trace timeline (Received → Production → QA → Shipped)  
**Integrations:** Connected apps list with sync status  
**B2B Portal:** Wholesale ordering interface  
**Mobile:** Phone frame with app UI

### Bottom Elements

**CTA:** "See all features →"

**Mini-testimonial:**
```
"We cut inventory counting time by 75% in the first month."
— Sarah Chen, Operations Manager, Elevated Oats
```

---

## SECTION 5: Who It's For

**File:** `components/sections/WhoItsFor.tsx`

**Headline:** "Built for how you work"

**Subheadline:** "Whether you make it, move it, or sell it—Brahmin has the workflow for you."

### Card 1: Makers
- Icon: Factory (blue)
- Badge: "In-house manufacturing"
- Tags: Food & Beverage, Cosmetics, Supplements, Hardware
- Headline: "You make it"
- Body: "Track production, BOMs, and real-time costs across your shop floor. Know exactly what's being made, what it costs, and when it ships."
- Features: Bill of Materials (BOM), Work order tracking, Real-time cost visibility

### Card 2: Movers
- Icon: Truck (purple)
- Badge: "Distribution & 3PL"
- Tags: Wholesale, 3PL, Co-manufacturing, Import
- Headline: "You move it"
- Body: "See inventory across every warehouse—even ones you don't own. Sync with 3PLs and co-manufacturers without spreadsheet chaos."
- Features: Multi-location inventory, 3PL & co-mfg sync, Real-time visibility

### Card 3: Sellers
- Icon: ShoppingCart (green)
- Badge: "Wholesale & DTC"
- Tags: B2B Wholesale, Shopify DTC, Faire, Amazon
- Headline: "You sell it"
- Body: "Sync with Shopify, manage custom price lists, and let B2B customers order 24/7 through your portal."
- Features: Shopify integration, Custom price lists, B2B self-service portal

---

## SECTION 6: Why Brahmin

**File:** `components/sections/WhyBrahmin.tsx`

**Headline:** "Why manufacturers switch to Brahmin"

**Subheadline:** "Real support, fast implementation, and a team that picks up the phone."

### Part A: Where You're Coming From

3 cards showing migration paths:

**Card 1 - Spreadsheets:**
- Icon: Table (green border)
- Badge: "Manual data entry"
- Headline: "Excel & Google Sheets"
- Body: "Still on spreadsheets? We'll migrate your data and get you live in 21 days — no 6-month implementation project."
- CTA: "See how it works →"

**Card 2 - Other Software:**
- Icon: Package (orange border)
- Badge: "Poor support or wrong fit"
- Headline: "Other MRP/inventory software"
- Body: "Frustrated with Katana, Fishbowl, or Cin7? Same features, simpler interface, and support that responds in 15 minutes — not 3 days."
- CTA: "See the comparison →"

**Card 3 - Enterprise ERP:**
- Icon: Building (purple border)
- Badge: "Too complex & expensive"
- Headline: "Enterprise ERP"
- Body: "Enterprise software is built for enterprises. If you're a small manufacturer, you're paying for features you'll never use — and support you'll never get."
- CTA: "See the comparison →"

### Part B: What You Get With Us

**Badge:** "REAL HUMANS. NO CHATBOT."

**Headline:** "We don't disappear after the sale"

**Body:** "Real support from real people — not a ticket queue, not a chatbot, not a help center article. A human who knows your account and picks up when you call."

**Stats Grid (2x3):**

| Stat | Label | Subtext |
|------|-------|---------|
| <15 min | Average support response | Measured, not estimated |
| 2-4 weeks | Average implementation | Not 6 months |
| Dedicated | Implementation manager | Assigned to you personally |
| Unlimited | Training calls included | For every plan, forever |
| 6 countries | Support coverage | US, Canada, MX, UK, AU, NZ |
| 2+ features | New releases per month | Based on customer feedback |

**Supporting Copy:** "Every Brahmin customer gets a dedicated implementation manager, unlimited training, and direct access to our support team — not a tiered support package you have to pay extra for."

---

## SECTION 7: Social Proof

**File:** `components/sections/SocialProof.tsx`

**Headline:** "Real results from real manufacturers"

**Subheadline:** "Don't take our word for it. Here's what manufacturers say after switching."

### Bento Grid Layout

```
┌─────────────────────────────┬─────────────────────────┐
│  [FEATURED - Ryan Photo]    │  [Bakkar Sweets Quote]  │
│  Large, spans 2 rows        │                         │
│  "Brahmin syncs to all..."  ├─────────────────────────┤
│                             │  [Sfoglini - 5 stars]   │
│                             │                         │
├──────────────┬──────────────┴─────────────────────────┤
│  [FLFF Quote]│  [LOGO WALL - 12 logos]                │
│              │  "Trusted by 300+ manufacturers"       │
└──────────────┴────────────────────────────────────────┘
```

### Card Content

**Featured (Ryan):**
- Image: `/images/customers/ryan-chugach.jpg`
- Quote: "Brahmin syncs to all our systems and handles batch tracking, order capture, and fulfillment — everything we need in one place."
- Attribution: Ryan, Chugach Chocolates

**Bakkar Sweets:**
- 5 stars
- Quote: "Brahmin allows us to focus on growing our business instead of worrying about inventory. It's easy to use, quick, and always improving."
- Attribution: Tameer, Bakkar Sweets

**Sfoglini:**
- 5 stars
- Quote: "We have yearly inspections which include mock recalls and mass balance exercises, and both went the smoothest they ever have after using Brahmin Solutions."
- Attribution: Sfoglini Pasta

**FLFF:**
- 5 stars
- Quote: "Full visibility from purchase order to manufacturing to sales — plus accurate cost of goods. And the support is exceptional."
- Attribution: Sheldon, FLFF

**Logo Wall:**
- sfoglini.png, wild-zora.png, elevated-oats.png, codexing_logo.png, oyin-handmade.png, nanustudio.png, caterstyle.png, daily-concepts.png, cusatea.png, kalamazoo-candle.png, pse.png, bakkar-sweets.jpg

---

## SECTION 8: Final CTA

**File:** `components/sections/FinalCTA.tsx`

**Headline:** "Ready to stop fighting your software?"

**Subheadline:** "Book a 30-minute demo. We'll show you the software with your actual products and workflows."

**CTA Button:** "Book your demo"

**Reassurance:** "No credit card required · 14-day free trial available."

**Stats Row:**
- 300+ Manufacturers
- 21 days Avg. go-live
- <15 min Support response

---

## IMAGES

```
/public/images/
├── logo.webp
├── customers/
│   └── ryan-chugach.jpg
└── logos/
    ├── bakkar-sweets.jpg
    ├── caterstyle.png
    ├── codexing_logo.png
    ├── cusatea.png
    ├── daily-concepts.png
    ├── elevated-oats.png
    ├── FLFF.png
    ├── kalamazoo-candle.png
    ├── nanustudio.png
    ├── oyin-handmade.png
    ├── pse.png
    ├── sfoglini.png
    └── wild-zora.png
```

---

## META TAGS

### Homepage
- **Title:** Brahmin Solutions | Inventory and production software that just works
- **Description:** Production tracking, inventory control, and traceability for small and mid-sized manufacturers. Go live in weeks with dedicated support. Free 14-day trial.

### Features
- **Title:** MRP Software Features | Brahmin Solutions
- **Description:** Inventory management, production tracking, batch traceability, B2B portal, and native integrations with QuickBooks, Shopify, and more. See all features of Brahmin Solutions MRP software.

### Pricing
- **Title:** Pricing | Brahmin Solutions MRP Software
- **Description:** Brahmin Solutions starts at $199/month. No per-transaction fees. Includes dedicated support and implementation. See all plans and pricing.

### Compare (Hub)
- **Title:** Compare Brahmin to Other MRP Software
- **Description:** See how Brahmin compares to Katana, Fishbowl, Cin7, NetSuite, and other inventory and production software for manufacturers.

### About
- **Title:** About Us | Brahmin Solutions
- **Description:** Founded in 2015 by Brahm Meka. Brahmin Solutions helps 300+ small manufacturers move from spreadsheets to a single source of truth. Independently owned, customer-funded.
- **Full Spec:** See ABOUT-PAGE-SPEC.md for complete page specification

---

## ABOUT PAGE SUMMARY

**URL:** `/about`  
**Tone:** Polished & confident  
**Founder:** Brahm Meka (photo + bio available)

**8 Sections:**
1. **Hero** — Brahm photo + "I built Brahmin because small manufacturers deserve enterprise-grade tools"
2. **The Gap** — Enterprise vs SMB data gap (emotional hook)
3. **Origin Story** — Enterprise WMS background → Family food business pain → Solution (2015)
4. **By The Numbers** — 2015 founded | 300+ manufacturers | <15 min support | 0 VC investors
5. **How We're Different** — Built to last, Real humans real help, Made for manufacturers
6. **The Team** — Brahm (featured) + 2-4 key team members
7. **Values** — Build to last, Support like we mean it, Ship what matters, Stay lean
8. **CTA** — "Ready to see the difference?"

**Key Story Points:**
- Worked at Kuehne + Nagel (Fortune 1000 freight forwarding)
- Worked at Lenoir Technologies (cloud WMS)
- Family food business struggled with spreadsheets
- All beta customers converted to paying
- Independently owned (small friends/family raise, stopped 2021)

---

## CODING STANDARDS

- Use TypeScript for all files
- Use functional components with hooks
- Use Tailwind CSS exclusively
- Follow mobile-first approach
- Every page: unique title and meta description
- All images: alt text required
- Proper heading hierarchy (one H1 per page)
- Lazy load below-the-fold content

---

## END OF SPECIFICATIONS
