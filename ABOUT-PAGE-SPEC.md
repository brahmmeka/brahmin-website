# Brahmin Solutions - About Page Specification

## Overview

**URL:** `/about`  
**Purpose:** Build trust, tell founder story, show team, differentiate from VC-funded competitors  
**Tone:** Polished & confident (not humble/apologetic)  
**Target Emotion:** "This founder gets it. This company isn't going anywhere."

---

## Page Structure (8 Sections)

```
┌─────────────────────────────────────────┐
│  1. HERO                                │
│     Photo + Headline + Positioning      │
├─────────────────────────────────────────┤
│  2. THE GAP                             │
│     Enterprise vs SMB problem           │
├─────────────────────────────────────────┤
│  3. ORIGIN STORY                        │
│     3 paragraphs, tight narrative       │
├─────────────────────────────────────────┤
│  4. BY THE NUMBERS                      │
│     Trust stats grid                    │
├─────────────────────────────────────────┤
│  5. HOW WE'RE DIFFERENT                 │
│     3 cards vs typical vendors          │
├─────────────────────────────────────────┤
│  6. THE TEAM                            │
│     Brahm + 2-4 key people              │
├─────────────────────────────────────────┤
│  7. VALUES                              │
│     4 action-verb values                │
├─────────────────────────────────────────┤
│  8. CTA                                 │
│     Book demo / See product             │
└─────────────────────────────────────────┘
```

---

## Section 1: Hero

### Layout
- **Desktop:** 50/50 split — Photo left, text right
- **Mobile:** Photo top, text below

### Content

**Photo:** Professional headshot of Brahm (the one from the PDF works well)

**Pre-headline (small, uppercase, slate-500):**
```
FOUNDED 2015 · 100+ MANUFACTURERS · INDEPENDENTLY OWNED
```

**Headline (text-4xl or text-5xl, font-bold, slate-900):**
```
I built Brahmin because small manufacturers deserve enterprise-grade tools — without the enterprise price or complexity.
```

**Subhead (text-lg, slate-600):**
```
I'm Brahm Meka, founder and CEO. After building warehouse systems for Fortune 1000 companies, I saw the gap firsthand: big companies had data as a competitive advantage, while small manufacturers were flying blind on spreadsheets.
```

**Signature:**
```
— Brahm Meka, Founder & CEO
```

### Design Specs
- Background: `bg-slate-50` or `bg-white`
- Photo: Rounded corners (`rounded-2xl`), subtle shadow
- No decorative elements — let the photo and words do the work

---

## Section 2: The Gap (Emotional Hook)

### Layout
- Full-width section with centered text
- Background: `bg-white`

### Content

**Headline (text-2xl, font-semibold, slate-900):**
```
The gap that started it all
```

**Body (max-w-3xl, mx-auto, text-lg, slate-600):**
```
In the enterprise world, companies like BMW, Apple, and Johnson & Johnson have real-time visibility into every unit of inventory, every production run, every dollar of cost. Data is their competitive advantage.

For most small manufacturers? It's a mess of spreadsheets, disconnected systems, and guesswork. They're not just behind — they're flying blind.

I built Brahmin to close that gap.
```

### Design Specs
- Simple, text-focused
- Generous whitespace (`py-16` or `py-20`)
- Optional: subtle gradient or light border to separate sections

---

## Section 3: Origin Story

### Layout
- Centered text, max-width for readability
- Background: `bg-slate-50`

### Content

**Headline (text-2xl, font-semibold, slate-900):**
```
From enterprise systems to family business
```

**Paragraph 1 — The Background:**
```
I started my career building warehouse management systems for Fortune 1000 companies at Kuehne + Nagel, the world's largest freight forwarder, and later at Lenoir Technologies, a cloud-based WMS provider. I saw what best-in-class operations looked like: real-time data, automated workflows, total visibility.
```

**Paragraph 2 — The Pain:**
```
Then I tried to help my family run their food production business. The tools I could recommend were either too expensive, too complex, or came with support that disappeared after the sale. Even after implementing the "best" solutions, we were still managing critical operations on spreadsheets. When I talked to other small manufacturers, the story was always the same.
```

