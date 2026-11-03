import { useState } from 'react'
import { STACK_GROUPS } from '../config/site'
import { motion, AnimatePresence } from 'motion/react'
import { SpotlightCard } from './SpotlightCard'
import { Tilt3DCard } from './Tilt3DCard'
import { Marquee } from './Marquee'
import { Sparkles } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const MARQUEE_TECH = [
  { name: 'Java 17', role: 'Enterprise Systems' },
  { name: 'C++', role: 'Algorithms & Contests' },
  { name: 'Python', role: 'Deep Learning & ML' },
  { name: 'TypeScript', role: 'Full-Stack Apps' },
  { name: 'Spring Boot 3', role: 'High-Throughput REST' },
  { name: 'PostgreSQL', role: 'Relational DB' },
  { name: 'Docker', role: 'Container Orchestration' },
  { name: 'TensorFlow', role: 'Computer Vision' },
  { name: 'WebSockets', role: 'Real-Time STOMP' },
  { name: 'FastAPI', role: 'Low-Latency Serving' },
  { name: 'Redis', role: 'Cache & Rate Limiting' },
  { name: 'Grad-CAM', role: 'Model Explainability' },
]

export function TechnicalArsenal() {
  const [activeGroupId, setActiveGroupId] = useState<string>(STACK_GROUPS[0].id)
  const activeGroup = STACK_GROUPS.find((g) => g.id === activeGroupId) || STACK_GROUPS[0]
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section id="stack" className="py-32 relative overflow-hidden bg-white/5 dark:bg-white/5 light:bg-white/40 border-y border-white/10 dark:border-white/10 light:border-[#08482D]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="gsap-section-header flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 dark:border-white/10 light:border-[#08482D]/10 pb-10 mb-10">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="badge-mint font-mono text-xs sm:text-sm">SECTION 07 // SYSTEM CAPABILITIES</span>
              <span className="font-handwriting text-2xl text-[#10B981] font-bold rotate-[-1deg]">
                languages, backends &amp; AI
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white dark:text-white light:text-[#101410] font-display tracking-tight uppercase">
              TECHNICAL ARSENAL.
            </h2>
          </div>
          <p className="text-sm text-[#8A9684] dark:text-[#8A9684] light:text-[#414447] font-mono mt-4 md:mt-0 max-w-md leading-relaxed">
            Categorized by verified production deployment vs deliberate architectural exploration.
          </p>
        </div>

        {/* Infinite Horizontal Scrolling Technology Marquee with 3D Float */}
        <div className="mb-14 -mx-4 sm:-mx-6 lg:-mx-8">
          <Marquee speed={32} pauseOnHover={true} className="py-4">
            {MARQUEE_TECH.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.08, y: -4, rotateZ: 1 }}
                className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-white border border-white/10 dark:border-white/10 light:border-[#08482D]/15 shadow-lg backdrop-blur-md cursor-default group"
              >
                <div className="w-8 h-8 rounded-xl bg-[#10B981]/20 text-[#34D399] flex items-center justify-center font-bold text-xs group-hover:bg-[#10B981] group-hover:text-[#080B09] transition-colors">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-sm font-black text-white dark:text-white light:text-[#0d120e] font-display block leading-none">
                    {item.name}
                  </span>
                  <span className="text-[11px] font-mono text-[#8A9684] dark:text-[#8A9684] light:text-[#414447] font-semibold mt-0.5 block">
                    {item.role}
                  </span>
                </div>
              </motion.div>
            ))}
          </Marquee>
        </div>

        {/* Group Selector Pills */}
        <div className="flex flex-wrap gap-3 mb-10 font-mono text-sm">
          {STACK_GROUPS.map((group) => {
            const isActive = group.id === activeGroupId
            return (
              <motion.button
                key={group.id}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveGroupId(group.id)}
                className={`px-6 py-3 rounded-full border transition-all cursor-pointer flex items-center gap-3 ${
                  isActive
                    ? 'bg-[#10B981] border-[#10B981] text-[#080B09] shadow-lg shadow-[#10B981]/20 font-bold'
                    : 'bg-white/5 dark:bg-white/5 light:bg-white text-[#8A9684] dark:text-[#8A9684] light:text-[#414447] border-white/10 dark:border-white/10 light:border-[#08482D]/15 hover:text-white hover:border-[#34D399]'
                }`}
              >
                <span className="text-xs opacity-75">{group.index}</span>
                <span className="text-sm font-semibold">{group.label}</span>
                <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${isActive ? 'bg-[#080B09]/20 text-[#080B09]' : 'bg-white/10 text-[#34D399]'}`}>
                  {group.tags.length}
                </span>
              </motion.button>
            )
          })}
        </div>

        {/* Active Group Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeGroup.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
            className="p-8 sm:p-12 rounded-3xl bg-white/5 dark:bg-white/5 light:bg-white border border-white/10 dark:border-white/10 light:border-[#08482D]/15 shadow-xl backdrop-blur-xl"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 border-b border-white/10 dark:border-white/10 light:border-[#08482D]/10 mb-10 gap-4">
              <div>
                <span className="font-mono text-sm text-[#34D399] font-bold uppercase tracking-wider block">
                  CATEGORY // {activeGroup.label}
                </span>
                <p className="text-base text-[#8A9684] dark:text-[#8A9684] light:text-[#414447] mt-1.5 font-sans leading-relaxed">
                  {activeGroup.summary}
                </p>
              </div>
              <div className="flex items-center gap-5 font-mono text-xs sm:text-sm shrink-0">
                <span className="flex items-center gap-2.5 text-white dark:text-white light:text-[#0d120e] font-semibold">
                  <span className="w-3 h-3 rounded-full bg-[#10B981]" />
                  SHIPPED IN PRODUCTION
                </span>
                <span className="flex items-center gap-2.5 text-[#8A9684] font-semibold">
                  <span className="w-3 h-3 rounded-full bg-amber-500" />
                  ACTIVE STUDY
                </span>
              </div>
            </div>

            {/* Interactive 3D Technology Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeGroup.tags.map((skill) => {
                const isShipped = skill.status === 'shipped'
                return (
                  <Tilt3DCard key={skill.name} intensity={12}>
                    <SpotlightCard
                      spotlightColor={isDark ? (isShipped ? 'rgba(52, 211, 153, 0.15)' : 'rgba(245, 158, 11, 0.12)') : 'rgba(8, 72, 45, 0.08)'}
                      className="p-6 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-[#F5F8EF] border border-white/10 dark:border-white/10 light:border-[#08482D]/10 flex flex-col justify-between h-full hover:border-[#34D399] transition-all"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-lg font-black text-white dark:text-white light:text-[#0d120e] font-display">
                            {skill.name}
                          </h4>
                          <span className={`w-2.5 h-2.5 rounded-full ${isShipped ? 'bg-[#10B981]' : 'bg-amber-500'}`} />
                        </div>
                        <p className="text-xs sm:text-sm text-[#8A9684] dark:text-[#8A9684] light:text-[#414447] leading-relaxed font-sans mb-4">
                          {skill.note}
                        </p>
                      </div>

                      {skill.projects.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10 dark:border-white/10 light:border-[#08482D]/10">
                          {skill.projects.map((proj) => (
                            <span
                              key={proj}
                              className="px-2.5 py-0.5 rounded-md bg-white/10 dark:bg-white/10 light:bg-white text-[11px] font-mono text-[#34D399] dark:text-[#34D399] light:text-[#08482D] font-bold"
                            >
                              {proj}
                            </span>
                          ))}
                        </div>
                      )}
                    </SpotlightCard>
                  </Tilt3DCard>
                )
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
