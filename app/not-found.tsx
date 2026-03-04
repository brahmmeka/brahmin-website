export default function NotFound() {
  return (
    <main className="py-section text-center">
      <div className="container mx-auto px-6 max-w-7xl">
        <h1 className="text-6xl font-bold text-slate-900">404</h1>
        <p className="mt-4 text-xl text-slate-600">Page not found.</p>
        <a href="/" className="mt-8 inline-block text-primary-600 hover:text-primary-700 font-medium">
          ← Back to home
        </a>
      </div>
    </main>
  )
}
