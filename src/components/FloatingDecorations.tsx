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

