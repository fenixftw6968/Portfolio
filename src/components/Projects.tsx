import { useState } from 'react'
import { PROJECTS } from '../data/projects'
import { ExternalLink, CheckCircle2, AlertTriangle, Shield } from 'lucide-react'

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
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/[0.08] pb-8 mb-14">
          <div>
            <span className="font-mono text-xs font-semibold text-cyan-400 tracking-wider uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              SECTION 02 // REAL REPOSITORY CASE FILES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mt-2">
              FEATURED SYSTEMS
            </h2>
          </div>
          <p className="font-mono text-xs text-slate-400 mt-3 md:mt-0 max-w-sm">
            Auditable architectures, verified technical decisions, failure handling, and production live demos.
          </p>
        </div>

        {/* Project Selector Rail */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {PROJECTS.map((p) => {
            const isSelected = p.id === selectedId
            return (
              <button
                key={p.id}
                onClick={() => setSelectedId(p.id)}
                className={`p-4 rounded-xl text-left border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-gradient-to-br from-indigo-950/80 via-slate-900 to-slate-950 border-cyan-500/60 shadow-lg shadow-cyan-500/20 text-white transform -translate-y-1'
                    : 'glass-panel text-slate-400 hover:text-white hover:border-white/20'
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] font-mono text-slate-500">CASE {p.index}</span>
                  {p.accent === 'lime' && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400/50" />}
                </div>
                <div className="font-bold text-xs font-mono tracking-wide text-white truncate">{p.name}</div>
                <div className="text-[10px] font-mono text-slate-400 truncate mt-1">{p.category}</div>
              </button>
            )
          })}
        </div>

        {/* Selected Project Full Dossier Card */}
        <div className="p-8 lg:p-10 rounded-3xl glass-panel border-white/[0.1] shadow-2xl shadow-indigo-950/30">
          {/* Top Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-8 border-b border-white/[0.08] gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2">
                <span className="text-cyan-400 font-semibold">CASE FILE #{activeProject.index}</span>
                <span>•</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                  {activeProject.status}
                </span>
                <span>•</span>
                <span>{activeProject.year}</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                {activeProject.name}
                <span className="ml-3 text-base sm:text-xl font-normal text-slate-400 font-sans">
                  // {activeProject.alias}
                </span>
              </h3>
              <p className="text-sm text-slate-300 mt-2 max-w-3xl leading-relaxed">
                {activeProject.tagline}
              </p>
            </div>

            {/* Links and repo buttons */}
            <div className="flex flex-wrap items-center gap-3">
              {activeProject.repo && (
                <a
                  href={activeProject.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-white/[0.1] hover:border-cyan-500/50 text-white font-mono text-xs transition-all shadow-sm"
                >
                  <GithubIcon className="w-4 h-4 text-cyan-400" />
                  <span>VIEW REPOSITORY</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              )}

              {activeProject.live && (
                <a
                  href={activeProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center justify-center p-[1px] overflow-hidden rounded-xl font-medium group transition-all shadow-md shadow-indigo-500/30"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-indigo-500"></span>
                  <span className="relative flex items-center gap-2 px-5 py-2.5 transition-all ease-out bg-slate-950 rounded-[11px] group-hover:bg-opacity-0 text-xs font-bold text-white tracking-wide">
                    <span>LIVE DEMO</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </a>
              )}
            </div>
          </div>

          {/* Technology Badges */}
          <div className="py-5 border-b border-white/[0.08] flex flex-wrap gap-2 text-xs font-mono">
            <span className="text-slate-500 py-1 mr-2 text-[11px] uppercase tracking-wider">STACK:</span>
            {activeProject.stack.map((item) => (
              <span
                key={item}
                className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-300"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Dossier Body Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
            {/* Left 7 cols: Problem, Architecture, Decisions */}
            <div className="lg:col-span-7 space-y-6">
              {/* Problem statement */}
              <div>
                <h4 className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">
                  // THE ENGINEERING CHALLENGE
                </h4>
                <p className="text-sm text-slate-200 leading-relaxed bg-slate-900/60 p-5 rounded-xl border border-white/[0.06] border-l-4 border-l-cyan-500 font-sans">
                  {activeProject.problem}
                </p>
              </div>

              {/* Architecture Blueprint */}
              <div>
                <h4 className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-wider mb-3">
                  // SYSTEM TOPOLOGY &amp; ARCHITECTURE
                </h4>
                <div className="space-y-2.5 font-mono text-xs">
                  {activeProject.architecture.map((layer, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-900/40 border border-white/[0.06] flex flex-col sm:flex-row sm:items-start gap-3"
                    >
                      <span className="text-cyan-400 font-bold w-24 shrink-0">
                        [{layer.label}]
                      </span>
                      <span className="text-slate-300">{layer.detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Key Architectural Decisions */}
              <div>
                <h4 className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-wider mb-3">
                  // VERIFIED ARCHITECTURAL DECISIONS
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-300 font-sans">
                  {activeProject.decisions.map((dec, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-cyan-400 font-mono text-sm leading-none mt-0.5">›</span>
                      <span>{dec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right 5 cols: Visual Screenshot + Verified Checklist */}
            <div className="lg:col-span-5 space-y-6">
              {/* Screenshot or Visual Card */}
              {activeProject.screenshot ? (
                <div className="relative rounded-2xl border border-white/[0.1] bg-slate-950 p-2 overflow-hidden shadow-xl group">
                  <div className="absolute top-4 left-4 z-10 px-2.5 py-1 rounded-full bg-slate-900/90 border border-white/[0.1] font-mono text-[9px] text-cyan-300 backdrop-blur-md">
                    LIVE REPOSITORY SCREENSHOT
                  </div>
                  <img
                    src={activeProject.screenshot}
                    alt={activeProject.name}
                    className="w-full h-auto rounded-xl object-cover border border-white/[0.05] opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              ) : (
                <div className="p-8 rounded-2xl border border-dashed border-white/[0.1] bg-slate-900/30 flex flex-col items-center justify-center text-center">
                  <Shield className="w-8 h-8 text-slate-500 mb-2" />
                  <span className="font-mono text-xs text-slate-400 uppercase">
                    SEALED ARCHITECTURE / SOURCE PRIVATE
                  </span>
                  <p className="text-[11px] text-slate-500 mt-1 max-w-xs font-sans">
                    Protected internal research repository or private codebase.
                  </p>
                </div>
              )}

              {/* Verified Capabilities Checklist */}
              <div className="p-6 rounded-2xl bg-slate-900/50 border border-white/[0.08]">
                <div className="flex items-center gap-2.5 mb-4">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                    VERIFIED ARTIFACT DELIVERABLES
                  </span>
                </div>
                <div className="space-y-2.5 font-sans">
                  {activeProject.verified.map((v, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <span className="text-cyan-400 font-mono text-[10px] mt-0.5">•</span>
                      <span>{v}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Caveat or Engineering Note */}
              {activeProject.caveat && (
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200 flex items-start gap-2.5 font-sans">
                  <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{activeProject.caveat}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
