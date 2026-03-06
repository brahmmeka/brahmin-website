# INDUSTRY-TEMPLATE-SPEC.md — Industry Page Template

> **Example file:** `app/manufacturing/page.tsx`
> **Route pattern:** `/[industry]` (NOT `/industries/[industry]` — see note below)
> **Built pages:** `/manufacturing`, `/food-beverage`, `/wholesale-distribution`

> ⚠️ **Route note:** Industry pages are at the root level, not under `/industries/`.
> HANDOFF.md and SITEMAP-Complete.md may reference `/industries/*` — the actual routes are root-level.

---

## META TAGS (per page)

| Page | Title | Description |
|------|-------|-------------|
| /manufacturing | Manufacturing Software for Small Business \| Brahmin Solutions | Production tracking, BOMs, work orders, and real-time cost visibility for small manufacturers. Go live in 21 days with dedicated support. |
| /food-beverage | *(tailored to food & beverage)* | *(tailored)* |
| /wholesale-distribution | *(tailored to wholesale/distribution)* | *(tailored)* |

---

## PAGE SECTIONS (5 total)

| # | Section | Background |
|---|---------|------------|
| 1 | Hero | `bg-gradient-to-b from-slate-50 via-white to-white` |
| 2 | Feature grid (6 cards) | `bg-white` |
| 3 | Implementation steps + stats | `bg-slate-50` |
| 4 | Social proof / testimonial | `bg-white` |
| 5 | Final CTA | `<CTA />` component |

---

## SECTION 1: Hero

**Layout:** Left-aligned, max-w-3xl. Two blur orbs in background (blue top-right, violet top-left).

- **Industry badge:** Colored pill with icon + industry name (e.g. `bg-primary-50 border-primary-200 text-primary-700`)
- **H1:** Industry-specific headline (e.g., "MRP software built for how you actually manufacture")
- **Subheadline:** 1–2 sentences on core value prop for this industry
- **Primary CTA:** "Book a Demo" → `/demo` (green, `shadow-lg shadow-accent-500/25 hover:-translate-y-0.5`)
- **Secondary CTA:** "See Pricing" → `/pricing` (blue outline)
- **Reassurance line:** "No credit card required · 14-day free trial · Go live in 21 days"

### Manufacturing example:
> **H1:** "MRP software built for how you actually manufacture"
> **Sub:** "Production tracking, BOMs, work orders, and real-time cost visibility—without a 6-month implementation or a dedicated IT team."

---

## SECTION 2: Feature Grid

**Eyebrow:** "Capabilities"
**H2:** "Everything the [industry role] needs" (e.g., "Everything the shop floor needs")
**Subheadline:** "Purpose-built for [industry]. Not a watered-down version of enterprise ERP."
**Layout:** `grid md:grid-cols-2 lg:grid-cols-3 gap-5`

Each card: `bg-slate-50 hover:bg-white rounded-2xl p-6 border border-transparent hover:border-slate-200 hover:shadow-lg transition-all` with icon + title + description. Icon box scales on hover (`group-hover:scale-110`).

### Manufacturing feature cards (6):

| Title | Color | Description |
|-------|-------|-------------|
| Bills of Materials | `text-primary-600 bg-primary-50` | Multi-level BOMs with real-time costing. Know exactly what a production run costs before you start it. |
| Work Order Management | `text-violet-600 bg-violet-50` | Create, schedule, and track work orders from the shop floor. See status, progress, and costs in real time. |
| Multi-Location Inventory | `text-teal-600 bg-teal-50` | Track raw materials, WIP, and finished goods across every location—warehouses, shop floor, and co-manufacturers. |
| Shop Floor Mobile App | `text-amber-600 bg-amber-50` | Operators clock in to work orders, report output, and flag issues from any device—no desktop required. |
| Real-Time Cost Visibility | `text-rose-600 bg-rose-50` | See labor, material, and overhead costs per work order as they happen. No month-end surprises. |
| Subcontract Manufacturing | `text-accent-600 bg-accent-50` | Send work to outside processors and track it end-to-end—costs, lead times, and quality. |

---

## SECTION 3: Implementation

**Layout:** `grid lg:grid-cols-2 gap-16 items-center` — steps left, stats grid right

**Eyebrow:** "Implementation"
**H2:** "Live in 21 days. Not 6 months."
**Body:** "We assign your implementation manager before you sign the contract. They know manufacturing—not just software."

**4 numbered steps:**

| Step | Title | Description |
|------|-------|-------------|
| 01 | Data migration | We import your existing BOMs, inventory, and customer data. No manual re-entry. |
| 02 | Configuration | Your dedicated manager sets up locations, workflows, and integrations to match how you work. |
| 03 | Team training | We train every role—from purchasing to shop floor—with live sessions and recorded walkthroughs. |
| 04 | Go live | Average time from contract to production: 21 days. We stay on to make sure day one goes smoothly. |

**4 stat cards** (`grid grid-cols-2 gap-4`, `bg-white rounded-2xl border border-slate-200 p-6 shadow-sm text-center`):
- 21 days / Average go-live / "Not 6 months."
- 1:1 / Implementation manager / "Your own human."
- 15 min / Support response / "After you're live too."
- 300+ / Manufacturers / "Since 2015."

---

## SECTION 4: Social Proof

**Layout:** `bg-slate-900 rounded-3xl p-10 md:p-12` — dark card with `grid md:grid-cols-2 gap-10 items-center`

**Left side:** 5 stars + blockquote + avatar (initials circle)
**Right side:** 4 result stats in `grid grid-cols-2 gap-4` (`bg-slate-800 rounded-xl p-4 text-center border border-slate-700`)

### Manufacturing testimonial:
> "We went live in 18 days. Our previous ERP implementation took 8 months and we still had to hire a consultant."
> — Jason L., Plant Manager, Summit Manufacturing

**Result stats:**
- 18 days / To go live
- 40% / Labor cost reduction
- 99.8% / Inventory accuracy
- 2× / Production throughput

---

## SECTION 5: Final CTA

Uses shared `<CTA />` component from `components/sections/CTA.tsx`.

---

## DATA STRUCTURES

```typescript
// Feature cards
const features: {
  icon: JSX.Element
  title: string
  description: string
  color: string  // Tailwind class string
}[]

// Implementation steps
const steps: {
  n: string    // '01', '02', etc.
  title: string
  desc: string
}[]
```

---

## KNOWN ISSUES / TODO

- [ ] **Route mismatch:** Pages are at `/manufacturing`, `/food-beverage`, `/wholesale-distribution` — NOT `/industries/*`. Update HANDOFF.md/SITEMAP-Complete.md if they reference `/industries/` prefix.
- [ ] Social proof uses placeholder initials (JL) — replace with real customer photos when available
- [ ] Food-beverage and wholesale-distribution pages need their own tailored features/testimonials verified
