import { useState } from 'react'
import { STACK_GROUPS } from '../config/site'
import { motion, AnimatePresence } from 'motion/react'
import { SpotlightCard } from './SpotlightCard'
import { Marquee } from './Marquee'
import { Sparkles } from 'lucide-react'

// All marquee tech items with their descriptions
const MARQUEE_TECH = [
  { name: 'Java', role: 'Enterprise Systems' },
  { name: 'C++', role: 'Competitive Algorithms' },
  { name: 'Python', role: 'Deep Learning & ML' },
  { name: 'TypeScript', role: 'Full-Stack Apps' },
  { name: 'Spring Boot', role: 'High-Throughput REST' },
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

  return (
    <section id="stack" className="py-28 relative overflow-hidden bg-white/40 border-y border-[#08482D]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Handwritten note */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#08482D]/10 pb-10 mb-10"
        >
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="badge-mint font-mono text-xs sm:text-sm">SECTION 06 // SYSTEM CAPABILITIES</span>
              <span className="font-handwriting text-2xl text-[#08482D] font-bold rotate-[-1deg]">
                languages, backends &amp; AI
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#101410] font-display tracking-tight">
              TECHNICAL ARSENAL.
            </h2>
          </div>
          <p className="text-sm text-[#414447] font-mono mt-4 md:mt-0 max-w-md leading-relaxed">
            Categorized by verified production deployment vs deliberate architectural exploration.
          </p>
        </motion.div>

        {/* Infinite Horizontal Scrolling Technology Marquee */}
        <div className="mb-14 -mx-4 sm:-mx-6 lg:-mx-8">
          <Marquee speed={35} pauseOnHover={true} className="py-4">
            {MARQUEE_TECH.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-[#08482D]/15 shadow-xs hover:border-[#08482D]/40 transition-all cursor-default group"
              >
                <div className="w-8 h-8 rounded-xl bg-[#EBF2DF] text-[#08482D] flex items-center justify-center font-bold text-xs group-hover:bg-[#08482D] group-hover:text-white transition-colors">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-sm font-black text-[#0d120e] font-display block leading-none">
                    {item.name}
                  </span>
                  <span className="text-[11px] font-mono text-[#414447] font-semibold mt-0.5 block">
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
                    ? 'bg-[#08482D] border-[#08482D] text-[#F5F8EF] shadow-md font-bold'
                    : 'bg-white text-[#414447] border-[#08482D]/15 hover:text-[#0d120e] hover:border-[#08482D]/30'
                }`}
              >
                <span className="text-xs opacity-75">{group.index}</span>
                <span className="text-sm font-semibold">{group.label}</span>
                <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${isActive ? 'bg-white/20 text-[#F5F8EF]' : 'bg-[#EBF2DF] text-[#08482D]'}`}>
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
            className="p-8 sm:p-12 rounded-3xl bg-white border border-[#08482D]/15 shadow-sm"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 border-b border-[#08482D]/10 mb-10 gap-4">
              <div>
                <span className="font-mono text-sm text-[#08482D] font-bold uppercase tracking-wider block">
                  CATEGORY // {activeGroup.label}
                </span>
                <p className="text-base text-[#414447] mt-1.5 font-sans leading-relaxed">
                  {activeGroup.summary}
                </p>
              </div>
              <div className="flex items-center gap-5 font-mono text-xs sm:text-sm shrink-0">
                <span className="flex items-center gap-2.5 text-[#0d120e] font-semibold">
                  <span className="w-3 h-3 rounded-full bg-[#08482D]" />
                  SHIPPED IN PRODUCTION
                </span>
                <span className="flex items-center gap-2.5 text-[#414447] font-semibold">
                  <span className="w-3 h-3 rounded-full bg-amber-500" />
                  ACTIVE STUDY
                </span>
              </div>
            </div>

            {/* Cards Grid with Spotlight hover */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeGroup.tags.map((skill) => {
                const isShipped = skill.status === 'shipped'
                return (
                  <SpotlightCard
                    key={skill.name}
                    spotlightColor={isShipped ? 'rgba(8, 72, 45, 0.08)' : 'rgba(245, 158, 11, 0.08)'}
                    className="p-6 rounded-2xl bg-[#F5F8EF] border border-[#08482D]/10 flex flex-col justify-between hover:border-[#08482D]/30 transition-all"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-lg font-black text-[#0d120e] font-display">
                          {skill.name}
                        </h4>
                        <span className={`w-2.5 h-2.5 rounded-full ${isShipped ? 'bg-[#08482D]' : 'bg-amber-500'}`} />
                      </div>
                      <p className="text-xs sm:text-sm text-[#414447] leading-relaxed font-sans mb-4">
                        {skill.note}
                      </p>
                    </div>

                    {skill.projects.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#08482D]/10">
                        {skill.projects.map((proj) => (
                          <span
                            key={proj}
                            className="px-2.5 py-0.5 rounded-md bg-white border border-[#BED4A0] text-[11px] font-mono text-[#08482D] font-bold"
                          >
                            {proj}
                          </span>
                        ))}
                      </div>
                    )}
                  </SpotlightCard>
                )
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
