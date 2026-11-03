import { PRINCIPLES } from '../config/site'
import { Award, ArrowRight } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background radial spotlight */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/[0.08] pb-8 mb-14">
          <div>
            <span className="font-mono text-xs font-semibold text-cyan-400 tracking-wider uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              SECTION 01 // BACKGROUND &amp; CORE FOCUS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mt-2">
              ENGINEERING FOUNDATION
            </h2>
          </div>
          <p className="font-mono text-xs text-slate-400 mt-3 md:mt-0 max-w-sm">
            Pune Institute of Computer Technology • AI &amp; DS • Backend Architecture • Contest Algorithms
          </p>
        </div>

        {/* Narrative & Institutional Involvements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Main Story Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-2xl glass-panel relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block mb-3">
                [EXECUTIVE SUMMARY]
              </span>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-sans">
                I am a third-year <strong>B.Tech Artificial Intelligence &amp; Data Science</strong> undergraduate at{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 font-semibold">
                  Pune Institute of Computer Technology (PICT)
                </span>
                . My engineering passion centers around robust high-throughput backends, distributed data consistency, applied deep learning vision models, and disciplined competitive programming.
              </p>
              <p className="mt-4 text-sm text-slate-400 leading-relaxed font-sans">
                I look beyond standard web wrappers. I care deeply about how systems perform during concurrency spikes, network partitions, and database lock contention. Whether architecting OAuth2/OIDC identity validation pipelines in Spring Boot or training DenseNet121 neural networks with Grad-CAM visual heatmaps, I engineer software that is auditable, measurable, and resilient.
              </p>
            </div>

            {/* PICT Coders League Box with Modern Glowing Border */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-950/40 via-slate-900/50 to-slate-950/80 border border-indigo-500/20 backdrop-blur-xl shadow-xl shadow-indigo-950/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-cyan-400 border border-indigo-500/20">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white tracking-wide uppercase font-mono">
                    PICT CODERS LEAGUE &amp; COMPETITIVE ECOSYSTEM
                  </h3>
                  <span className="text-xs text-indigo-300 font-mono">Algorithmic Problem Solver</span>
                </div>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                Active core contributor in the <strong>PICT Coders League (PCL)</strong> — PICT&apos;s premier algorithmic battleground. Through PCL, I solve high-constraint contest challenges under time pressure, explore complex graph invariants, dynamic programming trees, and participate in peer-led problem solving.
              </p>
              <div className="flex flex-wrap gap-2.5 mt-5 pt-5 border-t border-white/[0.08] text-xs font-mono">
                <span className="px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-cyan-300 font-medium">
                  705 LeetCode Solves
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-cyan-300 font-medium">
                  160+ CodeChef Solves
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-white/[0.08] text-slate-300">
                  Weekly Contests
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-white/[0.08] text-slate-400">
                  Graph Theory &amp; DP
                </span>
              </div>
            </div>
          </div>

          {/* Institutional Specs Table in Modern Card */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="p-7 rounded-2xl glass-panel space-y-5 text-xs font-mono">
              <div className="border-b border-white/[0.06] pb-4">
                <span className="text-slate-500 block text-[10px] tracking-wider uppercase">INSTITUTION</span>
                <span className="text-white font-bold text-sm tracking-tight">Pune Institute of Computer Technology (PICT)</span>
              </div>

              <div className="border-b border-white/[0.06] pb-4">
                <span className="text-slate-500 block text-[10px] tracking-wider uppercase">DEGREE &amp; MAJOR</span>
                <span className="text-white font-bold text-sm">B.Tech Artificial Intelligence &amp; Data Science</span>
                <span className="text-slate-400 block mt-1">Expected Graduation: June 2026</span>
              </div>

              <div className="border-b border-white/[0.06] pb-4">
                <span className="text-slate-500 block text-[10px] tracking-wider uppercase">TECHNICAL DOMAINS</span>
                <span className="text-cyan-400 font-semibold">Distributed Systems • Spring Boot • Deep Learning • Modern C++</span>
              </div>

              <div className="border-b border-white/[0.06] pb-4">
                <span className="text-slate-500 block text-[10px] tracking-wider uppercase">ALGORITHMIC PROWESS</span>
                <span className="text-white font-medium">Peak 1879 (LeetCode) • 2★ CodeChef • Codeforces Newbie</span>
              </div>

              <div>
                <span className="text-slate-500 block text-[10px] tracking-wider uppercase">LOCATION</span>
                <span className="text-slate-300">Pune, Maharashtra, India (18.5204° N / 73.8567° E)</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-r from-indigo-900/40 to-cyan-900/40 border border-cyan-500/20 flex items-center justify-between shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-xs text-white font-medium">STATUS: READY FOR BACKEND &amp; AI INTERNSHIPS</span>
              </div>
              <ArrowRight className="w-4 h-4 text-cyan-400" />
            </div>
          </div>
        </div>

        {/* Operating Principles / Philosophy */}
        <div>
          <span className="font-mono text-xs text-slate-500 tracking-widest uppercase block mb-6 font-semibold">
            // OPERATING PHILOSOPHIES &amp; ARCHITECTURAL RULES
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {PRINCIPLES.map((item) => (
              <div
                key={item.index}
                className="p-6 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between group"
              >
                <div>
                  <span className="font-mono text-xs text-cyan-400 font-bold block mb-2">
                    // RULE_{item.index}
                  </span>
                  <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {item.body}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-white/[0.06] flex justify-end">
                  <span className="text-[10px] font-mono text-slate-500 group-hover:text-indigo-400 transition-colors">
                    VERIFIED IN CODE
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
