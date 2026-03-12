import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Brahmin Solutions vs Odoo | Comparison',
  description:
    'Brahmin works out of the box. Odoo requires modules, customization, and a developer. Compare manufacturing software for small manufacturers side by side.',
}

type RowValue = string | boolean

const quickStats = [
  { label: 'Starting price', brahmin: 'From $199/mo', competitor: '$24.90/user/mo (+ modules)', brahminBetter: false },
  { label: 'Modules to buy', brahmin: '0 (all included)', competitor: '5–8 typically needed', brahminBetter: true },
  { label: 'Implementation', brahmin: 'Included (dedicated manager)', competitor: 'Partner needed ($100–200/hr)', brahminBetter: true },
  { label: 'Developer required', brahmin: 'No', competitor: 'Often yes', brahminBetter: true },
  { label: 'MRP included', brahmin: 'Yes', competitor: 'Extra module', brahminBetter: true },
]

const competitorShortfalls = [
  {
    icon: '🧩',
    headline: 'Module sprawl — you need 5+ modules for manufacturing',
    body: 'Odoo sells modules individually: MRP, Inventory, Quality, PLM, Maintenance, Barcode — each one adds to your monthly bill. A 5-user manufacturing setup with the modules you actually need can easily cost $500–$1,000+/month. Brahmin includes everything in one flat price.',
    quote: '"We had to purchase multiple modules to get basic manufacturing functionality. The costs add up quickly when you need MRP, quality, and inventory together." — Capterra review',
  },
  {
    icon: '👨‍💻',
    headline: 'Requires a developer or implementation partner',
    body: 'Odoo is open source, which sounds great — until you realize that customizing it to fit your workflows requires a developer or an Odoo implementation partner charging $100–$200/hour. Most small manufacturers don\'t have an IT team, and shouldn\'t need one to run their manufacturing software.',
    quote: '"Unless you have a developer on staff, you\'re going to need to hire a partner to customize Odoo. That gets expensive fast." — G2 review',
  },
  {
    icon: '🚫',
    headline: 'Community edition is missing critical manufacturing features',
    body: 'Odoo\'s free Community edition sounds appealing, but it lacks the Manufacturing (MRP) module entirely. You also miss out on lot traceability (requires the Quality module), barcode scanning, and multi-company support. To get manufacturing capabilities, you need Enterprise — and suddenly "free" isn\'t free.',
    quote: '"We started with Community thinking we\'d save money, but quickly realized we needed Enterprise for manufacturing. The free version is really just a teaser." — G2 review',
  },
  {
    icon: '🔧',
    headline: 'Jack of all trades, master of none',
    body: 'Odoo tries to be everything: ERP, CRM, eCommerce, HR, accounting, project management, and more. Manufacturing is just one of 80+ apps. The result is a manufacturing module that\'s functional but generic — not purpose-built for the workflows small manufacturers actually use day to day.',
    quote: '"Odoo does a lot of things, but none of them exceptionally well. The MRP module feels like an afterthought compared to dedicated manufacturing software." — Capterra review',
  },
]

const brahminStrengths = [
  {
    icon: '📦',
    headline: 'Works out of the box — no modules, no configuration.',
    body: 'Sign up, import your data, and start running production. No modules to research, no add-ons to purchase, no configuration projects. Every feature — inventory, production, traceability, integrations — is included from day one.',
  },
  {
    icon: '🏭',
    headline: 'Purpose-built for small manufacturers.',
    body: 'Brahmin isn\'t a generic ERP trying to serve every industry. It\'s built specifically for small manufacturers — food & beverage, cosmetics, supplements, and consumer goods. Every feature exists because a real manufacturer needed it.',
  },
  {
    icon: '🙅',
    headline: 'No developer or IT team needed.',
    body: 'Brahmin is designed so that operations managers and production leads can set it up and use it without writing a single line of code. No implementation partner needed, no ongoing developer costs, no technical debt.',
  },
  {
    icon: '🤝',
    headline: 'Dedicated support in under 15 minutes.',
    body: 'Every Brahmin customer gets a dedicated implementation manager and unlimited training calls — included on every plan. When you need help, you get a real person who knows your account, not a community forum or a paid support tier.',
  },
]

