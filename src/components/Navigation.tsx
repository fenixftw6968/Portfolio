import { SECTIONS, SITE } from '../config/site'
import { Terminal, ArrowUpRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { Magnetic } from './Magnetic'

interface NavigationProps {
  activeSection: string
  onSelectSection: (id: string) => void
  onOpenTerminal: () => void
}

export function Navigation({ activeSection, onSelectSection, onOpenTerminal }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false)
  const [time, setTime] = useState('')

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
          ? 'bg-[#F5F8EF]/95 backdrop-blur-md border-b border-[#08482D]/15 py-3 shadow-md'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand with Studio Monogram */}
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
              className="w-10 h-10 rounded-full bg-[#08482D] text-[#F5F8EF] flex items-center justify-center font-black text-base tracking-tight shadow-md group-hover:bg-[#053320] transition-colors"
            >
              K.
            </motion.div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-tight text-[#0d120e] group-hover:text-[#08482D] transition-colors font-display text-base">
                KARTIK BHANGALE
              </span>
              <span className="text-xs text-[#414447] font-semibold">
                AI &amp; DS Engineer • PICT
              </span>
            </div>
          </a>

          {/* Time & Location Badge */}
          <div className="hidden lg:flex items-center gap-2 pl-4 ml-2 border-l border-[#08482D]/15 text-sm text-[#414447] font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-[#08482D] animate-pulse" />
            <span>PUNE, IN</span>
            <span>•</span>
            <span className="text-[#08482D] font-mono font-bold">{time}</span>
          </div>
        </div>

        {/* Studio Pill Navigation Links with Spring Layout Slider */}
        <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-[#EBF2DF]/80 border border-[#BED4A0] backdrop-blur-sm shadow-sm relative">
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
                  isActive ? 'text-[#F5F8EF]' : 'text-[#0d120e] hover:text-[#08482D]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSectionIndicator"
                    className="absolute inset-0 bg-[#08482D] rounded-full -z-10 shadow-sm"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {sec.label}
              </a>
            )
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <Magnetic pullRatio={0.25}>
            <button
              onClick={onOpenTerminal}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#EBF2DF] hover:bg-[#DAE7C7] border border-[#BED4A0] text-[#08482D] text-xs font-mono font-bold transition-all cursor-pointer shadow-sm group"
              title="Open Interactive Terminal"
            >
              <Terminal className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              <span className="hidden sm:inline">CLI</span>
              <span className="text-xs px-1.5 py-0.5 rounded bg-[#DAE7C7] text-[#08482D] font-mono hidden md:inline">
                ~
              </span>
            </button>
          </Magnetic>

          <Magnetic pullRatio={0.25}>
            <a
              href={SITE.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-forest text-xs py-2.5 px-5 shadow-sm"
            >
              <span>GITHUB</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </Magnetic>
        </div>
      </div>
    </header>
  )
}
