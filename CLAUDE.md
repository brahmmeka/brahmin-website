# CLAUDE.md - Brahmin Solutions Website

> This file contains all specifications for the Brahmin Solutions website.
> Read this file completely before starting any work.

---

## PROJECT OVERVIEW

**Company:** Brahmin Solutions
**Product:** Cloud-based MRP and inventory management software
**Target:** Small to mid-sized manufacturers (up to $50M revenue)
**Founded:** 2015
**Customers:** 300+
**Starting Price:** $129/month

**Tech Stack:**
- Next.js 14 (App Router)
- React 18
- Tailwind CSS
- Sanity CMS (for blog)
- Vercel (hosting)
- HubSpot (forms, tracking, chat)

---

## FOLDER STRUCTURE

```
brahmin-website/
├── app/
│   ├── layout.tsx              # Root layout with header/footer
│   ├── page.tsx                # Homepage
│   ├── product/page.tsx        # Features page
│   ├── pricing/page.tsx        # Pricing page
│   ├── integrations/page.tsx   # Integrations page
│   ├── demo/page.tsx           # Book demo page
│   ├── faq/page.tsx            # FAQ page
│   ├── about/page.tsx          # About us page
│   ├── customers/page.tsx      # Customer stories
│   ├── manufacturing/page.tsx  # Industry: Manufacturing
│   ├── food-beverage/page.tsx  # Industry: Food & Beverage
│   ├── wholesale-distribution/page.tsx  # Industry: Wholesale
│   ├── compare/
│   │   ├── katana/page.tsx
│   │   ├── fishbowl/page.tsx
│   │   ├── cin7/page.tsx
│   │   └── spreadsheets/page.tsx
│   ├── blog/
│   │   ├── page.tsx            # Blog listing
│   │   └── [slug]/page.tsx     # Individual post
│   └── not-found.tsx           # 404 page
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Accordion.tsx
│   │   └── ...
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── WhoItsFor.tsx
│   │   ├── SwitchingFrom.tsx
│   │   ├── SupportStats.tsx
│   │   ├── SocialProof.tsx
│   │   ├── FeaturesGrid.tsx
│   │   ├── FAQ.tsx
│   │   └── CTA.tsx
│   └── blog/
│       ├── PostCard.tsx
│       └── PostContent.tsx
├── lib/
│   ├── sanity.ts               # Sanity client config
│   └── utils.ts                # Utility functions
├── public/
│   ├── images/
│   │   ├── logo.svg
│   │   ├── customers/          # Customer logos
│   │   └── integrations/       # Integration logos
│   ├── robots.txt
│   └── sitemap.xml
├── sanity/
│   ├── schemas/
│   │   └── post.ts             # Blog post schema
│   └── sanity.config.ts
├── styles/
│   └── globals.css
├── tailwind.config.ts
├── next.config.js
└── package.json
```

---

## DESIGN SYSTEM

### Colors

```javascript
// tailwind.config.ts
colors: {
  // Primary - Deep blue (trust, professionalism)
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',  // Main brand color
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },
  // Secondary - Slate (text, backgrounds)
  slate: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
  },
  // Accent - Green (CTAs, success, support differentiator)
  accent: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',  // CTA color
    600: '#16a34a',
    700: '#15803d',
  },
}
```

### Typography

```javascript
// Use system fonts for fast loading
fontFamily: {
  sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
}

// Font sizes
fontSize: {
  'xs': '0.75rem',     // 12px
  'sm': '0.875rem',    // 14px
  'base': '1rem',      // 16px
  'lg': '1.125rem',    // 18px
  'xl': '1.25rem',     // 20px
  '2xl': '1.5rem',     // 24px
  '3xl': '1.875rem',   // 30px
  '4xl': '2.25rem',    // 36px
  '5xl': '3rem',       // 48px
  '6xl': '3.75rem',    // 60px
}
```

### Spacing

```javascript
// Standard spacing scale
spacing: {
  'section': '6rem',      // Between major sections (96px)
  'component': '3rem',    // Between components (48px)
  'element': '1.5rem',    // Between elements (24px)
  'tight': '0.75rem',     // Tight spacing (12px)
}
```

### Components

