'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef } from 'react'

const featureGroups = [
  {
    label: 'Inventory & operations',
    items: [
      { icon: '📍', label: 'Inventory Management', desc: 'Real-time stock across all locations', href: '/features/inventory' },
      { icon: '🛒', label: 'Purchasing', desc: 'Automate reorders and manage vendors', href: '/features/purchasing' },
      { icon: '📦', label: 'Warehouse Management', desc: 'Bin locations, pick/pack, and transfers', href: '/features/warehouse' },
    ],
  },
  {
    label: 'Production & compliance',
    items: [
      { icon: '🏭', label: 'Production & Manufacturing', desc: 'BOMs, work orders, and true cost tracking', href: '/features/production' },
      { icon: '🏷️', label: 'Traceability & Compliance', desc: 'Lot tracking and instant recall reports', href: '/features/traceability' },
      { icon: '📊', label: 'MRP & Forecasting', desc: 'Know what to make before you run out', href: '/features/mrp' },
    ],
  },
]

const featureExtras = [
  { icon: '👥', label: 'B2B Portal', desc: 'Let wholesale customers order 24/7', href: '/features/b2b-portal' },
  { icon: '📱', label: 'Mobile App', desc: 'Receive, pick, and ship from any device', href: '/features/mobile' },
]

const industries = [
  { icon: '🥫', label: 'Food & Beverage', desc: 'Batch tracking, expiration dates, and compliance', href: '/industries/food-beverage' },
  { icon: '🏗️', label: 'Manufacturing', desc: 'Production planning for discrete manufacturers', href: '/industries/manufacturing' },
  { icon: '🚚', label: 'Wholesale Distribution', desc: 'Multi-channel inventory and order management', href: '/industries/wholesale-distribution' },
  { icon: '💄', label: 'Cosmetics & Beauty', desc: 'Formula management and lot traceability', href: '/industries/cosmetics' },
  { icon: '💊', label: 'Supplements & Nutraceuticals', desc: 'Compliance tracking and expiration management', href: '/industries/supplements' },
  { icon: '👕', label: 'Apparel & Textiles', desc: 'Size/color variants and seasonal inventory', href: '/industries/apparel' },
]

const compareLinks = [
  { label: 'vs Spreadsheets', href: '/compare/spreadsheets' },
  { label: 'vs Katana MRP', href: '/compare/katana' },
  { label: 'vs Fishbowl', href: '/compare/fishbowl' },
  { label: 'vs NetSuite', href: '/compare/netsuite' },
  { label: 'vs Cin7', href: '/compare/cin7' },
  { label: 'vs Wherefour', href: '/compare/wherefour' },
  { label: 'vs MRPeasy', href: '/compare/mrpeasy' },
  { label: 'vs inFlow', href: '/compare/inflow' },
  { label: 'vs SAP Business One', href: '/compare/sap-business-one' },
  { label: 'vs Odoo', href: '/compare/odoo' },
  { label: 'vs CraftyBase', href: '/compare/craftybase' },
]

const learnLinks = [
  { icon: '✍️', label: 'Blog', href: '/blog', iconBg: 'bg-blue-50 text-blue-600' },
  { icon: '❓', label: 'FAQ', href: '/faq', iconBg: 'bg-sky-50 text-sky-600' },
  { icon: '💡', label: 'Help center', href: 'https://support.brahmin-solutions.com/en/', iconBg: 'bg-slate-100 text-slate-600', external: true },
]

const companyLinks = [
  { icon: '🏢', label: 'About us', href: '/about', iconBg: 'bg-primary-50 text-primary-600' },
  { icon: '📞', label: 'Contact us', href: '/contact', iconBg: 'bg-orange-50 text-orange-600' },
  { icon: '📅', label: 'Book a demo', href: '/demo', iconBg: 'bg-emerald-50 text-emerald-700' },
]

