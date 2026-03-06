'use client'

import { m } from 'framer-motion'

const FactoryIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
  </svg>
)

const TruckIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
  </svg>
)

const CartIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
  </svg>
)

const cards = [
  {
    icon: <FactoryIcon />,
    iconBg: 'bg-primary-600 text-white',
    cardAccent: 'hover:border-primary-200 hover:bg-primary-50/30',
    headline: 'You make it',
    badge: 'In-house manufacturing',
    badgeStyle: 'bg-primary-50 text-primary-700 border-primary-200',
    industries: ['Food & Beverage', 'Cosmetics', 'Supplements', 'Hardware'],
    body: 'Track production, BOMs, and real-time costs across your shop floor. Know exactly what\'s being made, what it costs, and when it ships.',
    highlights: ['Bill of Materials (BOM)', 'Work order tracking', 'Real-time cost visibility'],
    checkColor: 'text-primary-500',
  },
  {
    icon: <TruckIcon />,
    iconBg: 'bg-violet-600 text-white',
    cardAccent: 'hover:border-violet-200 hover:bg-violet-50/30',
    headline: 'You move it',
    badge: 'Distribution & 3PL',
    badgeStyle: 'bg-violet-50 text-violet-700 border-violet-200',
    industries: ['Wholesale', '3PL', 'Co-manufacturing', 'Import'],
    body: 'See inventory across every warehouse—even ones you don\'t own. Sync with 3PLs and co-manufacturers without spreadsheet chaos.',
    highlights: ['Multi-location inventory', '3PL & co-mfg sync', 'Real-time visibility'],
    checkColor: 'text-violet-500',
  },
  {
    icon: <CartIcon />,
    iconBg: 'bg-accent-500 text-white',
    cardAccent: 'hover:border-accent-200 hover:bg-accent-50/30',
    headline: 'You sell it',
    badge: 'Wholesale & DTC',
    badgeStyle: 'bg-accent-50 text-accent-700 border-accent-200',
    industries: ['B2B Wholesale', 'Shopify DTC', 'Faire', 'Amazon'],
    body: 'Sync with Shopify, manage custom price lists, and let B2B customers order 24/7 through your portal.',
    highlights: ['Shopify integration', 'Custom price lists', 'B2B self-service portal'],
    checkColor: 'text-accent-500',
  },
]

export default function WhoItsFor() {
  return (
    <section className="py-section bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 mb-4">Built for you</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Built for how you work
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto">
            Whether you make it, move it, or sell it—Brahmin has the workflow for you.
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
              className={`group relative bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${card.cardAccent}`}
            >
              {/* Icon — 48×48, no background div */}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl ${card.iconBg} shadow-md group-hover:scale-105 transition-transform duration-300`}>
                {card.icon}
              </div>

              {/* Badge — 16px below icon */}
              <div className="mt-4">
                <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full border ${card.badgeStyle}`}>
                  {card.badge}
                </span>
              </div>

              {/* Industry tags — 16px below badge */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {card.industries.map((ind) => (
                  <span key={ind} className="text-xs text-slate-400 bg-slate-50 border border-slate-200 rounded-full px-2 py-0.5">
                    {ind}
                  </span>
                ))}
              </div>

              {/* Headline — 16px below tags */}
              <h3 className="mt-4 text-xl font-bold text-slate-900 leading-snug">
                {card.headline}
              </h3>

              {/* Body — 8px below headline */}
              <p className="mt-2 text-slate-500 leading-relaxed text-sm">
                {card.body}
              </p>

              {/* Highlights */}
              <ul className="mt-5 space-y-2 pt-4 border-t border-slate-100">
                {card.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-sm text-slate-600">
                    <svg className={`w-4 h-4 ${card.checkColor} shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {h}
                  </li>
                ))}
              </ul>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  )
}
