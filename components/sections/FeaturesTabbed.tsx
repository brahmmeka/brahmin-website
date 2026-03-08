'use client'

import { useState } from 'react'
import Link from 'next/link'

// ─── Types ─────────────────────────────────────────────────────────────────────

type StatColor    = 'blue' | 'amber' | 'purple' | 'red'
type MobileScreen = 'home' | 'receive' | 'work-order' | 'pick-pack' | 'inventory-adjustment' | 'cycle-count'
type MockupKey     = 'inventory' | 'purchasing' | 'production' | 'traceability' | 'integrations' | 'b2b' | 'mobile'
type ProductionTab  = 'recipe' | 'costs' | 'timeline'
type PurchasingTab  = 'pos' | 'reorder' | 'vendors'

// ─── Mockups ───────────────────────────────────────────────────────────────────

function InventoryMockup({
  activeCard,
  setActiveCard,
}: {
  activeCard: number
  setActiveCard: (i: number) => void
}) {
  const statCards: { label: string; value: string; sublabel: string; color: StatColor }[] = [
    { label: 'ON HAND',   value: '12,847', sublabel: 'Physical Inventory',    color: 'blue'   },
    { label: 'ALLOCATED', value: '8,234',  sublabel: 'Reserved for Orders',   color: 'amber'  },
    { label: 'EXPECTED',  value: '3,500',  sublabel: 'Incoming Supply',       color: 'purple' },
    { label: 'SHORTAGE',  value: '892',    sublabel: 'Demand exceeds Supply',  color: 'red'    },
  ]

  const warehouseData = [
    { warehouse: 'Main Warehouse',  location: 'Dry Storage', qty: '6,420 ea' },
    { warehouse: 'East Coast 3PL',  location: 'Rack B-14',   qty: '4,127 ea' },
    { warehouse: 'West Fulfillment', location: 'Zone A',     qty: '2,300 ea' },
  ]

  const orderData = [
    { order: '#SO-4521', date: 'Mar 05 2026', customer: 'Metro Foods Co.',  qty: '240 ea',   orderInv: 'In Stock',    status: 'Confirmed' },
    { order: '#SO-4518', date: 'Mar 04 2026', customer: 'Sunrise Grocers',  qty: '120 ea',   orderInv: 'In Stock',    status: 'Confirmed' },
    { order: '#SO-4515', date: 'Mar 04 2026', customer: 'Harbor Market',    qty: '1,800 ea', orderInv: 'Out of Stock', status: 'Confirmed' },
  ]

  const colorClasses: Record<StatColor, { bg: string; border: string; text: string }> = {
    blue:   { bg: 'bg-blue-50',   border: 'border-blue-400',   text: 'text-blue-600'   },
    amber:  { bg: 'bg-amber-50',  border: 'border-amber-300',  text: 'text-amber-700'  },
    purple: { bg: 'bg-purple-50', border: 'border-purple-300', text: 'text-purple-600' },
    red:    { bg: 'bg-red-50',    border: 'border-red-300',    text: 'text-red-600'    },
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden w-full">
      {/* Header */}
      <div className="px-4 py-3 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-slate-800">Organic Maple Granola</span>
          <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-medium">In Stock</span>
        </div>
        <div className="text-xs text-slate-500 mt-0.5">SKU: GRN-MAPLE-12OZ</div>
      </div>

      {/* Stat cards */}
      <div className="p-3 grid grid-cols-4 gap-2">
        {statCards.map((card, i) => (
          <button
            key={i}
            onClick={() => setActiveCard(i)}
            className={`text-left rounded-lg p-2 transition-all ${
              activeCard === i
                ? `${colorClasses[card.color].bg} border-2 ${colorClasses[card.color].border}`
                : 'bg-white border border-slate-200 hover:border-slate-300'
            }`}
          >
            <div className="text-[10px] text-slate-600 uppercase">{card.label}</div>
            <div className={`text-lg font-bold ${colorClasses[card.color].text}`}>{card.value}</div>
            <div className="text-[9px] text-slate-600">{card.sublabel}</div>
          </button>
        ))}
      </div>

      {/* Dynamic content */}
      <div className="px-3 pb-3">
        {activeCard === 0 && (
          <div className="border border-slate-200 rounded-lg overflow-hidden">
            <div className="bg-slate-50 px-3 py-2 text-[10px] font-medium text-slate-600 grid grid-cols-3">
              <span>Warehouse</span><span>Location</span><span className="text-right">Quantity</span>
            </div>
            {warehouseData.map((row, i) => (
              <div key={i} className="px-3 py-2 text-xs grid grid-cols-3 border-t border-slate-100 hover:bg-slate-50">
                <span className="text-slate-700">{row.warehouse}</span>
                <span className="text-slate-500">{row.location}</span>
                <span className="text-right font-medium text-slate-700">{row.qty}</span>
              </div>
            ))}
          </div>
        )}

        {activeCard === 1 && (
          <div className="border border-slate-200 rounded-lg overflow-hidden">
            <div className="bg-slate-50 px-3 py-1.5 text-[10px] font-medium text-slate-600 grid grid-cols-6 gap-1">
              <span>Order #</span><span>Date</span><span>Customer</span>
              <span className="text-right">Qty</span><span className="text-center">Inv</span><span className="text-center">Status</span>
            </div>
            {orderData.map((row, i) => (
              <div key={i} className="px-3 py-1.5 text-[10px] grid grid-cols-6 gap-1 border-t border-slate-100 hover:bg-slate-50 items-center">
                <span className="text-slate-700 font-medium">{row.order}</span>
                <span className="text-slate-500">{row.date}</span>
                <span className="text-slate-600 truncate">{row.customer}</span>
                <span className="text-right text-slate-600">{row.qty}</span>
                <span className={`text-center px-1 py-0.5 rounded text-[9px] ${row.orderInv === 'In Stock' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
                  {row.orderInv}
                </span>
                <span className="text-center px-1 py-0.5 rounded text-[9px] bg-blue-100 text-blue-700">{row.status}</span>
              </div>
            ))}
          </div>
        )}

        {activeCard === 2 && (
          <div className="border border-slate-200 rounded-lg p-4 text-center">
            <div className="text-2xl mb-2">📦</div>
            <div className="text-sm font-medium text-slate-700">3 Purchase Orders Incoming</div>
            <div className="text-xs text-slate-500 mt-1">Expected arrival: Mar 8 – Mar 12</div>
          </div>
        )}

        {activeCard === 3 && (
          <div className="border border-red-200 bg-red-50 rounded-lg p-4">
            <div className="text-sm font-medium text-red-700">⚠️ Shortage Alert</div>
            <div className="text-xs text-red-600 mt-1">892 units short for upcoming orders. Consider expediting PO #4521 or reallocating stock.</div>
          </div>
        )}
      </div>
    </div>
  )
}

function PurchasingMockup() {
  const [tab, setTab] = useState<PurchasingTab>('pos')
  const [expandedPO, setExpandedPO] = useState<string | null>(null)
  const [showAddVendor, setShowAddVendor] = useState(false)

  const tabs: { id: PurchasingTab; label: string }[] = [
    { id: 'pos',     label: 'Purchase Orders' },
    { id: 'reorder', label: 'Reorder Alerts'  },
    { id: 'vendors', label: 'Vendors'          },
  ]

  const pos = [
    { id: 'PO-0892', vendor: 'Valley Farms LLC',  items: 3, total: '$2,340.00', status: 'Confirmed',   eta: 'Mar 10' },
    { id: 'PO-0891', vendor: 'Pacific Oils Co.',  items: 2, total: '$875.00',   status: 'In Progress', eta: 'Mar 07' },
    { id: 'PO-0889', vendor: 'SaltWorks Inc.',    items: 1, total: '$148.00',   status: 'Fulfilled',   eta: 'Mar 02' },
  ]

  const reorderItems = [
    { name: 'Rolled Oats (Organic)', current: 180,  min: 500,  unit: 'lbs', vendor: 'Valley Farms LLC'  },
    { name: 'Maple Syrup (Grade A)', current: 12,   min: 50,   unit: 'lbs', vendor: 'Maple Grove Inc.'  },
    { name: 'Coconut Oil',           current: 8,    min: 30,   unit: 'lbs', vendor: 'Pacific Oils Co.'  },
  ]

  const vendors = [
    { name: 'Valley Farms LLC',  rating: 5, items: 4, lastOrder: 'Mar 01' },
    { name: 'Pacific Oils Co.',  rating: 4, items: 2, lastOrder: 'Feb 22' },
    { name: 'Maple Grove Inc.',  rating: 5, items: 3, lastOrder: 'Feb 18' },
  ]

  const statusStyle: Record<string, string> = {
    Confirmed:   'bg-blue-100 text-blue-700',
    'In Progress': 'bg-amber-100 text-amber-700',
    Fulfilled:   'bg-emerald-100 text-emerald-700',
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden w-full">
      {/* Header */}
      <div className="bg-slate-50 px-5 py-3.5 border-b border-slate-200 flex items-center justify-between">
        <span className="text-sm font-semibold text-slate-700">Purchasing</span>
        <button className="text-xs bg-primary-600 hover:bg-primary-700 text-white px-3 py-1.5 rounded-lg font-medium transition-colors">
          + New PO
        </button>
      </div>

      {/* Sub-tabs */}
      <div className="flex border-b border-slate-200">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`flex-1 py-2.5 text-xs font-medium transition-colors ${
              tab === t.id
                ? 'text-primary-600 border-b-2 border-primary-500 -mb-px'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="p-5">
        {/* Purchase Orders tab */}
        {tab === 'pos' && (
          <div className="space-y-2.5">
            {pos.map((po) => (
              <div key={po.id}>
                <button
                  onClick={() => setExpandedPO(expandedPO === po.id ? null : po.id)}
                  className="w-full flex items-center justify-between px-3 py-3 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all text-left"
                >
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="text-sm font-semibold text-slate-700">{po.id}</div>
                      <div className="text-xs text-slate-400 mt-0.5">{po.vendor}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${statusStyle[po.status]}`}>
                      {po.status}
                    </span>
                    <span className="text-sm font-semibold text-slate-700">{po.total}</span>
                    <svg
                      className={`w-4 h-4 text-slate-400 transition-transform ${expandedPO === po.id ? 'rotate-180' : ''}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                {expandedPO === po.id && (
                  <div className="mx-1 mb-2 bg-slate-50 border border-slate-200 rounded-xl p-3">
                    <div className="grid grid-cols-3 text-xs text-slate-500 mb-3 gap-2">
                      <div><div className="font-medium text-slate-600 mb-0.5">Items</div>{po.items}</div>
                      <div><div className="font-medium text-slate-600 mb-0.5">ETA</div>{po.eta}</div>
                      <div><div className="font-medium text-slate-600 mb-0.5">Total</div>{po.total}</div>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 text-xs py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-white transition-colors font-medium">
                        View
                      </button>
                      {po.status !== 'Fulfilled' && (
                        <button className="flex-1 text-xs py-1.5 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors font-medium">
                          Receive
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Reorder Alerts tab */}
        {tab === 'reorder' && (
          <div className="space-y-3">
            <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
              <svg className="w-3.5 h-3.5 text-amber-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126z" />
              </svg>
              <span className="text-xs font-medium text-amber-700">3 items below reorder point</span>
            </div>
            {reorderItems.map((item) => (
              <div key={item.name} className="p-3 border border-slate-200 rounded-xl">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <div className="text-sm font-medium text-slate-700">{item.name}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{item.vendor}</div>
                  </div>
                  <button className="text-xs bg-primary-600 hover:bg-primary-700 text-white px-2.5 py-1 rounded-lg font-medium transition-colors">
                    Create PO
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-slate-100 rounded-full h-2">
                    <div
                      className="bg-red-400 h-2 rounded-full"
                      style={{ width: `${Math.min((item.current / item.min) * 100, 100)}%` }}
                    />
                  </div>
                  <span className="text-xs text-red-600 font-medium shrink-0">
                    {item.current}/{item.min} {item.unit}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Vendors tab */}
        {tab === 'vendors' && (
          <div className="space-y-2">
            {!showAddVendor ? (
              <>
                {vendors.map((v) => (
                  <div key={v.name} className="flex items-center justify-between px-3 py-3 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all">
                    <div>
                      <div className="text-sm font-medium text-slate-700">{v.name}</div>
                      <div className="text-xs text-slate-400 mt-0.5">{v.items} items · Last order {v.lastOrder}</div>
                    </div>
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          className={`w-3 h-3 ${i < v.rating ? 'text-amber-400' : 'text-slate-200'}`}
                          fill="currentColor" viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="border-t border-slate-100 pt-2">
                  <button
                    onClick={() => setShowAddVendor(true)}
                    className="w-full text-primary-600 text-xs font-medium py-2 hover:bg-primary-50 rounded-lg transition"
                  >
                    + Add Vendor
                  </button>
                </div>
              </>
            ) : (
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-slate-700">New Vendor</span>
                  <button onClick={() => setShowAddVendor(false)} className="text-[10px] text-slate-400 hover:text-slate-600">← Back</button>
                </div>
                <div className="space-y-2">
                  {['Vendor name', 'Contact email', 'Phone number'].map((placeholder) => (
                    <div key={placeholder} className="w-full border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-400 bg-slate-50">
                      {placeholder}
                    </div>
                  ))}
                  <button className="w-full bg-primary-600 hover:bg-primary-700 text-white text-xs font-medium py-2 rounded-lg transition-colors">
                    Save Vendor
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

function ProductionMockup() {
  const [tab, setTab] = useState<ProductionTab>('recipe')

  const tabs: { id: ProductionTab; label: string }[] = [
    { id: 'recipe',   label: 'Recipe'   },
    { id: 'costs',    label: 'Costs'    },
    { id: 'timeline', label: 'Timeline' },
  ]

  const ingredients = [
    { name: 'Rolled Oats (Organic)', qty: '250 lbs', cost: '$375.00' },
    { name: 'Maple Syrup (Grade A)', qty: '45 lbs',  cost: '$540.00' },
    { name: 'Coconut Oil',           qty: '30 lbs',  cost: '$210.00' },
    { name: 'Sea Salt',              qty: '2 lbs',   cost: '$8.00'   },
    { name: 'Vanilla Extract',       qty: '1 lb',    cost: '$114.50' },
  ]

  const costs = [
    { label: 'Ingredients',           value: '$1,247.50' },
    { label: 'Labor (4.5 hrs @ $25)', value: '$112.50'  },
    { label: 'Overhead (6%)',          value: '$85.00'   },
  ]

  const timeline: { step: string; duration: string; status: 'done' | 'active' | 'pending' }[] = [
    { step: 'Mix dry ingredients', duration: '15 min', status: 'done'    },
    { step: 'Add wet ingredients', duration: '10 min', status: 'done'    },
    { step: 'Bake at 325°F',       duration: '35 min', status: 'active'  },
    { step: 'Cool & portion',      duration: '20 min', status: 'pending' },
    { step: 'Package & label',     duration: '30 min', status: 'pending' },
  ]

  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden w-full">
      {/* Header */}
      <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
        <span className="text-sm font-semibold text-slate-700">Work Order #WO-1042</span>
        <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">In Progress</span>
      </div>

      {/* Product name */}
      <div className="px-4 py-2.5 border-b border-slate-100">
        <div className="text-sm font-semibold text-slate-800">Organic Maple Granola</div>
        <div className="text-xs text-slate-400 mt-0.5">Batch: 500 lbs · Started: 8:30 AM</div>
      </div>

      {/* Sub-tabs */}
      <div className="flex border-b border-slate-200">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`flex-1 py-2 text-xs font-medium transition-colors ${
              tab === t.id
                ? 'text-emerald-700 border-b-2 border-emerald-500 -mb-px'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-4">
        {tab === 'recipe' && (
          <div>
            <div className="grid grid-cols-3 text-[10px] font-medium text-slate-400 uppercase mb-2">
              <span>Ingredient</span>
              <span className="text-right">Qty</span>
              <span className="text-right">Cost</span>
            </div>
            {ingredients.map((ing) => (
              <div key={ing.name} className="grid grid-cols-3 text-xs py-1.5 border-b border-slate-50">
                <span className="text-slate-600 truncate pr-2">{ing.name}</span>
                <span className="text-right text-slate-500">{ing.qty}</span>
                <span className="text-right font-medium text-slate-700">{ing.cost}</span>
              </div>
            ))}
          </div>
        )}

        {tab === 'costs' && (
          <div className="space-y-2">
            {costs.map((c) => (
              <div key={c.label} className="flex justify-between text-xs">
                <span className="text-slate-500">{c.label}</span>
                <span className="font-medium text-slate-700">{c.value}</span>
              </div>
            ))}
            <div className="border-t border-slate-200 pt-2 mt-2 space-y-1">
              <div className="flex justify-between text-sm font-semibold">
                <span className="text-slate-700">Total Cost</span>
                <span className="text-emerald-700">$1,445.00</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-slate-400">Cost per lb</span>
                <span className="font-semibold text-emerald-700">$2.89</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-slate-400">Margin at $5.50/lb</span>
                <span className="font-semibold text-blue-600">47.5%</span>
              </div>
            </div>
          </div>
        )}

        {tab === 'timeline' && (
          <div className="space-y-2.5">
            {timeline.map((s, i) => (
              <div key={i} className="flex items-center gap-3">
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                    s.status === 'done'   ? 'bg-emerald-500' :
                    s.status === 'active' ? 'bg-amber-400'   : 'bg-slate-200'
                  }`}
                >
                  {s.status === 'done' ? (
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <div className={`w-2 h-2 rounded-full ${s.status === 'active' ? 'bg-white' : 'bg-slate-400'}`} />
                  )}
                </div>
                <div className="flex-1 flex justify-between items-center">
                  <span className={`text-xs ${s.status === 'pending' ? 'text-slate-400' : 'text-slate-700'}`}>
                    {s.step}
                  </span>
                  <span className="text-[10px] text-slate-400">{s.duration}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function TraceabilityMockup() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null)
  const [showRecall, setShowRecall]     = useState(false)

  const steps = [
    {
      step: 'Received',    time: 'Jan 15',
      detail: 'Valley Farms Oats · 2,000 lbs',
      expanded: 'Supplier: Valley Farms LLC · PO #4201 · Lot: VF-2026-0089 · Temp: 65°F ✓',
    },
    {
      step: 'Production',  time: 'Jan 18',
      detail: 'Batch #WO-1042 · 1,800 lbs yield',
      expanded: 'Work Order WO-1042 · 5 ingredients consumed · Yield: 90% · Line 2',
    },
    {
      step: 'QA Approved', time: 'Jan 18',
      detail: 'Passed all 12 checks',
      expanded: 'Inspector: J. Torres · Moisture: 4.2% ✓ · Weight avg: 11.95oz ✓ · Micro: Clear ✓',
    },
    {
      step: 'Shipped',     time: 'Jan 20',
      detail: '→ Metro Foods (142 cases)',
      expanded: 'Customer: Metro Foods Co. · Order #SO-4488 · 142 cases · UPS 1Z999AA10123456784',
    },
  ]

  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
        <span className="text-sm font-semibold text-slate-700">Lot Trace: LOT-2026-0342</span>
        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Complete</span>
      </div>

      {showRecall ? (
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold text-red-700">📋 Recall Report</span>
            <button onClick={() => setShowRecall(false)} className="text-[10px] text-slate-400 hover:text-slate-600">← Back</button>
          </div>
          <div className="border border-red-200 bg-red-50 rounded-lg p-3 space-y-2 text-xs">
            <div className="font-semibold text-red-800">LOT-2026-0342 · Organic Maple Granola</div>
            <div className="grid grid-cols-2 gap-2 text-[10px]">
              <div>
                <div className="text-red-500 font-medium">Affected Units</div>
                <div className="text-slate-700">1,800 lbs / 2,400 cases</div>
              </div>
              <div>
                <div className="text-red-500 font-medium">Customers</div>
                <div className="text-slate-700">1 customer</div>
              </div>
              <div>
                <div className="text-red-500 font-medium">Raw Material</div>
                <div className="text-slate-700">Valley Farms Lot VF-0089</div>
              </div>
              <div>
                <div className="text-red-500 font-medium">Generated In</div>
                <div className="text-slate-700">4 seconds</div>
              </div>
            </div>
            <div className="pt-1 border-t border-red-200">
              <div className="text-[10px] text-red-500 font-medium mb-0.5">Customers to Notify</div>
              <div className="text-slate-700 text-[10px]">Metro Foods Co. — 142 cases · Order #SO-4488</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-4 space-y-3">
          <div className="relative pl-4 border-l-2 border-emerald-200 space-y-3">
            {steps.map((item, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[21px] w-3 h-3 rounded-full bg-emerald-500 border-2 border-white" />
                <button
                  onClick={() => setExpandedStep(expandedStep === i ? null : i)}
                  className="w-full text-left"
                >
                  <div className="text-xs">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-slate-700">{item.step}</span>
                      <div className="flex items-center gap-1">
                        <span className="text-slate-400">{item.time}</span>
                        <svg
                          className={`w-3 h-3 text-slate-400 transition-transform ${expandedStep === i ? 'rotate-180' : ''}`}
                          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                    <div className="text-slate-500">{item.detail}</div>
                    {expandedStep === i && (
                      <div className="mt-1.5 bg-slate-50 border border-slate-100 rounded-lg p-2 text-[10px] text-slate-500">
                        {item.expanded}
                      </div>
                    )}
                  </div>
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={() => setShowRecall(true)}
            className="w-full bg-slate-100 hover:bg-red-50 hover:text-red-700 hover:border-red-200 text-slate-700 text-xs font-medium py-2 rounded-lg transition border border-transparent"
          >
            📋 Generate Recall Report
          </button>
        </div>
      )}
    </div>
  )
}

function IntegrationsMockup() {
  const [expandedApp, setExpandedApp] = useState<string | null>(null)
  const [showAddModal, setShowAddModal] = useState(false)

  const apps = [
    {
      name: 'QuickBooks Online', status: 'Synced 2m ago',     icon: '📗',
      detail: 'Invoices, payments & COGS sync automatically. Last sync: 2 min ago · 1,247 records.',
    },
    {
      name: 'Shopify',           status: '847 orders synced', icon: '🛍️',
      detail: '3 stores connected · Orders pull every 15 min · Inventory updates in real-time.',
    },
    {
      name: 'ShipStation',       status: 'Real-time sync',    icon: '🚚',
      detail: 'Shipments auto-created from sales orders · Tracking numbers sync back to Brahmin.',
    },
  ]

  const available = [
    { name: 'BigCommerce',  icon: '🛒' },
    { name: 'Xero',         icon: '💼' },
    { name: 'WooCommerce',  icon: '🛍️' },
    { name: 'Faire',        icon: '🏷️' },
    { name: 'SPS Commerce', icon: '📋' },
    { name: 'Zapier',       icon: '⚡' },
  ]

  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
        <span className="text-sm font-semibold text-slate-700">Connected Apps</span>
        <span className="text-xs text-slate-400">3 active</span>
      </div>

      {showAddModal ? (
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold text-slate-700">Add Integration</span>
            <button onClick={() => setShowAddModal(false)} className="text-[10px] text-slate-400 hover:text-slate-600">
              ← Back
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {available.map((app) => (
              <button
                key={app.name}
                className="flex items-center gap-2 p-2 border border-slate-200 rounded-lg hover:border-emerald-300 hover:bg-emerald-50 transition-all text-left"
              >
                <span className="text-lg">{app.icon}</span>
                <span className="text-xs font-medium text-slate-700">{app.name}</span>
              </button>
            ))}
          </div>
          <p className="text-[10px] text-slate-400 mt-3 text-center">8 native integrations · 5,000+ via Zapier · API in beta</p>
        </div>
      ) : (
        <div className="p-4 space-y-1">
          {apps.map((app) => (
            <div key={app.name}>
              <button
                onClick={() => setExpandedApp(expandedApp === app.name ? null : app.name)}
                className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{app.icon}</span>
                  <div className="text-left">
                    <div className="text-sm font-medium text-slate-700">{app.name}</div>
                    <div className="text-xs text-slate-400">{app.status}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <svg
                    className={`w-3 h-3 text-slate-400 transition-transform ${expandedApp === app.name ? 'rotate-180' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              {expandedApp === app.name && (
                <div className="mx-2 mb-1 bg-slate-50 border border-slate-100 rounded-lg p-2 text-[10px] text-slate-500">
                  {app.detail}
                </div>
              )}
            </div>
          ))}
          <div className="border-t border-slate-100 pt-2">
            <button
              onClick={() => setShowAddModal(true)}
              className="w-full text-emerald-700 text-xs font-medium py-2 hover:bg-emerald-50 rounded-lg transition"
            >
              + Add Integration
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

function B2BMockup() {
  const catalog = [
    { key: 'granola',  name: 'Organic Granola 12oz', price: 4.25, caseSize: '24/case' },
    { key: 'clusters', name: 'Maple Clusters 8oz',   price: 3.80, caseSize: '12/case' },
    { key: 'bars',     name: 'Honey Oat Bars 6-pk',  price: 6.50, caseSize: '12/case' },
  ]

  const [quantities, setQuantities] = useState<Record<string, number>>({
    granola:  10,
    clusters: 5,
    bars:     0,
  })

  function adjust(key: string, delta: number) {
    setQuantities((prev) => ({ ...prev, [key]: Math.max(0, (prev[key] ?? 0) + delta) }))
  }

  const totalUnits = catalog.reduce((sum, item) => sum + (quantities[item.key] ?? 0), 0)
  const totalPrice = catalog.reduce((sum, item) => sum + (quantities[item.key] ?? 0) * item.price, 0)

  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
        <span className="text-sm font-semibold text-slate-700">Wholesale Portal</span>
        <span className="text-xs text-slate-400">Fresh Market Co.</span>
      </div>
      <div className="p-4 space-y-2">
        {catalog.map((item) => (
          <div key={item.key} className="flex items-center justify-between p-2 bg-slate-50 rounded-lg">
            <div>
              <div className="text-xs font-medium text-slate-700">{item.name}</div>
              <div className="text-[10px] text-slate-400">${item.price.toFixed(2)}/unit · {item.caseSize}</div>
            </div>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => adjust(item.key, -1)}
                className="w-6 h-6 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold flex items-center justify-center transition-colors text-sm leading-none"
              >
                −
              </button>
              <span className="w-6 text-center text-sm font-semibold text-slate-800">
                {quantities[item.key] ?? 0}
              </span>
              <button
                onClick={() => adjust(item.key, 1)}
                className="w-6 h-6 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold flex items-center justify-center transition-colors text-sm leading-none"
              >
                +
              </button>
            </div>
          </div>
        ))}

        <div className="bg-emerald-50 rounded-lg p-3">
          <div className="flex justify-between text-xs text-slate-500 mb-1.5">
            <span>{totalUnits} units selected</span>
            <span>Customer pricing applied</span>
          </div>
          <div className="flex justify-between text-sm font-semibold mb-2">
            <span className="text-slate-600">Order Total</span>
            <span className="text-emerald-700">${totalPrice.toFixed(2)}</span>
          </div>
          <button
            disabled={totalUnits === 0}
            className={`w-full text-white text-sm font-medium py-2 rounded-lg transition ${
              totalUnits > 0
                ? 'bg-emerald-600 hover:bg-emerald-700'
                : 'bg-slate-300 cursor-not-allowed'
            }`}
          >
            {totalUnits > 0 ? 'Place Order' : 'Add items to order'}
          </button>
        </div>
      </div>
    </div>
  )
}

function MobileMockup({ screen, setScreen }: { screen: MobileScreen; setScreen: (s: MobileScreen) => void }) {
  const BackBtn = () => (
    <button onClick={() => setScreen('home')} className="text-xs text-blue-600 mb-1">← Back</button>
  )

  const screens: Record<MobileScreen, React.ReactNode> = {
    home: (
      <div className="space-y-2">
        {(['Receive', 'Work Order', 'Pick & Pack', 'Inventory Adjustment', 'Cycle Count'] as const).map((label) => {
          const key = label.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-') as MobileScreen
          return (
            <button
              key={label}
              onClick={() => setScreen(key)}
              className="w-full bg-white border border-slate-200 rounded-lg py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all"
            >
              {label}
            </button>
          )
        })}
      </div>
    ),
    receive: (
      <div className="space-y-3">
        <BackBtn />
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
          <div className="text-2xl mb-2">📷</div>
          <div className="text-sm font-medium text-slate-700">Scan Barcode</div>
          <div className="text-xs text-slate-500">or enter PO number</div>
        </div>
        <div className="border border-slate-200 rounded-lg p-3">
          <div className="text-xs text-slate-500 mb-1 uppercase">Recent Receives</div>
          <div className="text-sm text-slate-700">PO #4521 – 12 items</div>
          <div className="text-xs text-emerald-700">✓ Completed 10:30 AM</div>
        </div>
      </div>
    ),
    'work-order': (
      <div className="space-y-3">
        <BackBtn />
        <div className="text-xs text-slate-500 mb-1 uppercase">Active Work Orders</div>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-slate-700">WO-1042</span>
            <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded">In Progress</span>
          </div>
          <div className="text-xs text-slate-500 mt-1">Organic Granola · 500 lbs</div>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-3">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-slate-700">WO-1043</span>
            <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded">Pending</span>
          </div>
          <div className="text-xs text-slate-500 mt-1">Maple Clusters · 300 lbs</div>
        </div>
      </div>
    ),
    'pick-pack': (
      <div className="space-y-3">
        <BackBtn />
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-center">
          <div className="text-2xl mb-2">📦</div>
          <div className="text-sm font-medium text-slate-700">Scan to Pick</div>
        </div>
        <div className="text-xs text-slate-500 mb-1 uppercase">Orders to Pick</div>
        <div className="bg-white border border-slate-200 rounded-lg p-3">
          <div className="flex justify-between">
            <span className="text-sm font-medium text-slate-700">#SO-4521</span>
            <span className="text-xs text-slate-500">8 items</span>
          </div>
          <div className="text-xs text-slate-500">Metro Foods Co.</div>
        </div>
      </div>
    ),
    'inventory-adjustment': (
      <div className="space-y-3">
        <BackBtn />
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
          <div className="text-2xl mb-2">📷</div>
          <div className="text-sm font-medium text-slate-700">Scan Item</div>
        </div>
        <div className="text-xs text-slate-400 text-center">Scan barcode to adjust inventory</div>
      </div>
    ),
    'cycle-count': (
      <div className="space-y-3">
        <BackBtn />
        <div className="text-xs text-slate-500 mb-1 uppercase">Active Counts</div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-slate-700">Zone A Count</span>
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">12/48</span>
          </div>
          <div className="text-xs text-slate-500 mt-1">Started 2:30 PM</div>
        </div>
      </div>
    ),
  }

  return (
    <div className="flex justify-center">
      <div className="bg-slate-900 rounded-[2.5rem] p-3 shadow-2xl">
        <div className="bg-white rounded-[2rem] overflow-hidden w-56">
          {/* Status bar */}
          <div className="bg-white px-4 py-2 flex justify-between items-center">
            <span className="text-[10px] text-slate-500">9:41</span>
            <div className="flex gap-1">
              <span className="text-[10px]">📶</span>
              <span className="text-[10px]">🔋</span>
            </div>
          </div>
          {/* App header */}
          <div className="px-4 py-3 flex items-center justify-between border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-br from-blue-500 via-green-500 to-yellow-500 rounded-md" />
              <span className="text-xs font-semibold text-slate-700">BRAHMIN</span>
            </div>
            <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center">
              <span className="text-xs">👤</span>
            </div>
          </div>
          {/* Screen content */}
          <div className="p-4 min-h-[280px]">
            {screens[screen]}
          </div>
          {/* Home indicator */}
          <div className="pb-2 flex justify-center">
            <div className="w-24 h-1 bg-slate-200 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Feature data ──────────────────────────────────────────────────────────────

const features: {
  id: MockupKey
  label: string
  icon: string
  headline: string
  description: string
  bullets: string[]
  learnMore: string
}[] = [
  {
    id: 'inventory',
    label: 'Inventory',
    icon: '📍',
    headline: 'See stock everywhere',
    description: 'Track inventory across warehouses, 3PLs, and co-manufacturers — updated in real time as orders ship and production runs complete.',
    bullets: ['Multi-location tracking', 'Real-time stock levels', 'Batch & lot visibility', 'Barcode scanning'],
    learnMore: '/features#inventory',
  },
  {
    id: 'purchasing',
    label: 'Purchasing',
    icon: '🛒',
    headline: 'Never run out of materials',
    description: 'Create purchase orders, track deliveries, and manage vendors — with automatic reorder alerts to keep production running smoothly.',
    bullets: ['Purchase order management', 'Vendor management', 'Auto reorder alerts', 'Receiving & inspection'],
    learnMore: '/features#purchasing',
  },
  {
    id: 'production',
    label: 'Production',
    icon: '🏭',
    headline: 'Know what it costs',
    description: 'Build recipes, schedule production runs, and see true landed costs — including labor, overhead, and yield loss.',
    bullets: ['Multi-level BOMs', 'Work order management', 'Real-time cost visibility', 'Labor & overhead tracking'],
    learnMore: '/features#production',
  },
  {
    id: 'traceability',
    label: 'Traceability',
    icon: '🏷️',
    headline: 'Stay recall-ready',
    description: 'Track every ingredient from receiving to customer. Generate recall reports in minutes, not days.',
    bullets: ['Full lot genealogy', 'One-click recall reports', 'FDA & FSMA compliant', 'Supplier traceability'],
    learnMore: '/features#traceability',
  },
  {
    id: 'integrations',
    label: 'Integrations',
    icon: '🔌',
    headline: 'Connect everything',
    description: 'Sync with the tools you already use. No more double-entry or copy-paste between systems.',
    bullets: ['QuickBooks Online & Xero', 'Shopify, WooCommerce & BigCommerce', 'Faire & SPS Commerce', '5,000+ apps via Zapier'],
    learnMore: '/integrations',
  },
  {
    id: 'b2b',
    label: 'B2B Portal',
    icon: '👥',
    headline: 'Let customers order 24/7',
    description: 'Give wholesale buyers their own login to place orders, view pricing, and track shipments.',
    bullets: ['Customer-specific pricing', 'Self-service ordering', 'Order history & reorder', 'Payment processing'],
    learnMore: '/features#b2b',
  },
  {
    id: 'mobile',
    label: 'Mobile',
    icon: '📱',
    headline: 'Run the floor anywhere',
    description: 'Scan barcodes, receive inventory, and pick orders from any phone or tablet.',
    bullets: ['Barcode scanning', 'Inventory receiving', 'Pick, pack & ship', 'Real-time sync'],
    learnMore: '/features#mobile',
  },
]

// ─── Main component ────────────────────────────────────────────────────────────

export default function FeaturesTabbed() {
  const [activeTab, setActiveTab]               = useState(0)
  const [activeInventoryCard, setActiveInventoryCard] = useState(0)
  const [mobileScreen, setMobileScreen]         = useState<MobileScreen>('home')

  const active = features[activeTab]

  function handleTabChange(i: number) {
    setActiveTab(i)
    setActiveInventoryCard(0)
    setMobileScreen('home')
  }

  const mockup: Record<MockupKey, React.ReactNode> = {
    inventory:    <InventoryMockup activeCard={activeInventoryCard} setActiveCard={setActiveInventoryCard} />,
    purchasing:   <PurchasingMockup />,
    production:   <ProductionMockup />,
    traceability: <TraceabilityMockup />,
    integrations: <IntegrationsMockup />,
    b2b:          <B2BMockup />,
    mobile:       <MobileMockup screen={mobileScreen} setScreen={setMobileScreen} />,
  }

  return (
    <section className="bg-slate-50 py-section">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 mb-4">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Everything you need. Nothing you don&apos;t.
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Purpose-built for small manufacturers. No bloat, no complexity — just the tools your team actually uses.
          </p>
        </div>

        {/* Pill tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {features.map((f, i) => (
            <button
              key={f.id}
              onClick={() => handleTabChange(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === i
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <span className="mr-1.5">{f.icon}</span>
              {f.label}
            </button>
          ))}
        </div>

        {/* Content card */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-start">

            {/* Left: text */}
            <div>
              <div className="text-4xl mb-4">{active.icon}</div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 tracking-tight">
                {active.headline}
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {active.description}
              </p>
              <ul className="space-y-3 mb-8">
                {active.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-sm font-medium">{b}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={active.learnMore}
                className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-700 hover:text-emerald-700 transition-colors"
              >
                Learn more
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Right: mockup */}
            <div>
              {mockup[active.id]}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-6">
          <Link
            href="/features"
            className="inline-flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-emerald-700 transition-colors"
          >
            See all features
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  )
}