**Paragraph 3 — The Solution:**
```
In 2015, I founded Brahmin Solutions — first as a consultancy, then as a product. After two years of building alongside early customers, we launched our beta in 2018. Every single beta customer converted to a paying customer. Today, we've helped 100+ manufacturers move from operational chaos to a single source of truth.
```

### Design Specs
- Text: `text-base` or `text-lg`, `leading-relaxed`
- Max width: `max-w-3xl`
- Paragraphs separated with `space-y-6`

---

## Section 4: By The Numbers

### Layout
- 4-column grid on desktop, 2x2 on tablet, stacked on mobile
- Background: `bg-white`

### Content

| Stat | Label | Subtext |
|------|-------|---------|
| **2015** | Founded | Building for the long haul |
| **100+** | Manufacturers | From $500K to $50M in revenue |
| **<15 min** | Support response | Average, not promised |
| **0** | VC investors | Independently owned, customer-funded |

### Design Specs
- Stats: `text-4xl font-bold text-emerald-700`
- Labels: `text-sm font-semibold text-slate-900 uppercase tracking-wide`
- Subtext: `text-sm text-slate-500`
- Cards: `bg-slate-50 rounded-xl p-6` or borderless with dividers

### Alternative: Timeline Milestones
If you prefer a timeline approach:

```
2015 ──────── 2018 ──────── 2020 ──────── Today
Founded       Beta launch   Product       100+
              (all beta     goes live     manufacturers
              customers                   
              converted)                  
```

---

## Section 5: How We're Different

### Layout
- 3 cards in a row
- Background: `bg-slate-50`

### Content

**Section Headline:**
```
Why manufacturers choose Brahmin
```

**Card 1:**
```
Icon: 🏛️ (or custom icon)
Headline: Built to last
Body: No VC pressure to chase growth at all costs. We've been independently owned since 2015, and we're not going anywhere. Your success is our only metric.
```

**Card 2:**
```
Icon: 🧑‍💻 (or custom icon)  
Headline: Real humans, real help
Body: Our average support response is under 15 minutes — not because we promise it, but because we actually do it. You'll never talk to a chatbot.
```

**Card 3:**
```
Icon: 🏭 (or custom icon)
Headline: Made for manufacturers
Body: We didn't bolt manufacturing features onto generic inventory software. Brahmin was built from day one for production, BOMs, lot tracking, and traceability.
```

### Design Specs
- Cards: `bg-white rounded-xl shadow-sm border border-slate-200 p-6`
- Icons: Emoji or Lucide icons, `text-2xl` or `w-8 h-8`
- Headlines: `text-lg font-semibold text-slate-900`
- Body: `text-sm text-slate-600`

---

## Section 6: The Team

### Layout
- You (larger, featured) + 2-4 team members (smaller grid)
- Background: `bg-white`

### Content

**Section Headline:**
```
The team behind Brahmin
```

**Section Subhead:**
```
A lean team obsessed with making manufacturers more efficient.
```

**Brahm (Featured):**
```
Photo: Professional headshot
Name: Brahm Meka
Title: Founder & CEO
Bio (optional, 1-2 lines): Built warehouse systems for Fortune 1000 companies. Founded Brahmin to bring that same power to small manufacturers.
```

**Team Members (2-4 people):**
| Photo | Name | Title |
|-------|------|-------|
| [Photo] | [Name] | Head of Customer Success |
| [Photo] | [Name] | Lead Engineer |
| [Photo] | [Name] | Product Manager |
| [Photo] | [Name] | Support Lead |

### Guidelines for Team Photos
- Consistent style (all professional OR all casual, not mixed)
- Similar background or treatment
- Don't mention location/geography — just roles
- Titles should emphasize what they do for customers

### Design Specs
- Brahm: Larger photo (`w-40 h-40` or `w-48 h-48`), centered or left-aligned
- Team grid: `grid grid-cols-2 md:grid-cols-4 gap-6`
- Photos: `w-24 h-24 rounded-full` or `rounded-xl`
- Names: `font-semibold text-slate-900`
- Titles: `text-sm text-slate-500`

---

## Section 7: Values

### Layout
- 4 values in a 2x2 grid or horizontal row
- Background: `bg-slate-50`

### Content

