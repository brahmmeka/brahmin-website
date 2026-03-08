# ROI-CALCULATOR-SPEC.md
# Brahmin Solutions ROI Calculator

> **Goal:** Help prospects quickly see the value of switching from spreadsheets/manual processes to Brahmin — then make it easy to book a demo.

---

## DESIGN PHILOSOPHY

1. **Low friction, high value** — Start simple, let users go deeper if they want
2. **Show don't tell** — Visual before/after comparison
3. **Honest ranges** — "Between $X-$Y" feels more credible than exact numbers
4. **Emotional + financial** — Time saved = less stress, not just dollars
5. **Easy next step** — Results lead naturally to "Book a Demo"

---

## USER FLOW

```
[Landing] → [Select Mode: Quick/Medium/Detailed] → [Input Form] → [Results] → [CTA: Book Demo]
                                                                      ↓
                                                            [Optional: Email to save/PDF]
```

---

## THE 3 TIERS

### TIER 1: QUICK (3 inputs → 30 seconds)
*"Get a quick estimate based on businesses like yours"*

| Input | Type | Options/Range |
|-------|------|---------------|
| Annual Revenue | Slider | $1M → $50M (steps: $1M, $2M, $5M, $10M, $15M, $20M, $30M, $50M) |
| Industry | Dropdown | Food & Beverage, Manufacturing, Wholesale, Cosmetics, Supplements, Apparel, Electronics, Other |
| Current System | Radio buttons | Spreadsheets, QuickBooks/Accounting only, Another inventory software, Paper/manual |

**How it calculates:**
- Uses benchmarks: "Manufacturers at $X revenue in [industry] typically save Y%"
- Revenue × industry multiplier × current-system-pain-multiplier = estimated savings range

**Output:** Range-based estimate
- "Businesses like yours typically save **$18,000 - $32,000/year**"
- "Brahmin pays for itself in **1-2 months**"

---

### TIER 2: MEDIUM (adds 4 inputs → 2 minutes)
*"Get a more accurate estimate with a few more details"*

| Input | Type | Default | Range |
|-------|------|---------|-------|
| Hours/week on spreadsheets | Slider | 5 hrs | 0-40 hrs |
| Hours/week on manual data entry | Slider | 3 hrs | 0-20 hrs |
| Stockouts per month | Number input | 2 | 0-20 |
| Production delays per month | Number input | 1 | 0-10 |

**How it calculates:**
- Time savings = (spreadsheet hrs + data entry hrs) × 0.7 reduction × 52 weeks
- Stockout cost = stockouts × average order value (estimated from revenue)
- Delay cost = delays × estimated daily production value

**Output:** More specific numbers
- Time savings: "**8 hours/week** back for your team"
- Cost savings: "**$24,500/year** in recovered revenue and efficiency"
- Payback: "**1.2 months** to pay for itself"

---

### TIER 3: DETAILED (adds 4 more inputs → 4 minutes)
*"Get a precise ROI analysis for your business"*

| Input | Type | Default | Range |
|-------|------|---------|-------|
| Average order value | Currency | $500 | $50-$50,000 |
| Hourly labor cost (fully loaded) | Currency | $35 | $15-$100 |
| Employees touching inventory | Number | 3 | 1-50 |
| Compliance requirements? | Toggle | No | Yes/No |

**How it calculates:**
- Precise time savings in dollars = hours saved × labor cost × employees
- Precise stockout cost = stockouts × actual order value
- Compliance value = if yes, add "risk avoidance" component

**Output:** Full breakdown
- Time savings: **$28,392/year** (detailed calculation shown)
- Revenue protected: **$36,000/year** (stockouts + delays)
- Total annual value: **$64,392**
- Brahmin cost: **$2,388/year** ($199/month)
- Net ROI: **2,596%**
- Payback period: **14 days**

---

## RESULTS PAGE DESIGN

### Section 1: The Big Number
```
┌─────────────────────────────────────────────┐
│                                             │
│   Your estimated annual savings:            │
│                                             │
│        $24,500 - $32,000                    │
│                                             │
│   Brahmin pays for itself in 1.2 months    │
│                                             │
└─────────────────────────────────────────────┘
```

### Section 2: Before/After Visual Comparison

