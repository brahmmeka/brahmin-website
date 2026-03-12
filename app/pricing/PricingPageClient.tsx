'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'

// ─── Constants ────────────────────────────────────────────────────────────────

const MAX_ORDERS = 50000
const MAX_LOCS   = 50

const PLAN_CFG = {
  starter: { price: 199, annualPrice: 199, orders: 500,  locations: 1 },
  growth:  { price: 499, annualPrice: 449, orders: 2500, locations: 3 },
  pro:     { price: 999, annualPrice: 899, orders: 6000, locations: 6 },
}

type PlanKey  = 'starter' | 'growth' | 'pro' | 'enterprise'
type Revenue  = 'starter' | 'growth'
type FreeApp  = 'mobile' | 'b2bPortal'
type AddonId  = 'manufacturingPro' | 'complianceEssentials' | 'planningAnalytics'
type OboardId = 'advancedWorkflow' | 'dataMigration' | 'onsiteTraining'

const ADDONS: { id: AddonId; label: string; desc: string; full: number; starter: number }[] = [
  { id: 'manufacturingPro',     label: 'Manufacturing Pro',     desc: 'Multi-level BOMs, advanced scheduling, labor costing.',  full: 200, starter: 100 },
  { id: 'complianceEssentials', label: 'Compliance Essentials', desc: 'Lot/serial/expiry tracking, recall readiness.',           full: 75,  starter: 38  },
  { id: 'planningAnalytics',    label: 'Planning & Analytics',  desc: 'Demand forecasting, KPIs, profitability dashboard.',      full: 100, starter: 50  },
]

const ONBOARDING: { id: OboardId; label: string; desc: string; price: number }[] = [
  { id: 'advancedWorkflow', label: 'Advanced Workflow Setup', desc: 'Custom automations & integrations configured by our team.', price: 1500 },
  { id: 'dataMigration',    label: 'Data Migration',          desc: 'We import your items, BOMs, customers, and history.',       price: 2500 },
  { id: 'onsiteTraining',   label: 'On-Site Training',        desc: 'A Brahmin specialist at your facility. Travel additional.', price: 5000 },
]

type CV = boolean | string
interface CRow    { feature: string; s: CV; g: CV; p: CV; e: CV }
interface CSection { category: string; rows: CRow[] }

const COMPARISON: CSection[] = [
  { category: 'LIMITS', rows: [
    { feature: 'Users',               s: 'Unlimited', g: 'Unlimited', p: 'Unlimited', e: 'Unlimited' },
    { feature: 'Warehouses included', s: '1',         g: '3',         p: '6',         e: 'Unlimited' },
    { feature: 'Orders/mo included',  s: '500',       g: '2,500',     p: '6,000',     e: 'Unlimited' },
    { feature: 'Max warehouses',      s: '50',        g: '50',        p: '50',        e: 'Unlimited' },
    { feature: 'Max orders/mo',       s: '50K',       g: '50K',       p: '50K',       e: 'Unlimited' },
  ]},
  { category: 'APPS & PORTALS', rows: [
    { feature: 'Mobile Warehouse App', s: 'Pick 1 free', g: true, p: true, e: true },
    { feature: 'B2B Customer Portal',  s: 'Pick 1 free', g: true, p: true, e: true },
  ]},
  { category: 'MANUFACTURING', rows: [
    { feature: 'Bills of Materials',    s: true,     g: true,     p: true,       e: true },
    { feature: 'Multi-level BOMs',      s: 'Add-on', g: 'Add-on', p: true,       e: true },
    { feature: 'Production Scheduling', s: 'Basic',  g: 'Basic',  p: 'Advanced', e: 'Advanced' },
    { feature: 'Work Orders',           s: true,     g: true,     p: true,       e: true },
  ]},
  { category: 'COMPLIANCE', rows: [
    { feature: 'Lot/Batch Tracking',     s: 'Add-on', g: 'Add-on', p: true, e: true },
    { feature: 'Serial Number Tracking', s: 'Add-on', g: 'Add-on', p: true, e: true },
    { feature: 'Expiry Date Tracking',   s: 'Add-on', g: 'Add-on', p: true, e: true },
  ]},
  { category: 'ANALYTICS', rows: [
    { feature: 'Reports & Dashboards', s: true,     g: true,     p: true, e: true },
    { feature: 'Demand Forecasting',   s: 'Add-on', g: 'Add-on', p: true, e: true },
    { feature: 'KPIs & Profitability', s: 'Add-on', g: 'Add-on', p: true, e: true },
  ]},
  { category: 'SUPPORT', rows: [
    { feature: 'Training Calls',      s: 'On request', g: 'Unlimited', p: 'Unlimited', e: 'Unlimited' },
    { feature: 'Priority Chat Support', s: true,       g: true,        p: true,        e: true        },
    { feature: 'Email Support',         s: true,       g: true,        p: true,        e: true        },
    { feature: 'Phone Support',         s: false,      g: false,       p: true,        e: true        },
    { feature: 'Dedicated CSM',         s: false,      g: '90 days',   p: true,        e: true        },
  ]},
  { category: 'OTHER', rows: [
    { feature: 'All integrations included',           s: true,          g: true,          p: true,          e: true },
    { feature: 'EDI / SPS Commerce',                  s: '+$500 setup', g: '+$500 setup', p: '+$500 setup', e: true },
    { feature: 'Custom fields',                        s: true,          g: true,          p: true,          e: true },
    { feature: 'Customizable documents',               s: true,          g: true,          p: true,          e: true },
    { feature: 'Attach files',                         s: true,          g: true,          p: true,          e: true },
    { feature: 'Barcode scanning',                     s: true,          g: true,          p: true,          e: true },
  ]},
]

