# PRICING-SPEC.md — Pricing Page Documentation

> **File:** `app/pricing/PricingPageClient.tsx` (client component)
> **Route:** `/pricing`
> **Purpose:** Interactive pricing page with real-time plan builder

---

## PAGE SECTIONS (8 total)

| # | Section | Background |
|---|---------|------------|
| 1 | Hero | `bg-gradient-to-b from-slate-50 to-white` |
| 2 | Revenue toggle | `bg-white` |
| 3A | Starter — interactive plan builder | `bg-white` |
| 3B | Growth/Pro/Enterprise — plan cards | `bg-white` |
| 4 | Comparison table | `bg-slate-50` |
| 5 | Volume discounts | `bg-white` |
| 6 | FAQ | `bg-slate-50` |
| 7 | Final CTA | `bg-primary-600` |
| 8 | Enterprise footer note | `bg-slate-50` |

---

## SECTION 1: Hero

- **Eyebrow:** "Pricing"
- **H1:** "One platform. Transparent pricing."
- **Subheadline:** "Startups get 50% off everything. Growing businesses get a 30-day money-back guarantee. Everyone gets unlimited users and training."

**Trust badges (3):**
1. Unlimited users & products on every plan
2. Priority support included
3. No contracts — cancel anytime

---

## SECTION 2: Revenue Toggle

**Label:** "What's your annual revenue?"

| Option | Value | Effect |
|--------|-------|--------|
| Under $1M | `starter` | Shows Starter plan builder with 50% off |
| $1M and above | `growth` | Shows Growth/Pro/Enterprise plan cards |

---

## SECTION 3A: Starter Plan Builder (Under $1M view)

**Headline:** "Build your plan"
**Subheadline:** "Move the sliders. Add what you need. Price updates in real time."

**Layout:** `grid lg:grid-cols-[1fr_300px]` — Left: builder | Right: sticky summary

### Left column (plan builder):

**Base plan card:**
- Starter: $199/mo
- 500 orders, 1 location included
- Badge: 🎉 STARTUP PRICING — 50% off everything

**Pick ONE free app** (radio):
- Mobile Warehouse App — Pick, pack, receive with barcode scanning. (normally $99/mo)
- B2B Customer Portal — Let wholesale customers order 24/7. (normally $99/mo)
- Add second app: $50/mo (50% off $99)

**Usage sliders:**
- Orders per month: min 500, max 50,000, step 500
- Warehouses: min 1, max 50, step 1
- Extra costs at 50% off for Starter

**Monthly add-ons (all 50% off for Starter):**

| Add-on | Starter price | Full price | Description |
|--------|--------------|------------|-------------|
| Manufacturing Pro | $100/mo | $200/mo | Multi-level BOMs, advanced scheduling, labor costing |
| Compliance Essentials | $38/mo | $75/mo | Lot/serial/expiry tracking, recall readiness |
| Planning & Analytics | $50/mo | $100/mo | Demand forecasting, KPIs, profitability dashboard |

**Onboarding & setup (one-time, optional):**

| Service | Price | Description |
|---------|-------|-------------|
| Advanced Workflow Setup | $1,500 | Custom automations & integrations configured by our team |
| Data Migration | $2,500 | We import your items, BOMs, customers, and history |
| On-Site Training | $5,000 | A Brahmin specialist at your facility. Travel additional |

### Right column (sticky "Your Plan" summary):
- Blue header (`bg-primary-600`) with large monthly total
- Line-item breakdown
- CTA: "Start Free Trial" → `/demo`
- **Starter:** "14-day free trial. No credit card required."
- Note: "🎉 Keep startup pricing 6 months after hitting $1M"
- Shows savings vs full price

---

## SECTION 3B: Growth / Pro / Enterprise (≥$1M view)

**Step 1 — Choose your plan** (3 cards, `grid md:grid-cols-3`)

### Growth — $499/mo
- Annual: $449/mo (save 10%)
- 2,500 orders · 3 locations
- Features:
  - Mobile App + B2B Portal included
  - Unlimited users & training
  - Priority support
  - All integrations
  - Dedicated CSM (90 days)

