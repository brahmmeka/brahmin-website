# ABOUT-SPEC.md — About Page (As Built)

> **Route:** `/about`
> **File:** `app/about/page.tsx`
> **Planning spec:** `ABOUT-PAGE-SPEC.md`
> **Status:** ✅ Built

---

## META TAGS

- **Title:** About Us | Brahmin Solutions
- **Description:** Founded in 2015 by Brahm Meka. Brahmin Solutions helps 100+ small manufacturers move from spreadsheets to a single source of truth. Independently owned, customer-funded.

---

## PAGE SECTIONS (8 total)

| # | Section | Component | Background |
|---|---------|-----------|------------|
| 1 | Hero | `AboutHero.tsx` | `bg-white` |
| 2 | The Gap | `TheGap.tsx` | `bg-slate-50` |
| 3 | Origin Story | `OriginStory.tsx` | `bg-white` |
| 4 | By The Numbers | `ByTheNumbers.tsx` | `bg-slate-50` |
| 5 | How We're Different | `HowWereDifferent.tsx` | `bg-white` |
| 6 | The Team | `TheTeam.tsx` | `bg-slate-50` |
| 7 | Values | `Values.tsx` | `bg-white` |
| 8 | CTA | `AboutCTA.tsx` | `bg-accent-500` (green) |

All components live in `components/about/`.

---

## SECTION 1: Hero (`AboutHero.tsx`)

**Layout:** `grid lg:grid-cols-2 gap-16 items-center` — photo left, text right. On mobile photo moves above text.

**Photo:** `w-80 h-96 lg:w-96 lg:h-[480px] rounded-2xl shadow-xl`
- Placeholder: initials "BM" in `bg-slate-100`
- **TODO:** Replace with `<Image src="/images/brahm-meka.jpg" ... />`

**Floating badge** (bottom-right of photo): "Independently owned / Since 2015 · 0 VC investors"

**Pre-headline:** "Founded 2015 · 100+ manufacturers · Independently owned" (slate-400, uppercase, tracking-widest)

**H1:** "I built Brahmin because small manufacturers deserve enterprise-grade tools — without the enterprise price or complexity."

**Subheadline:** "I'm Brahm Meka, founder and CEO. After building warehouse systems for Fortune 1000 companies, I saw the gap firsthand: big companies had data as a competitive advantage, while small manufacturers were flying blind on spreadsheets."

**Signature:** "— Brahm Meka, Founder & CEO" (with left border accent)

---

## SECTION 2: The Gap (`TheGap.tsx`)

**Layout:** Centered, `max-w-3xl`, + two-column card grid below

**Eyebrow:** "The gap that started it all"

**H2:** "Big companies have data. Small manufacturers have spreadsheets."

**Body (3 paragraphs):**
1. Enterprise world — BMW, Apple, J&J have real-time visibility…
2. Small manufacturers — spreadsheets, disconnected systems, guesswork…
3. "I built Brahmin to close that gap."

**Comparison cards** (`grid grid-cols-2 gap-4`):
- Left: "Enterprise (Fortune 1000)" — 4 green checkmark items
- Right: "Most small manufacturers" — 4 red X items

---

## SECTION 3: Origin Story (`OriginStory.tsx`)

**Layout:** Centered, `max-w-3xl`

**Eyebrow:** "Our story"
**H2:** "From enterprise systems to family business"

**3 paragraphs (exact copy):**

1. *"I started my career building warehouse management systems for Fortune 1000 companies at Kuehne + Nagel, the world's largest freight forwarder, and later at Lenoir Technologies, a cloud-based WMS provider. I saw what best-in-class operations looked like: real-time data, automated workflows, total visibility."*

2. *"Then I tried to help my family run their food production business. The tools I could recommend were either too expensive, too complex, or came with support that disappeared after the sale. Even after implementing the "best" solutions, we were still managing critical operations on spreadsheets. When I talked to other small manufacturers, the story was always the same."*

