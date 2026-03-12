# CONTACT-SPEC.md — Contact Page

**URL:** `/contact`
**File:** `app/contact/page.tsx`
**Components:** `components/contact/ContactFAQ.tsx` (client — accordion), `components/contact/ContactForm.tsx` (client — form)
**Status:** ✅ Built (March 2026)
**Last Updated:** March 2026

---

## Overview

- **Purpose:** General contact hub with equal-weight routing to demo, support, and partnerships
- **Tone:** Warm, direct — reinforces Brahmin's "real humans" support differentiator
- **Type:** Server component (page) + `'use client'` ContactFAQ sub-component

---

## Sections (in order)

1. **Hero** — eyebrow, H1, subhead, 3-stat bar (300+ · <15 min · 21 days)
2. **Routing cards** — 3 equal-weight cards (demo / support / partnerships)
3. **General contact form** — 2-col layout: trust signals left, form right
4. **FAQ** — 4 questions in accordion (ContactFAQ client component)

---

## Key Copy

- **H1:** "We're here — reach out anytime"
- **Subhead:** "Whether you have a question, need a demo, or just want to say hello — our team responds fast. Real people, not a ticket queue."
- **Form CTA:** "Send message"
- **Response note:** "We respond within 15 minutes during business hours (Mon–Fri, 8am–6pm ET)."

---

## Routing Cards (3)

| Card | Icon | CTA | Link |
|------|------|-----|------|
| Book a demo | 📅 | "Book a demo" | `/demo` (internal) |
| Get support | 💬 | "Visit help center" | `https://support.brahmin-solutions.com/en/` (external) |
| Partner with us | 🤝 | "Email partnerships" | `mailto:partnerships@brahmin-solutions.com` |

Support card also shows `support@brahmin-solutions.com` as a sub-link.

---

## Form Fields

| Field | Type | Placeholder |
|-------|------|-------------|
| Full name | text | Jane Smith |
| Work email | email | jane@company.com |
| Company | text | Acme Manufacturing |
| What can we help with? | select | Request a demo / General question / Support issue / Partnership inquiry / Something else |
| Message | textarea | "Tell us a bit about your business..." |

**Note:** Form is a static placeholder — wire to HubSpot by adding a form ID and portal ID. Currently `onSubmit` is `preventDefault`.

---

## FAQ Questions (4)

1. What happens after I submit the form?
2. How fast will I hear back?
3. What does the demo cover?
4. Do you work with companies in my industry?

---

## Design Patterns

- Hero: `bg-gradient-to-b from-slate-50 to-white` with decorative blur orbs
- Stat bar: 3 stats inline, stacked on mobile
- Routing cards: `bg-slate-50 rounded-2xl border border-slate-200 p-8 flex flex-col` — equal height, icon badge + title + body + CTA
- Demo card CTA: `bg-emerald-600` (primary action)
- Support card CTA: `bg-primary-600`
- Partnerships card CTA: `border border-slate-200` (tertiary)
- Form section: `bg-slate-50` with white card for form
- FAQ: uses ContactFAQ component (matches FAQ page accordion style — `border rounded-xl`, `bg-primary-600` chevron circle)

---

## Contact Info Displayed

| Channel | Where |
|---------|-------|
| `support@brahmin-solutions.com` | Support card sub-link + form section trust signal |
| `partnerships@brahmin-solutions.com` | Partnerships card CTA (mailto) |
| Help center | Support card main CTA (external link, opens new tab) |

---

## Meta Tags

- **Title:** Contact Us | Brahmin Solutions
- **Description:** Get in touch with Brahmin Solutions. Book a demo, get support, or explore partnership opportunities. We respond in under 15 minutes.
