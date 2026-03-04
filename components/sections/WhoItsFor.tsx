const FactoryIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
  </svg>
)

const WarehouseIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
  </svg>
)

const CartIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
  </svg>
)

const cards = [
  {
    icon: <FactoryIcon />,
    iconBg: 'bg-primary-50 text-primary-600',
    badge: 'In-House Manufacturing',
    headline: 'Making products in-house?',
    body: 'Track production, BOMs, and real-time costs across your shop floor. Know exactly what\'s being made, what it costs, and when it ships.',
    highlights: ['Bill of Materials (BOM)', 'Work order tracking', 'Real-time cost visibility'],
  },
  {
    icon: <WarehouseIcon />,
    iconBg: 'bg-violet-50 text-violet-600',
    badge: 'Co-Manufacturing & 3PL',
    headline: 'Working with co-manufacturers or 3PLs?',
    body: 'See inventory across every warehouse—even ones you don\'t own. Sync with partners without spreadsheet chaos.',
    highlights: ['Multi-location inventory', '3PL & co-mfg sync', 'Real-time visibility'],
  },
  {
    icon: <CartIcon />,
    iconBg: 'bg-accent-50 text-accent-600',
    badge: 'Wholesale & DTC',
    headline: 'Selling wholesale and direct-to-consumer?',
    body: 'Sync with Shopify, manage custom price lists, and let B2B customers order 24/7 through your portal.',
    highlights: ['Shopify integration', 'Custom price lists', 'B2B self-service portal'],
  },
]

export default function WhoItsFor() {
  return (
    <section className="py-section bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Built for how you actually work
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto">
            Whether you make it, store it, or sell it—Brahmin has the workflow for you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.badge}
              className="group relative bg-white rounded-2xl border border-slate-200 p-7 hover:border-primary-200 hover:shadow-xl hover:shadow-slate-100 transition-all duration-300"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${card.iconBg} mb-5`}>
                {card.icon}
              </div>

              {/* Badge */}
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                {card.badge}
              </span>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 leading-snug mb-3">
                {card.headline}
              </h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {card.body}
              </p>

              {/* Highlights */}
              <ul className="mt-5 space-y-2">
                {card.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-sm text-slate-600">
                    <svg className="w-4 h-4 text-accent-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
