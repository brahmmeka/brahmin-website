import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Manufacturing ERP for Small Business | Brahmin Solutions',
  description:
    'Manufacturing ERP software sized for growing businesses. Production, inventory, purchasing, and traceability — connected in one system. Starting from $199/month. Go live in 3–6 weeks.',
  keywords: [
    'manufacturing erp small business',
    'manufacturing erp software',
    'erp for small manufacturers',
    'small business manufacturing software',
    'erp for manufacturing companies',
    'cloud manufacturing erp',
    'erp software for small business',
    'manufacturing erp system',
    'affordable manufacturing erp',
    'erp for growing manufacturers',
  ],
  alternates: {
    canonical: 'https://brahminsolutions.com/manufacturing-erp',
  },
  openGraph: {
    title: 'Manufacturing ERP for growing businesses',
    description:
      'All the capabilities of an ERP — production, inventory, purchasing — without 18 months of implementation or a six-figure budget.',
    url: 'https://brahminsolutions.com/manufacturing-erp',
    type: 'website',
    siteName: 'Brahmin Solutions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manufacturing ERP for Small Business | Brahmin Solutions',
    description:
      'Production, inventory, purchasing, and traceability — all connected. Starting from $199/month. Go live in 3–6 weeks.',
  },
}

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.44-3.63A2.25 2.25 0 014.5 9.68V5.25A2.25 2.25 0 016.75 3h10.5a2.25 2.25 0 012.25 2.25v4.43a2.25 2.25 0 01-1.48 1.86l-5.44 3.63a2.25 2.25 0 01-2.16 0z" />
      </svg>
    ),
    title: 'Production management',
    href: '/features/production',
    color: 'from-blue-500 to-indigo-600',
    description:
      'Build multi-level BOMs, schedule work orders, and track real-time production costs — materials, labor, overhead, and yield loss. Know exactly what every product costs to make, not what you estimated six months ago.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    title: 'Inventory control',
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
    title: 'Purchasing & procurement',
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
    title: 'Traceability & compliance',
    href: '/features/traceability',
    color: 'from-rose-500 to-pink-600',
    description:
      'Track every lot from receiving through production to the customer. Generate recall reports in minutes instead of days. Full forward and backward traceability for FDA, FSMA, and cGMP compliance.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
      </svg>
    ),
    title: 'Warehouse management',
    href: '/features/warehouse',
    color: 'from-violet-500 to-purple-600',
    description:
      'Manage multiple warehouses, bin locations, and transfers from a single system. Barcode scanning for receiving, picking, packing, and cycle counts — all accessible from any phone or tablet.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
    title: 'Native integrations',
    href: '/integrations',
    color: 'from-emerald-500 to-teal-600',
    description:
      'Sync data from Brahmin to QuickBooks, Xero, Shopify, WooCommerce, ShipStation, and more. No more copying data between systems. Native integrations push purchase orders, sales orders, invoices, and inventory values into your accounting and sales platforms automatically.',
  },
]

const signs = [
  {
    title: 'Your systems don\'t talk to each other',
    description:
      'You\'re entering the same data into your accounting software, your spreadsheet, and your e-commerce platform. A sale on Shopify means someone needs to manually update inventory, create a pick list, and eventually key the invoice into QuickBooks. Every handoff is a chance for errors, and every error takes time to find and fix.',
  },
  {
    title: 'You can\'t answer basic questions without digging',
    description:
      'How many units of your top product can you ship this week? What\'s your true margin on that wholesale order? When will the materials for next week\'s production run arrive? If answering any of these requires checking multiple systems or asking multiple people, your operations have outgrown your tools.',
  },
  {
    title: 'Month-end close takes days instead of hours',
    description:
      'Reconciling inventory, matching purchase orders to invoices, calculating cost of goods sold — if your month-end process feels like an archaeology dig, it\'s because your data lives in too many places. A connected system closes the gap between what happened on the floor and what shows up in your books.',
  },
  {
    title: 'Growth is creating chaos instead of profit',
    description:
      'More orders should mean more revenue and more margin. But if every new customer, new SKU, or new sales channel adds complexity faster than it adds profit, the problem isn\'t growth — it\'s infrastructure. The manual processes that worked at $500K in revenue start breaking at $2M.',
  },
  {
    title: 'You\'re making decisions on outdated data',
    description:
      'By the time your spreadsheet is updated, the information is already stale. You ordered materials based on last week\'s inventory count, scheduled production based on yesterday\'s sales numbers, and quoted a lead time based on a capacity estimate from memory. Real-time data doesn\'t just save time — it changes the quality of every decision.',
  },
  {
    title: 'Compliance and traceability feel like a fire drill',
    description:
      'When an auditor asks for a recall report, a lot trace, or a supplier certificate, how long does it take? If the answer involves digging through filing cabinets, searching email threads, or calling your co-manufacturer, you\'re one bad audit away from losing a customer — or worse, a failed inspection.',
  },
]

