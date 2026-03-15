import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Inventory Management Software for Manufacturers | Brahmin Solutions',
  description:
    'Inventory management software built for manufacturers. Track raw materials, WIP, and finished goods in real time. Starting from $199/month. Go live in weeks.',
  keywords: [
    'inventory management software',
    'manufacturing inventory software',
    'inventory tracking',
    'warehouse management',
    'inventory software for manufacturers',
    'inventory control software',
    'stock management software',
    'manufacturing inventory management',
    'cloud inventory software',
  ],
  alternates: {
    canonical: 'https://www.brahmin-solutions.com/inventory-management-software',
  },
  openGraph: {
    title: 'Inventory Management Software for Manufacturers',
    description:
      'Real-time inventory tracking for raw materials, WIP, and finished goods — built for manufacturers, not retailers.',
    url: 'https://www.brahmin-solutions.com/inventory-management-software',
    type: 'website',
    siteName: 'Brahmin Solutions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inventory Management Software for Manufacturers | Brahmin Solutions',
    description:
      'Track raw materials, WIP, and finished goods in real time. Starting from $199/month. Go live in 3–6 weeks.',
  },
}

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    title: 'Real-time inventory tracking',
    href: '/features/inventory',
    color: 'from-cyan-500 to-blue-600',
    description:
      'See what\'s in stock across all locations — raw materials, WIP, and finished goods. No more walking to the warehouse to check. Stock levels update automatically as orders ship, production runs complete, and shipments arrive.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
      </svg>
    ),
    title: 'Lot & batch tracking',
    href: '/features/traceability',
    color: 'from-rose-500 to-pink-600',
    description:
      'Track lot numbers, expiration dates, and supplier information for every item. Stay audit-ready and recall-capable at all times. Essential for FDA-regulated industries like food, supplements, and cosmetics.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
    title: 'BOM integration',
    href: '/features/production',
    color: 'from-blue-500 to-indigo-600',
    description:
      'Automatically calculate material requirements based on your bills of materials. Know what you need before you run out. When you schedule production, the system checks inventory and flags shortages before they halt the line.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    ),
    title: 'Reorder alerts',
    href: '/features/purchasing',
    color: 'from-amber-500 to-orange-600',
    description:
      'Get notified when inventory hits reorder points. Auto-generate purchase orders so materials arrive before production needs them. Set custom thresholds per item, per location — and never scramble for a rush order again.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
      </svg>
    ),
    title: 'Multi-location support',
    href: '/features/warehouse',
    color: 'from-violet-500 to-purple-600',
    description:
      'Track inventory across warehouses, production floors, 3PLs, and co-manufacturers. Transfer stock between locations with full traceability. See what\'s where in real time — not after someone emails you a spreadsheet.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: 'Costing & valuation',
    href: '/features/production',
    color: 'from-emerald-500 to-teal-600',
    description:
      'Know your true inventory value and cost of goods sold. FIFO, average, or standard costing — your choice. See exactly how material costs, labor, and overhead roll up into your finished goods so you can price with confidence.',
  },
]

const warningSigns = [
  {
    title: 'You don\'t know what\'s in stock until someone checks',
    description:
      'Walking to the warehouse to count materials isn\'t a system — it\'s a fire drill. Without real-time visibility, every production decision starts with "let me go check." That lag between what your records say and what\'s actually on the shelf creates a chain of bad decisions: ordering materials you already have, promising delivery dates you can\'t hit, and running production only to discover you\'re short on a key ingredient.',
  },
  {
    title: 'Stockouts keep halting production',
    description:
      'You\'ve run out of a key material mid-production more than once. Now you\'re expediting shipments at premium prices just to keep the line moving. Each emergency order costs 20–40% more than planned purchases, and the production downtime costs even more. Inventory software with reorder alerts catches shortages before they reach the floor — not after.',
  },
  {
    title: 'Excess inventory is tying up cash',
    description:
      'You\'re sitting on materials you don\'t need because "just in case" became your ordering strategy. That\'s working capital locked up in raw materials that could be sitting there for months. Real-time inventory data and consumption-based reorder points replace gut-feel ordering with data-driven decisions — so you buy what you need, when you need it.',
  },
  {
    title: 'WIP is a black hole',
    description:
      'You know what raw materials came in. You know what finished goods shipped. But what\'s actually in production right now? No idea. Work-in-progress is where most manufacturers lose visibility — and where the real money is. Inventory software that tracks WIP shows you exactly what\'s on the floor, what stage it\'s in, and what it\'s worth at any given moment.',
  },
  {
    title: 'Your team spends hours on data entry',
    description:
      'Updating spreadsheets, reconciling counts, emailing inventory updates between departments — your people are doing admin work instead of production work. Across a small team, this can consume 10–15 hours per week. That\'s time that goes straight back to production, quality, and customer service when inventory updates happen automatically.',
  },
  {
    title: 'Month-end counts are always wrong',
    description:
      'Every physical inventory count reveals discrepancies. You\'ve stopped trusting your own records, which means every decision — purchasing, production scheduling, order promising — is based on data you don\'t believe. When your system of record can\'t be trusted, you\'re not really using a system at all. You\'re guessing with extra steps.',
  },
]

