import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('loading')
    setTimeout(() => setStatus('success'), 1000)
  }

  return (
    <section id="contact" className="py-24 sm:py-32 bg-gradient-to-b from-emerald-100/40 to-emerald-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-emerald-950">Begin your journey</h2>
            <p className="mt-4 text-emerald-900/80">Book a free 15-minute consultation. I’ll respond within one business day.</p>

            <div className="mt-8 rounded-3xl bg-white/70 backdrop-blur border border-emerald-900/10 p-6 shadow">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-emerald-900/80">Full name</label>
                  <input required type="text" className="mt-1 w-full rounded-xl border border-emerald-900/20 bg-white/70 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400 transition-shadow" placeholder="Alex Rivera" />
                </div>
                <div>
                  <label className="block text-sm text-emerald-900/80">Email</label>
                  <input required type="email" className="mt-1 w-full rounded-xl border border-emerald-900/20 bg-white/70 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400 transition-shadow" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="block text-sm text-emerald-900/80">Message</label>
                  <textarea required rows="4" className="mt-1 w-full rounded-xl border border-emerald-900/20 bg-white/70 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400 transition-shadow" placeholder="Tell me a little about what brings you here..." />
                </div>
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-white hover:bg-emerald-500 transition-colors"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Sending...' : status === 'success' ? 'Sent ✓' : 'Request Consultation'}
                </motion.button>
              </form>
            </div>
          </div>

          <div className="md:pl-6">
            <div className="rounded-3xl overflow-hidden shadow-lg border border-emerald-900/10">
              <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop" alt="Serene therapy office" className="w-full h-full object-cover" />
            </div>
            <div className="mt-6 text-emerald-900/80">
              <p>Located in a quiet, sunlit space in the city center. Online sessions available.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
