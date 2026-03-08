import type { Metadata } from 'next'
import ROICalculator from '@/components/roi-calculator/ROICalculator'

export const metadata: Metadata = {
  title: 'ROI Calculator | Brahmin Solutions',
  description:
    'See how much you could save by switching from spreadsheets to Brahmin. Calculate your annual savings, hours recovered, and payback period in under 30 seconds.',
}

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Brahmin Solutions ROI Calculator',
  description:
    'Calculate how much you could save by switching from spreadsheets or manual processes to Brahmin inventory management software.',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
}

const faqs = [
  {
    q: 'How are these estimates calculated?',
    a: 'Every number is shown with its source. Time savings are anchored to real Brahmin customer data: on average, customers save 10–12 hours per week. Inventory carrying savings assume 15% buffer stock reduction at a 25% annual carrying rate — consistent with customer-reported outcomes of 15–22% inventory reduction. Stockout savings use 85% reduction, also conservative relative to what customers report. You can see every assumption by clicking "How we calculated this" in the results panel.',
  },
  {
    q: "Why is the payback period so short?",
    a: "Brahmin starts at $199–$499/month — and even conservative savings estimates for most manufacturers are $30,000–$80,000+/year. That math produces short payback periods. It reflects the real economics: you're paying a small fraction of what you recover in time, inventory carrying costs, and lost sales. The 3-year view gives a better sense of cumulative value.",
  },
  {
    q: 'How much does Brahmin cost?',
    a: "Brahmin starts at $199/month for businesses under $1M in revenue (Starter plan) and $499/month for $1M+ businesses (Growth plan). There are no per-order fees, no per-user fees, and no hidden costs. Optional add-ons include Manufacturing Pro ($200/mo), Compliance Essentials ($75/mo), and Planning & Analytics ($100/mo). One-time onboarding services (data migration, on-site training) are available separately.",
  },
  {
    q: 'How long does implementation take?',
    a: "Most customers are live within 3–6 weeks. Every customer gets a dedicated implementation manager who handles data migration and trains your team. No consultants, no 6-month projects.",
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function ROICalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white pt-20 pb-12">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary-100 rounded-full opacity-30 blur-3xl" />
            <div className="absolute top-20 -left-20 w-72 h-72 bg-emerald-100 rounded-full opacity-20 blur-3xl" />
          </div>
          <div className="relative container mx-auto px-6 max-w-7xl text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 mb-4">
              Free ROI calculator
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight max-w-3xl mx-auto">
              See what switching to Brahmin<br />
              <span className="text-slate-400">could save you</span>
            </h1>
            <p className="mt-5 text-lg text-slate-500 max-w-xl mx-auto">
              Choose your depth — from a 30-second estimate to a precise ROI analysis. No email required.
            </p>
            <div className="mt-4 flex items-center justify-center gap-6 text-xs text-slate-400">
              <span>✓ 300+ manufacturers</span>
              <span>✓ From $199/month</span>
              <span>✓ Live in 3–6 weeks</span>
            </div>
          </div>
        </section>

        {/* Calculator */}
        <section className="py-12 bg-slate-50">
          <div className="container mx-auto px-6 max-w-7xl">
            <ROICalculator />
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
                Common questions about Brahmin pricing and ROI
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((f) => (
                <div key={f.q} className="border border-slate-200 rounded-xl p-6">
                  <h3 className="font-semibold text-slate-800 text-sm mb-2">{f.q}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
