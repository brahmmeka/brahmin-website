# BRAHMIN SOLUTIONS — NAVIGATION SPECIFICATION

**Last Updated:** March 7, 2026
**Status:** ✅ Built — Katana-style mega-menu

---

## NAVIGATION OVERVIEW

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  [LOGO h-14]  Features ▼  Industries ▼  Integrations  Resources ▼  Pricing  │
│                                                          Login  [Book a demo] │
└──────────────────────────────────────────────────────────────────────────────┘
```

**Header:** `sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 h-16`
**Container:** `container mx-auto px-6 max-w-7xl relative` (relative required for Resources dropdown positioning)
**Nav wrappers:** `h-full flex items-center` — ensures `top-full` aligns to bottom of h-16 header
**Hover behavior:** 120ms close delay via `useRef<ReturnType<typeof setTimeout>>`

### Top-Level Items
| # | Item | Type | URL |
|---|------|------|-----|
| 1 | Features | Mega-menu | — |
| 2 | Industries | Mega-menu | — |
| 3 | Integrations | Direct link | `/integrations` |
| 4 | Resources | Mega-menu | — |
| 5 | Pricing | Direct link | `/pricing` |

### Right Side Actions
| Element | Style | URL |
|---------|-------|-----|
| Login | Text link | `https://app.brahmin-solutions.com/login` |
| Book a demo | `bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-lg font-semibold` | `/demo` |

---

## 1. FEATURES MEGA-MENU

**Width:** 860px | **Position:** `absolute top-full left-0 mt-1.5` (relative to Features nav wrapper)

### Layout: 2-column feature groups + right callout panel

```
┌───────────────────────────────────────────────────┬──────────────┐
│  INVENTORY & OPERATIONS   PRODUCTION & COMPLIANCE │ emerald-600  │
│  ──────────────────────   ──────────────────────  │ panel        │
│  📍 Inventory Mgmt        🏭 Production & Mfg     │              │
│  🛒 Purchasing            🏷️ Traceability          │ Go live in   │
│  📦 Warehouse Mgmt        📊 MRP & Forecasting     │ 3–6 weeks    │
│  ─────────────────────────────────────────────    │              │
│  👥 B2B Portal   📱 Mobile App   See all →        │ ★★★★★ quote  │
│                                                   │ [Book demo]  │
└───────────────────────────────────────────────────┴──────────────┘
```

### Feature Groups
**Group 1 — Inventory & operations:**
| Icon | Label | Description | URL |
|------|-------|-------------|-----|
| 📍 | Inventory Management | Real-time stock across all locations | `/features/inventory` |
| 🛒 | Purchasing | Automate reorders and manage vendors | `/features/purchasing` |
| 📦 | Warehouse Management | Bin locations, pick/pack, and transfers | `/features/warehouse` |

**Group 2 — Production & compliance:**
| Icon | Label | Description | URL |
|------|-------|-------------|-----|
| 🏭 | Production & Manufacturing | BOMs, work orders, and true cost tracking | `/features/production` |
| 🏷️ | Traceability & Compliance | Lot tracking and instant recall reports | `/features/traceability` |
| 📊 | MRP & Forecasting | Know what to make before you run out | `/features/mrp` |

**Extras row (bottom):**
| Icon | Label | Description | URL |
|------|-------|-------------|-----|
| 👥 | B2B Portal | Let wholesale customers order 24/7 | `/features/b2b-portal` |
| 📱 | Mobile App | Receive, pick, and ship from any device | `/features/mobile` |

**Right callout panel (emerald-600 bg, w-52):**
- Eyebrow: "Implementation"
- Headline: "Go live in 3–6 weeks"
- Body: "Dedicated implementation manager. Real humans on support."
- 5-star quote: "Support responds in minutes, not days." — Tameer, Bakkar Sweets
- CTA: White "Book a demo" button → `/demo`

---

## 2. INDUSTRIES MEGA-MENU

**Width:** 680px | **Position:** `absolute top-full left-0 mt-1.5` (relative to Industries nav wrapper)

### Layout: 2-column grid of 6 industries

```
┌──────────────────────────────────────────┐
│  🥫 Food & Beverage   💄 Cosmetics       │
│  🏗️ Manufacturing     💊 Supplements     │
│  🚚 Wholesale Dist.   👕 Apparel         │
│  ──────────────────────────────────────  │
│  See all industries →                    │
└──────────────────────────────────────────┘
```

### Industries in Dropdown (6)
| Icon | Label | Description | URL |
|------|-------|-------------|-----|
| 🥫 | Food & Beverage | Batch tracking, expiration dates, and compliance | `/industries/food-beverage` |
| 🏗️ | Manufacturing | Production planning for discrete manufacturers | `/industries/manufacturing` |
| 🚚 | Wholesale Distribution | Multi-channel inventory and order management | `/industries/wholesale-distribution` |
| 💄 | Cosmetics & Beauty | Formula management and lot traceability | `/industries/cosmetics` |
| 💊 | Supplements & Nutraceuticals | Compliance tracking and expiration management | `/industries/supplements` |
| 👕 | Apparel & Textiles | Size/color variants and seasonal inventory | `/industries/apparel` |

"See all industries →" → `/industries`

### Hub Only (not in dropdown)
- Electronics `/industries/electronics`
- Cannabis/CBD `/industries/cannabis`
- Health & Wellness `/industries/health-wellness`

---

## 3. INTEGRATIONS (Direct Link)

**URL:** `/integrations` | **Status:** ✅ Built (rewritten March 2026)

