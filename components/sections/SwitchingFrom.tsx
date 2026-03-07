'use client'

import Link from 'next/link'
import { m } from 'framer-motion'

const SheetsIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 9.375v1.5m1.5-3.75C19.496 8.25 20 8.754 20 9.375v1.5m0 0v5.25m0-5.25C20 9.004 19.496 8.5 18.875 8.5" />
  </svg>
)

const CubeIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
  </svg>
)

const BuildingIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
  </svg>
)

const competitors = [
  {
    icon: <SheetsIcon />,
    iconBg: 'bg-emerald-600 text-white',
    topBorder: 'border-t-emerald-400',
    name: 'Excel & Google Sheets',
    tag: 'Manual data entry',
    tagStyle: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    text: "Still on spreadsheets? We'll migrate your data and get you live in as little as 3 weeks — no 6-month implementation project.",
    href: '/compare/spreadsheets',
    linkLabel: 'See how it works',
  },
  {
    icon: <CubeIcon />,
    iconBg: 'bg-orange-500 text-white',
    topBorder: 'border-t-orange-400',
    name: 'Other MRP/inventory software',
    tag: 'Poor support or wrong fit',
    tagStyle: 'bg-orange-50 text-orange-700 border-orange-200',
    text: 'Frustrated with Katana, Fishbowl, or Cin7? Same features, simpler interface, and support that responds in 15 minutes — not 3 days.',
    href: '/compare/katana',
    linkLabel: 'See the comparison',
  },
  {
    icon: <BuildingIcon />,
    iconBg: 'bg-violet-600 text-white',
    topBorder: 'border-t-violet-400',
    name: 'Enterprise ERP',
    tag: 'Too complex & expensive',
    tagStyle: 'bg-violet-50 text-violet-700 border-violet-200',
    text: "Enterprise software is built for enterprises. If you're a small manufacturer, you're paying for features you'll never use — and support you'll never get.",
    href: '/compare/fishbowl',
    linkLabel: 'See the comparison',
  },
]

export default function SwitchingFrom() {
  return (
    <section className="py-section bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 mb-4">Migration</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            You&apos;re not the first to make the switch
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto">
            We help manufacturers escape bad software every day. Here&apos;s how we compare.
          </p>
        </m.div>

        <div className="grid md:grid-cols-3 gap-6">
          {competitors.map((c, i) => (
            <m.div
              key={c.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.1 }}
              className={`group bg-white rounded-2xl border-t-4 border border-slate-200 ${c.topBorder} p-7 hover:shadow-xl hover:shadow-slate-100 hover:-translate-y-1 transition-all duration-300`}
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${c.iconBg} mb-5 shadow-md group-hover:scale-105 transition-transform`}>
                {c.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{c.name}</h3>
              <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full border mb-4 ${c.tagStyle}`}>
                {c.tag}
              </span>
              <p className="text-slate-500 text-sm leading-relaxed mb-5">{c.text}</p>
              <Link
                href={c.href}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors group/link"
              >
                {c.linkLabel}
                <svg className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  )
}
