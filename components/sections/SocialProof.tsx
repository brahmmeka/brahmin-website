import Link from 'next/link'

const caseStudies = [
  {
    company: 'Sfoglini Pasta',
    industry: 'Food Manufacturing',
    result: '$87,500',
    resultLabel: 'in recall costs avoided',
    context: 'Full lot traceability caught a supplier issue before it shipped.',
    quote: 'Brahmin gave us visibility we didn\'t know we were missing. We caught a contamination risk before anything left the warehouse.',
    author: 'Steve Gonzalez',
    role: 'Co-founder',
    href: '/customers',
    gradient: 'from-orange-500 to-amber-400',
    iconBg: 'bg-orange-100 text-orange-600',
  },
  {
    company: 'Bold Distribution',
    industry: 'Wholesale Distribution',
    result: '15 hrs/week',
    resultLabel: 'saved per team member',
    context: 'Automated inventory sync eliminated manual data entry.',
    quote: 'We eliminated an entire category of busywork. The team now focuses on actual growth instead of updating spreadsheets.',
    author: 'Maria Chen',
    role: 'Operations Manager',
    href: '/customers',
    gradient: 'from-primary-600 to-blue-400',
    iconBg: 'bg-primary-100 text-primary-600',
  },
  {
    company: 'Nefaire',
    industry: 'Cosmetics Manufacturing',
    result: '6×',
    resultLabel: 'more orders handled',
    context: 'B2B portal let customers self-serve instead of calling in orders.',
    quote: 'Our sales team used to spend half their day taking orders by phone. Now they focus on new accounts. Revenue is up 40%.',
    author: 'Ashley Park',
    role: 'Head of Sales',
    href: '/customers',
    gradient: 'from-violet-600 to-purple-400',
    iconBg: 'bg-violet-100 text-violet-600',
  },
]

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function SocialProof() {
  return (
    <section className="py-section bg-slate-900">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
            Customer Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Real results from real manufacturers
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-xl mx-auto">
            Don&apos;t take our word for it. Here&apos;s what our customers have built.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((cs) => (
            <div
              key={cs.company}
              className="group bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-slate-500 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-900 flex flex-col"
            >
              {/* Result banner */}
              <div className={`bg-gradient-to-r ${cs.gradient} p-6`}>
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">
                  {cs.industry}
                </span>
                <div className="text-4xl font-bold text-white">{cs.result}</div>
                <div className="text-white/80 text-sm mt-0.5">{cs.resultLabel}</div>
                <p className="text-white/70 text-xs mt-2 leading-relaxed">{cs.context}</p>
              </div>

              {/* Quote */}
              <div className="p-6 flex flex-col flex-1">
                <StarRating />
                <blockquote className="mt-4 text-slate-300 text-sm leading-relaxed flex-1">
                  &ldquo;{cs.quote}&rdquo;
                </blockquote>

                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold text-white">{cs.author}</div>
                    <div className="text-xs text-slate-400">{cs.role}, {cs.company}</div>
                  </div>
                  <Link
                    href={cs.href}
                    className="text-xs font-semibold text-slate-400 hover:text-white transition-colors flex items-center gap-1"
                  >
                    Read story
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* All customers CTA */}
        <div className="text-center mt-10">
          <Link
            href="/customers"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white font-medium text-sm transition-colors"
          >
            See all customer stories
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
