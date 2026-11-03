import { useState, useEffect } from 'react'

export function InteractiveCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [follower, setFollower] = useState({ x: -100, y: -100 })
  const [isPointer, setIsPointer] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      // Check if target or parent is clickable
      const target = e.target as HTMLElement
      const clickable = Boolean(
        target.closest('button, a, input, [role="button"], .clickable, .reelmark-card')
      )
      setIsPointer(clickable)
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

  // Smooth lag follower loop
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
      {/* Precision Core Dot */}
      <div
        className="fixed pointer-events-none z-[9999] w-2.5 h-2.5 rounded-full bg-[#08482D] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 hidden md:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.7 : 1})`,
        }}
      />

      {/* Floating Spring Ring */}
      <div
        className={`fixed pointer-events-none z-[9998] rounded-full border border-[#08482D]/40 -translate-x-1/2 -translate-y-1/2 transition-[width,height,background-color,border-color] duration-300 ease-out hidden md:block ${
          isPointer
            ? 'w-12 h-12 bg-[#DAE7C7]/40 border-[#08482D]'
            : 'w-8 h-8 bg-transparent'
        }`}
        style={{
          left: `${follower.x}px`,
          top: `${follower.y}px`,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.85 : 1})`,
        }}
      />
    </>
  )
}

