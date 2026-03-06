'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'

const features = [
  { label: 'Inventory Management', desc: 'Real-time stock tracking across all locations', href: '/features/inventory' },
  { label: 'Production & Manufacturing', desc: 'Plan, schedule, and track work orders from start to finish', href: '/features/production' },
  { label: 'Traceability & Compliance', desc: 'Lot/batch tracking and instant recall reports', href: '/features/traceability' },
  { label: 'Purchasing', desc: 'Automate reorders and manage vendor relationships', href: '/features/purchasing' },
  { label: 'MRP & Forecasting', desc: 'Know what to make and buy before you run out', href: '/features/mrp' },
  { label: 'Warehouse Management', desc: 'Bin locations, pick/pack, and multi-warehouse support', href: '/features/warehouse' },
  { label: 'B2B Portal', desc: 'Let wholesale customers order 24/7', href: '/features/b2b-portal' },
  { label: 'Mobile App', desc: 'Receive, pick, and adjust inventory from anywhere', href: '/features/mobile' },
]

const industries = [
  { label: 'Food & Beverage', desc: 'Batch tracking, expiration dates, and compliance', href: '/industries/food-beverage' },
  { label: 'Manufacturing', desc: 'Production planning for discrete manufacturers', href: '/industries/manufacturing' },
  { label: 'Wholesale Distribution', desc: 'Multi-channel inventory and order management', href: '/industries/wholesale-distribution' },
  { label: 'Cosmetics & Beauty', desc: 'Formula management and lot traceability', href: '/industries/cosmetics' },
  { label: 'Electronics', desc: 'Component tracking and assembly management', href: '/industries/electronics' },
  { label: 'Apparel & Textiles', desc: 'Size/color variants and seasonal inventory', href: '/industries/apparel' },
]

const compareLinks = [
  { label: 'vs Katana', href: '/compare/katana' },
  { label: 'vs Fishbowl', href: '/compare/fishbowl' },
  { label: 'vs Cin7', href: '/compare/cin7' },
  { label: 'vs MRPeasy', href: '/compare/mrpeasy' },
  { label: 'vs Wherefour', href: '/compare/wherefour' },
  { label: 'vs NetSuite', href: '/compare/netsuite' },
]

