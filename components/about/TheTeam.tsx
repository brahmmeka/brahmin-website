// Replace placeholder initials with real photos once available.
// Brahm photo: /images/brahm-meka.jpg (w-48 h-48 rounded-2xl)
// Team photos: /images/team/[name].jpg (w-20 h-20 rounded-full)

const team = [
  {
    initials: 'TM',
    name: '[Name]',
    title: 'Head of Customer Success',
    color: 'bg-primary-100 text-primary-700',
  },
  {
    initials: 'LE',
    name: '[Name]',
    title: 'Lead Engineer',
    color: 'bg-violet-100 text-violet-700',
  },
  {
    initials: 'PM',
    name: '[Name]',
    title: 'Product Manager',
    color: 'bg-amber-100 text-amber-700',
  },
  {
    initials: 'SL',
    name: '[Name]',
    title: 'Support Lead',
    color: 'bg-accent-100 text-accent-700',
  },
]

export default function TheTeam() {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-100">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 mb-4">
            The team
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            The team behind Brahmin
          </h2>
          <p className="mt-3 text-slate-500 max-w-md mx-auto">
            A lean team obsessed with making manufacturers more efficient.
          </p>
        </div>

        {/* Founder — featured */}
        <div className="flex flex-col items-center mb-14">
          <div className="w-48 h-48 rounded-2xl bg-slate-200 flex items-center justify-center shadow-md overflow-hidden mb-5">
            {/* Replace with: <Image src="/images/brahm-meka.jpg" alt="Brahm Meka" fill className="object-cover" /> */}
            <span className="text-4xl font-bold text-slate-500">BM</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900">Brahm Meka</h3>
          <p className="text-sm text-primary-600 font-semibold mt-1">Founder &amp; CEO</p>
          <p className="mt-3 text-sm text-slate-500 max-w-sm text-center leading-relaxed">
            Built warehouse systems for Fortune 1000 companies. Founded Brahmin to bring that same power to small manufacturers.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((member) => (
            <div key={member.title} className="flex flex-col items-center text-center">
              <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 text-lg font-bold ${member.color}`}>
                {/* Replace with: <Image src={...} alt={member.name} fill className="object-cover rounded-full" /> */}
                {member.initials}
              </div>
              <h4 className="font-semibold text-slate-900 text-sm">{member.name}</h4>
              <p className="text-xs text-slate-500 mt-0.5">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
