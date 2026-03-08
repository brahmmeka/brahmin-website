'use client'

export default function ContactForm() {
  return (
    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
            Full name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Jane Smith"
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-400 transition"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
            Work email
          </label>
          <input
            id="email"
            type="email"
            placeholder="jane@company.com"
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-400 transition"
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1.5">
          Company
        </label>
        <input
          id="company"
          type="text"
          placeholder="Acme Manufacturing"
          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-400 transition"
        />
      </div>

      <div>
        <label htmlFor="reason" className="block text-sm font-medium text-slate-700 mb-1.5">
          What can we help with?
        </label>
        <select
          id="reason"
          defaultValue=""
          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-400 transition bg-white"
        >
          <option value="" disabled>Select a topic</option>
          <option value="demo">Request a demo</option>
          <option value="question">General question</option>
          <option value="support">Support issue</option>
          <option value="partnership">Partnership inquiry</option>
          <option value="other">Something else</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Tell us a bit about your business and what you're looking for..."
          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-400 transition resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-xl transition-colors text-sm shadow-sm"
      >
        Send message
      </button>

      <p className="text-xs text-slate-400 text-center">
        We reply within one business day. Existing customers get dedicated support in under 15 minutes.
      </p>
    </form>
  )
}
