import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Lot Tracking Software for Manufacturers | Brahmin Solutions',
  description:
    'Lot tracking software that keeps you audit-ready. Track batches from raw materials to customers, pull recall reports in minutes, and stay FDA-compliant. Starting from $199/month.',
  keywords: [
    'lot tracking software',
    'lot traceability software',
    'batch tracking software',
    'lot tracking system',
    'FDA lot tracking',
    'recall management software',
    'lot number tracking',
    'batch traceability',
    'food traceability software',
    'lot tracking for manufacturers',
  ],
  alternates: {
    canonical: 'https://www.brahmin-solutions.com/lot-tracking-software',
  },
  openGraph: {
    title: 'Lot Tracking Software for Manufacturers',
    description:
      'Track every batch from receiving to shipment. Pull recall reports in minutes, not days. Stay FDA-compliant without the paperwork burden.',
    url: 'https://www.brahmin-solutions.com/lot-tracking-software',
    type: 'website',
    siteName: 'Brahmin Solutions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lot Tracking Software for Manufacturers | Brahmin Solutions',
    description:
      'Track batches from raw materials to customers. Pull recall reports in minutes. Starting from $199/month.',
  },
}

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
      </svg>
    ),
    title: 'Lot number assignment',
    href: '/features/traceability',
    color: 'from-blue-500 to-indigo-600',
    description:
      'Assign lot numbers automatically at receiving or during production. Use your own naming conventions or let the system generate sequential lot IDs. Every unit gets a traceable identity from the moment it enters your facility.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
    title: 'Expiration date tracking',
    href: '/features/traceability',
    color: 'from-amber-500 to-orange-600',
    description:
      'Track expiration dates, best-by dates, and use-by dates for every lot. Get alerts before materials expire so you can use them in time or quarantine them before they reach production. Never ship expired product again.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5-3L16.5 18m0 0L12 13.5M16.5 18V4.5" />
      </svg>
    ),
    title: 'FIFO/FEFO management',
    href: '/features/inventory',
    color: 'from-cyan-500 to-blue-600',
    description:
      'Enforce first-in-first-out or first-expired-first-out picking rules automatically. The system tells your team which lots to use first based on receipt date or expiration date, reducing waste and ensuring freshness.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
      </svg>
    ),
    title: 'Upstream traceability',
    href: '/features/traceability',
    color: 'from-violet-500 to-purple-600',
    description:
      'Trace any finished product back to its raw material lots, suppliers, purchase orders, and receiving dates. When a quality issue surfaces, identify the source in minutes instead of days.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
      </svg>
    ),
    title: 'Downstream traceability',
    href: '/features/traceability',
    color: 'from-emerald-500 to-teal-600',
    description:
      'Track any raw material lot forward to every finished product and customer that received it. Know exactly who was affected when a supplier flags a contamination or defect — and limit your recall to only the impacted batches.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
    title: 'Recall reports',
    href: '/features/traceability',
    color: 'from-rose-500 to-pink-600',
    description:
      'Generate complete recall reports with one click. See every affected lot, the customers who received it, quantities shipped, and order details. What used to take days of spreadsheet archaeology now takes minutes.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    title: 'CoA attachment',
    href: '/features/traceability',
    color: 'from-indigo-500 to-blue-600',
    description:
      'Attach Certificates of Analysis, test results, and quality documents directly to lot records. When an auditor asks for documentation, everything is linked to the lot — no hunting through file cabinets or email chains.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5z" />
      </svg>
    ),
    title: 'Barcode integration',
    href: '/features/inventory',
    color: 'from-slate-500 to-gray-600',
    description:
      'Scan lot numbers with barcode readers or your phone camera during receiving, production, and shipping. Eliminate manual data entry errors and speed up every touchpoint where lot information changes hands.',
  },
]

