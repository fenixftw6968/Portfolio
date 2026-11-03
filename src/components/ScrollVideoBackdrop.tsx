import { useEffect, useRef } from 'react'

export function ScrollVideoBackdrop() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const isSeeking = useRef(false)
  const curTime = useRef(0)
  const targetTime = useRef(0)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const isSmallOrSaveData =
      window.innerWidth <= 900 ||
      Boolean((navigator as unknown as { connection?: { saveData?: boolean } }).connection?.saveData)

    const videoSrc = isSmallOrSaveData
      ? 'https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/e8eb434f-d097-4b1b-b9e6-c8b46fa43040.mp4'
      : 'https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/e02bb27f-80d8-445f-a03e-1b609dac4261.mp4'

    if (video.src !== videoSrc) {
      video.src = videoSrc
      video.load()
    }

    video.pause()

    const DURATION = 5.04
    const MAX_SEEK_TIME = DURATION - 1 / 48

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollHeight > 0 ? Math.min(1, Math.max(0, window.scrollY / (scrollHeight * 0.85))) : 0
      targetTime.current = progress * MAX_SEEK_TIME
    }

    const handleSeeked = () => {
      isSeeking.current = false
      if (video && Math.abs(video.currentTime - curTime.current) > 1 / 60) {
        isSeeking.current = true
        video.currentTime = curTime.current
      }
    }

    video.addEventListener('seeked', handleSeeked)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    let animId: number
    const tick = () => {
      if (video) {
        curTime.current += (targetTime.current - curTime.current) * 0.22
        if (Math.abs(video.currentTime - curTime.current) > 1 / 60 && !isSeeking.current) {
          isSeeking.current = true
          video.currentTime = curTime.current
        }
      }
      animId = requestAnimationFrame(tick)
    }
    animId = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('scroll', handleScroll)
      video.removeEventListener('seeked', handleSeeked)
    }
  }, [])

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden opacity-25 select-none">
      <video
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        poster="https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/5e018553-cb8a-420a-819f-fcdfa08e5df0.jpg"
        className="w-full h-full object-cover filter contrast-125 brightness-75"
      />
      {/* Modern Deep Slate/Navy/Indigo Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/95 via-[#030712]/80 to-[#030712]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030712_85%)]" />
    </div>
  )
}
