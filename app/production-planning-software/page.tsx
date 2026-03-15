import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Production Planning Software for Small Manufacturers | Brahmin Solutions',
  description:
    'Production planning software that gives growing manufacturers real-time visibility into work orders, scheduling, and capacity. Starting from $199/month. Go live in 3-6 weeks.',
  keywords: [
    'production planning software',
    'production scheduling software',
    'manufacturing planning software',
    'production planning for small business',
    'production planning system',
    'shop floor scheduling',
    'work order management software',
    'capacity planning software',
    'manufacturing scheduling software',
    'cloud production planning',
  ],
  alternates: {
    canonical: 'https://www.brahmin-solutions.com/production-planning-software',
  },
  openGraph: {
    title: 'Production Planning Software for Growing Manufacturers',
    description:
      'See what\'s running, what\'s next, and where bottlenecks are forming — before they delay your orders. Starting from $199/month.',
    url: 'https://www.brahmin-solutions.com/production-planning-software',
    type: 'website',
    siteName: 'Brahmin Solutions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Production Planning Software for Small Manufacturers | Brahmin Solutions',
    description:
      'Production planning software with real-time work orders, scheduling, and capacity visibility. Starting from $199/month. Go live in 3–6 weeks.',
  },
}

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
    title: 'Work order management',
    href: '/features/production',
    color: 'from-blue-500 to-indigo-600',
    description:
      'Create, assign, and track work orders from start to finish. See which jobs are in progress, which are waiting on materials, and which are complete — without walking the floor or calling your production lead. Every work order ties back to the sales order it fulfills and the materials it consumes.',
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
      'Schedule production runs, set priorities, and sequence jobs so your team always knows what to work on next. When a rush order comes in or a machine goes down, reschedule in clicks — not hours of re-coordinating across the floor.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: 'Capacity planning',
    href: '/features/production',
    color: 'from-emerald-500 to-teal-600',
    description:
      'See how much production capacity you have available before committing to deadlines. Identify bottleneck workstations, overloaded time slots, and underutilized resources — so you can quote realistic lead times and avoid overcommitting.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.657-5.657a8.015 8.015 0 01-.134-11.315 8.015 8.015 0 0111.317.134M15.75 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: 'Shop floor tracking',
    href: '/features/production',
    color: 'from-cyan-500 to-blue-600',
    description:
      'Give your production team a simple interface to log progress, report completions, and flag issues as they happen. No more end-of-day batch updates or walking the floor to check status. Your dashboard reflects reality in real time.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: 'Resource allocation',
    href: '/features/production',
    color: 'from-amber-500 to-orange-600',
    description:
      'Assign the right people, equipment, and materials to the right jobs. See who is available, what machines are scheduled, and where you have slack — so production stays balanced and no single resource becomes your hidden bottleneck.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
      </svg>
    ),
    title: 'Real-time dashboards',
    href: '/features/production',
    color: 'from-rose-500 to-pink-600',
    description:
      'See production status, throughput, and on-time delivery rates at a glance. No more compiling reports manually at the end of the week. Dashboards update as work orders move through the floor — giving you the visibility to make decisions before problems escalate.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    title: 'Integration with inventory',
    href: '/features/inventory',
    color: 'from-indigo-500 to-violet-600',
    description:
      'Production planning without inventory visibility is planning blind. When work orders consume materials, inventory updates automatically. When raw materials run low, you see it before production stalls — not after. One system, one source of truth.',
  },
]

