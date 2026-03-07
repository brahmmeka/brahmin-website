import type { Metadata } from 'next'
import Link from 'next/link'
import CTA from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'Brahmin Solutions vs Cin7 | Comparison',
  description:
    'See how Brahmin Solutions compares to Cin7. From $199/month vs $349+, <15 min support vs weeks-long tickets, and manufacturing features included — not add-ons.',
}

type RowValue = string | boolean

const quickStats = [
  { label: 'Starting price', brahmin: 'From $199/mo', cin7: '$349/mo (Core Standard)', brahminBetter: true },
  { label: 'Pricing model', brahmin: 'Flat per tier, stable', cin7: 'Recurring price increases reported', brahminBetter: true },
  { label: 'Support response', brahmin: '<15 minutes', cin7: 'Days to weeks (post-acquisition)', brahminBetter: true },
  { label: 'MRP module', brahmin: 'Included on Pro', cin7: 'Separate paid add-on', brahminBetter: true },
  { label: 'Implementation', brahmin: 'Dedicated manager, 21 days', cin7: '4–12 week paid packages', brahminBetter: true },
]

const cin7Shortfalls = [
  {
    icon: '📉',
    headline: 'Support that collapsed after the DEAR Systems acquisition',
    body: 'Cin7 acquired DEAR Systems in 2022, and long-term customers report support fell off a cliff almost immediately. Tickets sit for weeks. Live support is near-impossible to reach on standard plans. For manufacturers who need fast answers when production is running, a multi-week support queue is not a support strategy.',
    quote: '"Since the company has been acquired by Cin7, support has really declined. We\'ve had a critical support case open for 3 weeks and it is still not resolved." — Cin7 Core customer, Capterra',
  },
  {
    icon: '📈',
    headline: 'Price hikes with no warning — even for long-term customers',
    body: 'Multiple customers who have been with the platform since the DEAR Systems days report recurring, significant price increases after locking in their workflows and integrations. Once you\'re embedded, you have little leverage. Brahmin has maintained stable pricing since 2015 — no surprise renewal bills.',
    quote: '"You think you\'re signing up at one price, but prices will continue to rise every year. No other third-party app has acted in this manner." — Cin7 Core customer, Capterra',
  },
  {
    icon: '🏭',
    headline: 'Manufacturing depth that runs out fast',
    body: 'Cin7 Core was built for retail inventory and distribution — DEAR Systems started as an accounting add-on. Manufacturing features are limited at the base plan: multi-level BOMs require the Advanced Manufacturing add-on, MRP is a separate paid module, and recipe or formula management (critical for food, cosmetics, supplements) is not available at any tier.',
    quote: '"Cin7 is recommended only for companies with straightforward manufacturing needs rather than complex multi-step production operations." — SoftwareConnect analysis',
  },
  {
    icon: '🛒',
    headline: 'Shopify sync that breaks without warning',
    body: 'Cin7\'s Shopify integration has a documented history of reliability issues — orders pulling through blank, stock levels disconnecting, and variant pricing wiped on update. For manufacturers who sell direct-to-consumer through Shopify, an unreliable sync creates real inventory errors and oversell risk.',
    quote: '"Their Shopify app is a disaster — orders pull through blank and stock disconnects randomly, leading to incorrect inventory values." — Cin7 Core customer, Shopify App Store',
  },
  {
    icon: '💸',
    headline: 'The real price is base plan plus add-ons',
    body: 'The $349/month headline price doesn\'t include the MRP module, Advanced Manufacturing, B2B portal, extra API packs, or additional users beyond the base count. Manufacturers who need the full stack often find the true monthly cost far exceeds what the pricing page suggests.',
    quote: '"$80K inventory value discrepancy that cannot be explained or fixed for over 12 months with zero support." — Cin7 Core customer, Capterra',
  },
]