type OpenMenu = 'features' | 'industries' | 'resources' | null

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-3 h-3 transition-transform duration-150 ${open ? 'rotate-180' : ''}`}
      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )
}

export default function Header() {
  const [openMenu, setOpenMenu] = useState<OpenMenu>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSection, setMobileSection] = useState<string | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  function hoverOpen(menu: OpenMenu) {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpenMenu(menu)
  }

  function hoverClose() {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120)
  }

  function closeAll() {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpenMenu(null)
    setMobileOpen(false)
    setMobileSection(null)
  }

  function toggleMobile(section: string) {
    setMobileSection(prev => prev === section ? null : section)
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="container mx-auto px-6 max-w-7xl relative">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" onClick={closeAll} className="flex items-center shrink-0">
            <Image
              src="/images/logo.webp"
              alt="Brahmin Solutions"
              width={160}
              height={40}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 h-full">

            {/* Features */}
            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => hoverOpen('features')}
              onMouseLeave={hoverClose}
            >
              <button
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  openMenu === 'features' ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Features <Chevron open={openMenu === 'features'} />
              </button>

              {openMenu === 'features' && (
                <div
                  className="absolute top-full left-0 mt-1.5 w-[860px] bg-white rounded-2xl shadow-xl border border-slate-200/80 overflow-hidden z-50"
                  onMouseEnter={() => hoverOpen('features')}
                  onMouseLeave={hoverClose}
                >
                  <div className="flex">
                    {/* Left: grouped features */}
                    <div className="flex-1 p-6">
                      <div className="grid grid-cols-2 gap-x-4">
                        {featureGroups.map(group => (
                          <div key={group.label}>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">
                              {group.label}
                            </p>
                            <div className="space-y-0.5 mb-5">
                              {group.items.map(item => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  onClick={closeAll}
                                  className="flex items-start gap-3 px-2.5 py-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                                >
                                  <span className="text-base mt-0.5 shrink-0">{item.icon}</span>
                                  <div>
                                    <div className="text-sm font-semibold text-slate-800 group-hover:text-slate-900 leading-tight">
                                      {item.label}
                                    </div>
                                    <div className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                                      {item.desc}
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Bottom extras row */}
                      <div className="border-t border-slate-100 pt-4">
                        <div className="flex items-center gap-1">
                          {featureExtras.map(item => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={closeAll}
                              className="flex items-center gap-2.5 px-2.5 py-2 rounded-xl hover:bg-slate-50 transition-colors group flex-1"
                            >
                              <span className="text-sm shrink-0">{item.icon}</span>
                              <div>
                                <div className="text-sm font-semibold text-slate-800 group-hover:text-slate-900 leading-tight">
                                  {item.label}
                                </div>
                                <div className="text-xs text-slate-400">{item.desc}</div>
                              </div>
                            </Link>
                          ))}
                          <Link
                            href="/features"
                            onClick={closeAll}
                            className="ml-auto text-xs font-semibold text-emerald-700 hover:text-emerald-700 whitespace-nowrap transition-colors px-2"
                          >
                            See all features →
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Right: callout panel */}
                    <div className="w-52 bg-emerald-600 p-5 flex flex-col justify-between shrink-0">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-300 mb-3">
                          Implementation
                        </p>
                        <p className="text-white font-bold text-lg leading-snug mb-2">
                          Go live in 3–6 weeks
                        </p>
                        <p className="text-emerald-100 text-xs leading-relaxed">
                          Dedicated implementation manager. Real humans on support — not a ticket queue.
                        </p>
                      </div>
                      <div className="mt-5">
                        <div className="flex mb-1.5">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-3 h-3 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-emerald-100 text-xs italic leading-relaxed">
                          &ldquo;Support responds in minutes, not days.&rdquo;
                        </p>
                        <p className="text-emerald-300 text-[10px] mt-1">— Tameer, Bakkar Sweets</p>
                        <Link
                          href="/demo"
                          onClick={closeAll}
                          className="mt-4 block w-full text-center bg-white text-emerald-700 text-xs font-bold py-2 rounded-lg hover:bg-emerald-50 transition-colors"
                        >
                          Book a demo
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Industries */}
            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => hoverOpen('industries')}
              onMouseLeave={hoverClose}
            >
              <button
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  openMenu === 'industries' ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Industries <Chevron open={openMenu === 'industries'} />
              </button>

              {openMenu === 'industries' && (
                <div
                  className="absolute top-full left-0 mt-1.5 w-[680px] bg-white rounded-2xl shadow-xl border border-slate-200/80 p-5 z-50"
                  onMouseEnter={() => hoverOpen('industries')}
                  onMouseLeave={hoverClose}
                >
                  <div className="grid grid-cols-2 gap-1">
                    {industries.map(i => (
                      <Link
                        key={i.href}
                        href={i.href}
                        onClick={closeAll}
                        className="flex items-start gap-3.5 px-3 py-3 rounded-xl hover:bg-slate-50 transition-colors group"
                      >
                        <span className="text-xl mt-0.5 shrink-0">{i.icon}</span>
                        <div>
                          <div className="text-sm font-semibold text-slate-800 group-hover:text-slate-900">
                            {i.label}
                          </div>
                          <div className="text-xs text-slate-400 mt-0.5 leading-relaxed">{i.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-3 pt-3 border-t border-slate-100">
                    <Link
                      href="/industries"
                      onClick={closeAll}
                      className="text-sm font-semibold text-emerald-700 hover:text-emerald-700 transition-colors"
                    >
                      See all industries →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Integrations — direct link */}
            <Link
              href="/integrations"
              onClick={closeAll}
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Integrations
            </Link>

            {/* Resources */}
            <div
              className="h-full flex items-center"
              onMouseEnter={() => hoverOpen('resources')}
              onMouseLeave={hoverClose}
            >
              <button
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  openMenu === 'resources' ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Resources <Chevron open={openMenu === 'resources'} />
              </button>

              {openMenu === 'resources' && (
                <div
                  className="absolute top-16 right-0 mt-1.5 w-[860px] bg-white rounded-2xl shadow-xl border border-slate-200/80 overflow-hidden z-50"
                  onMouseEnter={() => hoverOpen('resources')}
                  onMouseLeave={hoverClose}
                >
                  <div className="flex">
                    {/* Left: 3 columns */}
                    <div className="flex-1 p-6">
                      <div className="grid grid-cols-3 gap-6">

                        {/* Learn */}
                        <div>
                          <div className="flex items-center gap-2 mb-4">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 shrink-0">Learn</p>
                            <div className="flex-1 h-0.5 bg-blue-400 rounded-full" />
                          </div>
                          <div className="space-y-0.5">
                            {learnLinks.map(item => {
                              const cls = "flex items-center gap-2.5 px-2 py-2 rounded-xl hover:bg-slate-50 transition-colors group"
                              const inner = <>
                                <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-sm shrink-0 ${item.iconBg}`}>
                                  {item.icon}
                                </span>
                                <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">{item.label}</span>
                              </>
                              return item.external ? (
                                <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" onClick={closeAll} className={cls}>{inner}</a>
                              ) : (
                                <Link key={item.href} href={item.href} onClick={closeAll} className={cls}>{inner}</Link>
                              )
                            })}
                          </div>
                        </div>

                        {/* Compare */}
                        <div>
                          <div className="flex items-center gap-2 mb-4">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 shrink-0">Compare</p>
                            <div className="flex-1 h-0.5 bg-violet-400 rounded-full" />
                          </div>
                          <div className="space-y-1.5">
                            {compareLinks.map(link => (
                              <Link
                                key={link.href}
                                href={link.href}
                                onClick={closeAll}
                                className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors group"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-violet-300 group-hover:bg-violet-500 transition-colors shrink-0" />
                                {link.label}
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Company */}
                        <div>
                          <div className="flex items-center gap-2 mb-4">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 shrink-0">Company</p>
                            <div className="flex-1 h-0.5 bg-emerald-400 rounded-full" />
                          </div>
                          <div className="space-y-0.5">
                            {companyLinks.map(item => (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={closeAll}
                                className="flex items-center gap-2.5 px-2 py-2 rounded-xl hover:bg-slate-50 transition-colors group"
                              >
                                <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-sm shrink-0 ${item.iconBg}`}>
                                  {item.icon}
                                </span>
                                <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">{item.label}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Bottom featured strip */}
                      <div className="mt-5 pt-4 border-t border-slate-100">
                        <Link
                          href="/roi-calculator"
                          onClick={closeAll}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-gradient-to-r from-blue-50 via-violet-50 to-emerald-50 hover:from-blue-100 hover:via-violet-100 hover:to-emerald-100 transition-colors group"
                        >
                          <span className="text-xl">🧮</span>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full">Free</span>
                            <span className="text-sm font-medium text-slate-700">ROI Calculator — See how much time and money you could save</span>
                          </div>
                          <svg className="w-4 h-4 text-slate-400 ml-auto group-hover:translate-x-0.5 transition-transform shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>

                    {/* Right callout panel */}
                    <div className="w-52 bg-slate-900 p-5 flex flex-col justify-between shrink-0">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">
                          Customer stories
                        </p>
                        <p className="text-white font-bold text-base leading-snug mb-2">
                          300+ manufacturers trust Brahmin
                        </p>
                        <p className="text-slate-400 text-xs leading-relaxed">
                          See how food, cosmetics, and wholesale businesses replaced spreadsheets with a single source of truth.
                        </p>
                      </div>
                      <div className="mt-5">
                        <div className="flex mb-1.5">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-slate-300 text-xs italic leading-relaxed">
                          &ldquo;Full visibility from purchase order to manufacturing to sales.&rdquo;
                        </p>
                        <p className="text-slate-500 text-[10px] mt-1">— Sheldon Ratuski, FLFF</p>
                        <Link
                          href="/customers"
                          onClick={closeAll}
                          className="mt-4 block w-full text-center bg-white/10 hover:bg-white/20 text-white text-xs font-semibold py-2 rounded-lg transition-colors border border-white/10"
                        >
                          Read customer stories
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Pricing — direct link */}
            <Link
              href="/pricing"
              onClick={closeAll}
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Pricing
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://app.brahmin-solutions.com/login"
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Log in
            </a>
            <Link
              href="/demo"
              onClick={closeAll}
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm px-5 py-2 rounded-lg font-semibold transition-colors shadow-sm"
            >
              Book a demo
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white max-h-[80vh] overflow-y-auto">
          <div className="px-6 py-3 divide-y divide-slate-100">

            {/* Features accordion */}
            <div>
              <button
                onClick={() => toggleMobile('features')}
                className="flex items-center justify-between w-full py-3 text-sm font-medium text-slate-700"
              >
                Features <Chevron open={mobileSection === 'features'} />
              </button>
              {mobileSection === 'features' && (
                <div className="pb-3 space-y-0.5">
                  {[...featureGroups.flatMap(g => g.items), ...featureExtras].map(f => (
                    <Link
                      key={f.href}
                      href={f.href}
                      onClick={closeAll}
                      className="flex items-center gap-2.5 pl-3 py-1.5 text-sm text-slate-600 hover:text-slate-900"
                    >
                      <span className="text-base">{f.icon}</span>
                      {f.label}
                    </Link>
                  ))}
                  <Link href="/features" onClick={closeAll} className="block pl-3 py-1.5 text-sm font-semibold text-emerald-700">
                    See all features →
                  </Link>
                </div>
              )}
            </div>

            {/* Industries accordion */}
            <div>
              <button
                onClick={() => toggleMobile('industries')}
                className="flex items-center justify-between w-full py-3 text-sm font-medium text-slate-700"
              >
                Industries <Chevron open={mobileSection === 'industries'} />
              </button>
              {mobileSection === 'industries' && (
                <div className="pb-3 space-y-0.5">
                  {industries.map(i => (
                    <Link
                      key={i.href}
                      href={i.href}
                      onClick={closeAll}
                      className="flex items-center gap-2.5 pl-3 py-1.5 text-sm text-slate-600 hover:text-slate-900"
                    >
                      <span className="text-base">{i.icon}</span>
                      {i.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Integrations */}
            <div>
              <Link href="/integrations" onClick={closeAll} className="block py-3 text-sm font-medium text-slate-700 hover:text-slate-900">
                Integrations
              </Link>
            </div>

            {/* Resources accordion */}
            <div>
              <button
                onClick={() => toggleMobile('resources')}
                className="flex items-center justify-between w-full py-3 text-sm font-medium text-slate-700"
              >
                Resources <Chevron open={mobileSection === 'resources'} />
              </button>
              {mobileSection === 'resources' && (
                <div className="pb-3 space-y-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Learn</p>
                    <Link href="/blog" onClick={closeAll} className="block pl-3 py-1.5 text-sm text-slate-600 hover:text-slate-900">Blog</Link>
                    <Link href="/customers" onClick={closeAll} className="block pl-3 py-1.5 text-sm text-slate-600 hover:text-slate-900">Customer stories</Link>
                    <Link href="/faq" onClick={closeAll} className="block pl-3 py-1.5 text-sm text-slate-600 hover:text-slate-900">FAQ</Link>
                    <a href="https://support.brahmin-solutions.com/en/" target="_blank" rel="noopener noreferrer" onClick={closeAll} className="block pl-3 py-1.5 text-sm text-slate-600 hover:text-slate-900">Help center</a>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Compare</p>
                    <Link href="/compare/spreadsheets" onClick={closeAll} className="block pl-3 py-1.5 text-sm text-slate-600 hover:text-slate-900">vs Spreadsheets</Link>
                    <Link href="/compare/katana" onClick={closeAll} className="block pl-3 py-1.5 text-sm text-slate-600 hover:text-slate-900">vs Katana MRP</Link>
                    <Link href="/compare/fishbowl" onClick={closeAll} className="block pl-3 py-1.5 text-sm text-slate-600 hover:text-slate-900">vs Fishbowl</Link>
                    <Link href="/compare/netsuite" onClick={closeAll} className="block pl-3 py-1.5 text-sm text-slate-600 hover:text-slate-900">vs NetSuite</Link>
                    <Link href="/compare/cin7" onClick={closeAll} className="block pl-3 py-1.5 text-sm text-slate-600 hover:text-slate-900">vs Cin7</Link>
                    <Link href="/compare/wherefour" onClick={closeAll} className="block pl-3 py-1.5 text-sm text-slate-600 hover:text-slate-900">vs Wherefour</Link>
                    <Link href="/compare/mrpeasy" onClick={closeAll} className="block pl-3 py-1.5 text-sm text-slate-600 hover:text-slate-900">vs MRPeasy</Link>
                    <Link href="/compare/inflow" onClick={closeAll} className="block pl-3 py-1.5 text-sm text-slate-600 hover:text-slate-900">vs inFlow</Link>
                    <Link href="/compare/sap-business-one" onClick={closeAll} className="block pl-3 py-1.5 text-sm text-slate-600 hover:text-slate-900">vs SAP Business One</Link>
                    <Link href="/compare/odoo" onClick={closeAll} className="block pl-3 py-1.5 text-sm text-slate-600 hover:text-slate-900">vs Odoo</Link>
                    <Link href="/compare/craftybase" onClick={closeAll} className="block pl-3 py-1.5 text-sm text-slate-600 hover:text-slate-900">vs CraftyBase</Link>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Company</p>
                    <Link href="/about" onClick={closeAll} className="block pl-3 py-1.5 text-sm text-slate-600 hover:text-slate-900">About us</Link>
                    <Link href="/contact" onClick={closeAll} className="block pl-3 py-1.5 text-sm text-slate-600 hover:text-slate-900">Contact us</Link>
                    <Link href="/roi-calculator" onClick={closeAll} className="block pl-3 py-1.5 text-sm text-slate-600 hover:text-slate-900">ROI calculator</Link>
                    <Link href="/demo" onClick={closeAll} className="block pl-3 py-1.5 text-sm text-slate-600 hover:text-slate-900">Book a demo</Link>
                  </div>
                </div>
              )}
            </div>

            {/* Pricing */}
            <div>
              <Link href="/pricing" onClick={closeAll} className="block py-3 text-sm font-medium text-slate-700 hover:text-slate-900">
                Pricing
              </Link>
            </div>

            {/* CTAs */}
            <div className="pt-3 pb-2 flex flex-col gap-2">
              <a
                href="https://app.brahmin-solutions.com/login"
                className="text-sm text-center py-2.5 text-slate-700 font-medium border border-slate-200 rounded-lg hover:bg-slate-50"
              >
                Log in
              </a>
              <Link
                href="/demo"
                onClick={closeAll}
                className="text-sm text-center py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors"
              >
                Book a demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
