# COMPARE-TEMPLATE-SPEC.md — Comparison Page Template

> **Example file:** `app/compare/katana/page.tsx`
> **Route pattern:** `/compare/[competitor]`
> **Built pages:** `/compare/katana`, `/compare/fishbowl`, `/compare/cin7`, `/compare/spreadsheets`

---

## META TAGS (per page)

| Page | Title | Description |
|------|-------|-------------|
| katana | Brahmin Solutions vs Katana MRP \| Comparison | Compare Brahmin Solutions and Katana MRP. See why manufacturers switch: 15-min support response, simpler interface, no per-order fees. |
| fishbowl | *(similar pattern)* | *(tailored to Fishbowl)* |
| cin7 | *(similar pattern)* | *(tailored to Cin7)* |
| spreadsheets | *(similar pattern)* | *(tailored to spreadsheets)* |

---

## PAGE SECTIONS (5 total)

| # | Section | Background |
|---|---------|------------|
| 1 | Hero | `bg-gradient-to-b from-slate-50 to-white` |
| 2 | Why manufacturers switch (3 reasons) | `bg-white` |
| 3 | Feature-by-feature comparison table | `bg-slate-50` |
| 4 | Testimonial | `bg-white` |
| 5 | Final CTA | `<CTA />` component |

---

## SECTION 1: Hero

**Layout:** Left-aligned, max-w-3xl

- **Badge:** "Comparison" — `bg-slate-100 border border-slate-200 text-slate-600 rounded-full`
- **H1:** "Brahmin Solutions vs [Competitor Name]"
- **Subheadline:** Frustration hook + 2–3 key differentiators
- **Primary CTA:** "Book a Demo" → `/demo` (green)
- **Secondary CTA:** "See Pricing" → `/pricing` (blue outline)
- **Background detail:** Blue blur orb top-right

### Katana example:
> "Frustrated with Katana? Get support that actually responds—in 15 minutes, not 3 days. Plus no per-order fees, a B2B portal, and a dedicated implementation manager."

---

## SECTION 2: Why Manufacturers Switch

**Eyebrow:** "Why Manufacturers Switch"
**H2:** "3 reasons manufacturers leave [Competitor]"
**Layout:** `grid md:grid-cols-3 gap-6`

Each card: `bg-slate-50 rounded-2xl p-8 border border-slate-200`
- Large emoji icon (text-3xl)
- Bold title
- Body paragraph (text-sm, text-slate-500)

### Katana switch reasons:
1. 💬 **Support that actually responds** — Katana averages 1–3 business days. Brahmin responds in 15 minutes—measured, tracked, and guaranteed.
2. 💰 **No per-order fees** — Katana charges per sales order on higher-volume plans. Brahmin is flat-rate.
3. 🏪 **B2B portal included** — Katana doesn't have a B2B customer portal.

---

## SECTION 3: Comparison Table

**H2:** "Feature-by-feature comparison"
**Layout:** `bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm`

**Table structure:**
- Column 1: Feature (w-1/2, left-aligned)
- Column 2: Brahmin Solutions (w-1/4, highlighted `bg-primary-50/20`, `text-primary-600`)
- Column 3: Competitor (w-1/4)

**Table header:** Shows plan name + starting price for each column

**Cell renderer (`Cell` component):**
- `true` → Green checkmark SVG (`text-accent-500`)
- `false` → Red/grey X SVG (`text-slate-300`)
- string → Text value (`text-sm text-slate-700 font-medium`)

**Optional `note` field** under feature name (`text-xs text-slate-400`)

**Alternating row background:** Even rows `bg-white`, odd rows `bg-slate-50/50`

### Katana comparison rows (16 rows):

| Feature | Brahmin | Katana | Note |
|---------|---------|--------|------|
| Starting price | $199/month ⚠️ | $179/month | Katana charges more for fewer users |
| Per-order fees | ✗ | ✓ | Katana charges per sales order on some plans |
| Support response time | 15 minutes | 1–3 business days | Brahmin measured and published |
| Dedicated implementation manager | ✓ | ✗ | |
| Average implementation time | 21 days | 30–60 days | |
| Multi-location inventory | ✓ | ✓ | |
| Bills of materials (multi-level) | ✓ | ✓ | |
| Work orders | ✓ | ✓ | |
| Batch & lot traceability | ✓ | Add-on | |
| B2B customer portal | ✓ | ✗ | |
| Mobile warehouse app | ✓ | ✗ | |
| QuickBooks integration | ✓ | ✓ | |
| Shopify integration | ✓ | ✓ | |
| ShipStation integration | ✓ | ✗ | |
| Open REST API | ✓ | ✓ | |
| 24/7 human support | ✓ | ✗ | |

> ⚠️ **Pricing bug:** Katana page shows `$129/month` for Brahmin — must be updated to `$199/month`

---

## SECTION 4: Testimonial

**Layout:** `max-w-3xl text-center`

- 5 gold stars
- Large blockquote (`text-2xl font-medium`)
- Avatar: initials circle + name + title

### Katana testimonial:
> "I switched from Katana and wish I had done it sooner. The support alone made it worth it—I'd been waiting 2 days for answers that Brahmin resolves in 15 minutes."
> — Rachel N., Founder, Bright Labs

---

## SECTION 5: Final CTA

Uses shared `<CTA />` component from `components/sections/CTA.tsx`.

---

## DATA STRUCTURE

```typescript
type RowValue = string | boolean

const comparisonRows: {
  feature: string
  brahmin: RowValue
  [competitor]: RowValue
  note?: string
}[]

const switchReasons: {
  title: string
  description: string
  icon: string  // emoji
}[]
```

---

## KNOWN ISSUES / TODO

- [ ] **All compare pages:** `$129/month` must be updated to `$199/month` in comparison table headers and data rows
- [ ] Confirm each page has unique meta title and description
- [ ] Consider adding a `/compare` hub page listing all competitors
