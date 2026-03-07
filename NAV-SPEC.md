# BRAHMIN SOLUTIONS — NAVIGATION SPECIFICATION

**Last Updated:** March 6, 2026  
**Status:** ✅ Finalized

---

## NAVIGATION OVERVIEW

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│  [LOGO]   Features ▼   Industries ▼   Integrations   Resources ▼   Pricing         │
│                                                                      Login  [Book a Demo] │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

### Top-Level Menu Items (5)
| # | Menu Item | Type | URL |
|---|-----------|------|-----|
| 1 | Features | Dropdown | — |
| 2 | Industries | Dropdown | — |
| 3 | Integrations | Direct link | `/integrations` |
| 4 | Resources | Dropdown | — |
| 5 | Pricing | Direct link | `/pricing` |

### Right Side
| Element | Type | URL |
|---------|------|-----|
| Login | Text link | `/login` or external |
| Book a Demo | Primary CTA (emerald-600) | `/demo` |

---

## 1. FEATURES DROPDOWN

**Style:** Descriptions under each item (like Katana)

| Feature | Description | URL |
|---------|-------------|-----|
| Inventory Management | Real-time stock tracking across all locations | `/features/inventory` |
| Production & Manufacturing | Plan, schedule, and track work orders from start to finish | `/features/production` |
| Traceability & Compliance | Lot/batch tracking and instant recall reports | `/features/traceability` |
| Purchasing | Automate reorders and manage vendor relationships | `/features/purchasing` |
| MRP & Forecasting | Know what to make and buy before you run out | `/features/mrp` |
| Warehouse Management | Bin locations, pick/pack, and multi-warehouse support | `/features/warehouse` |
| B2B Portal | Let wholesale customers order 24/7 | `/features/b2b-portal` |
| Mobile App | Receive, pick, and adjust inventory from anywhere | `/features/mobile` |
| **See All Features →** | | `/features` |

**Total Feature Pages:** 9 (8 individual + 1 overview)

### Dropdown Visual Layout
```
┌─────────────────────────────────────────────────────────────┐
│  FEATURES                                                    │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Inventory Management                                        │
│  Real-time stock tracking across all locations               │
│                                                              │
│  Production & Manufacturing                                  │
│  Plan, schedule, and track work orders from start to finish │
│                                                              │
│  Traceability & Compliance                                   │
│  Lot/batch tracking and instant recall reports              │
│                                                              │
│  Purchasing                                                  │
│  Automate reorders and manage vendor relationships          │
│                                                              │
│  MRP & Forecasting                                           │
│  Know what to make and buy before you run out               │
│                                                              │
│  Warehouse Management                                        │
│  Bin locations, pick/pack, and multi-warehouse support      │
│                                                              │
│  B2B Portal                                                  │
│  Let wholesale customers order 24/7                         │
│                                                              │
│  Mobile App                                                  │
│  Receive, pick, and adjust inventory from anywhere          │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│  See All Features →                                          │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. INDUSTRIES DROPDOWN

**Style:** Descriptions under each item  
**Display:** Top 6 in dropdown + "See All" link  

### In Dropdown (6)
| Industry | Description | URL |
|----------|-------------|-----|
| Food & Beverage | Batch tracking, expiration dates, and compliance | `/industries/food-beverage` |
| Manufacturing (General) | Production planning for discrete manufacturers | `/industries/manufacturing` |
| Wholesale Distribution | Multi-channel inventory and order management | `/industries/wholesale-distribution` |
| Cosmetics & Beauty | Formula management and lot traceability | `/industries/cosmetics` |
| Electronics | Component tracking and assembly management | `/industries/electronics` |
| Apparel & Textiles | Size/color variants and seasonal inventory | `/industries/apparel` |
| **See All Industries →** | | `/industries` |

### Hub Only (3)
| Industry | URL |
|----------|-----|
| Supplements & Nutraceuticals | `/industries/supplements` |
| Cannabis/CBD | `/industries/cannabis` |
| Health & Wellness | `/industries/health-wellness` |

**Total Industry Pages:** 10 (9 individual + 1 overview)

---

## 3. INTEGRATIONS (Direct Link)

**URL:** `/integrations`  
**Type:** Hub page (individual integration pages can be added later)

### Current Integrations
| Integration | Category | Status |
|-------------|----------|--------|
| QuickBooks | Accounting | ✅ Live |
| Xero | Accounting | ✅ Live |
| Shopify | E-commerce | ✅ Live |
| ShipStation | Shipping | ✅ Live |
| WooCommerce | E-commerce | ✅ Live |
| BigCommerce | E-commerce | ✅ Live |
| Others | Various | 📝 Add later |

**Total Integration Pages:** 1 (hub page for now)

---

## 4. RESOURCES DROPDOWN

**Style:** Multi-column layout with sections

### Dropdown Visual Layout
```
┌─────────────────────────────────────────────────────────────┐
│  RESOURCES                                                   │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  COMPARE                           LEARN                     │
│  ────────                          ─────                     │
│  vs Katana                         Blog                      │
│  vs Fishbowl                       Customer Stories          │
│  vs Cin7                           FAQ                       │
│  vs MRPeasy                        Webinars                  │
│  vs Wherefour                      Help Center               │
│  vs NetSuite                       Free Tools & Templates    │
│  See All Comparisons →                                       │
│                                                              │
│  TOOLS                             COMPANY                   │
│  ─────                             ───────                   │
│  ROI Calculator                    About                     │
│                                    Contact Us                │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Compare Section
| Competitor | URL | In Dropdown? |
|------------|-----|--------------|
| Katana | `/compare/katana` | ✅ |
| Fishbowl | `/compare/fishbowl` | ✅ |
| Cin7 | `/compare/cin7` | ✅ |
| MRPeasy | `/compare/mrpeasy` | ✅ |
| Wherefour | `/compare/wherefour` | ✅ |
| NetSuite | `/compare/netsuite` | ✅ |
| DEAR Systems | `/compare/dear-systems` | Hub only |
| SAP Business One | `/compare/sap-business-one` | Hub only |
| Odoo | `/compare/odoo` | Hub only |
| inFlow | `/compare/inflow` | Hub only |
| CraftyBase | `/compare/craftybase` | Hub only |
| Sortly | `/compare/sortly` | Hub only |
| Spreadsheets | `/compare/spreadsheets` | Hub only |
| **See All Comparisons →** | `/compare` | ✅ |

