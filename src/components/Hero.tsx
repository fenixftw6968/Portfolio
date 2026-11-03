import { CenterpieceCanvas } from './CenterpieceCanvas'
import { HERO_STATEMENT, HERO_MODES, SITE } from '../config/site'
import { ArrowDown, Terminal } from 'lucide-react'

interface HeroProps {
  scrollOffset: number
  onExploreClick: () => void
  onOpenTerminal: () => void
}

export function Hero({ scrollOffset, onExploreClick, onOpenTerminal }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-24 flex flex-col justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        {/* Soft Mint Introductory Badge & Animated Handwritten Annotation */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-4">
          <div className="flex items-center gap-3">
            <div className="badge-mint shadow-sm hover:scale-105 transition-transform text-sm font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-[#08482D] animate-ping" />
              <span>{SITE.availability}</span>
              <span className="text-[#08482D]/40">•</span>
              <span>{SITE.institutionShort} 2026</span>
            </div>
            
            {/* Prominent handwritten annotation */}
            <div className="hidden sm:flex items-center gap-2 font-handwriting text-2xl text-[#08482D] font-bold animate-float">
              <span>portfolio v3.0 / real telemetry</span>
              <svg className="w-6 h-6 text-[#08482D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M4 14C8 18 14 18 19 12M19 12L15 11M19 12L18 16" />
              </svg>
            </div>
          </div>

          <div className="text-sm text-[#414447] font-semibold hidden md:block">
            {SITE.location} • <span className="text-[#08482D] font-mono font-bold">{SITE.batch}</span>
          </div>
        </div>

        {/* Hero Grid: Editorial Typography + Floating 3D Centerpiece */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center py-6 lg:py-10">
          
          {/* Left Column: Bold Asymmetric Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-7">
            <div>
              <span className="text-sm font-mono font-extrabold tracking-widest text-[#08482D] uppercase block mb-3">
                ENGINEER &amp; ALGORITHMIC SPECIALIST
              </span>
              <h1 className="text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-black tracking-tight text-[#0d120e] font-display uppercase leading-[0.9] drop-shadow-sm">
                KARTIK
                <br />
                <span className="text-[#08482D]">
                  BHANGALE.
                </span>
              </h1>
            </div>

            {/* Reelmark-style Editorial Mantra Block */}
            <div className="p-7 sm:p-8 rounded-3xl reelmark-card-mint relative group border-2 border-[#BED4A0]">
              {/* Handwritten note on top right */}
              <div className="absolute -top-4 right-6 px-4 py-1 rounded-full bg-[#08482D] text-[#F5F8EF] font-handwriting text-base font-bold shadow-md rotate-2 group-hover:rotate-6 transition-transform">
                core mantra
              </div>

              <div className="font-display text-lg sm:text-xl font-black text-[#08482D] tracking-tight flex flex-wrap gap-2.5 mb-3">
                {HERO_STATEMENT.map((phrase, idx) => (
                  <span
                    key={idx}
                    className={`inline-block mr-1.5 transition-transform hover:scale-105 ${
                      phrase === 'I UNDERSTAND.' ? 'underline decoration-3 decoration-[#08482D] underline-offset-4' : ''
                    }`}
                  >
                    {phrase}
                  </span>
                ))}
              </div>
              <p className="text-base sm:text-lg text-[#0d120e] font-medium leading-relaxed font-sans">
                Building resilient backend systems, solving high-constraint algorithmic problems, and exploring machine intelligence. Third-year AI &amp; DS undergraduate at PICT Pune with an obsession for verifiable architectures and zero-failure designs.
              </p>
            </div>

            {/* Core Capability Cards in Studio Style with larger typography */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
              {HERO_MODES.map((mode, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl reelmark-card flex flex-col justify-between group cursor-default"
                >
                  <span className="text-xs font-mono font-bold text-[#414447] mb-2.5 block group-hover:text-[#08482D] transition-colors">
                    0{i + 1} // FOCUS
                  </span>
                  <div>
                    <p className="text-sm font-black text-[#0d120e] font-display uppercase tracking-wider group-hover:text-[#08482D] transition-colors">
                      {mode.label}
                    </p>
                    <p className="text-xs text-[#414447] font-semibold mt-1.5 leading-snug">
                      {mode.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Hero Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={onExploreClick}
                className="btn-forest cursor-pointer shadow-md text-base"
              >
                <span>EXPLORE WORK</span>
                <ArrowDown className="w-5 h-5" />
              </button>

              <button
                onClick={onOpenTerminal}
                className="btn-mint cursor-pointer shadow-sm text-base"
              >
                <Terminal className="w-5 h-5 text-[#08482D]" />
                <span>INTERACTIVE CLI</span>
              </button>
            </div>
          </div>

          {/* Right Column: Floating 3D Geometric Centerpiece */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            <div className="relative w-full aspect-square max-w-[520px] rounded-3xl p-3.5 bg-white border-2 border-[#08482D]/15 shadow-xl shadow-[#08482D]/8 transition-transform duration-500 hover:shadow-2xl">
              
              {/* Handwritten Note Pin with Float Animation */}
              <div className="absolute -top-4 -left-3 z-20 px-4 py-1.5 bg-[#DAE7C7] text-[#08482D] rounded-full font-handwriting text-lg font-bold shadow-md animate-float border border-[#BED4A0]">
                move cursor to orbit 3d
              </div>

              {/* Top Studio Indicator */}
              <div className="absolute top-4 right-6 flex items-center gap-2 text-xs font-mono font-bold text-[#414447] z-20 pointer-events-none">
                <span className="w-2.5 h-2.5 rounded-full bg-[#08482D] animate-ping" />
                <span>THREE.JS CORE</span>
              </div>

              {/* Three.js Centerpiece Canvas */}
              <div className="w-full h-full rounded-2xl overflow-hidden bg-[#F5F8EF] relative">
                <CenterpieceCanvas scrollOffset={scrollOffset} />
              </div>

              {/* Bottom Telemetry Overlay */}
              <div className="absolute bottom-4 left-6 right-6 flex justify-between items-center text-xs font-mono font-bold text-[#414447] z-20 pointer-events-none">
                <span>SCULPTURE // 180 NODES</span>
                <span className="text-[#08482D]">DRAG &amp; ROTATE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Telemetry bottom stats bar with bold clear metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 border-t border-[#08482D]/15">
          <div className="p-6 rounded-2xl reelmark-card">
            <span className="text-[#414447] text-xs font-mono font-bold block mb-1">LEETCODE RATING</span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-3xl sm:text-4xl font-black text-[#0d120e] font-display">1784</span>
              <span className="text-xs font-mono font-extrabold text-[#08482D]">PEAK 1879</span>
            </div>
            <span className="text-xs text-[#414447] font-semibold mt-1 block">Top 9.13% Worldwide</span>
          </div>

          <div className="p-6 rounded-2xl reelmark-card">
            <span className="text-[#414447] text-xs font-mono font-bold block mb-1">TOTAL CP SOLVES</span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-3xl sm:text-4xl font-black text-[#08482D] font-display">930+</span>
              <span className="text-xs font-mono font-bold text-[#414447]">SOLUTIONS</span>
            </div>
            <span className="text-xs text-[#414447] font-semibold mt-1 block">LC: 705 / CF: 62 / CC: 163</span>
          </div>

          <div className="p-6 rounded-2xl reelmark-card">
            <span className="text-[#414447] text-xs font-mono font-bold block mb-1">CODEFORCES RATING</span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-3xl sm:text-4xl font-black text-[#0d120e] font-display">1018</span>
              <span className="text-xs font-mono font-extrabold text-[#08482D]">NEWBIE</span>
            </div>
            <span className="text-xs text-[#414447] font-semibold mt-1 block">4 Rated Contests</span>
          </div>

          <div className="p-6 rounded-2xl reelmark-card">
            <span className="text-[#414447] text-xs font-mono font-bold block mb-1">ACADEMIC BASE</span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-2xl sm:text-3xl font-black text-[#0d120e] font-display truncate">PICT PUNE</span>
            </div>
            <span className="text-xs text-[#414447] font-semibold mt-1 block">B.Tech AI &amp; DS (2026)</span>
          </div>
        </div>
      </div>
    </section>
  )
}