const industries = [
  {
    href: '/industries/food-beverage',
    title: 'Food & Beverage',
    tag: 'Lot tracking & recalls',
    color: 'from-orange-400 to-red-500',
    description: 'Expiration dates, recipe management, allergen tracking, and recall readiness for FDA and FSMA compliance.',
  },
  {
    href: '/industries/cosmetics',
    title: 'Cosmetics & Beauty',
    tag: 'FDA compliance',
    color: 'from-pink-400 to-rose-500',
    description: 'Formula management, batch tracking, ingredient traceability, and compliance documentation.',
  },
  {
    href: '/industries/supplements',
    title: 'Supplements & Nutraceuticals',
    tag: 'cGMP ready',
    color: 'from-green-400 to-emerald-500',
    description: 'Lot traceability, certificate of analysis management, potency tracking, and quality control workflows.',
  },
  {
    href: '/industries/medical-devices',
    title: 'Medical devices',
    tag: 'Device traceability',
    color: 'from-blue-400 to-indigo-500',
    description: 'Serial and lot tracking, device history records, and documentation for FDA 21 CFR Part 820.',
  },
  {
    href: '/industries/manufacturing',
    title: 'General manufacturing',
    tag: 'Full production management',
    color: 'from-violet-400 to-purple-500',
    description: 'Production scheduling, multi-level BOMs, inventory control, and shop floor management.',
  },
]

const buyerQuestions = [
  {
    question: 'What does the system actually replace?',
    guidance:
      'Be specific about which tools you\'re consolidating. A manufacturing ERP should replace your inventory spreadsheets, production tracking documents, and manual purchasing workflows. It should integrate with — not replace — your accounting software (QuickBooks, Xero) and your sales channels (Shopify, Amazon). If a vendor wants to replace everything including your accounting system, you\'re probably looking at more system than you need.',
  },
  {
    question: 'How long will implementation take, and who manages it?',
    guidance:
      'If the answer is measured in quarters, ask why. Modern cloud systems go live in 3–6 weeks with a dedicated implementation manager guiding you through data migration, workflow setup, and team training. Long implementations usually mean the system is more complex than you need — or the vendor is understaffed on support.',
  },
  {
    question: 'What\'s the true total cost — including hidden fees?',
    guidance:
      'Watch for per-user fees that punish you for growing, implementation fees that double the first-year cost, and mandatory consultant charges for basic configuration. A transparent vendor gives you one monthly price that covers your whole team — no surprises when you add a warehouse worker or a new admin.',
  },
  {
    question: 'How does your system connect to my accounting software?',
    guidance:
      'Native integration with QuickBooks or Xero is table stakes. The sync should push purchase orders, sales orders, invoices, and inventory values into your accounting software automatically. If syncing requires Zapier or a third-party connector, that\'s a yellow flag for reliability and data accuracy.',
  },
  {
    question: 'What support is included — and what costs extra?',
    guidance:
      'Ask specifically: if I have a problem at 2 PM on a Tuesday, how quickly will a real person help me? Not a chatbot, not a ticket queue, not a help center article. The best vendors include unlimited support and training in every plan — not as an upsell tier you have to negotiate for.',
  },
  {
    question: 'Is this built for companies my size — or am I paying for enterprise features I\'ll never use?',
    guidance:
      'Enterprise software forced onto small manufacturers rarely works. You end up paying for modules you\'ll never configure — advanced HR, multi-currency treasury management, custom workflow engines — and fighting an interface designed for 500-person companies with dedicated IT departments. Look for a system purpose-built for manufacturers in the $500K–$50M revenue range.',
  },
]

