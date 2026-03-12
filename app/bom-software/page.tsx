import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Bill of Materials Software | BOM Management | Brahmin Solutions',
  description:
    'Bill of materials software for manufacturers. Build multi-level BOMs, track real-time material costs, and price products based on actual data. Starting at $199/month. Go live in 3–6 weeks.',
  keywords: [
    'bill of materials software',
    'bom software',
    'bom management software',
    'bill of materials management',
    'manufacturing bom software',
    'bom costing software',
    'multi-level bom',
    'recipe management software',
    'product costing software',
    'bom for small manufacturers',
  ],
  alternates: {
    canonical: 'https://brahminsolutions.com/bom-software',
  },
  openGraph: {
    title: 'Bill of Materials Software for Manufacturers',
    description:
      'Build single-level or multi-level BOMs, track material costs in real time, and price products based on actual data — not guesswork.',
    url: 'https://brahminsolutions.com/bom-software',
    type: 'website',
    siteName: 'Brahmin Solutions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bill of Materials Software | BOM Management | Brahmin Solutions',
    description:
      'Build multi-level BOMs, track real-time material costs, and price products based on actual data. Starting at $199/month.',
  },
}

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    title: 'Multi-level BOMs',
    href: '/features/production',
    color: 'from-blue-500 to-indigo-600',
    description:
      'Build recipes, formulas, and assemblies with unlimited nesting. Define sub-assemblies as their own BOMs, then reference them inside parent products. Changes to a sub-assembly automatically cascade through every product that uses it — no manual updates across dozens of spreadsheets.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Real-time cost rollup',
    href: '/features/production',
    color: 'from-cyan-500 to-blue-600',
    description:
      'See the true cost of every product the moment a supplier price changes. Brahmin recalculates material costs, labor, and overhead across every BOM that uses that ingredient or component — so you always know your actual margins, not last quarter\'s estimates.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    title: 'Material availability',
    href: '/features/inventory',
    color: 'from-amber-500 to-orange-600',
    description:
      'Before you start a production run, know exactly which materials are in stock, which are allocated to other orders, and which need to be purchased. Brahmin checks your BOM against real-time inventory so you never discover a shortage after production has already started.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
    title: 'Sub-assembly management',
    href: '/features/production',
    color: 'from-rose-500 to-pink-600',
    description:
      'Break complex products into reusable sub-assemblies. A sauce, a dough base, a circuit board — define it once and use it across multiple finished goods. Track sub-assembly costs and inventory independently, then roll them up into the parent BOM automatically.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    ),
    title: 'Integration with purchasing',
    href: '/features/purchasing',
    color: 'from-violet-500 to-purple-600',
    description:
      'When a BOM shows you need materials you don\'t have, create a purchase order directly from the shortage list. Brahmin connects your BOMs to purchasing so reorder points, lead times, and vendor pricing are always factored into material planning — no switching between systems.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
      </svg>
    ),
    title: 'Lot tracking per BOM',
    href: '/features/traceability',
    color: 'from-emerald-500 to-teal-600',
    description:
      'Track which lot numbers went into every production run. When a supplier issues a recall or an audit requires traceability, pull a complete lot genealogy in minutes — from raw material receipt through finished goods shipment. Essential for FDA-regulated manufacturers.',
  },
]

