import { useEffect, useRef } from 'react'

export function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    // Particle settings
    const particleCount = Math.min(Math.floor(window.innerWidth / 28), 50)
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 1,
      baseAlpha: Math.random() * 0.25 + 0.1,
    }))

    let mouseX = -1000
    let mouseY = -1000

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      // Connect near particles
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i]
        p1.x += p1.vx
        p1.y += p1.vy

        // Wrap around bounds
        if (p1.x < 0) p1.x = width
        if (p1.x > width) p1.x = 0
        if (p1.y < 0) p1.y = height
        if (p1.y > height) p1.y = 0

        // Draw particle
        ctx.beginPath()
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(8, 72, 45, ${p1.baseAlpha})`
        ctx.fill()

        // Interaction with mouse
        const dxM = p1.x - mouseX
        const dyM = p1.y - mouseY
        const distM = Math.sqrt(dxM * dxM + dyM * dyM)
        if (distM < 120) {
          ctx.beginPath()
          ctx.moveTo(p1.x, p1.y)
          ctx.lineTo(mouseX, mouseY)
          ctx.strokeStyle = `rgba(8, 72, 45, ${0.15 * (1 - distM / 120)})`
          ctx.lineWidth = 0.8
          ctx.stroke()
        }

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 130) {
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(8, 72, 45, ${0.08 * (1 - dist / 130)})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-60"
    />
  )
}

