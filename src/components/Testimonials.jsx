import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const quotes = [
  {
    text: 'I felt safe for the first time in years. I learned how to breathe again and trust my body.',
    author: 'A.M.'
  },
  {
    text: 'Her presence is calm and steady. I finally have tools that actually work for me.',
    author: 'J.R.'
  },
  {
    text: 'I never felt rushed. The small changes added up to big shifts in my life.',
    author: 'L.S.'
  }
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % quotes.length), 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-[radial-gradient(40rem_20rem_at_bottom,rgba(16,185,129,0.08),transparent)]">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-emerald-950">What Clients Say</h2>

        <div className="relative mt-10 min-h-[160px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl"
            >
              <p className="text-xl text-emerald-900/90 leading-relaxed">“{quotes[index].text}”</p>
              <p className="mt-4 text-emerald-700">— {quotes[index].author}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
