import { useState } from 'react'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/10 backdrop-blur-md shadow-lg shadow-sage-900/10">
          <a href="#home" className="pl-5 py-3 text-lg font-semibold text-sage-900 dark:text-sage-50">
            <span className="sr-only">Brand</span>
            <span className="tracking-tight text-emerald-900/80 dark:text-emerald-100">Dr. Rivera</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 pr-5 text-emerald-900/80 dark:text-emerald-50/90">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-emerald-600 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="ml-2 inline-flex items-center rounded-full bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-500 transition-colors shadow">
              Book a Free Consultation
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden p-3 pr-5 text-emerald-900/80">
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 rounded-2xl border border-white/10 bg-white/70 backdrop-blur-xl shadow-lg">
            <div className="flex flex-col divide-y divide-emerald-900/10">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="px-6 py-3 text-emerald-900 hover:bg-white">
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="px-6 py-3 text-white bg-emerald-600 rounded-b-2xl hover:bg-emerald-500">
                Book a Free Consultation
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