const signs = [
  {
    title: 'You don\'t know what\'s actually in production right now',
    description:
      'If someone asks "what are we running today?" and the answer requires walking the floor, checking a whiteboard, or texting your production lead — you don\'t have production visibility. You have production guesswork. Real production planning software gives you a live view of every active work order, its status, and its expected completion time without leaving your desk.',
  },
  {
    title: 'Bottlenecks surprise you — you find out when orders are already late',
    description:
      'By the time you discover a bottleneck, the damage is done: orders are delayed, customers are frustrated, and your team is scrambling to catch up. Production planning software shows you where work is piling up before it causes delays. You see which workstations are overloaded, which jobs are at risk, and where to reallocate resources — while there\'s still time to act.',
  },
  {
    title: 'You can\'t give customers accurate delivery dates',
    description:
      'When a customer asks "when will my order ship?" and you have to say "let me check and get back to you," you\'re eroding trust. Without visibility into your production schedule, capacity, and material availability, every delivery promise is a guess. The right software connects sales orders to production schedules so you can quote realistic dates with confidence.',
  },
  {
    title: 'Scheduling happens in spreadsheets or whiteboards',
    description:
      'Spreadsheets and whiteboards are static. They don\'t update when priorities change, materials arrive late, or a machine goes down. Your production lead spends hours reworking the schedule manually — and by the time everyone has the updated version, it\'s already out of date. Cloud-based scheduling updates in real time so the whole team sees the same plan.',
  },
  {
    title: 'Your team asks "what should I work on next?" multiple times a day',
    description:
      'If your operators rely on verbal instructions or printed job sheets to know their priorities, information gets lost, sequencing breaks down, and high-priority orders sit while lower-priority ones run. Production planning software gives every team member a clear queue — what to work on now, what\'s next, and in what order — updated automatically as priorities shift.',
  },
  {
    title: 'Rush orders throw your entire schedule into chaos',
    description:
      'Rush orders are inevitable. But they shouldn\'t require a full day of rescheduling, five phone calls, and a new whiteboard drawing. With production planning software, you insert the rush order, the system recalculates priorities and timelines, and your team sees the updated schedule immediately. The disruption is managed in minutes, not hours.',
  },
]

const industries = [
  {
    href: '/industries/food-beverage',
    title: 'Food & Beverage',
    tag: 'Batch scheduling & lot tracking',
    color: 'from-orange-400 to-red-500',
    description: 'Schedule production runs around shelf life, batch sizes, and allergen changeovers.',
  },
  {
    href: '/industries/cosmetics',
    title: 'Cosmetics & Beauty',
    tag: 'Formula-based production',
    color: 'from-pink-400 to-rose-500',
    description: 'Plan production around formulation batches, fill runs, and packaging sequences.',
  },
  {
    href: '/industries/supplements',
    title: 'Supplements',
    tag: 'cGMP scheduling',
    color: 'from-green-400 to-emerald-500',
    description: 'Schedule production with quarantine holds, QC checkpoints, and compliance requirements built in.',
  },
  {
    href: '/industries/medical-devices',
    title: 'Medical devices',
    tag: 'Regulated production',
    color: 'from-blue-400 to-indigo-500',
    description: 'Plan and track production with full traceability for FDA and ISO 13485 requirements.',
  },
  {
    href: '/industries/manufacturing',
    title: 'General manufacturing',
    tag: 'Full production planning',
    color: 'from-violet-400 to-purple-500',
    description: 'Work orders, scheduling, capacity planning, and shop floor tracking for any manufacturing operation.',
  },
]

const buyerQuestions = [
  {
    question: 'Can I see production status in real time?',
    guidance:
      'Ask for a live demo — not a screenshot. Watch how quickly production status updates when a work order moves from "in progress" to "complete." If the vendor shows a dashboard that refreshes manually or requires an end-of-day sync, that\'s not real-time visibility. Your floor team should be able to log progress directly, and your dashboard should reflect it immediately.',
  },
  {
    question: 'How easy is it to reschedule when priorities change?',
    guidance:
      'Ask the vendor to demonstrate a priority change: a rush order comes in, and the schedule needs to shift. How many clicks does it take? Does the system automatically recalculate downstream impacts? Or do you manually adjust every affected work order? The ability to react quickly to change is what separates useful production planning from a static Gantt chart.',
  },
  {
    question: 'Does it connect to my inventory system?',
    guidance:
      'Production planning without inventory data is planning blind. The system should check material availability before scheduling, automatically deduct consumed materials when production completes, and alert you when stock levels threaten upcoming runs. If inventory lives in a separate system with no real-time connection, you\'ll still be guessing.',
  },
  {
    question: 'Can my shop floor team actually use it?',
    guidance:
      'The best production planning software is useless if your operators won\'t use it. Ask to see the shop floor interface — the view your production team interacts with daily. It should be simple enough that someone can log a completion or flag an issue in under 30 seconds. If it requires training sessions and user manuals, adoption will stall.',
  },
  {
    question: 'What\'s the true total cost?',
    guidance:
      'Watch for per-user fees that penalize you for giving floor workers access, implementation charges that double your first-year cost, and add-on modules for basic features like scheduling or reporting. A transparent vendor gives you flat pricing that includes your whole team — no surprises when you add a shift supervisor or a new operator.',
  },
  {
    question: 'How long until we\'re live?',
    guidance:
      'If implementation takes 6 months, you\'ll spend 6 months running two systems in parallel — your old process and the new software. Modern cloud-based production planning goes live in 3–6 weeks with a dedicated implementation manager who handles data migration, workflow configuration, and team training. Ask for a specific timeline and what\'s included.',
  },
]