const signs = [
  {
    title: 'An FDA auditor asks for lot data and you\'re digging through file cabinets',
    description:
      'If producing a traceability record means pulling binders, searching email, and cross-referencing spreadsheets, you\'re not audit-ready — you\'re audit-anxious. Auditors expect lot data in minutes, not hours. Every minute you spend scrambling erodes their confidence in your quality systems, even if your products are perfectly safe.',
  },
  {
    title: 'You can\'t quickly identify which customers received a specific batch',
    description:
      'When a supplier notifies you of a raw material issue, the clock starts ticking. If you can\'t trace that material forward to every finished product and every customer who received it, you\'re either recalling everything (expensive and damaging) or guessing (dangerous). Downstream traceability should be a click, not a project.',
  },
  {
    title: 'Expiration dates are tracked manually (or not at all)',
    description:
      'Expired ingredients making it into production is a compliance violation waiting to happen. If expiration tracking lives in a spreadsheet that someone updates when they remember, gaps are inevitable. Automated expiration alerts catch what manual processes miss — before expired materials become expired finished goods on a customer\'s shelf.',
  },
  {
    title: 'A quality issue means recalling more product than necessary',
    description:
      'Without lot-level traceability, a problem with one batch forces you to recall everything produced during that time period. That\'s over-recall: pulling perfectly good product off shelves, absorbing unnecessary costs, and damaging customer relationships — all because you couldn\'t pinpoint exactly which lots were affected.',
  },
  {
    title: 'Lot numbers are assigned inconsistently across your team',
    description:
      'If one person uses date-based lot numbers, another uses sequential numbers, and a third makes them up on the spot, your traceability chain has gaps. Inconsistent lot numbering makes it impossible to search, sort, or trace reliably. A lot tracking system enforces consistent conventions automatically, so every lot follows the same format regardless of who created it.',
  },
  {
    title: 'You\'re spending hours on traceability paperwork that should be automatic',
    description:
      'If your team spends hours each week manually logging lot numbers on paper forms, typing them into spreadsheets, and assembling traceability documents for audits or customers, that\'s time taken directly from production. Lot tracking software captures this data as a byproduct of normal operations — receiving, production, shipping — so the paperwork generates itself.',
  },
]

const industries = [
  {
    href: '/industries/food-beverage',
    title: 'Food & Beverage',
    tag: 'FDA & FSMA compliance',
    color: 'from-orange-400 to-red-500',
    description: 'Track lots from ingredient receiving through production to customer shipment. Stay FSMA 204-compliant with one-up, one-back traceability and instant recall reports.',
  },
  {
    href: '/industries/supplements',
    title: 'Supplements & nutraceuticals',
    tag: 'cGMP ready',
    color: 'from-green-400 to-emerald-500',
    description: 'Manage lot genealogy, CoA documentation, and quarantine workflows required by 21 CFR Part 111. Full traceability from raw ingredient to finished bottle.',
  },
  {
    href: '/industries/cosmetics',
    title: 'Cosmetics & personal care',
    tag: 'MoCRA compliance',
    color: 'from-pink-400 to-rose-500',
    description: 'Batch tracking for formulas, fragrance lots, and packaging materials. Stay compliant with the Modernization of Cosmetics Regulation Act (MoCRA) traceability requirements.',
  },
  {
    href: '/industries/medical-devices',
    title: 'Medical devices',
    tag: 'FDA 21 CFR Part 820',
    color: 'from-blue-400 to-indigo-500',
    description: 'Component-level lot tracking, device history records, and full genealogy for FDA-regulated medical devices and combination products.',
  },
]

const steps = [
  {
    title: 'Receive and assign lots',
    description:
      'When raw materials arrive, scan them in and assign lot numbers automatically. Record supplier lot numbers, expiration dates, and attach CoAs. Every ingredient gets a traceable identity before it touches your production floor.',
  },
  {
    title: 'Build your product recipes',
    description:
      'Define your bills of materials with lot-tracked ingredients. The system knows which raw material lots go into each production batch, building the genealogy chain automatically.',
  },
  {
    title: 'Produce with full traceability',
    description:
      'When you run a work order, the system records which raw material lots were consumed and assigns a new lot number to the finished product. The connection between input lots and output lots is captured without extra data entry.',
  },
  {
    title: 'Ship with lot records attached',
    description:
      'When orders ship, the system records which finished product lots went to which customers. This creates the downstream traceability link you need for targeted recalls.',
  },
  {
    title: 'Trace and report instantly',
    description:
      'Need to trace a lot? Click any lot number and see its full history — from supplier to customer. Generate recall reports, mock recall documents, and audit-ready traceability records in minutes.',
  },
]

const testimonials = [
  {
    quote:
      'We have yearly inspections which include mock recalls and mass balance exercises, and both went the smoothest they ever have after using Brahmin Solutions.',
    name: 'Andrea Rodstand',
    company: 'Sfoglini Pasta',
    highlight: 'Audit-ready traceability',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    quote:
      'Brahmin syncs to all our systems and handles batch tracking, order capture, and fulfillment — everything we need in one place.',
    name: 'Ryan',
    company: 'Chugach Chocolates',
    highlight: 'End-to-end batch tracking',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    quote:
      'Full visibility from purchase order to manufacturing to sales — plus accurate cost of goods. And the support is exceptional.',
    name: 'Sheldon Ratuski',
    company: 'FLFF',
    highlight: 'Full supply chain visibility',
    color: 'from-violet-500 to-purple-500',
  },
]

