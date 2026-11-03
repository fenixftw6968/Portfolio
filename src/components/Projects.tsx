import { useState } from 'react'
import { PROJECTS } from '../data/projects'
import { ExternalLink, CheckCircle2, AlertTriangle, Shield, Layers } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { SpotlightCard } from './SpotlightCard'
import { Tilt3DCard } from './Tilt3DCard'
import { Magnetic } from './Magnetic'
import { useTheme } from '../context/ThemeContext'

function GithubIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

export function Projects() {
  const [selectedId, setSelectedId] = useState<string>(PROJECTS[0].id)
  const activeProject = PROJECTS.find((p) => p.id === selectedId) || PROJECTS[0]
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="gsap-section-header flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 dark:border-white/10 light:border-[#08482D]/15 pb-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="badge-mint font-mono text-xs font-bold">SECTION 04 // CASE FILES</span>
              <span className="font-handwriting text-2xl text-[#10B981] font-bold rotate-[-1deg]">
                verified GitHub repositories
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white dark:text-white light:text-[#0d120e] font-display tracking-tight uppercase">
              FEATURED SYSTEMS.
            </h2>
          </div>
          <p className="text-sm text-[#8A9684] dark:text-[#8A9684] light:text-[#414447] font-mono mt-3 md:mt-0 max-w-sm font-semibold">
            Auditable architectures, verified technical decisions, failure models, and real repository evidence.
          </p>
        </div>

        {/* Project Selector Rail with 3D Tilt Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {PROJECTS.map((p) => {
            const isSelected = p.id === selectedId
            return (
              <Tilt3DCard key={p.id} intensity={10}>
                <button
                  onClick={() => setSelectedId(p.id)}
                  className={`w-full p-5 rounded-2xl text-left border transition-all duration-300 cursor-pointer flex flex-col justify-between h-full min-h-[140px] ${
                    isSelected
                      ? 'bg-[#10B981] text-[#080B09] border-[#10B981] shadow-xl shadow-[#10B981]/25 transform -translate-y-1'
                      : 'bg-white/5 dark:bg-white/5 light:bg-white text-[#8A9684] dark:text-[#8A9684] light:text-[#414447] border-white/10 dark:border-white/10 light:border-[#08482D]/15 hover:border-[#34D399]'
                  }`}
                >
                  <div className="flex justify-between items-center mb-2.5 w-full">
                    <span className={`text-xs font-mono font-bold ${isSelected ? 'text-[#080B09]' : 'text-[#34D399]'}`}>
                      CASE {p.index}
                    </span>
                    {isSelected && <span className="w-2 h-2 rounded-full bg-[#080B09] animate-ping" />}
                  </div>
                  <div>
                    <div className={`font-black text-sm font-display tracking-wide truncate ${isSelected ? 'text-[#080B09]' : 'text-white dark:text-white light:text-[#0d120e]'}`}>
                      {p.name}
                    </div>
                    <div className={`text-xs font-mono font-semibold truncate mt-1.5 ${isSelected ? 'text-[#080B09]/80' : 'text-[#8A9684]'}`}>
                      {p.category}
                    </div>
                  </div>
                </button>
              </Tilt3DCard>
            )
          })}
        </div>

        {/* Selected Project Full Dossier Card with Active Theory Glass & Spotlight */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -22 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <SpotlightCard
              spotlightColor={isDark ? 'rgba(52, 211, 153, 0.12)' : 'rgba(8, 72, 45, 0.07)'}
              className="p-8 sm:p-14 rounded-3xl bg-white/5 dark:bg-white/5 light:bg-white border border-white/10 dark:border-white/10 light:border-[#08482D]/15 shadow-2xl backdrop-blur-2xl"
            >
              {/* Top Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-8 border-b border-white/10 dark:border-white/10 light:border-[#08482D]/15 gap-5">
                <div>
                  <div className="flex items-center gap-2.5 text-xs font-mono text-[#8A9684] mb-2.5 font-bold">
                    <span className="text-[#34D399]">CASE FILE #{activeProject.index}</span>
                    <span>•</span>
                    <span className="badge-mint py-1 px-3 text-xs font-black">
                      {activeProject.status}
                    </span>
                    <span>•</span>
                    <span>{activeProject.category}</span>
                  </div>
                  <h3 className="text-3xl sm:text-5xl md:text-6xl font-black text-white dark:text-white light:text-[#0d120e] font-display tracking-tight">
                    {activeProject.name}
                  </h3>
                  <p className="text-base sm:text-lg text-[#34D399] dark:text-[#34D399] light:text-[#08482D] font-mono font-bold mt-2">
                    {activeProject.tagline}
                  </p>
                </div>

                {/* Actions with Magnetic button effects */}
                <div className="flex flex-wrap items-center gap-3">
                  {activeProject.repo && (
                    <Magnetic pullRatio={0.25}>
                      <a
                        href={activeProject.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-forest text-sm py-3 px-5 inline-flex items-center gap-2 shadow-lg"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>SOURCE CODE</span>
                      </a>
                    </Magnetic>
                  )}
                  {activeProject.live && (
                    <Magnetic pullRatio={0.25}>
                      <a
                        href={activeProject.live}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-mint text-sm py-3 px-5 inline-flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>LIVE DEPLOYMENT</span>
                      </a>
                    </Magnetic>
                  )}
                </div>
              </div>

              {/* Problem & Architectural Blueprint */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 py-10 border-b border-white/10 dark:border-white/10 light:border-[#08482D]/15">
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <h4 className="text-xs font-mono font-bold text-[#34D399] uppercase tracking-wider mb-2">
                      PROBLEM STATEMENT
                    </h4>
                    <p className="text-base sm:text-lg text-[#E0E7DC] dark:text-[#E0E7DC] light:text-[#0d120e] leading-relaxed font-sans font-medium">
                      {activeProject.problem}
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-[#F5F8EF] border border-white/10 dark:border-white/10 light:border-[#08482D]/15">
                    <h4 className="text-xs font-mono font-bold text-[#34D399] uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Layers className="w-4 h-4" />
                      ARCHITECTURAL BLUEPRINT
                    </h4>
                    <div className="space-y-3 font-sans text-sm sm:text-base">
                      {activeProject.architecture.map((layer, idx) => (
                        <div key={idx} className="flex flex-col sm:flex-row sm:items-start gap-2">
                          <span className="font-mono text-xs font-bold text-[#080B09] bg-[#34D399] px-2.5 py-0.5 rounded-full shrink-0 w-fit">
                            {layer.label}
                          </span>
                          <span className="text-[#8A9684] dark:text-[#8A9684] light:text-[#414447] text-sm leading-relaxed">{layer.detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Technical Stack Tags & Highlights */}
                <div className="lg:col-span-5 space-y-6">
                  <div>
                    <h4 className="text-xs font-mono font-bold text-[#34D399] uppercase tracking-wider mb-3">
                      TECHNOLOGY IMPLEMENTATION
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3.5 py-1.5 rounded-full bg-white/10 dark:bg-white/10 light:bg-[#EBF2DF] text-[#34D399] dark:text-[#34D399] light:text-[#08482D] border border-white/10 dark:border-white/10 light:border-[#BED4A0] text-xs font-mono font-bold shadow-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {activeProject.verified && (
                    <div className="space-y-2.5 pt-4">
                      <h4 className="text-xs font-mono font-bold text-[#8A9684] uppercase tracking-wider mb-2">
                        KEY VERIFIED HIGHLIGHTS
                      </h4>
                      {activeProject.verified.slice(0, 6).map((h, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#E0E7DC] dark:text-[#E0E7DC] light:text-[#0d120e]">
                          <CheckCircle2 className="w-4 h-4 text-[#34D399] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Architectural Decisions & Challenges */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
                {activeProject.decisions && activeProject.decisions.length > 0 && (
                  <div className="p-6 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-white border border-white/10 dark:border-white/10 light:border-[#08482D]/15">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#34D399] mb-3 uppercase">
                      <Shield className="w-4 h-4 text-[#34D399]" />
                      ARCHITECTURAL DECISIONS
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#8A9684] dark:text-[#8A9684] light:text-[#414447] leading-relaxed font-sans">
                      {activeProject.decisions.slice(0, 3).map((d, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#34D399] font-mono font-bold">•</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeProject.challenges && activeProject.challenges.length > 0 && (
                  <div className="p-6 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-white border border-white/10 dark:border-white/10 light:border-[#08482D]/15">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-500 mb-3 uppercase">
                      <AlertTriangle className="w-4 h-4 text-amber-500" />
                      FAILURE MODES &amp; MITIGATION
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#8A9684] dark:text-[#8A9684] light:text-[#414447] leading-relaxed font-sans">
                      {activeProject.challenges.slice(0, 3).map((c, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-amber-500 font-mono font-bold">•</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </SpotlightCard>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