const brahminStrengths = [
  {
    icon: '💬',
    headline: '<15 minute support. Real humans.',
    body: 'Every Brahmin customer gets a real person who knows their account. Average response time is under 15 minutes — tracked, not estimated. You will never spend weeks waiting for a critical support ticket to move while your production is on hold.',
  },
  {
    icon: '💰',
    headline: 'Manufacturing features included, not add-ons.',
    body: 'Brahmin is built for manufacturers. BOMs, work orders, production scheduling, and lot traceability (on Pro) are part of the platform — not separate modules you pay for on top of a base subscription. Brahmin Pro at $999/month gives you more manufacturing depth than Cin7\'s Advanced tier plus its add-ons.',
  },
  {
    icon: '🚀',
    headline: 'Dedicated implementation. Live in 21 days.',
    body: 'Every customer gets a dedicated implementation manager at no extra charge. Average go-live is 21 days — not a 4-to-12-week paid onboarding package. You\'re not paying a subscription while still in setup.',
  },
  {
    icon: '📊',
    headline: 'Stable pricing since 2015.',
    body: 'Brahmin is independently owned with no VC pressure to extract more revenue from existing customers at renewal. We\'ve been operating since 2015 with the same pricing philosophy: grow when our customers grow, not before.',
  },
]

const comparisonRows: { feature: string; brahmin: RowValue; cin7: RowValue; note?: string }[] = [
  // Pricing
  { feature: 'Starting price', brahmin: 'From $199/month', cin7: '$349/month (Core Standard)', note: 'Cin7 Core Standard, 5 users, 2 integrations included' },
  { feature: 'Pricing model', brahmin: 'Flat per tier', cin7: 'Tiered + add-ons', note: 'MRP, Advanced Manufacturing, B2B portal all extra' },
  { feature: 'Per-user fees', brahmin: false, cin7: true, note: 'Cin7 charges per user beyond base plan count' },
  { feature: 'Pricing stability over time', brahmin: true, cin7: false, note: 'Multiple customer reports of recurring price increases' },
  { feature: 'Self-serve trial', brahmin: true, cin7: false },
  // Support
  { feature: 'Average support response time', brahmin: '<15 minutes', cin7: 'Days to weeks', note: 'Post-acquisition support widely reported as degraded' },
  { feature: 'Live human support', brahmin: true, cin7: false, note: 'Cin7 standard plans route to ticket queue' },
  { feature: 'Dedicated implementation manager', brahmin: true, cin7: false, note: 'Cin7 sells onboarding as paid packages' },
  { feature: 'Average time to go-live', brahmin: '21 days', cin7: '4–12 weeks (paid)' },
  { feature: 'Unlimited training calls', brahmin: true, cin7: false },
  // Inventory & Production
  { feature: 'Real-time multi-location inventory', brahmin: true, cin7: true },
  { feature: 'Bills of materials (basic)', brahmin: true, cin7: true },
  { feature: 'Multi-level BOMs', brahmin: 'Pro · Add-on on lower plans', cin7: 'Advanced Manufacturing add-on (extra cost)' },
  { feature: 'Work orders', brahmin: true, cin7: true },
  { feature: 'MRP / production planning', brahmin: 'Pro · Add-on on lower plans', cin7: 'Separate paid module' },
  { feature: 'Recipe / formula management', brahmin: true, cin7: false, note: 'Critical for food, cosmetics, supplements — not in Cin7' },
  { feature: 'Real-time COGS visibility', brahmin: true, cin7: 'Limited' },
  { feature: 'Labor & overhead tracking', brahmin: true, cin7: false },
  { feature: 'Shop floor management', brahmin: true, cin7: false },
  // Traceability
  { feature: 'Batch & lot traceability', brahmin: 'Pro · Add-on on Starter/Growth', cin7: 'Limited at base tier' },
  { feature: 'Expiration date management', brahmin: 'Pro · Add-on on Starter/Growth', cin7: 'Limited' },
  { feature: 'One-click recall reports', brahmin: 'Pro · Add-on on Starter/Growth', cin7: false },
  { feature: 'FDA / FSMA audit trails', brahmin: 'Pro · Add-on on Starter/Growth', cin7: false },
  // Integrations
  { feature: 'QuickBooks integration', brahmin: true, cin7: true },
  { feature: 'Shopify integration', brahmin: true, cin7: true, note: 'Cin7 Shopify sync has documented reliability issues' },
  { feature: 'ShipStation integration', brahmin: true, cin7: true },
  { feature: 'Number of native integrations', brahmin: '50+', cin7: '700+', note: 'Cin7 has more integrations; many require higher plan tiers' },
  // Platform
  { feature: 'B2B wholesale customer portal', brahmin: true, cin7: 'Add-on cost' },
  { feature: 'Native mobile app', brahmin: true, cin7: true },
  { feature: 'Open REST API', brahmin: true, cin7: true },
  { feature: 'VC / PE backed', brahmin: false, cin7: true, note: 'Cin7 is PE-backed (Rubicon Technology Partners)' },
]