const steps = [
  {
    title: 'Map your production workflow',
    description:
      'Document how work flows through your shop floor today — from sales order to finished goods. Identify the handoffs, bottlenecks, and manual steps. This becomes your blueprint for configuration.',
  },
  {
    title: 'Clean up your product data',
    description:
      'Verify your BOMs, standardize naming conventions, and reconcile any discrepancies between your records and what\'s actually on the floor. Clean data in means clean schedules out.',
  },
  {
    title: 'Configure and import',
    description:
      'Set up work centers, production stages, and scheduling rules. Import your products, BOMs, and open orders. Your implementation manager handles the heavy lifting.',
  },
  {
    title: 'Train your team on daily workflows',
    description:
      'Focus training on the tasks each role performs daily: operators learn to log completions, supervisors learn scheduling, managers learn the dashboard. Skip the feature tour — teach the workflow.',
  },
  {
    title: 'Go live and refine',
    description:
      'Start scheduling real production. Edge cases will surface — a sequence that doesn\'t quite fit, a step that needs adjustment. Your implementation manager helps you work through them in real time.',
  },
]

const testimonials = [
  {
    quote:
      'Full visibility from purchase order to manufacturing to sales — plus accurate cost of goods. And the support is exceptional.',
    name: 'Sheldon Ratuski',
    company: 'FLFF',
    highlight: 'Full production visibility',
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
    question: 'What is production planning software?',
    answer:
      'Production planning software helps manufacturers organize, schedule, and track manufacturing operations. It answers four core questions: what needs to be made, when it needs to be made, in what sequence, and whether you have the capacity and materials to make it. Instead of managing these decisions in spreadsheets or on whiteboards, production planning software provides a centralized, real-time view of your entire production operation.',
  },
  {
    question: 'What\'s the difference between production planning and production scheduling?',
    answer:
      'Production planning is the broader discipline — it covers what to produce, how much, and what resources are needed. Production scheduling is the tactical execution: assigning specific jobs to specific machines and time slots. Think of planning as the "what and how much" and scheduling as the "when and where." Most modern production planning software handles both, giving you strategic capacity visibility and day-to-day scheduling in one system.',
  },
  {
    question: 'Do small manufacturers need production planning software?',
    answer:
      'If you\'re managing production with spreadsheets, whiteboards, or verbal instructions — and experiencing missed deadlines, surprise bottlenecks, or frequent "what should I work on next?" questions — production planning software will likely pay for itself within a few months. Most manufacturers see clear ROI once they have 10+ active work orders, multiple production stages, or more than a handful of products.',
  },
  {
    question: 'How does production planning software work with MRP?',
    answer:
      'Production planning and MRP (Material Requirements Planning) are complementary. MRP calculates what materials you need and when to order them based on your production schedule. Production planning software determines what to produce, in what sequence, and whether you have the capacity. Together, they ensure you have both the materials and the production slots to fulfill customer orders on time. Many systems — including Brahmin Solutions — combine both capabilities in a single platform.',
  },
  {
    question: 'What features should I look for?',
    answer:
      'Essential features include work order management, production scheduling, capacity visibility, real-time status tracking, and integration with your inventory system. For regulated industries, look for lot tracking and traceability. Beyond features, prioritize ease of use — if your shop floor team won\'t use it, the best feature list in the world won\'t help. Ask for a demo with your actual products and workflows.',
  },
  {
    question: 'How long does implementation take?',
    answer:
      'Enterprise APS systems can take 6–18 months to implement. Modern cloud-based production planning software designed for small and mid-sized manufacturers typically goes live in 3–6 weeks. The timeline depends on data quality, the complexity of your production process, and the level of vendor support. Brahmin Solutions includes a dedicated implementation manager with every plan.',
  },
  {
    question: 'Can production planning software integrate with QuickBooks?',
    answer:
      'Yes. Modern production planning software integrates with QuickBooks Online to sync purchase orders, sales orders, invoices, and inventory values. This eliminates double-entry between your production system and your accounting software. Brahmin Solutions offers native QuickBooks integration included in every plan — data flows from Brahmin into QuickBooks automatically.',
  },
  {
    question: 'What\'s the difference between APS and production planning?',
    answer:
      'APS (Advanced Planning and Scheduling) is a category of enterprise software that uses complex algorithms and optimization models to generate production schedules. It\'s typically designed for large manufacturers with hundreds of machines, multiple facilities, and highly constrained resources. For small and mid-sized manufacturers, cloud-based production planning software provides the scheduling, capacity, and tracking capabilities you actually need — without the six-figure price tag, 12-month implementation, or dedicated IT team that APS requires.',
  },
  {
    question: 'How much does production planning software cost?',
    answer:
      'Enterprise APS systems can cost $100,000–$500,000+ for implementation plus ongoing license fees. Cloud-based production planning software for small and mid-sized manufacturers typically ranges from $200–$1,000/month depending on features and scale. Brahmin Solutions starts at $199/month with flat pricing — no per-user fees, no per-transaction fees. Your whole team gets access on every plan.',
  },
  {
    question: 'What industries use production planning software?',
    answer:
      'Any manufacturer that transforms raw materials into finished products benefits from production planning software. Common industries include food and beverage, cosmetics, supplements, medical devices, electronics, and general manufacturing. The specific features you need — such as batch scheduling, lot tracking, or serial number management — vary by industry, but the core need for production visibility and scheduling is universal.',
  },
]

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Brahmin Solutions',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Production Planning Software',
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
    'Work order management',
    'Production scheduling',
    'Capacity planning',
    'Shop floor tracking',
    'Resource allocation',
    'Real-time dashboards',
    'Inventory integration',
    'QuickBooks and Xero integration',
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
    name: 'Production planning',
    sameAs: 'https://en.wikipedia.org/wiki/Production_planning',
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
      name: 'Production Planning Software',
      item: 'https://www.brahmin-solutions.com/production-planning-software',
    },
  ],
}

