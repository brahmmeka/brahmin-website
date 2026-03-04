export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <main className="py-section">
      <div className="container mx-auto px-6 max-w-7xl">
        <h1 className="text-4xl font-bold text-slate-900">Blog Post: {params.slug}</h1>
        <p className="mt-4 text-slate-600">Content coming soon.</p>
      </div>
    </main>
  )
}
