import { useState } from 'react'

interface SmoothImageProps {
  src: string
  alt: string
  className?: string
  aspectRatio?: string
}

export function SmoothImage({ src, alt, className = '', aspectRatio = 'aspect-video' }: SmoothImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className={`relative overflow-hidden rounded-2xl bg-white/5 ${aspectRatio} ${className}`}>
      {/* Blurred Loading Placeholder */}
      <div
        className={`absolute inset-0 bg-gradient-to-tr from-[#10B981]/20 via-white/5 to-[#34D399]/10 transition-opacity duration-700 ${
          isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100 animate-pulse'
        }`}
      />

      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-700 ease-out ${
          isLoaded ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-105 blur-md'
        } hover:scale-105 transition-transform duration-500`}
      />
    </div>
  )
}
