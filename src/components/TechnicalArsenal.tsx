import { useState } from 'react'
import { STACK_GROUPS } from '../config/site'

export function TechnicalArsenal() {
  const [activeGroupId, setActiveGroupId] = useState<string>(STACK_GROUPS[0].id)
  const activeGroup = STACK_GROUPS.find((g) => g.id === activeGroupId) || STACK_GROUPS[0]

  return (
    <section id="stack" className="py-28 relative overflow-hidden bg-white/40 border-y border-[#08482D]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Handwritten note */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#08482D]/10 pb-10 mb-14">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="badge-mint font-mono text-xs sm:text-sm">SECTION 05 // SYSTEM CAPABILITIES</span>
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
        </div>

        {/* Group Selector Pills */}
        <div className="flex flex-wrap gap-3 mb-10 font-mono text-sm">
          {STACK_GROUPS.map((group) => {
            const isActive = group.id === activeGroupId
            return (
              <button
                key={group.id}
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
              </button>
            )
          })}
        </div>

        {/* Active Group Details */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#08482D]/15 shadow-sm">
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

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeGroup.tags.map((skill) => {
              const isShipped = skill.status === 'shipped'
              return (
                <div
                  key={skill.name}
                  className="p-6 rounded-2xl bg-[#F5F8EF]/80 border border-[#08482D]/10 hover:border-[#08482D]/35 transition-all flex flex-col justify-between group hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <h4 className="font-display text-lg font-bold text-[#0d120e] group-hover:text-[#08482D] transition-colors">
                        {skill.name}
                      </h4>
                      <span
                        className={`text-xs font-mono px-3 py-1 rounded-full uppercase tracking-wider font-bold ${
                          isShipped
                            ? 'bg-[#DAE7C7] text-[#08482D] border border-[#C8DBAE]'
                            : 'bg-amber-100 text-amber-800 border border-amber-300'
                        }`}
                      >
                        {skill.status}
                      </span>
                    </div>

                    <p className="text-sm text-[#414447] leading-relaxed font-sans">
                      {skill.note}
                    </p>
                  </div>

                  {skill.projects && skill.projects.length > 0 && (
                    <div className="mt-5 pt-4 border-t border-[#08482D]/10 flex flex-wrap gap-2">
                      {skill.projects.map((proj) => (
                        <span
                          key={proj}
                          className="font-mono text-xs px-2.5 py-1 rounded-full bg-white text-[#08482D] border border-[#08482D]/15 font-semibold"
                        >
                          #{proj}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Global Key Architecture Competencies in Studio Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono">
          <div className="p-8 rounded-3xl reelmark-card">
            <span className="text-[#08482D] block font-bold mb-2.5 text-base sm:text-lg font-display tracking-wide">CONCURRENCY &amp; LOCKS</span>
            <p className="text-[#414447] text-sm sm:text-base font-sans leading-relaxed">
              Pessimistic locking, `FOR UPDATE SKIP LOCKED` query patterns, and race hazard mitigations in live match lobbies.
            </p>
          </div>
          <div className="p-8 rounded-3xl reelmark-card">
            <span className="text-[#08482D] block font-bold mb-2.5 text-base sm:text-lg font-display tracking-wide">AUTH &amp; INTEGRITY</span>
            <p className="text-[#414447] text-sm sm:text-base font-sans leading-relaxed">
              OIDC ID token cryptographic verification, JWT stateless identity, duplicate-link preventions, and tamper-resistant matches.
            </p>
          </div>
          <div className="p-8 rounded-3xl reelmark-card">
            <span className="text-[#08482D] block font-bold mb-2.5 text-base sm:text-lg font-display tracking-wide">MODEL EXPLAINABILITY</span>
            <p className="text-[#414447] text-sm sm:text-base font-sans leading-relaxed">
              DenseNet121 transfer learning coupled with Grad-CAM visual gradients for auditable clinical decision support.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