const tableGroups = [
  { label: 'Pricing', rows: comparisonRows.slice(0, 5) },
  { label: 'Support & implementation', rows: comparisonRows.slice(5, 10) },
  { label: 'Inventory & production', rows: comparisonRows.slice(10, 19) },
  { label: 'Traceability & compliance', rows: comparisonRows.slice(19, 23) },
  { label: 'Integrations', rows: comparisonRows.slice(23, 27) },
  { label: 'Platform', rows: comparisonRows.slice(27) },
]

const idealFor = [
  'You\'re evaluating Cin7 Core and want to compare before signing',
  'Your Cin7 bill keeps climbing with add-ons you thought were included',
  'You need support that responds in minutes, not a ticket queue that takes weeks',
  'You manufacture food, cosmetics, or supplements and need recipe management at the base tier',
  'You want a dedicated implementation manager at no extra cost',
  'You need stable pricing — not annual increases after you\'re locked in',
  'You want MRP and lot traceability without paying for separate modules',
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

export default function Cin7Compare() {
  return (
    <>
      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-slate-300 mb-8">
            <span>Comparison</span><span className="text-slate-500">·</span><span>Updated March 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Brahmin Solutions vs Cin7</h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10">
            Cin7 starts at $349/month — and the MRP module, Advanced Manufacturing, and B2B portal all cost extra on top. After the DEAR Systems acquisition, support wait times stretched from hours to weeks. Here&apos;s the full picture.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['✓ From $199/month — published pricing', '✓ Manufacturing features included', '✓ <15 min support response', '✓ Live in 21 days'].map((pill) => (
              <span key={pill} className="bg-emerald-600/20 border border-emerald-500/30 text-emerald-300 text-sm px-4 py-1.5 rounded-full">{pill}</span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo" className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-xl font-semibold transition-colors">Book a demo</Link>
            <Link href="/pricing" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-colors">See our pricing</Link>
          </div>
        </div>
      </section>

      {/* ── 2. QUICK COMPARISON ─────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">Quick comparison</h2>
          <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="grid grid-cols-3 bg-slate-50 border-b border-slate-200 text-sm font-semibold text-slate-500 uppercase tracking-wide">
              <div className="px-6 py-4"></div>
              <div className="px-6 py-4 text-center text-emerald-700 bg-emerald-50">Brahmin Solutions</div>
              <div className="px-6 py-4 text-center">Cin7 Core</div>
            </div>
            {quickStats.map((row) => (
              <div key={row.label} className="grid grid-cols-3 border-b border-slate-100 last:border-0 items-center">
                <div className="px-6 py-4 text-sm font-medium text-slate-700">{row.label}</div>
                <div className={`px-6 py-4 text-sm font-semibold text-center ${row.brahminBetter ? 'text-emerald-700 bg-emerald-50' : 'text-slate-700'}`}>{row.brahmin}</div>
                <div className="px-6 py-4 text-sm text-slate-500 text-center">{row.cin7}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. WHERE CIN7 FALLS SHORT ───────────────────────────────────────── */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Where Cin7 falls short</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Based on documented reviews from Capterra, G2, and Shopify App Store.</p>
          </div>
          <div className="space-y-6">
            {cin7Shortfalls.map((item) => (
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

      {/* ── 4. WHERE BRAHMIN EXCELS ─────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Where Brahmin excels</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Measurable, tracked, and visible on our pricing page.</p>
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

      {/* ── 5. FEATURE TABLE ────────────────────────────────────────────────── */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Feature-by-feature breakdown</h2>
          </div>
          <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="grid grid-cols-[1fr_160px_160px] bg-slate-800 text-white text-sm font-semibold">
              <div className="px-6 py-4">Feature</div>
              <div className="px-6 py-4 text-center bg-emerald-700">Brahmin Solutions</div>
              <div className="px-6 py-4 text-center">Cin7 Core</div>
            </div>
            {tableGroups.map((group) => (
              <div key={group.label}>
                <div className="px-6 py-3 bg-slate-100 border-y border-slate-200">
                  <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">{group.label}</span>
                </div>
                {group.rows.map((row) => (
                  <div key={row.feature} className="grid grid-cols-[1fr_160px_160px] border-b border-slate-100 last:border-0 items-center hover:bg-slate-50 transition-colors">
                    <div className="px-6 py-3.5">
                      <span className="text-sm text-slate-700">{row.feature}</span>
                      {row.note && <p className="text-xs text-slate-400 mt-0.5">{row.note}</p>}
                    </div>
                    <div className="px-6 py-3.5 bg-emerald-50/50 flex items-center justify-center"><Cell value={row.brahmin} /></div>
                    <div className="px-6 py-3.5 flex items-center justify-center"><Cell value={row.cin7} /></div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-4 text-center">Cin7 data sourced from Capterra, G2, and cin7.com. Last updated March 2026.</p>
        </div>
      </section>

      {/* ── 6. WHO SHOULD CHOOSE BRAHMIN ────────────────────────────────────── */}
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
                <h3 className="font-semibold text-slate-700">Cin7 may be fine if…</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'You are primarily a retailer or distributor with minimal manufacturing complexity',
                  'You need 700+ native integrations — Cin7\'s integration library is significantly larger',
                  'Your support needs are low and you can manage from documentation',
                  'You are already deeply embedded in Cin7 and switching cost outweighs the gains',
                  'You use Cin7 Omni for high-volume omnichannel retail, not for manufacturing',
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
              &ldquo;Full visibility from purchase order to manufacturing to sales — plus accurate cost of goods. And the support is exceptional.&rdquo;
            </blockquote>
            <cite className="text-sm text-slate-500 not-italic">— Sheldon, FLFF</cite>
          </div>
        </div>
      </section>

      {/* ── 7. CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">See the difference yourself</h2>
          <p className="text-slate-300 text-lg mb-8">Book a 30-minute demo. We&apos;ll show you the software with your actual products — and you&apos;ll see the pricing before we get off the call.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link href="/demo" className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-xl font-semibold transition-colors">Book a demo</Link>
            <Link href="/pricing" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-colors">See pricing</Link>
          </div>
          <div className="text-sm text-slate-400 mb-10">No credit card required · Published pricing · Free 14-day trial available</div>
          <div className="border-t border-slate-700 pt-8">
            <p className="text-sm text-slate-500 mb-4">More comparisons</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: 'vs Katana', href: '/compare/katana' },
                { label: 'vs Fishbowl', href: '/compare/fishbowl' },
                { label: 'vs Wherefour', href: '/compare/wherefour' },
                { label: 'vs MRPeasy', href: '/compare/mrpeasy' },
                { label: 'vs NetSuite', href: '/compare/netsuite' },
                { label: 'See all comparisons', href: '/compare' },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-slate-400 hover:text-white border border-slate-700 hover:border-slate-500 px-4 py-1.5 rounded-full transition-colors">{link.label}</Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </>
  )
}