const steps = [
  {
    title: 'Map your current workflow',
    description:
      'Document what\'s working and what\'s broken across production, inventory, purchasing, and fulfillment. Identify where data gets re-entered, where mistakes happen, and where you lose visibility. This clarity helps you choose the right system — and avoid paying for features you\'ll never use.',
  },
  {
    title: 'Clean and organize your data',
    description:
      'Audit your item master, verify BOMs, reconcile inventory counts, and standardize naming conventions. Two days of data cleanup before migration saves two months of headaches after go-live.',
  },
  {
    title: 'Configure and connect',
    description:
      'Set up products, BOMs, warehouses, vendors, and integrations with your accounting and sales platforms. A dedicated implementation manager walks you through every step — no consultants required.',
  },
  {
    title: 'Train your team on daily workflows',
    description:
      'Focus on the tasks each role performs daily — receiving, production, picking, purchasing — not every feature in the system. Most users only need 20% of the software to do 80% of their work.',
  },
  {
    title: 'Go live and iterate',
    description:
      'Start processing real orders. Edge cases will surface — that\'s expected. A good vendor helps you work through them quickly, with support response times measured in minutes, not days.',
  },
]

// TODO: Replace testimonials with manufacturing ERP-specific customer quotes when available
const testimonials = [
  {
    quote:
      'Full visibility from purchase order to manufacturing to sales — plus accurate cost of goods. And the support is exceptional.',
    name: 'Sheldon Ratuski',
    company: 'FLFF',
    highlight: 'End-to-end visibility',
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

const faqs = [
  {
    question: 'What is manufacturing ERP?',
    answer:
      'Manufacturing ERP (Enterprise Resource Planning) is software that connects production, inventory, purchasing, and order management into a single system. Instead of managing each function in separate tools or spreadsheets, manufacturing ERP gives you one source of truth for your entire operation — from raw materials in the warehouse to finished goods shipped to customers.',
  },
  {
    question: 'Do I need ERP or MRP software?',
    answer:
      'Most growing manufacturers need MRP capabilities — production planning, inventory management, and purchasing — rather than a full ERP with HR, CRM, payroll, and finance modules bundled in. If your main challenge is coordinating production with inventory and purchasing, a focused MRP system with native integrations to your existing accounting software is typically the better fit. You get the connected workflow without the enterprise complexity.',
  },
  {
    question: 'How much does manufacturing ERP cost for a small business?',
    answer:
      'Enterprise ERP systems can cost $50,000–$500,000+ for implementation plus ongoing per-user fees. Modern cloud-based systems built for small and mid-sized manufacturers range from $199–$1,000+/month depending on features and order volume. Brahmin Solutions starts at $199/month with flat pricing — no per-user fees, no implementation charges, unlimited users included.',
  },
  {
    question: 'How long does ERP implementation take?',
    answer:
      'Traditional enterprise ERP implementations take 6–18 months and often require dedicated consultants. Cloud-based manufacturing systems designed for SMBs go live in 3–6 weeks. The key factors are data quality, system complexity, and the level of vendor support you receive. Every Brahmin customer gets a dedicated implementation manager.',
  },
  {
    question: 'Can manufacturing ERP integrate with QuickBooks?',
    answer:
      'Yes. Modern manufacturing ERP systems integrate natively with QuickBooks Online and QuickBooks Desktop. The integration pushes purchase orders, sales orders, invoices, and inventory values from the manufacturing system into QuickBooks automatically — eliminating manual double-entry. Brahmin Solutions includes native QuickBooks integration in every plan.',
  },
  {
    question: 'What\'s the difference between ERP and MRP?',
    answer:
      'MRP (Material Requirements Planning) focuses on production planning, inventory management, and purchasing — the core operational challenges for manufacturers. ERP is broader: it includes MRP functionality plus modules for accounting, HR, CRM, project management, and more. For most manufacturers under $50M in revenue, a focused MRP system with integrations to existing tools is more practical and more affordable than a full ERP suite.',
  },
  {
    question: 'Is cloud-based ERP better than on-premise for small manufacturers?',
    answer:
      'For most small and mid-sized manufacturers, cloud-based is the clear choice. No IT infrastructure to maintain, automatic updates, access from anywhere, lower upfront costs, and faster implementation. On-premise solutions may make sense for very large enterprises with dedicated IT teams and specific security or customization requirements — but that\'s rarely the case for manufacturers under $50M.',
  },
  {
    question: 'What should I look for in a manufacturing ERP for my size company?',
    answer:
      'Focus on four things: (1) Core capabilities — production management, inventory tracking, purchasing, and traceability. (2) Native integrations with your existing accounting and sales tools. (3) Fast implementation — weeks, not months. (4) Responsive human support included in every plan. Avoid systems that require dedicated IT staff, expensive consultants, or months of configuration before you see value.',
  },
  {
    question: 'How is Brahmin Solutions different from NetSuite or SAP Business One?',
    answer:
      'NetSuite and SAP Business One are enterprise ERP systems designed for larger companies with dedicated IT teams and budgets to match. They include modules for HR, CRM, financial consolidation, and advanced analytics that most small manufacturers never configure. Brahmin Solutions is purpose-built for manufacturers doing $500K–$50M in revenue. It focuses on what matters most — production, inventory, purchasing, and traceability — with fast implementation, flat pricing, and support that responds in under 15 minutes.',
  },
  {
    question: 'What industries use manufacturing ERP software?',
    answer:
      'Manufacturing ERP is used across industries including food and beverage, cosmetics, supplements, medical devices, consumer products, and general manufacturing. Any business that transforms raw materials into finished products — and needs to coordinate production, inventory, and purchasing — benefits from a connected manufacturing system.',
  },
]

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Brahmin Solutions',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Manufacturing ERP Software',
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
    'Production management',
    'Inventory control',
    'Bill of materials (BOM)',
    'Lot and batch traceability',
    'Purchasing and procurement',
    'Warehouse management',
    'QuickBooks and Xero integration',
    'Shopify integration',
    'Mobile warehouse app',
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
    name: 'Enterprise resource planning for manufacturing',
    sameAs: 'https://en.wikipedia.org/wiki/Enterprise_resource_planning',
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
      name: 'Manufacturing ERP',
      item: 'https://brahminsolutions.com/manufacturing-erp',
    },
  ],
}