const signs = [
  {
    title: 'You don\'t actually know what it costs to make each product',
    description:
      'If your product costs are based on estimates from when you first launched — or rough calculations that haven\'t been updated since your last supplier price increase — you\'re making pricing decisions on outdated data. BOM software calculates costs in real time using actual material prices, labor rates, and overhead allocations. Many manufacturers discover that 10–20% of their SKUs are underpriced once they see accurate numbers.',
  },
  {
    title: 'Multiple versions of the same BOM exist in different spreadsheets',
    description:
      'Recipe_v3_FINAL_updated_JAN.xlsx sounds familiar? When your production team uses one version, purchasing uses another, and the owner has a third in their email, nobody knows which is correct. One wrong quantity — a mistyped unit conversion, a deleted row, a formula that broke when someone added a column — cascades errors into purchasing, production, and costing. BOM software gives you one source of truth that everyone works from.',
  },
  {
    title: 'You discover you\'re missing materials after production starts',
    description:
      'Nothing kills production efficiency like starting a batch and realizing halfway through that you\'re short on a key ingredient. Spreadsheets can\'t check BOMs against live inventory. BOM software cross-references every material requirement against what\'s actually on the shelf, what\'s allocated to other orders, and what\'s on order from suppliers — before you start the run.',
  },
  {
    title: 'Pricing is based on estimates from months or years ago',
    description:
      'Raw material costs change constantly. If your selling prices are still based on cost estimates from six months ago, your margins may have eroded without you knowing it. BOM software recalculates product costs automatically when supplier prices change, so you can adjust pricing proactively instead of discovering margin compression at the end of the quarter.',
  },
  {
    title: 'Sub-assemblies make your BOMs impossible to manage',
    description:
      'When a finished product contains sub-assemblies — a sauce that goes into three different products, a pre-mixed compound used across an entire product line — managing this in spreadsheets becomes exponentially complex. Change one sub-assembly and you need to update every parent BOM manually. BOM software handles multi-level structures natively: update the sub-assembly once, and every product that references it updates automatically.',
  },
  {
    title: 'You can\'t quickly see the cost impact when a supplier raises prices',
    description:
      'A supplier emails you that their price is going up 12%. In a spreadsheet world, you\'d need to find every BOM that uses that material, recalculate costs, and figure out which finished goods are affected. With BOM software, you update the material cost once and instantly see the margin impact across every product — so you can decide which prices to adjust before the increase takes effect.',
  },
]

const industries = [
  {
    href: '/industries/food-beverage',
    title: 'Food & Beverage',
    tag: 'Recipe & lot tracking',
    color: 'from-orange-400 to-red-500',
    description: 'Recipe-based BOMs with yield tracking, allergen management, and FDA-compliant lot traceability.',
  },
  {
    href: '/industries/cosmetics',
    title: 'Cosmetics & Beauty',
    tag: 'Formula management',
    color: 'from-pink-400 to-rose-500',
    description: 'Formula BOMs with percentage-based ingredients, batch scaling, and regulatory compliance support.',
  },
  {
    href: '/industries/supplements',
    title: 'Supplements',
    tag: 'cGMP ready',
    color: 'from-green-400 to-emerald-500',
    description: 'Multi-level BOMs with CoA tracking, potency management, and full ingredient traceability.',
  },
  {
    href: '/industries/medical-devices',
    title: 'Medical devices',
    tag: 'FDA compliance',
    color: 'from-blue-400 to-indigo-500',
    description: 'Component-level BOMs with serial tracking, revision control, and audit-ready documentation.',
  },
  {
    href: '/industries/manufacturing',
    title: 'General manufacturing',
    tag: 'Full BOM management',
    color: 'from-violet-400 to-purple-500',
    description: 'Assembly BOMs, sub-assembly management, and real-time cost rollup for discrete manufacturers.',
  },
]

const buyerQuestions = [
  {
    question: 'Does the software support multi-level BOMs with sub-assemblies?',
    guidance:
      'If your products contain sub-assemblies or intermediate components, your BOM software needs to handle nesting natively. Ask whether sub-assemblies can be defined independently and referenced across multiple parent BOMs — and whether cost changes cascade automatically. Flat, single-level BOM tools won\'t scale as your products become more complex.',
  },
  {
    question: 'How does it handle cost updates when supplier prices change?',
    guidance:
      'The whole point of BOM software is accurate costing. Ask how quickly cost changes propagate: does updating a material price immediately recalculate every affected product, or do you need to run a manual update? Real-time cost rollup is the feature that separates useful BOM software from a glorified spreadsheet.',
  },
  {
    question: 'Can I check material availability before starting production?',
    guidance:
      'Your BOM software should cross-reference material requirements against live inventory and open purchase orders before you commit to a production run. If you still need to check inventory manually before scheduling production, the software isn\'t doing its job.',
  },
  {
    question: 'Does it integrate with my accounting and inventory systems?',
    guidance:
      'BOM software that exists in isolation creates the same data silos you\'re trying to eliminate. Look for native integration with QuickBooks or Xero for cost accounting, and make sure inventory levels sync automatically so BOM availability checks reflect reality — not yesterday\'s data.',
  },
  {
    question: 'What lot tracking and traceability features are included?',
    guidance:
      'If you\'re in a regulated industry — food, supplements, cosmetics, medical devices — your BOM software needs to track which lots went into every production run. Ask about forward and backward traceability, recall report generation, and whether traceability is built in or requires a separate module at additional cost.',
  },
  {
    question: 'How long will implementation take, and what support is included?',
    guidance:
      'BOM software should be operational in weeks, not months. Ask about data migration support, whether you get a dedicated implementation manager, and what happens after go-live. The best vendors include unlimited training and responsive human support in every plan — not as an upsell.',
  },
]

