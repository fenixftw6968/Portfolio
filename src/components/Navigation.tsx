import { SECTIONS, SITE } from '../config/site'
import { Terminal, ArrowUpRight } from 'lucide-react'
import { useState, useEffect } from 'react'

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
      setScrolled(window.scrollY > 30)
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
          ? 'bg-[#030712]/80 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-indigo-950/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo with glowing badge */}
        <div className="flex items-center gap-3">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              onSelectSection('home')
            }}
            className="group flex items-center gap-2.5 font-mono text-sm tracking-wider"
          >
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-[1px] shadow-lg shadow-indigo-500/25">
              <div className="w-full h-full bg-[#090d16] rounded-lg flex items-center justify-center">
                <span className="font-bold text-xs text-white group-hover:text-cyan-400 transition-colors">
                  K
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                {SITE.domain}
              </span>
              <span className="text-[9px] text-slate-400 font-sans tracking-normal -mt-0.5">
                ENGINEER PORTFOLIO
              </span>
            </div>
          </a>

          {/* Telemetry pill */}
          <div className="hidden lg:flex items-center gap-2 pl-4 ml-2 border-l border-white/[0.08] text-xs font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping mr-1" />
            <span className="text-slate-300">PICT / 3RD YEAR</span>
            <span className="text-slate-600">•</span>
            <span className="text-indigo-400 font-semibold">{time}</span>
          </div>
        </div>

        {/* Floating pill navigation items */}
        <nav className="hidden md:flex items-center gap-1.5 p-1 rounded-full bg-slate-900/60 border border-white/[0.08] backdrop-blur-md">
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
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md shadow-indigo-500/25 font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {sec.label}
              </a>
            )
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onOpenTerminal}
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-white/[0.1] hover:border-indigo-500/50 text-slate-300 hover:text-white text-xs font-mono transition-all cursor-pointer shadow-sm group"
            title="Open Interactive Terminal"
          >
            <Terminal className="w-3.5 h-3.5 text-cyan-400 group-hover:rotate-12 transition-transform" />
            <span className="hidden sm:inline">TERMINAL</span>
            <span className="text-[10px] px-1 py-0.5 rounded bg-white/[0.06] text-slate-400 font-mono hidden md:inline">
              ~
            </span>
          </button>

          <a
            href={SITE.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center p-[1px] overflow-hidden rounded-lg font-medium group transition-all"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 group-hover:opacity-100 transition-opacity"></span>
            <span className="relative flex items-center gap-1.5 px-4 py-2 transition-all ease-out bg-slate-950 rounded-[7px] group-hover:bg-opacity-0 text-xs font-semibold text-white">
              <span>GITHUB</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </a>
        </div>
      </div>
    </header>
  )
}
