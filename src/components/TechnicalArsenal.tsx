import { useState } from 'react'
import { STACK_GROUPS } from '../config/site'

export function TechnicalArsenal() {
  const [activeGroupId, setActiveGroupId] = useState<string>(STACK_GROUPS[0].id)
  const activeGroup = STACK_GROUPS.find((g) => g.id === activeGroupId) || STACK_GROUPS[0]

  return (
    <section id="stack" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/[0.08] pb-8 mb-14">
          <div>
            <span className="font-mono text-xs font-semibold text-cyan-400 tracking-wider uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              SECTION 05 // SYSTEM CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mt-2">
              TECHNICAL ARSENAL
            </h2>
          </div>
          <p className="font-mono text-xs text-slate-400 mt-3 md:mt-0 max-w-sm">
            Categorized by verified production deployment vs deliberate architectural exploration.
          </p>
        </div>

        {/* Group Selector Pills */}
        <div className="flex flex-wrap gap-2 mb-8 font-mono text-xs">
          {STACK_GROUPS.map((group) => {
            const isActive = group.id === activeGroupId
            return (
              <button
                key={group.id}
                onClick={() => setActiveGroupId(group.id)}
                className={`px-5 py-2.5 rounded-xl border transition-all cursor-pointer flex items-center gap-2.5 ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 border-transparent text-white shadow-lg shadow-indigo-500/25 font-bold'
                    : 'glass-panel text-slate-400 hover:text-white hover:border-white/20'
                }`}
              >
                <span className="text-[10px] text-slate-400 opacity-60">{group.index}</span>
                <span>{group.label}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-black/30 text-slate-300 font-mono">
                  {group.tags.length}
                </span>
              </button>
            )
          })}
        </div>

        {/* Active Group Details */}
        <div className="p-8 rounded-3xl glass-panel">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/[0.08] mb-8 gap-3">
            <div>
              <span className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-wider">
                CATEGORY // {activeGroup.label}
              </span>
              <p className="text-xs text-slate-400 mt-1 font-sans">
                {activeGroup.summary}
              </p>
            </div>
            <div className="flex items-center gap-4 font-mono text-xs">
              <span className="flex items-center gap-2 text-white">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                SHIPPED IN PRODUCTION
              </span>
              <span className="flex items-center gap-2 text-slate-400">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                ACTIVE STUDY
              </span>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {activeGroup.tags.map((skill) => {
              const isShipped = skill.status === 'shipped'
              return (
                <div
                  key={skill.name}
                  className="p-5 rounded-2xl bg-slate-900/60 border border-white/[0.06] hover:border-cyan-500/40 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-mono text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {skill.name}
                      </h4>
                      <span
                        className={`text-[9px] font-mono px-2 py-0.5 rounded-full uppercase tracking-wider font-semibold ${
                          isShipped
                            ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30'
                            : 'bg-amber-500/10 text-amber-300 border border-amber-500/30'
                        }`}
                      >
                        {skill.status}
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      {skill.note}
                    </p>
                  </div>

                  {skill.projects && skill.projects.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                      {skill.projects.map((proj) => (
                        <span
                          key={proj}
                          className="font-mono text-[9px] px-2 py-0.5 rounded-md bg-white/[0.04] text-slate-400 border border-white/[0.06]"
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

        {/* Global Key Architecture Competencies in Modern Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
          <div className="p-6 rounded-2xl glass-panel">
            <span className="text-cyan-400 block font-bold mb-2 text-sm tracking-wide">CONCURRENCY &amp; LOCKS</span>
            <p className="text-slate-400 text-xs font-sans leading-relaxed">
              Pessimistic locking, `FOR UPDATE SKIP LOCKED` query patterns, and race hazard mitigations in live match lobbies.
            </p>
          </div>
          <div className="p-6 rounded-2xl glass-panel">
            <span className="text-cyan-400 block font-bold mb-2 text-sm tracking-wide">AUTH &amp; INTEGRITY</span>
            <p className="text-slate-400 text-xs font-sans leading-relaxed">
              OIDC ID token cryptographic verification, JWT stateless identity, duplicate-link preventions, and tamper-resistant matches.
            </p>
          </div>
          <div className="p-6 rounded-2xl glass-panel">
            <span className="text-cyan-400 block font-bold mb-2 text-sm tracking-wide">MODEL EXPLAINABILITY</span>
            <p className="text-slate-400 text-xs font-sans leading-relaxed">
              DenseNet121 transfer learning coupled with Grad-CAM visual gradients for auditable clinical decision support.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
