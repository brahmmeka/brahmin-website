import type { Metadata } from 'next'
import Link from 'next/link'
import CTA from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'Lot Traceability & Compliance Software | Brahmin Solutions',
  description:
    'Full forward and backward traceability. Generate recall reports in seconds. Stay audit-ready with complete batch tracking.',
}

const allFeatures = [
  'Lot and batch number tracking',
  'Expiration date management',
  'Forward and backward traceability',
  'One-click recall reporting',
  'Supplier-to-customer trace',
  'Certificate of analysis (CoA) storage',
  'FDA and FSMA compliance trails',
  'Auto lot code generation',
  'Lot codes on invoices and packing slips',
  'Mock recall support',
  'Rework lot tracking',
  'Quality hold management',
  'Lot-level cost tracking',
  'Audit log — who touched it, when',
  'Export trace reports to Excel/PDF',
]

const related = [
  { href: '/features/inventory', label: 'Inventory Management', desc: 'Lot-level stock visibility across all locations' },
  { href: '/features/production', label: 'Production & Manufacturing', desc: 'Track ingredients through every production run' },
  { href: '/features/purchasing', label: 'Purchasing', desc: 'Lot tracking starts at raw material receipt' },
]

function Check() {
  return (
    <svg className="w-4 h-4 text-accent-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

function TraceTimeline() {
  const steps = [
    { label: 'Received from supplier', detail: 'PO-2026-0041 · Grain Mill Co. · Feb 12', done: true },
    { label: 'Transferred to production', detail: 'WO-1042 · Organic Maple Granola · Feb 15', done: true },
    { label: 'QA check passed', detail: 'Moisture 8.2% · Allergen test: clear · Feb 15', done: true },
    { label: 'Shipped to customer', detail: 'SO-7291 · Whole Foods Market · Feb 18', done: true },
  ]
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-6">
      <div className="flex items-start justify-between mb-5">
        <div>
          <p className="text-xs text-slate-400 mb-0.5">Lot trace</p>
          <p className="font-bold text-slate-900 text-lg">LOT-2026-0342</p>
          <p className="text-sm text-slate-500">Organic Rolled Oats · 300 lbs</p>
        </div>
        <span className="bg-emerald-100 text-emerald-700 text-xs px-2.5 py-1 rounded-full font-semibold">Traced</span>
      </div>
      <div className="space-y-1">
        {steps.map((step, i) => (
          <div key={i} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className={`w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center mt-1 shrink-0 ${step.done ? 'bg-emerald-500 border-emerald-500' : 'bg-white border-slate-300'}`}>
                {step.done && (
                  <svg className="w-2 h-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                )}
              </div>
              {i < steps.length - 1 && <div className="w-0.5 bg-emerald-200 flex-1 mt-1 mb-1" />}
            </div>
            <div className="pb-4">
              <p className="text-sm font-semibold text-slate-900">{step.label}</p>
              <p className="text-xs text-slate-500 mt-0.5">{step.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function RecallMockup() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
      <div className="bg-red-50 border-b border-red-200 px-5 py-3 flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-red-500" />
        <span className="text-sm font-semibold text-red-900">Recall report — LOT-2026-0342</span>
      </div>
      <div className="p-5 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          {[
            { n: '3', l: 'Lots affected' },
            { n: '487 lbs', l: 'Total quantity' },
            { n: '2', l: 'Customers' },
          ].map((s) => (
            <div key={s.l} className="bg-slate-50 rounded-xl p-3">
              <p className="font-bold text-slate-900 text-lg">{s.n}</p>
              <p className="text-xs text-slate-500">{s.l}</p>
            </div>
          ))}
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">Affected customers</p>
          {[
            { name: 'Whole Foods Market', order: 'SO-7291', qty: '200 lbs', status: 'Shipped' },
            { name: 'Sprouts Farmers Market', order: 'SO-7304', qty: '287 lbs', status: 'Pending' },
          ].map((c) => (
            <div key={c.name} className="flex items-center justify-between py-2.5 border-b border-slate-50">
              <div>
                <p className="text-sm font-medium text-slate-900">{c.name}</p>
                <p className="text-xs text-slate-400">{c.order} · {c.qty}</p>
              </div>
              <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${c.status === 'Shipped' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'}`}>{c.status}</span>
            </div>
          ))}
        </div>
        <button className="w-full bg-slate-900 text-white text-sm font-semibold py-2.5 rounded-xl hover:bg-slate-800 transition-colors">
          Download recall report (PDF)
        </button>
      </div>
    </div>
  )
}

export default function TraceabilityPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white pt-20 pb-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/features" className="text-xs text-slate-400 hover:text-slate-600 transition-colors">Features</Link>
              <span className="text-slate-300">/</span>
              <span className="text-xs font-semibold text-rose-600">Traceability & Compliance</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.08]">
              Full lot and batch traceability
            </h1>
            <p className="mt-6 text-xl text-slate-500 leading-relaxed max-w-2xl">
              Track every ingredient from the moment it arrives to the moment it reaches your customer. When the FDA calls, you have your recall report ready in minutes — not days.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/demo" className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-accent-500/25 hover:-translate-y-0.5 text-center">
                Book a demo
              </Link>
              <Link href="/pricing" className="flex items-center justify-center gap-2 border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all">
                See pricing →
              </Link>
            </div>
            <p className="mt-5 text-sm text-slate-400">300+ manufacturers · From $199/month · No credit card required</p>
          </div>
        </div>
      </section>

      {/* Feature sections */}
      <section className="py-section bg-white">
        <div className="container mx-auto px-6 max-w-7xl space-y-28">

          {/* Section 1 */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-rose-600 mb-4">Lot tracking</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Complete chain of custody — one click
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                Every lot gets a full audit trail: when it arrived, which supplier it came from, which production runs it went into, which customers received it. Forward, backward, or full tree — the trace is always there.
              </p>
              <ul className="mt-8 space-y-3">
                {['Auto lot codes generated on PO receiving', 'Trace from raw material supplier to end customer', 'Lot codes automatically appear on invoices and packing slips', 'Search any lot number in seconds'].map((f) => (
                  <li key={f} className="flex items-start gap-3"><Check /><span className="text-slate-700">{f}</span></li>
                ))}
              </ul>
            </div>
            <TraceTimeline />
          </div>

          {/* Section 2 */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <RecallMockup />
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-rose-600 mb-4">Recall readiness</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Recall report in minutes, not days
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                When a recall happens, time is everything. Brahmin tells you instantly which lots are affected, how much product is in play, and exactly which customers need to be notified — with a PDF ready to hand to the FDA.
              </p>
              <ul className="mt-8 space-y-3">
                {['One-click recall report by lot, date range, or supplier', 'Shows affected customers with order and quantity details', 'PDF export for regulatory submission', 'Mock recall support for annual audits'].map((f) => (
                  <li key={f} className="flex items-start gap-3"><Check /><span className="text-slate-700">{f}</span></li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 3 */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-rose-600 mb-4">Compliance</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Stay audit-ready at all times
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                Brahmin keeps a permanent, tamper-evident audit trail of every inventory movement, adjustment, and transfer. Inspectors and auditors get exactly the documentation they need — without you scrambling.
              </p>
              <ul className="mt-8 space-y-3">
                {['FDA-ready audit trails with timestamps and user attribution', 'Certificate of analysis (CoA) storage per lot', 'Expiration date management and FEFO pulling', 'Quality hold management — freeze a lot with one click'].map((f) => (
                  <li key={f} className="flex items-start gap-3"><Check /><span className="text-slate-700">{f}</span></li>
                ))}
              </ul>
            </div>
            {/* Compliance mockup */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">Audit trail — LOT-2026-0342</p>
              <div className="space-y-3">
                {[
                  { action: 'Lot received from supplier', user: 'J. Martinez', time: 'Feb 12 · 9:14am', icon: '📥' },
                  { action: 'CoA uploaded and linked', user: 'J. Martinez', time: 'Feb 12 · 9:31am', icon: '📎' },
                  { action: 'Transferred to production WO-1042', user: 'System', time: 'Feb 15 · 7:02am', icon: '🔄' },
                  { action: 'QA check recorded — passed', user: 'T. Nguyen', time: 'Feb 15 · 2:45pm', icon: '✅' },
                  { action: 'Shipped in SO-7291', user: 'System', time: 'Feb 18 · 11:22am', icon: '📦' },
                ].map((e, i) => (
                  <div key={i} className="flex gap-3 py-2 border-b border-slate-50">
                    <span className="text-base shrink-0">{e.icon}</span>
                    <div>
                      <p className="text-sm font-medium text-slate-900">{e.action}</p>
                      <p className="text-xs text-slate-400">{e.user} · {e.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature checklist */}
      <section className="py-section bg-slate-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 mb-4">All features</span>
            <h2 className="text-3xl font-bold text-slate-900">Everything included in traceability & compliance</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl mx-auto">
            {allFeatures.map((f) => (
              <div key={f} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-slate-200">
                <Check />
                <span className="text-sm text-slate-700">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <svg className="w-8 h-8 text-slate-200 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="text-xl text-slate-700 leading-relaxed font-medium mb-8">
            "We have yearly inspections which include mock recalls and mass balance exercises, and both went the smoothest they ever have after using Brahmin Solutions."
          </p>
          <div>
            <p className="font-semibold text-slate-900">Andrea Rodstand</p>
            <p className="text-sm text-slate-500">Sfoglini Pasta</p>
          </div>
        </div>
      </section>

      {/* Related features */}
      <section className="py-section bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Related features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <Link key={r.href} href={r.href} className="group bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md hover:border-slate-300 transition-all">
                <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">{r.label}</h3>
                <p className="text-sm text-slate-500 mb-4">{r.desc}</p>
                <span className="text-sm font-semibold text-primary-600 flex items-center gap-1">Learn more <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  )
}