const industries = [
  {
    href: '/industries/food-beverage',
    title: 'Food & beverage',
    tag: 'Lot tracking & recalls',
    color: 'from-orange-400 to-red-500',
    description: 'Expiration date tracking, FIFO rotation, recipe management, and one-click recall reports.',
  },
  {
    href: '/industries/cosmetics',
    title: 'Cosmetics & beauty',
    tag: 'FDA compliance',
    color: 'from-pink-400 to-rose-500',
    description: 'Formula management, batch tracking, ingredient traceability, and FDA compliance support.',
  },
  {
    href: '/industries/supplements',
    title: 'Supplements',
    tag: 'cGMP ready',
    color: 'from-green-400 to-emerald-500',
    description: 'cGMP compliance, CoA tracking, lot traceability, and quality control workflows.',
  },
  {
    href: '/industries/manufacturing',
    title: 'General manufacturing',
    tag: 'Full inventory control',
    color: 'from-violet-400 to-purple-500',
    description: 'WIP tracking, production scheduling, multi-location inventory, and shop floor management.',
  },
  {
    href: '/industries/medical-devices',
    title: 'Medical devices',
    tag: 'UDI & compliance',
    color: 'from-blue-400 to-indigo-500',
    description: 'Serial number tracking, UDI compliance, component traceability, and audit-ready records.',
  },
]

const buyerQuestions = [
  {
    question: 'Is this built for manufacturers or retailers?',
    guidance:
      'Retail inventory software counts SKUs on shelves. Manufacturing needs raw materials, WIP, BOMs, and production workflows. Ask specifically how the system handles work-in-progress — if it can\'t, you\'re looking at retail software wearing a manufacturing label.',
  },
  {
    question: 'How does it handle multi-location inventory?',
    guidance:
      'If you have materials in multiple warehouses, production areas, or 3PLs, you need real-time visibility across all of them — not separate systems to reconcile. Ask whether you can see consolidated stock levels and transfer between locations without exporting and importing spreadsheets.',
  },
  {
    question: 'What\'s the true total cost?',
    guidance:
      'Watch for per-user fees, especially if warehouse staff need access. Implementation fees and consultant charges add up fast. A transparent vendor gives you one monthly price that covers your whole team — no surprises when you add a warehouse worker or a production lead.',
  },
  {
    question: 'Does it integrate with my accounting software?',
    guidance:
      'Native integration with QuickBooks or Xero is table stakes. The sync should push purchase orders, inventory values, and cost of goods sold into your accounting software automatically. If syncing requires Zapier or manual exports, you\'ll spend hours on reconciliation every month.',
  },
  {
    question: 'How long will implementation take?',
    guidance:
      'If the answer is measured in months, ask why. Modern cloud inventory software goes live in 3–6 weeks with a dedicated implementation manager. Long implementations usually mean the system is more complex than you need — or the vendor is understaffed on support.',
  },
  {
    question: 'What support is included — and what costs extra?',
    guidance:
      'When you have a receiving problem at 2 PM on a Tuesday, how quickly will a real person help? Not a chatbot. Not a ticket queue. Not a help center article. The best vendors include unlimited support and training in every plan — not as an upsell tier you have to negotiate for.',
  },
]

