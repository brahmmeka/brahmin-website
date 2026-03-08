export default function CustomerQuote({
  quote, name, title, company,
}: {
  quote: string; name: string; title: string; company: string
}) {
  const initials = name.split(' ').map((n: string) => n[0]).join('').slice(0, 2)
  return (
    <div className="bg-slate-900 rounded-3xl p-10 md:p-12 max-w-3xl mx-auto">
      <div className="flex gap-0.5 mb-6">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <blockquote className="text-xl text-white font-medium leading-relaxed mb-8">&ldquo;{quote}&rdquo;</blockquote>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center text-slate-300 font-bold">
          {initials}
        </div>
        <div>
          <div className="text-white font-semibold">{name}</div>
          <div className="text-slate-400 text-sm">{title}, {company}</div>
        </div>
      </div>
    </div>
  )
}