const steps = [
  {
    title: 'Audit your current BOMs',
    description:
      'Gather every recipe, formula, and assembly list from every spreadsheet, binder, and team member\'s head. Document what you\'re making, what goes into it, and what it should cost. This is the foundation everything else builds on.',
  },
  {
    title: 'Clean and standardize your data',
    description:
      'Standardize ingredient names, verify unit conversions, and reconcile quantities. If your spreadsheet says "flour" in three different rows with three different units, fix that before importing.',
  },
  {
    title: 'Build your BOMs in the system',
    description:
      'Start with your highest-volume products. Define sub-assemblies first, then build them into parent BOMs. Your implementation manager will help structure multi-level BOMs for maximum accuracy.',
  },
  {
    title: 'Connect your integrations',
    description:
      'Link your accounting software, e-commerce platform, and shipping tools. This ensures material costs, inventory levels, and sales data all flow into your BOM calculations.',
  },
  {
    title: 'Go live and refine',
    description:
      'Start running production with your new BOMs. Compare calculated costs to actuals, adjust yield percentages, and fine-tune overhead allocations. Most manufacturers see accurate costing within the first two production cycles.',
  },
]

const testimonials = [
  {
    quote:
      'Full visibility from purchase order to manufacturing to sales — plus accurate cost of goods. And the support is exceptional.',
    name: 'Sheldon Ratuski',
    company: 'FLFF',
    highlight: 'True cost visibility',
    color: 'from-violet-500 to-purple-500',
  },
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
    highlight: 'Everything connected',
    color: 'from-blue-500 to-cyan-500',
  },
]

