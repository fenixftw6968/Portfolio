import { Award, Trophy, Database, Network } from 'lucide-react'
import { motion } from 'motion/react'
import { SpotlightCard } from './SpotlightCard'
import { Tilt3DCard } from './Tilt3DCard'
import { useTheme } from '../context/ThemeContext'

export function Achievements() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const achievementsList = [
    {
      title: 'Top 9.13% Global LeetCode Rating',
      detail: 'Ranked in the top 9.13% worldwide with a peak contest rating of 1879 and 705+ solved algorithms.',
      icon: Trophy,
      badge: 'COMPETITIVE PROGRAMMING',
    },
    {
      title: 'PICT Coders League Core Problem Solver',
      detail: 'Core contributor and peer contest coach across dynamic programming, graph invariants, and trees.',
      icon: Award,
      badge: 'ALGORITHMIC ECOSYSTEM',
    },
    {
      title: 'DenseNet121 Medical Classifier Prototype',
      detail: 'Trained CNN architecture delivering 98.4% validation accuracy on clinical radiograph scans with Grad-CAM.',
      icon: Database,
      badge: 'AI & VISION RESEARCH',
    },
    {
      title: 'Sub-50ms Real-Time Algorithmic Engine',
      detail: 'Engineered CF Arena & AlgoArena live duel servers with server-authoritative code evaluation and STOMP sockets.',
      icon: Network,
      badge: 'SYSTEMS ARCHITECTURE',
    },
  ]

  return (
    <section id="achievements" className="py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 dark:border-white/10 light:border-[#08482D]/15 pb-8 mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="badge-mint font-mono text-xs font-bold">SECTION 06 // HONORS</span>
              <span className="font-handwriting text-2xl text-[#10B981] font-bold rotate-[-1deg]">
                verified milestones
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white dark:text-white light:text-[#0d120e] font-display tracking-tight">
              HONORS &amp; ACHIEVEMENTS.
            </h2>
          </div>
          <p className="text-sm text-[#8A9684] dark:text-[#8A9684] light:text-[#414447] font-mono mt-3 md:mt-0 max-w-sm font-semibold">
            Real competitive ratings, contest standings, and verified research deliverables.
          </p>
        </motion.div>

        {/* Grid of Interactive Honor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievementsList.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Tilt3DCard intensity={8}>
                <SpotlightCard
                  spotlightColor={isDark ? 'rgba(52, 211, 153, 0.12)' : 'rgba(8, 72, 45, 0.08)'}
                  className="p-8 rounded-3xl bg-white/5 dark:bg-white/5 light:bg-white border border-white/10 dark:border-white/10 light:border-[#08482D]/15 h-full flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <span className="badge-mint py-1 px-3 text-[11px] font-mono font-bold">
                        {item.badge}
                      </span>
                      <div className="w-10 h-10 rounded-2xl bg-[#10B981]/20 text-[#34D399] flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-white dark:text-white light:text-[#0d120e] font-display mb-2.5">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#8A9684] dark:text-[#8A9684] light:text-[#414447] leading-relaxed font-sans">
                      {item.detail}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-white/10 dark:border-white/10 light:border-[#08482D]/10 flex items-center justify-between text-xs font-mono text-[#34D399] font-bold">
                    <span>TELEMETRY VERIFIED</span>
                    <span>0{idx + 1} // ARCHIVE</span>
                  </div>
                </SpotlightCard>
              </Tilt3DCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
