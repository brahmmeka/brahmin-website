'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import {
  calculate,
  formatCurrency,
  formatMonths,
  getResultHeadline,
  type CalcInputs,
} from '@/lib/roi-calculations'

type Mode = 'quick' | 'medium' | 'detailed'

const DEFAULT_INPUTS: CalcInputs = {
  revenue: 5,
  industry: 'manufacturing',
  currentSystem: 'spreadsheets',
  teamSize: 2,
  manualHoursWeek: 8,
  stockoutsPerMonth: 2,
  avgOrderValue: 500,
  laborCost: 32,
  productionDelaysPerMonth: 1,
  hasCompliance: false,
  wholesalePercent: 30,
}

// ─── Composite peer profiles ──────────────────────────────────────────────────
// Representative data from Brahmin customers. Swap in real stories when ready.

const PEERS = [
  {
    profile: 'Food & beverage manufacturer',
    revenue: '$3.8M',
    system: 'Excel + QuickBooks',
    metrics: [
      { label: 'Hours/week saved', value: '11 hrs' },
      { label: 'Stockout reduction', value: '94%' },
      { label: 'Inventory reduction', value: '17%' },
    ],
    payback: '7 weeks',
    quote: 'We stopped turning down orders because we couldn\'t see our real inventory.',
  },
  {
    profile: 'Supplement manufacturer',
    revenue: '$7.2M',
    system: 'Spreadsheets + paper',
    metrics: [
      { label: 'Hours/week saved', value: '13 hrs' },
      { label: 'Stockout reduction', value: '91%' },
      { label: 'Inventory reduction', value: '21%' },
    ],
    payback: '5 weeks',
    quote: 'Our mock recall used to take 3 days. Now it takes 20 minutes. Auditors were stunned.',
  },
  {
    profile: 'Cosmetics brand',
    revenue: '$2.1M',
    system: 'Google Sheets',
    metrics: [
      { label: 'Hours/week saved', value: '9 hrs' },
      { label: 'Stockout reduction', value: '89%' },
      { label: 'Inventory reduction', value: '14%' },
    ],
    payback: '6 weeks',
    quote: 'I used to spend Sundays counting inventory. Now I spend them with my family.',
  },
]

// ─── Small helpers ────────────────────────────────────────────────────────────

function SliderField({
  label, id, min, max, step = 1, value, unit = '',
  onChange, formatValue,
}: {
  label: string; id: string; min: number; max: number; step?: number
  value: number; unit?: string; onChange: (v: number) => void
  formatValue?: (v: number) => string
}) {
  const display = formatValue ? formatValue(value) : `${value}${unit}`
  return (
    <div>
      <div className="flex justify-between items-baseline mb-2">
        <label htmlFor={id} className="text-sm font-medium text-slate-700">{label}</label>
        <span className="text-sm font-bold text-primary-600">{display}</span>
      </div>
      <input
        id={id} type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 rounded-full cursor-pointer"
        style={{ accentColor: '#2563eb' }}
      />
      <div className="flex justify-between text-xs text-slate-400 mt-1">
        <span>{formatValue ? formatValue(min) : `${min}${unit}`}</span>
        <span>{formatValue ? formatValue(max) : `${max}${unit}`}</span>
      </div>
    </div>
  )
}

function NumberField({
  label, id, min, max, value, prefix = '', suffix = '', onChange,
}: {
  label: string; id: string; min: number; max: number
  value: number; prefix?: string; suffix?: string; onChange: (v: number) => void
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-slate-700 mb-1.5">{label}</label>
      <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-primary-300 focus-within:border-primary-400">
        {prefix && <span className="px-3 py-2.5 text-slate-400 text-sm bg-slate-50 border-r border-slate-200">{prefix}</span>}
        <input
          id={id} type="number" min={min} max={max} value={value}
          onChange={(e) => onChange(Math.min(max, Math.max(min, Number(e.target.value))))}
          className="flex-1 px-3 py-2.5 text-sm text-slate-900 focus:outline-none bg-white"
        />
        {suffix && <span className="px-3 py-2.5 text-slate-400 text-sm bg-slate-50 border-l border-slate-200">{suffix}</span>}
      </div>
    </div>
  )
}

