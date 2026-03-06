# HANDOFF.md — Context from Planning Session

> **Purpose:** This file captures all decisions and specs from the Claude.ai planning session.
> **For Claude Code:** Read `INSTRUCTIONS.md` first, then this file + `CLAUDE.md` before making any changes.
> **Keep Updated:** After every task, update the status sections in this file.

---

## PROJECT STATUS

### Pages Built ✅
- Homepage (`/`)
- Features (`/features`)
- Pricing (`/pricing`)
- About (`/about`) — 8 sections per ABOUT-PAGE-SPEC.md
- Comparison pages (`/compare/katana`, `/compare/fishbowl`, `/compare/cin7`, `/compare/spreadsheets`)
- Industry pages (`/manufacturing`, `/food-beverage`, `/wholesale-distribution`)

### Pages NOT Built ❌
- *(all planned pages are built)*

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
- **Price:** $199/month (updated from $129)
- No per-transaction fees
- Includes dedicated support

### 4. Navigation Structure (Updated March 6, 2026)
- **5 top-level items:** Features (dropdown), Industries (dropdown), Integrations (direct `/integrations`), Resources (mega-menu), Pricing (direct `/pricing`)
- **Features dropdown:** 8 items with descriptions → `/features/[slug]` routes
- **Industries dropdown:** 6 items → `/industries/[slug]` routes (NEW — previously root-level)
- **Resources mega-menu:** 4 columns — Compare (6 links + see all), Learn (6 links), Tools (ROI Calculator), Company (About, Contact)
- **Mobile:** Accordion expand per section
- Comparison pages at `/compare/[competitor]`
- Industry page URLs now use `/industries/` prefix per SITEMAP-Complete.md (existing root-level pages still exist)

---

## ABOUT PAGE ✅ Built

**URL:** `/about`
**Full spec:** `ABOUT-SPEC.md`
**Components:** `components/about/` (8 files)

### 8 Sections built:
1. **AboutHero** — Brahm photo placeholder + founder quote + "independently owned" badge
2. **TheGap** — Enterprise vs SMB comparison cards + 3-paragraph emotional hook
3. **OriginStory** — Kuehne+Nagel → Lenoir Tech → family food business → 2015 founding
4. **ByTheNumbers** — 2015 · 100+ · <15 min · 0 VC
5. **HowWereDifferent** — Built to last / Real humans / Made for manufacturers
6. **TheTeam** — Brahm featured + 4 team placeholders (needs real names/photos)
7. **Values** — Build to last · Support like we mean it · Ship what matters · Stay lean
8. **AboutCTA** — Green bg, "Ready to see the difference?" + Book demo / See product

### Pending:
- [ ] Drop `brahm-meka.jpg` into `/public/images/`
- [ ] Update `TheTeam.tsx` with real team names, titles, and photos

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

## INDUSTRY PAGES MAPPED (5 total, 3 built)

| Industry | URL | Status |
|----------|-----|--------|
| Manufacturing | `/manufacturing` | ✅ Built |
| Food & Beverage | `/food-beverage` | ✅ Built |
| Cosmetics | `/cosmetics` | ❌ Not built |
| Supplements | `/supplements` | ❌ Not built |
| Wholesale/Distribution | `/wholesale-distribution` | ✅ Built |

> **Note:** Routes are at root level, not `/industries/` prefix.

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
| File | Status | Purpose |
|------|--------|---------|
| `INSTRUCTIONS.md` | ✅ Ready | Rules Claude Code follows every session |
| `HANDOFF.md` | ✅ Ready | Status tracker + all decisions (auto-updated) |
| `CLAUDE.md` | ✅ Ready | Master website specification |
| `SITEMAP-Complete.md` | ✅ Ready | Full 28-page sitemap with meta tags |
| `ABOUT-PAGE-SPEC.md` | ✅ Ready | About page detailed spec |
| `PRICING-SPEC.md` | ✅ Created | Pricing page full documentation |
| `PROMPT-About.md` | ✅ Ready | Quick prompt for About page |
| `PROMPT-Homepage.md` | ✅ Ready | Quick prompt for Homepage |

### Page Spec Status
| Page | Spec File | Status |
|------|-----------|--------|
| Homepage | In CLAUDE.md | ✅ Documented |
| Features | `FEATURES-SPEC.md` | ✅ Documented |
| Pricing | `PRICING-SPEC.md` | ✅ Documented |
| About | `ABOUT-SPEC.md` | ✅ Built |
| Compare pages | `COMPARE-TEMPLATE-SPEC.md` | ✅ Documented |
| Industry pages | `INDUSTRY-TEMPLATE-SPEC.md` | ✅ Documented |

### Key Components
- `FeaturesTabbed.jsx` — Interactive 7-tab features component (ready to use)

---

## NEXT ACTIONS

### Immediate — Build
1. [x] Build About page using ABOUT-PAGE-SPEC.md
2. [ ] Add Brahm's headshot to `/public/images/brahm-meka.jpg` — placeholder shown
3. [ ] Add team photos to `/public/images/team/` + update TheTeam.tsx with real names/titles

### Immediate — Document Existing Pages
1. [x] Create PRICING-SPEC.md from existing `/app/pricing/page.tsx`
2. [x] Create FEATURES-SPEC.md from existing `/app/features/page.tsx`
3. [x] Create COMPARE-TEMPLATE-SPEC.md from existing comparison pages
4. [x] Create INDUSTRY-TEMPLATE-SPEC.md from existing industry pages

### Audit Needed
1. [ ] Review all built pages against CLAUDE.md spec
2. [ ] Check FeaturesTabbed is integrated into homepage
3. [x] Verify pricing shows $199/month everywhere — fixed $129 in all 4 compare pages
4. [ ] Confirm all pages use sentence case headings
5. [ ] Verify SITEMAP-Complete.md matches actual pages
6. [x] Fix features page Hero eyebrow — updated to "Features"

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