**Buttons:**
```jsx
// Primary CTA (green)
<Button variant="primary">Book a Demo</Button>
// Styles: bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-lg font-semibold

// Secondary (outline)
<Button variant="secondary">Learn More</Button>
// Styles: border-2 border-primary-600 text-primary-600 hover:bg-primary-50 px-6 py-3 rounded-lg font-semibold

// Ghost (text link)
<Button variant="ghost">See how it works →</Button>
// Styles: text-primary-600 hover:text-primary-700 font-medium
```

**Cards:**
```jsx
// Standard card
<Card>
  <CardHeader>Title</CardHeader>
  <CardContent>Content</CardContent>
</Card>
// Styles: bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow
```

**Section Layout:**
```jsx
// Standard section
<section className="py-section">
  <div className="container mx-auto px-6 max-w-7xl">
    {/* content */}
  </div>
</section>
```

---

## HOMEPAGE COPY

### Hero Section

**H1 Headline:**
"MRP Software With Support That Actually Picks Up"

**Subheadline:**
"Cloud-based inventory and production management for small manufacturers—backed by a team that knows your business by name."

**Trust Bar:**
"Trusted by 300+ manufacturers since 2015"

**Primary CTA:** "Book a Demo"
**Secondary CTA:** "See how it works →"

---

### Who It's For Section

**Headline:** "Built for how you actually work"

**Card 1 - In-House Manufacturers:**
- Icon: Factory
- Headline: "Making products in-house?"
- Body: "Track production, BOMs, and real-time costs across your shop floor. Know exactly what's being made, what it costs, and when it ships."

**Card 2 - Multi-Location / Co-Manufacturing:**
- Icon: Warehouse
- Headline: "Working with co-manufacturers or 3PLs?"
- Body: "See inventory across every warehouse—even ones you don't own. Sync with partners without spreadsheet chaos."

**Card 3 - B2B + DTC Sellers:**
- Icon: Shopping cart
- Headline: "Selling wholesale and direct-to-consumer?"
- Body: "Sync with Shopify, manage custom price lists, and let B2B customers order 24/7 through your portal."

---

### Switching From Section

**Headline:** "Switching from?"

**Item 1 - Katana:**
"Frustrated with Katana? Get support that actually responds—in 15 minutes, not 3 days."
Link: "See the comparison →" → /compare/katana

**Item 2 - Fishbowl:**
"Outgrowing Fishbowl? Move to cloud without losing your production tracking."
Link: "See the comparison →" → /compare/fishbowl

**Item 3 - Cin7:**
"Cin7 too complex (and expensive)? Same features. Simpler interface. Better price."
Link: "See the comparison →" → /compare/cin7

**Item 4 - Spreadsheets:**
"Still on spreadsheets? We'll migrate your data and get you live in 21 days."
Link: "See how it works →" → /compare/spreadsheets

---

### Support Differentiator Section

**Headline:** "Support that doesn't make you want to throw your laptop"

**Subheadline:** "Most MRP vendors sell you software and disappear. We stick around."

**Stats:**
1. Number: "15 min" | Label: "Average response time" | Subtext: "(Yes, really. We measured.)"
2. Number: "21 days" | Label: "Average implementation" | Subtext: "Not 6 months. Not 'it depends.'"
3. Number: "1:1" | Label: "Dedicated manager" | Subtext: "Your own implementation human."
4. Number: "24/7" | Label: "Human support" | Subtext: "Not a chatbot. Actual people."

---

### Social Proof Section

**Headline:** "Real results from real manufacturers"

**Card 1 - Sfoglini Pasta:**
- Result: "$87,500 in recall costs avoided"
- Context: "Full lot traceability caught a supplier issue before it shipped."
- Industry: Food Manufacturing
- Link: "Read the story →"

**Card 2 - Bold Distribution:**
- Result: "15 hours/week saved per team"
- Context: "Automated inventory sync eliminated manual data entry."
- Industry: Wholesale Distribution
- Link: "Read the story →"

**Card 3 - Nefaire:**
- Result: "6x more orders handled"
- Context: "B2B portal let customers self-serve instead of calling in orders."
- Industry: Cosmetics Manufacturing
- Link: "Read the story →"

---

### Features Grid Section

**Headline:** "Everything you need. Nothing you don't."

