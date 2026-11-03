import { useState } from 'react'
import { PROJECTS } from '../data/projects'
import { ExternalLink, CheckCircle2, AlertTriangle, Shield } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'

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

  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#08482D]/15 pb-8 mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="badge-mint font-mono text-xs font-bold">SECTION 02 // CASE FILES</span>
              <span className="font-handwriting text-2xl text-[#08482D] font-bold rotate-[-1deg]">
                verified GitHub repositories
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#0d120e] font-display tracking-tight">
              FEATURED SYSTEMS.
            </h2>
          </div>
          <p className="text-sm text-[#414447] font-mono mt-3 md:mt-0 max-w-sm font-semibold">
            Auditable architectures, verified technical decisions, failure models, and real repository evidence.
          </p>
        </motion.div>

        {/* Project Selector Rail in Reelmark Style */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
          {PROJECTS.map((p, i) => {
            const isSelected = p.id === selectedId
            return (
              <motion.button
                key={p.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedId(p.id)}
                className={`p-5 rounded-2xl text-left border-2 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#08482D] text-[#F5F8EF] border-[#08482D] shadow-lg transform -translate-y-1'
                    : 'reelmark-card text-[#414447] hover:text-[#0d120e] hover:border-[#08482D]/30'
                }`}
              >
                <div className="flex justify-between items-center mb-2.5">
                  <span className={`text-xs font-mono font-bold ${isSelected ? 'text-[#DAE7C7]' : 'text-[#414447]'}`}>
                    CASE {p.index}
                  </span>
                  {isSelected && <span className="w-2 h-2 rounded-full bg-[#DAE7C7] animate-ping" />}
                </div>
                <div className={`font-black text-sm font-display tracking-wide truncate ${isSelected ? 'text-white' : 'text-[#0d120e]'}`}>
                  {p.name}
                </div>
                <div className={`text-xs font-mono font-semibold truncate mt-1.5 ${isSelected ? 'text-[#DAE7C7]/90' : 'text-[#414447]'}`}>
                  {p.category}
                </div>
              </motion.button>
            )
          })}
        </div>

        {/* Selected Project Full Dossier Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="p-8 sm:p-12 rounded-3xl bg-white border-2 border-[#08482D]/15 shadow-xl shadow-[#08482D]/6"
          >
            {/* Top Header */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-8 border-b border-[#08482D]/15 gap-5">
              <div>
                <div className="flex items-center gap-2.5 text-xs font-mono text-[#414447] mb-2.5 font-bold">
                  <span className="text-[#08482D]">CASE FILE #{activeProject.index}</span>
                  <span>•</span>
                  <span className="badge-mint py-1 px-3 text-xs font-black">
                    {activeProject.status}
                  </span>
                  <span>•</span>
                  <span>{activeProject.year}</span>
                </div>
                <h3 className="text-3xl sm:text-5xl font-black text-[#0d120e] font-display tracking-tight">
                  {activeProject.name}
                  <span className="ml-3 text-xl sm:text-2xl font-normal text-[#414447] font-sans">
                    // {activeProject.alias}
                  </span>
                </h3>
                <p className="text-base sm:text-lg text-[#414447] mt-3 max-w-3xl leading-relaxed font-sans font-medium">
                  {activeProject.tagline}
                </p>
              </div>

              {/* Links and repo buttons */}
              <div className="flex flex-wrap items-center gap-3.5">
                {activeProject.repo && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                    href={activeProject.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-forest text-sm py-3 px-6 shadow-md"
                  >
                    <GithubIcon className="w-5 h-5 text-[#DAE7C7]" />
                    <span>VIEW REPO</span>
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                )}

                {activeProject.live && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                    href={activeProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-mint text-sm py-3 px-6 shadow-sm"
                  >
                    <span>LIVE DEMO</span>
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                )}
              </div>
            </div>

            {/* Technology Badges */}
            <div className="py-6 border-b border-[#08482D]/15 flex flex-wrap gap-2.5 text-xs font-mono">
              <span className="text-[#414447] py-1.5 mr-2 text-xs uppercase tracking-wider font-extrabold">STACK:</span>
              {activeProject.stack.map((item) => (
                <span
                  key={item}
                  className="px-3.5 py-1.5 rounded-full bg-[#EBF2DF] border border-[#BED4A0] text-[#08482D] font-bold text-xs"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Dossier Body Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-8">
              {/* Left 7 cols: Problem, Architecture, Decisions */}
              <div className="lg:col-span-7 space-y-7">
                
                {/* Problem statement */}
                <div>
                  <h4 className="font-mono text-xs font-black text-[#08482D] uppercase tracking-wider mb-2.5">
                    // THE ENGINEERING CHALLENGE
                  </h4>
                  <p className="text-base text-[#0d120e] leading-relaxed bg-[#F5F8EF] p-6 rounded-2xl border-2 border-[#08482D]/15 border-l-4 border-l-[#08482D] font-sans font-medium">
                    {activeProject.problem}
                  </p>
                </div>

                {/* Architecture Blueprint */}
                <div>
                  <h4 className="font-mono text-xs font-black text-[#08482D] uppercase tracking-wider mb-3">
                    // SYSTEM TOPOLOGY &amp; ARCHITECTURE
                  </h4>
                  <div className="space-y-3 font-mono text-xs">
                    {activeProject.architecture.map((layer, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-[#F5F8EF] border border-[#08482D]/15 flex flex-col sm:flex-row sm:items-start gap-3.5"
                      >
                        <span className="text-[#08482D] font-black w-28 shrink-0 text-sm">
                          [{layer.label}]
                        </span>
                        <span className="text-[#414447] font-semibold text-xs leading-relaxed">{layer.detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Verified Key Architectural Decisions */}
                <div>
                  <h4 className="font-mono text-xs font-black text-[#08482D] uppercase tracking-wider mb-3">
                    // VERIFIED ARCHITECTURAL DECISIONS
                  </h4>
                  <ul className="space-y-3 text-sm text-[#414447] font-sans font-medium">
                    {activeProject.decisions.map((dec, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-[#08482D] font-mono text-base font-bold leading-none mt-0.5">›</span>
                        <span>{dec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right 5 cols: Visual Screenshot + Verified Checklist */}
              <div className="lg:col-span-5 space-y-7">
                
                {/* Screenshot or Visual Card */}
                {activeProject.screenshot ? (
                  <div className="relative rounded-3xl border-2 border-[#08482D]/15 bg-[#F5F8EF] p-3 overflow-hidden shadow-md group">
                    <div className="absolute top-5 left-5 z-10 px-3.5 py-1.5 rounded-full bg-[#08482D] text-[#F5F8EF] font-mono text-xs font-bold shadow-md">
                      LIVE REPOSITORY SCREENSHOT
                    </div>
                    <img
                      src={activeProject.screenshot}
                      alt={activeProject.name}
                      className="w-full h-auto rounded-2xl object-cover border border-[#08482D]/10 opacity-95 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                ) : (
                  <div className="p-10 rounded-3xl border-2 border-dashed border-[#08482D]/25 bg-[#F5F8EF] flex flex-col items-center justify-center text-center">
                    <Shield className="w-10 h-10 text-[#08482D]/60 mb-3" />
                    <span className="font-mono text-sm text-[#08482D] uppercase font-black">
                      SEALED ARCHITECTURE / SOURCE PRIVATE
                    </span>
                    <p className="text-xs text-[#414447] mt-1.5 max-w-xs font-sans font-semibold">
                      Protected internal research repository or private codebase.
                    </p>
                  </div>
                )}

                {/* Verified Capabilities Checklist */}
                <div className="p-7 rounded-3xl reelmark-card-mint shadow-xs border-2 border-[#BED4A0]">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle2 className="w-5 h-5 text-[#08482D]" />
                    <span className="font-mono text-xs font-black text-[#08482D] uppercase tracking-wider">
                      VERIFIED ARTIFACT DELIVERABLES
                    </span>
                  </div>
                  <div className="space-y-3 font-sans">
                    {activeProject.verified.map((v, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs text-[#0d120e] font-semibold">
                        <span className="text-[#08482D] font-mono text-sm leading-none">•</span>
                        <span>{v}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Caveat or Engineering Note */}
                {activeProject.caveat && (
                  <div className="p-5 rounded-2xl bg-amber-50 border-2 border-amber-300 text-xs text-amber-950 flex items-start gap-3 font-sans font-semibold">
                    <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                    <span>{activeProject.caveat}</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
