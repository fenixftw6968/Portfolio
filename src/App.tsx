import { useState, useEffect } from 'react'
import Lenis from 'lenis'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { ExperienceTimeline } from './components/ExperienceTimeline'
import { Projects } from './components/Projects'
import { Achievements } from './components/Achievements'
import { CompetitiveProgramming } from './components/CompetitiveProgramming'
import { TechnicalArsenal } from './components/TechnicalArsenal'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { CustomCursor } from './components/CustomCursor'

export function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    // Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.8,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'honors', 'cp', 'stack', 'contact']
      const scrollPos = window.scrollY + 250

      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      lenis.destroy()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-[#050505] text-[#FFFFFF] relative font-sans selection:bg-white selection:text-black">
      {/* Minimal Monochrome Custom Cursor */}
      <CustomCursor />

      {/* Clean Navbar */}
      <Navbar
        activeSection={activeSection}
        onSelectSection={scrollToSection}
      />

      {/* Main Content Sections */}
      <main>
        <Hero onExploreClick={() => scrollToSection('projects')} />

        <About />

        <ExperienceTimeline />

        <Projects />

        <Achievements />

        <CompetitiveProgramming />

        <TechnicalArsenal />

        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
