import { SECTIONS, SITE } from '../config/site'
import { Terminal, ArrowUpRight, Sun, Moon } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { Magnetic } from './Magnetic'
import { useTheme } from '../context/ThemeContext'

interface NavbarProps {
  activeSection: string
  onSelectSection: (id: string) => void
  onOpenTerminal: () => void
}

export function Navbar({ activeSection, onSelectSection, onOpenTerminal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [time, setTime] = useState('')
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }) + ' IST'
      )
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080B09]/85 dark:bg-[#080B09]/85 light:bg-[#F5F8EF]/95 backdrop-blur-xl border-b border-white/10 dark:border-white/10 light:border-[#08482D]/15 py-3 shadow-2xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Monogram */}
        <div className="flex items-center gap-3">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              onSelectSection('home')
            }}
            className="group flex items-center gap-3"
          >
            <motion.div
              whileHover={{ rotate: 10, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full bg-[#10B981] text-[#080B09] flex items-center justify-center font-black text-base tracking-tight shadow-lg shadow-[#10B981]/20 font-display"
            >
              K.
            </motion.div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-tight text-white dark:text-white light:text-[#0d120e] group-hover:text-[#34D399] transition-colors font-display text-base">
                KARTIK BHANGALE
              </span>
              <span className="text-xs text-[#8A9684] dark:text-[#8A9684] light:text-[#414447] font-semibold">
                AI &amp; DS Engineer • PICT
              </span>
            </div>
          </a>

          {/* Real-time Telemetry IST */}
          <div className="hidden lg:flex items-center gap-2 pl-4 ml-2 border-l border-white/10 dark:border-white/10 light:border-[#08482D]/15 text-sm text-[#8A9684] font-medium font-mono">
            <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" />
            <span>PUNE, IN</span>
            <span>•</span>
            <span className="text-[#34D399] font-bold">{time}</span>
          </div>
        </div>

        {/* Cinematic Minimal Pill Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-white/5 dark:bg-white/5 light:bg-[#EBF2DF]/80 border border-white/10 dark:border-white/10 light:border-[#BED4A0] backdrop-blur-md shadow-inner relative">
          {SECTIONS.map((sec) => {
            const isActive = activeSection === sec.id
            return (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  onSelectSection(sec.id)
                }}
                className={`relative px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-colors duration-200 z-10 ${
                  isActive
                    ? 'text-[#080B09] dark:text-[#080B09] light:text-[#F5F8EF]'
                    : 'text-[#8A9684] hover:text-white dark:hover:text-white light:text-[#0d120e] light:hover:text-[#08482D]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSectionIndicator"
                    className="absolute inset-0 bg-[#34D399] dark:bg-[#34D399] light:bg-[#08482D] rounded-full -z-10 shadow-md shadow-[#34D399]/30"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {sec.label}
              </a>
            )
          })}
        </nav>

        {/* Controls: Theme Toggle, Terminal, GitHub */}
        <div className="flex items-center gap-3">
          
          {/* Active Theme Toggle */}
          <Magnetic pullRatio={0.3}>
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-white/5 dark:bg-white/5 light:bg-[#EBF2DF] border border-white/10 dark:border-white/10 light:border-[#BED4A0] text-[#34D399] dark:text-[#34D399] light:text-[#08482D] hover:scale-105 transition-all cursor-pointer shadow-xs"
              title="Toggle Theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </Magnetic>

          <Magnetic pullRatio={0.3}>
            <button
              onClick={onOpenTerminal}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 dark:bg-white/5 light:bg-[#EBF2DF] hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-[#DAE7C7] border border-white/10 dark:border-white/10 light:border-[#BED4A0] text-[#34D399] dark:text-[#34D399] light:text-[#08482D] text-xs font-mono font-bold transition-all cursor-pointer shadow-xs group"
              title="Open Interactive Terminal"
            >
              <Terminal className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              <span className="hidden sm:inline">CLI</span>
              <span className="text-xs px-1.5 py-0.5 rounded bg-white/10 text-[#34D399] font-mono hidden md:inline">
                ~
              </span>
            </button>
          </Magnetic>

          <Magnetic pullRatio={0.3}>
            <a
              href={SITE.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-forest text-xs py-2 px-4 shadow-sm inline-flex items-center gap-1.5"
            >
              <span>GITHUB</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </Magnetic>
        </div>
      </div>
    </header>
  )
}

