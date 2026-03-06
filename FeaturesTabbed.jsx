import React, { useState } from 'react';

const FeaturesTabbed = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeInventoryCard, setActiveInventoryCard] = useState(0);
  const [activeMobileScreen, setActiveMobileScreen] = useState('home');

  const features = [
    {
      id: 'inventory',
      label: 'Inventory',
      icon: '📍',
      headline: 'See stock everywhere',
      description: 'Track inventory across warehouses, 3PLs, and co-manufacturers — updated in real time as orders ship and production runs complete.',
      bullets: [
        'Multi-location tracking',
        'Real-time stock levels',
        'Batch & lot visibility',
        'Barcode scanning'
      ],
      mockup: 'inventory'
    },
    {
      id: 'purchasing',
      label: 'Purchasing',
      icon: '🛒',
      headline: 'Never run out of materials',
      description: 'Create purchase orders, track deliveries, and manage vendors — with automatic reorder points to keep production running smoothly.',
      bullets: [
        'Purchase order management',
        'Vendor management',
        'Auto reorder points',
        'Receiving & inspection'
      ],
      mockup: 'purchasing'
    },
    {
      id: 'production',
      label: 'Production',
      icon: '🏭',
      headline: 'Know what it costs',
      description: 'Build recipes, schedule production runs, and see true landed costs — including labor, overhead, and yield loss.',
      bullets: [
        'Multi-level BOMs',
        'Work order management',
        'Real-time cost visibility',
        'Labor & overhead tracking'
      ],
      mockup: 'production'
    },
    {
      id: 'traceability',
      label: 'Traceability',
      icon: '🏷️',
      headline: 'Stay recall-ready',
      description: 'Track every ingredient from receiving to customer. Generate recall reports in minutes, not days.',
      bullets: [
        'Full lot genealogy',
        'One-click recall reports',
        'FDA & FSMA compliant',
        'Supplier traceability'
      ],
      mockup: 'traceability'
    },
    {
      id: 'integrations',
      label: 'Integrations',
      icon: '🔌',
      headline: 'Connect everything',
      description: 'Sync with the tools you already use. No more double-entry or copy-paste between systems.',
      bullets: [
        'QuickBooks & Xero',
        'Shopify & Amazon',
        'ShipStation & 3PLs',
        '50+ native integrations'
      ],
      mockup: 'integrations'
    },
    {
      id: 'b2b',
      label: 'B2B Portal',
      icon: '👥',
      headline: 'Let customers order 24/7',
      description: 'Give wholesale buyers their own login to place orders, view pricing, and track shipments.',
      bullets: [
        'Customer-specific pricing',
        'Self-service ordering',
        'Order history & reorder',
        'Payment processing'
      ],
      mockup: 'b2b'
    },
    {
      id: 'mobile',
      label: 'Mobile',
      icon: '📱',
      headline: 'Run the floor anywhere',
      description: 'Scan barcodes, receive inventory, and pick orders from any phone or tablet.',
      bullets: [
        'Barcode scanning',
        'Inventory receiving',
        'Pick, pack & ship',
        'Works offline'
      ],
      mockup: 'mobile'
    }
  ];

  // Inventory Mockup - Interactive with clickable stat cards
  const InventoryMockup = () => {
    const statCards = [
      { label: 'ON HAND', value: '12,847', sublabel: 'Physical Inventory', color: 'blue' },
      { label: 'ALLOCATED', value: '8,234', sublabel: 'Reserved for Orders', color: 'amber' },
      { label: 'EXPECTED', value: '3,500', sublabel: 'Incoming Supply', color: 'purple' },
      { label: 'SHORTAGE', value: '892', sublabel: 'Demand exceeds Supply', color: 'red' },
    ];

    const warehouseData = [
      { warehouse: 'Main Warehouse', location: 'Dry Storage', qty: '6,420 ea' },
      { warehouse: 'East Coast 3PL', location: 'Rack B-14', qty: '4,127 ea' },
      { warehouse: 'West Fulfillment', location: 'Zone A', qty: '2,300 ea' },
    ];

    const orderData = [
      { order: '#SO-4521', date: 'Mar 05 2026', customer: 'Metro Foods Co.', qty: '240 ea', orderInv: 'In Stock', inv: 'In Stock', status: 'Confirmed' },
      { order: '#SO-4518', date: 'Mar 04 2026', customer: 'Sunrise Grocers', qty: '120 ea', orderInv: 'In Stock', inv: 'In Stock', status: 'Confirmed' },
      { order: '#SO-4515', date: 'Mar 04 2026', customer: 'Harbor Market', qty: '1,800 ea', orderInv: 'Out of Stock', inv: 'In Stock', status: 'Confirmed' },
    ];

    const colorClasses = {
      blue: { bg: 'bg-blue-50', border: 'border-blue-400', text: 'text-blue-600' },
      amber: { bg: 'bg-amber-50', border: 'border-amber-300', text: 'text-amber-600' },
      purple: { bg: 'bg-purple-50', border: 'border-purple-300', text: 'text-purple-600' },
      red: { bg: 'bg-red-50', border: 'border-red-300', text: 'text-red-600' },
    };

    return (
      <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="px-4 py-3 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-800">Organic Maple Granola</span>
            <span className="text-xs bg-emerald-100 text-emerald-600 px-2 py-0.5 rounded-full font-medium">In Stock</span>
          </div>
          <div className="text-xs text-slate-400 mt-0.5">SKU: GRN-MAPLE-12OZ</div>
        </div>
        
        {/* Stat Cards Row - Clickable */}
        <div className="p-3 grid grid-cols-4 gap-2">
          {statCards.map((card, index) => (
            <button
              key={index}
              onClick={() => setActiveInventoryCard(index)}
              className={`text-left rounded-lg p-2 transition-all ${
                activeInventoryCard === index 
                  ? `${colorClasses[card.color].bg} border-2 ${colorClasses[card.color].border}` 
                  : 'bg-white border border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="text-[10px] text-slate-500 uppercase">{card.label}</div>
              <div className={`text-lg font-bold ${colorClasses[card.color].text}`}>{card.value}</div>
              <div className="text-[9px] text-slate-400">{card.sublabel}</div>
            </button>
          ))}
        </div>

        {/* Dynamic Content Based on Selected Card */}
        <div className="px-3 pb-3">
          {activeInventoryCard === 0 && (
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <div className="bg-slate-50 px-3 py-2 text-[10px] font-medium text-slate-500 grid grid-cols-3">
                <span>Warehouse</span>
                <span>Location</span>
                <span className="text-right">Quantity</span>
              </div>
              {warehouseData.map((row, i) => (
                <div key={i} className="px-3 py-2 text-xs grid grid-cols-3 border-t border-slate-100 hover:bg-slate-50 cursor-pointer">
                  <span className="text-slate-700">{row.warehouse}</span>
                  <span className="text-slate-500">{row.location}</span>
                  <span className="text-right font-medium text-slate-700">{row.qty}</span>
                </div>
              ))}
            </div>
          )}

          {activeInventoryCard === 1 && (
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <div className="bg-slate-50 px-3 py-1.5 text-[10px] font-medium text-slate-500 grid grid-cols-6 gap-1">
                <span>Order #</span>
                <span>Date</span>
                <span>Customer</span>
                <span className="text-right">Qty</span>
                <span className="text-center">Order Inv</span>
                <span className="text-center">Status</span>
              </div>
              {orderData.map((row, i) => (
                <div key={i} className="px-3 py-1.5 text-[10px] grid grid-cols-6 gap-1 border-t border-slate-100 hover:bg-slate-50 cursor-pointer items-center">
                  <span className="text-slate-700 font-medium">{row.order}</span>
                  <span className="text-slate-500">{row.date}</span>
                  <span className="text-slate-600 truncate">{row.customer}</span>
                  <span className="text-right text-slate-600">{row.qty}</span>
                  <span className={`text-center px-1 py-0.5 rounded text-[9px] ${row.orderInv === 'In Stock' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>{row.orderInv}</span>
                  <span className="text-center px-1 py-0.5 rounded text-[9px] bg-blue-100 text-blue-700">{row.status}</span>
                </div>
              ))}
            </div>
          )}

          {activeInventoryCard === 2 && (
            <div className="border border-slate-200 rounded-lg p-4 text-center">
              <div className="text-slate-400 text-2xl mb-2">📦</div>
              <div className="text-sm font-medium text-slate-700">3 Purchase Orders Incoming</div>
              <div className="text-xs text-slate-500 mt-1">Expected arrival: Mar 8 - Mar 12</div>
            </div>
          )}

          {activeInventoryCard === 3 && (
            <div className="border border-red-200 bg-red-50 rounded-lg p-4">
              <div className="text-sm font-medium text-red-700">⚠️ Shortage Alert</div>
              <div className="text-xs text-red-600 mt-1">892 units short for upcoming orders. Consider expediting PO #4521 or reallocating stock.</div>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Purchasing Mockup - Interactive with PO management
  const PurchasingMockup = () => {
    const [activeView, setActiveView] = useState('orders');
    const [selectedPO, setSelectedPO] = useState(null);
    
    const purchaseOrders = [
      { id: 'PO-2026-0891', vendor: 'Valley Farms Co.', items: 3, total: '$4,250.00', status: 'Pending', eta: 'Mar 12' },
      { id: 'PO-2026-0889', vendor: 'Pacific Ingredients', items: 5, total: '$8,120.00', status: 'Shipped', eta: 'Mar 08' },
      { id: 'PO-2026-0885', vendor: 'Mountain Packaging', items: 2, total: '$1,890.00', status: 'Received', eta: 'Mar 05' },
    ];

    const lowStockItems = [
      { name: 'Organic Oats', current: 450, reorder: 500, vendor: 'Valley Farms', unit: 'lbs' },
      { name: 'Maple Syrup', current: 28, reorder: 50, vendor: 'Vermont Pure', unit: 'gal' },
      { name: '12oz Pouches', current: 1200, reorder: 2000, vendor: 'Mountain Packaging', unit: 'ea' },
    ];

    const statusColors = {
      'Pending': 'bg-amber-100 text-amber-700',
      'Shipped': 'bg-blue-100 text-blue-700',
      'Received': 'bg-emerald-100 text-emerald-700',
    };

    return (
      <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
        <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
          <span className="text-sm font-semibold text-slate-700">Purchasing</span>
          <button className="text-xs bg-emerald-600 text-white px-3 py-1 rounded-full hover:bg-emerald-700 transition">
            + New PO
          </button>
        </div>
        
        {/* Tabs */}
        <div className="flex border-b border-slate-200">
          {['orders', 'reorder', 'vendors'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveView(tab)}
              className={`flex-1 py-2 text-xs font-medium transition-all ${
                activeView === tab
                  ? 'text-emerald-600 border-b-2 border-emerald-600 bg-emerald-50'
                  : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
              }`}
            >
              {tab === 'orders' ? 'Purchase Orders' : tab === 'reorder' ? 'Reorder Alerts' : 'Vendors'}
            </button>
          ))}
        </div>

        <div className="p-3 space-y-2">
          {activeView === 'orders' && (
            <>
              {purchaseOrders.map((po, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedPO(selectedPO === i ? null : i)}
                  className={`w-full text-left p-2 rounded-lg transition-all ${selectedPO === i ? 'bg-blue-50' : 'hover:bg-slate-50'}`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-xs font-medium text-slate-700">{po.id}</div>
                      <div className="text-[10px] text-slate-500">{po.vendor}</div>
                    </div>
                    <div className="text-right">
                      <span className={`text-[10px] px-2 py-0.5 rounded-full ${statusColors[po.status]}`}>{po.status}</span>
                      <div className="text-[10px] text-slate-400 mt-1">ETA: {po.eta}</div>
                    </div>
                  </div>
                  
                  {selectedPO === i && (
                    <div className="mt-2 pt-2 border-t border-slate-200 space-y-1">
                      <div className="flex justify-between text-[10px]">
                        <span className="text-slate-400">Items</span>
                        <span className="text-slate-600">{po.items} line items</span>
                      </div>
                      <div className="flex justify-between text-[10px]">
                        <span className="text-slate-400">Total</span>
                        <span className="text-slate-700 font-medium">{po.total}</span>
                      </div>
                      <div className="flex gap-2 mt-2">
                        <button className="flex-1 bg-white border border-slate-200 text-slate-600 text-[10px] py-1 rounded hover:bg-slate-100">View</button>
                        <button className="flex-1 bg-emerald-600 text-white text-[10px] py-1 rounded hover:bg-emerald-700">Receive</button>
                      </div>
                    </div>
                  )}
                </button>
              ))}
            </>
          )}

          {activeView === 'reorder' && (
            <>
              <div className="text-[10px] text-amber-600 font-medium mb-2">⚠️ 3 items below reorder point</div>
              {lowStockItems.map((item, i) => (
                <div key={i} className="p-2 bg-amber-50 rounded-lg border border-amber-200">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-xs font-medium text-slate-700">{item.name}</div>
                      <div className="text-[10px] text-slate-500">{item.vendor}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-medium text-red-600">{item.current} {item.unit}</div>
                      <div className="text-[10px] text-slate-400">Min: {item.reorder}</div>
                    </div>
                  </div>
                  <button className="w-full mt-2 bg-white border border-amber-300 text-amber-700 text-[10px] py-1 rounded hover:bg-amber-100 transition">
                    Create PO →
                  </button>
                </div>
              ))}
            </>
          )}

          {activeView === 'vendors' && (
            <>
              {[
                { name: 'Valley Farms Co.', items: 12, lastOrder: '3 days ago', rating: 5 },
                { name: 'Pacific Ingredients', items: 8, lastOrder: '1 week ago', rating: 4 },
                { name: 'Mountain Packaging', items: 5, lastOrder: '2 days ago', rating: 5 },
              ].map((vendor, i) => (
                <div key={i} className="p-2 rounded-lg hover:bg-slate-50 cursor-pointer">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-xs font-medium text-slate-700">{vendor.name}</div>
                      <div className="text-[10px] text-slate-500">{vendor.items} items • Last order: {vendor.lastOrder}</div>
                    </div>
                    <div className="text-amber-400 text-[10px]">
                      {'★'.repeat(vendor.rating)}{'☆'.repeat(5-vendor.rating)}
                    </div>
                  </div>
                </div>
              ))}
              <button className="w-full mt-2 text-emerald-600 text-xs font-medium py-2 hover:bg-emerald-50 rounded-lg transition">
                + Add Vendor
              </button>
            </>
          )}
        </div>
      </div>
    );
  };

  // Production Mockup - Interactive with tabs
  const ProductionMockup = () => {
    const [activeProductionTab, setActiveProductionTab] = useState('recipe');
    
    return (
      <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
        <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
          <span className="text-sm font-semibold text-slate-700">Work Order #WO-1042</span>
          <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">In Progress</span>
        </div>
        
        {/* Tabs */}
        <div className="flex border-b border-slate-200">
          {['recipe', 'costs', 'timeline'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveProductionTab(tab)}
              className={`flex-1 py-2 text-xs font-medium transition-all ${
                activeProductionTab === tab
                  ? 'text-emerald-600 border-b-2 border-emerald-600 bg-emerald-50'
                  : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="p-4 space-y-3">
          {/* Recipe Card - Always visible */}
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-3">
            <div className="text-sm font-semibold text-slate-700">Organic Maple Granola</div>
            <div className="text-xs text-slate-500 mt-1">Batch: 500 lbs • Started: 8:30 AM</div>
          </div>

          {activeProductionTab === 'recipe' && (
            <div className="space-y-2">
              <div className="text-xs text-slate-500 font-medium">INGREDIENTS</div>
              {[
                { name: 'Rolled Oats (Organic)', qty: '250 lbs', status: 'picked' },
                { name: 'Maple Syrup (Grade A)', qty: '45 lbs', status: 'picked' },
                { name: 'Coconut Oil', qty: '30 lbs', status: 'pending' },
                { name: 'Sea Salt', qty: '2 lbs', status: 'pending' },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center text-xs p-2 rounded hover:bg-slate-50 cursor-pointer">
                  <span className="text-slate-600">{item.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-700">{item.qty}</span>
                    <span className={`w-2 h-2 rounded-full ${item.status === 'picked' ? 'bg-emerald-500' : 'bg-slate-300'}`}></span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeProductionTab === 'costs' && (
            <div className="space-y-2">
              <div className="text-xs text-slate-500 font-medium">COST BREAKDOWN</div>
              {[
                { label: 'Ingredients', value: '$1,247.50', percent: '86%' },
                { label: 'Labor (4.5 hrs)', value: '$112.50', percent: '8%' },
                { label: 'Overhead', value: '$85.00', percent: '6%' },
              ].map((item, i) => (
                <div key={i} className="p-2 rounded hover:bg-slate-50 cursor-pointer">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500">{item.label}</span>
                    <span className="font-medium text-slate-700">{item.value}</span>
                  </div>
                  <div className="mt-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: item.percent }}></div>
                  </div>
                </div>
              ))}
              <div className="border-t border-slate-200 pt-2 mt-2">
                <div className="flex justify-between text-sm">
                  <span className="font-semibold text-slate-700">Total Cost</span>
                  <span className="font-bold text-emerald-600">$1,445.00</span>
                </div>
                <div className="flex justify-between text-xs mt-1">
                  <span className="text-slate-500">Cost per lb</span>
                  <span className="font-semibold text-emerald-600">$2.89</span>
                </div>
              </div>
            </div>
          )}

          {activeProductionTab === 'timeline' && (
            <div className="space-y-2">
              <div className="text-xs text-slate-500 font-medium">PROGRESS</div>
              {[
                { step: 'Materials Picked', time: '8:30 AM', done: true },
                { step: 'Mixing Started', time: '8:45 AM', done: true },
                { step: 'Baking', time: '9:15 AM', done: false, active: true },
                { step: 'Cooling', time: '—', done: false },
                { step: 'Packaging', time: '—', done: false },
              ].map((item, i) => (
                <div key={i} className={`flex items-center gap-3 p-2 rounded cursor-pointer ${item.active ? 'bg-amber-50' : 'hover:bg-slate-50'}`}>
                  <div className={`w-4 h-4 rounded-full flex items-center justify-center ${
                    item.done ? 'bg-emerald-500' : item.active ? 'bg-amber-500 animate-pulse' : 'bg-slate-200'
                  }`}>
                    {item.done && <span className="text-white text-[8px]">✓</span>}
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-slate-700">{item.step}</div>
                  </div>
                  <span className="text-[10px] text-slate-400">{item.time}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  // Traceability Mockup - Interactive with clickable timeline
  const TraceabilityMockup = () => {
    const [activeStep, setActiveStep] = useState(null);
    const [showRecallModal, setShowRecallModal] = useState(false);
    
    const timelineSteps = [
      { step: 'Received', detail: 'Valley Farms Oats • 2,000 lbs', time: 'Jan 15', location: 'Dock 3, Main Warehouse', po: 'PO-2026-0891', temp: '68°F' },
      { step: 'Production', detail: 'Batch #WO-1042 • 1,800 lbs yield', time: 'Jan 18', location: 'Line 2', yield: '90%', operator: 'Mike R.' },
      { step: 'QA Approved', detail: 'Passed all 12 checks', time: 'Jan 18', tests: ['Moisture: 3.2%', 'Particle Size: Pass', 'Metal Detection: Clear'] },
      { step: 'Shipped', detail: '→ Metro Foods (142 cases)', time: 'Jan 20', tracking: 'FEDEX-789456123', temp: '65°F' },
    ];

    return (
      <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
        <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
          <span className="text-sm font-semibold text-slate-700">Lot Trace: LOT-2026-0342</span>
          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Complete</span>
        </div>
        <div className="p-4 space-y-3">
          {/* Timeline */}
          <div className="relative pl-4 border-l-2 border-emerald-200 space-y-3">
            {timelineSteps.map((item, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(activeStep === i ? null : i)}
                className={`relative w-full text-left transition-all rounded-lg p-2 -ml-2 ${activeStep === i ? 'bg-emerald-50' : 'hover:bg-slate-50'}`}
              >
                <div className="absolute -left-[13px] w-3 h-3 rounded-full bg-emerald-500 border-2 border-white"></div>
                <div className="text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-slate-700">{item.step}</span>
                    <span className="text-slate-400">{item.time}</span>
                    <span className="text-[10px] text-emerald-600">{activeStep === i ? '▼' : '▶'}</span>
                  </div>
                  <div className="text-slate-500">{item.detail}</div>
                  
                  {/* Expanded Details */}
                  {activeStep === i && (
                    <div className="mt-2 p-2 bg-white rounded border border-slate-200 space-y-1">
                      {item.location && <div className="text-[10px]"><span className="text-slate-400">Location:</span> <span className="text-slate-600">{item.location}</span></div>}
                      {item.po && <div className="text-[10px]"><span className="text-slate-400">PO:</span> <span className="text-slate-600">{item.po}</span></div>}
                      {item.temp && <div className="text-[10px]"><span className="text-slate-400">Temp:</span> <span className="text-slate-600">{item.temp}</span></div>}
                      {item.yield && <div className="text-[10px]"><span className="text-slate-400">Yield:</span> <span className="text-slate-600">{item.yield}</span></div>}
                      {item.operator && <div className="text-[10px]"><span className="text-slate-400">Operator:</span> <span className="text-slate-600">{item.operator}</span></div>}
                      {item.tracking && <div className="text-[10px]"><span className="text-slate-400">Tracking:</span> <span className="text-blue-600">{item.tracking}</span></div>}
                      {item.tests && (
                        <div className="text-[10px]">
                          <span className="text-slate-400">Tests:</span>
                          {item.tests.map((test, j) => (
                            <span key={j} className="ml-1 text-emerald-600">✓ {test}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
          
          {/* Recall Button */}
          <button 
            onClick={() => setShowRecallModal(!showRecallModal)}
            className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium py-2 rounded-lg transition"
          >
            📋 Generate Recall Report
          </button>
          
          {/* Recall Modal */}
          {showRecallModal && (
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 space-y-2">
              <div className="text-xs font-medium text-amber-800">Recall Report Preview</div>
              <div className="text-[10px] text-amber-700 space-y-1">
                <div>• Affected lots: LOT-2026-0342</div>
                <div>• Total units: 1,800 lbs (142 cases)</div>
                <div>• Customers: 1 (Metro Foods)</div>
                <div>• Status: All shipped, trackable</div>
              </div>
              <button className="w-full bg-amber-600 hover:bg-amber-700 text-white text-xs font-medium py-1.5 rounded transition">
                Download Full Report
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Integrations Mockup - Interactive with expandable apps
  const IntegrationsMockup = () => {
    const [activeApp, setActiveApp] = useState(null);
    const [showAddModal, setShowAddModal] = useState(false);
    
    const apps = [
      { name: 'QuickBooks Online', status: 'Synced 2m ago', icon: '📗', details: { lastSync: '2 minutes ago', records: '2,847 transactions', direction: 'Two-way sync' } },
      { name: 'Shopify', status: '847 orders synced', icon: '🛍️', details: { lastSync: '5 minutes ago', records: '847 orders, 2.3k products', direction: 'Real-time' } },
      { name: 'ShipStation', status: 'Real-time sync', icon: '📦', details: { lastSync: 'Live', records: '156 shipments this week', direction: 'Push to ShipStation' } },
      { name: 'Amazon Seller', status: 'Connected', icon: '📦', details: { lastSync: '1 hour ago', records: '324 orders', direction: 'Pull orders' } },
    ];

    const availableApps = [
      { name: 'Xero', icon: '📘' },
      { name: 'WooCommerce', icon: '🛒' },
      { name: 'BigCommerce', icon: '🏪' },
      { name: 'Faire', icon: '🎁' },
    ];

    return (
      <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
        <div className="bg-slate-50 px-4 py-3 border-b border-slate-200">
          <span className="text-sm font-semibold text-slate-700">Connected Apps</span>
        </div>
        <div className="p-4 space-y-2">
          {apps.map((app, i) => (
            <div key={i}>
              <button
                onClick={() => setActiveApp(activeApp === i ? null : i)}
                className={`w-full flex items-center justify-between p-2 rounded-lg transition-all ${activeApp === i ? 'bg-emerald-50' : 'hover:bg-slate-50'}`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{app.icon}</span>
                  <div className="text-left">
                    <div className="text-sm font-medium text-slate-700">{app.name}</div>
                    <div className="text-xs text-slate-400">{app.status}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span className="text-[10px] text-slate-400">{activeApp === i ? '▼' : '▶'}</span>
                </div>
              </button>
              
              {/* Expanded Details */}
              {activeApp === i && (
                <div className="ml-10 mt-1 p-2 bg-slate-50 rounded-lg border border-slate-200 space-y-1.5">
                  <div className="flex justify-between text-[10px]">
                    <span className="text-slate-400">Last Sync</span>
                    <span className="text-slate-600">{app.details.lastSync}</span>
                  </div>
                  <div className="flex justify-between text-[10px]">
                    <span className="text-slate-400">Records</span>
                    <span className="text-slate-600">{app.details.records}</span>
                  </div>
                  <div className="flex justify-between text-[10px]">
                    <span className="text-slate-400">Sync Type</span>
                    <span className="text-slate-600">{app.details.direction}</span>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <button className="flex-1 bg-white border border-slate-200 text-slate-600 text-[10px] py-1 rounded hover:bg-slate-100 transition">
                      Sync Now
                    </button>
                    <button className="flex-1 bg-white border border-slate-200 text-slate-600 text-[10px] py-1 rounded hover:bg-slate-100 transition">
                      Settings
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
          
          <div className="border-t border-slate-100 pt-2 mt-2">
            <button 
              onClick={() => setShowAddModal(!showAddModal)}
              className="w-full text-emerald-600 text-xs font-medium py-2 hover:bg-emerald-50 rounded-lg transition"
            >
              + Add Integration
            </button>
          </div>

          {/* Add Integration Modal */}
          {showAddModal && (
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
              <div className="text-xs font-medium text-slate-700 mb-2">Available Integrations</div>
              <div className="grid grid-cols-2 gap-2">
                {availableApps.map((app, i) => (
                  <button key={i} className="flex items-center gap-2 p-2 bg-white rounded border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 transition text-left">
                    <span>{app.icon}</span>
                    <span className="text-xs text-slate-700">{app.name}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  // B2B Portal Mockup - Interactive with cart functionality
  const B2BMockup = () => {
    const [cart, setCart] = useState([
      { id: 1, name: 'Organic Granola 12oz', price: 4.25, case: 24, qty: 10 },
      { id: 2, name: 'Maple Clusters 8oz', price: 3.80, case: 12, qty: 5 },
    ]);
    const [showOrderConfirm, setShowOrderConfirm] = useState(false);
    const [activeProduct, setActiveProduct] = useState(null);

    const updateQty = (id, delta) => {
      setCart(cart.map(item => 
        item.id === id ? { ...item, qty: Math.max(0, item.qty + delta) } : item
      ).filter(item => item.qty > 0));
    };

    const addProduct = () => {
      const newProduct = { id: 3, name: 'Honey Oat Bites 10oz', price: 4.50, case: 18, qty: 1 };
      if (!cart.find(p => p.id === 3)) {
        setCart([...cart, newProduct]);
      }
    };

    const total = cart.reduce((sum, item) => sum + (item.price * item.case * item.qty), 0);

    return (
      <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
        <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
          <span className="text-sm font-semibold text-slate-700">Wholesale Portal</span>
          <span className="text-xs text-slate-400">Fresh Market Co.</span>
        </div>
        <div className="p-4 space-y-3">
          {/* Product Cards */}
          {cart.map((item) => (
            <div key={item.id}>
              <button
                onClick={() => setActiveProduct(activeProduct === item.id ? null : item.id)}
                className={`w-full flex items-center justify-between p-2 rounded-lg transition-all ${activeProduct === item.id ? 'bg-blue-50' : 'bg-slate-50 hover:bg-slate-100'}`}
              >
                <div className="text-left">
                  <div className="text-sm font-medium text-slate-700">{item.name}</div>
                  <div className="text-xs text-slate-400">${item.price.toFixed(2)}/unit • {item.case}/case</div>
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={(e) => { e.stopPropagation(); updateQty(item.id, -1); }}
                    className="w-6 h-6 rounded bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 flex items-center justify-center text-sm"
                  >
                    −
                  </button>
                  <span className="w-8 text-center text-sm font-medium">{item.qty}</span>
                  <button 
                    onClick={(e) => { e.stopPropagation(); updateQty(item.id, 1); }}
                    className="w-6 h-6 rounded bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 flex items-center justify-center text-sm"
                  >
                    +
                  </button>
                </div>
              </button>
              
              {/* Expanded Product Details */}
              {activeProduct === item.id && (
                <div className="mt-1 p-2 bg-white rounded border border-slate-200 text-[10px] space-y-1">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Case Price</span>
                    <span className="text-slate-600">${(item.price * item.case).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Line Total</span>
                    <span className="text-slate-700 font-medium">${(item.price * item.case * item.qty).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">In Stock</span>
                    <span className="text-emerald-600">✓ Available</span>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Add Product Button */}
          {!cart.find(p => p.id === 3) && (
            <button 
              onClick={addProduct}
              className="w-full p-2 border-2 border-dashed border-slate-200 rounded-lg text-xs text-slate-500 hover:border-emerald-300 hover:text-emerald-600 transition"
            >
              + Add Product
            </button>
          )}

          {/* Order Summary */}
          <div className="bg-emerald-50 rounded-lg p-3">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-slate-600">Order Total</span>
              <span className="font-bold text-emerald-700">${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-[10px] text-slate-500 mb-2">
              <span>{cart.reduce((sum, item) => sum + item.qty, 0)} cases</span>
              <span>Free shipping over $500</span>
            </div>
            <button 
              onClick={() => setShowOrderConfirm(true)}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium py-2 rounded-lg transition"
            >
              Place Order
            </button>
          </div>

          {/* Order Confirmation */}
          {showOrderConfirm && (
            <div className="bg-emerald-100 border border-emerald-300 rounded-lg p-3 text-center">
              <div className="text-emerald-700 text-lg mb-1">✓</div>
              <div className="text-sm font-medium text-emerald-800">Order Submitted!</div>
              <div className="text-xs text-emerald-600">Confirmation sent to your email</div>
              <button 
                onClick={() => setShowOrderConfirm(false)}
                className="mt-2 text-xs text-emerald-700 hover:underline"
              >
                Place Another Order
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Mobile Mockup - Interactive with actual Brahmin UI
  const MobileMockup = () => {
    const mobileScreens = {
      home: (
        <div className="space-y-3">
          {['Receive', 'Work Order', 'Pick & Pack', 'Inventory Adjustment', 'Cycle Count'].map((item, i) => (
            <button
              key={i}
              onClick={() => setActiveMobileScreen(item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-'))}
              className="w-full bg-white border border-slate-200 rounded-lg py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all"
            >
              {item}
            </button>
          ))}
        </div>
      ),
      'receive': (
        <div className="space-y-3">
          <button onClick={() => setActiveMobileScreen('home')} className="text-xs text-blue-600">← Back</button>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
            <div className="text-2xl mb-2">📷</div>
            <div className="text-sm font-medium text-slate-700">Scan Barcode</div>
            <div className="text-xs text-slate-500">or enter PO number</div>
          </div>
          <div className="border border-slate-200 rounded-lg p-3">
            <div className="text-xs text-slate-500 mb-2">RECENT RECEIVES</div>
            <div className="text-sm text-slate-700">PO #4521 - 12 items</div>
            <div className="text-xs text-emerald-600">✓ Completed 10:30 AM</div>
          </div>
        </div>
      ),
      'work-order': (
        <div className="space-y-3">
          <button onClick={() => setActiveMobileScreen('home')} className="text-xs text-blue-600">← Back</button>
          <div className="text-xs text-slate-500 mb-1">ACTIVE WORK ORDERS</div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-slate-700">WO-1042</span>
              <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded">In Progress</span>
            </div>
            <div className="text-xs text-slate-500 mt-1">Organic Granola • 500 lbs</div>
          </div>
          <div className="bg-white border border-slate-200 rounded-lg p-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-slate-700">WO-1043</span>
              <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded">Pending</span>
            </div>
            <div className="text-xs text-slate-500 mt-1">Maple Clusters • 300 lbs</div>
          </div>
        </div>
      ),
      'pick-pack': (
        <div className="space-y-3">
          <button onClick={() => setActiveMobileScreen('home')} className="text-xs text-blue-600">← Back</button>
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-center">
            <div className="text-2xl mb-2">📦</div>
            <div className="text-sm font-medium text-slate-700">Scan to Pick</div>
          </div>
          <div className="text-xs text-slate-500 mb-1">ORDERS TO PICK</div>
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
          <button onClick={() => setActiveMobileScreen('home')} className="text-xs text-blue-600">← Back</button>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
            <div className="text-2xl mb-2">📷</div>
            <div className="text-sm font-medium text-slate-700">Scan Item</div>
          </div>
          <div className="text-xs text-slate-400 text-center">Scan barcode to adjust inventory</div>
        </div>
      ),
      'cycle-count': (
        <div className="space-y-3">
          <button onClick={() => setActiveMobileScreen('home')} className="text-xs text-blue-600">← Back</button>
          <div className="text-xs text-slate-500 mb-1">ACTIVE COUNTS</div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-slate-700">Zone A Count</span>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">12/48</span>
            </div>
            <div className="text-xs text-slate-500 mt-1">Started 2:30 PM</div>
          </div>
        </div>
      ),
    };

    return (
      <div className="flex justify-center">
        <div className="bg-slate-900 rounded-[2.5rem] p-3 shadow-2xl">
          {/* Phone Frame */}
          <div className="bg-white rounded-[2rem] overflow-hidden w-56">
            {/* Status Bar */}
            <div className="bg-white px-4 py-2 flex justify-between items-center">
              <span className="text-[10px] text-slate-500">9:41</span>
              <div className="flex gap-1">
                <span className="text-[10px]">📶</span>
                <span className="text-[10px]">🔋</span>
              </div>
            </div>
            
            {/* App Header */}
            <div className="px-4 py-3 flex items-center justify-between border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-500 via-green-500 to-yellow-500 rounded-md"></div>
                <span className="text-xs font-semibold text-slate-700">BRAHMIN</span>
              </div>
              <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center">
                <span className="text-xs">👤</span>
              </div>
            </div>
            
            {/* App Content */}
            <div className="p-4 min-h-[280px]">
              {mobileScreens[activeMobileScreen]}
            </div>

            {/* Home Indicator */}
            <div className="pb-2 flex justify-center">
              <div className="w-24 h-1 bg-slate-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const mockupComponents = {
    inventory: <InventoryMockup />,
    purchasing: <PurchasingMockup />,
    production: <ProductionMockup />,
    traceability: <TraceabilityMockup />,
    integrations: <IntegrationsMockup />,
    b2b: <B2BMockup />,
    mobile: <MobileMockup />
  };

  const activeFeature = features[activeTab];

  return (
    <section className="bg-slate-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Everything you need. Nothing you don't.
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Purpose-built for small manufacturers. No bloat, no complexity — just the tools your team actually uses.
          </p>
        </div>

        {/* Pill Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {features.map((feature, index) => (
            <button
              key={feature.id}
              onClick={() => {
                setActiveTab(index);
                setActiveInventoryCard(0);
                setActiveMobileScreen('home');
              }}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === index
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <span className="mr-2">{feature.icon}</span>
              {feature.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left: Text Content */}
            <div>
              <div className="text-4xl mb-4">{activeFeature.icon}</div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                {activeFeature.headline}
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {activeFeature.description}
              </p>
              <ul className="space-y-3 mb-8">
                {activeFeature.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <a href="/features" className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700 transition">
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Right: Dashboard Mockup */}
            <div className="flex justify-center">
              {mockupComponents[activeFeature.mockup]}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <a href="/features" className="inline-flex items-center text-slate-600 hover:text-emerald-600 font-medium transition">
            See all features
            <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Mini Testimonial */}
        <div className="mt-12 text-center">
          <blockquote className="text-slate-600 italic">
            "We cut inventory counting time by 75% in the first month."
          </blockquote>
          <div className="mt-2 text-sm text-slate-500">
            — Sarah Chen, Operations Manager, Elevated Oats
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesTabbed;
