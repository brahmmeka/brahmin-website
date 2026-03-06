import type { Metadata } from 'next'
import Link from 'next/link'
import CTA from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'About Us | Brahmin Solutions',
  description:
    'Brahmin Solutions was founded in 2015 to help small manufacturers compete with enterprise-level tools and white-glove support.',
}

const values = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    title: 'Support first',
    description: 'We built Brahmin because we were tired of MRP vendors who sell you software and disappear. Our support team responds in 15 minutes—measured, tracked, and non-negotiable.',
    color: 'text-primary-600 bg-primary-50',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Built for small manufacturers',
    description: 'Not watered-down enterprise software. Not a feature-bloated tool designed for 500-person operations. Everything we build is for companies like yours—lean, efficient, and ready to grow.',
    color: 'text-amber-600 bg-amber-50',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    title: 'Transparency always',
    description: 'Flat pricing. No per-order fees. No surprise invoices. We tell you exactly what implementation looks like before you sign—because we want customers who stay, not just customers who buy.',
    color: 'text-accent-600 bg-accent-50',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: 'We know your name',
    description: 'Our team knows your business, your products, and your workflows. When you call or email, you\'re not starting from scratch. You\'re talking to someone who has context.',
    color: 'text-violet-600 bg-violet-50',
  },
]

const milestones = [
  { year: '2015', event: 'Brahmin Solutions founded to serve small manufacturers underserved by enterprise ERP.' },
  { year: '2017', event: 'Launched multi-location inventory and first QuickBooks integration.' },
  { year: '2019', event: 'Reached 100 customers. Launched B2B customer portal and Shopify sync.' },
  { year: '2021', event: 'Launched mobile warehouse app and batch/lot traceability for food manufacturers.' },
  { year: '2023', event: 'Reached 300+ customers across 15 industries. Expanded to 50+ integrations.' },
  { year: '2025', event: 'Continued growth serving manufacturers up to $50M revenue across North America.' },
]

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white pt-20 pb-20">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary-100 rounded-full opacity-40 blur-3xl" />
        </div>
        <div className="relative container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 mb-4">
              About Us
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-[1.08]">
              We built the software we<br />
              <span className="text-primary-600">wished existed</span>
            </h1>
            <p className="mt-6 text-xl text-slate-500 leading-relaxed max-w-2xl">
              Founded in 2015, Brahmin Solutions exists to give small manufacturers enterprise-level tools without enterprise-level complexity—and the support to actually use them.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { n: '2015', l: 'Year founded' },
              { n: '300+', l: 'Customers' },
              { n: '15 min', l: 'Avg. support response' },
              { n: '21 days', l: 'Avg. implementation' },
            ].map((s) => (
              <div key={s.l} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <div className="text-3xl font-bold text-slate-900">{s.n}</div>
                <div className="text-sm text-slate-500 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-section bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Small manufacturers deserve better
              </h2>
              <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
                <p>
                  In 2015, we watched small manufacturers struggle with the same impossible choice: use spreadsheets and grow out of them, or buy enterprise software that cost six figures and took a year to implement.
                </p>
                <p>
                  We built Brahmin Solutions to fill that gap. Cloud-based MRP and inventory management that a 10-person team can actually use—with support that responds like a real partner, not a ticket queue.
                </p>
                <p>
                  Today, 300+ manufacturers use Brahmin to run their production, manage inventory across multiple locations, connect with the tools they already use, and give their wholesale customers a self-service portal. Average implementation is 21 days. Average support response time is 15 minutes.
                </p>
                <p>
                  Those aren&apos;t marketing claims. They&apos;re measured numbers we&apos;re proud of—and hold ourselves to every day.
                </p>
              </div>
            </div>
            <div className="bg-slate-50 rounded-3xl border border-slate-200 aspect-square flex items-center justify-center">
              <div className="text-center px-8">
                <div className="text-6xl font-bold text-primary-600 mb-2">300+</div>
                <div className="text-slate-500">Manufacturers trust<br />Brahmin Solutions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-section bg-slate-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              What drives us
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${v.color}`}>
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{v.title}</h3>
                <p className="text-slate-500 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-section bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 mb-4">
              Timeline
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              How we got here
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div key={m.year} className={`relative flex gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-12 md:pl-0`}>
                    <div className="text-xs font-bold text-primary-600 uppercase tracking-widest mb-1">{m.year}</div>
                    <p className="text-slate-600 text-sm leading-relaxed">{m.event}</p>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary-600 border-4 border-white shadow -translate-x-1/2 mt-0.5" />
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join us CTA */}
      <CTA />
    </main>
  )
}
