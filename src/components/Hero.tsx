import { CenterpieceCanvas } from './CenterpieceCanvas'
import { HERO_STATEMENT, HERO_MODES, SITE } from '../config/site'
import { ArrowDown, Terminal, Sparkles, Code2, Database, Brain } from 'lucide-react'

interface HeroProps {
  scrollOffset: number
  onExploreClick: () => void
  onOpenTerminal: () => void
}

export function Hero({ scrollOffset, onExploreClick, onOpenTerminal }: HeroProps) {
  const modeIcons = [Database, Code2, Brain]

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden bg-grid-modern"
    >
      {/* Aurora Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none animate-float-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none animate-float-slow [animation-delay:4s]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        {/* Status Pill Badge */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-6 border-b border-white/[0.06] text-xs font-mono text-slate-400">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-white/[0.08] backdrop-blur-md shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-slate-200 font-medium tracking-wide">
              {SITE.availability}
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-cyan-400">{SITE.institutionShort} 2026</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span>{SITE.location}</span>
            <span className="text-indigo-400 font-semibold">{SITE.batch}</span>
          </div>
        </div>

        {/* Hero Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-6 lg:py-12">
          {/* Left Column: Modern Hero Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <div>
              <p className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-cyan-400 mb-3 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                SYSTEM ARCHITECT &amp; ALGORITHMIC SPECIALIST
              </p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black tracking-tight text-white uppercase leading-[0.92]">
                KARTIK
                <br />
                <span className="text-gradient-cyan">
                  BHANGALE
                </span>
              </h1>
            </div>

            {/* Cinematic Mantra in Modern Glowing Glass Badge */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.01] border border-white/[0.08] backdrop-blur-xl shadow-xl shadow-indigo-950/20">
              <div className="font-mono text-sm sm:text-base font-bold text-white tracking-wide flex flex-wrap gap-2">
                {HERO_STATEMENT.map((phrase, idx) => (
                  <span
                    key={idx}
                    className={`px-2 py-0.5 rounded-md ${
                      phrase === 'I UNDERSTAND.'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                        : phrase === 'I REBUILD.'
                        ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                        : 'bg-white/[0.05] text-slate-200'
                    }`}
                  >
                    {phrase}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
                Building resilient backend systems, solving high-constraint algorithmic problems, and exploring applied neural vision. Third-year AI &amp; DS undergraduate at PICT Pune with a focus on verified architectures and zero-failure designs.
              </p>
            </div>

            {/* Core Capability Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {HERO_MODES.map((mode, i) => {
                const IconComponent = modeIcons[i % modeIcons.length]
                return (
                  <div
                    key={i}
                    className="p-4 rounded-xl glass-panel glass-panel-hover flex flex-col justify-between group cursor-default"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2 rounded-lg bg-indigo-500/10 text-cyan-400 group-hover:bg-indigo-500/20 group-hover:text-cyan-300 transition-colors">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-500">0{i + 1}</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {mode.label}
                      </p>
                      <p className="text-[10px] font-mono text-slate-400 mt-1">
                        {mode.detail}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Hero Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onExploreClick}
                className="relative inline-flex items-center justify-center p-[1px] overflow-hidden rounded-xl font-medium group transition-all cursor-pointer shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500"></span>
                <span className="relative flex items-center gap-2.5 px-6 py-3.5 transition-all ease-out bg-slate-950 rounded-[11px] group-hover:bg-opacity-80 text-xs font-bold text-white tracking-wider uppercase">
                  <span>EXPLORE TELEMETRY</span>
                  <ArrowDown className="w-4 h-4 text-cyan-400 group-hover:translate-y-0.5 transition-transform" />
                </span>
              </button>

              <button
                onClick={onOpenTerminal}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-white/[0.1] hover:border-indigo-500/50 text-white font-mono text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md group"
              >
                <Terminal className="w-4 h-4 text-indigo-400 group-hover:rotate-12 transition-transform" />
                <span>LAUNCH TERMINAL</span>
              </button>
            </div>
          </div>

          {/* Right Column: 3D Centerpiece with Modern Glass Orb Frame */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            <div className="relative w-full aspect-square max-w-[520px] rounded-3xl p-3 glass-panel border-white/[0.1] shadow-2xl shadow-indigo-950/40">
              {/* Top Glass Header */}
              <div className="absolute top-4 left-6 right-6 flex justify-between items-center text-[10px] font-mono text-slate-400 z-20 pointer-events-none">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  3D HARDWARE ACCELERATED CORE
                </span>
                <span className="px-2 py-0.5 rounded-full bg-white/[0.06] text-indigo-300 font-semibold">
                  60 FPS
                </span>
              </div>

              {/* Three.js Centerpiece Canvas */}
              <div className="w-full h-full rounded-2xl overflow-hidden bg-slate-950/60 relative">
                <CenterpieceCanvas scrollOffset={scrollOffset} />
              </div>

              {/* Bottom Telemetry Overlay */}
              <div className="absolute bottom-4 left-6 right-6 flex justify-between items-center text-[10px] font-mono text-slate-400 z-20 pointer-events-none">
                <span>INTERACTIVE POINTER ORBIT</span>
                <span className="text-cyan-400">160 NODES ACTIVE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Telemetry bottom stats bar in modern glass cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-white/[0.06]">
          <div className="p-4 rounded-xl glass-panel glass-panel-hover">
            <span className="text-slate-400 text-[11px] font-mono block">LEETCODE RATING</span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-2xl sm:text-3xl font-bold text-white font-mono">1784</span>
              <span className="text-xs font-mono text-cyan-400 font-semibold">PEAK 1879</span>
            </div>
            <span className="text-[10px] text-slate-500 font-mono">Top 9.13% Globally</span>
          </div>

          <div className="p-4 rounded-xl glass-panel glass-panel-hover">
            <span className="text-slate-400 text-[11px] font-mono block">TOTAL CP SOLVES</span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-2xl sm:text-3xl font-bold text-gradient-emerald font-mono">930+</span>
              <span className="text-xs font-mono text-emerald-400">SOLUTIONS</span>
            </div>
            <span className="text-[10px] text-slate-500 font-mono">LC: 705 / CF: 62 / CC: 163</span>
          </div>

          <div className="p-4 rounded-xl glass-panel glass-panel-hover">
            <span className="text-slate-400 text-[11px] font-mono block">CODEFORCES RATING</span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-2xl sm:text-3xl font-bold text-white font-mono">1018</span>
              <span className="text-xs font-mono text-indigo-400">NEWBIE</span>
            </div>
            <span className="text-[10px] text-slate-500 font-mono">4 Rated Contests</span>
          </div>

          <div className="p-4 rounded-xl glass-panel glass-panel-hover">
            <span className="text-slate-400 text-[11px] font-mono block">ACADEMIC BASE</span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-xl sm:text-2xl font-bold text-white font-mono truncate">PICT PUNE</span>
            </div>
            <span className="text-[10px] text-slate-500 font-mono">AI &amp; DS B.Tech (2026)</span>
          </div>
        </div>
      </div>
    </section>
  )
}
