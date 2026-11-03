import { useState, useEffect } from 'react'

export function FloatingDecorations() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating Mint Pill - Left side */}
      <div
        className="absolute left-6 top-1/4 animate-float hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#DAE7C7]/60 border border-[#C8DBAE]/80 backdrop-blur-xs text-[#08482D] text-xs font-handwriting font-bold shadow-xs"
        style={{
          transform: `translateY(${scrollY * -0.08}px) rotate(-6deg)`,
        }}
      >
        <span>⚡ high-throughput systems</span>
      </div>

      {/* Floating Annotation Tag - Right side */}
      <div
        className="absolute right-8 top-1/3 animate-float-reverse hidden xl:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 border border-[#08482D]/15 backdrop-blur-xs text-[#08482D] text-xs font-handwriting font-bold shadow-xs"
        style={{
          transform: `translateY(${scrollY * 0.06}px) rotate(4deg)`,
        }}
      >
        <span>🎯 930+ solves</span>
      </div>

      {/* Floating Geometric Studio Rings */}
      <div
        className="absolute -right-20 top-2/3 w-72 h-72 rounded-full border border-[#08482D]/8 pointer-events-none transition-transform duration-700 ease-out"
        style={{
          transform: `translateY(${scrollY * -0.05}px) scale(1.05)`,
        }}
      />
      <div
        className="absolute -left-16 bottom-1/4 w-80 h-80 rounded-full border border-[#C8DBAE]/40 pointer-events-none transition-transform duration-700 ease-out"
        style={{
          transform: `translateY(${scrollY * 0.04}px)`,
        }}
      />
    </div>
  )
}