// ─── Mode selector ────────────────────────────────────────────────────────────

const modes = [
  {
    id: 'quick' as Mode,
    icon: '⚡',
    time: '30 seconds',
    label: 'Quick estimate',
    desc: 'Get a fast ballpark based on your revenue and industry. Uses Brahmin customer benchmarks.',
    inputs: '3 inputs',
    accent: 'border-emerald-200 hover:border-emerald-400',
    iconBg: 'bg-emerald-50',
  },
  {
    id: 'medium' as Mode,
    icon: '📊',
    time: '2 minutes',
    label: 'More accurate',
    desc: 'Add your actual team size, manual hours, and stockout frequency for a sharper number.',
    inputs: '7 inputs',
    accent: 'border-primary-200 hover:border-primary-400',
    iconBg: 'bg-primary-50',
  },
  {
    id: 'detailed' as Mode,
    icon: '🔬',
    time: '4 minutes',
    label: 'Full analysis',
    desc: 'Your precise ROI using actual labor costs, order values, compliance needs, and wholesale mix.',
    inputs: '11 inputs',
    accent: 'border-violet-200 hover:border-violet-400',
    iconBg: 'bg-violet-50',
  },
]

function ModeSelector({ onSelect }: { onSelect: (m: Mode) => void }) {
  return (
    <div className="grid md:grid-cols-3 gap-5">
      {modes.map((m) => (
        <button
          key={m.id}
          onClick={() => onSelect(m.id)}
          className={`text-left bg-white rounded-2xl border-2 p-6 transition-all hover:shadow-md ${m.accent}`}
        >
          <div className={`w-10 h-10 rounded-xl ${m.iconBg} flex items-center justify-center text-xl mb-4`}>
            {m.icon}
          </div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-base font-bold text-slate-900">{m.label}</span>
            <span className="text-xs text-slate-400">· {m.time}</span>
          </div>
          <p className="text-sm text-slate-500 leading-relaxed mb-4">{m.desc}</p>
          <span className="inline-block text-xs font-semibold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">
            {m.inputs}
          </span>
        </button>
      ))}
    </div>
  )
}

// ─── Results panel ────────────────────────────────────────────────────────────