**Section Headline:**
```
How we work
```

**Value 1:**
```
Headline: Build to last
Body: We make decisions for the long term — in our code, our pricing, and our relationships. No shortcuts.
```

**Value 2:**
```
Headline: Support like we mean it
Body: Real humans, fast responses, and follow-through. We don't disappear after the sale.
```

**Value 3:**
```
Headline: Ship what matters
Body: We prioritize features that actually help manufacturers — not flashy demos that look good in sales calls.
```

**Value 4:**
```
Headline: Stay lean
Body: A small team that moves fast and stays close to customers. No bloat, no bureaucracy.
```

### Design Specs
- Grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6`
- Headlines: `text-lg font-semibold text-slate-900`
- Body: `text-sm text-slate-600`
- Optional: Subtle left border or icon for each value

---

## Section 8: Final CTA

### Layout
- Centered, full-width
- Background: `bg-emerald-600` (brand green) or `bg-slate-900`

### Content

**Headline (text-3xl, font-bold, text-white):**
```
Ready to see the difference?
```

**Subhead (text-lg, text-emerald-100 or text-slate-300):**
```
Join 100+ manufacturers who've switched to Brahmin.
```

**Buttons:**
- Primary: `Book a demo` → `/demo`
- Secondary (ghost): `See the product` → `/features`

### Design Specs
- Padding: `py-16` or `py-20`
- Buttons: Same style as homepage CTA
- Keep it simple — no extra imagery

---

## Meta Tags

```html
<title>About Us | Brahmin Solutions</title>
<meta name="description" content="Founded in 2015 by Brahm Meka. Brahmin Solutions helps 100+ small manufacturers move from spreadsheets to a single source of truth. Independently owned, customer-funded.">
```

---

## Design System Reference

**Colors:**
- Primary blue: `#2563eb` (blue-600)
- Accent green: `#22c55e` (emerald-600)
- Backgrounds: `slate-50`, `white`
- Text: `slate-900` (headings), `slate-600` (body)

**Typography:**
- Headlines: `font-bold` or `font-semibold`
- Body: `leading-relaxed`
- Sentence case for all headings

**Components:**
- Cards: `rounded-xl shadow-sm border border-slate-200`
- Buttons: Same as homepage spec
- Photos: `rounded-2xl` or `rounded-full` for avatars

---

## Copy Principles for This Page

### DO:
- Use "we" for company, "I" only in direct quotes from Brahm
- Lead with confidence, not apology
- Use specific numbers (100+, 2015, <15 min)
- Keep paragraphs short (3-4 sentences max)
- End sections with forward momentum

### DON'T:
- Say "I hope you try..." (too tentative)
- Mention fundraising amounts or investors by name
- Use "just" or "simply" (undermines confidence)
- Over-explain or repeat points
- Use jargon (ERP, MRP) without context

---

## Comparison to Current Page

| Current | New |
|---------|-----|
| 600+ word letter format | 8 scannable sections |
| "I started off my career..." | "Brahmin was born from a gap..." |
| Humble/apologetic tone | Confident/earned authority |
| No team section | Founder + 2-4 team members |
| Values buried at bottom | Values with action verbs |
| No stats/proof | "By The Numbers" section |
| Generic CTA | Strong, specific CTA |

---

## File Structure

```
/app/about/page.tsx          # Main about page
/components/about/
├── AboutHero.tsx            # Section 1
├── TheGap.tsx               # Section 2
├── OriginStory.tsx          # Section 3
├── ByTheNumbers.tsx         # Section 4
├── HowWereDifferent.tsx     # Section 5
├── TheTeam.tsx              # Section 6
├── Values.tsx               # Section 7
└── AboutCTA.tsx             # Section 8
```

---

## Next Steps

1. **Collect team photos** — 2-4 key people with titles
2. **Review copy direction** — Any tweaks to story or tone?
3. **Confirm stats** — Is "100+" accurate? Any other numbers to add?
4. **Build component** — Ready for Claude Code implementation

---

## Notes

- This page should feel **calm and confident** — not salesy
- The founder story is the emotional anchor — keep it tight but personal
- Team section shows you're real without over-sharing
- "Independently owned" is your moat against Katana's VC baggage