export default function ProductionPlanningSoftwarePage() {
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
              <span className="text-slate-700 font-medium">Production planning software</span>
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
              Production planning software for growing{' '}
            </span>
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              manufacturers
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            See what&apos;s running, what&apos;s next, and where bottlenecks are forming — before they delay your orders. Built for manufacturers doing $500K–$50M who need visibility without complexity.
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
                'Production planning software replaces whiteboards and spreadsheet schedules with real-time work order tracking, scheduling, and capacity visibility',
                'The most important capabilities for growing manufacturers: work order management, production scheduling, capacity planning, and shop floor tracking',
                'Look for a system that connects production to inventory — scheduling without material visibility leads to the same surprises',
                'Modern cloud production planning goes live in 3–6 weeks starting from $199/month, vs. 6–18 months and six figures for enterprise APS systems',
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

      {/* ── Section 3: What is production planning software? ── */}
      <section className="py-section">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            What is production planning software?
          </h2>

          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            Production planning software helps manufacturers organize, schedule, and track their manufacturing operations in one place. Instead of managing production with spreadsheets, whiteboards, and tribal knowledge, it gives you a centralized system that answers four core questions in real time.
          </p>

          {/* Visual: 4 questions production planning answers */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-10">
            {[
              { gradient: 'from-blue-500 to-cyan-500', icon: '📋', text: 'What do we need to make?' },
              { gradient: 'from-violet-500 to-purple-500', icon: '🕐', text: 'When does it need to run?' },
              { gradient: 'from-amber-500 to-orange-500', icon: '🔄', text: 'In what order?' },
              { gradient: 'from-emerald-500 to-teal-500', icon: '⚙️', text: 'Do we have the capacity?' },
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
            When these questions are answered accurately and updated in real time, the downstream effects are immediate: fewer missed deadlines, less idle time between runs, better material utilization, and a production floor where everyone knows what to work on next without asking. The shift from reactive firefighting to proactive scheduling is what makes production planning software transformative for growing manufacturers.
          </p>

          <p className="text-slate-600 mb-4 leading-relaxed">
            Here&apos;s how it works in practice: sales orders or demand forecasts feed into the system, which generates work orders and sequences them based on priority, due dates, and available capacity. Each work order includes the bill of materials, production steps, and resource requirements. As your team works through the schedule, they log progress in real time — so your dashboard always reflects what&apos;s actually happening on the floor, not what was planned three days ago.
          </p>

          <p className="text-slate-600 mb-4 leading-relaxed">
            The best production planning systems don&apos;t exist in isolation. They connect directly to your inventory, purchasing, and order management — so when a work order consumes raw materials, inventory updates automatically. When materials run low, purchase orders are triggered before production stalls. And when a customer calls asking about their order, you can answer in seconds instead of saying &quot;let me check and get back to you.&quot;
          </p>

          <p className="text-slate-600 mb-4 leading-relaxed">
            For small and mid-sized manufacturers, production planning software replaces the informal systems that work fine at low volume but break down as you grow. The production lead who held the entire schedule in their head, the whiteboard that only one person updates, the spreadsheet that&apos;s always a day behind — these tools hit a ceiling. Production planning software removes that ceiling and gives your team a shared, real-time view of operations that scales with the business.
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
                Production planning software connects your sales orders, production schedule, inventory, and purchasing into one system. The result: fewer surprises, faster throughput, and <strong>accurate delivery dates you can actually commit to</strong>.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">
            Production planning vs. APS: what&apos;s the difference?
          </h3>

          <p className="text-slate-600 mb-4 leading-relaxed">
            <strong className="text-slate-900">Production planning software</strong> gives you the scheduling, tracking, and capacity tools that growing manufacturers need to run an organized shop floor.{' '}
            <strong className="text-slate-900">APS</strong> (Advanced Planning and Scheduling) is an enterprise category that uses optimization algorithms to generate mathematically optimal schedules across complex, multi-facility operations.
          </p>

          <p className="text-slate-600 mb-4 leading-relaxed">
            For most manufacturers under $50M in revenue, APS is overkill. It&apos;s designed for companies with hundreds of machines, multiple plants, and constraints so complex that only an algorithm can untangle them. The implementation takes 6–18 months, requires dedicated consultants, and costs six figures before you schedule a single job. Most small manufacturers don&apos;t need mathematical optimization — they need visibility, simplicity, and a system their team will actually use.
          </p>

          <p className="text-slate-600 leading-relaxed">
            Modern cloud-based production planning takes the practical capabilities of APS — scheduling, capacity visibility, resource allocation — and delivers them in a system that goes live in weeks, not months. You get the planning power without the enterprise complexity. And because it connects natively to your{' '}
            <Link href="/mrp-software" className="text-primary-600 hover:text-primary-700 font-medium">
              MRP
            </Link>
            , inventory, and purchasing, you&apos;re not just planning production — you&apos;re running it.
          </p>
        </div>
      </section>

      {/* ── Section 4: Signs you need production planning software ── */}
      <section className="py-section bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            6 signs you need production planning software
          </h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Whiteboards and spreadsheets work until they don&apos;t. Here are the signs
            your production management has outgrown manual methods.
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
            Sound familiar? If three or more apply, production planning software would likely pay for
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
                Ready to see your production floor clearly?
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
            Not all production planning systems are equal. These are the capabilities that matter most
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
              <p className="text-slate-900 font-semibold">Your production planning should connect to the tools you already use</p>
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

      {/* ── Section 6: Production planning by industry — colored top borders ── */}
      <section className="py-section bg-slate-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-3">
            Production planning for your industry
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            Whether you need batch scheduling for food production or regulated tracking
            for medical devices, the right production planning software adapts to your workflow.
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
            Enterprise APS vendors quote 6–18 months and six-figure budgets. Modern cloud
            production planning flips that model entirely — you&apos;re live in weeks with a
            dedicated implementation manager guiding you through every step.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Enterprise */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200">
              <div className="inline-block bg-slate-100 text-slate-500 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
                Enterprise APS
              </div>
              <ul className="space-y-4">
                {[
                  { bold: '6–18 month', rest: 'implementation timeline' },
                  { bold: '$100,000–$500,000+', rest: 'upfront costs' },
                  { bold: 'Requires', rest: 'dedicated implementation consultants' },
                  { bold: 'Per-user fees', rest: 'that grow with your team' },
                  { bold: 'Designed for', rest: '$100M+ multi-plant operations' },
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
                  Modern cloud production planning
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

      {/* ── Section 8: How to evaluate production planning software ── */}
      <section className="py-section bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            How to evaluate production planning software
          </h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Choosing the wrong system is expensive — not just in dollars, but in the
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

          {/* TODO: Replace with production-planning-specific testimonials when available */}
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
              See your production clearly for the first time
            </span>
          </h2>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed">
            Join 300+ growing manufacturers who&apos;ve replaced whiteboards and spreadsheet
            schedules with real-time production visibility. Starting from $199/month,
            no per-user fees, go live in 3–6 weeks.
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
