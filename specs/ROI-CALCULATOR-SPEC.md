# ROI-CALCULATOR-PAGE-SPEC.md — ROI Calculator Page

**URL:** `/roi-calculator`
**File:** `app/roi-calculator/page.tsx`
**Components:** `components/roi-calculator/ROICalculator.tsx` (client — full interactive calculator)
**Library:** `lib/roi-calculations.ts` — pure calculation functions
**Status:** ✅ Built (March 2026)
**Last Updated:** March 2026

---

## Overview

- **Purpose:** Help prospects calculate their potential savings from switching to Brahmin. Drive demo bookings.
- **Tone:** Honest and specific — uses conservative estimates, shows ranges, avoids hype
- **Type:** Server component page (metadata + schema) wrapping client-side `ROICalculator` component

---

## Sections (in order)

1. **Hero** — eyebrow "Free ROI calculator", H1, subhead, 3 trust stats bar
2. **ROI Calculator** — interactive client component (mode selector → inputs → live results)
3. **FAQ** — 4 static questions with FAQPage schema (static, server-rendered)

---

## Calculator Flow

```
[Mode selector: Quick / Medium / Detailed]
        ↓
[Input form (varies by mode)] + [Live results panel]
        ↓
[Before/After comparison]
        ↓
[CTA: Book demo + Email me this]
```

---

## Three Modes

| Mode | Time | Inputs | Output |
|------|------|--------|--------|
| Quick | 30 sec | Revenue, Industry, Current system | Savings range |
| Medium | 2 min | + Hours on spreadsheets/data entry, stockouts, delays | Specific numbers |
| Detailed | 4 min | + AOV, labor cost, employee count, compliance | Full breakdown |

---

## Formulas Used

From `lib/roi-calculations.ts`:
- **Quick:** `revenue × 0.015 × industryMultiplier × systemMultiplier`
- **Time savings:** `(spreadsheetHours + dataEntryHours) × 0.7 × 52 × laborCost × employees`
- **Stockout savings:** `stockoutsPerMonth × AOV × 1.5 × 12 × 0.8`
- **Delay savings:** `delaysPerMonth × (revenue/250) × 0.5 × 12 × 0.6`
- **Payback:** `$2,388 / (totalSavings / 12)`
- **ROI:** `((totalSavings − $2,388) / $2,388) × 100`
- **Brahmin cost:** $199 × 12 = $2,388/year

---

## Results Display

- **Big number:** Savings range (quick) or exact figure (medium/detailed) in primary-600 card
- **4 stat cards:** Time saved (hrs/wk), Payback period, Annual ROI %, Brahmin cost ($199/mo)
- **Headline:** Dynamic based on ROI % (>500% → "leaving serious money", etc.)
- **Breakdown:** Expandable accordion showing time/stockout/delay/compliance line items
- **Before/After:** 2-column comparison (red = without, green = with)
- **Upgrade prompts:** Quick → Medium → Detailed buttons in results panel
- **CTA panel:** slate-900 bg — Book demo (emerald-600) + Email me this (email capture)

---

## Design Patterns

- Hero: `bg-gradient-to-b from-slate-50 to-white`, decorative blur orbs
- Calculator section: `bg-slate-50`
- Mode cards: `border-2 rounded-2xl` with color-coded hover borders
- Input card: `bg-white rounded-2xl border border-slate-200 p-8`
- Results panel: `lg:sticky lg:top-24` (stays fixed as user scrolls inputs)
- Big number: `bg-primary-600 rounded-2xl` white text
- Before: `bg-red-50 border-red-200`
- After: `bg-emerald-50 border-emerald-200`

---

## Brahmin Differentiators Woven In

1. $199/month flat (shown in results stat card + FAQ)
2. <15 min support response (implied via "real humans" implementation message)
3. 300+ manufacturers (hero trust bar + FAQ answer)
4. 21-day avg. go-live (hero trust bar + implementation ease footer + CTA panel)
5. No VC pressure (FAQ answer on pricing)

---

## Schema Markup

- **WebApplication** — calculator tool schema (free, web-based)
- **FAQPage** — 4 questions auto-generated from static FAQ data

---

## Meta Tags

- **Title:** ROI Calculator | Brahmin Solutions
- **Description:** See how much you could save by switching from spreadsheets to Brahmin. Calculate your annual savings, hours recovered, and payback period in under 30 seconds.