### Pro — $999/mo *(BEST VALUE badge)*
- Annual: $899/mo (save 10%)
- 6,000 orders · 6 locations
- Features:
  - Everything in Growth
  - Manufacturing Pro
  - Compliance Essentials
  - Planning & Analytics
  - Dedicated CSM (ongoing)

### Enterprise — Contact Us
- Custom pricing
- Unlimited orders & locations
- Everything in Pro
- Dedicated CSM (ongoing)
- Dark card (`bg-slate-900`)
- CTA: "Talk to Sales" → `/demo`

**Billing toggle** (Growth/Pro only): Monthly ↔ Annual (save 10%)

**Enterprise CTA panel** (shown when Enterprise selected):
- Dark (`bg-slate-900`) full-width panel
- H3: "Let's build a custom plan"
- CTA: "Talk to Sales" → `/demo`

**Step 2 — Customize your plan** (Growth/Pro only):
- Same interactive builder as Starter view (sliders + add-ons + onboarding)
- Pro: shows "All add-ons included with Pro" banner instead of add-on checkboxes
- Upgrade nudge: If Growth plan total ≥ $900/mo, suggests switching to Pro

---

## SECTION 4: Comparison Table

**H2:** "Compare plans"
**Columns:** Starter | Growth | Pro (highlighted) | Enterprise

### Categories & Features:

**LIMITS**
| Feature | Starter | Growth | Pro | Enterprise |
|---------|---------|--------|-----|------------|
| Users | Unlimited | Unlimited | Unlimited | Unlimited |
| Warehouses included | 1 | 3 | 6 | Unlimited |
| Orders/mo included | 500 | 2,500 | 6,000 | Unlimited |
| Max warehouses | 50 | 50 | 50 | Unlimited |
| Max orders/mo | 50K | 50K | 50K | Unlimited |

**APPS & PORTALS**
| Feature | Starter | Growth | Pro | Enterprise |
|---------|---------|--------|-----|------------|
| Mobile Warehouse App | Pick 1 free | ✓ | ✓ | ✓ |
| B2B Customer Portal | Pick 1 free | ✓ | ✓ | ✓ |

**MANUFACTURING**
| Feature | Starter | Growth | Pro | Enterprise |
|---------|---------|--------|-----|------------|
| Bills of Materials | ✓ | ✓ | ✓ | ✓ |
| Multi-level BOMs | Add-on | Add-on | ✓ | ✓ |
| Production Scheduling | Basic | Basic | Advanced | Advanced |
| Work Orders | ✓ | ✓ | ✓ | ✓ |

**COMPLIANCE**
| Feature | Starter | Growth | Pro | Enterprise |
|---------|---------|--------|-----|------------|
| Lot/Batch Tracking | Add-on | Add-on | ✓ | ✓ |
| Serial Number Tracking | Add-on | Add-on | ✓ | ✓ |
| Expiry Date Tracking | Add-on | Add-on | ✓ | ✓ |

**ANALYTICS**
| Feature | Starter | Growth | Pro | Enterprise |
|---------|---------|--------|-----|------------|
| Reports & Dashboards | ✓ | ✓ | ✓ | ✓ |
| Demand Forecasting | Add-on | Add-on | ✓ | ✓ |
| KPIs & Profitability | Add-on | Add-on | ✓ | ✓ |

**SUPPORT**
| Feature | Starter | Growth | Pro | Enterprise |
|---------|---------|--------|-----|------------|
| Training Calls | On request | Unlimited | Unlimited | Unlimited |
| Priority Chat Support | ✓ | ✓ | ✓ | ✓ |
| Email Support | ✓ | ✓ | ✓ | ✓ |
| Phone Support | — | — | ✓ | ✓ |
| Dedicated CSM | — | 90 days | ✓ | ✓ |

**OTHER**
| Feature | Starter | Growth | Pro | Enterprise |
|---------|---------|--------|-----|------------|
| All integrations included | ✓ | ✓ | ✓ | ✓ |
| EDI / SPS Commerce | +$500 setup | +$500 setup | +$500 setup | ✓ |
| Custom fields | ✓ | ✓ | ✓ | ✓ |
| Customizable documents | ✓ | ✓ | ✓ | ✓ |
| Attach files | ✓ | ✓ | ✓ | ✓ |
| Barcode scanning | ✓ | ✓ | ✓ | ✓ |

