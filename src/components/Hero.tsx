import { Hero3DScene } from './Hero3DScene'
import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'

interface HeroProps {
  onExploreClick: () => void
}

export function Hero({ onExploreClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-6xl mx-auto w-full pt-20"
    >
      {/* Subtle Monochrome 3D Backdrop */}
      <Hero3DScene />

      <div className="relative z-10 max-w-3xl">
        {/* Bold Minimal Name */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-1 mb-8"
        >
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tight text-white uppercase leading-[0.88]">
            KARTIK
            <br />
            BHANGALE
          </h1>
        </motion.div>

        {/* Roles & Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4 mb-10"
        >
          <div className="text-lg sm:text-xl font-medium tracking-wide text-[#A0A0A0]">
            Competitive Programmer
            <span className="mx-2 text-[#666666]">•</span>
            AI &amp; Backend Engineer
          </div>

          <p className="text-xl sm:text-2xl text-white font-normal leading-relaxed max-w-xl">
            I build intelligent systems and meaningful digital experiences.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-4"
        >
          <button
            onClick={onExploreClick}
            className="btn-primary cursor-pointer"
          >
            <span>Explore Projects</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <a
            href="#contact"
            className="btn-secondary"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  )
}
