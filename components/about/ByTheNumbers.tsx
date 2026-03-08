const stats = [
  {
    value: '2019',
    label: 'Serving customers',
    sub: 'Building for the long haul',
    color: 'text-primary-600',
  },
  {
    value: '300+',
    label: 'Manufacturers',
    sub: 'From $500K to $50M in revenue',
    color: 'text-accent-600',
  },
  {
    value: '<15 min',
    label: 'Support response',
    sub: 'Measured, not promised',
    color: 'text-accent-600',
  },
  {
    value: '0',
    label: 'VC investors',
    sub: 'Independently owned, customer-funded',
    color: 'text-primary-600',
  },
]

export default function ByTheNumbers() {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-100">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 mb-4">
            By the numbers
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Seven years of doing things right
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded-2xl border border-slate-200 p-8 text-center shadow-sm">
              <div className={`text-4xl font-bold ${s.color} mb-2`}>{s.value}</div>
              <div className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-1">{s.label}</div>
              <div className="text-xs text-slate-500 leading-snug">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
