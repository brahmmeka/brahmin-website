const stats = [
  {
    number: '15 min',
    label: 'Average response time',
    sub: '(Yes, really. We measured.)',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: '21 days',
    label: 'Average implementation',
    sub: 'Not 6 months. Not "it depends."',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
  {
    number: '1:1',
    label: 'Dedicated manager',
    sub: 'Your own implementation human.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    number: '24/7',
    label: 'Human support',
    sub: 'Not a chatbot. Actual people.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
]

export default function SupportStats() {
  return (
    <section className="py-section bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 mb-4">
            Our Commitment
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight max-w-3xl mx-auto leading-tight">
            Support that doesn&apos;t make you want to throw your laptop
          </h2>
          <p className="mt-5 text-lg text-slate-500 max-w-2xl mx-auto">
            Most MRP vendors sell you software and disappear. We stick around.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative bg-slate-50 rounded-2xl p-6 border border-slate-200 text-center hover:border-primary-200 hover:bg-primary-50/30 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white border border-slate-200 text-primary-600 mb-4 group-hover:border-primary-200 transition-colors shadow-sm">
                {stat.icon}
              </div>

              {/* Number */}
              <div className="text-4xl md:text-5xl font-bold text-slate-900 leading-none mb-2">
                {stat.number}
              </div>

              {/* Label */}
              <div className="text-sm font-semibold text-slate-700 mb-1.5">
                {stat.label}
              </div>

              {/* Sub */}
              <div className="text-xs text-slate-400 leading-relaxed">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div className="mt-12 bg-primary-600 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-semibold text-lg">See the difference on day one.</p>
            <p className="text-primary-200 text-sm mt-1">We assign your implementation manager before you even sign the contract.</p>
          </div>
          <a
            href="/demo"
            className="shrink-0 bg-white text-primary-700 hover:bg-primary-50 px-7 py-3 rounded-xl font-semibold text-sm transition-colors shadow-sm"
          >
            Book a Demo
          </a>
        </div>
      </div>
    </section>
  )
}
