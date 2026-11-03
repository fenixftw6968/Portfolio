import React, { useRef, useState } from 'react'

interface MagneticProps {
  children: React.ReactElement<React.HTMLAttributes<HTMLElement>>
  pullRatio?: number
  className?: string
}

export function Magnetic({ children, pullRatio = 0.35, className = '' }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const middleX = clientX - (left + width / 2)
    const middleY = clientY - (top + height / 2)
    setPosition({ x: middleX * pullRatio, y: middleY * pullRatio })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0px)`,
        transition: position.x === 0 && position.y === 0 ? 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)' : 'transform 0.1s ease-out',
      }}
      className={`inline-block will-change-transform ${className}`}
    >
      {children}
    </div>
  )
}

