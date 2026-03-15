import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'MRP Software for Small Manufacturers | Brahmin Solutions',
  description:
    'MRP software that helps growing manufacturers plan production, manage inventory, and know their true costs. Starting from $199/month. Go live in weeks, not months.',
  keywords: [
    'mrp software',
    'manufacturing software',
    'material requirements planning',
    'production planning software',
    'mrp for small business',
    'mrp system',
    'manufacturing resource planning',
    'cloud mrp software',
    'mrp software for small manufacturers',
  ],
  alternates: {
    canonical: 'https://www.brahmin-solutions.com/mrp-software',
  },
  openGraph: {
    title: 'MRP Software for Growing Manufacturers',
    description:
      'Plan production, manage materials, and finally know your true costs — without enterprise complexity.',
    url: 'https://www.brahmin-solutions.com/mrp-software',
    type: 'website',
    siteName: 'Brahmin Solutions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MRP Software for Small Manufacturers | Brahmin Solutions',
    description:
      'Plan production, manage inventory, and know your true costs. Starting from $199/month. Go live in 3–6 weeks.',
  },
}

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
    title: 'Bill of Materials (BOM)',
    href: '/features/production',
    color: 'from-blue-500 to-indigo-600',
    description:
      'Create recipes, formulas, and multi-level assemblies with accurate costing at every level. Define sub-assemblies, set yield percentages, and track material costs as supplier prices change. Always know what goes into every product — and what it actually costs to make.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
    title: 'Production scheduling',
    href: '/features/production',
    color: 'from-violet-500 to-purple-600',
    description:
      'Schedule work orders, allocate resources, and spot bottlenecks before they cause delays. See which jobs are running, which are queued, and which are waiting on materials — so your whole team stays aligned without morning standup meetings.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    title: 'Inventory tracking',
    href: '/features/inventory',
    color: 'from-cyan-500 to-blue-600',
    description:
      'Real-time visibility into raw materials, work-in-progress, and finished goods across every warehouse, 3PL, and co-manufacturer. Track stock levels as orders ship, production runs complete, and shipments arrive — no more guessing what you have or where it is.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    ),
    title: 'Purchase orders',
    href: '/features/purchasing',
    color: 'from-amber-500 to-orange-600',
    description:
      'Auto-generate purchase orders when inventory hits reorder points. Track supplier lead times, compare vendor pricing, and manage receiving — so materials arrive before production needs them, not after.',
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
      'Track lot numbers, expiration dates, and maintain full forward and backward traceability from raw materials to finished products. Generate recall reports in minutes instead of days. Essential for FDA-regulated industries like food, supplements, and cosmetics.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: 'Costing & reporting',
    href: '/features/production',
    color: 'from-emerald-500 to-teal-600',
    description:
      'See your true production costs — materials, labor, overhead, and yield loss per unit. Stop guessing at margins and start pricing products based on real data. Identify your most profitable lines and the SKUs that are quietly losing money.',
  },
]