```
┌──────────────────────┬──────────────────────┐
│   WITHOUT BRAHMIN    │    WITH BRAHMIN      │
├──────────────────────┼──────────────────────┤
│ ❌ 8+ hrs/week on    │ ✅ 2 hrs/week on     │
│    spreadsheets      │    quick checks      │
│                      │                      │
│ ❌ 3 stockouts/month │ ✅ Near-zero         │
│    ($4,500 lost)     │    stockouts         │
│                      │                      │
│ ❌ Guessing what     │ ✅ Real-time         │
│    to order          │    reorder alerts    │
│                      │                      │
│ ❌ Recall readiness: │ ✅ Instant recall    │
│    days to trace     │    reports           │
└──────────────────────┴──────────────────────┘
```

### Section 3: The Breakdown (expandable)
- Time savings: X hours/week → $X/year
- Stockout prevention: X stockouts avoided → $X/year
- Production continuity: X delays prevented → $X/year
- **Bonus (if compliance=yes):** Risk reduction value

### Section 4: Ease of Implementation (subtle)
```
"Most customers are fully running within 2 weeks. 
No long implementation. No consultants required."
```

### Section 5: CTA
```
┌─────────────────────────────────────────────┐
│                                             │
│   Ready to stop leaving money on the table? │
│                                             │
│   [  Book a 15-Minute Demo  ]  (primary)   │
│                                             │
│   or save this report:                      │
│   [Email me a copy] (captures email)        │
│                                             │
└─────────────────────────────────────────────┘
```

---

## CALCULATION FORMULAS

### Benchmarks (for Quick mode)
```javascript
const industryMultipliers = {
  'food-beverage': 1.2,      // Higher compliance value
  'manufacturing': 1.0,      // Baseline
  'wholesale': 0.9,          // Simpler operations
  'cosmetics': 1.15,         // Compliance + batch tracking
  'supplements': 1.25,       // High compliance
  'apparel': 0.85,           // Lower complexity
  'electronics': 1.1,        // Serial tracking value
  'other': 1.0
};

const currentSystemMultipliers = {
  'spreadsheets': 1.3,       // Highest pain
  'quickbooks': 1.1,         // Some pain
  'other-software': 0.8,     // Already have something
  'paper': 1.4               // Maximum pain
};

// Base savings as % of revenue (conservative)
const baseSavingsPercent = 0.015; // 1.5% of revenue

// Quick estimate formula
const estimatedSavings = revenue * baseSavingsPercent * industryMultiplier * systemMultiplier;
```

### Time Savings (for Medium/Detailed)
```javascript
// Assume Brahmin reduces manual work by 70%
const reductionFactor = 0.7;

const weeklyHoursSaved = (spreadsheetHours + dataEntryHours) * reductionFactor;
const annualHoursSaved = weeklyHoursSaved * 52;
const annualTimeSavingsDollars = annualHoursSaved * hourlyLaborCost * employeeCount;
```

### Stockout Cost (for Medium/Detailed)
```javascript
// If no AOV provided, estimate from revenue
const estimatedAOV = revenue / 2000; // Assume ~2000 orders/year for avg manufacturer
const actualAOV = userProvidedAOV || estimatedAOV;

// Each stockout = 1.5x AOV (lost sale + customer relationship damage)
const stockoutCost = stockoutsPerMonth * actualAOV * 1.5 * 12;

// Brahmin reduces stockouts by 80%
const stockoutSavings = stockoutCost * 0.8;
```

### Production Delay Cost
```javascript
// Estimate daily production value from revenue
const dailyProductionValue = revenue / 250; // ~250 working days

// Each delay = 0.5 days of production on average
const delayCost = delaysPerMonth * (dailyProductionValue * 0.5) * 12;

// Brahmin reduces delays by 60%
const delaySavings = delayCost * 0.6;
```

### Payback Period
```javascript
const brahminAnnualCost = 199 * 12; // $2,388/year
const totalAnnualSavings = timeSavings + stockoutSavings + delaySavings;
const paybackMonths = brahminAnnualCost / (totalAnnualSavings / 12);
```

### ROI Percentage
```javascript
const roi = ((totalAnnualSavings - brahminAnnualCost) / brahminAnnualCost) * 100;
```

---

## UI/UX REQUIREMENTS

### Design
- Match Brahmin design system (blue-600 primary, emerald-600 CTA)
- Clean, spacious layout
- Mobile-responsive (many will use on phone)
- Smooth animations on slider/results

### Interactions
- Sliders should show live value as you drag
- Results update in real-time (no submit button needed)
- "Go deeper" buttons to switch from Quick → Medium → Detailed
- Results should animate in (feel rewarding)

### Accessibility
- All inputs keyboard accessible
- Screen reader friendly
- Color contrast compliant

---