const steps = [
  {
    title: 'Assess your needs',
    description:
      'What inventory types do you track? Raw materials, WIP, finished goods? Multiple locations? Lot tracking requirements? Document your must-haves vs. nice-to-haves so you don\'t pay for features you\'ll never use.',
  },
  {
    title: 'Clean your data',
    description:
      'Export your current inventory list. Verify counts, consolidate duplicates, and standardize naming. Your new system is only as good as the data you put in. Two days of cleanup saves two months of headaches.',
  },
  {
    title: 'Configure and import',
    description:
      'Set up locations, product categories, units of measure, and reorder points. Import your product list and opening balances. If this step requires a consultant, that\'s a red flag.',
  },
  {
    title: 'Train your team',
    description:
      'Focus on daily workflows: receiving, transfers, production consumption, shipping. Most users only need 20% of features to do 80% of their work. Start simple and expand.',
  },
  {
    title: 'Go live and iterate',
    description:
      'Start with real transactions. Edge cases will appear — that\'s normal. A good vendor helps you work through them quickly instead of pointing you to a knowledge base.',
  },
]

/* TODO: Replace placeholder testimonials with real customer quotes */
const testimonials = [
  {
    quote:
      'We went from walking to the warehouse to check stock to knowing exactly what we have in seconds. Production planning is actually possible now.',
    name: 'Sheldon Ratuski',
    company: 'FLFF',
    highlight: 'Real-time visibility',
    color: 'from-blue-500 to-cyan-500',
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
      'I\'m really happy with how fast we were able to set up Brahmin Solutions. It took us three months to get started with Katana, but Brahmin Solutions was ready in a week.',
    name: 'Adam McFarlin',
    company: 'Kalamazoo Candle Company',
    highlight: 'Live in days, not months',
    color: 'from-violet-500 to-purple-500',
  },
]

const faqs = [
  {
    question: 'What is inventory management software?',
    answer:
      'Inventory management software tracks what products and materials you have, where they\'re located, and when you need to reorder. For manufacturers, it handles raw materials, work-in-progress, and finished goods — not just retail SKUs. It replaces spreadsheets with real-time visibility into stock levels across every location.',
  },
  {
    question: 'What\'s the difference between inventory management software and MRP?',
    answer:
      'Inventory management focuses on tracking what you have — stock levels, locations, and reorder points. MRP (Material Requirements Planning) adds production scheduling and material planning based on demand and bills of materials. Many manufacturers need both — Brahmin includes inventory management and MRP in one system.',
  },
  {
    question: 'How much does inventory management software cost?',
    answer:
      'Enterprise systems cost $50,000–$500,000+ for implementation alone. Modern cloud inventory software for manufacturers typically costs $199–$500/month with no implementation fees. Watch for per-user pricing — it gets expensive fast when warehouse staff need access. Brahmin Solutions starts at $199/month with flat pricing for your whole team.',
  },
  {
    question: 'Do manufacturers need different inventory software than retailers?',
    answer:
      'Yes. Retail software tracks finished goods on shelves. Manufacturers need to track raw materials, work-in-progress, and finished goods — plus handle BOMs, lot tracking, and production consumption. Most retail inventory software can\'t do this, which is why manufacturers end up with workarounds and spreadsheets alongside their "inventory system."',
  },
  {
    question: 'What features should I look for in manufacturing inventory software?',
    answer:
      'Essential features: real-time tracking across locations, lot and batch tracking, BOM integration, reorder alerts, multi-location support, and native integration with your accounting software (QuickBooks or Xero). If you\'re in a regulated industry, add traceability and recall reporting to the list.',
  },
  {
    question: 'Can inventory software track work-in-progress (WIP)?',
    answer:
      'Some can, but most retail-focused software cannot. Look for systems that understand manufacturing workflows — where raw materials become WIP, then finished goods. If a vendor can\'t explain how their system handles WIP, it\'s designed for retail.',
  },
  {
    question: 'How long does it take to implement inventory software?',
    answer:
      'Enterprise systems take 6–18 months. Cloud-based inventory software for manufacturers typically goes live in 3–6 weeks with a dedicated implementation manager. The key factors are data quality, system complexity, and the level of vendor support you receive.',
  },
  {
    question: 'Can inventory software integrate with QuickBooks?',
    answer:
      'Most modern systems offer native QuickBooks integration. Brahmin syncs inventory values, purchase orders, and cost of goods sold from Brahmin into QuickBooks or Xero automatically. Native integration is included in every plan.',
  },
  {
    question: 'What\'s the difference between inventory software and ERP?',
    answer:
      'Inventory software focuses on tracking stock levels, locations, and reorder points. ERP (Enterprise Resource Planning) includes inventory plus accounting, HR, CRM, and more. Most growing manufacturers need focused inventory and MRP software with integrations to existing tools — not a full ERP that bundles dozens of modules they\'ll never use.',
  },
  {
    question: 'How do I know if I\'ve outgrown spreadsheets?',
    answer:
      'Key signs: no real-time visibility into stock levels, frequent stockouts or excess inventory, hours spent on data entry, inventory counts that don\'t match records, inability to track WIP, and difficulty answering simple questions like "do we have enough materials for this production run?" If three or more apply, you\'ve outgrown spreadsheets.',
  },
]

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Brahmin Solutions',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Inventory Management Software',
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
    'Real-time inventory tracking',
    'Lot and batch traceability',
    'Bill of materials (BOM) integration',
    'Multi-location warehouse management',
    'Reorder alerts and purchase orders',
    'QuickBooks and Xero integration',
    'Shopify integration',
    'Mobile warehouse app',
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
    name: 'Inventory management',
    sameAs: 'https://en.wikipedia.org/wiki/Inventory_management_software',
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
      name: 'Inventory Management Software',
      item: 'https://www.brahmin-solutions.com/inventory-management-software',
    },
  ],
}

