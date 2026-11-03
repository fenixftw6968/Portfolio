import React, { useRef, useState } from 'react'

interface Tilt3DCardProps {
  children: React.ReactNode
  className?: string
  intensity?: number
}

export function Tilt3DCard({
  children,
  className = '',
  intensity = 15,
}: Tilt3DCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState({
    rotateX: 0,
    rotateY: 0,
    glareX: 50,
    glareY: 50,
    isHovered: false,
  })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * -intensity
    const rotateY = ((x - centerX) / centerX) * intensity

    setTransform({
      rotateX,
      rotateY,
      glareX: (x / rect.width) * 100,
      glareY: (y / rect.height) * 100,
      isHovered: true,
    })
  }

  const handleMouseLeave = () => {
    setTransform({
      rotateX: 0,
      rotateY: 0,
      glareX: 50,
      glareY: 50,
      isHovered: false,
    })
  }

  return (
    <div
      style={{ perspective: '1000px' }}
      className="relative will-change-transform"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
          transition: transform.isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
          transformStyle: 'preserve-3d',
        }}
        className={`relative ${className}`}
      >
        {/* Subtle shine / glare effect */}
        {transform.isHovered && (
          <div
            className="pointer-events-none absolute inset-0 rounded-[inherit] z-20 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at ${transform.glareX}% ${transform.glareY}%, rgba(218, 231, 199, 0.25), transparent 60%)`,
            }}
          />
        )}
        {children}
      </div>
    </div>
  )
}