const spreadsheetSigns = [
  {
    title: 'Multiple versions of the same spreadsheet',
    description:
      'Inventory_FINAL_v3_updated.xlsx sounds familiar? When multiple people maintain their own copies, nobody knows which file has the right numbers. One wrong cell — a mistyped quantity, a deleted row, a formula that didn\'t copy correctly — can cascade errors across purchasing, production, and fulfillment. The time spent reconciling versions is time you\'ll never get back.',
  },
  {
    title: 'Stockouts that catch you off guard',
    description:
      'Spreadsheets don\'t update themselves. If a stockout has ever surprised you because the count didn\'t match reality, you\'re making purchasing decisions on stale data. Real-time inventory tracking eliminates the gap between what your spreadsheet says and what\'s actually on the shelf — so you reorder based on facts, not guesswork.',
  },
  {
    title: 'Can\'t tell a customer when their order will ship',
    description:
      'You shouldn\'t need to check three files and ask two people to answer a simple customer question. If you can\'t confirm an order status in under a minute, your system is costing you customer trust. Connected MRP ties orders to production schedules and inventory in one view, so the answer is always at your fingertips.',
  },
  {
    title: 'No idea what it actually costs to make each product',
    description:
      'Material costs, labor, overhead, yield loss — if you\'re estimating instead of tracking, you might be losing money on products you think are profitable. Many manufacturers discover after implementing MRP that 10–20% of their SKUs are underpriced. Accurate costing doesn\'t just protect your margins — it changes which products you prioritize.',
  },
  {
    title: 'Month-end counts don\'t match your records',
    description:
      'If your physical count regularly differs from your spreadsheet by more than a few percent, every purchasing and production decision you\'ve made that month was based on bad data. The variance compounds: you over-order some materials, run short on others, and spend days untangling the discrepancies instead of running production.',
  },
  {
    title: 'Hours spent on data entry instead of production',
    description:
      'Copying data between spreadsheets, emailing the warehouse for stock counts, manually creating purchase orders, re-keying the same information into QuickBooks — this busywork can consume 10–15 hours per week across a small team. That\'s time your people could spend on work that actually grows the business: improving production processes, building customer relationships, or developing new products.',
  },
]

const industries = [
  {
    href: '/industries/food-beverage',
    title: 'Food & Beverage',
    tag: 'Lot tracking & recalls',
    color: 'from-orange-400 to-red-500',
    description: 'Expiration dates, recipe management, and recall readiness.',
  },
  {
    href: '/industries/cosmetics',
    title: 'Cosmetics & Beauty',
    tag: 'FDA compliance',
    color: 'from-pink-400 to-rose-500',
    description: 'Formula management, batch tracking, and compliance support.',
  },
  {
    href: '/industries/supplements',
    title: 'Supplements',
    tag: 'cGMP ready',
    color: 'from-green-400 to-emerald-500',
    description: 'Lot traceability, CoA management, and quality control.',
  },
  {
    href: '/industries/electronics',
    title: 'Electronics',
    tag: 'Serial tracking',
    color: 'from-blue-400 to-indigo-500',
    description: 'Serial numbers, multi-level BOMs, and component management.',
  },
  {
    href: '/industries/manufacturing',
    title: 'General manufacturing',
    tag: 'Full MRP',
    color: 'from-violet-400 to-purple-500',
    description: 'Production scheduling, inventory control, and shop floor management.',
  },
]

const buyerQuestions = [
  {
    question: 'How long will implementation take?',
    guidance:
      'If the answer is measured in months, ask why. Modern cloud MRP systems go live in 3–6 weeks with a dedicated implementation manager guiding you through data migration, workflow setup, and team training. Long implementations usually mean the system is more complex than you need — or the vendor is understaffed on support.',
  },
  {
    question: 'What\'s the true total cost?',
    guidance:
      'Watch for per-user fees that punish you for growing, implementation fees that double the first-year cost, and mandatory consultant charges for basic configuration. A transparent vendor gives you one monthly price that covers your whole team — no surprises when you add a warehouse worker or a new admin.',
  },
  {
    question: 'Can my team use it without weeks of training?',
    guidance:
      'Request a hands-on demo with your actual products, not just a polished sales presentation. Have your warehouse staff and production leads sit in. If the interface feels overwhelming in a demo environment, imagine what it\'s like at 7 AM on a busy production day when someone needs to receive a shipment.',
  },
  {
    question: 'Does it integrate with my accounting software?',
    guidance:
      'Native integration with QuickBooks or Xero is table stakes. The sync should push purchase orders, sales orders, invoices, and inventory values into your accounting software automatically. If syncing requires Zapier or a third-party connector, that\'s a yellow flag for reliability and data accuracy.',
  },
  {
    question: 'What support is included — and what costs extra?',
    guidance:
      'Ask specifically: if I have a problem at 2 PM on a Tuesday, how quickly will a real person help me? Not a chatbot, not a ticket queue, not a help center article. The best MRP vendors include unlimited support and training in every plan — not as an upsell tier you have to negotiate for.',
  },
  {
    question: 'Is this built for companies my size?',
    guidance:
      'Enterprise software forced onto small manufacturers rarely works. You end up paying for features you\'ll never use — advanced HR modules, multi-currency treasury management, custom workflow engines — and fighting an interface designed for 500-person companies with dedicated IT departments. Look for a system purpose-built for manufacturers in the $500K–$50M revenue range.',
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
      'I\'m really happy with how fast we were able to set up Brahmin Solutions. It took us three months to get started with Katana, but Brahmin Solutions was ready in a week.',
    name: 'Adam McFarlin',
    company: 'Kalamazoo Candle Company',
    highlight: 'Live in days, not months',
    color: 'from-blue-500 to-cyan-500',
  },
]

