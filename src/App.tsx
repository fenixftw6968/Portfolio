import { useState, useEffect } from 'react'
import Lenis from 'lenis'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { ExperienceTimeline } from './components/ExperienceTimeline'
import { Projects } from './components/Projects'
import { Achievements } from './components/Achievements'
import { CompetitiveProgramming } from './components/CompetitiveProgramming'
import { GitHubActivity } from './components/GitHubActivity'
import { TechnicalArsenal } from './components/TechnicalArsenal'
import { InteractiveTerminal } from './components/InteractiveTerminal'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { CustomCursor } from './components/CustomCursor'
import { ParticleBackground } from './components/ParticleBackground'
import { LoadingScreen } from './components/LoadingScreen'
import { ThemeProvider } from './context/ThemeContext'

export function AppContent() {
  const [activeSection, setActiveSection] = useState('home')
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isTerminalOpen, setIsTerminalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Initialize Lenis smooth scroll engine
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      const currentProgress = totalScroll > 0 ? window.scrollY / totalScroll : 0
      setScrollProgress(currentProgress)

      // Section spy
      const sections = ['home', 'about', 'experience', 'projects', 'achievements', 'cp', 'github', 'stack', 'contact']
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
    return () => {
      lenis.destroy()
      window.removeEventListener('scroll', handleScroll)
    }
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
    <div className="min-h-screen bg-[#080B09] dark:bg-[#080B09] light:bg-[#F5F8EF] text-[#E0E7DC] dark:text-[#E0E7DC] light:text-[#101410] relative font-sans overflow-x-hidden selection:bg-[#10B981] selection:text-[#080B09] transition-colors duration-500">
      
      {/* Active Theory-inspired Loading Screen with shader warmup simulation */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Cinematic Custom Cursor */}
      <CustomCursor />

      {/* Floating Micro-Particle Web Backdrop */}
      <ParticleBackground />

      {/* Global Precision Progress Line */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-[#10B981] via-[#34D399] to-[#6EE7B7] z-50 transition-all duration-75 shadow-[0_0_8px_rgba(52,211,153,0.6)]"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      {/* Modular Navbar with Theme Toggle */}
      <Navbar
        activeSection={activeSection}
        onSelectSection={scrollToSection}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero
          scrollOffset={scrollProgress}
          onExploreClick={() => scrollToSection('about')}
          onOpenTerminal={() => setIsTerminalOpen(true)}
        />

        <About />

        <ExperienceTimeline />

        <Projects />

        <Achievements />

        <CompetitiveProgramming />

        <GitHubActivity />

        <TechnicalArsenal />

        <Contact />
      </main>

      {/* Studio Footer */}
      <Footer onOpenTerminal={() => setIsTerminalOpen(true)} />

      {/* Interactive Command Terminal Modal */}
      <InteractiveTerminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
    </div>
  )
}

export function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
