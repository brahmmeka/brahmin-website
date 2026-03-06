# PROMPT: Build About Page for Brahmin Solutions

## Instructions for Claude Code

Read the following files in this order before starting:
1. `CLAUDE.md` — Full website specification (design system, colors, typography)
2. `ABOUT-PAGE-SPEC.md` — Complete About page specification

Then build the About page at `/app/about/page.tsx` with these 8 sections.

---

## Quick Reference

### Page: `/about`

**Tone:** Polished & confident (not humble/apologetic)

**8 Sections in order:**

### 1. Hero
- 50/50 layout: Photo left, text right
- Pre-headline: `FOUNDED 2015 · 100+ MANUFACTURERS · INDEPENDENTLY OWNED`
- Headline: "I built Brahmin because small manufacturers deserve enterprise-grade tools — without the enterprise price or complexity."
- Photo: `/images/brahm-headshot.jpg` (placeholder for now)
- Signature: "— Brahm Meka, Founder & CEO"

### 2. The Gap
- Centered text, max-w-3xl
- Headline: "The gap that started it all"
- Body: Enterprise companies have data advantage, SMBs are flying blind on spreadsheets. I built Brahmin to close that gap.

### 3. Origin Story
- 3 paragraphs only (keep tight)
- Para 1: Enterprise WMS background (Kuehne + Nagel, Lenoir Technologies)
- Para 2: Family food business couldn't find good tools
- Para 3: Founded 2015, beta launched 2018, all beta customers converted

### 4. By The Numbers
- 4-column grid
- Stats: 2015 (Founded) | 100+ (Manufacturers) | <15 min (Support response) | 0 (VC investors)
- Each stat has a small subtext

### 5. How We're Different
- 3 cards
- Card 1: "Built to last" — No VC pressure, independently owned since 2015
- Card 2: "Real humans, real help" — <15 min support response, no chatbots
- Card 3: "Made for manufacturers" — Built from day one for production, BOMs, traceability

### 6. The Team
- Brahm featured (larger photo + bio)
- 2-4 team members in a grid (smaller photos)
- Use placeholder images for now
- Titles should emphasize customer-facing roles

### 7. Values
- 4 values in grid
- Build to last | Support like we mean it | Ship what matters | Stay lean
- Each has 1-2 sentence description

### 8. CTA
- Green background (bg-emerald-600)
- Headline: "Ready to see the difference?"
- Subhead: "Join 100+ manufacturers who've switched to Brahmin."
- Buttons: "Book a demo" (primary) + "See the product" (secondary/ghost)

---

## Design Specs

**Colors:**
- Primary: `blue-600` (#2563eb)
- CTA/Accent: `emerald-600` (#22c55e)
- Backgrounds: alternate `white` and `slate-50`
- Text: `slate-900` (headings), `slate-600` (body)

**Typography:**
- All headings: sentence case
- Headlines: `font-bold` or `font-semibold`
- Body: `leading-relaxed`

**Components:**
- Cards: `rounded-xl shadow-sm border border-slate-200`
- Photos: `rounded-2xl` for feature, `rounded-full` for team avatars
- Section padding: `py-16` or `py-20`

---

## Component Structure

```
/app/about/page.tsx           # Main page (imports all sections)
/components/about/
├── AboutHero.tsx
├── TheGap.tsx
├── OriginStory.tsx
├── ByTheNumbers.tsx
├── HowWereDifferent.tsx
├── TheTeam.tsx
├── Values.tsx
└── AboutCTA.tsx
```

---

## Placeholder Content

**Team members (use these until real photos):**
```
Brahm Meka — Founder & CEO
[Name TBD] — Head of Customer Success
[Name TBD] — Lead Engineer
[Name TBD] — Support Lead
```

**Photo placeholders:**
- Use `bg-slate-200` divs with initials, or
- Use placeholder.com images temporarily

---

## What NOT to do

- ❌ Don't use apologetic language ("I hope you'll try...")
- ❌ Don't mention specific funding amounts or investor names
- ❌ Don't use bullet points in the origin story
- ❌ Don't make the page too long — keep each section tight
- ❌ Don't use Title Case for headings (use sentence case)

---

## Meta Tags

```tsx
export const metadata = {
  title: 'About Us | Brahmin Solutions',
  description: 'Founded in 2015 by Brahm Meka. Brahmin Solutions helps 100+ small manufacturers move from spreadsheets to a single source of truth. Independently owned, customer-funded.',
}
```

---

## Start Building

1. Read CLAUDE.md for full design system
2. Read ABOUT-PAGE-SPEC.md for complete copy and layout details
3. Create the page and components
4. Use Tailwind CSS exclusively
5. Make it responsive (mobile-first)