export default function ManufacturingERPPage() {
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
              <span className="text-slate-700 font-medium">Manufacturing ERP</span>
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
            <span className="text-sm text-slate-300">Trusted by 300+ manufacturers since 2019</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Manufacturing ERP for growing{' '}
            </span>
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              businesses
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            You need the capabilities of an ERP — production, inventory, purchasing, all connected.
            But you don&apos;t need 18 months of implementation or a six-figure budget. Get the
            integration you need, sized for manufacturers doing $500K–$50M.
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
            Starting from $199/month. No per-user fees. Go live in 3–6 weeks.
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
                'Most growing manufacturers need MRP capabilities (production, inventory, purchasing) — not a full ERP with HR, CRM, and finance modules',
                'The right manufacturing ERP connects your operations into one system while integrating with tools you already use like QuickBooks and Shopify',
                'Cloud-based manufacturing ERP goes live in 3–6 weeks starting from $199/month — vs. 6–18 months and six figures for enterprise systems',
                'Prioritize ease of use, fast implementation, and responsive support over feature count — the best system is the one your team actually uses',
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

      {/* ── Section 3: What is manufacturing ERP? ── */}
      <section className="py-section">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            What is manufacturing ERP?
          </h2>

          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            Manufacturing ERP is software that connects the core functions of a manufacturing
            business — production, inventory, purchasing, and order management — into a single
            system. Instead of running each department on its own spreadsheet or standalone tool,
            everything shares the same data, updates in real time, and flows together without
            manual handoffs.
          </p>

          {/* Visual: 3 core problems ERP solves */}
          <div className="grid sm:grid-cols-3 gap-4 my-10">
            {[
              { gradient: 'from-blue-500 to-cyan-500', icon: '🔗', text: 'Are my systems connected?' },
              { gradient: 'from-violet-500 to-purple-500', icon: '📊', text: 'Can I see everything in one place?' },
              { gradient: 'from-amber-500 to-orange-500', icon: '⚡', text: 'Does data flow automatically?' },
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
            The term &ldquo;ERP&rdquo; — Enterprise Resource Planning — originated in the early 1990s
            as manufacturing software expanded beyond material requirements planning (MRP) to encompass
            accounting, human resources, and customer relationship management. The promise was
            appealing: one system to run your entire business. The reality, for most small
            manufacturers, has been less rosy. Enterprise ERP systems like SAP, Oracle, and NetSuite
            were designed for companies with hundreds of employees, dedicated IT departments, and
            budgets measured in hundreds of thousands of dollars.
          </p>

          <p className="text-slate-600 mb-4 leading-relaxed">
            Here is what matters for a growing manufacturer: when a sales order comes in, your
            inventory should update automatically. When inventory hits a reorder point, a purchase
            order should be ready to send. When a production run completes, costs should calculate
            in real time — materials, labor, overhead — and flow into your accounting software
            without someone re-entering numbers. That connected workflow is the core value of
            manufacturing ERP. Everything else is optional.
          </p>

          <p className="text-slate-600 mb-4 leading-relaxed">
            The good news is that cloud technology has made this level of integration accessible
            to manufacturers who would never consider a traditional ERP implementation. Modern
            manufacturing systems give you the connected workflow — production tied to inventory
            tied to purchasing tied to sales — without forcing you to adopt modules for HR, CRM,
            financial consolidation, and other functions you already handle with existing tools.
            You keep QuickBooks for accounting, Shopify for e-commerce, and your manufacturing
            system handles the operations layer in between.
          </p>

          <p className="text-slate-600 mb-4 leading-relaxed">
            For small and mid-sized manufacturers — businesses doing $500K to $50M in
            revenue — the question isn&apos;t whether you need connected operations. You do.
            The question is whether you need enterprise ERP or a focused manufacturing system
            that delivers the same integration at a fraction of the cost and complexity.
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
                Most manufacturers who think they need ERP actually need connected MRP — production,
                inventory, and purchasing in one system, with native integrations to accounting and
                sales tools. That gives you <strong>90% of the value at 10% of the cost</strong>.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">
            ERP vs. MRP: what growing manufacturers actually need
          </h3>

          <p className="text-slate-600 mb-4 leading-relaxed">
            <strong className="text-slate-900">MRP</strong> focuses on the operational core —
            production planning, inventory management, and purchasing. It answers the daily
            questions your team faces: what do we need to make, what materials do we have, and
            what do we need to order?{' '}
            <Link href="/mrp-software" className="text-primary-600 hover:text-primary-700 font-medium">
              Learn more about MRP software
            </Link>.
          </p>

          <p className="text-slate-600 mb-4 leading-relaxed">
            <strong className="text-slate-900">ERP</strong> wraps MRP with additional modules —
            accounting, HR, CRM, project management, business intelligence — creating an
            all-in-one suite. For a 500-person company with a $200K software budget and a
            dedicated IT team, that makes sense. For a 15-person manufacturer already using
            QuickBooks and Shopify, it means paying for and configuring dozens of modules
            you will never open.
          </p>

          <p className="text-slate-600 leading-relaxed">
            The modern approach for growing manufacturers: use a focused manufacturing system
            for what you do on the floor — production, inventory, purchasing, traceability —
            and connect it natively to the specialized tools you already trust for accounting
            and sales. You get the integration benefit of ERP without the implementation timeline,
            the complexity, or the price tag.
          </p>
        </div>
      </section>

      {/* ── Section 4: When you actually need ERP vs MRP ── */}
      <section className="py-section bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            When you actually need ERP vs. MRP
          </h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            The honest answer: most small and mid-sized manufacturers don&apos;t need full ERP.
            Here is how to tell where you fall.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* You need full ERP if... */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200">
              <div className="inline-block bg-slate-100 text-slate-500 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
                You may need full ERP if...
              </div>
              <ul className="space-y-4">
                {[
                  'You have 200+ employees across multiple business units',
                  'You need consolidated financial reporting across subsidiaries',
                  'You have a dedicated IT team to manage and customize the system',
                  'Your budget supports $100K+ in implementation costs',
                  'You\'ve outgrown mid-market tools and need advanced analytics',
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-slate-600 text-sm">
                    <span className="flex-shrink-0 w-5 h-5 bg-slate-100 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-slate-500 text-xs mt-6 leading-relaxed">
                If this describes your business, look at{' '}
                <Link href="/compare/netsuite" className="text-primary-600 hover:text-primary-700 font-medium">NetSuite</Link>
                {' '}or{' '}
                <Link href="/compare/sap-business-one" className="text-primary-600 hover:text-primary-700 font-medium">SAP Business One</Link>.
              </p>
            </div>

            {/* You need MRP with integrations */}
            <div className="relative bg-white rounded-2xl overflow-hidden border-2 border-blue-200">
              <div className="h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500" />
              <div className="p-8">
                <div className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
                  You need connected MRP if...
                </div>
                <ul className="space-y-4">
                  {[
                    'You have 5–100 employees and are actively growing',
                    'Your main pain is disconnected production, inventory, and purchasing',
                    'You already use QuickBooks/Xero for accounting and want to keep it',
                    'You want to go live in weeks, not months or quarters',
                    'You need traceability, costing, and real-time inventory visibility',
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-slate-600 text-sm">
                      <span className="flex-shrink-0 w-5 h-5 bg-emerald-50 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-slate-500 text-xs mt-6 leading-relaxed">
                  This is where Brahmin Solutions fits — purpose-built for manufacturers doing $500K–$50M in revenue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: 6 signs you need manufacturing ERP ── */}
      <section className="py-section">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            6 signs you need a manufacturing ERP
          </h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Spreadsheets and standalone tools work until they don&apos;t. These are the signals
            that your operations have outgrown your current setup.
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
            Sound familiar? If three or more apply, a connected manufacturing system would likely
            pay for itself within a few months.{' '}
            <Link href="/compare/spreadsheets" className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-1 group">
              See Brahmin vs. spreadsheets
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
                See how it works with your products
              </h2>
              <p className="text-blue-100">
                Book a 30-minute demo and we&apos;ll walk through your actual workflows.
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
            What a manufacturing ERP should include
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            These are the capabilities that matter most for growing manufacturers — the
            operational core that connects your floor to your front office.
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
              <p className="text-slate-900 font-semibold">Your manufacturing system should connect to the tools you already use</p>
              <p className="text-slate-500 text-sm">
                QuickBooks, Xero, Shopify, WooCommerce, ShipStation, and more — natively integrated, not bolted on.
              </p>
            </div>
            <Link href="/integrations" className="group text-primary-600 font-medium text-sm flex-shrink-0 inline-flex items-center gap-1">
              See all integrations
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 7: Industry section — colored top borders ── */}
      <section className="py-section bg-slate-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-3">
            Manufacturing ERP for your industry
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            Whether you need FDA lot tracking for food production or device traceability for
            medical devices, the right system adapts to your compliance requirements and workflows.
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

      {/* ── Section 8: Implementation comparison ── */}
      <section className="py-section">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-3">
            Enterprise ERP vs. modern cloud manufacturing software
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            Implementation is where many manufacturers get burned. Enterprise vendors quote
            6–18 months, charge five or six figures for consultants, and leave you with a system
            so complex your team avoids using it. There is a better path.
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
                  { bold: 'Designed for', rest: '$100M+ companies with IT departments' },
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
                  Modern cloud manufacturing software
                </div>
                <ul className="space-y-4">
                  {[
                    { bold: 'Go live in 3–6 weeks', rest: 'with dedicated support' },
                    { bold: 'Starting from $199/month', rest: '— no surprise fees' },
                    { bold: 'Self-service setup', rest: 'with implementation manager' },
                    { bold: 'Flat pricing', rest: '— unlimited users included' },
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

      {/* ── Section 9: Evaluation questions ── */}
      <section className="py-section bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            6 questions to ask every vendor
          </h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Choosing the wrong manufacturing system is expensive — not just in dollars, but in
            the months your team spends fighting software instead of running production.
            Ask every vendor on your shortlist these questions.
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

      {/* ── Section 10: Testimonials — colored gradient accents ── */}
      {/* TODO: Replace testimonials with manufacturing ERP-specific customer quotes when available */}
      <section className="py-section">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-3">
            What manufacturers say after switching
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            Real results from manufacturers who moved from spreadsheets, disconnected tools,
            and enterprise systems to Brahmin.
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

      {/* ── Section 11: FAQ ── */}
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

      {/* ── Section 12: Final CTA — dark gradient ── */}
      <section className="relative overflow-hidden bg-slate-900 py-24">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-violet-500/15 rounded-full blur-3xl" />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Ready to connect your manufacturing operations?
            </span>
          </h2>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed">
            Join 300+ growing manufacturers who simplified their operations with Brahmin.
            Starting from $199/month, no per-user fees, go live in 3–6 weeks.
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
