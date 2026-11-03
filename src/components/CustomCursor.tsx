import { useState, useEffect } from 'react'

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [follower, setFollower] = useState({ x: -100, y: -100 })
  const [isPointer, setIsPointer] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsTouch(true)
      return
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      const target = e.target as HTMLElement
      const clickable = Boolean(target.closest('button, a, input, [role="button"], .clickable'))
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

  useEffect(() => {
    if (isTouch) return
    let animId: number
    const animateFollower = () => {
      setFollower((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.2,
        y: prev.y + (position.y - prev.y) * 0.2,
      }))
      animId = requestAnimationFrame(animateFollower)
    }
    animId = requestAnimationFrame(animateFollower)
    return () => cancelAnimationFrame(animId)
  }, [position, isTouch])

  if (isTouch) return null

  return (
    <>
      <div
        className="fixed pointer-events-none z-[99999] w-1.5 h-1.5 rounded-full bg-white -translate-x-1/2 -translate-y-1/2 mix-blend-difference hidden md:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.6 : 1})`,
        }}
      />
      <div
        className={`fixed pointer-events-none z-[99998] rounded-full border border-white/30 -translate-x-1/2 -translate-y-1/2 transition-[width,height,opacity,transform] duration-200 ease-out hidden md:block ${
          isPointer ? 'w-11 h-11 bg-white/10 border-white/60 scale-110' : 'w-8 h-8 opacity-40'
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
