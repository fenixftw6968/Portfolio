import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'motion/react'
import { TIMELINE_EXPERIENCES } from '../data/experience'
import { GraduationCap, Trophy, Code2, Calendar, MapPin, ArrowRight } from 'lucide-react'
import { SpotlightCard } from './SpotlightCard'

export function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 75%', 'end 30%'],
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <section id="experience" className="py-28 relative overflow-hidden bg-white/40 border-b border-[#08482D]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={containerRef}>
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#08482D]/15 pb-8 mb-20"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="badge-mint font-mono text-xs font-bold">SECTION 03 // TRAJECTORY</span>
              <span className="font-handwriting text-2xl text-[#08482D] font-bold rotate-[-1deg]">
                education &amp; milestones
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#0d120e] font-display tracking-tight">
              EXPERIENCE &amp; TIMELINE.
            </h2>
          </div>
          <p className="text-sm text-[#414447] font-mono mt-3 md:mt-0 max-w-sm font-semibold">
            Institutional foundation, competitive leadership, and verified system delivery.
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Static Background Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-[#BED4A0]/40 -translate-x-1/2" />

          {/* Animated Scroll Line */}
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-[#08482D] -translate-x-1/2 z-10 shadow-[0_0_12px_rgba(8,72,45,0.4)]"
          />

          <div className="space-y-12 md:space-y-16">
            {TIMELINE_EXPERIENCES.map((item, index) => {
              const isEven = index % 2 === 0
              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#F5F8EF] border-2 border-[#08482D] z-20 flex items-center justify-center shadow-md">
                    <div className="w-3 h-3 rounded-full bg-[#08482D] animate-ping opacity-60" />
                    <div className="absolute w-2.5 h-2.5 rounded-full bg-[#08482D]" />
                  </div>

                  {/* Content Container */}
                  <div className="ml-12 md:ml-0 md:w-1/2 md:px-10 w-full">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 30 : -30, y: 20 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.6, delay: 0.15 }}
                      whileHover={{ y: -4 }}
                    >
                      <SpotlightCard
                        spotlightColor="rgba(8, 72, 45, 0.08)"
                        className="p-7 sm:p-8 rounded-3xl reelmark-card border-2 border-[#08482D]/15 shadow-md hover:shadow-xl transition-shadow bg-white"
                      >
                        {/* Header with Type Badge and Date */}
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                          <span className="badge-mint py-1 px-3 text-xs font-mono font-bold flex items-center gap-1.5">
                            {item.type === 'education' && <GraduationCap className="w-3.5 h-3.5 text-[#08482D]" />}
                            {item.type === 'leadership' && <Trophy className="w-3.5 h-3.5 text-[#08482D]" />}
                            {item.type === 'achievement' && <Code2 className="w-3.5 h-3.5 text-[#08482D]" />}
                            <span className="uppercase">{item.type}</span>
                          </span>

                          <span className="flex items-center gap-1.5 text-xs font-mono font-semibold text-[#414447]">
                            <Calendar className="w-3.5 h-3.5 text-[#08482D]" />
                            {item.period}
                          </span>
                        </div>

                        {/* Title and Org */}
                        <h3 className="text-xl sm:text-2xl font-black text-[#0d120e] font-display mb-1.5 tracking-tight">
                          {item.role}
                        </h3>

                        <div className="flex items-center gap-2 text-sm text-[#08482D] font-bold font-mono mb-4">
                          <span>{item.organization}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1 text-[#414447] font-medium">
                            <MapPin className="w-3 h-3 text-[#08482D]" />
                            {item.location}
                          </span>
                        </div>

                        <p className="text-sm sm:text-base text-[#414447] mb-5 leading-relaxed font-sans font-medium">
                          {item.description}
                        </p>

                        {/* Bullets */}
                        <ul className="space-y-2 mb-6 border-t border-[#08482D]/10 pt-4">
                          {item.bullets.map((b, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0d120e]">
                              <ArrowRight className="w-3.5 h-3.5 text-[#08482D] shrink-0 mt-1" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Tech Tags */}
                        <div className="flex flex-wrap gap-2 pt-2 border-t border-[#08482D]/10">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 rounded-full bg-[#EBF2DF] text-[#08482D] text-xs font-mono font-bold"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </SpotlightCard>
                    </motion.div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

