import { useState, useEffect } from 'react'
import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { CompetitiveProgramming } from './components/CompetitiveProgramming'
import { GitHubActivity } from './components/GitHubActivity'
import { TechnicalArsenal } from './components/TechnicalArsenal'
import { InteractiveTerminal } from './components/InteractiveTerminal'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { ScrollVideoBackdrop } from './components/ScrollVideoBackdrop'

export function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isTerminalOpen, setIsTerminalOpen] = useState(false)

  // Track global scroll progression
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      const currentProgress = totalScroll > 0 ? window.scrollY / totalScroll : 0
      setScrollProgress(currentProgress)

      // Section spy
      const sections = ['home', 'about', 'projects', 'cp', 'github', 'stack', 'contact']
      const scrollPos = window.scrollY + 200

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
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Keyboard shortcut ` or ~ to toggle terminal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '`' || e.key === '~') {
        e.preventDefault()
        setIsTerminalOpen((prev) => !prev)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-[#030712] text-[#f8fafc] selection:bg-indigo-500 selection:text-white relative">
      {/* Scroll-driven aerial motion video backdrop */}
      <ScrollVideoBackdrop />

      {/* Top glowing scroll progress indicator */}
      <div
        className="fixed top-0 left-0 h-[2.5px] bg-gradient-to-r from-indigo-500 via-cyan-400 to-purple-500 z-50 transition-all duration-75 shadow-[0_0_12px_rgba(6,182,212,0.8)]"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      {/* Modern Floating Header / Navigation */}
      <Navigation
        activeSection={activeSection}
        onSelectSection={scrollToSection}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      {/* Main Content Sections with elevated backdrop blur */}
      <main className="relative z-10">
        <Hero
          scrollOffset={scrollProgress}
          onExploreClick={() => scrollToSection('about')}
          onOpenTerminal={() => setIsTerminalOpen(true)}
        />

        <About />

        <Projects />

        <CompetitiveProgramming />

        <GitHubActivity />

        <TechnicalArsenal />

        <Contact />
      </main>

      {/* Modern Footer */}
      <div className="relative z-10">
        <Footer onOpenTerminal={() => setIsTerminalOpen(true)} />
      </div>

      {/* Interactive Command Terminal Modal */}
      <InteractiveTerminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
    </div>
  )
}

export default App
