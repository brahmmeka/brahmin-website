import Link from 'next/link'

const competitors = [
  {
    name: 'Katana',
    tag: 'Poor support response',
    text: 'Frustrated with Katana? Get support that actually responds—in 15 minutes, not 3 days.',
    href: '/compare/katana',
    linkLabel: 'See the comparison',
    accent: 'bg-orange-50 border-orange-200 text-orange-600',
    dot: 'bg-orange-400',
  },
  {
    name: 'Fishbowl',
    tag: 'Legacy desktop software',
    text: 'Outgrowing Fishbowl? Move to cloud without losing your production tracking.',
    href: '/compare/fishbowl',
    linkLabel: 'See the comparison',
    accent: 'bg-blue-50 border-blue-200 text-blue-600',
    dot: 'bg-blue-400',
  },
  {
    name: 'Cin7',
    tag: 'Too complex & expensive',
    text: 'Cin7 too complex (and expensive)? Same features. Simpler interface. Better price.',
    href: '/compare/cin7',
    linkLabel: 'See the comparison',
    accent: 'bg-purple-50 border-purple-200 text-purple-600',
    dot: 'bg-purple-400',
  },
  {
    name: 'Spreadsheets',
    tag: 'Manual data entry',
    text: 'Still on spreadsheets? We\'ll migrate your data and get you live in 21 days.',
    href: '/compare/spreadsheets',
    linkLabel: 'See how it works',
    accent: 'bg-emerald-50 border-emerald-200 text-emerald-600',
    dot: 'bg-emerald-400',
  },
]

export default function SwitchingFrom() {
  return (
    <section className="py-section bg-slate-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Switching from?
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto">
            We help manufacturers escape bad software every day. Here&apos;s how we compare.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {competitors.map((c) => (
            <div
              key={c.name}
              className="group bg-white rounded-2xl border border-slate-200 p-6 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-100 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{c.name}</h3>
                  <span className={`inline-flex items-center gap-1.5 mt-1.5 text-xs font-medium px-2.5 py-1 rounded-full border ${c.accent}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
                    {c.tag}
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-4">{c.text}</p>

              <Link
                href={c.href}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
              >
                {c.linkLabel}
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
