import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-emerald-50 text-emerald-950 scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <footer className="py-10 text-center text-emerald-900/70">
        <p>© {new Date().getFullYear()} Dr. Rivera — All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