const faqs = [
  {
    question: 'What is bill of materials (BOM) software?',
    answer:
      'Bill of materials software helps manufacturers define, manage, and cost the list of raw materials, components, and sub-assemblies needed to produce a finished product. Instead of maintaining BOMs in spreadsheets, dedicated BOM software provides real-time cost rollup, material availability checks, version control, and integration with inventory, purchasing, and production systems.',
  },
  {
    question: 'What is the difference between a single-level and multi-level BOM?',
    answer:
      'A single-level BOM lists only the direct materials and components needed to make a product — one level deep. A multi-level BOM includes sub-assemblies that have their own BOMs, creating a nested structure. For example, a granola bar might have a single-level BOM, but a frozen meal with a separately prepared sauce would use a multi-level BOM where the sauce is a sub-assembly with its own ingredient list.',
  },
  {
    question: 'How does BOM software calculate product costs?',
    answer:
      'BOM software calculates product costs by multiplying each material\'s quantity by its current purchase price, then adding labor and overhead allocations. When a supplier price changes, the system automatically recalculates the cost of every product that uses that material. This gives you real-time margin visibility instead of relying on estimates.',
  },
  {
    question: 'Can BOM software handle recipes and formulas?',
    answer:
      'Yes. In manufacturing, a "recipe" or "formula" is simply a BOM expressed differently — often using percentages, weights, or volumes instead of discrete unit counts. Brahmin Solutions supports recipe-based BOMs with yield tracking, batch scaling, and percentage-based formulations used in food, cosmetics, and supplement manufacturing.',
  },
  {
    question: 'How is BOM software different from MRP software?',
    answer:
      'BOM management is one component of MRP (Material Requirements Planning) software. MRP goes further by using your BOMs along with sales orders and production schedules to calculate what materials you need to purchase and when. Think of BOM software as defining "what goes into each product," while MRP answers "what do I need to buy and make this week?" Brahmin Solutions includes both BOM management and full MRP functionality.',
  },
  {
    question: 'Do I need BOM software if I only have simple products?',
    answer:
      'Even simple products benefit from BOM software if you want accurate costing. A candle with three ingredients still needs cost tracking as wax and fragrance prices change. The real question is whether you\'re confident in your product costs and margins. If the answer is no, BOM software pays for itself quickly — regardless of product complexity.',
  },
  {
    question: 'How much does BOM software cost?',
    answer:
      'Standalone BOM tools range from free (basic spreadsheet alternatives) to hundreds per month. Enterprise ERP systems with BOM modules can cost $50,000–$500,000+ to implement. Brahmin Solutions starts at $199/month with BOM management, inventory tracking, production scheduling, and purchasing included — no per-user fees, no implementation charges.',
  },
  {
    question: 'How long does it take to set up BOMs in the system?',
    answer:
      'Most manufacturers have their core BOMs built and operational within the first two weeks of implementation. The full go-live process — including data migration, integration setup, and team training — typically takes 3–6 weeks with a dedicated implementation manager guiding you through each step.',
  },
  {
    question: 'Can BOM software track lot numbers for traceability?',
    answer:
      'Yes. Brahmin Solutions tracks which lot numbers of each raw material went into every production run, providing full forward and backward traceability. This is essential for FDA-regulated industries like food, supplements, cosmetics, and medical devices, where you need to generate recall reports quickly during audits or quality events.',
  },
  {
    question: 'Does Brahmin Solutions integrate with QuickBooks?',
    answer:
      'Yes. Brahmin Solutions offers native integration with QuickBooks Online. The integration syncs purchase orders, sales orders, invoices, and inventory values from Brahmin into your accounting software automatically — eliminating manual data entry and keeping your books accurate without extra work.',
  },
]

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Brahmin Solutions',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Bill of Materials Software',
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
    'Multi-level bill of materials',
    'Real-time cost rollup',
    'Material availability checking',
    'Sub-assembly management',
    'Lot and batch traceability',
    'QuickBooks and Xero integration',
    'Production scheduling',
    'Purchase order management',
  ],
  audience: {
    '@type': 'Audience',
    audienceType: 'Small to mid-sized manufacturers',
  },
  url: 'https://brahminsolutions.com',
  sameAs: [
    'https://www.linkedin.com/company/brahmin-solutions',
  ],
  about: {
    '@type': 'Thing',
    name: 'Bill of materials',
    sameAs: 'https://en.wikipedia.org/wiki/Bill_of_materials',
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
      item: 'https://brahminsolutions.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Bill of materials software',
      item: 'https://brahminsolutions.com/bom-software',
    },
  ],
}

