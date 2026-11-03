import React from 'react'

interface MarqueeProps {
  children: React.ReactNode
  direction?: 'left' | 'right'
  speed?: number // seconds per cycle
  pauseOnHover?: boolean
  className?: string
}

export function Marquee({
  children,
  direction = 'left',
  speed = 30,
  pauseOnHover = true,
  className = '',
}: MarqueeProps) {
  return (
    <div
      className={`group relative flex overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)] ${className}`}
    >
      <div
        className={`flex shrink-0 items-center justify-around gap-6 ${
          direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'
        } ${pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className={`flex shrink-0 items-center justify-around gap-6 ${
          direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'
        } ${pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
      </div>
    </div>
  )
}

