import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative h-[100vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/poZi6bJ4-Htwt04i/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/30 via-emerald-950/40 to-emerald-950/70 pointer-events-none" />

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl sm:text-6xl font-semibold tracking-tight text-emerald-50 drop-shadow-[0_6px_30px_rgba(16,185,129,0.25)]"
            >
              Healing Begins Here
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="mt-6 text-lg leading-relaxed text-emerald-50/90"
            >
              Compassionate, evidence-based therapy for anxiety, trauma, and personal growth.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-10 flex items-center gap-3"
            >
              <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-emerald-500/90 backdrop-blur px-6 py-3 text-emerald-50 shadow-lg shadow-emerald-900/20 hover:bg-emerald-400 transition-colors">
                Book a Free Consultation
              </a>
              <a href="#about" className="inline-flex items-center justify-center rounded-full border border-emerald-200/40 bg-white/10 backdrop-blur px-6 py-3 text-emerald-50 hover:bg-white/20 transition-colors">
                Learn more
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-emerald-100/80">
        <a href="#about" className="inline-block animate-bounce-slow">Scroll</a>
      </div>
    </section>
  )
}
