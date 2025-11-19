import { motion } from 'framer-motion'
import { Heart, Brain, Feather, Sparkles, Leaf, Compass } from 'lucide-react'

const services = [
  { icon: Heart, title: 'Anxiety & Stress', desc: 'Cultivate calm and resilience with practical tools and gentle guidance.' },
  { icon: Brain, title: 'Trauma-Informed Care', desc: 'Restore safety in your body using evidence-based, somatic approaches.' },
  { icon: Feather, title: 'Mindfulness', desc: 'Develop presence and compassion through breath, awareness, and rest.' },
  { icon: Compass, title: 'Life Transitions', desc: 'Navigate change with clarity—grief, relationships, career, and identity.' },
  { icon: Leaf, title: 'Self-Discovery', desc: 'Reconnect with your values, boundaries, and inner voice.' },
  { icon: Sparkles, title: 'Personal Growth', desc: 'Build confidence and deepen self-trust through reflective practice.' },
]

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-gradient-to-b from-emerald-50 to-emerald-100/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-emerald-950">Services</h2>
          <p className="mt-4 text-emerald-900/80">Gentle, structured sessions tailored to your unique needs.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl border border-emerald-900/10 bg-white shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/0 via-emerald-600/0 to-emerald-600/0 group-hover:via-emerald-600/5 group-hover:to-emerald-600/10 transition-colors" />
              <div className="p-6">
                <div className="inline-flex items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 p-3">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-medium text-emerald-950">{title}</h3>
                <p className="mt-2 text-emerald-900/80 leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