export default function InventoryManagementSoftwarePage() {
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
              <span className="text-slate-700 font-medium">Inventory management software</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* ── Section 1: Hero — dark gradient with glow orbs ── */}
      <section className="relative overflow-hidden bg-slate-900 py-24 md:py-32">
        {/* Glow orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto text-center px-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-sm text-slate-300">Trusted by 300+ manufacturers</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Inventory management software{' '}
            </span>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              for manufacturers
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            You can&apos;t run production on guesswork. Know exactly what you have,
            what&apos;s in progress, and what you need — with inventory software
            built for manufacturers, not retailers.
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
                'Inventory management software gives manufacturers real-time visibility into raw materials, WIP, and finished goods across every location',
                'Key features for manufacturers: lot tracking, BOM integration, reorder alerts, multi-location support, and accounting sync',
                'Most inventory software is built for retail — manufacturers need systems that understand production workflows and WIP tracking',
                'Modern cloud inventory software starts from $199/month and goes live in 3–6 weeks with dedicated support',
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

      {/* ── Section 3: What is inventory management software? ── */}
      <section className="py-section">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            What is inventory management software?
          </h2>

          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            Inventory management software tracks what you have, where it is, and when
            you need more. For manufacturers, that means visibility into three types
            of inventory that most software ignores: raw materials, work-in-progress
            (WIP), and finished goods.
          </p>

          {/* Visual: 3 types of manufacturing inventory */}
          <div className="grid sm:grid-cols-3 gap-4 my-10">
            {[
              { gradient: 'from-amber-500 to-orange-500', icon: '🧱', text: 'Raw materials', subtext: 'What goes in' },
              { gradient: 'from-blue-500 to-indigo-500', icon: '⚙️', text: 'Work-in-progress', subtext: 'What\'s being made' },
              { gradient: 'from-emerald-500 to-teal-500', icon: '📦', text: 'Finished goods', subtext: 'What ships out' },
            ].map((item) => (
              <div key={item.text} className="relative group">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl opacity-5 group-hover:opacity-10 transition-opacity`} />
                <div className="relative bg-white rounded-2xl border border-slate-200 p-6 text-center hover:shadow-md transition-shadow">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <p className="font-semibold text-slate-900 text-sm">{item.text}</p>
                  <p className="text-slate-400 text-xs mt-1">{item.subtext}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-slate-600 mb-4 leading-relaxed">
            Most inventory software is designed for retail — tracking SKUs on shelves
            and counting what&apos;s in the stockroom. That works fine for a store. But
            manufacturers have a fundamentally different problem: raw materials become
            WIP, WIP becomes finished goods, and at every stage the quantities, values,
            and locations change. Retail software can&apos;t track that transformation.
          </p>

          <p className="text-slate-600 mb-4 leading-relaxed">
            Spreadsheets are where most small manufacturers start. They&apos;re flexible
            and familiar. But they break down as you grow: no real-time updates, no
            version control when multiple people edit the same file, no automatic
            connection between purchasing, production, and sales. One wrong cell — a
            mistyped quantity, a formula that didn&apos;t copy correctly — can cascade errors
            across your entire operation.
          </p>

          <p className="text-slate-600 mb-4 leading-relaxed">
            Manufacturing inventory software solves this by tracking every item as it
            moves through your operation. When you receive raw materials, stock levels
            update automatically. When production consumes those materials, inventory
            adjusts in real time. When finished goods ship, your available stock reflects
            it instantly. Everyone — purchasing, production, sales — sees the same numbers.
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
                For manufacturers still on spreadsheets, the results are immediate:
                real-time stock visibility, fewer stockouts, less excess inventory,
                and <strong>10–15 fewer hours per week</strong> on manual data entry.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">
            Inventory management vs. MRP vs. ERP
          </h3>

          <p className="text-slate-600 mb-4 leading-relaxed">
            <strong className="text-slate-900">Inventory management</strong> tracks what
            you have and where it is.{' '}
            <Link href="/mrp-software" className="text-primary-600 hover:text-primary-700 font-medium">
              MRP (Material Requirements Planning)
            </Link>{' '}
            goes further — it connects inventory to your bills of materials and production
            schedules to calculate what you need to buy and make, and when.{' '}
            <strong className="text-slate-900">ERP</strong> is broader still: it bundles
            inventory, MRP, accounting, HR, CRM, and more into one system.
          </p>

          <p className="text-slate-600 mb-4 leading-relaxed">
            For most growing manufacturers, the sweet spot is a system that combines
            inventory management with MRP capabilities — tracking what you have today
            while planning what you&apos;ll need tomorrow. Full ERP systems are designed for
            large enterprises with dedicated IT teams and six-figure budgets. They
            bundle modules you&apos;ll never use and charge you for the complexity.
          </p>

          <p className="text-slate-600 leading-relaxed">
            Brahmin combines real-time inventory tracking with production planning,
            purchasing, and traceability in one system — with native integrations to
            QuickBooks, Shopify, and ShipStation so you keep what works and replace
            only what&apos;s broken.
          </p>
        </div>
      </section>

      {/* ── Section 4: Signs you need inventory management software ── */}
      <section className="py-section bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            6 signs you need inventory management software
          </h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Spreadsheets work until they don&apos;t. Here are the warning signs that
            your current system is costing you more than it saves.
          </p>

          <div className="space-y-3">
            {warningSigns.map((sign, index) => (
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
            Sound familiar? If three or more apply, inventory software would likely pay
            for itself within a few months.{' '}
            <Link href="/compare/spreadsheets" className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-1 group">
              See how inventory software compares to spreadsheets
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
                Ready to see your inventory in real time?
              </h2>
              <p className="text-blue-100">
                See how Brahmin works with your products in a 30-minute demo.
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

      {/* ── Section 6: Key features — colored gradient icons ── */}
      <section className="py-section">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-3">
            Key features to look for
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            Not all inventory systems are built for manufacturing. These are the features
            that matter most when you&apos;re tracking raw materials, WIP, and finished goods.
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
              <p className="text-slate-900 font-semibold">Your inventory software should connect to the tools you already use</p>
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

      {/* ── Section 8: Inventory software by industry ── */}
      <section className="py-section bg-slate-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-3">
            Inventory software for your industry
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            Different industries have different inventory requirements. Whether you
            need expiration tracking for food or serial numbers for medical devices,
            the right software adapts to your workflow.
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

      {/* ── Section 9: Implementation comparison ── */}
      <section className="py-section">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-3">
            What implementation actually looks like
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            Implementation is where many manufacturers get burned. Enterprise vendors
            quote 6–18 months, charge five or six figures for consultants, and leave you
            with a system so complex your team avoids using it.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Enterprise */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200">
              <div className="inline-block bg-slate-100 text-slate-500 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
                Enterprise inventory / ERP
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
                  Modern cloud inventory software
                </div>
                <ul className="space-y-4">
                  {[
                    { bold: 'Go live in 3–6 weeks', rest: 'with dedicated support' },
                    { bold: 'Starting from $199/month', rest: '— no surprise fees' },
                    { bold: 'Self-service setup', rest: 'with a dedicated implementation manager' },
                    { bold: 'Flat pricing', rest: '— your whole team is included' },
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

      {/* ── Section 10: How to evaluate inventory software ── */}
      <section className="py-section bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            How to evaluate inventory software
          </h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Choosing the wrong inventory system is expensive — not just in dollars, but
            in the months your team spends fighting software instead of running production.
            Ask every vendor these six questions.
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
      {/* TODO: Replace placeholder testimonials with real customer quotes focused on inventory */}
      <section className="py-section">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-3">
            What manufacturers say after switching
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            Real results from manufacturers who replaced spreadsheets and
            disconnected systems with Brahmin.
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
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl" />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Ready to see your inventory in real time?
            </span>
          </h2>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed">
            Join 300+ growing manufacturers who&apos;ve simplified their operations with
            Brahmin. Starting from $199/month, no per-user fees, go live in weeks.
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
