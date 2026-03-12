import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Brahmin Solutions vs SAP Business One | Comparison',
  description:
    'SAP Business One is built for mid-market enterprises. Brahmin is right-sized for small manufacturers — no IT team required. Compare pricing, implementation, and features side by side.',
}

type RowValue = string | boolean

const quickStats = [
  { label: 'Starting price', brahmin: 'From $199/mo', competitor: '~$500–750/mo (5 users)', brahminBetter: true },
  { label: 'Users included', brahmin: 'Unlimited', competitor: 'Per-user licensing', brahminBetter: true },
  { label: 'Implementation cost', brahmin: 'Included', competitor: '$50K–$150K+', brahminBetter: true },
  { label: 'Time to go-live', brahmin: '3–6 weeks', competitor: '3–6 months', brahminBetter: true },
  { label: 'IT staff required', brahmin: 'No', competitor: 'Yes', brahminBetter: true },
]

const competitorShortfalls = [
  {
    icon: '💰',
    headline: 'Enterprise pricing for SMB needs',
    body: 'SAP Business One charges per-user licensing ($100–150/user/month cloud, or ~$3,213/user perpetual + annual maintenance). Add implementation fees of $50K–$150K+, and the total cost of ownership dwarfs what most small manufacturers should be spending on software. Brahmin starts at $199/month with unlimited users — all in.',
    quote: '"The total cost of ownership is much higher than initially presented. By the time you add licenses, implementation, customizations, and annual maintenance, you\'re looking at a very significant investment." — Capterra review',
  },
  {
    icon: '🖥️',
    headline: 'Requires dedicated IT or consultants',
    body: 'SAP Business One requires an implementation partner for setup, customization, and ongoing maintenance. Most small manufacturers don\'t have an IT department — and shouldn\'t need one to run their inventory and production software. With Brahmin, your dedicated implementation manager handles everything.',
    quote: '"You definitely need a consultant or IT person to manage the system. It\'s not something a small business owner can handle on their own." — G2 review',
  },
  {
    icon: '📅',
    headline: 'Implementation takes months, not weeks',
    body: 'A typical SAP Business One implementation runs 3–6 months, with some projects stretching past a year. Data migration, customization, training, and testing all require coordination with your implementation partner. Brahmin customers go live in 3–6 weeks with a dedicated manager guiding every step.',
    quote: '"Implementation took much longer than expected — nearly 8 months. The process was painful and required a lot of resources from our side." — Capterra review',
  },
  {
    icon: '📚',
    headline: 'Steep learning curve for everyday users',
    body: 'SAP Business One\'s interface was designed for power users and IT professionals, not floor managers and warehouse staff. The module-heavy structure means extensive training is required before your team can use it effectively. Brahmin is purpose-built for manufacturers — intuitive enough that your team can start using it on day one.',
    quote: '"The learning curve is very steep. Even after months of use, our team still struggles with basic tasks. The interface feels like it was designed by engineers, not for end users." — G2 review',
  },
]

const brahminStrengths = [
  {
    icon: '💵',
    headline: 'Right-sized for small manufacturers ($199/mo all-in).',
    body: 'No per-user fees, no module add-ons, no implementation charges. Brahmin starts at $199/month with unlimited users and every feature included. You\'ll spend less in a year than SAP\'s implementation fee alone.',
  },
  {
    icon: '🚀',
    headline: 'Live in weeks, not months.',
    body: 'Your dedicated implementation manager handles data migration, configuration, and training. Average go-live: 3–6 weeks. No consultants, no project managers, no surprise invoices.',
  },
  {
    icon: '🧑‍💻',
    headline: 'No IT department required.',
    body: 'Brahmin is cloud-based, fully managed, and requires zero technical staff. Updates happen automatically, integrations connect in clicks, and support is a phone call away — not a ticket to your implementation partner.',
  },
  {
    icon: '🤝',
    headline: 'Real human support in <15 minutes.',
    body: 'Call or chat and reach a real person who knows your account. Average response time: under 15 minutes. No going through an implementation partner, no tiered support packages, no waiting days for a reply.',
  },
]