### Confirmed Native Integrations (8)
| Integration | Category |
|-------------|----------|
| QuickBooks Online | Accounting |
| Xero | Accounting |
| Shopify | Ecommerce |
| WooCommerce | Ecommerce |
| BigCommerce | Ecommerce |
| Faire | Wholesale & EDI |
| SPS Commerce | Wholesale & EDI |
| ShipStation | Shipping |

Plus: Zapier (5,000+ apps) | REST API in beta

---

## 4. RESOURCES MEGA-MENU

**Width:** 860px | **Position:** `absolute top-16 right-0 mt-1.5` (relative to `max-w-7xl` container — NOT the nav wrapper. Resources nav wrapper has NO `relative` class so the container is the positioning parent.)

### Layout: 3 columns + right dark panel

```
┌──────────────────────────────────────────────────────┬──────────────┐
│  LEARN ────────  COMPARE ──────────  COMPANY ──────  │ slate-900    │
│  ✍️ Blog         vs Spreadsheets    🏢 About us      │ panel        │
│  ❓ FAQ          vs Katana MRP      📞 Contact us    │              │
│  🎓 Webinars     vs Fishbowl        📅 Book a demo   │ 300+ mfrs    │
│  💡 Help center  vs NetSuite                         │ trust Brahmin│
│  🛠️ Free tools   vs Cin7                             │              │
│                  vs Wherefour                        │ ★★★★★ FLFF   │
│                  See all →                           │ [Read stories]│
│  ─────────────────────────────────────────────────   │              │
│  🧮 Free  ROI Calculator — See how much you'd save → │              │
└──────────────────────────────────────────────────────┴──────────────┘
```

### Column details

**Learn column (blue-400 accent bar):**
| Icon | Label | Icon bg | URL |
|------|-------|---------|-----|
| ✍️ | Blog | bg-blue-50 text-blue-600 | `/blog` |
| ❓ | FAQ | bg-sky-50 text-sky-600 | `/faq` |
| 🎓 | Webinars | bg-purple-50 text-purple-600 | `/webinars` |
| 💡 | Help center | bg-slate-100 text-slate-600 | `https://support.brahmin-solutions.com/en/` (external, opens new tab) |
| 🛠️ | Free tools & templates | bg-emerald-50 text-emerald-700 | `/tools` |

Note: Customer Stories is NOT in this column — it lives in the right panel only.

**Compare column (violet-400 accent bar):**
| Order | Label | URL |
|-------|-------|-----|
| 1 | vs Spreadsheets | `/compare/spreadsheets` |
| 2 | vs Katana MRP | `/compare/katana` |
| 3 | vs Fishbowl | `/compare/fishbowl` |
| 4 | vs NetSuite | `/compare/netsuite` |
| 5 | vs Cin7 | `/compare/cin7` |
| 6 | vs Wherefour | `/compare/wherefour` |
| — | See all comparisons → | `/compare` |

Note: MRPeasy removed from dropdown (page still exists at `/compare/mrpeasy`).

**Company column (emerald-400 accent bar):**
| Icon | Label | Icon bg | URL |
|------|-------|---------|-----|
| 🏢 | About us | bg-primary-50 text-primary-600 | `/about` |
| 📞 | Contact us | bg-orange-50 text-orange-600 | `/contact` |
| 📅 | Book a demo | bg-emerald-50 text-emerald-700 | `/demo` |

**Bottom featured strip:**
- Gradient: `from-blue-50 via-violet-50 to-emerald-50`
- "Free" pill badge + "ROI Calculator — See how much time and money you could save"
- → `/roi-calculator`

**Right callout panel (slate-900 bg, w-52):**
- Eyebrow: "Customer stories"
- Headline: "300+ manufacturers trust Brahmin"
- Body: "See how food, cosmetics, and wholesale businesses replaced spreadsheets."
- 5-star quote: "Full visibility from purchase order to manufacturing to sales." — Sheldon, FLFF
- CTA: "Read customer stories" → `/customers`

---

## 5. PRICING (Direct Link)

**URL:** `/pricing` | **Status:** ✅ Built

---

## MOBILE NAVIGATION

Hamburger toggle at < 768px. Full-screen drawer with accordion sections.

**Sections (accordion):**
1. Features — lists all 8 features + extras
2. Industries — lists all 6 dropdown industries
3. Integrations — direct link
4. Resources — 3 sub-sections: Learn, Compare (5 items + see all), Company
5. Pricing — direct link

**Bottom CTAs:**
- Login (bordered button)
- Book a demo (emerald-600 filled button)

---

## KEY IMPLEMENTATION NOTES

- `Navigation.tsx` does NOT exist as a separate file — all nav logic is in `Header.tsx`
- Close delay: 120ms timer prevents dropdown from closing when moving mouse between trigger and dropdown
- `top-full` works correctly because nav wrappers have `h-full` spanning the full `h-16` header height
- Resources uses container-relative positioning (`relative` on container div, no `relative` on Resources nav wrapper)
- Features and Industries use button-relative positioning (`relative` on their nav wrapper divs, `left-0`)
- Help center uses `<a target="_blank">` (external link), all other Learn/Company items use `<Link>` (internal)
- Learn/Company items support `external: true` field in the data array to toggle rendering

---

## PLANNED PAGES (links are live in nav, pages to be built)

| Page | URL | In Nav Section |
|------|-----|----------------|
| Webinars | `/webinars` | Resources → Learn |
| Free tools & templates | `/tools` | Resources → Learn |
| Customer stories | `/customers` | Resources → right panel CTA |
| ROI Calculator | `/roi-calculator` | Resources → bottom strip |
| Contact us | `/contact` | Resources → Company |