export default function BOMSoftwarePage() {
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
              <span className="text-slate-700 font-medium">Bill of materials software</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* ── Section 1: Hero — dark gradient with glow orbs ── */}
      <section className="relative overflow-hidden bg-slate-900 py-24 md:py-32">
        {/* Glow orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto text-center px-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-sm text-slate-300">Trusted by 300+ manufacturers</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Bill of materials software for{' '}
            </span>
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              manufacturers
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Know exactly what goes into every product — and what it costs. Build single-level
            or multi-level BOMs, track material costs in real time, and price products based
            on actual data, not guesswork.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/demo"
              className="group bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
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
            Starting from $199/month. No per-user fees. Go live in weeks.
          </p>
        </div>
      </section>

      {/* ── Section 2: Key takeaways — glass card ── */}
      <section className="py-10 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
            <h2 className="font-bold text-lg text-slate-900 mb-5 flex items-center gap-2">
              <span className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              </span>
              Key takeaways
            </h2>
            <ul className="space-y-3 text-slate-600">
              {[
                'BOM software replaces spreadsheet-based recipes and formulas with a structured, version-controlled system that the whole team works from',
                'The key differentiator: true cost visibility — finally know what every product actually costs to make, updated in real time as material prices change',
                'Multi-level BOMs with sub-assemblies let you define a component once and reuse it across products, with automatic cost rollup',
                'Modern cloud BOM software goes live in 3–6 weeks starting from $199/month, with no per-user fees and dedicated implementation support',
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

      {/* ── Section 3: What is BOM software? ── */}
      <section className="py-section">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            What is bill of materials software?
          </h2>

          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            A bill of materials (BOM) is the complete list of raw materials, components,
            sub-assemblies, and quantities needed to manufacture a finished product. BOM
            software is the system that manages these lists — and more importantly, connects
            them to your inventory, purchasing, production, and costing data so everything
            stays accurate and up to date.
          </p>

          {/* Visual: BOM components */}
          <div className="grid sm:grid-cols-3 gap-4 my-10">
            {[
              { gradient: 'from-blue-500 to-cyan-500', icon: '📋', text: 'What goes into each product?' },
              { gradient: 'from-violet-500 to-purple-500', icon: '💰', text: 'What does it actually cost?' },
              { gradient: 'from-amber-500 to-orange-500', icon: '📦', text: 'Do I have the materials?' },
            ].map((item) => (
              <div key={item.text} className="relative group">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl opacity-5 group-hover:opacity-10 transition-opacity`} />
                <div className="relative bg-white rounded-2xl border border-slate-200 p-6 text-center hover:shadow-md transition-shadow">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <p className="font-semibold text-slate-900 text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-slate-600 mb-4 leading-relaxed">
            At its simplest, a BOM is a recipe. A food manufacturer lists ingredients and
            quantities. A cosmetics company defines a formula with percentages. A hardware
            manufacturer specifies components and sub-assemblies. The format varies by
            industry, but the purpose is the same: define exactly what goes into a product
            so you can make it consistently, cost it accurately, and purchase materials
            intelligently.
          </p>

          <p className="text-slate-600 mb-4 leading-relaxed">
            BOM software takes this concept and makes it operational. Instead of a static
            list in a spreadsheet, your BOMs become dynamic documents connected to live data.
            When a supplier raises prices, your product costs update automatically. When you
            receive a shipment, material availability recalculates across every BOM. When
            you schedule a production run, the system checks whether you have enough of every
            ingredient before you start — and tells you exactly what to order if you don&apos;t.
          </p>

          <p className="text-slate-600 mb-4 leading-relaxed">
            For growing manufacturers, this shift from static to dynamic is transformative.
            Instead of one person manually updating spreadsheets after every price change,
            every production run, and every inventory adjustment, the system does it
            continuously. Production managers see accurate costs. Purchasing knows what to
            reorder. The owner can check margins on any product in seconds — without asking
            anyone to pull numbers from three different files.
          </p>

          <p className="text-slate-600 mb-4 leading-relaxed">
            The most powerful feature of modern BOM software is multi-level structure. A
            finished product can reference sub-assemblies that have their own BOMs, which in
            turn reference their own components. A frozen meal contains a sauce, which
            contains a spice blend, which contains individual spices. Each level has its own
            cost, yield percentage, and material requirements — and the system rolls
            everything up into a single, accurate product cost automatically.
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
                True cost visibility is the BOM advantage. Manufacturers who switch from
                spreadsheet BOMs to dedicated software typically discover that{' '}
                <strong>10–20% of their products are priced below actual cost</strong> —
                margin leaks they couldn&apos;t see without real-time cost rollup.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">
            Why spreadsheet BOMs don&apos;t scale
          </h3>

          <p className="text-slate-600 mb-4 leading-relaxed">
            Spreadsheets work fine when you have five products and stable material costs.
            But as your product catalog grows, as supplier prices change, and as you add
            sub-assemblies, the spreadsheet approach breaks down in predictable ways.
            Formulas get overwritten. Versions diverge. Nobody trusts the numbers.
          </p>

          <p className="text-slate-600 mb-4 leading-relaxed">
            The core problem is that spreadsheets are disconnected from your other systems.
            Your BOM spreadsheet doesn&apos;t know when inventory levels change, when a purchase
            order arrives, or when a supplier updates their pricing. Every one of those
            changes requires someone to manually update the spreadsheet — and every manual
            update is an opportunity for error. Multiply that by dozens of products and
            hundreds of materials, and you&apos;re spending hours on data entry that BOM
            software handles automatically.
          </p>

          <p className="text-slate-600 leading-relaxed">
            The transition from spreadsheets to BOM software is often the first step in a
            larger move toward{' '}
            <Link href="/mrp-software" className="text-primary-600 hover:text-primary-700 font-medium">
              MRP software
            </Link>
            {' '}— connecting your BOMs to production scheduling, inventory tracking, and
            purchasing in a single system. But even on its own, accurate BOM management
            delivers immediate ROI through better costing, fewer material shortages, and
            less time spent reconciling spreadsheets.
          </p>
        </div>
      </section>

      {/* ── Section 4: 6 signs you need BOM software ── */}
      <section className="py-section bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            6 signs you need BOM software
          </h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Spreadsheet BOMs are a great starting point. But there&apos;s a point where
            they cost you more in errors and lost time than dedicated software would cost per month.
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
            If three or more of these sound familiar, BOM software would likely pay for
            itself within the first few months.{' '}
            <Link href="/compare/spreadsheets" className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-1 group">
              See spreadsheets vs. Brahmin
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </p>
        </div>
      </section>

      {/* ── Mid-page CTA — gradient with glassmorphism ── */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 py-14">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Ready to know your true product costs?
              </h2>
              <p className="text-blue-100">
                See how Brahmin builds BOMs with your actual products in a 30-minute demo.
              </p>
            </div>
            <Link
              href="/demo"
              className="group bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-white/20 hover:-translate-y-0.5 transition-all flex-shrink-0"
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
              { value: '3–6 weeks', label: 'avg. go-live' },
              { value: '<15 min', label: 'support response' },
              { value: '$199/mo', label: 'starting price' },
            ].map((stat) => (
              <div key={stat.value}>
                <span className="text-white font-bold text-xl block">{stat.value}</span>
                <span className="text-blue-200 text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Key features — colored gradient icons ── */}
      <section className="py-section">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-3">
            Key features to look for in BOM software
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            Not all BOM tools are equal. These are the features that separate useful
            software from a glorified spreadsheet.
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
          <div className="mt-10 bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-6 border border-slate-200 flex flex-col sm:flex-row items-center gap-4">
            <div className="w-11 h-11 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
              </svg>
            </div>
            <div className="flex-1 text-center sm:text-left">
              <p className="text-slate-900 font-semibold">Your BOMs should connect to the tools you already use</p>
              <p className="text-slate-500 text-sm">
                QuickBooks, Xero, Shopify, WooCommerce, ShipStation, and more — natively integrated.
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

      {/* ── Section 6: How BOMs connect to everything ── */}
      <section className="py-section bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-3">
            How BOMs connect to everything
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            A BOM isn&apos;t just a recipe — it&apos;s the thread that ties your entire
            manufacturing operation together.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'BOM + Inventory',
                gradient: 'from-blue-500 to-cyan-500',
                description:
                  'Your BOM defines what materials each product needs. Connected to live inventory, it tells you whether you can fulfill an order right now — or what you\'re short on. No more starting production and discovering you\'re missing a key ingredient.',
                link: '/features/inventory',
                linkText: 'Inventory management',
              },
              {
                title: 'BOM + Purchasing',
                gradient: 'from-amber-500 to-orange-500',
                description:
                  'When a BOM reveals material shortages, purchasing should know immediately. Connected BOM and purchasing systems auto-generate purchase orders based on BOM requirements, lead times, and reorder points — so materials arrive before production needs them.',
                link: '/features/purchasing',
                linkText: 'Purchasing features',
              },
              {
                title: 'BOM + Production',
                gradient: 'from-violet-500 to-purple-500',
                description:
                  'Work orders pull directly from your BOMs. When you schedule a production run, the system allocates materials, calculates expected output based on yield percentages, and tracks actual vs. planned consumption — giving you data to improve efficiency over time.',
                link: '/features/production',
                linkText: 'Production tracking',
              },
              {
                title: 'BOM + Costing',
                gradient: 'from-emerald-500 to-teal-500',
                description:
                  'Every BOM is a cost equation. Material quantities multiplied by current prices, plus labor and overhead, equals your true product cost. When any input changes — a supplier price increase, a new labor rate — product costs recalculate automatically across every affected SKU.',
                link: '/features/production',
                linkText: 'Cost tracking',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md transition-shadow">
                <div className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-4 bg-gradient-to-r ${item.gradient} text-white`}>
                  {item.title}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{item.description}</p>
                <Link href={item.link} className="text-primary-600 text-sm font-medium inline-flex items-center gap-1 group">
                  {item.linkText}
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 7: BOM software by industry ── */}
      <section className="py-section">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-3">
            BOM software for your industry
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            Whether you manage recipes, formulas, or assemblies — the right BOM software
            adapts to your product structure and compliance requirements.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
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

      {/* ── Section 8: Accurate costing — before/after ── */}
      <section className="py-section bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-3">
            Accurate costing: the BOM advantage
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            The difference between guessing your margins and knowing them comes
            down to how you manage your BOMs.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Before */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200">
              <div className="inline-block bg-red-50 text-red-600 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
                Spreadsheet BOMs
              </div>
              <ul className="space-y-4">
                {[
                  { bold: 'Costs updated', rest: 'quarterly — if someone remembers' },
                  { bold: 'Sub-assembly costs', rest: 'calculated manually in separate tabs' },
                  { bold: 'Supplier price changes', rest: 'take weeks to propagate' },
                  { bold: 'Margin visibility', rest: 'requires pulling data from multiple files' },
                  { bold: 'Pricing decisions', rest: 'based on estimates, not actuals' },
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

            {/* After */}
            <div className="relative bg-white rounded-2xl overflow-hidden border-2 border-blue-200">
              <div className="h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500" />
              <div className="p-8">
                <div className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
                  Brahmin BOM software
                </div>
                <ul className="space-y-4">
                  {[
                    { bold: 'Costs update instantly', rest: 'when any material price changes' },
                    { bold: 'Sub-assembly costs', rest: 'roll up automatically through every level' },
                    { bold: 'Supplier price changes', rest: 'propagate across all BOMs immediately' },
                    { bold: 'Margin visibility', rest: 'available per product in real time' },
                    { bold: 'Pricing decisions', rest: 'based on actual, current production costs' },
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

      {/* ── Section 9: Implementation comparison ── */}
      <section className="py-section">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-3">
            What implementation actually looks like
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            Implementation is where many manufacturers get burned. Enterprise vendors
            quote months, charge five or six figures for consultants, and leave you
            with a system your team avoids using.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Enterprise */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200">
              <div className="inline-block bg-slate-100 text-slate-500 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
                Enterprise ERP
              </div>
              <ul className="space-y-4">
                {[
                  { bold: '6–18 month', rest: 'implementation timeline' },
                  { bold: '$50,000–$500,000+', rest: 'upfront costs' },
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
            <div className="relative bg-white rounded-2xl overflow-hidden border-2 border-blue-200">
              <div className="h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500" />
              <div className="p-8">
                <div className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
                  Modern cloud BOM software
                </div>
                <ul className="space-y-4">
                  {[
                    { bold: 'Go live in 3–6 weeks', rest: 'with dedicated support' },
                    { bold: 'Starting from $199/month', rest: '— no surprise fees' },
                    { bold: 'Self-service setup', rest: 'with implementation manager' },
                    { bold: 'Flat pricing', rest: '— your whole team included' },
                    { bold: 'Purpose-built', rest: 'for $500K–$50M manufacturers' },
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
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-sm shadow-blue-500/20">
                      {index + 1}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-px h-full bg-gradient-to-b from-blue-200 to-transparent my-2" />
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

      {/* ── Section 10: How to evaluate BOM software ── */}
      <section className="py-section bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            How to evaluate BOM software
          </h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Choosing the wrong tool is expensive — not just in dollars, but in the months
            your team spends fighting software instead of running production. Ask every
            vendor these six questions.
          </p>

          <div className="space-y-3">
            {buyerQuestions.map((item, index) => (
              <div
                key={item.question}
                className="bg-white rounded-2xl p-5 border border-slate-200 hover:shadow-sm transition-shadow"
              >
                <h3 className="font-bold text-slate-900 mb-2 flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center text-xs font-bold text-slate-500 mt-0.5">
                    {index + 1}
                  </span>
                  {item.question}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed ml-10">{item.guidance}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 11: Testimonials ── */}
      <section className="py-section">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-3">
            What manufacturers say after switching
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            Real results from manufacturers who moved from spreadsheets and
            outdated systems to Brahmin.
          </p>

          {/* TODO: Replace with BOM-specific testimonials when available */}
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
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-violet-500/15 rounded-full blur-3xl" />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Ready to know what your products actually cost?
            </span>
          </h2>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed">
            Join 300+ growing manufacturers who&apos;ve replaced spreadsheet BOMs with
            real-time cost visibility. Starting from $199/month, no per-user fees,
            go live in weeks.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/demo"
              className="group bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 transition-all"
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