const faqs = [
  {
    question: 'What is lot tracking software?',
    answer:
      'Lot tracking software records and traces batch or lot numbers throughout the manufacturing process — from raw material receiving through production to customer shipment. It maintains a digital chain of custody for every batch, enabling manufacturers to trace any product forward to customers or backward to suppliers and raw materials. This is essential for regulatory compliance, quality control, and recall management.',
  },
  {
    question: 'Why is lot tracking important for manufacturers?',
    answer:
      'Lot tracking protects your business in three ways: regulatory compliance (FDA, FSMA, cGMP regulations require traceability for food, supplements, cosmetics, and medical devices), recall management (when a quality issue arises, lot tracking lets you identify and recall only the affected batches instead of your entire inventory), and quality control (tracking lots helps you identify patterns — which suppliers, ingredients, or production conditions correlate with quality issues).',
  },
  {
    question: 'What\'s the difference between lot tracking and serial number tracking?',
    answer:
      'Lot tracking assigns one identifier to a group of items produced together under the same conditions — a batch of 500 bottles from the same production run all share one lot number. Serial number tracking assigns a unique identifier to every individual unit. Lot tracking is typical for food, supplements, cosmetics, and consumable goods. Serial tracking is more common for electronics, medical devices, and high-value equipment. Some manufacturers use both.',
  },
  {
    question: 'Is lot tracking required by the FDA?',
    answer:
      'Yes, for many product categories. The FDA requires lot-level traceability for food products (under FSMA and the FSMA 204 rule for high-risk foods), dietary supplements (under 21 CFR Part 111 cGMP), cosmetics (under MoCRA), and medical devices (under 21 CFR Part 820). Even if your specific product category doesn\'t have an explicit lot tracking mandate, maintaining lot traceability is considered a best practice and is expected during FDA facility inspections.',
  },
  {
    question: 'How does lot tracking help with recalls?',
    answer:
      'Without lot tracking, a recall means pulling all product from the market because you can\'t identify which specific batches are affected. With lot tracking, you can trace a problematic raw material forward to the exact finished product lots that used it, and then identify exactly which customers received those lots. This means smaller, faster, less expensive recalls — and less damage to customer relationships and brand reputation.',
  },
  {
    question: 'What features should lot tracking software include?',
    answer:
      'Essential features include automatic lot number assignment, expiration date tracking, upstream traceability (finished product back to raw materials), downstream traceability (raw material forward to customers), one-click recall reports, FIFO/FEFO enforcement, barcode scanning support, CoA attachment, and integration with your inventory and production systems. The best lot tracking software captures traceability data as a byproduct of normal operations rather than requiring separate data entry.',
  },
  {
    question: 'Can lot tracking software integrate with my existing systems?',
    answer:
      'Yes. Modern lot tracking software integrates with accounting systems like QuickBooks and Xero, e-commerce platforms like Shopify, and shipping tools like ShipStation. Brahmin Solutions offers native integrations that sync data from your lot tracking system to your accounting and sales platforms automatically. This eliminates the need to re-enter lot data across multiple systems.',
  },
  {
    question: 'How long does it take to implement lot tracking?',
    answer:
      'Enterprise traceability systems can take 6-12 months to implement. Cloud-based lot tracking software designed for small and mid-sized manufacturers typically goes live in 3-6 weeks. The key factors are data migration (importing your existing product and lot data), workflow configuration (setting up lot numbering rules and traceability requirements), and team training. Brahmin Solutions includes a dedicated implementation manager to guide you through the entire process.',
  },
  {
    question: 'What industries need lot tracking?',
    answer:
      'Lot tracking is essential for any manufacturer producing regulated products: food and beverage (FDA, FSMA), dietary supplements (cGMP, 21 CFR Part 111), cosmetics and personal care (MoCRA), medical devices (21 CFR Part 820), and pharmaceuticals. It\'s also increasingly adopted by non-regulated manufacturers who want better quality control, customer confidence, and the ability to manage targeted recalls if issues arise.',
  },
  {
    question: 'How does lot tracking work with inventory management?',
    answer:
      'Lot tracking adds a layer of detail to inventory management. Instead of just knowing you have 5,000 units of a product, you know you have 2,000 units from Lot A (expires March 2027) and 3,000 units from Lot B (expires June 2027). This enables FIFO/FEFO picking, expiration management, and targeted recalls. In Brahmin Solutions, lot tracking is built into the inventory system — not a separate module — so every inventory transaction automatically captures lot-level data.',
  },
]

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Brahmin Solutions',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Lot Tracking Software',
  operatingSystem: 'Web browser (any OS)',
  offers: {
    '@type': 'Offer',
    price: '199',
    priceCurrency: 'USD',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      billingDuration: 'P1M',
    },
  },
  featureList: [
    'Lot number assignment',
    'Expiration date tracking',
    'Upstream traceability',
    'Downstream traceability',
    'One-click recall reports',
    'FIFO/FEFO management',
    'CoA attachment',
    'Barcode scanning',
  ],
  audience: {
    '@type': 'Audience',
    audienceType: 'Small to mid-sized manufacturers',
  },
  url: 'https://www.brahmin-solutions.com',
  sameAs: [
    'https://www.linkedin.com/company/brahmin-solutions',
  ],
  about: {
    '@type': 'Thing',
    name: 'Lot tracking and batch traceability',
    sameAs: 'https://en.wikipedia.org/wiki/Traceability',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.brahmin-solutions.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Lot tracking software',
      item: 'https://www.brahmin-solutions.com/lot-tracking-software',
    },
  ],
}

