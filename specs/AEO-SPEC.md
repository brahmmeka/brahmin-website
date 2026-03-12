# AEO-SPEC.md — Answer Engine & Generative Engine Optimization

> **What this is for:** When someone asks ChatGPT, Perplexity, Claude, or Google's AI Overview
> "What's the best inventory software for food manufacturers?" — this spec determines whether
> Brahmin Solutions gets cited, quoted, and recommended. It also determines whether Google
> surfaces Brahmin content in featured snippets and People Also Ask boxes.
>
> **What this is NOT:** General SEO. This spec is specifically about structured data, FAQ
> coverage, and content signals that make Brahmin readable and citable by AI systems.

---

## PART 1: Schema Markup (JSON-LD)

### Why schema markup?

AI answer engines like Perplexity and Google's AI Overview pull structured facts directly
from JSON-LD. If your Organization schema says you were founded in 2015 and serve 300+
manufacturers, that fact gets cited verbatim. Without it, AI systems have to guess from
prose — and they get it wrong. Schema is the difference between being cited accurately
and being misrepresented or skipped.

### Schema types to implement

---

#### 1.1 Organization — sitewide (in root `app/layout.tsx`)

**Why:** Every page on the site should tell AI crawlers exactly who Brahmin is.
This is the #1 signal for brand citations in AI-generated answers.

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Brahmin Solutions",
  "url": "https://www.brahmin-solutions.com",
  "logo": "https://www.brahmin-solutions.com/images/logo.webp",
  "foundingDate": "2015",
  "description": "Cloud-based MRP and inventory management software for small to mid-sized manufacturers.",
  "numberOfEmployees": { "@type": "QuantitativeValue", "value": "10-50" },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "sales",
    "availableLanguage": "English"
  },
  "sameAs": [
    "https://www.linkedin.com/company/brahmin-solutions",
    "https://twitter.com/brahmin_solutions"
  ]
}
```

**Implementation:** Add as `<script type="application/ld+json">` in `app/layout.tsx`.

---

#### 1.2 SoftwareApplication — `/features`, `/pricing`, homepage

**Why:** When someone asks "what does Brahmin Solutions cost?" or "what category of software
is Brahmin?", Google and AI engines pull from SoftwareApplication schema. Without it, they
either skip you or hallucinate a price. This is especially important since your pricing
starts at $199/month — a fact that should be machine-readable.

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Brahmin Solutions",
  "applicationCategory": "BusinessApplication",
  "applicationSubCategory": "Manufacturing Resource Planning (MRP)",
  "operatingSystem": "Web browser (any OS)",
  "offers": {
    "@type": "Offer",
    "price": "199",
    "priceCurrency": "USD",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "billingDuration": "P1M"
    }
  },
  "featureList": [
    "Inventory management",
    "Production tracking",
    "Bill of materials (BOM)",
    "Lot and batch traceability",
    "B2B wholesale portal",
    "QuickBooks and Xero integration",
    "Shopify integration",
    "Mobile warehouse app"
  ],
  "audience": {
    "@type": "Audience",
    "audienceType": "Small to mid-sized manufacturers"
  }
}
```

**Implementation:** Add to `app/page.tsx`, `app/features/page.tsx`, and `app/pricing/page.tsx`.

---

#### 1.3 FAQPage — any page with FAQ accordion content

**Why:** FAQPage schema is the most direct path to Google's People Also Ask boxes and
AI-generated answer panels. If you have FAQ content on a page but no FAQPage schema,
Google can't reliably surface it as a structured answer. Every Q&A you write becomes
a potential citation.

**Pages to apply:**
- `app/faq/page.tsx` — primary (already has 20+ Q&As)
- `app/pricing/PricingPageClient.tsx` — if it has FAQ accordion
- Feature pages (see Part 2 below) — once FAQ sections are added

