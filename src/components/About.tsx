import { PRINCIPLES } from '../config/site'
import { Award, ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'

export function About() {
  return (
    <section id="about" className="py-28 relative overflow-hidden bg-white/60 border-y border-[#08482D]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Handwritten note */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#08482D]/15 pb-8 mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="badge-mint font-mono text-xs font-bold">SECTION 01 // BACKGROUND</span>
              <span className="font-handwriting text-2xl text-[#08482D] font-bold rotate-[-1deg]">
                meet the engineer
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#0d120e] font-display tracking-tight">
              ENGINEERING FOUNDATION.
            </h2>
          </div>
          <p className="text-sm text-[#414447] font-mono mt-3 md:mt-0 max-w-sm font-semibold">
            Pune Institute of Computer Technology • AI &amp; DS • Backend Architecture • Algorithms
          </p>
        </motion.div>

        {/* Narrative & Institutional Involvements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Main Story Column */}
          <div className="lg:col-span-7 space-y-7">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1 }}
              whileHover={{ y: -4 }}
              className="p-8 sm:p-10 rounded-3xl reelmark-card relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-extrabold text-[#08482D] uppercase tracking-wider">
                  [EXECUTIVE SUMMARY]
                </span>
                <span className="font-handwriting text-xl text-[#08482D] font-bold">
                  undergraduate researcher
                </span>
              </div>
              <p className="text-lg sm:text-xl text-[#0d120e] leading-relaxed font-sans font-medium">
                I am a third-year <strong>B.Tech Artificial Intelligence &amp; Data Science</strong> undergraduate at{' '}
                <span className="text-[#08482D] font-bold underline decoration-[#DAE7C7] decoration-4 underline-offset-4">
                  Pune Institute of Computer Technology (PICT)
                </span>
                . My engineering passion centers around high-throughput backend infrastructure, distributed consistency, applied deep learning vision models, and disciplined competitive programming.
              </p>
              <p className="mt-5 text-base text-[#414447] leading-relaxed font-sans font-normal">
                I look beyond standard web wrappers. I care deeply about how systems perform during concurrency spikes, network partitions, and database lock contention. Whether architecting OAuth2/OIDC identity validation pipelines in Spring Boot or training DenseNet121 neural networks with Grad-CAM visual heatmaps, I engineer software that is auditable, measurable, and resilient.
              </p>
            </motion.div>

            {/* PICT Coders League Box in Reelmark Soft Mint Style */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.2 }}
              whileHover={{ y: -4 }}
              className="p-8 sm:p-10 rounded-3xl reelmark-card-mint relative shadow-sm border-2 border-[#BED4A0]"
            >
              <div className="flex items-center gap-3.5 mb-4">
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  className="w-12 h-12 rounded-full bg-[#08482D] text-[#F5F8EF] flex items-center justify-center shadow-md cursor-pointer"
                >
                  <Award className="w-6 h-6" />
                </motion.div>
                <div>
                  <h3 className="text-base font-black text-[#08482D] font-display uppercase tracking-wider">
                    PICT CODERS LEAGUE &amp; COMPETITIVE ECOSYSTEM
                  </h3>
                  <span className="text-xs text-[#08482D] font-mono font-bold">Algorithmic Problem Solver</span>
                </div>
              </div>
              <p className="text-base text-[#0d120e] leading-relaxed font-sans font-medium">
                Active core contributor in the <strong>PICT Coders League (PCL)</strong> — PICT&apos;s premier algorithmic battleground. Through PCL, I solve high-constraint contest challenges under time pressure, explore complex graph invariants, dynamic programming trees, and participate in peer-led problem solving.
              </p>
              <div className="flex flex-wrap gap-2.5 mt-6 pt-6 border-t border-[#BED4A0] text-xs font-mono">
                {['705 LeetCode Solves', '160+ CodeChef Solves', 'Weekly Contests', 'Graph Theory & DP'].map((badge, idx) => (
                  <motion.span
                    key={badge}
                    whileHover={{ scale: 1.06, y: -2 }}
                    className={`px-4 py-2 rounded-full bg-white border border-[#BED4A0] shadow-xs text-sm cursor-default ${
                      idx < 2 ? 'text-[#08482D] font-bold' : 'text-[#414447] font-semibold'
                    }`}
                  >
                    {badge}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Institutional Specs Table */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.15 }}
              whileHover={{ y: -4 }}
              className="p-8 sm:p-9 rounded-3xl reelmark-card space-y-6 text-sm font-mono"
            >
              <div className="border-b border-[#08482D]/15 pb-4">
                <span className="text-[#414447] block text-xs tracking-wider uppercase font-bold">INSTITUTION</span>
                <span className="text-[#0d120e] font-black text-base mt-1 block">Pune Institute of Computer Technology (PICT)</span>
              </div>

              <div className="border-b border-[#08482D]/15 pb-4">
                <span className="text-[#414447] block text-xs tracking-wider uppercase font-bold">DEGREE &amp; MAJOR</span>
                <span className="text-[#0d120e] font-black text-base mt-1 block">B.Tech Artificial Intelligence &amp; Data Science</span>
                <span className="text-[#414447] block mt-1 font-semibold text-xs">Expected Graduation: June 2026</span>
              </div>

              <div className="border-b border-[#08482D]/15 pb-4">
                <span className="text-[#414447] block text-xs tracking-wider uppercase font-bold">TECHNICAL DOMAINS</span>
                <span className="text-[#08482D] font-black text-sm mt-1 block">Distributed Systems • Spring Boot • Deep Learning • Modern C++</span>
              </div>

              <div className="border-b border-[#08482D]/15 pb-4">
                <span className="text-[#414447] block text-xs tracking-wider uppercase font-bold">ALGORITHMIC PROWESS</span>
                <span className="text-[#0d120e] font-bold text-sm mt-1 block">Peak 1879 (LeetCode) • 2★ CodeChef • Codeforces Newbie</span>
              </div>

              <div>
                <span className="text-[#414447] block text-xs tracking-wider uppercase font-bold">LOCATION</span>
                <span className="text-[#0d120e] font-semibold mt-1 block">Pune, Maharashtra, India (18.5204° N / 73.8567° E)</span>
              </div>
            </motion.div>

            {/* Status Card in Forest Green */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-3xl bg-[#08482D] text-[#F5F8EF] flex items-center justify-between shadow-lg cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#DAE7C7] animate-pulse" />
                <span className="font-mono text-sm font-bold tracking-wide">READY FOR HARD PROBLEMS &amp; INTERNSHIPS</span>
              </div>
              <ArrowRight className="w-5 h-5 text-[#DAE7C7]" />
            </motion.div>
          </div>
        </div>

        {/* Operating Principles / Philosophy */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <span className="font-mono text-sm text-[#414447] tracking-widest uppercase font-extrabold">
              // OPERATING PHILOSOPHIES &amp; ARCHITECTURAL RULES
            </span>
            <span className="font-handwriting text-2xl text-[#08482D] font-bold rotate-1">
              verified engineering decisions
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {PRINCIPLES.map((item, i) => (
              <motion.div
                key={item.index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="p-7 rounded-3xl reelmark-card flex flex-col justify-between group cursor-default"
              >
                <div>
                  <span className="font-mono text-xs text-[#08482D] font-black block mb-2.5">
                    // RULE_{item.index}
                  </span>
                  <h4 className="text-base font-black text-[#0d120e] font-display group-hover:text-[#08482D] transition-colors mb-2.5">
                    {item.title}
                  </h4>
                  <p className="text-sm text-[#414447] leading-relaxed font-sans font-medium">
                    {item.body}
                  </p>
                </div>
                <div className="mt-6 pt-3.5 border-t border-[#08482D]/15 flex justify-end">
                  <span className="text-xs font-mono text-[#414447] font-bold group-hover:text-[#08482D] transition-colors">
                    VERIFIED
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
