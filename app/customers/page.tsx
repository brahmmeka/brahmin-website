import type { Metadata } from 'next'
import Link from 'next/link'
import CTA from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'Customer Stories | Brahmin Solutions',
  description:
    'See how 300+ manufacturers use Brahmin Solutions to save time, reduce costs, and grow their businesses. Real results from real customers.',
}

const featuredStories = [
  {
    company: 'Sfoglini Pasta',
    industry: 'Food Manufacturing',
    result: '$87,500 in recall costs avoided',
    context: 'Full lot traceability caught a supplier issue before it shipped.',
    quote: 'Before Brahmin, a recall would have cost us days of manual research and thousands in product we\'d have to pull. Now we can run a full traceability report in minutes.',
    author: 'Sarah F.',
    role: 'Operations Manager',
    stats: [
      { n: '$87.5K', l: 'Recall costs avoided' },
      { n: '3 weeks', l: 'Implementation' },
      { n: '100%', l: 'Lot traceability' },
    ],
    color: 'from-rose-50 to-white',
    badge: 'Food Manufacturing',
    badgeColor: 'text-rose-600 bg-rose-50 border-rose-200',
  },
  {
    company: 'Bold Distribution',
    industry: 'Wholesale Distribution',
    result: '15 hours/week saved per team',
    context: 'Automated inventory sync eliminated manual data entry.',
    quote: 'We were spending 15+ hours a week just reconciling inventory between our warehouse, Shopify, and QuickBooks. Brahmin eliminated all of that.',
    author: 'Marcus T.',
    role: 'VP Operations',
    stats: [
      { n: '15 hrs', l: 'Saved per week' },
      { n: '3', l: 'Systems replaced' },
      { n: '2x', l: 'Order throughput' },
    ],
    color: 'from-primary-50 to-white',
    badge: 'Wholesale Distribution',
    badgeColor: 'text-primary-600 bg-primary-50 border-primary-200',
  },
  {
    company: 'Nefaire',
    industry: 'Cosmetics Manufacturing',
    result: '6x more orders handled',
    context: 'B2B portal let customers self-serve instead of calling in orders.',
    quote: 'Our wholesale customers used to call or email every single order. Now they log into the portal, see their custom pricing, check stock, and submit—without anyone on our team involved.',
    author: 'Elena R.',
    role: 'Founder & CEO',
    stats: [
      { n: '6x', l: 'Order volume increase' },
      { n: '80%', l: 'Self-serve orders' },
      { n: '24/7', l: 'Customer ordering' },
    ],
    color: 'from-violet-50 to-white',
    badge: 'Cosmetics Manufacturing',
    badgeColor: 'text-violet-600 bg-violet-50 border-violet-200',
  },
]

const miniTestimonials = [
  {
    quote: 'Implementation was genuinely 21 days. I didn\'t believe it when they told me.',
    author: 'James P.',
    company: 'Pacific Foods',
  },
  {
    quote: '15-minute support response time is real. I\'ve tested it many times.',
    author: 'Alicia M.',
    company: 'Summit Manufacturing',
  },
  {
    quote: 'Finally a system that doesn\'t require an IT team to maintain.',
    author: 'David K.',
    company: 'Coastal Supplements',
  },
  {
    quote: 'Moving from spreadsheets was less painful than I expected. They handled everything.',
    author: 'Priya S.',
    company: 'Apex Apparel',
  },
  {
    quote: 'The B2B portal alone paid for the software in the first month.',
    author: 'Tom H.',
    company: 'Heritage Wholesale',
  },
  {
    quote: 'I switched from Katana and wish I had done it sooner.',
    author: 'Rachel N.',
    company: 'Bright Labs',
  },
]

const industries = [
  { name: 'Food & Beverage', count: '80+', color: 'text-rose-600 bg-rose-50 border-rose-200' },
  { name: 'Cosmetics & Beauty', count: '40+', color: 'text-violet-600 bg-violet-50 border-violet-200' },
  { name: 'Wholesale Distribution', count: '60+', color: 'text-primary-600 bg-primary-50 border-primary-200' },
  { name: 'General Manufacturing', count: '70+', color: 'text-slate-600 bg-slate-50 border-slate-200' },
  { name: 'Supplements & Health', count: '25+', color: 'text-accent-600 bg-accent-50 border-accent-200' },
  { name: 'Apparel & Textiles', count: '20+', color: 'text-amber-600 bg-amber-50 border-amber-200' },
]

export default function CustomersPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white pt-20 pb-16">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary-100 rounded-full opacity-40 blur-3xl" />
        </div>
        <div className="relative container mx-auto px-6 max-w-7xl text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 mb-4">
            Customer Stories
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-[1.08]">
            Real results from<br />
            <span className="text-slate-400">real manufacturers</span>
          </h1>
          <p className="mt-6 text-xl text-slate-500 max-w-xl mx-auto">
            300+ manufacturers trust Brahmin Solutions. Here&apos;s what they say.
          </p>
        </div>
      </section>

      {/* Industry pills */}
      <section className="border-y border-slate-200 bg-white py-6">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((ind) => (
              <span
                key={ind.name}
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border ${ind.color}`}
              >
                {ind.name}
                <span className="font-bold">{ind.count}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured stories */}
      <section className="py-section bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 mb-4">
              Featured
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              In-depth customer stories
            </h2>
          </div>

          <div className="space-y-16">
            {featuredStories.map((story, i) => (
              <div
                key={story.company}
                className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Card */}
                <div className={`bg-gradient-to-br ${story.color} rounded-3xl border border-slate-200 p-8 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <span className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full border mb-6 ${story.badgeColor}`}>
                    {story.badge}
                  </span>
                  <div className="text-4xl font-bold text-slate-900 mb-2">{story.result}</div>
                  <p className="text-slate-500 mb-8">{story.context}</p>
                  <div className="grid grid-cols-3 gap-4">
                    {story.stats.map((s) => (
                      <div key={s.l} className="bg-white rounded-xl border border-slate-200 p-4 text-center shadow-sm">
                        <div className="text-xl font-bold text-slate-900">{s.n}</div>
                        <div className="text-xs text-slate-500 mt-0.5">{s.l}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">{story.company}</h3>
                  <p className="text-sm text-slate-400 mb-6">{story.industry}</p>
                  <blockquote className="text-lg text-slate-700 leading-relaxed italic border-l-4 border-primary-200 pl-6">
                    &ldquo;{story.quote}&rdquo;
                  </blockquote>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold text-sm">
                      {story.author.slice(0, 1)}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">{story.author}</div>
                      <div className="text-sm text-slate-500">{story.role}, {story.company}</div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Link
                      href="/demo"
                      className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-sm transition-colors"
                    >
                      Get results like this →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini testimonials */}
      <section className="py-section bg-slate-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              What customers are saying
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {miniTestimonials.map((t) => (
              <div key={t.author} className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-slate-700 text-sm leading-relaxed italic mb-4">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 text-xs font-bold">
                    {t.author.slice(0, 1)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">{t.author}</div>
                    <div className="text-xs text-slate-400">{t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  )
}
