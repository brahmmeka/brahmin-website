// Photos: drop files in /public/images/ and /public/images/team/ then ask Claude to wire them up.
// Brahm photo: /images/brahm-meka.jpg (displays at w-48 h-48 rounded-2xl)
// Team photos: /images/team/[name].jpg (displays at w-20 h-20 rounded-full)

const team = [
  {
    initials: 'BM',
    name: 'Brahm Meka',
    title: 'Founder & CEO',
    photo: '/images/brahm-meka.jpg',
    color: 'bg-primary-100 text-primary-700',
  },
  {
    initials: 'NG',
    name: 'Nirav Gandhi',
    title: 'Head of Engineering',
    photo: '/images/team/nirav-gandhi.jpg',
    color: 'bg-violet-100 text-violet-700',
  },
  {
    initials: 'DG',
    name: 'Devarsh Gadani',
    title: 'Software Engineer',
    photo: '/images/team/devarsh-gadani.jpg',
    color: 'bg-primary-100 text-primary-700',
  },
  {
    initials: 'HD',
    name: 'Hardik Doshi',
    title: 'Software Engineer',
    photo: '/images/team/hardik-doshi.jpg',
    color: 'bg-amber-100 text-amber-700',
  },
  {
    initials: 'PJ',
    name: 'Paragm Jagani',
    title: 'Software Engineer',
    photo: '/images/team/paragm-jagani.jpg',
    color: 'bg-indigo-100 text-indigo-700',
  },
  {
    initials: 'ML',
    name: 'Matt Lyn',
    title: 'Support',
    photo: '/images/team/matt-lyn.jpg',
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

        {/* Team grid — Brahm + 5 team members */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {team.map((member) => (
            <div key={member.name} className="flex flex-col items-center text-center">
              <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 text-lg font-bold overflow-hidden ${member.color}`}>
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
