# FEATURES-SPEC.md — Features Page Documentation

> **File:** `app/features/page.tsx` (server component)
> **Route:** `/features`
> **Note:** Renamed from `/product` — eyebrow still reads "Product" (minor fix needed)

---

## META TAGS

- **Title:** MRP Software Features | Brahmin Solutions
- **Description:** Production tracking, multi-location inventory, batch traceability, B2B portal, and 50+ integrations. See all features of Brahmin Solutions MRP software.

---

## PAGE SECTIONS (4 total)

| # | Section | Background |
|---|---------|------------|
| 1 | Hero | `bg-gradient-to-b from-slate-50 to-white` |
| 2 | Feature categories (6 sections) | `bg-white` |
| 3 | Additional features grid | `bg-slate-50` |
| 4 | Final CTA | `<CTA />` component |

---

## SECTION 1: Hero

- **Eyebrow:** "Product" ⚠️ should be updated to "Features"
- **H1:** "Everything you need. Nothing you don't."
  - "Nothing you don't." rendered in `text-slate-400`
- **Subheadline:** "Purpose-built for small manufacturers—not watered-down enterprise software with a SMB price tag."
- **Primary CTA:** "Book a Demo" → `/demo`
- **Secondary CTA:** "See Pricing" → `/pricing`
- **Background detail:** Blue blur orb `bg-primary-100` top-right

---

## SECTION 2: Feature Categories

**Layout:** Alternating left/right `lg:grid-cols-2 gap-16` with text side and visual placeholder side. Even rows: text left, odd rows: text right (`lg:order-2`/`lg:order-1`).

**Visual placeholder:** `bg-slate-50 rounded-3xl border border-slate-200 aspect-[4/3]` with centered color icon (no real screenshot yet).

### 6 Feature Categories:

| # | Label | Color | Headline | Description |
|---|-------|-------|----------|-------------|
| 1 | Inventory | `text-primary-600 bg-primary-50` (blue) | Multi-Location Inventory | Track every unit across all your locations—warehouses, 3PLs, co-manufacturers, and retail—from a single real-time dashboard. |
| 2 | Production | `text-violet-600 bg-violet-50` (violet) | Production Tracking | Manage bills of materials, work orders, and shop floor operations from a single screen. Know your real cost per unit before the batch ships. |
| 3 | Traceability | `text-rose-600 bg-rose-50` (rose) | Batch & Lot Tracking | Full chain-of-custody from raw material receipt to customer delivery. Generate a recall report in minutes, not days. |
| 4 | Sales | `text-accent-600 bg-accent-50` (green) | B2B Customer Portal | Give wholesale customers a branded portal to view inventory, submit orders, track shipments, and pay invoices—24/7, without calling you. |
| 5 | Warehouse | `text-teal-600 bg-teal-50` (teal) | Mobile Warehouse Management | Run your warehouse from any device. Scan barcodes, receive POs, pick orders, and ship—all without touching a desktop. |
| 6 | Integrations | `text-amber-600 bg-amber-50` (amber) | 50+ Integrations | Connect the tools your team already uses. No ripping and replacing—Brahmin sits at the center and syncs everything. |

### Feature Bullets per Category:

**Inventory:**
- Real-time stock levels across all locations
- Automatic reorder points and alerts
- Inventory transfers between locations
- 3PL and co-manufacturer sync
- Stock valuation (FIFO, AVCO)
- Dead stock and slow-mover reports

**Production:**
- Bills of materials (multi-level)
- Work order creation and scheduling
- Real-time production costs
- Scrap and yield tracking
- Shop floor mobile app
- Subcontract manufacturing support

**Traceability:**
- Lot and serial number tracking
- Expiration date management
- Supplier-to-customer traceability
- One-click recall reporting
- Certificate of analysis (CoA) storage
- FDA-ready audit trails

**B2B Customer Portal (Sales):**
- Branded self-service order portal
- Custom price lists per customer
- Real-time inventory visibility
- Order tracking and history
- Online invoice payments
- Volume discount support

**Mobile Warehouse Management (Warehouse):**
- Barcode and QR code scanning
- Mobile receiving and putaway
- Pick, pack, and ship workflows
- Cycle count management
- Packing slip and label printing
- Works on iOS and Android

**Integrations:**
- QuickBooks and Xero (accounting)
- Shopify and WooCommerce (ecommerce)
- ShipStation and EasyPost (shipping)
- Amazon and eBay (marketplaces)
- EDI and 3PL connections
- Open REST API for custom builds

---

## SECTION 3: Additional Features

**Eyebrow:** "And More"
**H2:** "Plus everything else you'd expect"
**Layout:** `grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3`

**12 quick features (chips with checkmarks):**
- Demand forecasting
- Purchase order management
- Vendor management
- Cost accounting
- Custom reporting
- User permissions & roles
- Multi-currency support
- Document management
- Email notifications
- Audit logs
- API access
- Data import/export

---

## SECTION 4: Final CTA

Uses shared `<CTA />` component from `components/sections/CTA.tsx`.

---

## DESIGN PATTERNS

```tsx
// Feature category badge
<div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-semibold mb-4 ${cat.color}`}>
  {cat.icon}
  {cat.label}
</div>

// Alternating layout
<div className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
  <div className={i % 2 === 1 ? 'lg:order-2' : ''}>...</div>
  <div className={`${i % 2 === 1 ? 'lg:order-1' : ''} bg-slate-50 rounded-3xl ...`}>...</div>
</div>

// Feature bullet
<li className="flex items-start gap-3">
  <svg className="w-5 h-5 text-accent-500 mt-0.5 shrink-0" ...checkmark... />
  <span className="text-slate-700">{feature}</span>
</li>

// Quick feature chip
<div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-slate-200">
  <svg className="w-4 h-4 text-accent-500 shrink-0" ...checkmark... />
  <span className="text-sm font-medium text-slate-700">{feature}</span>
</div>
```

---

## KNOWN ISSUES / TODO

- [ ] Eyebrow on Hero says "Product" — should say "Features" (route renamed)
- [ ] Visual placeholders are color icons, not real screenshots — replace with actual UI screenshots or mockups when available
