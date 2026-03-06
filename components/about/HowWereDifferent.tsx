const cards = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
    headline: 'Built to last',
    body: "No VC pressure to chase growth at all costs. We've been independently owned since 2015, and we're not going anywhere. Your success is our only metric.",
    color: 'text-primary-600 bg-primary-50',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    headline: 'Real humans, real help',
    body: "Our average support response is under 15 minutes — not because we promise it, but because we actually do it. You'll never talk to a chatbot.",
    color: 'text-accent-600 bg-accent-50',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    headline: 'Made for manufacturers',
    body: "We didn't bolt manufacturing features onto generic inventory software. Brahmin was built from day one for production, BOMs, lot tracking, and traceability.",
    color: 'text-violet-600 bg-violet-50',
  },
]

export default function HowWereDifferent() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 mb-4">
            Why manufacturers choose us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Why manufacturers choose Brahmin
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div key={c.headline} className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${c.color}`}>
                {c.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{c.headline}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
