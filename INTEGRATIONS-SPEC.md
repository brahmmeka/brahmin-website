# INTEGRATIONS-SPEC.md — Integrations Page

**URL:** `/integrations`
**File:** `app/integrations/page.tsx`
**Status:** ✅ Built (rewritten March 2026)
**Last Updated:** March 2026

---

## Overview
- **Purpose:** Show confirmed native integrations and Zapier ecosystem, drive demo bookings
- **Tone:** Honest, specific — only lists confirmed integrations (no fake "50+" claims)
- **Note:** `<CTA />` component removed from this page (had inline CTA already, avoided double-dark visual issue)

---

## Sections (in order)

1. **Hero** — eyebrow, H1, subhead, stats bar (8 native · 5,000+ via Zapier · API in beta)
2. **Native integrations grid** — 4 categories, 8 total integrations
3. **Zapier section** — 2-col: left explains value, right shows 8 automation examples
4. **Inline CTA** — replaces the removed `<CTA />` component

---

## Key Copy

- **H1:** "Connect your favorite tools"
- **Subhead:** "Brahmin connects with the tools you already use — no duplicate entry, no manual syncing."
- **Stats bar:** "8 native integrations · 5,000+ apps via Zapier · REST API in beta"

---

## Native Integrations (8 confirmed)

| Integration | Category | Notes |
|-------------|----------|-------|
| QuickBooks Online | Accounting | Two-way sync: invoices, POs, payments, COGS |
| Xero | Accounting | Two-way sync |
| Shopify | Ecommerce | Real-time orders, inventory, tracking |
| WooCommerce | Ecommerce | |
| BigCommerce | Ecommerce | |
| Faire | Wholesale & EDI | |
| SPS Commerce | Wholesale & EDI | EDI compliance |
| ShipStation | Shipping | |

**Removed from site (not confirmed):** Amazon, eBay, Walmart, Salesforce, HubSpot, Magento

---

## Zapier Section

- **Left:** Explains Zapier value prop — 5,000+ apps, no-code, any workflow
- **Right:** 8 real automation examples shown as example triggers/actions
- **CTA:** Links to Zapier + Book a demo

---

## Design Patterns

- Integration cards: icon + name + description + category badge
- Category grouping with colored section headers
- Zapier section: 2-col grid on md+, stacked on mobile
- Stats bar: `flex gap-8 text-sm text-slate-500` with `·` separators

---

## Meta Tags

- **Title:** Integrations | Brahmin Solutions
- **Description:** Connect Brahmin with QuickBooks, Xero, Shopify, ShipStation, Faire, and more. 8 native integrations plus 5,000+ apps via Zapier.