function ResultsPanel({
  mode, inputs, onUpgrade,
}: {
  mode: Mode; inputs: CalcInputs; onUpgrade: (m: Mode) => void
}) {
  const [showBreakdown, setShowBreakdown] = useState(true)
  const [email, setEmail] = useState('')
  const [emailSent, setEmailSent] = useState(false)

  const results = useMemo(() => calculate(mode, inputs), [mode, inputs])
  const headline = getResultHeadline(results.threeYearROIPercent)

  const savingsDisplay = results.isRange
    ? `${formatCurrency(results.savings.totalLow)} – ${formatCurrency(results.savings.totalHigh)}`
    : formatCurrency(results.savings.total)

  const laborRate = mode === 'detailed' ? inputs.laborCost : 32

  return (
    <div className="space-y-5">

      {/* Annual savings summary */}
      <div className="bg-primary-600 rounded-2xl p-6 text-white">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary-300 mb-2">
          Annual operational savings
        </p>
        <div className="text-4xl font-bold mb-3">{savingsDisplay}</div>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-primary-700/50 rounded-xl px-3 py-2">
            <div className="text-base font-bold">{formatMonths(results.paybackMonths)}</div>
            <div className="text-xs text-primary-300 mt-0.5">to pay for itself</div>
          </div>
          <div className="bg-primary-700/50 rounded-xl px-3 py-2">
            <div className="text-base font-bold">{Math.round(results.savings.weeklyHoursSaved)} hrs/week</div>
            <div className="text-xs text-primary-300 mt-0.5">back for your team</div>
          </div>
        </div>
      </div>

      {/* Cost savings breakdown — open by default (McKinsey: show your work) */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
        <button
          onClick={() => setShowBreakdown(!showBreakdown)}
          className="w-full flex items-center justify-between px-5 py-4 text-sm font-semibold text-slate-800"
        >
          How we calculated this
          <svg
            className={`w-4 h-4 text-slate-400 transition-transform ${showBreakdown ? 'rotate-180' : ''}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {showBreakdown && (
          <div className="border-t border-slate-100 px-5 pb-5 pt-4 space-y-5 text-sm">

            {/* Time savings */}
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <span className="font-semibold text-slate-700">⏱ Time savings</span>
                <span className="font-bold text-slate-900">{formatCurrency(results.savings.timeSavings)}/yr</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {Math.round(results.savings.weeklyHoursSaved)} hrs/week eliminated × 52 weeks × ${laborRate}/hr.{' '}
                {mode === 'quick' && 'Brahmin customer average: 10–12 hrs/week saved.'}
                {mode !== 'quick' && '75% of manual inventory hours are eliminated.'}
              </p>
            </div>

            {/* Inventory carrying savings */}
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <span className="font-semibold text-slate-700">📦 Leaner inventory</span>
                <span className="font-bold text-slate-900">{formatCurrency(results.savings.inventoryCarrySavings)}/yr</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Customers consistently carry 15–22% less buffer stock after implementation.
                We use 15% (conservative). Annual carrying cost at 25% of inventory value
                (storage, insurance, obsolescence, and tied-up capital).
              </p>
            </div>

            {/* Stockout savings */}
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <span className="font-semibold text-slate-700">🚫 Stockout prevention</span>
                <span className="font-bold text-slate-900">{formatCurrency(results.savings.stockoutSavings)}/yr</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Brahmin customers report stockouts dropping near-completely.
                We use 85% reduction (conservative).{' '}
                {mode === 'quick'
                  ? 'Lost sales estimated at 0.5% of revenue — industry average for manufacturers without real-time visibility.'
                  : `Based on your ${inputs.stockoutsPerMonth} stockouts/month at $${inputs.avgOrderValue} avg order value.`}
              </p>
            </div>

            {/* Production delays (detailed only) */}
            {results.savings.delaySavings > 0 && (
              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <span className="font-semibold text-slate-700">⚙️ Production delay reduction</span>
                  <span className="font-bold text-slate-900">{formatCurrency(results.savings.delaySavings)}/yr</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  60% reduction in delays. Each delay costs ~half a day of production output.
                </p>
              </div>
            )}

            {/* Compliance (detailed only) */}
            {results.savings.complianceSavings > 0 && (
              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <span className="font-semibold text-slate-700">✅ Compliance risk avoidance</span>
                  <span className="font-bold text-slate-900">{formatCurrency(results.savings.complianceSavings)}/yr</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Risk-adjusted annual value of audit readiness and faster recall response.
                </p>
              </div>
            )}

            {/* Totals */}
            <div className="border-t border-slate-100 pt-4 space-y-2">
              <div className="flex justify-between font-semibold">
                <span className="text-slate-700">Total annual savings</span>
                <span className="text-slate-900">{formatCurrency(results.savings.total)}</span>
              </div>
              <div className="flex justify-between text-slate-400 text-xs">
                <span>Brahmin ({results.brahminCostLabel})</span>
                <span>− ${results.brahminAnnualCost.toLocaleString()}/yr</span>
              </div>
              {results.isEnterprise && results.onboardingCost > 0 && (
                <div className="flex justify-between text-slate-400 text-xs">
                  <span>Implementation package — data &amp; workflow (year 1 only)</span>
                  <span>− ${results.onboardingCost.toLocaleString()}</span>
                </div>
              )}
              <div className="border-t border-slate-200 pt-2 flex justify-between font-bold">
                <span className="text-slate-800">Net year 1 gain</span>
                <span className="text-emerald-700">
                  {formatCurrency(results.savings.total - results.yearOneCost)}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 italic">
              All estimates are conservative. Actual results depend on your operations and adoption rate.
            </p>
          </div>
        )}
      </div>

      {/* Enterprise implementation callout */}
      {results.isEnterprise && (
        <div className="bg-violet-50 border border-violet-200 rounded-2xl p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-violet-600 mb-1">
            Enterprise — implementation included
          </p>
          <p className="text-xs text-violet-600/70 mb-4">
            We handle your data and configure your workflows. One-time, included in year 1.
          </p>
          <div className="space-y-2 text-sm mb-4">
            {[
              { label: 'Data migration', cost: '$2,500' },
              { label: 'Advanced workflow setup', cost: '$1,500' },
            ].map((item) => (
              <div key={item.label} className="flex justify-between items-baseline">
                <span className="text-violet-800">{item.label}</span>
                <span className="font-semibold text-violet-900">{item.cost}</span>
              </div>
            ))}
            <div className="border-t border-violet-200 pt-2 flex justify-between font-bold">
              <span className="text-violet-800">Total included value</span>
              <span className="text-violet-900">$4,000</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs text-violet-700/80">
            <div className="bg-violet-100 rounded-lg px-3 py-2">
              <span className="font-semibold block text-violet-900">Dedicated manager</span>
              Assigned to your account through go-live
            </div>
            <div className="bg-violet-100 rounded-lg px-3 py-2">
              <span className="font-semibold block text-violet-900">Unlimited features</span>
              Every module, no add-ons, no surprises
            </div>
          </div>
        </div>
      )}

      {/* Growth potential — separate, not included in ROI above */}
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-700">
              Growth potential
            </p>
            <p className="text-xs text-emerald-700/70 mt-0.5">Not included in savings above</p>
          </div>
          <span className="text-xs text-emerald-700 bg-emerald-100 px-2 py-1 rounded-full font-semibold">
            {formatCurrency(results.growth.totalLow)}–{formatCurrency(results.growth.totalHigh)}/yr
          </span>
        </div>
        <div className="space-y-4 text-sm">

          {/* Sales capacity */}
          <div>
            <div className="flex justify-between items-baseline mb-1">
              <span className="font-semibold text-emerald-800">📈 Orders you can now say yes to</span>
              <span className="font-bold text-emerald-700 text-xs">
                +{formatCurrency(results.growth.salesCapacityLow)}–{formatCurrency(results.growth.salesCapacityHigh)}
              </span>
            </div>
            <p className="text-xs text-emerald-700/70 leading-relaxed">
              Real-time inventory and production visibility means you stop turning down or delaying
              orders you could have fulfilled. Conservative range: 2–4% of annual revenue.
            </p>
          </div>

          {/* Working capital */}
          <div>
            <div className="flex justify-between items-baseline mb-1">
              <span className="font-semibold text-emerald-800">💰 Cash freed from inventory</span>
              <span className="font-bold text-emerald-700 text-xs">
                {formatCurrency(results.growth.inventoryFreed)} unlocked
              </span>
            </div>
            <p className="text-xs text-emerald-700/70 leading-relaxed">
              Leaner inventory means {formatCurrency(results.growth.inventoryFreed)} no longer sitting
              on shelves. That capital can go toward growth, new product lines, or equipment.
            </p>
          </div>

          {/* B2B portal lift (detailed only) */}
          {results.growth.b2bLift > 0 && (
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <span className="font-semibold text-emerald-800">🛒 B2B portal order lift</span>
                <span className="font-bold text-emerald-700 text-xs">
                  +{formatCurrency(results.growth.b2bLift)}/yr
                </span>
              </div>
              <p className="text-xs text-emerald-700/70 leading-relaxed">
                Self-service wholesale ordering increases repeat purchase frequency.
                Customers reorder when they're ready — not just when they remember to call.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* 3-year view */}
      <div className="bg-slate-900 rounded-2xl p-5 text-white">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
          3-year view
        </p>
        <div className="grid grid-cols-3 gap-3 mb-5">
          <div className="text-center">
            <div className="text-lg font-bold">{formatCurrency(results.threeYearCost)}</div>
            <div className="text-xs text-slate-400 mt-0.5">You pay</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-emerald-400">
              {formatCurrency(results.threeYearSavings)}
            </div>
            <div className="text-xs text-slate-400 mt-0.5">You save</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-emerald-400">
              {Math.round(results.threeYearROIPercent).toLocaleString()}%
            </div>
            <div className="text-xs text-slate-400 mt-0.5">3-yr ROI</div>
          </div>
        </div>
        {results.isEnterprise && (
          <div className="bg-white/5 rounded-xl px-4 py-3 mb-3 text-xs text-slate-300 space-y-1.5">
            <div className="flex justify-between">
              <span>Year 1 (incl. $4K implementation)</span>
              <span className="font-semibold">{formatCurrency(results.yearOneCost)}</span>
            </div>
            <div className="flex justify-between">
              <span>Year 2 &amp; 3 (subscription only)</span>
              <span className="font-semibold">{formatCurrency(results.yearTwoPlusCost)}/yr</span>
            </div>
          </div>
        )}
        <div className="bg-white/5 rounded-xl px-4 py-3 mb-4">
          <p className="text-xs text-slate-300 italic">{headline}</p>
        </div>
        <Link
          href="/demo"
          className="block w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-xl transition-colors text-sm text-center mb-3"
        >
          Book a demo — see this with your numbers
        </Link>
        {emailSent ? (
          <p className="text-emerald-400 text-xs text-center">✓ Got it — we'll email your report.</p>
        ) : (
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Email me this report"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-3 py-2 text-sm rounded-xl bg-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white/20 border border-white/10"
            />
            <button
              onClick={() => { if (email) setEmailSent(true) }}
              className="px-4 py-2 text-sm font-semibold text-slate-200 border border-white/20 rounded-xl hover:bg-white/10 transition-colors"
            >
              Send
            </button>
          </div>
        )}
      </div>

      {/* Upgrade prompts */}
      {mode === 'quick' && (
        <button
          onClick={() => onUpgrade('medium')}
          className="w-full text-center text-sm font-semibold text-primary-600 hover:text-primary-700 py-2.5 border border-primary-200 rounded-xl hover:bg-primary-50 transition-colors"
        >
          Add your actual numbers for a sharper estimate →
        </button>
      )}
      {mode === 'medium' && (
        <button
          onClick={() => onUpgrade('detailed')}
          className="w-full text-center text-sm font-semibold text-primary-600 hover:text-primary-700 py-2.5 border border-primary-200 rounded-xl hover:bg-primary-50 transition-colors"
        >
          Get your full ROI analysis →
        </button>
      )}
    </div>
  )
}

// ─── Peers section ────────────────────────────────────────────────────────────

function PeersSection() {
  return (
    <div>
      <div className="text-center mb-8">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
          Real results · composite customer profiles
        </p>
        <h2 className="text-2xl font-bold text-slate-900">How 3 similar manufacturers fared</h2>
        <p className="text-slate-500 text-sm mt-2 max-w-md mx-auto">
          Based on data from Brahmin customers. Profiles are representative composites —
          real names and data available in customer stories.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        {PEERS.map((peer) => (
          <div key={peer.profile} className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col">
            <div className="mb-4">
              <p className="font-semibold text-slate-800 text-sm">{peer.profile}</p>
              <p className="text-xs text-slate-400 mt-0.5">{peer.revenue} annual revenue</p>
              <p className="text-xs text-slate-400">Previously: {peer.system}</p>
            </div>
            <div className="space-y-2.5 mb-4 flex-1">
              {peer.metrics.map((m) => (
                <div key={m.label} className="flex justify-between items-center">
                  <span className="text-xs text-slate-500">{m.label}</span>
                  <span className="text-sm font-bold text-slate-900">{m.value}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-slate-100 pt-3 flex items-center justify-between mb-4">
              <span className="text-xs text-slate-400">Paid back in</span>
              <span className="text-sm font-bold text-primary-600">{peer.payback}</span>
            </div>
            <p className="text-xs text-slate-500 italic leading-relaxed">"{peer.quote}"</p>
          </div>
        ))}
      </div>
      <p className="text-center text-xs text-slate-400 mt-6">
        Want to see your numbers alongside a real customer story?{' '}
        <Link href="/demo" className="text-primary-600 hover:underline font-medium">
          Book a demo
        </Link>
      </p>
    </div>
  )
}

// ─── Input forms ──────────────────────────────────────────────────────────────

function QuickInputs({
  inputs, onChange,
}: {
  inputs: CalcInputs
  onChange: (k: keyof CalcInputs, v: CalcInputs[keyof CalcInputs]) => void
}) {
  return (
    <div className="space-y-6">
      <SliderField
        id="revenue" label="Annual revenue"
        min={0.5} max={50} step={0.5} value={inputs.revenue}
        formatValue={(v) => v < 1 ? `$${v * 1000}K` : `$${v}M`}
        onChange={(v) => onChange('revenue', v)}
      />
      <div>
        <label htmlFor="industry" className="block text-sm font-medium text-slate-700 mb-1.5">
          Industry
        </label>
        <select
          id="industry" value={inputs.industry}
          onChange={(e) => onChange('industry', e.target.value)}
          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-300 bg-white"
        >
          <option value="food-beverage">Food & Beverage</option>
          <option value="manufacturing">Manufacturing</option>
          <option value="wholesale">Wholesale Distribution</option>
          <option value="cosmetics">Cosmetics & Beauty</option>
          <option value="supplements">Supplements & Nutraceuticals</option>
          <option value="apparel">Apparel & Textiles</option>
          <option value="electronics">Electronics</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <p className="text-sm font-medium text-slate-700 mb-2">Current system</p>
        <div className="space-y-2">
          {[
            { value: 'spreadsheets', label: 'Spreadsheets (Excel / Google Sheets)' },
            { value: 'quickbooks', label: 'QuickBooks / accounting only' },
            { value: 'other-software', label: 'Another inventory software' },
            { value: 'paper', label: 'Paper / manual processes' },
          ].map((opt) => (
            <label
              key={opt.value}
              className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-50 transition-colors has-[:checked]:border-primary-300 has-[:checked]:bg-primary-50"
            >
              <input
                type="radio" name="currentSystem" value={opt.value}
                checked={inputs.currentSystem === opt.value}
                onChange={(e) => onChange('currentSystem', e.target.value)}
                style={{ accentColor: '#2563eb' }}
              />
              <span className="text-sm text-slate-700">{opt.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}

function MediumInputs({
  inputs, onChange,
}: {
  inputs: CalcInputs
  onChange: (k: keyof CalcInputs, v: CalcInputs[keyof CalcInputs]) => void
}) {
  return (
    <div className="space-y-6">
      <QuickInputs inputs={inputs} onChange={onChange} />
      <div className="border-t border-slate-200 pt-6 space-y-6">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
          Your team & operations
        </p>
        <SliderField
          id="teamSize" label="People who touch inventory"
          min={1} max={20} value={inputs.teamSize} unit=" people"
          onChange={(v) => onChange('teamSize', v)}
        />
        <SliderField
          id="manualHours" label="Total hours/week on manual inventory work"
          min={1} max={40} value={inputs.manualHoursWeek} unit=" hrs/week"
          onChange={(v) => onChange('manualHoursWeek', v)}
        />
        <div className="grid grid-cols-2 gap-4">
          <NumberField
            id="stockouts" label="Stockouts per month" min={0} max={30}
            value={inputs.stockoutsPerMonth} suffix="× /mo"
            onChange={(v) => onChange('stockoutsPerMonth', v)}
          />
          <NumberField
            id="aov" label="Avg. order value" min={50} max={50000}
            value={inputs.avgOrderValue} prefix="$"
            onChange={(v) => onChange('avgOrderValue', v)}
          />
        </div>
      </div>
    </div>
  )
}

function DetailedInputs({
  inputs, onChange,
}: {
  inputs: CalcInputs
  onChange: (k: keyof CalcInputs, v: CalcInputs[keyof CalcInputs]) => void
}) {
  return (
    <div className="space-y-6">
      <MediumInputs inputs={inputs} onChange={onChange} />
      <div className="border-t border-slate-200 pt-6 space-y-5">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
          Your precise numbers
        </p>
        <div className="grid grid-cols-2 gap-4">
          <NumberField
            id="laborCost" label="Hourly labor cost" min={15} max={100}
            value={inputs.laborCost} prefix="$" suffix="/hr"
            onChange={(v) => onChange('laborCost', v)}
          />
          <NumberField
            id="delays" label="Production delays/month" min={0} max={20}
            value={inputs.productionDelaysPerMonth} suffix="× /mo"
            onChange={(v) => onChange('productionDelaysPerMonth', v)}
          />
        </div>
        <SliderField
          id="wholesale" label="Revenue from wholesale / B2B"
          min={0} max={100} value={inputs.wholesalePercent} unit="%"
          onChange={(v) => onChange('wholesalePercent', v)}
        />
        <label className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-50 transition-colors has-[:checked]:border-primary-300 has-[:checked]:bg-primary-50">
          <input
            type="checkbox" checked={inputs.hasCompliance}
            onChange={(e) => onChange('hasCompliance', e.target.checked)}
            className="w-4 h-4 rounded"
            style={{ accentColor: '#2563eb' }}
          />
          <div>
            <span className="text-sm font-medium text-slate-700 block">Compliance requirements</span>
            <span className="text-xs text-slate-400">FDA, FSMA, SQF, or other regulatory requirements</span>
          </div>
        </label>
      </div>
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function ROICalculator() {
  const [mode, setMode] = useState<Mode | null>(null)
  const [inputs, setInputs] = useState<CalcInputs>(DEFAULT_INPUTS)

  function updateInput(key: keyof CalcInputs, value: CalcInputs[keyof CalcInputs]) {
    setInputs((prev) => ({ ...prev, [key]: value }))
  }

  function handleModeSelect(m: Mode) {
    setMode(m)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!mode) {
    return (
      <div className="space-y-4">
        <ModeSelector onSelect={handleModeSelect} />
        <p className="text-center text-xs text-slate-400">
          No email required · results appear instantly · all estimates are conservative
        </p>
      </div>
    )
  }

  const modeInfo = modes.find((m) => m.id === mode)!

  return (
    <div className="space-y-16">

      {/* Back + mode label */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setMode(null)}
          className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-700 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
        <span className="text-slate-300">|</span>
        <span className="text-sm text-slate-500">{modeInfo.icon} {modeInfo.label}</span>
      </div>

      {/* Inputs + Results */}
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div className="bg-white rounded-2xl border border-slate-200 p-8">
          <h2 className="text-lg font-bold text-slate-900 mb-6">
            {mode === 'quick' && 'Tell us about your business'}
            {mode === 'medium' && 'Give us a bit more detail'}
            {mode === 'detailed' && 'Your precise numbers'}
          </h2>
          {mode === 'quick' && <QuickInputs inputs={inputs} onChange={updateInput} />}
          {mode === 'medium' && <MediumInputs inputs={inputs} onChange={updateInput} />}
          {mode === 'detailed' && <DetailedInputs inputs={inputs} onChange={updateInput} />}
        </div>

        <div className="lg:sticky lg:top-24">
          <ResultsPanel mode={mode} inputs={inputs} onUpgrade={handleModeSelect} />
        </div>
      </div>

      {/* Peers section */}
      <div className="border-t border-slate-200 pt-16">
        <PeersSection />
      </div>

      {/* Methodology footnote */}
      <div className="text-center pb-4">
        <p className="text-slate-400 text-xs max-w-xl mx-auto leading-relaxed">
          Estimates use conservative benchmarks from Brahmin customer data and industry research
          (Aberdeen Group, MRPeasy 2026 Customer Survey). All assumptions are documented inline.
          Actual results depend on your operations, team adoption, and starting conditions.
        </p>
      </div>
    </div>
  )
}