const comparisonRows: { feature: string; brahmin: RowValue; competitor: RowValue; note?: string }[] = [
  // Pricing
  { feature: 'Starting price', brahmin: 'From $199/month', competitor: '$24.90/user/month (+ modules)' },
  { feature: '5-user manufacturing setup', brahmin: 'From $199/month', competitor: '$500–$1,000+/month', note: 'Enterprise with MRP, Inventory, Quality, PLM, Barcode' },
  { feature: 'All features included', brahmin: true, competitor: false, note: 'Odoo charges per module' },
  { feature: 'Per-user fees', brahmin: false, competitor: '$24.90–$37.40/user/month' },
  { feature: 'Free Community edition', brahmin: false, competitor: true, note: 'Community lacks MRP module' },
  // Support & implementation
  { feature: 'Implementation included', brahmin: true, competitor: false, note: 'Odoo requires partner ($100–200/hr)' },
  { feature: 'Dedicated implementation manager', brahmin: true, competitor: false },
  { feature: 'Support response time', brahmin: '<15 minutes', competitor: 'Varies (forum or paid support)' },
  { feature: 'Unlimited training', brahmin: true, competitor: false, note: 'Odoo partner training is billable' },
  { feature: 'Average time to go-live', brahmin: '2–4 weeks', competitor: '2–6 months typically' },
  // Manufacturing
  { feature: 'Bills of materials (multi-level)', brahmin: true, competitor: true, note: 'Requires MRP module' },
  { feature: 'Work orders', brahmin: true, competitor: true, note: 'Requires MRP module' },
  { feature: 'MRP / demand planning', brahmin: true, competitor: 'Extra module' },
  { feature: 'Real-time production costing', brahmin: true, competitor: 'Requires configuration' },
  { feature: 'Labor & overhead tracking', brahmin: true, competitor: 'Requires customization' },
  { feature: 'No developer needed to customize', brahmin: true, competitor: false },
  // Traceability
  { feature: 'Lot traceability', brahmin: 'Pro · Add-on on Starter/Growth', competitor: 'Requires Quality module' },
  { feature: 'One-click recall reports', brahmin: 'Pro · Add-on on Starter/Growth', competitor: false },
  { feature: 'Full lot genealogy (supplier to customer)', brahmin: 'Pro · Add-on on Starter/Growth', competitor: 'Limited' },
  { feature: 'FDA / FSMA compliance tools', brahmin: 'Pro · Add-on on Starter/Growth', competitor: false },
  // Integrations
  { feature: 'QuickBooks integration', brahmin: true, competitor: false, note: 'Odoo has its own accounting module' },
  { feature: 'Shopify integration', brahmin: true, competitor: 'Via connector' },
  { feature: 'Native integrations included', brahmin: '8 on all plans', competitor: 'Limited (own ecosystem preferred)' },
  { feature: 'B2B wholesale portal', brahmin: true, competitor: 'Via eCommerce module' },
  // Platform
  { feature: 'Mobile app', brahmin: true, competitor: true },
  { feature: 'Barcode scanning', brahmin: true, competitor: 'Extra module' },
  { feature: 'Setup without developer', brahmin: true, competitor: false, note: 'Odoo typically requires partner' },
  { feature: 'Purpose-built for manufacturers', brahmin: true, competitor: false, note: 'Odoo is a generic ERP with 80+ apps' },
]

const tableGroups = [
  { label: 'Pricing', rows: comparisonRows.slice(0, 5) },
  { label: 'Support & implementation', rows: comparisonRows.slice(5, 10) },
  { label: 'Manufacturing', rows: comparisonRows.slice(10, 16) },
  { label: 'Traceability & compliance', rows: comparisonRows.slice(16, 20) },
  { label: 'Integrations', rows: comparisonRows.slice(20, 24) },
  { label: 'Platform', rows: comparisonRows.slice(24) },
]