const comparisonRows: { feature: string; brahmin: RowValue; competitor: RowValue; note?: string }[] = [
  // Pricing
  { feature: 'Starting price', brahmin: 'From $199/month', competitor: '~$100–150/user/month', note: 'SAP B1 Cloud; minimum 5 users' },
  { feature: 'Unlimited users', brahmin: true, competitor: false, note: 'SAP B1 charges per user' },
  { feature: 'Per-user fees', brahmin: false, competitor: true },
  { feature: 'Implementation included', brahmin: true, competitor: false, note: 'SAP B1 requires paid partner: $50K–$150K+' },
  { feature: 'All features included', brahmin: true, competitor: false, note: 'SAP B1 manufacturing is a separate add-on' },
  // Support & implementation
  { feature: 'Dedicated implementation manager', brahmin: true, competitor: false, note: 'SAP B1 uses third-party partners' },
  { feature: 'Support response time', brahmin: '<15 minutes', competitor: 'Through implementation partner' },
  { feature: 'Average time to go-live', brahmin: '3–6 weeks', competitor: '3–6 months' },
  { feature: 'Unlimited training', brahmin: true, competitor: false, note: 'SAP B1 training is separately billed' },
  { feature: 'IT staff required', brahmin: false, competitor: true },
  // Manufacturing
  { feature: 'Bills of materials (multi-level)', brahmin: true, competitor: true, note: 'SAP B1 requires Production add-on' },
  { feature: 'Work orders', brahmin: true, competitor: true, note: 'SAP B1 requires Production add-on' },
  { feature: 'MRP / demand planning', brahmin: true, competitor: true, note: 'SAP B1 MRP included but complex to configure' },
  { feature: 'Real-time production costing', brahmin: true, competitor: true },
  { feature: 'Labor & overhead tracking', brahmin: true, competitor: 'Limited' },
  { feature: 'Production scheduling', brahmin: true, competitor: 'Basic', note: 'Advanced scheduling requires SAP add-ons' },
  // Traceability
  { feature: 'Lot traceability', brahmin: 'Pro · Add-on on Starter/Growth', competitor: true },
  { feature: 'One-click recall reports', brahmin: 'Pro · Add-on on Starter/Growth', competitor: false, note: 'SAP B1 requires custom reports' },
  { feature: 'Full lot genealogy (supplier to customer)', brahmin: 'Pro · Add-on on Starter/Growth', competitor: 'Requires customization' },
  { feature: 'FDA / FSMA compliance tools', brahmin: 'Pro · Add-on on Starter/Growth', competitor: false, note: 'Not purpose-built for food/supplement compliance' },
  // Integrations
  { feature: 'Native integrations included', brahmin: '8 on all plans', competitor: 'SAP ecosystem only' },
  { feature: 'QuickBooks integration', brahmin: true, competitor: false, note: 'SAP B1 replaces QuickBooks entirely' },
  { feature: 'Shopify integration', brahmin: true, competitor: 'Via third-party add-on' },
  { feature: 'B2B wholesale portal', brahmin: true, competitor: false },
  { feature: 'Zapier (5,000+ apps)', brahmin: true, competitor: false },
  // Platform
  { feature: 'Mobile app', brahmin: true, competitor: 'Limited', note: 'SAP B1 mobile has restricted functionality' },
  { feature: 'Barcode scanning', brahmin: true, competitor: true },
  { feature: 'Cloud-native (no IT required)', brahmin: true, competitor: 'Cloud or on-premise', note: 'Cloud version still needs partner support' },
  { feature: 'Ease of use (no training barrier)', brahmin: true, competitor: false, note: 'SAP B1 requires extensive training' },
  { feature: 'Purpose-built for small manufacturers', brahmin: true, competitor: false, note: 'SAP B1 targets mid-market ($10M–$500M)' },
]

const tableGroups = [
  { label: 'Pricing', rows: comparisonRows.slice(0, 5) },
  { label: 'Support & implementation', rows: comparisonRows.slice(5, 10) },
  { label: 'Manufacturing', rows: comparisonRows.slice(10, 16) },
  { label: 'Traceability & compliance', rows: comparisonRows.slice(16, 20) },
  { label: 'Integrations', rows: comparisonRows.slice(20, 25) },
  { label: 'Platform', rows: comparisonRows.slice(25) },
]

const idealFor = [
  'You\'re a small manufacturer under $50M in revenue and don\'t want enterprise complexity',
  'You don\'t have an IT team — and don\'t want to hire one for your software',
  'You need to go live in weeks, not months',
  'You want simple, predictable pricing with unlimited users',
  'You need lot traceability and recall readiness without custom development',
  'You want dedicated support that responds in minutes, not days through a partner',
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

export default function SAPBusinessOneCompare() {
  return (
    <>
      {/* -- 1. HERO --------------------------------------------------------- */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-slate-300 mb-8">
            <span>Comparison</span><span className="text-slate-500">·</span><span>Updated March 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Brahmin Solutions vs SAP Business One</h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10">
            SAP Business One is enterprise software built for mid-market companies with IT teams and six-figure budgets. Brahmin is right-sized for small manufacturers — no IT department required, no consultants, no months-long implementation.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['✓ No IT department needed', '✓ Live in weeks, not months', '✓ $199/mo vs thousands', '✓ Unlimited users included'].map((pill) => (
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
              <div className="px-6 py-4 text-center">SAP Business One</div>
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

      {/* -- 3. WHERE SAP B1 FALLS SHORT ------------------------------------- */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Where SAP Business One falls short for small manufacturers</h2>
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
            <p className="text-slate-500 max-w-2xl mx-auto">Right-sized manufacturing software — no IT team, no consultants, no enterprise bloat.</p>
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
              <div className="px-3 md:px-6 py-4 text-center">SAP Business One</div>
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
          <p className="text-xs text-slate-400 mt-4 text-center">SAP Business One data sourced from sap.com, G2, and Capterra. Last updated March 2026.</p>
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
                <h3 className="font-semibold text-slate-700">SAP Business One may be a better fit if…</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'You\'re a mid-market company with $50M+ in revenue and complex multi-entity needs',
                  'You have a dedicated IT team or budget for ongoing consultant support',
                  'You need a full ERP covering HR, CRM, financials, and manufacturing in one system',
                  'You\'re already in the SAP ecosystem and need tight integration with other SAP products',
                  'You have 6+ months to dedicate to implementation and change management',
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
          <h2 className="text-3xl font-bold mb-4">Ready to see what right-sized manufacturing software looks like?</h2>
          <p className="text-slate-300 text-lg mb-8">Book a 30-minute demo. We&apos;ll show you Brahmin with your actual products and workflows.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link href="/demo" className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-xl font-semibold transition-colors">Book a demo</Link>
            <Link href="/pricing" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-colors">See pricing</Link>
          </div>
          <div className="text-sm text-slate-400 mb-10">No credit card required · 14-day free trial · Live in 3–6 weeks</div>
          <div className="border-t border-slate-700 pt-8">
            <p className="text-sm text-slate-500 mb-4">More comparisons</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: 'vs Katana', href: '/compare/katana' },
                { label: 'vs Cin7', href: '/compare/cin7' },
                { label: 'vs NetSuite', href: '/compare/netsuite' },
                { label: 'vs Fishbowl', href: '/compare/fishbowl' },
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
