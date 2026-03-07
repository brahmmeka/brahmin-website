# COMPARE-TEMPLATE-SPEC.md — Comparison Page Template

> **Last Updated:** March 2026
> **Route pattern:** `/compare/[competitor]`
> **Built pages:** katana ✅, wherefour ✅, fishbowl ✅, cin7 ✅, mrpeasy ✅, netsuite ✅, spreadsheets ✅
> **Not yet built:** dear-systems, sap-business-one, odoo, inflow, craftybase, sortly

---

## PAGE STRUCTURE (7 sections)

| # | Section | Background | Notes |
|---|---------|------------|-------|
| 1 | Hero | `bg-gradient-to-br from-slate-900 via-slate-800` | Dark gradient, trust pills, two CTAs |
| 2 | Quick comparison table | `bg-white` | 5-row snapshot: price, model, support, key feature, implementation |
| 3 | Where [competitor] falls short | `bg-slate-50` | 4–5 pain points with real customer quotes |
| 4 | Where Brahmin excels | `bg-white` | H2: "Where Brahmin excels" + subhead + 4 strength cards in `grid grid-cols-1 md:grid-cols-2 gap-6` — icon `text-3xl mb-4`, headline `text-lg font-semibold text-slate-900` |
| 5 | Feature-by-feature breakdown | `bg-slate-50` | Table header: `bg-slate-800 text-white`, Brahmin column: `bg-emerald-700`, grouped into 6–8 categories |
| 6 | Who should choose Brahmin | `bg-white` | Two-column: "Choose Brahmin if…" vs "[Competitor] may be fine if…" + testimonial |
| 7 | CTA + more comparisons | `bg-slate-900` | Dark section + links to other compare pages + `<CTA />` |

---

## META TAG PATTERN

```
Title: Brahmin Solutions vs [Competitor] | Comparison
Description: See how Brahmin Solutions compares to [Competitor]. [Key differentiator 1], [key differentiator 2].
```

---

## PRICING ACCURACY RULES

All compare pages must reflect actual Brahmin pricing tiers:

| Claim | Correct wording |
|-------|----------------|
| Starting price | "From $199/month (Starter)" — NOT "flat $199" |
| Lot traceability | "Included on Pro · Add-on from $38/mo on lower plans" |
| Growth plan | $499/month |
| Pro plan | $999/month |

**Never claim:** "no add-ons", "included in every plan", or "flat $199" — these are inaccurate.
**Always say:** "from $199/month" and be specific about what's included per tier.

---

## BUILT PAGES

### `/compare/katana`
- **Key angle:** GMV/order-count pricing punishes growth; $299/mo+ vs Brahmin from $199/mo; Europe-based support; lot tracking $199/mo add-on vs Brahmin $75/mo
- **Katana pricing:** $299/month base (confirmed March 2026)
- **Rebuilt:** March 2026 with research-backed content + pricing accuracy fix

### `/compare/wherefour`
- **Key angle:** Opaque quote-based pricing ($600+/mo) vs Brahmin published tiers; 24hr email-only support; no native mobile app; allergen management workaround
- **Wherefour pricing:** $600+/month (quote required, no published pricing)
- **Built:** March 2026

### `/compare/fishbowl`
- **Key angle:** (legacy page — verify structure matches 7-section template)

### `/compare/cin7`
- **Key angle:** Support collapse after DEAR Systems acquisition, recurring price hikes, manufacturing features as add-ons (MRP, B2B portal, Advanced Manufacturing all extra)

### `/compare/mrpeasy`
- **Key angle:** Per-user pricing math (5 users Professional = $345/mo vs Brahmin $199 flat), outdated UI, email-only support, API locked to Unlimited tier (~$149/user/mo)

### `/compare/netsuite`
- **Key angle:** Enterprise overkill — year-one cost $52K-$91K+ (base $999/mo + $129/user + $25K-$150K implementation); 4-6 month implementations; not built for small manufacturers

### `/compare/spreadsheets`
- **Key angle:** (legacy page — verify structure matches 7-section template)

---

## COMPONENT PATTERNS

### Quick comparison row
```tsx
{ label: 'Starting price', brahmin: 'From $199/mo', competitor: '$X/mo', brahminBetter: true }
```

### Feature table Cell component
```tsx
function Cell({ value }: { value: string | boolean }) {
  if (value === true)  return <svg>✓ emerald</svg>
  if (value === false) return <svg>✗ slate-300</svg>
  return <span className="text-sm text-slate-600 text-center block">{value}</span>
}
```

### Table groups pattern
```tsx
const tableGroups = [
  { label: 'Pricing',                 rows: comparisonRows.slice(0, 5) },
  { label: 'Support & implementation', rows: comparisonRows.slice(5, 10) },
  { label: 'Inventory & production',  rows: comparisonRows.slice(10, ...) },
  { label: 'Traceability & compliance', rows: ... },
  { label: 'Integrations',            rows: ... },
  { label: 'Platform',                rows: ... },
]
```

---

## RESEARCH PROCESS

Before building a new compare page:
1. Search `"[Competitor] reviews"` and `"[Competitor] MRP alternatives"` for real pain points
2. Verify current competitor pricing (check their pricing page + G2/Capterra)
3. Find 3–5 real customer quotes from G2, Capterra, Trustpilot
4. Identify where Brahmin is genuinely better (not just claimed)
5. Identify where the competitor is genuinely better (be honest in the "may be fine if…" column)

---

## CONTENT PRINCIPLES

- Pain points backed by **real customer quotes** — not just assertions
- Competitor pricing verified from current sources — cite month/year
- Be honest in the "Competitor may be fine if…" column — builds credibility
- Brahmin pricing must use accurate tier language throughout