const steps = [
  {
    title: 'Assess your needs',
    description:
      'Document what\'s working and what\'s broken. Your must-haves vs. nice-to-haves. This clarity helps you avoid paying for features you\'ll never use.',
  },
  {
    title: 'Clean your data',
    description:
      'Clean up your product list, verify BOMs, reconcile inventory counts. Your MRP is only as good as the data in it.',
  },
  {
    title: 'Configure and import',
    description:
      'Set up products, BOMs, warehouses, and integrations. If this requires a consultant, that\'s a red flag for ongoing complexity.',
  },
  {
    title: 'Train your team',
    description:
      'Focus on daily workflows, not every feature. Most users only need 20% of the system to do 80% of their work.',
  },
  {
    title: 'Go live and iterate',
    description:
      'Start with real orders. Edge cases will appear — that\'s normal. A good vendor helps you work through them quickly.',
  },
]

const faqs = [
  {
    question: 'What is MRP software?',
    answer:
      'MRP (Material Requirements Planning) software helps manufacturers plan what materials they need, when to order them, and how to schedule production. It uses bills of materials and production schedules to calculate material requirements automatically, replacing manual spreadsheet calculations.',
  },
  {
    question: 'What\'s the difference between MRP and ERP?',
    answer:
      'MRP focuses on production planning and inventory management. ERP (Enterprise Resource Planning) is broader — it includes MRP functionality plus modules for accounting, HR, CRM, and more. For most growing manufacturers, a focused MRP system with integrations to existing tools is more practical and affordable than a full ERP.',
  },
  {
    question: 'How much does MRP software cost?',
    answer:
      'MRP software pricing varies widely. Enterprise systems can cost $50,000–$500,000+ for implementation plus ongoing fees. Modern cloud MRP systems designed for small and mid-sized manufacturers typically range from $300–$1,000/month or more depending on features, user count, and order volume. Brahmin Solutions starts at $199/month with no per-user fees.',
  },
  {
    question: 'How long does MRP implementation take?',
    answer:
      'Enterprise MRP/ERP systems often take 6–18 months to implement. Cloud-based MRP systems built for small and mid-sized manufacturers can be implemented in 3–6 weeks. The key factors are data quality, system complexity, and the level of vendor support you receive.',
  },
  {
    question: 'Do small manufacturers need MRP software?',
    answer:
      'If you\'re manufacturing products and managing inventory with spreadsheets, you\'ll likely benefit from MRP software. Common signs you\'ve outgrown spreadsheets include frequent stockouts, too much time spent on data entry, unclear production costs, and difficulty scaling operations. Most manufacturers see clear ROI within 2–3 months.',
  },
  {
    question: 'What features should I look for in MRP software?',
    answer:
      'Essential features include BOM management, inventory tracking, production scheduling, purchase order management, and reporting. Depending on your industry, you may also need lot and batch tracking, serial numbers, or specific compliance features. Prioritize ease of use — the best features are worthless if your team won\'t use them.',
  },
  {
    question: 'Can MRP software integrate with QuickBooks?',
    answer:
      'Most modern MRP systems integrate with QuickBooks Online and/or QuickBooks Desktop. This integration syncs purchase orders, sales orders, invoices, and inventory values between systems automatically. Brahmin Solutions offers native QuickBooks integration included in every plan.',
  },
  {
    question: 'Is cloud-based MRP better than on-premise?',
    answer:
      'For most growing manufacturers, cloud-based MRP is the better choice. Benefits include no IT infrastructure to maintain, automatic updates, access from anywhere, lower upfront costs, and faster implementation. On-premise solutions may make sense for very large enterprises with specific security or customization requirements.',
  },
  {
    question: 'What industries use MRP software?',
    answer:
      'MRP software is used across manufacturing industries including food and beverage, cosmetics, supplements, electronics, apparel, and general manufacturing. Any business that transforms raw materials into finished products — and needs to manage that process — can benefit from MRP.',
  },
  {
    question: 'How do I know if I\'ve outgrown spreadsheets?',
    answer:
      'Common signs include managing multiple spreadsheet versions, experiencing unexpected stockouts, not knowing your true production costs, spending hours on data entry, and month-end inventory counts that don\'t match your records. If any of these sound familiar, it\'s time to evaluate MRP software.',
  },
  {
    question: 'What is the best MRP software for small manufacturers?',
    answer:
      'The best MRP software for small manufacturers is one that covers core needs — inventory tracking, BOM management, production scheduling, and purchasing — without enterprise complexity. Look for fast implementation (weeks, not months), flat pricing without per-user fees, native integrations with QuickBooks and Shopify, and responsive human support. Brahmin Solutions is purpose-built for manufacturers with $500K–$50M in revenue and goes live in 3–6 weeks starting at $199/month.',
  },
  {
    question: 'What is the difference between MRP and inventory management software?',
    answer:
      'Inventory management software tracks what you have in stock and where it is. MRP software goes further: it connects inventory to your bills of materials and production schedules to calculate what you need to buy and make — and when. MRP answers forward-looking questions like "do I have enough materials to fulfill next week\'s orders?" while basic inventory software only tells you what\'s on the shelf right now.',
  },
]

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Brahmin Solutions',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Manufacturing Resource Planning (MRP)',
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
    'Inventory management',
    'Production tracking',
    'Bill of materials (BOM)',
    'Lot and batch traceability',
    'B2B wholesale portal',
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
    name: 'Material requirements planning',
    sameAs: 'https://en.wikipedia.org/wiki/Material_requirements_planning',
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
      name: 'MRP Software',
      item: 'https://www.brahmin-solutions.com/mrp-software',
    },
  ],
}

