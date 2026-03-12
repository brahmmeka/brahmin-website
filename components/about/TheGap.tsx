export default function TheGap() {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-100">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 mb-5">
          The gap that started it all
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
          Big companies have data.<br />Small manufacturers have spreadsheets.
        </h2>
        <div className="mt-10 space-y-5 text-lg text-slate-600 leading-relaxed text-left">
          <p>
            In the enterprise world, companies like BMW, Apple, and Johnson &amp; Johnson have real-time visibility into every unit of inventory, every production run, every dollar of cost. Data is their competitive advantage.
          </p>
          <p>
            For most small manufacturers? It's a mess of spreadsheets, disconnected systems, and guesswork. They're not just behind — they're flying blind.
          </p>
          <p className="font-semibold text-slate-800">
            I built Brahmin to close that gap.
          </p>
        </div>

        {/* Visual divider — enterprise vs SMB */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 text-left">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Enterprise (Fortune 1000)</p>
            <ul className="space-y-2.5">
              {[
                'Real-time inventory visibility',
                'Automated production tracking',
                'Full lot traceability',
                'Integrated ERP across every dept.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-slate-700">
                  <svg className="w-4 h-4 text-accent-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-6 text-left">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Most small manufacturers</p>
            <ul className="space-y-2.5">
              {[
                'Three versions of every spreadsheet',
                'Manual work orders on paper',
                'No recall readiness',
                'QuickBooks + guesswork',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-slate-500">
                  <svg className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
