import type { Metadata } from 'next'
import Link from 'next/link'
import ContactFAQ from '@/components/contact/ContactFAQ'
import ContactForm from '@/components/contact/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us | Brahmin Solutions',
  description:
    'Get in touch with Brahmin Solutions. Book a demo, ask a question, or get support. Real people, real responses — no ticket queues.',
}

const routingCards = [
  {
    icon: '📅',
    iconBg: 'bg-emerald-50',
    title: 'Book a demo',
    body: 'See Brahmin live with your actual products and workflows. A 30–45 minute walkthrough with a real person — no slide deck.',
    cta: 'Book a demo',
    href: '/demo',
    external: false,
    ctaStyle: 'bg-emerald-600 hover:bg-emerald-700 text-white',
  },
  {
    icon: '💬',
    iconBg: 'bg-primary-50',
    title: 'Get support',
    body: 'Already a customer? Reach our support team directly. Average response time is under 15 minutes during business hours.',
    cta: 'Visit help center',
    href: 'https://support.brahmin-solutions.com/en/',
    external: true,
    ctaStyle: 'bg-primary-600 hover:bg-primary-700 text-white',
    subLink: { label: 'support@brahmin-solutions.com', href: 'mailto:support@brahmin-solutions.com' },
  },
  {
    icon: '🤝',
    iconBg: 'bg-violet-50',
    title: 'Partner with us',
    body: 'Resellers, agencies, and consultants who work with small manufacturers — we\'d love to talk about building something together.',
    cta: 'Email partnerships',
    href: 'mailto:partnerships@brahmin-solutions.com',
    external: true,
    ctaStyle: 'border border-slate-200 text-slate-700 hover:bg-slate-50',
  },
]

const stats = [
  { n: '300+', l: 'Manufacturers' },
  { n: '<15 min', l: 'Customer support response' },
  { n: '21 days', l: 'Avg. go-live' },
]

export default function ContactPage() {
  return (
    <main>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white pt-20 pb-16">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary-100 rounded-full opacity-30 blur-3xl" />
          <div className="absolute top-20 -left-20 w-72 h-72 bg-emerald-100 rounded-full opacity-25 blur-3xl" />
        </div>
        <div className="relative container mx-auto px-6 max-w-7xl text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 mb-4">
            Contact us
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-[1.08] max-w-3xl mx-auto">
            We&rsquo;re here —{' '}
            <span className="text-slate-400">reach out anytime</span>
          </h1>
          <p className="mt-6 text-xl text-slate-500 max-w-2xl mx-auto">
            Whether you have a question, need a demo, or just want to say hello — our team responds fast. Real people, not a ticket queue.
          </p>

          {/* Stats bar */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
            {stats.map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-2xl font-bold text-slate-900">{s.n}</div>
                <div className="text-sm text-slate-500 mt-0.5">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Routing cards */}
      <section className="py-section bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-6">
            {routingCards.map((card) => (
              <div
                key={card.title}
                className="bg-slate-50 rounded-2xl border border-slate-200 p-8 flex flex-col"
              >
                <div className={`w-12 h-12 rounded-xl ${card.iconBg} flex items-center justify-center text-2xl mb-5`}>
                  {card.icon}
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-3">{card.title}</h2>
                <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-6">{card.body}</p>
                {card.external ? (
                  <a
                    href={card.href}
                    target={card.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${card.ctaStyle}`}
                  >
                    {card.cta}
                  </a>
                ) : (
                  <Link
                    href={card.href}
                    className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${card.ctaStyle}`}
                  >
                    {card.cta}
                  </Link>
                )}
                {card.subLink && (
                  <a
                    href={card.subLink.href}
                    className="mt-3 text-xs text-primary-600 hover:text-primary-700 text-center"
                  >
                    {card.subLink.label}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General contact form */}
      <section className="py-section bg-slate-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left */}
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 mb-4">
                Send us a message
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
                Or just send us a note
              </h2>
              <p className="text-lg text-slate-500 mb-8">
                We read every message and reply within one business day. If you&rsquo;re already a customer, our dedicated support team responds in under 15 minutes.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800 text-sm">Same business day</div>
                    <div className="text-slate-500 text-sm">We reply to all messages within one business day</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800 text-sm">Real people, not bots</div>
                    <div className="text-slate-500 text-sm">Every reply comes from a named team member</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800 text-sm">support@brahmin-solutions.com</div>
                    <div className="text-slate-500 text-sm">Or reach us directly by email</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-section bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 mb-4">
              FAQ
            </span>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              Common questions
            </h2>
          </div>
          <ContactFAQ />
        </div>
      </section>

    </main>
  )
}
