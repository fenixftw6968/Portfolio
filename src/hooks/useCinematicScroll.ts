import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useCinematicScroll() {
  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    // 1. Initialize Lenis smooth scroll engine
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 1.8,
    })

    // 2. Synchronize Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    // 3. ScrollTrigger animations across sections
    const ctx = gsap.context(() => {
      // Word by word reveal for about section headline
      gsap.utils.toArray<HTMLElement>('.gsap-reveal-word').forEach((word, index) => {
        gsap.fromTo(
          word,
          { opacity: 0, y: 35, filter: 'blur(6px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.7,
            delay: index * 0.04,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: word.parentElement,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      // Section title entrance
      gsap.utils.toArray<HTMLElement>('.gsap-section-header').forEach((header) => {
        gsap.fromTo(
          header,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: header,
              start: 'top 88%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })

      // Counter animation for achievements
      gsap.utils.toArray<HTMLElement>('.gsap-counter').forEach((counter) => {
        const targetValue = parseFloat(counter.getAttribute('data-target') || '0')
        const suffix = counter.getAttribute('data-suffix') || ''
        const prefix = counter.getAttribute('data-prefix') || ''

        gsap.fromTo(
          counter,
          { innerText: 0 },
          {
            innerText: targetValue,
            duration: 2,
            ease: 'power2.out',
            snap: { innerText: targetValue % 1 === 0 ? 1 : 0.1 },
            scrollTrigger: {
              trigger: counter,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
            onUpdate: function () {
              const val = Math.round(Number(counter.innerText))
              counter.innerText = `${prefix}${val}${suffix}`
            },
          }
        )
      })
    })

    return () => {
      ctx.revert()
      lenis.destroy()
    }
  }, [])
}
