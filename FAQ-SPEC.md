# FAQ-SPEC.md — FAQ Page

**URL:** `/faq`
**File:** `app/faq/page.tsx`
**Status:** ✅ Built
**Last Updated:** March 2026

---

## Overview
- **Purpose:** Answer common pre-sales questions, reduce friction, capture long-tail search queries
- **Tone:** Direct, confident, no-fluff — matches Brahmin support voice
- **Type:** `'use client'` — accordion requires useState

---

## Sections (in order)

1. **Hero** — gradient bg-slate-50 → white, eyebrow "FAQ", H1, subhead, two CTA buttons
2. **FAQ categories** — 6 accordion categories, each with 3–4 questions
3. **Still have questions CTA** — primary-600 bg card with decorative orbs, Book demo + Email us

---

## Key Copy

- **H1:** "Frequently asked questions" (with "questions" in text-slate-400)
- **Subhead:** "Can't find what you're looking for? Our team responds in 15 minutes."
- **CTAs:** "Book a demo" (accent-500), "See pricing" (primary border)

---

## FAQ Categories (6)

| # | Category | Questions |
|---|----------|-----------|
| 1 | General | What is Brahmin, who is it for, is it cloud-based, what industries |
| 2 | Pricing | How much ($199/mo), no per-order fees, free trial (14 days), annual pricing |
| 3 | Implementation | 3–6 weeks, dedicated manager, data migration, migrating from Katana/Fishbowl/Cin7 |
| 4 | Features | Multi-warehouse, food mfg compliance, B2B portal, mobile app |
| 5 | Integrations | What integrations (QBO, Xero, Shopify, WooCommerce, BigCommerce, Faire, ShipStation, SPS Commerce, Zapier), QuickBooks, Shopify, API beta |
| 6 | Support | vs Katana/Cin7, 15-min response meaning, 24/7 support |

---

## Design Patterns

- **Accordion item:** `border rounded-xl overflow-hidden`, open state adds `border-primary-200 shadow-sm shadow-primary-100`
- **Question button:** `w-full flex items-center justify-between gap-4 px-6 py-5`
- **Open indicator:** Rotated chevron in `bg-primary-600` circle
- **Answer:** `text-slate-600 text-sm leading-relaxed px-6 pb-5`
- **Category header:** `text-xl font-bold` with `w-2 h-2 rounded-full bg-primary-600` dot

## Schema Markup

- **FAQPage JSON-LD** injected at top of `<main>` via `<script type="application/ld+json" dangerouslySetInnerHTML>`
- Auto-generated from `faqCategories` data array — stays in sync automatically
- Schema format: `@type: FAQPage`, `mainEntity: [{ @type: Question, name, acceptedAnswer: { @type: Answer, text } }]`

---

## Meta Tags

- **Title:** Frequently Asked Questions | Brahmin Solutions
- **Description:** Answers to common questions about Brahmin Solutions pricing, implementation, features, and integrations. Our team responds in 15 minutes.