## COPY/MESSAGING

### Headlines by Mode

**Quick:**
> "See what you could save in 30 seconds"

**Medium:**
> "Get a more accurate picture"

**Detailed:**
> "Calculate your precise ROI"

### Results Headlines

**Strong result (ROI > 500%):**
> "You're leaving serious money on the table"

**Good result (ROI 200-500%):**
> "Brahmin would pay for itself many times over"

**Modest result (ROI 100-200%):**
> "Brahmin would save you money and time"

**Low result (ROI < 100%):**
> "Even with conservative estimates, you'd see savings"
> (Note: This is unlikely given the math)

### Implementation Ease (subtle footer on results)
> "Most customers are up and running in under 2 weeks — no consultants, no lengthy implementation."

---

## SCHEMA MARKUP (for AEO)

```json
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Brahmin Solutions ROI Calculator",
  "description": "Calculate how much you could save by switching from spreadsheets to Brahmin inventory management software",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
}
```

---

## SUCCESS METRICS

Track these events:
- Calculator started (which mode selected)
- Calculator completed (results viewed)
- Mode upgraded (Quick → Medium, etc.)
- CTA clicked (Book Demo)
- Email captured (save report)
- Time on page

---

## COMPETITIVE DIFFERENTIATION

What makes this better than Cin7's calculator:
1. **Tiered approach** — User chooses their depth
2. **Visual before/after** — Not just numbers
3. **Pre-filled defaults** — Less friction
4. **Honest ranges** — More credible
5. **Implementation messaging** — Addresses "but it's hard to switch" objection

---

*Last updated: March 7, 2026*

---
---
---

# CLAUDE CODE PROMPT

Copy this into Claude Code:

```
## Task: Build the Brahmin Solutions ROI Calculator

Read these files first:
- ROI-CALCULATOR-SPEC.md (this spec)
- INSTRUCTIONS.md (design system)
- AEO-SPEC.md (schema requirements)

## What to Build

Create an interactive ROI Calculator at `/roi-calculator` with:

### 1. Landing/Mode Selection
- Headline: "See what switching to Brahmin could save you"
- 3 cards to choose mode:
  - Quick (30 seconds) — "Get a fast estimate"
  - Medium (2 minutes) — "More accurate numbers"
  - Detailed (4 minutes) — "Precise ROI analysis"
- User clicks a card to start that mode

### 2. Input Form (based on mode selected)
- QUICK: Revenue slider, Industry dropdown, Current system radio
- MEDIUM: Adds spreadsheet hours, data entry hours, stockouts, delays
- DETAILED: Adds AOV, labor cost, employee count, compliance toggle

### 3. Results Page
Show all 4 outputs:
- Annual cost savings ($X,XXX/year)
- Time savings (X hours/week)
- Payback period (X.X months)
- ROI percentage (XXX%)

Plus:
- Visual before/after comparison (side by side cards)
- Expandable breakdown of calculations
- Subtle implementation ease message
- Primary CTA: "Book a 15-Minute Demo"
- Secondary: "Email me this report" (captures email)

### 4. Technical Requirements
- React component with useState for form state
- Real-time calculation (no submit button)
- Smooth animations (Framer Motion or CSS transitions)
- Mobile-responsive
- Match design system: blue-600 primary, emerald-600 CTAs
- Sliders using a nice UI (could use shadcn/ui Slider)

### 5. Calculations
Use the formulas from ROI-CALCULATOR-SPEC.md:
- Industry multipliers for Quick mode
- 70% time reduction factor
- 80% stockout reduction
- 60% delay reduction
- $199/month for Brahmin cost

### 6. AEO Requirements
- Add WebApplication schema markup
- Make sure page has proper meta tags
- Results should include citable facts

## Files to Create
- src/app/roi-calculator/page.tsx (main page)
- src/components/roi-calculator/ModeSelector.tsx
- src/components/roi-calculator/QuickForm.tsx
- src/components/roi-calculator/MediumForm.tsx
- src/components/roi-calculator/DetailedForm.tsx
- src/components/roi-calculator/Results.tsx
- src/components/roi-calculator/BeforeAfter.tsx
- src/lib/roi-calculations.ts (calculation functions)

## After Building
Verify:
□ All 3 modes work correctly
□ Calculations produce reasonable numbers
□ Results are visually compelling
□ Mobile responsive
□ CTAs are prominent
□ Matches design system
□ Schema markup added

Update spec files:
- Add to SITEMAP-Complete.md
- Update HANDOFF.md
```