### Learn Section
| Resource | URL | Status |
|----------|-----|--------|
| Blog | `/blog` | Migrating from Webflow |
| Customer Stories | `/customers` | Building |
| FAQ | `/faq` | Building |
| Webinars | `/webinars` | Building |
| Help Center | `/help` | Building |
| Free Tools & Templates | `/tools` | Building |

### Tools Section
| Tool | URL | Status |
|------|-----|--------|
| ROI Calculator | `/roi-calculator` | Building |

### Company Section
| Page | URL | Status |
|------|-----|--------|
| About | `/about` | Spec ready (ABOUT-PAGE-SPEC.md) |
| Contact Us | `/contact` | Building |

---

## 5. PRICING (Direct Link)

**URL:** `/pricing`  
**Status:** ✅ Already built

---

## TOTAL PAGE COUNT

| Section | Individual Pages | Overview/Hub | Total |
|---------|------------------|--------------|-------|
| Features | 8 | 1 | 9 |
| Industries | 9 | 1 | 10 |
| Integrations | 0 (for now) | 1 | 1 |
| Compare | 13 | 1 | 14 |
| Resources (Learn) | 6 | 0 | 6 |
| Resources (Tools) | 1 | 0 | 1 |
| Resources (Company) | 2 | 0 | 2 |
| Core Pages | 3 (Home, Pricing, Demo) | 0 | 3 |
| **TOTAL** | | | **46** |

---

## DESIGN SPECIFICATIONS

### Dropdown Styling
- **Background:** White (`#ffffff`)
- **Border:** `1px solid slate-200`
- **Shadow:** `shadow-lg`
- **Border radius:** `rounded-xl`
- **Padding:** `p-6`

### Menu Item Styling
- **Font:** Inter
- **Active state:** `text-emerald-600` with underline
- **Hover state:** `text-slate-900` with subtle background

### CTA Button (Book a Demo)
- **Background:** `bg-emerald-600`
- **Hover:** `bg-emerald-700`
- **Text:** White, medium weight
- **Border radius:** `rounded-lg`
- **Padding:** `px-4 py-2`

### Login Link
- **Style:** Text link, `text-slate-600`
- **Hover:** `text-slate-900`

---

## MOBILE NAVIGATION

On mobile (< 768px), navigation collapses to hamburger menu:

1. All dropdowns become expandable accordions
2. CTAs stack at bottom of mobile menu
3. Logo stays top-left
4. Hamburger icon top-right

---

## BUILD ORDER (Recommended)

### Phase 1: Core Pages
1. Homepage (update nav)
2. Features overview (`/features`)
3. Pricing (already built)
4. About (`/about`)
5. Contact (`/contact`)
6. Demo (`/demo`)

### Phase 2: Feature Pages
7. Inventory Management
8. Production & Manufacturing
9. Traceability & Compliance
10. Purchasing
11. MRP & Forecasting
12. Warehouse Management
13. B2B Portal
14. Mobile App

### Phase 3: Industry Pages
15. Industries overview
16. Food & Beverage
17. Manufacturing (General)
18. Wholesale Distribution
19. Cosmetics & Beauty
20. Electronics
21. Apparel & Textiles
22. Supplements
23. Cannabis/CBD
24. Health & Wellness

### Phase 4: Integrations
25. Integrations hub

### Phase 5: Compare Pages
26. Compare hub
27-39. Individual compare pages (13)

### Phase 6: Resources
40. Blog (migrate from Webflow)
41. Customer Stories
42. FAQ
43. Webinars
44. Help Center
45. Free Tools & Templates
46. ROI Calculator

---

## NOTES

- All feature pages should include the FeaturesTabbed component or similar interactive elements
- Industry pages should feature customer testimonials from that industry
- Compare pages already exist (13 built) — verify they match new nav structure
- Blog migration from Webflow is a separate project (see MIGRATION-Webflow-to-Sanity.md)