export default function LotTrackingSoftwarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-white/80 backdrop-blur-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <ol className="flex items-center gap-2 text-sm text-slate-400">
            <li>
              <Link href="/" className="hover:text-primary-600 transition-colors">Home</Link>
            </li>
            <li aria-hidden="true">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </li>
            <li>
              <span className="text-slate-700 font-medium">Lot tracking software</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* ── Section 1: Hero — dark gradient with glow orbs ── */}
      <section className="relative overflow-hidden bg-slate-900 py-24 md:py-32">
        {/* Glow orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto text-center px-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-sm text-slate-300">Trusted by 300+ manufacturers</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent">
              Lot tracking software that keeps you{' '}
            </span>
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              audit-ready
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Track every batch from raw materials to customers. Pull recall reports in
            minutes, not days. Stay FDA-compliant without the paperwork burden.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/demo"
              className="group bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-emerald-500/25 hover:-translate-y-0.5"
            >
              Book a demo
              <svg className="inline-block w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/pricing"
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:bg-white/20"
            >
              See pricing
            </Link>
          </div>

          <p className="text-slate-500 text-sm mt-6">
            Starting from $199/month. Unlimited users. Go live in 3-6 weeks.
          </p>
        </div>
      </section>

      {/* ── Section 2: Key takeaways — glass card ── */}
      <section className="py-10 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
            <h2 className="font-bold text-lg text-slate-900 mb-5 flex items-center gap-2">
              <span className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              </span>
              Key takeaways
            </h2>
            <ul className="space-y-3 text-slate-600">
              {[
                'Lot tracking software creates a digital chain of custody from raw material receiving through production to customer shipment',
                'FDA, FSMA, cGMP, and MoCRA regulations require lot-level traceability for food, supplements, cosmetics, and medical devices',
                'One-click recall reports let you identify affected customers and batches in minutes instead of days',
                'Modern cloud lot tracking goes live in 3-6 weeks starting from $199/month, with traceability built into your daily workflows',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 flex-shrink-0">
                    <span className="flex w-5 h-5 bg-emerald-100 rounded-full items-center justify-center">
                      <svg className="w-3 h-3 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </span>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Section 3: What is lot tracking software? ── */}
      <section className="py-section">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            What is lot tracking software?
          </h2>

          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            Lot tracking software records and traces batch or lot numbers throughout the
            manufacturing process. It creates a digital chain of custody for every batch
            of product you make — from the raw materials you receive from suppliers, through
            the production process, all the way to the customers who receive the finished goods.
          </p>

          {/* Visual: Upstream and Downstream traceability */}
          <div className="grid sm:grid-cols-2 gap-4 my-10">
            {[
              {
                gradient: 'from-violet-500 to-purple-500',
                icon: '🔍',
                title: 'Upstream traceability',
                text: 'Trace any finished product back to its raw material lots, suppliers, and purchase orders',
              },
              {
                gradient: 'from-emerald-500 to-teal-500',
                icon: '📦',
                title: 'Downstream traceability',
                text: 'Trace any raw material lot forward to every finished product and customer who received it',
              },
            ].map((item) => (
              <div key={item.title} className="relative group">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl opacity-5 group-hover:opacity-10 transition-opacity`} />
                <div className="relative bg-white rounded-2xl border border-slate-200 p-6 text-center hover:shadow-md transition-shadow">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <p className="font-semibold text-slate-900 text-sm mb-1">{item.title}</p>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-slate-600 mb-4 leading-relaxed">
            Think of it this way: every ingredient that enters your facility gets a lot number.
            When that ingredient goes into a production batch, the system records which input
            lots were used. The finished product gets its own lot number. When that product
            ships to a customer, the system records which lots went where. The result is a
            complete genealogy — you can start at any point in the chain and trace forward or
            backward to see the full picture.
          </p>

          <p className="text-slate-600 mb-4 leading-relaxed">
            This matters most when something goes wrong. If a supplier notifies you that a
            batch of raw materials was contaminated, you need to know immediately: which
            production runs used that material? Which finished products are affected? Which
            customers received them? Without lot tracking software, answering those questions
            means digging through paper records, spreadsheets, and emails — a process that
            can take days. With lot tracking, the answer is a few clicks away.
          </p>

          <p className="text-slate-600 mb-4 leading-relaxed">
            Beyond recalls, lot tracking software provides daily operational value. It enforces
            FIFO (first in, first out) and FEFO (first expired, first out) picking rules so
            your team uses the oldest or nearest-to-expiration materials first. It tracks
            expiration dates and alerts you before materials expire. It attaches quality
            documents — Certificates of Analysis, test results, inspection records — directly
            to lot records so everything is in one place.
          </p>

          <p className="text-slate-600 mb-4 leading-relaxed">
            For manufacturers in regulated industries, lot tracking isn&apos;t optional. The FDA
            requires it for food, supplements, cosmetics, and medical devices. But even
            manufacturers without regulatory mandates benefit from the quality control,
            waste reduction, and operational visibility that lot tracking provides. It&apos;s
            the difference between knowing you have 5,000 units on the shelf and knowing
            exactly where those units came from, when they expire, and who they&apos;re going to.
          </p>

          {/* Callout */}
          <div className="relative my-10 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-5" />
            <div className="relative border border-emerald-200 rounded-2xl p-6 flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <p className="text-slate-700 font-medium text-sm leading-relaxed">
                The best lot tracking software captures traceability data as a byproduct of
                normal operations — receiving, production, shipping — so your team gets
                <strong> full traceability without extra data entry</strong>. If lot tracking
                requires a separate process, adoption drops and gaps appear.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">
            Lot tracking vs. serial number tracking
          </h3>

          <p className="text-slate-600 mb-4 leading-relaxed">
            Lot tracking and serial number tracking serve different purposes. A <strong className="text-slate-900">lot number</strong> identifies
            a group of items produced together under the same conditions — 1,000 bottles from the same production run
            all share one lot number. A <strong className="text-slate-900">serial number</strong> identifies a single, unique unit.
          </p>

          <p className="text-slate-600 leading-relaxed">
            Lot tracking is standard for consumable goods: food, beverages, supplements,
            cosmetics, and chemicals. Serial tracking is more common for discrete manufactured
            goods like electronics, medical devices, and industrial equipment. Many manufacturers
            use both — lot tracking for raw materials and serial tracking for finished goods.
            Brahmin Solutions supports both within the same{' '}
            <Link href="/mrp-software" className="text-primary-600 hover:text-primary-700 font-medium">
              MRP system
            </Link>.
          </p>
        </div>
      </section>

      {/* ── Section 4: Why lot tracking matters for regulated industries ── */}
      <section className="py-section bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Why lot tracking matters for regulated industries
          </h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            If you manufacture food, supplements, cosmetics, or medical devices, lot-level
            traceability isn&apos;t a nice-to-have — it&apos;s a regulatory requirement. Here&apos;s what
            the major frameworks demand.
          </p>

          <div className="space-y-5">
            {[
              {
                regulation: 'FDA Food Safety Modernization Act (FSMA)',
                scope: 'Food & Beverage manufacturers',
                detail:
                  'FSMA requires food manufacturers to maintain records that trace food one step forward and one step backward in the supply chain. The FSMA 204 rule expands this for high-risk foods, requiring Key Data Elements (KDEs) at Critical Tracking Events (CTEs) — essentially, detailed lot-level records at every point where food changes hands. Non-compliance can result in facility shutdowns and Warning Letters.',
              },
              {
                regulation: '21 CFR Part 111 (cGMP for supplements)',
                scope: 'Dietary supplement manufacturers',
                detail:
                  'Current Good Manufacturing Practices require supplement manufacturers to maintain batch production records that include lot numbers for every component used, quantities, in-process testing results, and finished product testing. Lot tracking must enable full traceability from finished product back to raw ingredient suppliers. These records must be retained for one year past the product\'s shelf life.',
              },
              {
                regulation: 'MoCRA (Modernization of Cosmetics Regulation Act)',
                scope: 'Cosmetics & personal care manufacturers',
                detail:
                  'MoCRA, signed into law in 2022, introduced the first major update to cosmetics regulation in over 80 years. It requires cosmetic manufacturers to maintain records that enable traceability, report serious adverse events, and comply with facility registration and product listing requirements. Lot-level traceability is the foundation of these compliance obligations.',
              },
            ].map((item) => (
              <div
                key={item.regulation}
                className="bg-white rounded-2xl p-5 border border-slate-200 hover:shadow-sm transition-shadow"
              >
                <h3 className="font-bold text-slate-900 mb-1 flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-lg flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </span>
                  <span>
                    {item.regulation}
                    <span className="block text-xs font-medium text-slate-400 mt-0.5">{item.scope}</span>
                  </span>
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed ml-10 mt-2">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Signs you need lot tracking software ── */}
      <section className="py-section">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            6 signs you need lot tracking software
          </h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Paper logs and spreadsheets work until they don&apos;t. These are the warning signs
            that your current traceability process has gaps.
          </p>

          <div className="space-y-3">
            {signs.map((sign, index) => (
              <details
                key={sign.title}
                className="bg-white rounded-2xl p-5 border border-slate-200 group hover:shadow-sm transition-shadow"
                {...(index === 0 ? { open: true } : {})}
              >
                <summary className="font-bold text-slate-900 cursor-pointer list-none flex items-center justify-between">
                  <span className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center text-sm font-bold text-slate-500">
                      {index + 1}
                    </span>
                    {sign.title}
                  </span>
                  <svg
                    className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-3 ml-11 text-slate-600 leading-relaxed">{sign.description}</p>
              </details>
            ))}
          </div>

          <p className="text-slate-600 mt-6 leading-relaxed">
            Sound familiar? If two or more apply, lot tracking software would close the
            gaps in your traceability process.{' '}
            <Link href="/compare/spreadsheets" className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-1 group">
              See the full comparison
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </p>
        </div>
      </section>

      {/* ── Mid-page CTA — gradient with glassmorphism ── */}
      <section className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 py-14">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Ready to be audit-ready?
              </h2>
              <p className="text-emerald-100">
                See how Brahmin tracks lots across your entire supply chain in a 30-minute demo.
              </p>
            </div>
            <Link
              href="/demo"
              className="group bg-white text-emerald-600 px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-white/20 hover:-translate-y-0.5 transition-all flex-shrink-0"
            >
              Book a demo
              <svg className="inline-block w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
          <div className="flex flex-wrap gap-8 md:gap-12 mt-8 pt-8 border-t border-white/20">
            {[
              { value: '300+', label: 'manufacturers' },
              { value: '3-6 weeks', label: 'avg. go-live' },
              { value: '<15 min', label: 'support response' },
              { value: '$199/mo', label: 'starting price' },
            ].map((stat) => (
              <div key={stat.value}>
                <span className="text-white font-bold text-xl block">{stat.value}</span>
                <span className="text-emerald-200 text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 6: Key features — colored gradient icons ── */}
      <section className="py-section">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-3">
            Key features to look for
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            Not all lot tracking systems are equal. These are the features that matter most
            for manufacturers who need traceability.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Link
                key={feature.title}
                href={feature.href}
                className="group relative bg-white p-6 rounded-2xl border border-slate-200 flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              >
                <div className={`w-11 h-11 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 text-white shadow-sm`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-500 text-sm mb-4 flex-1 leading-relaxed">{feature.description}</p>
                <span className="text-primary-600 font-medium text-sm inline-flex items-center gap-1">
                  Learn more
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>

          {/* Integration callout */}
          <div className="mt-10 bg-gradient-to-r from-slate-50 to-emerald-50 rounded-2xl p-6 border border-slate-200 flex flex-col sm:flex-row items-center gap-4">
            <div className="w-11 h-11 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
              </svg>
            </div>
            <div className="flex-1 text-center sm:text-left">
              <p className="text-slate-900 font-semibold">Lot tracking that connects to your existing tools</p>
              <p className="text-slate-500 text-sm">
                Sync lot data to QuickBooks, Xero, Shopify, and ShipStation with native integrations.
              </p>
            </div>
            <Link href="/integrations" className="group text-primary-600 font-medium text-sm flex-shrink-0 inline-flex items-center gap-1">
              See integrations
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 7: How lot tracking works in Brahmin ── */}
      <section className="py-section bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-3">
            How lot tracking works in Brahmin
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            Traceability is built into every step of your workflow. No separate data entry,
            no extra spreadsheets — just the chain of custody, captured automatically.
          </p>

          {/* 5-step visual */}
          <div className="relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-200 via-teal-300 to-cyan-200" />

            <div className="grid md:grid-cols-5 gap-6">
              {[
                { step: '1', label: 'Receive', detail: 'Scan materials in, assign lot numbers, record supplier lots and expiration dates' },
                { step: '2', label: 'Assign lots', detail: 'Automatic lot numbering with your naming conventions, CoA attachment' },
                { step: '3', label: 'Produce', detail: 'System records which input lots go into each production batch' },
                { step: '4', label: 'Ship', detail: 'Finished product lots linked to customer orders and shipments' },
                { step: '5', label: 'Trace', detail: 'Click any lot to see full history, generate recall reports instantly' },
              ].map((item) => (
                <div key={item.step} className="text-center relative">
                  <div className="relative z-10 w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-full flex items-center justify-center font-bold text-sm mx-auto mb-3 shadow-sm shadow-emerald-500/20">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">{item.label}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Trace example callout */}
          <div className="mt-12 bg-white rounded-2xl border border-slate-200 p-6">
            <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider text-center">Example: tracing a lot in Brahmin</h3>
            <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
              <div className="flex-1 bg-slate-50 rounded-xl p-4 border border-slate-100">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Supplier lot</p>
                <p className="font-bold text-slate-900 text-sm">SUP-2026-0891</p>
                <p className="text-xs text-slate-500">Organic vanilla extract, 50kg</p>
              </div>
              <svg className="w-5 h-5 text-slate-300 rotate-90 md:rotate-0 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
              <div className="flex-1 bg-emerald-50 rounded-xl p-4 border border-emerald-100">
                <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-1">Production lot</p>
                <p className="font-bold text-slate-900 text-sm">LOT-2026-0342</p>
                <p className="text-xs text-slate-500">Vanilla bean ice cream, 2,400 units</p>
              </div>
              <svg className="w-5 h-5 text-slate-300 rotate-90 md:rotate-0 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
              <div className="flex-1 bg-blue-50 rounded-xl p-4 border border-blue-100">
                <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">Shipped to</p>
                <p className="font-bold text-slate-900 text-sm">12 customers</p>
                <p className="text-xs text-slate-500">1,847 units delivered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 8: FDA audit readiness — without vs with ── */}
      <section className="py-section">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-3">
            FDA audit readiness
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            An FDA inspector asks for lot traceability records. Here&apos;s what happens next.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Without */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200">
              <div className="inline-block bg-slate-100 text-slate-500 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
                Without lot tracking software
              </div>
              <ul className="space-y-4">
                {[
                  { bold: 'Hours to days', rest: 'to locate traceability records' },
                  { bold: 'Paper binders', rest: 'and filing cabinets as your system of record' },
                  { bold: 'Gaps in records', rest: 'where lot numbers were never captured' },
                  { bold: 'Over-recall', rest: '— pulling all product because you can\'t pinpoint affected lots' },
                  { bold: 'Auditor concerns', rest: 'about your quality systems' },
                ].map((item) => (
                  <li key={item.bold} className="flex gap-3 text-slate-500">
                    <span className="flex-shrink-0 w-5 h-5 bg-red-50 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </span>
                    <span><strong className="text-slate-700">{item.bold}</strong> {item.rest}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* With */}
            <div className="relative bg-white rounded-2xl overflow-hidden border-2 border-emerald-200">
              <div className="h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500" />
              <div className="p-8">
                <div className="inline-block bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
                  With Brahmin lot tracking
                </div>
                <ul className="space-y-4">
                  {[
                    { bold: 'Full lot history', rest: 'pulled up in under a minute' },
                    { bold: 'Digital records', rest: 'with timestamps, users, and audit trails' },
                    { bold: 'Complete chain of custody', rest: 'from supplier to customer' },
                    { bold: 'Targeted recalls', rest: '— identify only the affected lots and customers' },
                    { bold: 'Auditor confidence', rest: 'in your traceability systems' },
                  ].map((item) => (
                    <li key={item.bold} className="flex gap-3 text-slate-500">
                      <span className="flex-shrink-0 w-5 h-5 bg-emerald-50 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </span>
                      <span><strong className="text-slate-700">{item.bold}</strong> {item.rest}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 9: Lot tracking by industry — colored top borders ── */}
      <section className="py-section bg-slate-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-3">
            Lot tracking for your industry
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            Different industries have different traceability requirements. Brahmin adapts
            to the regulations and workflows that apply to your products.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {industries.map((industry) => (
              <Link
                key={industry.href}
                href={industry.href}
                className="group relative block bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              >
                <div className={`h-1 bg-gradient-to-r ${industry.color}`} />
                <div className="p-6">
                  <span className="inline-block text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full font-medium mb-3">
                    {industry.tag}
                  </span>
                  <h3 className="font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-slate-500 text-sm mb-3 leading-relaxed">{industry.description}</p>
                  <span className="text-primary-600 text-sm font-medium inline-flex items-center gap-1">
                    Learn more
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 10: Implementation comparison ── */}
      <section className="py-section">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-3">
            What implementation actually looks like
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            Enterprise traceability systems take months and require consultants.
            Modern cloud lot tracking goes live in weeks with a dedicated implementation manager.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Enterprise */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200">
              <div className="inline-block bg-slate-100 text-slate-500 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
                Enterprise traceability
              </div>
              <ul className="space-y-4">
                {[
                  { bold: '6-12 month', rest: 'implementation timeline' },
                  { bold: '$50,000-$500,000+', rest: 'upfront costs' },
                  { bold: 'Requires', rest: 'dedicated implementation consultants' },
                  { bold: 'Per-user fees', rest: 'that grow with your team' },
                  { bold: 'Designed for', rest: '$100M+ companies' },
                ].map((item) => (
                  <li key={item.bold} className="flex gap-3 text-slate-500">
                    <span className="flex-shrink-0 w-5 h-5 bg-red-50 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </span>
                    <span><strong className="text-slate-700">{item.bold}</strong> {item.rest}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modern cloud */}
            <div className="relative bg-white rounded-2xl overflow-hidden border-2 border-emerald-200">
              <div className="h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500" />
              <div className="p-8">
                <div className="inline-block bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
                  Modern cloud lot tracking
                </div>
                <ul className="space-y-4">
                  {[
                    { bold: 'Go live in 3-6 weeks', rest: 'with dedicated support' },
                    { bold: 'Starting from $199/month', rest: '— no surprise fees' },
                    { bold: 'Self-service setup', rest: 'with implementation manager' },
                    { bold: 'Flat pricing', rest: '— unlimited users included' },
                    { bold: 'Purpose-built', rest: 'for $500K-$50M manufacturers' },
                  ].map((item) => (
                    <li key={item.bold} className="flex gap-3 text-slate-500">
                      <span className="flex-shrink-0 w-5 h-5 bg-emerald-50 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </span>
                      <span><strong className="text-slate-700">{item.bold}</strong> {item.rest}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="mt-14 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-slate-900 mb-8">
              5 steps to getting started
            </h3>
            <div className="space-y-0">
              {steps.map((step, index) => (
                <div key={step.title} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-sm shadow-emerald-500/20">
                      {index + 1}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-px h-full bg-gradient-to-b from-emerald-200 to-transparent my-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <h4 className="font-bold text-slate-900 mb-1">
                      {step.title}
                    </h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 11: Testimonials — colored gradient accents ── */}
      <section className="py-section">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-3">
            What manufacturers say about lot tracking in Brahmin
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            Real results from manufacturers who rely on Brahmin for traceability and compliance.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="relative bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className={`h-1 bg-gradient-to-r ${testimonial.color}`} />
                <div className="p-6 flex flex-col h-full">
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className={`inline-block self-start text-xs font-semibold px-2.5 py-1 rounded-full mb-4 bg-gradient-to-r ${testimonial.color} text-white`}>
                    {testimonial.highlight}
                  </span>
                  <p className="text-slate-600 text-sm mb-4 flex-1 leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="pt-4 border-t border-slate-100">
                    {testimonial.name && (
                      <p className="text-xs text-slate-500">
                        {testimonial.name}
                      </p>
                    )}
                    <p className="text-xs text-slate-400">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 12: FAQ ── */}
      <section className="py-section bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
            Frequently asked questions
          </h2>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="bg-white rounded-2xl p-5 border border-slate-200 group hover:shadow-sm transition-shadow"
              >
                <summary className="font-semibold text-slate-900 cursor-pointer list-none flex items-center justify-between text-sm sm:text-base">
                  {faq.question}
                  <span className="flex-shrink-0 ml-4 w-8 h-8 bg-slate-100 group-hover:bg-primary-50 rounded-full flex items-center justify-center transition-colors">
                    <svg
                      className="w-4 h-4 text-slate-500 group-open:rotate-180 group-hover:text-primary-600 transition-all"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-slate-500 text-sm leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 13: Final CTA — dark gradient ── */}
      <section className="relative overflow-hidden bg-slate-900 py-24">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl" />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
              Always audit-ready. Recall reports in minutes.
            </span>
          </h2>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed">
            Join 300+ manufacturers who trust Brahmin for lot tracking and traceability.
            Starting from $199/month, unlimited users, go live in 3-6 weeks.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/demo"
              className="group bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-emerald-500/25 hover:-translate-y-0.5 transition-all"
            >
              Book a demo
              <svg className="inline-block w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/pricing"
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all"
            >
              See pricing
            </Link>
          </div>
          <p className="text-slate-500 text-sm mt-6">
            No credit card required. 14-day free trial available.
          </p>
        </div>
      </section>
    </>
  )
}
