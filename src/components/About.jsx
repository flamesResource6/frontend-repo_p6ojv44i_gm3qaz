import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[radial-gradient(40rem_20rem_at_top,rgba(16,185,129,0.08),transparent)]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop" alt="Therapist portrait" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl font-semibold text-emerald-950">About Dr. Rivera</h2>
            <p className="mt-6 text-emerald-900/80 leading-relaxed">
              I provide a calm, supportive space where you can feel seen, heard, and understood. My work integrates mindfulness, somatic practices, and trauma-informed, evidence-based approaches to help you reconnect with yourself and cultivate resilience.
            </p>
            <p className="mt-4 text-emerald-900/80 leading-relaxed">
              Together, we move at your pace—building safety, clarity, and trust—so that meaningful change can unfold.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
