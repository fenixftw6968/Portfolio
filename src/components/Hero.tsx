import { Hero3DScene } from './Hero3DScene'
import { SITE } from '../config/site'
import { ArrowDown, Mail, Terminal, Sparkles, Compass } from 'lucide-react'
import { motion } from 'motion/react'
import { Magnetic } from './Magnetic'
import { SpotlightCard } from './SpotlightCard'
import { useTheme } from '../context/ThemeContext'

interface HeroProps {
  scrollOffset: number
  onExploreClick: () => void
  onOpenTerminal: () => void
}

export function Hero({ scrollOffset, onExploreClick, onOpenTerminal }: HeroProps) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  // Stagger variants for name and role
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.09,
        delayChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring' as const,
        damping: 18,
        stiffness: 90,
      },
    },
  }

  const nameLetters = 'KARTIK BHANGALE'.split('')

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-14 overflow-hidden"
    >
      {/* 1. Full-screen Cinematic 3D Scene with floating metallic sculpture & thousands of stardust particles */}
      <Hero3DScene scrollOffset={scrollOffset} />

      {/* Atmospheric vignette overlays */}
      <div className="absolute inset-0 pointer-events-none bg-radial-[circle_at_center,transparent_30%,rgba(8,11,9,0.7)_100%] dark:block hidden z-[1]" />
      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none bg-gradient-to-t from-[#080B09] dark:from-[#080B09] light:from-[#F5F8EF] to-transparent z-[1]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative flex-1 flex flex-col justify-center">
        
        {/* Top Status & Telemetry Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-2"
        >
          <div className="flex items-center gap-3">
            <div className="badge-mint shadow-lg backdrop-blur-md text-xs font-mono font-bold tracking-wider cursor-default">
              <span className="w-2 h-2 rounded-full bg-[#34D399] animate-ping" />
              <span>{SITE.availability}</span>
              <span className="opacity-40">•</span>
              <span>{SITE.institutionShort} 2028</span>
            </div>

            <div className="hidden sm:flex items-center gap-2 font-handwriting text-xl text-[#34D399] dark:text-[#34D399] light:text-[#08482D] font-bold">
              <span>active creative // real telemetry</span>
            </div>
          </div>

          <div className="text-xs text-[#8A9684] dark:text-[#8A9684] light:text-[#414447] font-mono font-semibold hidden md:block">
            {SITE.location} • <span className="text-[#34D399] dark:text-[#34D399] light:text-[#08482D] font-bold">B.TECH AI &amp; DS</span>
          </div>
        </motion.div>

        {/* Hero Central Narrative Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-6">
          
          <div className="lg:col-span-8 flex flex-col justify-center space-y-6">
            
            {/* Hi, I'm Introduction */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-2"
            >
              <motion.span
                variants={itemVariants}
                className="text-sm font-mono font-extrabold tracking-[0.25em] text-[#34D399] dark:text-[#34D399] light:text-[#08482D] uppercase block"
              >
                HI, I&apos;M
              </motion.span>

              {/* Large Expressive Name Reveal */}
              <h1 className="text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-black tracking-tight text-white dark:text-white light:text-[#0d120e] font-display uppercase leading-[0.88] drop-shadow-2xl select-none">
                {nameLetters.map((char, index) => (
                  <motion.span
                    key={index}
                    variants={itemVariants}
                    className={`inline-block transition-colors duration-200 ${
                      char === ' ' ? 'mr-4 sm:mr-6' : 'hover:text-[#34D399]'
                    }`}
                  >
                    {char}
                  </motion.span>
                ))}
              </h1>

              {/* Developer Title */}
              <motion.div variants={itemVariants} className="pt-2">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold font-mono tracking-tight text-[#E0E7DC] dark:text-[#E0E7DC] light:text-[#08482D] block">
                  Creative Developer / AI &amp; Backend Engineer
                </span>
              </motion.div>
            </motion.div>

            {/* Core Mission Statement */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="p-6 sm:p-8 rounded-3xl reelmark-card-mint backdrop-blur-xl relative group max-w-2xl"
            >
              <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-[#10B981] text-[#080B09] font-mono text-xs font-black shadow-lg uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>ACTIVE THEORY AESTHETIC</span>
              </div>

              <p className="text-lg sm:text-2xl text-white dark:text-white light:text-[#0d120e] font-display font-medium leading-relaxed">
                I build intelligent systems and interactive digital experiences.
              </p>
              <p className="mt-3 text-sm sm:text-base text-[#8A9684] dark:text-[#8A9684] light:text-[#414447] font-sans leading-relaxed">
                Merging high-throughput backend architecture, applied computer vision, and real-time 3D web graphics. Focused on zero-trust correctness, resilient distributed logic, and fluid motion design.
              </p>
            </motion.div>

            {/* Navigation Actions (Explore Work & Contact Me) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <Magnetic pullRatio={0.3}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onExploreClick}
                  className="btn-forest cursor-pointer shadow-xl text-base px-7 py-3.5"
                >
                  <Compass className="w-5 h-5" />
                  <span>EXPLORE WORK</span>
                  <ArrowDown className="w-4 h-4 ml-1" />
                </motion.button>
              </Magnetic>

              <Magnetic pullRatio={0.3}>
                <a
                  href="#contact"
                  className="btn-mint cursor-pointer shadow-md text-base px-7 py-3.5 inline-flex items-center gap-2"
                >
                  <Mail className="w-5 h-5 text-[#34D399]" />
                  <span>CONTACT ME</span>
                </a>
              </Magnetic>

              <Magnetic pullRatio={0.3}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onOpenTerminal}
                  className="p-3.5 rounded-full bg-white/5 dark:bg-white/5 light:bg-[#EBF2DF] border border-white/10 dark:border-white/10 light:border-[#BED4A0] text-[#34D399] hover:bg-white/10 transition-all cursor-pointer shadow-md"
                  title="Interactive Terminal"
                >
                  <Terminal className="w-5 h-5" />
                </motion.button>
              </Magnetic>
            </motion.div>
          </div>

          {/* Right Column: Active Theory Telemetry Floating Dossier */}
          <div className="lg:col-span-4 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.35 }}
              className="space-y-4"
            >
              <SpotlightCard
                spotlightColor={isDark ? 'rgba(52, 211, 153, 0.15)' : 'rgba(8, 72, 45, 0.08)'}
                className="p-6 rounded-3xl bg-white/5 dark:bg-white/5 light:bg-white border border-white/10 dark:border-white/10 light:border-[#08482D]/15 backdrop-blur-xl"
              >
                <div className="flex items-center justify-between mb-3 text-xs font-mono text-[#8A9684]">
                  <span>SCULPTURE TELEMETRY</span>
                  <span className="text-[#34D399] font-bold">WEBGL ACTIVE</span>
                </div>
                <div className="space-y-3 font-mono text-xs">
                  <div className="flex justify-between items-center pb-2 border-b border-white/5">
                    <span className="text-[#8A9684]">CORE SHADER</span>
                    <span className="text-white dark:text-white light:text-[#0d120e] font-bold">MESH DISTORT 4.2</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-white/5">
                    <span className="text-[#8A9684]">PARTICLE DENSITY</span>
                    <span className="text-[#34D399] font-bold">3,800 NODES</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#8A9684]">CAMERA PARALLAX</span>
                    <span className="text-white dark:text-white light:text-[#0d120e] font-bold">CURSOR LERP 0.05</span>
                  </div>
                </div>
              </SpotlightCard>

              <SpotlightCard
                spotlightColor={isDark ? 'rgba(52, 211, 153, 0.15)' : 'rgba(8, 72, 45, 0.08)'}
                className="p-6 rounded-3xl bg-white/5 dark:bg-white/5 light:bg-white border border-white/10 dark:border-white/10 light:border-[#08482D]/15 backdrop-blur-xl"
              >
                <span className="text-xs font-mono text-[#8A9684] block mb-1">COMPETITIVE STANDING</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black font-display text-white dark:text-white light:text-[#0d120e]">1784</span>
                  <span className="text-xs font-mono text-[#34D399] font-bold">TOP 9.13%</span>
                </div>
                <span className="text-xs text-[#8A9684] mt-1 block">930+ verified algorithmic solutions</span>
              </SpotlightCard>
            </motion.div>
          </div>
        </div>

        {/* Bottom Minimal Studio Bar */}
        <div className="pt-8 border-t border-white/10 dark:border-white/10 light:border-[#08482D]/15 flex flex-wrap items-center justify-between text-xs font-mono text-[#8A9684] gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#10B981]" />
            <span>INTERACTIVE 3D ORBIT ACTIVE</span>
          </div>
          <div>
            <span>SCROLL TO DIVE // 01 ABOUT FOUNDATION</span>
          </div>
        </div>
      </div>
    </section>
  )
}