const idealFor = [
  'You want manufacturing software that works on day one — no modules, no configuration projects',
  'You don\'t have a developer or IT team to customize and maintain your system',
  'You\'re a small manufacturer under $50M and need software built for your size',
  'You want all features included at one flat price — not per-user, per-module billing',
  'You need dedicated support from someone who knows your account, not a community forum',
  'You want to be live in weeks, not months',
]

function Cell({ value }: { value: RowValue }) {
  if (value === true) {
    return (
      <svg className="w-5 h-5 text-emerald-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
    )
  }
  if (value === false) {
    return (
      <svg className="w-5 h-5 text-slate-300 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
    )
  }
  return <span className="text-sm text-slate-600 text-center block">{value}</span>
}

export default function OdooCompare() {
  return (
    <>
      {/* -- 1. HERO --------------------------------------------------------- */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-slate-300 mb-8">
            <span>Comparison</span><span className="text-slate-500">·</span><span>Updated March 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Brahmin Solutions vs Odoo</h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10">
            Odoo is a powerful open-source ERP — but for small manufacturers, it means modules to buy, developers to hire, and months of implementation. Brahmin works out of the box.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['✓ Works out of the box', '✓ No modules to configure', '✓ No developer needed', '✓ Live in weeks, not months'].map((pill) => (
              <span key={pill} className="bg-emerald-600/20 border border-emerald-500/30 text-emerald-300 text-sm px-4 py-1.5 rounded-full">{pill}</span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo" className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-xl font-semibold transition-colors">Book a demo</Link>
            <Link href="/pricing" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-colors">See our pricing</Link>
          </div>
        </div>
      </section>

      {/* -- 2. QUICK COMPARISON --------------------------------------------- */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">Quick comparison</h2>
          <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="grid grid-cols-3 bg-slate-50 border-b border-slate-200 text-sm font-semibold text-slate-500 uppercase tracking-wide">
              <div className="px-6 py-4"></div>
              <div className="px-6 py-4 text-center text-emerald-700 bg-emerald-50">Brahmin Solutions</div>
              <div className="px-6 py-4 text-center">Odoo</div>
            </div>
            {quickStats.map((row) => (
              <div key={row.label} className="grid grid-cols-3 border-b border-slate-100 last:border-0 items-center">
                <div className="px-6 py-4 text-sm font-medium text-slate-700">{row.label}</div>
                <div className={`px-6 py-4 text-sm font-semibold text-center ${row.brahminBetter ? 'text-emerald-700 bg-emerald-50' : 'text-slate-700'}`}>{row.brahmin}</div>
                <div className="px-6 py-4 text-sm text-slate-500 text-center">{row.competitor}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- 3. WHERE ODOO FALLS SHORT -------------------------------------- */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Where Odoo falls short for manufacturers</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Based on reviews from G2, Capterra, and product documentation.</p>
          </div>
          <div className="space-y-6">
            {competitorShortfalls.map((item) => (
              <div key={item.headline} className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <span className="text-3xl shrink-0">{item.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.headline}</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">{item.body}</p>
                    <blockquote className="border-l-4 border-slate-200 pl-4 text-sm text-slate-500 italic">{item.quote}</blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- 4. WHERE BRAHMIN EXCELS ----------------------------------------- */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Where Brahmin excels</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Manufacturing software that works out of the box — no modules, no developers, no surprises.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {brahminStrengths.map((card) => (
              <div key={card.headline} className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
                <div className="text-3xl mb-4">{card.icon}</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{card.headline}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- 5. FEATURE TABLE ------------------------------------------------ */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Feature-by-feature breakdown</h2>
          </div>
          <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
          <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="grid grid-cols-[1fr_100px_100px] md:grid-cols-[1fr_160px_160px] bg-slate-800 text-white text-sm font-semibold">
              <div className="px-3 md:px-6 py-4">Feature</div>
              <div className="px-3 md:px-6 py-4 text-center bg-emerald-700">Brahmin Solutions</div>
              <div className="px-3 md:px-6 py-4 text-center">Odoo</div>
            </div>
            {tableGroups.map((group) => (
              <div key={group.label}>
                <div className="px-3 md:px-6 py-3 bg-slate-100 border-y border-slate-200">
                  <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">{group.label}</span>
                </div>
                {group.rows.map((row) => (
                  <div key={row.feature} className="grid grid-cols-[1fr_100px_100px] md:grid-cols-[1fr_160px_160px] border-b border-slate-100 last:border-0 items-center hover:bg-slate-50 transition-colors">
                    <div className="px-3 md:px-6 py-3.5">
                      <span className="text-sm text-slate-700">{row.feature}</span>
                      {row.note && <p className="text-xs text-slate-400 mt-0.5">{row.note}</p>}
                    </div>
                    <div className="px-3 md:px-6 py-3.5 bg-emerald-50/50 flex items-center justify-center"><Cell value={row.brahmin} /></div>
                    <div className="px-3 md:px-6 py-3.5 flex items-center justify-center"><Cell value={row.competitor} /></div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          </div>
          <p className="text-xs text-slate-400 mt-4 text-center">Odoo data sourced from odoo.com, G2, and Capterra. Last updated March 2026.</p>
        </div>
      </section>

      {/* -- 6. WHO SHOULD CHOOSE -------------------------------------------- */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">Who should choose Brahmin</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-emerald-50 rounded-2xl border border-emerald-200 p-6">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                </div>
                <h3 className="font-semibold text-emerald-900">Choose Brahmin if…</h3>
              </div>
              <ul className="space-y-3">
                {idealFor.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-emerald-800">
                    <svg className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-6 h-6 rounded-full bg-slate-400 flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                </div>
                <h3 className="font-semibold text-slate-700">Odoo may be a better fit if…</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'You need a full ERP suite — HR, CRM, accounting, eCommerce, and manufacturing all in one platform',
                  'You have developer resources in-house to customize and maintain the system',
                  'You want open-source software you can self-host and modify',
                  'You\'re a larger organization with an IT team and budget for implementation partners',
                  'You need modules beyond manufacturing (project management, helpdesk, fleet management, etc.)',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <svg className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-primary-50 rounded-2xl border border-primary-100 p-8 text-center">
            <blockquote className="text-lg font-medium text-slate-800 mb-4 max-w-3xl mx-auto leading-relaxed">
              &ldquo;Brahmin syncs to all our systems and handles batch tracking, order capture, and fulfillment — everything we need in one place.&rdquo;
            </blockquote>
            <cite className="text-sm text-slate-500 not-italic">— Ryan, Chugach Chocolates</cite>
          </div>
        </div>
      </section>

      {/* -- 7. CTA ---------------------------------------------------------- */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for manufacturing software that works out of the box?</h2>
          <p className="text-slate-300 text-lg mb-8">Book a 30-minute demo. We&apos;ll show you Brahmin with your actual products and workflows.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link href="/demo" className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-xl font-semibold transition-colors">Book a demo</Link>
            <Link href="/pricing" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-colors">See pricing</Link>
          </div>
          <div className="text-sm text-slate-400 mb-10">No credit card required · 14-day free trial · Live in 2–4 weeks</div>
          <div className="border-t border-slate-700 pt-8">
            <p className="text-sm text-slate-500 mb-4">More comparisons</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: 'vs Katana', href: '/compare/katana' },
                { label: 'vs Cin7', href: '/compare/cin7' },
                { label: 'vs SAP Business One', href: '/compare/sap-business-one' },
                { label: 'vs NetSuite', href: '/compare/netsuite' },
                { label: 'vs Spreadsheets', href: '/compare/spreadsheets' },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-slate-400 hover:text-white border border-slate-700 hover:border-slate-500 px-4 py-1.5 rounded-full transition-colors">{link.label}</Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