3. *"In 2015, I founded Brahmin Solutions — first as a consultancy, then as a product. After two years of building alongside early customers, we launched our beta in 2018. Every single beta customer converted to a paying customer. Today, we've helped 100+ manufacturers move from operational chaos to a single source of truth."*

---

## SECTION 4: By The Numbers (`ByTheNumbers.tsx`)

**Layout:** `grid grid-cols-2 md:grid-cols-4 gap-5`

**Cards** (`bg-white rounded-2xl border border-slate-200 p-8 text-center shadow-sm`):

| Stat | Label | Subtext | Color |
|------|-------|---------|-------|
| 2015 | Founded | Building for the long haul | `text-primary-600` |
| 100+ | Manufacturers | From $500K to $50M in revenue | `text-accent-600` |
| <15 min | Support response | Measured, not promised | `text-accent-600` |
| 0 | VC investors | Independently owned, customer-funded | `text-primary-600` |

---

## SECTION 5: How We're Different (`HowWereDifferent.tsx`)

**Layout:** `grid md:grid-cols-3 gap-6`

**Cards** (`bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md`):

| Icon color | Headline | Body |
|-----------|----------|------|
| `text-primary-600 bg-primary-50` | Built to last | No VC pressure. Independently owned since 2015. Your success is our only metric. |
| `text-accent-600 bg-accent-50` | Real humans, real help | <15 min support response. You'll never talk to a chatbot. |
| `text-violet-600 bg-violet-50` | Made for manufacturers | Built from day one for production, BOMs, lot tracking, and traceability. |

---

## SECTION 6: The Team (`TheTeam.tsx`)

**Layout:** Brahm featured center + `grid grid-cols-2 md:grid-cols-4 gap-6` team grid below

**Brahm (featured):**
- `w-48 h-48 rounded-2xl` photo placeholder ("BM" initials)
- **TODO:** `<Image src="/images/brahm-meka.jpg" ... />`
- Name: Brahm Meka | Title: Founder & CEO
- Bio: "Built warehouse systems for Fortune 1000 companies. Founded Brahmin to bring that same power to small manufacturers."

**Team members (4 placeholders):**
- `w-20 h-20 rounded-full` circle avatars with initials
- **TODO:** Replace `[Name]` placeholders with real names + photos in `components/about/TheTeam.tsx`

| Placeholder | Title |
|-------------|-------|
| TM | Head of Customer Success |
| LE | Lead Engineer |
| PM | Product Manager |
| SL | Support Lead |

---

## SECTION 7: Values (`Values.tsx`)

**Layout:** `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6`

**Cards** (`bg-white rounded-2xl border border-slate-200 p-6 border-t-4`):

| Top border | Headline | Body |
|-----------|----------|------|
| `border-primary-400` | Build to last | We make decisions for the long term — in our code, our pricing, and our relationships. No shortcuts. |
| `border-accent-400` | Support like we mean it | Real humans, fast responses, and follow-through. We don't disappear after the sale. |
| `border-violet-400` | Ship what matters | We prioritize features that actually help manufacturers — not flashy demos that look good in sales calls. |
| `border-amber-400` | Stay lean | A small team that moves fast and stays close to customers. No bloat, no bureaucracy. |

---

## SECTION 8: CTA (`AboutCTA.tsx`)

**Background:** `bg-accent-500` (green)

**H2:** "Ready to see the difference?"
**Sub:** "Join 100+ manufacturers who've switched to Brahmin."

**Buttons:**
- Primary: "Book a demo" → `/demo` — white bg, green text
- Secondary: "See the product" → `/features` — white outline, ghost

---

## PENDING / TODO

- [ ] Add `brahm-meka.jpg` to `/public/images/` and update `AboutHero.tsx` + `TheTeam.tsx`
- [ ] Add team member photos to `/public/images/team/` and update `TheTeam.tsx` with real names, titles, and `<Image>` tags
- [ ] Consider adding Open Graph image for `/about` meta