**Feature 1 - Multi-Location Inventory:**
- Icon: Map pin
- Description: "Track stock across warehouses, 3PLs, and co-manufacturers in real-time."

**Feature 2 - Production Tracking:**
- Icon: Factory
- Description: "See what's being made, by whom, and at what cost—down to the work order."

**Feature 3 - 50+ Integrations:**
- Icon: Plug
- Description: "Connect QuickBooks, Shopify, ShipStation, and the tools you already use."

**Feature 4 - Batch & Lot Tracking:**
- Icon: Tag
- Description: "Full traceability from raw materials to finished goods. Recall-ready in minutes."

**Feature 5 - B2B Customer Portal:**
- Icon: Users
- Description: "Let wholesale customers see inventory, place orders, and pay—24/7."

**Feature 6 - Mobile Warehouse:**
- Icon: Smartphone
- Description: "Receive, pick, pack, and ship from any device with barcode scanning."

**CTA:** "See all features →" → /product

---

### FAQ Section

**Headline:** "Frequently Asked Questions"

**Q1:** What is Brahmin Solutions?
**A1:** Brahmin Solutions is cloud-based MRP and inventory management software built for small to mid-sized manufacturers. Founded in 2015, we help 300+ manufacturing businesses track inventory, manage production, and sell across multiple channels—with support that actually picks up the phone.

**Q2:** How much does Brahmin Solutions cost?
**A2:** Brahmin Solutions starts at $129/month. Pricing scales based on features and users. Unlike some competitors, we don't charge per-transaction fees or nickel-and-dime you with expensive add-ons. See our pricing page for details.

**Q3:** How long does implementation take?
**A3:** Average implementation is 21 days with a dedicated implementation manager. We handle data migration from spreadsheets or other systems and train your team—no 6-month enterprise rollouts.

**Q4:** What integrations does Brahmin Solutions support?
**A4:** Brahmin Solutions integrates with 50+ tools including QuickBooks, Xero, Shopify, WooCommerce, ShipStation, and more. We also offer API access for custom integrations.

**Q5:** Is Brahmin Solutions good for food manufacturers?
**A5:** Yes. Brahmin Solutions includes full lot traceability, batch tracking, expiration date management, and recall-readiness features. We serve food, beverage, cosmetics, and supplement manufacturers who need FDA-compliant tracking.

**Q6:** How is Brahmin Solutions different from Katana or Cin7?
**A6:** Three main differences: (1) Support that responds in 15 minutes vs. days, (2) Simpler interface without the bloat, and (3) Transparent pricing without per-order fees. We're built specifically for small manufacturers who need powerful features without enterprise complexity.

**Q7:** Can I track inventory across multiple warehouses?
**A7:** Yes. Brahmin Solutions supports multi-location inventory tracking, including 3PLs and co-manufacturers. You see real-time stock levels across every location from one dashboard.

**Q8:** Do you offer a free trial?
**A8:** We offer a 14-day free trial. You can also book a demo to see the software with your actual use case before committing.

---

### Final CTA Section

**Headline:** "Ready to stop fighting your software?"

**Subheadline:** "Book a 30-minute demo. We'll show you the software with your actual products and workflows."

**CTA Button:** "Book Your Demo"

**Reassurance:** "No credit card required. 14-day free trial available."

---

## META TAGS (All Pages)

### Homepage
- **Title:** Brahmin Solutions | MRP Software for Small Manufacturers
- **Description:** Cloud-based MRP and inventory software for small manufacturers. Production tracking, multi-location inventory, and support that responds in 15 minutes. Free trial.

### Product
- **Title:** MRP Software Features | Brahmin Solutions
- **Description:** Production tracking, multi-location inventory, batch traceability, B2B portal, and 50+ integrations. See all features of Brahmin Solutions MRP software.

### Pricing
- **Title:** Pricing | Brahmin Solutions MRP Software
- **Description:** Brahmin Solutions starts at $129/month. No per-transaction fees. Includes dedicated support and implementation. See all plans and pricing.

### Integrations
- **Title:** 50+ Integrations | Brahmin Solutions
- **Description:** Connect Brahmin Solutions to QuickBooks, Shopify, Xero, ShipStation, Amazon, WooCommerce, and 50+ other tools. API access available.