export default function MRPSoftwarePage() {
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
              <span className="text-slate-700 font-medium">MRP Software</span>
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
              MRP software for growing{' '}
            </span>
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              manufacturers
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            You&apos;ve outgrown spreadsheets but you don&apos;t need a six-figure ERP system.
            Plan production, manage materials, and finally know your true costs.
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
                'MRP software replaces spreadsheet guesswork with real-time material planning, production scheduling, and inventory tracking',
                'The most important features for growing manufacturers: BOM management, production scheduling, inventory tracking, and accurate costing',
                'Prioritize ease of use and fast implementation over feature count — the best system is the one your team actually uses',
                'Modern cloud MRP goes live in 3–6 weeks starting from $199/month, vs. 6–18 months and six figures for enterprise systems',
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

      {/* ── Section 3: What is MRP software? ── */}
      <section className="py-section">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            What is MRP software?
          </h2>

          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            MRP (Material Requirements Planning) software helps manufacturers figure out
            what materials they need, how much to order, and when to order — all based
            on production schedules and customer demand.
          </p>

          {/* Visual: 3 questions MRP answers */}
          <div className="grid sm:grid-cols-3 gap-4 my-10">
            {[
              { gradient: 'from-blue-500 to-cyan-500', icon: '📦', text: 'What materials do I need?' },
              { gradient: 'from-violet-500 to-purple-500', icon: '📊', text: 'Do I have enough in stock?' },
              { gradient: 'from-amber-500 to-orange-500', icon: '🛒', text: 'When do I need to reorder?' },
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
            Instead of manually calculating requirements in spreadsheets, MRP software
            does it automatically using your bills of materials and current inventory levels.
            When these three questions are answered accurately and in real time, stockouts
            drop, excess inventory shrinks, and your team stops spending hours on manual
            calculations.
          </p>

          <p className="text-slate-600 mb-4 leading-relaxed">
            Here&apos;s how it works in practice: you define your products using bills of
            materials — the list of raw materials, components, and quantities needed to
            make each finished good. When a sales order comes in or you schedule a
            production run, the MRP engine checks your current inventory, factors in
            what&apos;s already on order from suppliers, and calculates exactly what you need
            to buy and when. It accounts for lead times, minimum order quantities, and
            safety stock levels so you&apos;re never caught off guard.
          </p>

          <p className="text-slate-600 mb-4 leading-relaxed">
            The concept originated in the 1960s when manufacturers first used computers
            to calculate material requirements. By the 1980s, MRP II expanded to include
            production scheduling and capacity planning. Today, modern cloud-based MRP
            integrates with e-commerce, accounting, and shipping systems — giving growing
            manufacturers capabilities that used to require enterprise-scale budgets.
          </p>

          <p className="text-slate-600 mb-4 leading-relaxed">
            For small and mid-sized manufacturers, the shift from spreadsheets to MRP
            software is transformative. Instead of one person holding all the knowledge
            in their head — which raw materials are running low, which orders are behind
            schedule, what each product actually costs to make — that information lives
            in a shared system that the whole team can access. Production managers see
            what&apos;s scheduled. Purchasing knows what to reorder. The owner can check
            margins without asking five people for five spreadsheets.
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
                fewer stockouts, less excess inventory, better scheduling, accurate
                costing, and <strong>10–20 fewer hours per week</strong> on data entry.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">
            MRP vs. ERP: what&apos;s the difference?
          </h3>

          <p className="text-slate-600 mb-4 leading-relaxed">
            <strong className="text-slate-900">MRP</strong> focuses on production planning
            and inventory management — the core challenges on the shop floor.{' '}
            <strong className="text-slate-900">ERP</strong> (Enterprise Resource Planning)
            is broader: it includes MRP plus accounting, HR, CRM, and more.
          </p>

          <p className="text-slate-600 mb-4 leading-relaxed">
            For most growing manufacturers, a focused MRP system is the better choice.
            Full ERP systems are designed for large enterprises with dedicated IT teams
            and six-figure budgets. They bundle dozens of modules — HR, payroll, CRM,
            project management — that most small manufacturers will never configure, let
            alone use. You end up paying for complexity that slows down your team instead
            of helping them.
          </p>

          <p className="text-slate-600 leading-relaxed">
            Modern MRP takes the opposite approach: it gives you the production planning,
            inventory management, and purchasing features you actually need, with native
            integrations to the tools you already use — QuickBooks for accounting, Shopify
            for e-commerce, ShipStation for fulfillment. You keep what works and replace
            only what&apos;s broken, without forcing a rip-and-replace of your entire tech stack.
          </p>
        </div>
      </section>

      {/* ── Section 4: Signs you've outgrown spreadsheets ── */}
      <section className="py-section bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            6 signs you&apos;ve outgrown spreadsheets
          </h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Spreadsheets are a great starting point — they&apos;re flexible, familiar, and free.
            But there&apos;s a point where they cost you more than they save.
          </p>

          <div className="space-y-3">
            {spreadsheetSigns.map((sign, index) => (
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
            Sound familiar? If three or more apply, MRP software would likely pay for
            itself within a few months.{' '}
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
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 py-14">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Ready to ditch the spreadsheets?
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

      {/* ── Section 5: Key features — colored gradient icons ── */}
      <section className="py-section">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-3">
            Key features to look for
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            Not all MRP systems are equal. These are the features that matter most
            for growing manufacturers.
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
              <p className="text-slate-900 font-semibold">Your MRP should connect to the tools you already use</p>
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

      {/* ── Section 6: MRP by industry — colored top borders ── */}
      <section className="py-section bg-slate-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-3">
            MRP software for your industry
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            Whether you need FDA lot tracking for food production or serial numbers
            for electronics, the right MRP software adapts to your workflow.
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

      {/* ── Section 7: Implementation comparison ── */}
      <section className="py-section">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-3">
            What implementation actually looks like
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            Implementation is where many manufacturers get burned. Enterprise vendors
            quote 6–18 months, charge five or six figures for consultants, and leave you
            with a system so complex your team avoids using it. Modern cloud MRP flips
            that model entirely.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Enterprise */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200">
              <div className="inline-block bg-slate-100 text-slate-500 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
                Enterprise MRP / ERP
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

            {/* Modern cloud MRP */}
            <div className="relative bg-white rounded-2xl overflow-hidden border-2 border-blue-200">
              <div className="h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500" />
              <div className="p-8">
                <div className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
                  Modern cloud MRP
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

      {/* ── Section 7b: Common MRP implementation mistakes ── */}
      <section className="py-section bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Common MRP implementation mistakes
          </h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Most failed MRP implementations aren&apos;t caused by bad software — they&apos;re
            caused by bad process. Here are the mistakes we see most often, and how to avoid them.
          </p>

          <div className="space-y-5">
            {[
              {
                mistake: 'Buying more system than you need',
                detail:
                  'It\'s tempting to pick the MRP with the longest feature list. But every unused module adds complexity, slows adoption, and increases cost. Start with the features your team will use in the first 90 days — BOM management, inventory tracking, purchasing — and expand from there. The right system grows with you instead of overwhelming you on day one.',
              },
              {
                mistake: 'Skipping data cleanup before migration',
                detail:
                  'Migrating messy spreadsheet data into a new system just gives you organized mess. Before going live, audit your item master: remove discontinued SKUs, verify unit conversions, reconcile on-hand quantities, and standardize naming conventions. Two days of cleanup saves two months of headaches.',
              },
              {
                mistake: 'Not involving your floor team in the decision',
                detail:
                  'Owners and operations managers often select software without input from the people who\'ll use it daily — warehouse staff, production leads, purchasing coordinators. If the system feels unintuitive to them, adoption stalls. Include your floor team in demos and pilot testing. Their buy-in determines whether the software actually gets used.',
              },
              {
                mistake: 'Underestimating the importance of support',
                detail:
                  'During evaluation, every vendor promises great support. After the contract is signed, some disappear behind ticket queues and chatbots. Ask for references from current customers in your industry. Ask how quickly a real person responds. The first six months after go-live are when you need support most — and when bad support costs you the most.',
              },
            ].map((item) => (
              <div
                key={item.mistake}
                className="bg-white rounded-2xl p-5 border border-slate-200 hover:shadow-sm transition-shadow"
              >
                <h3 className="font-bold text-slate-900 mb-2 flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-red-50 rounded-lg flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                  </span>
                  {item.mistake}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed ml-10">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 8: How to evaluate MRP software ── */}
      <section className="py-section">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            How to evaluate MRP software
          </h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Choosing the wrong MRP system is expensive — not just in dollars, but in the
            months your team spends fighting software instead of running production.
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

      {/* ── Section 9: Testimonials — colored gradient accents ── */}
      <section className="py-section">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-3">
            What manufacturers say after switching
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            Real results from manufacturers who moved from spreadsheets and
            outdated systems to Brahmin.
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

      {/* ── Section 10: FAQ ── */}
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

      {/* ── Section 11: Final CTA — dark gradient ── */}
      <section className="relative overflow-hidden bg-slate-900 py-24">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-violet-500/15 rounded-full blur-3xl" />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Ready to see what MRP software can do for you?
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