**Footer note:** "All plans include Growth Kickstart onboarding, no per-transaction fees, no per-seat charges, and no contracts."

---

## SECTION 5: Volume Discounts

**H2:** "Pricing that drops as you grow"
**Subheadline:** "Unlike other MRPs, we reward growth — we don't punish it."

### Extra orders (per 1,000/mo above included):

| Volume | Full price | Starter (50% off) |
|--------|-----------|-------------------|
| First 1K extra | $100/K | $50/K |
| Next 2K (up to 3K) | $75/K | $38/K |
| Next 3K (up to 6K) | $50/K | $25/K |
| 6K+ extra | $40/K | $20/K |

### Extra locations (per location above included):

| Volume | Full price | Starter (50% off) |
|--------|-----------|-------------------|
| 1–2 extra | $50 each | $25 each |
| 3–5 extra | $40 each | $20 each |
| 6–10 extra | $30 each | $15 each |
| 11+ extra | $25 each | $13 each |

---

## SECTION 6: FAQ (10 questions)

1. **What counts as an "order"?** — Confirmed sales orders only. Drafts, quotes, POs, work orders don't count.
2. **Do you really include unlimited training calls?** — Yes. Every plan, unlimited 1-on-1 calls.
3. **Do you charge per user?** — No. Unlimited users on every plan.
4. **What happens when I cross $1M in revenue?** — 6-month grace period at Starter pricing, then Growth.
5. **What's the difference between Growth and Pro?** — Pro adds Manufacturing Pro, Compliance Essentials, Planning & Analytics, and Dedicated CSM.
6. **Is there a free trial?** — Starter: 14-day free trial, no credit card. Growth/Pro: book a demo.
7. **What's the money-back guarantee?** — Growth/Pro: full refund within 30 days (must complete 2 onboarding calls).
8. **What if I go over my order limit?** — We notify you. Tiered overage billing, no service interruption.
9. **Do I get a discount for annual billing?** — 10% off Growth and Pro (annual). Starter is monthly-only.
10. **What's the maximum?** — All plans: 50,000 orders/mo, 50 warehouses. More → Enterprise.

---

## SECTION 7: Final CTA

**Background:** `bg-primary-600`
**H2:** "Ready to simplify your operations?"

**Starter revenue view:**
- Sub: "Your first 14 days are free. No credit card. No commitment."
- Primary CTA: "Start Building" → `/demo`
- Secondary: "Or book a demo first" → `/demo`

**Growth revenue view:**
- Sub: "See Brahmin with your actual products and workflows."
- Primary CTA: "Schedule a Demo" → `/demo`
- Secondary: "Or get started now" → `/demo`
- Note: "30-day money-back guarantee."

---

## SECTION 8: Enterprise Footer

- Text: "Need more than 50K orders or 50 warehouses? Contact us for Enterprise pricing"
- Link → `/demo`

---

## KEY PRICING RULES

- **Starter pricing = 50% off everything** (orders, locations, add-ons)
- **Annual discount = 10% off** Growth and Pro only (Starter is monthly-only)
- **Free apps:** Starter picks 1 free (Mobile or B2B Portal); add second for $50/mo
- **Pro includes all add-ons** (no add-on upsells shown for Pro)
- **Never show $129/month** — minimum price is $199/month (Starter)
- **Enterprise** = unlimited, custom pricing, no self-serve

---

## COMPONENT PATTERNS USED

```tsx
// Revenue toggle — controls entire page state
const [revenue, setRevenue] = useState<'starter' | 'growth'>('starter')

// Plan selection
const [selectedPlan, setSelectedPlan] = useState<PlanKey | null>('starter')

// Annual billing toggle (Growth/Pro only)
const [annual, setAnnual] = useState(false)

// Range sliders with tiered pricing calc
function calcExtraOrders(extra: number, half: boolean): number
function calcExtraLocs(extra: number, half: boolean): number

// Comparison table cell
function CCell({ v }: { v: boolean | string }) // renders Check, Dash, or text

// FAQ accordion
function FAQItem({ q, a }: { q: string; a: string }) // useState open/closed
```

---

## META TAGS

- **Title:** Pricing | Brahmin Solutions MRP Software
- **Description:** Brahmin Solutions starts at $199/month. No per-transaction fees. Includes dedicated support and implementation. See all plans and pricing.
