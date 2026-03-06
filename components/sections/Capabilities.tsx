'use client'

import Link from 'next/link'
import { m, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Factory, Tag, Plug, Users, Smartphone } from 'lucide-react'

const features = [
  {
    icon: MapPin,
    iconBg: 'bg-primary-600',
    headline: 'See stock everywhere',
    body: 'Track inventory across warehouses, 3PLs, and co-manufacturers — in real time, from one dashboard.',
  },
  {
    icon: Factory,
    iconBg: 'bg-violet-600',
    headline: 'Know what it costs to make',
    body: 'Track production costs down to the work order. BOMs, labor, and materials — no more guessing on margins.',
  },
  {
    icon: Tag,
    iconBg: 'bg-orange-500',
    headline: 'Stay recall-ready',
    body: 'Full traceability from raw materials to finished goods. Pull a recall report in minutes, not days.',
  },
  {
    icon: Plug,
    iconBg: 'bg-accent-500',
    headline: 'Connect the tools you already use',
    body: 'QuickBooks, Shopify, ShipStation, and 50+ more. Your data stays in sync without double-entry.',
  },
  {
    icon: Users,
    iconBg: 'bg-blue-600',
    headline: 'Let customers order 24/7',
    body: 'Give wholesale accounts a portal to check inventory, place orders, and pay — without calling you.',
  },
  {
    icon: Smartphone,
    iconBg: 'bg-pink-600',
    headline: 'Run the floor from anywhere',
    body: 'Warehouse and shop floor — receive, pick, pack, ship, and track production from any device with barcode scanning.',
  },
]

function FeatureCard({ icon: Icon, iconBg, headline, body, delay }: typeof features[0] & { delay: number }) {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: 'easeOut', delay }}
      className="group bg-slate-50 hover:bg-white rounded-2xl border border-slate-200 hover:border-slate-300 p-7 hover:shadow-lg transition-all duration-300"
    >
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${iconBg} mb-5 shadow-md group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2">{headline}</h3>
      <p className="text-slate-500 text-sm leading-relaxed">{body}</p>
    </m.div>
  )
}

export default function Capabilities() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="py-section bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 mb-4">Features</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Everything you need. Nothing you don&apos;t.
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto">
            Purpose-built for small manufacturers. Powerful enough to run your whole operation.
          </p>
        </m.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <FeatureCard key={f.headline} {...f} delay={i * 0.07} />
          ))}
        </div>

        <m.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-10"
        >
          <Link
            href="/features"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors group"
          >
            See all features
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </m.div>
      </div>
    </section>
  )
}
