import { useState, useEffect } from 'react'

interface TrailPoint {
  x: number
  y: number
  id: number
}

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [follower, setFollower] = useState({ x: -100, y: -100 })
  const [trail, setTrail] = useState<TrailPoint[]>([])
  const [isPointer, setIsPointer] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isText, setIsText] = useState(false)

  useEffect(() => {
    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    let trailId = 0

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e
      setPosition({ x, y })

      // Add trailing coordinates
      trailId++
      setTrail((prev) => [
        { x, y, id: trailId },
        ...prev.slice(0, 5),
      ])

      const target = e.target as HTMLElement
      const clickable = Boolean(
        target.closest('button, a, input, [role="button"], .clickable, .reelmark-card, canvas')
      )
      const textElem = Boolean(
        target.closest('p, h1, h2, h3, h4, span') && !clickable
      )

      setIsPointer(clickable)
      setIsText(textElem)
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  // Smooth cinematic follower lag loop
  useEffect(() => {
    let animId: number
    const animateFollower = () => {
      setFollower((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.18,
        y: prev.y + (position.y - prev.y) * 0.18,
      }))
      animId = requestAnimationFrame(animateFollower)
    }
    animId = requestAnimationFrame(animateFollower)
    return () => cancelAnimationFrame(animId)
  }, [position])

  return (
    <>
      {/* Trailing Stardust Sparks */}
      {trail.map((point, index) => {
        const opacity = (1 - index / 6) * 0.4
        const scale = 1 - index * 0.15
        return (
          <div
            key={point.id}
            className="fixed pointer-events-none z-[99996] rounded-full bg-[#34D399] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 hidden md:block"
            style={{
              left: `${point.x}px`,
              top: `${point.y}px`,
              width: `${5 * scale}px`,
              height: `${5 * scale}px`,
              opacity,
              filter: 'blur(0.5px)',
            }}
          />
        )
      })}

      {/* Precision Core Aim Dot */}
      <div
        className="fixed pointer-events-none z-[99999] w-2 h-2 rounded-full bg-[#10B981] -translate-x-1/2 -translate-y-1/2 mix-blend-difference hidden md:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.6 : 1})`,
        }}
      />

      {/* Cinematic Aura Halo (Active Theory style) */}
      <div
        className={`fixed pointer-events-none z-[99998] rounded-full border -translate-x-1/2 -translate-y-1/2 transition-[width,height,background-color,border-color,opacity,transform] duration-300 ease-out hidden md:block ${
          isPointer
            ? 'w-16 h-16 bg-[#34D399]/20 border-[#10B981] opacity-95 scale-110'
            : isText
            ? 'w-9 h-9 bg-transparent border-white/40 opacity-50'
            : 'w-11 h-11 bg-transparent border-[#10B981]/50 opacity-70'
        }`}
        style={{
          left: `${follower.x}px`,
          top: `${follower.y}px`,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.8 : 1})`,
        }}
      />
    </>
  )
}
