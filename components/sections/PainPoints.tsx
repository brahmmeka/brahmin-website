'use client'

import { m } from 'framer-motion'

const ChartIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
)

const FireIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
  </svg>
)

const WarningIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
  </svg>
)

const cards = [
  {
    icon: <ChartIcon />,
    iconBg: 'bg-orange-100 text-orange-600',
    headline: 'Decisions without data',
    body: "You're guessing at inventory levels, production costs, and lead times. By the time the spreadsheet is updated, the decision is already late.",
  },
  {
    icon: <FireIcon />,
    iconBg: 'bg-red-100 text-red-600',
    headline: 'Putting out fires all day',
    body: "Stockouts, mis-picks, and production delays eat your week. You spend more time reacting than running your business.",
  },
  {
    icon: <WarningIcon />,
    iconBg: 'bg-amber-100 text-amber-600',
    headline: 'Nobody trusts the numbers',
    body: "Ops has one count. Warehouse has another. Finance has a third. Without a single source of truth, every conversation starts with arguing about data.",
  },
]

export default function PainPoints() {
  return (
    <section className="py-section relative overflow-hidden" style={{ backgroundColor: '#fef9f7' }}>
      {/* Subtle tinted background */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50/40 to-transparent pointer-events-none" />

      <div className="relative container mx-auto px-6 max-w-7xl">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14 max-w-3xl mx-auto"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-orange-500 mb-4">Sound familiar?</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            Stuck between spreadsheets and software you&apos;ll never finish implementing?
          </h2>
          <p className="mt-5 text-lg text-slate-500 leading-relaxed">
            Most small manufacturers are caught in the same trap: too complex for spreadsheets, too small for enterprise software. There&apos;s a better way.
          </p>
        </m.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <m.div
              key={card.headline}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.1 }}
              className="group bg-white rounded-2xl border border-orange-100 p-6 md:p-8 shadow-sm hover:shadow-lg hover:shadow-orange-50 hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${card.iconBg} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{card.headline}</h3>
              <p className="text-slate-500 leading-relaxed">{card.body}</p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  )
}