**Format:**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does implementation take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Average implementation is 3–6 weeks with a dedicated implementation manager..."
      }
    }
  ]
}
```

**Implementation:** Generate dynamically from the FAQ data arrays already in each page.
Do not hardcode — pull from the same `faqCategories` / question arrays so there's one
source of truth.

---

#### 1.4 BreadcrumbList — all interior pages

**Why:** Breadcrumbs help AI engines understand site hierarchy. They also appear in
Google search results, improving click-through rate. Low effort, consistent signal.

**Pattern:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://brahmin-solutions.com" },
    { "@type": "ListItem", "position": 2, "name": "Features", "item": "https://brahmin-solutions.com/features" },
    { "@type": "ListItem", "position": 3, "name": "Inventory Management", "item": "https://brahmin-solutions.com/features/inventory" }
  ]
}
```

**Pages:** All `/features/*`, `/industries/*`, `/compare/*`, `/blog/*`.

---

#### 1.5 Article — `/blog/[slug]`

**Why:** Blog posts with Article schema get treated as authoritative sources by AI engines.
This is how you get cited when someone asks "what is MRP software" or "how does lot
traceability work" — the blog post becomes the source, which links back to Brahmin.

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "...",
  "author": { "@type": "Organization", "name": "Brahmin Solutions" },
  "publisher": { "@type": "Organization", "name": "Brahmin Solutions" },
  "datePublished": "...",
  "dateModified": "..."
}
```

**Implementation:** Pull from Sanity post fields (`title`, `publishedAt`, `author`).

---

## PART 2: FAQ Sections on Feature & Industry Pages

### Why targeted FAQs (not everywhere)

AI engines weight FAQ content heavily because it maps directly to question-format queries.
"Does Brahmin do lot traceability?" is exactly how a buyer types into Perplexity. If that
question and its answer appear on the traceability page, Brahmin gets cited. If not,
a competitor or a generic article does.

**Rule:** Only add FAQ sections where the questions are real buyer questions with
specific answers — not generic filler that could apply to any software.

---

### 2.1 Feature page FAQs

#### `/features/traceability` — 4 questions
Reason: Traceability is compliance-driven. Buyers have specific regulatory questions.
These map directly to FSMA, FDA, and recall-readiness queries.

| Question | Why it matters |
|----------|----------------|
| Does Brahmin Solutions support FSMA Rule 204 compliance? | Direct regulatory query, high AI citation value |
| How does lot traceability work in Brahmin? | Process question buyers ask before demos |
| Can I generate a recall report in Brahmin? | Feature-specific, verifiable answer |
| Does Brahmin track expiration dates? | Common food/supplement buyer question |

#### `/features/production` — 3 questions
Reason: Production planning queries are high-intent. Buyers comparing MRP tools
search for this specifically.

| Question | Why it matters |
|----------|----------------|
| What is a bill of materials (BOM) in Brahmin? | Definitional but product-specific — different from generic "what is a BOM" |
| Can Brahmin handle multi-level BOMs? | Direct feature comparison question |
| How does Brahmin calculate true production cost? | Differentiator question — labor + overhead + yield |

#### `/features/inventory` — 3 questions

| Question | Why it matters |
|----------|----------------|
| Can Brahmin track inventory across multiple warehouses? | Top inventory management search query |
| Does Brahmin support 3PL inventory tracking? | Specific to Brahmin's multi-location capability |
| How does Brahmin handle reorder points? | Purchasing trigger question, commonly searched |

#### `/features/b2b-portal` — 3 questions

| Question | Why it matters |
|----------|----------------|
| What is a B2B wholesale portal? | Definitional — buyers don't always know the term |
| Can customers place orders without calling? | Key pain point, maps to self-service queries |
| Does the B2B portal support custom pricing per customer? | Differentiator — most tools don't do this |

---

### 2.2 Industry page FAQs

#### `/food-beverage` — 4 questions
Reason: Food manufacturers have compliance questions that are highly specific and
frequently searched. AI engines cite these heavily for regulatory queries.

| Question | Why it matters |
|----------|----------------|
| Is Brahmin Solutions FDA compliant? | Direct regulatory query |
| Does Brahmin support FSMA recordkeeping requirements? | Rule 204 is mandatory by July 2028 |
| Can Brahmin track allergens by batch? | Specific to food safety — commonly searched |
| How does Brahmin help with mock recalls? | Audit-prep query — high intent |

#### `/manufacturing` — 3 questions

| Question | Why it matters |
|----------|----------------|
| Is Brahmin Solutions an ERP or MRP system? | Classification question buyers ask first |
| Can Brahmin handle make-to-order and make-to-stock? | Workflow-specific — high differentiation |
| Does Brahmin work for small manufacturers? | Direct sizing question — "is this for me?" |

#### `/wholesale-distribution` — 3 questions

| Question | Why it matters |
|----------|----------------|
| Does Brahmin support EDI for big-box retailers? | SPS Commerce integration — specific capability |
| Can Brahmin sync inventory across 3PL warehouses? | Top wholesale distribution query |
| How does Brahmin handle multi-channel order management? | Shopify + Faire + B2B — differentiator |

---

### 2.3 Compare page FAQs

**Do not add FAQs to compare pages.**

Reason: Compare pages are conversion pages, not informational pages. Adding FAQ
sections dilutes the comparison and gives visitors reasons to leave. The structured
comparison table already answers the key questions in machine-readable format.
Schema markup on compare pages is sufficient (BreadcrumbList + FAQPage for any
existing Q&A blocks).

---

## PART 3: What NOT to Do

### 3.1 "What is X" definition sections on product pages

**Don't add "What is MRP software?" sections to feature pages.**

Reason: You're competing with Wikipedia, Investopedia, and Gartner for definitional
queries. You will not win that citation battle on a product page. More importantly,
a manufacturer who lands on `/features/production` already knows what MRP is —
they're evaluating whether Brahmin is the right MRP. A definitional block wastes
space and lowers page relevance for conversion queries.

Where definitions belong: Blog posts. `/blog/what-is-mrp-software`,
`/blog/what-is-lot-traceability`, `/blog/mrp-vs-erp` — these rank for
definitional queries AND link back to feature pages.

### 3.2 Keyword-stuffed FAQ answers

FAQ answers written for crawlers read like FAQ answers written for crawlers.
Write every answer the way you'd answer it on a call with a prospect. Short,
direct, specific to Brahmin. AI engines penalize generic answers — they're
looking for source differentiation.

### 3.3 Schema on pages with thin content

Don't add FAQPage schema to a page with 2 questions. Google's quality rater
guidelines flag this as manipulation. The `/faq` page is fine (20+ questions).
Feature page FAQs should have at least 3 before adding FAQPage schema.

---

## PART 4: Implementation Priority Order

| Priority | Task | Reason |
|----------|------|--------|
| 1 | Organization schema in `layout.tsx` | Sitewide, one implementation, highest brand citation value |
| 2 | FAQPage schema on existing `/faq` page | 20+ Q&As already there — zero content work needed |
| 3 | SoftwareApplication schema on homepage + pricing | Price and category are the most-cited facts in AI answers |
| 4 | FAQ content + FAQPage schema on `/features/traceability` and `/food-beverage` | Highest-value queries, compliance-driven traffic |
| 5 | BreadcrumbList on all interior pages | Low effort, consistent signal across 30+ pages |
| 6 | Remaining feature + industry FAQ sections | Build out after above are live and indexed |
| 7 | Article schema on blog posts | Requires blog content to exist first |

---

## PART 5: Measurement

How to know if this is working:

- **Google Search Console** — track impressions for FAQ-format queries
- **Perplexity** — manually search "best inventory software for food manufacturers" monthly
- **ChatGPT / Claude** — ask "compare Brahmin Solutions to Katana" — are facts accurate?
- **Google AI Overview** — search branded + category queries, check if Brahmin appears
- **Rich result test** — validate schema at search.google.com/test/rich-results

---

*Last updated: March 2026*