### Book Demo
- **Title:** Book a Demo | Brahmin Solutions
- **Description:** See Brahmin Solutions with your actual products and workflows. 30-minute personalized demo. No commitment required.

### FAQ
- **Title:** Frequently Asked Questions | Brahmin Solutions
- **Description:** Common questions about Brahmin Solutions MRP software: pricing, implementation, features, integrations, and support.

### About
- **Title:** About Us | Brahmin Solutions
- **Description:** Brahmin Solutions was founded in 2015 to help small manufacturers compete with enterprise-level tools and white-glove support.

### Manufacturing
- **Title:** Manufacturing Software for Small Business | Brahmin
- **Description:** Production tracking, BOMs, work orders, and real-time cost visibility for small manufacturers. Go live in 21 days with dedicated support.

### Food & Beverage
- **Title:** Food Manufacturing Software | Brahmin Solutions
- **Description:** Lot traceability, expiration tracking, and recall-ready reporting for food and beverage manufacturers. FDA compliance built in.

### Wholesale & Distribution
- **Title:** Wholesale Distribution Software | Brahmin Solutions
- **Description:** Multi-warehouse inventory, B2B customer portal, and Shopify sync for wholesalers and distributors. Let customers order 24/7.

### vs Katana
- **Title:** Brahmin Solutions vs Katana MRP | Comparison
- **Description:** Compare Brahmin Solutions and Katana MRP. See why manufacturers switch: 15-min support response, simpler interface, no per-order fees.

### vs Fishbowl
- **Title:** Brahmin Solutions vs Fishbowl | Comparison
- **Description:** Switching from Fishbowl? Brahmin Solutions is cloud-based with modern UI, better support, and no server maintenance. Compare features.

### vs Cin7
- **Title:** Brahmin Solutions vs Cin7 | Comparison
- **Description:** Cin7 too complex and expensive? Brahmin Solutions offers the same features with simpler UI, lower price, and better support.

---

## SCHEMA MARKUP

Add this to the homepage `<head>`:

```html
<script type="application/ld+json">
[
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Brahmin Solutions",
    "url": "https://www.brahmin-solutions.com",
    "logo": "https://www.brahmin-solutions.com/images/logo.png",
    "foundingDate": "2015",
    "description": "Cloud-based MRP and inventory management software for small to mid-sized manufacturers."
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Brahmin Solutions",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web browser",
    "offers": {
      "@type": "Offer",
      "price": "129",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Multi-location inventory tracking",
      "Production management",
      "Batch and lot traceability",
      "B2B customer portal",
      "50+ integrations"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Brahmin Solutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Brahmin Solutions is cloud-based MRP and inventory management software for small to mid-sized manufacturers. Founded in 2015, we help 300+ manufacturers track inventory, manage production, and sell across multiple channels."
        }
      },
      {
        "@type": "Question",
        "name": "How much does Brahmin Solutions cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Brahmin Solutions starts at $129 per month with no per-transaction fees."
        }
      },
      {
        "@type": "Question",
        "name": "How long does implementation take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Average implementation is 21 days with a dedicated implementation manager."
        }
      }
    ]
  }
]
</script>
```

---

## CODING STANDARDS

### General
- Use TypeScript for all files
- Use functional components with hooks
- Keep components small and focused
- Extract reusable logic into custom hooks
- Use descriptive variable and function names

### Styling
- Use Tailwind CSS exclusively (no custom CSS unless necessary)
- Follow mobile-first approach
- Use design tokens from tailwind.config.ts
- Maintain consistent spacing using the spacing scale

### SEO
- Every page must have unique title and meta description
- Use semantic HTML (header, main, section, article, etc.)
- All images must have alt text
- Use proper heading hierarchy (one H1 per page)

### Performance
- Optimize images (use next/image)
- Lazy load below-the-fold content
- Minimize JavaScript bundle size
- Use static generation where possible

### Accessibility
- Maintain proper heading hierarchy
- Use ARIA labels where needed
- Ensure sufficient color contrast
- Make all interactive elements keyboard accessible

---

## ROBOTS.TXT

```
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: PerplexityBot
Allow: /

Sitemap: https://www.brahmin-solutions.com/sitemap.xml
```

---

## END OF SPECIFICATIONS