// ─── Calc helpers ─────────────────────────────────────────────────────────────

function calcExtraOrders(extra: number, half: boolean): number {
  if (extra <= 0) return 0
  const k = extra / 1000
  const tiers = [{ cap: 1, r: 100 }, { cap: 2, r: 75 }, { cap: 3, r: 50 }, { cap: Infinity, r: 40 }]
  let cost = 0, rem = k
  for (const { cap, r } of tiers) {
    const used = Math.min(rem, cap); cost += used * r; rem -= used
    if (rem <= 0) break
  }
  return half ? Math.round(cost / 2) : Math.round(cost)
}

function calcExtraLocs(extra: number, half: boolean): number {
  if (extra <= 0) return 0
  const tiers = [{ cap: 2, r: 50 }, { cap: 3, r: 40 }, { cap: 5, r: 30 }, { cap: Infinity, r: 25 }]
  let cost = 0, rem = extra
  for (const { cap, r } of tiers) {
    const used = Math.min(rem, cap); cost += used * r; rem -= used
    if (rem <= 0) break
  }
  return half ? Math.round(cost / 2) : Math.round(cost)
}

// ─── Slider component ─────────────────────────────────────────────────────────

function RangeSlider({
  label, value, min, max, step, onChange, cost, unitLabel, isHalf,
}: {
  label: string; value: number; min: number; max: number; step: number
  onChange: (v: number) => void; cost: number; unitLabel: string; isHalf: boolean
}) {
  const pct   = max === min ? 0 : ((value - min) / (max - min)) * 100
  const atMax = value >= max

  return (
    <div>
      <div className="flex items-center justify-between gap-2 mb-2">
        <div>
          <span className="text-sm font-semibold text-slate-700">{label}</span>
          <span className="ml-2 text-sm font-bold text-slate-900">{value.toLocaleString()} {unitLabel}</span>
        </div>
        <div className="text-right shrink-0">
          {cost > 0 ? (
            <span className="text-sm font-bold text-primary-600">
              +${cost}/mo{isHalf && <span className="text-xs font-normal text-accent-600 ml-1">(50% off)</span>}
            </span>
          ) : (
            <span className="text-xs text-slate-400">Included</span>
          )}
        </div>
      </div>

      <input
        type="range"
        min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="
          w-full h-2 rounded-full appearance-none cursor-pointer outline-none
          [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5
          [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:bg-white
          [&::-webkit-slider-thumb]:border-[3px] [&::-webkit-slider-thumb]:border-primary-600
          [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-pointer
          [&::-webkit-slider-thumb]:transition-transform hover:[&::-webkit-slider-thumb]:scale-110
          [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5
          [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white
          [&::-moz-range-thumb]:border-[3px] [&::-moz-range-thumb]:border-primary-600
          [&::-moz-range-thumb]:shadow-md [&::-moz-range-thumb]:cursor-pointer
        "
        style={{ background: `linear-gradient(to right, #2563eb ${pct}%, #e2e8f0 ${pct}%)` }}
      />

      <div className="flex justify-between text-xs text-slate-400 mt-1">
        <span>{min.toLocaleString()} included</span>
        <span>{max.toLocaleString()} max</span>
      </div>
      {atMax && (
        <p className="mt-1 text-xs font-semibold text-amber-600">
          Need more? <Link href="/demo" className="underline hover:no-underline">Contact Enterprise →</Link>
        </p>
      )}
    </div>
  )
}

// ─── Micro UI components ──────────────────────────────────────────────────────

function Check({ cls = 'w-5 h-5 text-accent-500' }: { cls?: string }) {
  return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

function Dash() { return <span className="block w-4 h-0.5 bg-slate-200 mx-auto rounded-full" /> }

function CCell({ v }: { v: CV }) {
  if (v === true)          return <Check cls="w-5 h-5 text-accent-500 mx-auto" />
  if (v === false)         return <Dash />
  if (v === 'Add-on')      return <span className="text-xs font-medium text-slate-400">Add-on</span>
  if (v === 'Pick 1 free') return <span className="text-xs font-semibold text-primary-600">Pick 1 free</span>
  return <span className="text-xs font-medium text-slate-500">{v}</span>
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-slate-50 transition-colors">
        <span className="font-semibold text-slate-900 pr-4">{q}</span>
        <svg className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && <div className="px-6 pb-5 text-sm text-slate-500 leading-relaxed border-t border-slate-100 pt-4">{a}</div>}
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function PricingPageClient() {
  const [revenue,      setRevenue]      = useState<Revenue>('starter')
  const [selectedPlan, setSelectedPlan] = useState<PlanKey | null>('starter')
  const [freeApp,      setFreeApp]      = useState<FreeApp>('mobile')
  const [addSecondApp, setAddSecondApp] = useState(false)
  const [orders,       setOrders]       = useState(PLAN_CFG.starter.orders)
  const [locations,    setLocations]    = useState(PLAN_CFG.starter.locations)
  const [addons,       setAddons]       = useState<Record<AddonId, boolean>>({
    manufacturingPro: false, complianceEssentials: false, planningAnalytics: false,
  })
  const [onboarding, setOnboarding] = useState<Record<OboardId, boolean>>({
    advancedWorkflow: false, dataMigration: false, onsiteTraining: false,
  })
  const [annual, setAnnual] = useState(false)

  const isStarter    = selectedPlan === 'starter'
  const isGrowth     = selectedPlan === 'growth'
  const isPro        = selectedPlan === 'pro'
  const isEnterprise = selectedPlan === 'enterprise'

  const planCfg = selectedPlan && selectedPlan !== 'enterprise' ? PLAN_CFG[selectedPlan] : null

  const extraOrders = planCfg ? Math.max(0, orders - planCfg.orders) : 0
  const extraLocs   = planCfg ? Math.max(0, locations - planCfg.locations) : 0
  const ordersCost  = calcExtraOrders(extraOrders, isStarter)
  const locsCost    = calcExtraLocs(extraLocs, isStarter)

  const secondAppLabel = freeApp === 'mobile' ? 'B2B Customer Portal' : 'Mobile Warehouse App'

  const handleRevenue = (r: Revenue) => {
    setRevenue(r)
    setSelectedPlan(r === 'starter' ? 'starter' : null)
    const cfg = r === 'starter' ? PLAN_CFG.starter : PLAN_CFG.growth
    setOrders(cfg.orders); setLocations(cfg.locations)
    setAddons({ manufacturingPro: false, complianceEssentials: false, planningAnalytics: false })
    setOnboarding({ advancedWorkflow: false, dataMigration: false, onsiteTraining: false })
    setAddSecondApp(false); setAnnual(false)
  }

  const handlePlanSelect = (p: PlanKey) => {
    setSelectedPlan(p)
    if (p !== 'enterprise') {
      const cfg = PLAN_CFG[p]
      setOrders(cfg.orders); setLocations(cfg.locations)
    }
    setAddons({ manufacturingPro: false, complianceEssentials: false, planningAnalytics: false })
    setAddSecondApp(false)
  }

  const calc = useMemo(() => {
    if (!planCfg) return null
    const useAnnual = annual && !isStarter
    let addonCost = 0
    if (isStarter) {
      if (addSecondApp) addonCost += 50
      for (const a of ADDONS) if (addons[a.id]) addonCost += a.starter
    } else if (isGrowth) {
      for (const a of ADDONS) if (addons[a.id]) addonCost += a.full
    }
    const subtotal = planCfg.price + addonCost + ordersCost + locsCost
    const monthly  = useAnnual ? Math.round(subtotal * 0.9) : subtotal
    const savings  = isStarter
      ? (PLAN_CFG.growth.price + (addSecondApp ? 99 : 0) + ADDONS.reduce((s, a) => s + (addons[a.id] ? a.full : 0), 0) + calcExtraOrders(extraOrders, false) + calcExtraLocs(extraLocs, false)) - monthly
      : 0
    let oneTime = 0
    for (const o of ONBOARDING) if (onboarding[o.id]) oneTime += o.price
    return { monthly, annualTotal: monthly * 12, oneTime, savings, addonCost, ordersCost, locsCost, useAnnual }
  }, [planCfg, isStarter, isGrowth, addSecondApp, addons, ordersCost, locsCost, onboarding, annual, extraOrders, extraLocs])

  // ── Left "Build your plan" column ───────────────────────────────────────────

  const buildColumn = planCfg && (
    <div className="space-y-4">
      {/* Base plan */}
      <div className="bg-white rounded-xl p-4 border border-slate-200">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-bold text-slate-900">{isStarter ? 'Starter' : isGrowth ? 'Growth' : 'Pro'} Plan</p>
            <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
              {planCfg.orders.toLocaleString()} orders · {planCfg.locations} location{planCfg.locations > 1 ? 's' : ''} included
              {!isStarter && <> · Mobile App &amp; B2B Portal included</>}
              {isPro      && <> · All add-ons included</>}
            </p>
          </div>
          <div className="text-right shrink-0">
            <p className="text-lg font-bold text-slate-900">${planCfg.price}<span className="text-xs font-normal text-slate-400">/mo</span></p>
            {!isStarter && annual && (
              <p className="text-xs text-accent-600 font-semibold">${planCfg.annualPrice}/mo annual</p>
            )}
          </div>
        </div>
        {isStarter && (
          <div className="mt-2.5 inline-flex items-center gap-1.5 bg-accent-50 text-accent-700 border border-accent-200 rounded-full px-3 py-1 text-xs font-bold">
            🎉 STARTUP PRICING — 50% off everything
          </div>
        )}
      </div>

      {/* Starter: pick one free app */}
      {isStarter && (
        <div className="bg-white rounded-xl p-4 border border-slate-200">
          <p className="font-semibold text-slate-800 text-sm mb-0.5">Pick ONE free</p>
          <p className="text-xs text-slate-400 mb-3">Normally $99/mo each. Add the second for $50.</p>
          <div className="space-y-2">
            {(['mobile', 'b2bPortal'] as FreeApp[]).map((app) => (
              <label key={app} className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                freeApp === app ? 'border-primary-400 bg-primary-50' : 'border-slate-200 hover:border-slate-300'
              }`}>
                <input type="radio" name="freeApp" checked={freeApp === app}
                  onChange={() => { setFreeApp(app); setAddSecondApp(false) }}
                  className="w-4 h-4 accent-primary-600 shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-slate-900 text-sm">{app === 'mobile' ? 'Mobile Warehouse App' : 'B2B Customer Portal'}</p>
                  <p className="text-xs text-slate-500">{app === 'mobile' ? 'Pick, pack, receive with barcode scanning.' : 'Let wholesale customers order 24/7.'}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-sm font-bold text-accent-600">Free</p>
                  <p className="text-xs text-slate-400 line-through">$99/mo</p>
                </div>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Usage sliders */}
      <div className="bg-white rounded-xl p-4 border border-slate-200 space-y-5">
        <p className="font-semibold text-slate-800 text-sm">Usage</p>
        <RangeSlider label="Orders per month" value={orders} min={planCfg.orders} max={MAX_ORDERS} step={500}
          onChange={setOrders} cost={ordersCost} unitLabel="orders/mo" isHalf={isStarter} />
        <RangeSlider label="Warehouses" value={locations} min={planCfg.locations} max={MAX_LOCS} step={1}
          onChange={setLocations} cost={locsCost} unitLabel={locations === 1 ? 'warehouse' : 'warehouses'} isHalf={isStarter} />
      </div>

      {/* Add-ons */}
      {!isPro ? (
        <div className="bg-white rounded-xl p-4 border border-slate-200">
          <div className="flex items-center gap-2 mb-3">
            <p className="font-semibold text-slate-800 text-sm">Monthly add-ons</p>
            {isStarter && <span className="text-xs font-bold text-accent-600 bg-accent-50 border border-accent-200 rounded-full px-2 py-0.5">50% off</span>}
          </div>
          <div className="space-y-2">
            {isStarter && (
              <label className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                addSecondApp ? 'border-primary-300 bg-primary-50' : 'border-slate-200 hover:border-slate-300'
              }`}>
                <input type="checkbox" checked={addSecondApp} onChange={() => setAddSecondApp(!addSecondApp)}
                  className="w-4 h-4 mt-0.5 accent-primary-600 rounded shrink-0" />
                <div className="flex-1">
                  <p className="font-semibold text-slate-900 text-sm">{secondAppLabel}</p>
                  <p className="text-xs text-slate-500 mt-0.5">Add your second app at 50% off.</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-sm font-bold text-accent-700">$50<span className="text-xs font-normal text-slate-400">/mo</span></p>
                  <p className="text-xs text-slate-400 line-through">$99/mo</p>
                </div>
              </label>
            )}
            {ADDONS.map((addon) => {
              const price = isStarter ? addon.starter : addon.full
              const on    = addons[addon.id]
              return (
                <label key={addon.id} className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                  on ? 'border-primary-300 bg-primary-50' : 'border-slate-200 hover:border-slate-300'
                }`}>
                  <input type="checkbox" checked={on}
                    onChange={() => setAddons(p => ({ ...p, [addon.id]: !p[addon.id] }))}
                    className="w-4 h-4 mt-0.5 accent-primary-600 rounded shrink-0" />
                  <div className="flex-1">
                    <p className="font-semibold text-slate-900 text-sm">{addon.label}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{addon.desc}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-sm font-bold text-slate-900">${price}<span className="text-xs font-normal text-slate-400">/mo</span></p>
                    {isStarter && <p className="text-xs text-slate-400 line-through">${addon.full}/mo</p>}
                  </div>
                </label>
              )
            })}
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-3 bg-accent-50 border border-accent-200 rounded-xl p-4 text-sm text-accent-800">
          <Check cls="w-5 h-5 text-accent-600 shrink-0" />
          <div><strong>All add-ons included with Pro.</strong> Manufacturing Pro, Compliance Essentials, and Planning &amp; Analytics are built in.</div>
        </div>
      )}

      {/* Onboarding */}
      <div className="bg-white rounded-xl p-4 border border-slate-200">
        <div className="flex items-center gap-2 flex-wrap mb-1">
          <p className="font-semibold text-slate-800 text-sm">Onboarding &amp; setup</p>
        </div>
        <p className="text-xs text-slate-400 mb-3">Optional one-time services to accelerate your launch.</p>
        <div className="space-y-2">
          {ONBOARDING.map((item) => {
            const on = onboarding[item.id]
            return (
              <label key={item.id} className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                on ? 'border-primary-300 bg-primary-50' : 'border-slate-200 hover:border-slate-300'
              }`}>
                <input type="checkbox" checked={on}
                  onChange={() => setOnboarding(p => ({ ...p, [item.id]: !p[item.id] }))}
                  className="w-4 h-4 mt-0.5 accent-primary-600 rounded shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="font-semibold text-slate-900 text-sm">{item.label}</p>
                    <span className="text-xs font-medium text-slate-500 bg-slate-100 border border-slate-200 rounded-full px-2 py-0.5">One-time</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                </div>
                <p className="text-sm font-bold text-slate-900 shrink-0">${item.price.toLocaleString()}</p>
              </label>
            )
          })}
        </div>
      </div>
    </div>
  )

  // ── Right sticky "Your Plan" column ─────────────────────────────────────────

  const summaryColumn = calc && planCfg && (
    <div className="lg:sticky lg:top-20 space-y-4">
      <div className="bg-white border-2 border-primary-200 rounded-2xl overflow-hidden shadow-xl shadow-primary-100/30">
        <div className="bg-primary-600 px-5 py-4">
          <p className="text-primary-300 text-xs font-semibold uppercase tracking-widest mb-1">Your Plan</p>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold text-white">${calc.monthly}</span>
            <span className="text-primary-300 text-sm">/mo</span>
          </div>
          {calc.useAnnual && <p className="text-primary-300 text-xs mt-0.5">Billed ${calc.annualTotal.toLocaleString()}/year</p>}
          {isStarter && calc.savings > 0 && <p className="text-accent-300 text-xs font-semibold mt-0.5">Saving ${calc.savings}/mo vs full price</p>}
        </div>

        <div className="px-5 py-4 space-y-2 text-sm border-b border-slate-100">
          <div className="flex justify-between">
            <span className="text-slate-600">{isStarter ? 'Starter' : isGrowth ? 'Growth' : 'Pro'} base</span>
            <span className="font-semibold text-slate-900">${calc.useAnnual ? planCfg.annualPrice : planCfg.price}/mo</span>
          </div>
          {isStarter && (
            <div className="flex justify-between text-slate-500">
              <span>Free: {freeApp === 'mobile' ? 'Mobile App' : 'B2B Portal'}</span>
              <span className="text-accent-600 font-semibold">$0</span>
            </div>
          )}
          {isGrowth && <>
            <div className="flex justify-between text-slate-400 text-xs"><span>Mobile App</span><span>Included</span></div>
            <div className="flex justify-between text-slate-400 text-xs"><span>B2B Portal</span><span>Included</span></div>
          </>}
          {isPro && <div className="flex justify-between text-slate-400 text-xs"><span>All add-ons</span><span>Included</span></div>}
          {isStarter && addSecondApp && <div className="flex justify-between text-slate-600"><span>{secondAppLabel}</span><span>+$50/mo</span></div>}
          {ADDONS.map(a => addons[a.id] && (
            <div key={a.id} className="flex justify-between text-slate-600">
              <span>{a.label}</span><span>+${isStarter ? a.starter : a.full}/mo</span>
            </div>
          ))}
          {calc.ordersCost > 0 && (
            <div className="flex justify-between text-slate-500">
              <span>Extra orders</span><span>+${calc.ordersCost}/mo</span>
            </div>
          )}
          {calc.locsCost > 0 && (
            <div className="flex justify-between text-slate-500">
              <span>Extra locations</span><span>+${calc.locsCost}/mo</span>
            </div>
          )}
          {calc.oneTime > 0 && (
            <div className="flex justify-between text-slate-500 pt-2 border-t border-slate-100">
              <span>One-time setup</span><span>${calc.oneTime.toLocaleString()}</span>
            </div>
          )}
        </div>

        <div className="px-5 py-4 space-y-2">
          <Link href="/demo" className="block w-full text-center bg-accent-500 hover:bg-accent-600 text-white font-bold py-3.5 rounded-xl transition-all shadow shadow-accent-500/20 text-sm">
            {isStarter ? 'Start Free Trial' : 'Get Started'}
          </Link>
          <p className="text-center text-xs text-slate-400">
            {isStarter ? '14-day free trial. No credit card required.' : '30-day money-back guarantee. Full refund if not satisfied.'}
          </p>
          {isStarter && <p className="text-center text-xs text-primary-600 font-semibold">🎉 Keep startup pricing 6 months after hitting $1M</p>}
        </div>
      </div>

      {isGrowth && calc.monthly >= 900 && (
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
          <p className="text-xs font-bold text-amber-700 uppercase tracking-wide mb-1">Consider upgrading to Pro</p>
          <p className="text-sm text-amber-800 leading-relaxed">At this config, <strong>Pro ($999/mo)</strong> includes 6K orders, 6 locations, and all add-ons.</p>
          <button onClick={() => handlePlanSelect('pro')} className="mt-2 text-xs font-semibold text-amber-700 underline hover:no-underline">Switch to Pro →</button>
        </div>
      )}
    </div>
  )

  // ─── Render ──────────────────────────────────────────────────────────────────

  return (
    <main>

      {/* ── 1. Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-slate-50 to-white pt-20 pb-12">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 mb-4">Pricing</span>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-[1.08]">
            One platform.<br />Transparent pricing.
          </h1>
          <p className="mt-5 text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Startups get 50% off everything. Growing businesses get a 30-day money-back guarantee.
            Everyone gets unlimited users and training.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {['Unlimited users & products on every plan', 'Priority support included', 'No contracts — cancel anytime'].map(t => (
              <div key={t} className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-full px-4 py-2 text-sm text-slate-700 shadow-sm">
                <Check cls="w-4 h-4 text-accent-500" />{t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. Revenue toggle ───────────────────────────────────────────────── */}
      <section className="pb-10 bg-white">
        <div className="container mx-auto px-6 max-w-md">
          <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">What&apos;s your annual revenue?</p>
          <div className="flex bg-slate-100 rounded-2xl p-1.5 gap-1.5">
            {([['starter', 'Under $1M'], ['growth', '$1M and above']] as [Revenue, string][]).map(([r, label]) => (
              <button key={r} onClick={() => handleRevenue(r)}
                className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-all ${
                  revenue === r ? 'bg-white text-primary-700 shadow' : 'text-slate-500 hover:text-slate-700'
                }`}
              >{label}</button>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3A. Starter view ────────────────────────────────────────────────── */}
      {revenue === 'starter' && (
        <section className="pb-section bg-white border-t border-slate-100">
          <div className="container mx-auto px-6 max-w-5xl pt-10">
            <div className="grid lg:grid-cols-[1fr_300px] gap-10 items-start">
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-1">Build your plan</h2>
                <p className="text-slate-500 text-sm mb-6">Move the sliders. Add what you need. Price updates in real time.</p>
                {buildColumn}
              </div>
              {summaryColumn}
            </div>
          </div>
        </section>
      )}

      {/* ── 3B. Growth / Pro / Enterprise view ──────────────────────────────── */}
      {revenue === 'growth' && (
        <section className="pb-section bg-white border-t border-slate-100">
          <div className="container mx-auto px-6 max-w-6xl pt-10">

            {/* Step 1 */}
            <div className="mb-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-5">Step 1 — Choose your plan</p>
              <div className="grid md:grid-cols-3 gap-5">

                {/* Growth card */}
                <button onClick={() => handlePlanSelect('growth')}
                  className={`relative text-left rounded-3xl border-2 p-6 transition-all ${
                    isGrowth ? 'border-primary-500 shadow-xl shadow-primary-100 bg-white' : 'border-slate-200 bg-white hover:border-primary-300 hover:shadow-md'
                  }`}
                >
                  {isGrowth && <span className="absolute top-4 right-4 w-5 h-5 rounded-full bg-primary-600 flex items-center justify-center"><svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg></span>}
                  <p className="text-lg font-bold text-slate-900">Growth</p>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-slate-900">${annual ? PLAN_CFG.growth.annualPrice : PLAN_CFG.growth.price}</span>
                    <span className="text-slate-400 text-sm">/mo</span>
                  </div>
                  {annual && <p className="text-xs text-accent-600 font-semibold mt-0.5">Save 10% with annual</p>}
                  <p className="text-xs text-slate-400 mt-1">2,500 orders · 3 locations</p>
                  <ul className="mt-4 space-y-1.5">
                    {['Mobile App + B2B Portal included', 'Unlimited users & training', 'Priority support', 'All integrations', 'Dedicated CSM (90 days)'].map(f => (
                      <li key={f} className="flex items-start gap-2 text-xs text-slate-600"><Check cls="w-3.5 h-3.5 text-accent-500 mt-0.5 shrink-0" />{f}</li>
                    ))}
                  </ul>
                  <div className={`mt-5 w-full py-2.5 rounded-xl text-sm font-semibold text-center transition-all ${isGrowth ? 'bg-primary-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-primary-50 hover:text-primary-700'}`}>
                    {isGrowth ? '✓ Selected' : 'Select Growth'}
                  </div>
                </button>

                {/* Pro card */}
                <button onClick={() => handlePlanSelect('pro')}
                  className={`relative text-left rounded-3xl border-2 p-6 transition-all ${
                    isPro ? 'border-primary-500 shadow-xl shadow-primary-100 bg-white' : 'border-slate-200 bg-white hover:border-primary-300 hover:shadow-md'
                  }`}
                >
                  <div className="absolute -top-3 right-6"><span className="bg-accent-500 text-white text-xs font-bold px-4 py-1 rounded-full">BEST VALUE</span></div>
                  {isPro && <span className="absolute top-4 right-4 w-5 h-5 rounded-full bg-primary-600 flex items-center justify-center"><svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg></span>}
                  <p className="text-lg font-bold text-slate-900 pt-2">Pro</p>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-slate-900">${annual ? PLAN_CFG.pro.annualPrice : PLAN_CFG.pro.price}</span>
                    <span className="text-slate-400 text-sm">/mo</span>
                  </div>
                  {annual && <p className="text-xs text-accent-600 font-semibold mt-0.5">Save 10% with annual</p>}
                  <p className="text-xs text-slate-400 mt-1">6,000 orders · 6 locations</p>
                  <ul className="mt-4 space-y-1.5">
                    {['Everything in Growth', 'Manufacturing Pro', 'Compliance Essentials', 'Planning & Analytics', 'Dedicated CSM'].map(f => (
                      <li key={f} className="flex items-start gap-2 text-xs text-slate-600"><Check cls="w-3.5 h-3.5 text-accent-500 mt-0.5 shrink-0" />{f}</li>
                    ))}
                  </ul>
                  <div className={`mt-5 w-full py-2.5 rounded-xl text-sm font-semibold text-center transition-all ${isPro ? 'bg-primary-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-primary-50 hover:text-primary-700'}`}>
                    {isPro ? '✓ Selected' : 'Select Pro'}
                  </div>
                </button>

                {/* Enterprise card */}
                <button onClick={() => handlePlanSelect('enterprise')}
                  className={`relative text-left rounded-3xl border-2 p-6 transition-all ${
                    isEnterprise ? 'border-slate-700 bg-slate-900 shadow-xl' : 'border-slate-300 bg-slate-50 hover:border-slate-400 hover:shadow-md'
                  }`}
                >
                  <p className={`text-lg font-bold ${isEnterprise ? 'text-white' : 'text-slate-900'}`}>Enterprise</p>
                  <p className={`mt-2 text-3xl font-bold ${isEnterprise ? 'text-white' : 'text-slate-900'}`}>Contact Us</p>
                  <p className="text-xs text-slate-400 mt-1">Custom pricing</p>
                  <ul className="mt-4 space-y-1.5">
                    {['Unlimited orders & locations', 'Everything in Pro', 'Dedicated CSM (ongoing)'].map(f => (
                      <li key={f} className={`flex items-start gap-2 text-xs ${isEnterprise ? 'text-slate-300' : 'text-slate-600'}`}>
                        <Check cls={`w-3.5 h-3.5 mt-0.5 shrink-0 ${isEnterprise ? 'text-accent-400' : 'text-accent-500'}`} />{f}
                      </li>
                    ))}
                  </ul>
                  <div className={`mt-5 w-full py-2.5 rounded-xl text-sm font-semibold text-center transition-all ${isEnterprise ? 'bg-white text-slate-900' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'}`}>
                    {isEnterprise ? '✓ Talk to Sales' : 'Talk to Sales'}
                  </div>
                </button>
              </div>

              {/* Billing toggle */}
              {(isGrowth || isPro) && (
                <div className="mt-5 flex items-center justify-center gap-4">
                  <span className={`text-sm font-medium ${!annual ? 'text-slate-900' : 'text-slate-400'}`}>Monthly</span>
                  <button onClick={() => setAnnual(!annual)} className={`relative w-12 h-6 rounded-full transition-colors ${annual ? 'bg-primary-600' : 'bg-slate-300'}`}>
                    <span className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white shadow transition-transform ${annual ? 'translate-x-6' : ''}`} />
                  </button>
                  <span className={`text-sm font-medium ${annual ? 'text-primary-700' : 'text-slate-400'}`}>
                    Annual <span className="text-accent-600 font-bold">(Save 10%)</span>
                  </span>
                </div>
              )}
            </div>

            {/* Enterprise CTA */}
            {isEnterprise && (
              <div className="mt-8 bg-slate-900 rounded-3xl p-10 text-center">
                <h3 className="text-2xl font-bold text-white mb-3">Let&apos;s build a custom plan</h3>
                <p className="text-slate-400 max-w-md mx-auto mb-6 leading-relaxed">Unlimited orders, unlimited locations, dedicated CSM, and options tailored to your operation.</p>
                <Link href="/demo" className="inline-block bg-accent-500 hover:bg-accent-600 text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-accent-500/30">Talk to Sales</Link>
              </div>
            )}

            {/* Step 2 */}
            {(isGrowth || isPro) && (
              <div className="mt-10 pt-10 border-t border-slate-200">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-5">Step 2 — Customize your plan</p>
                <div className="grid lg:grid-cols-[1fr_300px] gap-10 items-start">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">Fine-tune your plan</h3>
                    <p className="text-slate-500 text-sm mb-6">Slide to your expected volumes. Add extra features. Price updates instantly.</p>
                    {buildColumn}
                  </div>
                  {summaryColumn}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── 4. Comparison table ─────────────────────────────────────────────── */}
      <section className="py-section bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-10 tracking-tight">Compare plans</h2>
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left px-6 py-4 text-slate-400 font-semibold w-[35%]">Feature</th>
                  {[
                    { label: 'Starter',    sub: '$199/mo',    hl: false },
                    { label: 'Growth',     sub: '$499/mo',    hl: false },
                    { label: 'Pro',        sub: '$999/mo',    hl: true  },
                    { label: 'Enterprise', sub: 'Contact us', hl: false },
                  ].map(col => (
                    <th key={col.label} className={`px-4 py-4 text-center font-bold ${col.hl ? 'text-primary-600 bg-primary-50/50' : 'text-slate-700'}`}>
                      {col.label}<div className="text-xs font-normal text-slate-400">{col.sub}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((section) => (
                  <React.Fragment key={section.category}>
                    <tr className="bg-slate-50 border-y border-slate-200">
                      <td colSpan={5} className="px-6 py-2.5 text-xs font-bold text-slate-500 uppercase tracking-widest">{section.category}</td>
                    </tr>
                    {section.rows.map((row, i) => (
                      <tr key={row.feature} className={`border-b border-slate-100 ${i % 2 === 1 ? 'bg-slate-50/30' : ''}`}>
                        <td className="px-6 py-3 text-slate-700 text-sm">{row.feature}</td>
                        <td className="px-4 py-3 text-center"><CCell v={row.s} /></td>
                        <td className="px-4 py-3 text-center"><CCell v={row.g} /></td>
                        <td className="px-4 py-3 text-center bg-primary-50/20"><CCell v={row.p} /></td>
                        <td className="px-4 py-3 text-center"><CCell v={row.e} /></td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
          </div>
          <p className="text-center text-xs text-slate-400 mt-4">All plans include Growth Kickstart onboarding, no per-transaction fees, no per-seat charges, and no contracts.</p>
        </div>
      </section>

      {/* ── 5. Volume discounts ─────────────────────────────────────────────── */}
      <section className="py-section bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Pricing that drops as you grow</h2>
            <p className="mt-3 text-slate-500">Unlike other MRPs, we reward growth — we don&apos;t punish it.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Extra orders (per 1,000/mo above included)', rows: [
                { range: 'First 1K extra',     full: '$100/K', s: '$50/K'   },
                { range: 'Next 2K (up to 3K)', full: '$75/K',  s: '$38/K'  },
                { range: 'Next 3K (up to 6K)', full: '$50/K',  s: '$25/K'  },
                { range: '6K+ extra',          full: '$40/K',  s: '$20/K'  },
              ]},
              { title: 'Extra locations (per location above included)', rows: [
                { range: '1–2 extra',   full: '$50 each', s: '$25 each' },
                { range: '3–5 extra',   full: '$40 each', s: '$20 each' },
                { range: '6–10 extra',  full: '$30 each', s: '$15 each' },
                { range: '11+ extra',   full: '$25 each', s: '$13 each' },
              ]},
            ].map(table => (
              <div key={table.title}>
                <h3 className="text-sm font-bold text-slate-800 mb-3">{table.title}</h3>
                <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200">
                        <th className="text-left px-4 py-3 font-semibold text-slate-500">Volume</th>
                        <th className="text-right px-4 py-3 font-semibold text-slate-600">Full price</th>
                        <th className="text-right px-4 py-3 font-semibold text-primary-600">Starter (50% off)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {table.rows.map((row, i) => (
                        <tr key={row.range} className={`border-b border-slate-100 ${i % 2 === 1 ? 'bg-slate-50/40' : ''}`}>
                          <td className="px-4 py-3 text-slate-700">{row.range}</td>
                          <td className="px-4 py-3 text-right font-medium text-slate-900">{row.full}</td>
                          <td className="px-4 py-3 text-right font-semibold text-primary-600">{row.s}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-section bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-10 tracking-tight">Pricing questions</h2>
          <div className="space-y-3">
            {[
              { q: "What counts as an \"order\"?",
                a: "An order is any confirmed sales order processed through Brahmin in a given month. Drafts, quotes, estimates, purchase orders, and work orders don't count — only sales orders." },
              { q: "Do you really include unlimited training calls?",
                a: "Yes. Every plan includes unlimited 1-on-1 training calls with our team. No extra charge, no limits. We want you to succeed." },
              { q: "Do you charge per user?",
                a: "No. Every plan includes unlimited users. Add your whole team — warehouse staff, accountants, sales reps — at no extra cost." },
              { q: "What happens when I cross $1M in revenue?",
                a: "You keep your Starter pricing for 6 more months (grace period). After that, you'll move to Growth pricing, but you'll never be surprised — we'll reach out well in advance." },
              { q: "What's the difference between Growth and Pro?",
                a: "Growth includes the essentials: Mobile App, B2B Portal, and core features. Pro adds Manufacturing Pro (multi-level BOMs, advanced scheduling), Compliance Essentials (lot/serial/expiry tracking), Planning & Analytics, and a dedicated Customer Success Manager for 90 days." },
              { q: "Is there a free trial?",
                a: "Starter plan customers get a 14-day free trial with no credit card required. Growth and Pro customers can book a demo to see the software with their actual use case." },
              { q: "What's the money-back guarantee?",
                a: "Growth and Pro customers can request a full refund of their subscription within 30 days if not satisfied. To qualify, complete at least 2 onboarding calls so we can ensure you've seen the full value. Onboarding fees are refundable on a prorated basis depending on work completed." },
              { q: "What if I go over my order limit?",
                a: "We'll let you know before you hit your limit. If you go over, we simply add orders at the tiered rate — no surprise fees, no service interruption." },
              { q: "Do I get a discount for annual billing?",
                a: "Yes. Growth and Pro plans get 10% off when you pay annually. Starter is monthly-only (since it's already discounted 50%)." },
              { q: "What's the maximum orders/warehouses I can have?",
                a: "All plans support up to 50,000 orders/month and 50 warehouses. Need more? Contact us for Enterprise pricing." },
            ].map(faq => <FAQItem key={faq.q} q={faq.q} a={faq.a} />)}
          </div>
        </div>
      </section>

      {/* ── 7. Final CTA ────────────────────────────────────────────────────── */}
      <section className="py-section bg-primary-600">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Ready to simplify your operations?</h2>
          {revenue === 'starter' ? (
            <>
              <p className="mt-4 text-primary-200 text-lg max-w-xl mx-auto leading-relaxed">
                Your first 14 days are free. No credit card. No commitment.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/demo" className="inline-block bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-accent-500/30 text-base">
                  Start Building
                </Link>
                <Link href="/demo" className="inline-block text-white/80 hover:text-white font-semibold transition-colors text-base underline underline-offset-2 self-center">
                  Or book a demo first
                </Link>
              </div>
            </>
          ) : (
            <>
              <p className="mt-4 text-primary-200 text-lg max-w-xl mx-auto leading-relaxed">
                See Brahmin with your actual products and workflows.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/demo" className="inline-block bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-accent-500/30 text-base">
                  Schedule a Demo
                </Link>
                <Link href="/demo" className="inline-block text-white/80 hover:text-white font-semibold transition-colors text-base underline underline-offset-2 self-center">
                  Or get started now
                </Link>
              </div>
              <p className="mt-4 text-xs text-primary-300">30-day money-back guarantee.</p>
            </>
          )}
        </div>
      </section>

      {/* ── 8. Enterprise mention ───────────────────────────────────────────── */}
      <div className="bg-slate-50 border-t border-slate-200 py-6 text-center">
        <p className="text-sm text-slate-500">
          Need more than 50K orders or 50 warehouses?{' '}
          <Link href="/demo" className="text-primary-600 font-semibold hover:underline">Contact us for Enterprise pricing</Link>.
        </p>
      </div>

    </main>
  )
}
