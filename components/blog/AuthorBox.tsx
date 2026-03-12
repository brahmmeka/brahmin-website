interface AuthorBoxProps {
  author: {
    name: string
    role?: string
    avatar?: {
      asset?: {
        _ref: string
      }
    }
  }
}

export default function AuthorBox({ author }: AuthorBoxProps) {
  const initial = author.name.charAt(0).toUpperCase()

  return (
    <div className="bg-slate-50 rounded-xl p-6 flex items-center gap-4">
      {/* Avatar */}
      <div className="shrink-0">
        {author.avatar?.asset?._ref ? (
          <img
            src={`https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/production/${author.avatar.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png').replace('-webp', '.webp')}`}
            alt={author.name}
            className="w-16 h-16 rounded-full object-cover"
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center text-xl font-bold">
            {initial}
          </div>
        )}
      </div>

      {/* Info */}
      <div>
        <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">Written by</p>
        <p className="font-semibold text-slate-900">{author.name}</p>
        {author.role && <p className="text-sm text-slate-500">{author.role}</p>}
      </div>
    </div>
  )
}
