import { useState, useEffect } from 'react'

interface TrailParticle {
  x: number
  y: number
  id: number
  size: number
}

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [follower, setFollower] = useState({ x: -100, y: -100 })
  const [trail, setTrail] = useState<TrailParticle[]>([])
  const [cursorType, setCursorType] = useState<'default' | 'pointer' | 'text' | 'magnetic'>('default')
  const [isClicking, setIsClicking] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    // Check for touch device or reduced motion
    if (window.matchMedia('(pointer: coarse)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsTouchDevice(true)
      return
    }

    let trailCount = 0

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e
      setPosition({ x, y })

      // Generate trailing physics particle
      trailCount++
      setTrail((prev) => [
        { x, y, id: trailCount, size: Math.random() * 3 + 3 },
        ...prev.slice(0, 7),
      ])

      const target = e.target as HTMLElement
      if (target.closest('.magnetic-active, [data-magnetic]')) {
        setCursorType('magnetic')
      } else if (target.closest('button, a, input, [role="button"], .clickable, .reelmark-card, canvas')) {
        setCursorType('pointer')
      } else if (target.closest('h1, h2, h3, h4, p, span')) {
        setCursorType('text')
      } else {
        setCursorType('default')
      }
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
    if (isTouchDevice) return

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
  }, [position, isTouchDevice])

  if (isTouchDevice) return null

  return (
    <>
      {/* 2. Interactive Stardust Particle Trail */}
      {trail.map((particle, index) => {
        const lifeRatio = 1 - index / 8
        return (
          <div
            key={particle.id}
            className="fixed pointer-events-none z-[99996] rounded-full bg-gradient-to-r from-[#10B981] to-[#34D399] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 hidden md:block"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              width: `${particle.size * lifeRatio}px`,
              height: `${particle.size * lifeRatio}px`,
              opacity: lifeRatio * 0.55,
              filter: 'blur(0.4px)',
            }}
          />
        )
      })}

      {/* 1. Precision Difference-Blend Aim Dot */}
      <div
        className="fixed pointer-events-none z-[99999] w-2 h-2 rounded-full bg-[#34D399] -translate-x-1/2 -translate-y-1/2 mix-blend-difference hidden md:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.5 : 1})`,
        }}
      />

      {/* Dynamic Interactive Reactive Halo */}
      <div
        className={`fixed pointer-events-none z-[99998] rounded-full -translate-x-1/2 -translate-y-1/2 transition-[width,height,background-color,border-color,opacity,transform] duration-200 ease-out hidden md:block ${
          cursorType === 'magnetic'
            ? 'w-20 h-20 bg-[#34D399]/25 border-2 border-[#10B981] scale-125 shadow-[0_0_20px_rgba(52,211,153,0.4)]'
            : cursorType === 'pointer'
            ? 'w-14 h-14 bg-[#34D399]/15 border border-[#10B981] opacity-90 scale-110'
            : cursorType === 'text'
            ? 'w-7 h-7 bg-transparent border border-white/40 opacity-40'
            : 'w-10 h-10 bg-transparent border border-[#10B981]/50 opacity-60'
        }`}
        style={{
          left: `${follower.x}px`,
          top: `${follower.y}px`,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.75 : 1})`,
        }}
      />
    </>
  )
}