const learnLinks = [
  { label: 'Blog', href: '/blog' },
  { label: 'Customer Stories', href: '/customers' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Webinars', href: '/webinars' },
  { label: 'Help Center', href: '/help' },
  { label: 'Free Tools & Templates', href: '/tools' },
]

type OpenMenu = 'features' | 'industries' | 'resources' | null

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
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
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenMenu(null)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  function toggle(menu: OpenMenu) {
    setOpenMenu(prev => (prev === menu ? null : menu))
  }

  function closeAll() {
    setOpenMenu(null)
    setMobileOpen(false)
    setMobileSection(null)
  }

  function toggleMobile(section: string) {
    setMobileSection(prev => (prev === section ? null : section))
  }

  return (
    <header ref={headerRef} className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between h-20">

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
          <nav className="hidden md:flex items-center gap-7">

            {/* Features */}
            <div className="relative">
              <button
                onClick={() => toggle('features')}
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${openMenu === 'features' ? 'text-emerald-600' : 'text-slate-600 hover:text-slate-900'}`}
              >
                Features
                <Chevron open={openMenu === 'features'} />
              </button>

              {openMenu === 'features' && (
                <div className="absolute top-full left-0 mt-3 w-[640px] bg-white rounded-xl shadow-lg border border-slate-200 p-5 z-50">
                  <div className="grid grid-cols-2 gap-1">
                    {features.map(f => (
                      <Link
                        key={f.href}
                        href={f.href}
                        onClick={closeAll}
                        className="flex flex-col px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors"
                      >
                        <span className="text-sm font-semibold text-slate-900">{f.label}</span>
                        <span className="text-xs text-slate-500 mt-0.5 leading-relaxed">{f.desc}</span>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <Link
                      href="/features"
                      onClick={closeAll}
                      className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
                    >
                      See all features →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Industries */}
            <div className="relative">
              <button
                onClick={() => toggle('industries')}
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${openMenu === 'industries' ? 'text-emerald-600' : 'text-slate-600 hover:text-slate-900'}`}
              >
                Industries
                <Chevron open={openMenu === 'industries'} />
              </button>

              {openMenu === 'industries' && (
                <div className="absolute top-full left-0 mt-3 w-72 bg-white rounded-xl shadow-lg border border-slate-200 p-2 z-50">
                  {industries.map(i => (
                    <Link
                      key={i.href}
                      href={i.href}
                      onClick={closeAll}
                      className="flex flex-col px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <span className="text-sm font-semibold text-slate-900">{i.label}</span>
                      <span className="text-xs text-slate-500 mt-0.5">{i.desc}</span>
                    </Link>
                  ))}
                  <div className="mt-1 pt-2 border-t border-slate-100 px-3 pb-2">
                    <Link
                      href="/industries"
                      onClick={closeAll}
                      className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
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
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Integrations
            </Link>

            {/* Resources */}
            <div className="relative">
              <button
                onClick={() => toggle('resources')}
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${openMenu === 'resources' ? 'text-emerald-600' : 'text-slate-600 hover:text-slate-900'}`}
              >
                Resources
                <Chevron open={openMenu === 'resources'} />
              </button>

              {openMenu === 'resources' && (
                <div className="absolute top-full right-0 mt-3 w-[680px] bg-white rounded-xl shadow-lg border border-slate-200 p-6 z-50">
                  <div className="grid grid-cols-4 gap-6">
                    {/* Compare */}
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">Compare</p>
                      <div className="space-y-2">
                        {compareLinks.map(l => (
                          <Link
                            key={l.href}
                            href={l.href}
                            onClick={closeAll}
                            className="block text-sm text-slate-600 hover:text-slate-900 transition-colors"
                          >
                            {l.label}
                          </Link>
                        ))}
                        <Link
                          href="/compare"
                          onClick={closeAll}
                          className="block text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors pt-0.5"
                        >
                          See all comparisons →
                        </Link>
                      </div>
                    </div>

                    {/* Learn */}
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">Learn</p>
                      <div className="space-y-2">
                        {learnLinks.map(l => (
                          <Link
                            key={l.href}
                            href={l.href}
                            onClick={closeAll}
                            className="block text-sm text-slate-600 hover:text-slate-900 transition-colors"
                          >
                            {l.label}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Tools */}
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">Tools</p>
                      <Link
                        href="/roi-calculator"
                        onClick={closeAll}
                        className="block text-sm text-slate-600 hover:text-slate-900 transition-colors"
                      >
                        ROI Calculator
                      </Link>
                    </div>

                    {/* Company */}
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">Company</p>
                      <div className="space-y-2">
                        <Link href="/about" onClick={closeAll} className="block text-sm text-slate-600 hover:text-slate-900 transition-colors">About</Link>
                        <Link href="/contact" onClick={closeAll} className="block text-sm text-slate-600 hover:text-slate-900 transition-colors">Contact Us</Link>
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
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Pricing
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://app.brahmin-solutions.com/login"
              className="text-sm text-slate-600 hover:text-slate-900 font-medium transition-colors"
            >
              Log in
            </a>
            <Link
              href="/demo"
              onClick={closeAll}
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm px-4 py-2 rounded-lg font-semibold transition-colors"
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
                Features
                <Chevron open={mobileSection === 'features'} />
              </button>
              {mobileSection === 'features' && (
                <div className="pb-3 space-y-0.5">
                  {features.map(f => (
                    <Link key={f.href} href={f.href} onClick={closeAll} className="block pl-3 py-1.5 text-sm text-slate-600 hover:text-slate-900">
                      {f.label}
                    </Link>
                  ))}
                  <Link href="/features" onClick={closeAll} className="block pl-3 py-1.5 text-sm font-semibold text-emerald-600">
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
                Industries
                <Chevron open={mobileSection === 'industries'} />
              </button>
              {mobileSection === 'industries' && (
                <div className="pb-3 space-y-0.5">
                  {industries.map(i => (
                    <Link key={i.href} href={i.href} onClick={closeAll} className="block pl-3 py-1.5 text-sm text-slate-600 hover:text-slate-900">
                      {i.label}
                    </Link>
                  ))}
                  <Link href="/industries" onClick={closeAll} className="block pl-3 py-1.5 text-sm font-semibold text-emerald-600">
                    See all industries →
                  </Link>
                </div>
              )}
            </div>

            {/* Integrations — direct */}
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
                Resources
                <Chevron open={mobileSection === 'resources'} />
              </button>
              {mobileSection === 'resources' && (
                <div className="pb-3 space-y-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Compare</p>
                    {compareLinks.map(l => (
                      <Link key={l.href} href={l.href} onClick={closeAll} className="block pl-3 py-1 text-sm text-slate-600 hover:text-slate-900">{l.label}</Link>
                    ))}
                    <Link href="/compare" onClick={closeAll} className="block pl-3 py-1 text-sm font-semibold text-emerald-600">See all comparisons →</Link>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Learn</p>
                    {learnLinks.map(l => (
                      <Link key={l.href} href={l.href} onClick={closeAll} className="block pl-3 py-1 text-sm text-slate-600 hover:text-slate-900">{l.label}</Link>
                    ))}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Tools</p>
                    <Link href="/roi-calculator" onClick={closeAll} className="block pl-3 py-1 text-sm text-slate-600 hover:text-slate-900">ROI Calculator</Link>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Company</p>
                    <Link href="/about" onClick={closeAll} className="block pl-3 py-1 text-sm text-slate-600 hover:text-slate-900">About</Link>
                    <Link href="/contact" onClick={closeAll} className="block pl-3 py-1 text-sm text-slate-600 hover:text-slate-900">Contact Us</Link>
                  </div>
                </div>
              )}
            </div>

            {/* Pricing — direct */}
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
