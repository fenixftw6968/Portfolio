import { PRINCIPLES } from '../config/site'
import { Award, ArrowRight, ShieldCheck, Cpu, Database, Network } from 'lucide-react'
import { motion } from 'motion/react'
import { SpotlightCard } from './SpotlightCard'
import { Tilt3DCard } from './Tilt3DCard'

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
            >
              <Tilt3DCard intensity={8}>
                <SpotlightCard
                  spotlightColor="rgba(8, 72, 45, 0.08)"
                  className="p-8 sm:p-10 rounded-3xl reelmark-card relative overflow-hidden bg-white"
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
                </SpotlightCard>
              </Tilt3DCard>
            </motion.div>

            {/* PICT Coders League Box in Reelmark Soft Mint Style */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.2 }}
            >
              <SpotlightCard
                spotlightColor="rgba(8, 72, 45, 0.1)"
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
              </SpotlightCard>
            </motion.div>
          </div>

          {/* Right Column: Key Metrics & System Pillars */}
          <div className="lg:col-span-5 space-y-5">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.15 }}
            >
              <SpotlightCard className="p-8 rounded-3xl reelmark-card bg-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-[#DAE7C7] text-[#08482D] flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-black text-lg text-[#0d120e]">ENGINEERING IDENTITY</h3>
                    <span className="text-xs font-mono text-[#08482D] font-bold">CORE PARADIGMS</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: Cpu, title: 'Server-Authoritative Systems', desc: 'Zero client trust. Real-time game loops and contest judging runs entirely isolated on the server with deterministic results.' },
                    { icon: Network, title: 'High-Concurrency Backends', desc: 'Pessimistic DB lock strategies, WebSocket connection pooling, and resilient retry mechanisms under traffic burst.' },
                    { icon: Database, title: 'Measurable ML Deployments', desc: 'FastAPI microservices serving DenseNet121 with sub-120ms latency and clinician-ready Grad-CAM visual heatmaps.' },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 6 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="p-4 rounded-2xl bg-[#F5F8EF] border border-[#08482D]/10 flex items-start gap-3.5 group cursor-default"
                    >
                      <div className="p-2 rounded-xl bg-white text-[#08482D] group-hover:bg-[#08482D] group-hover:text-white transition-colors shrink-0">
                        <item.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-black text-[#0d120e] font-display">{item.title}</h4>
                        <p className="text-xs text-[#414447] mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          </div>
        </div>

        {/* Core Principles Grid */}
        <div className="border-t border-[#08482D]/15 pt-16">
          <div className="mb-10">
            <span className="badge-mint text-xs font-mono font-bold mb-2">ARCHITECTURAL DOGMA</span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#0d120e] font-display">
              FOUR CORE PRINCIPLES
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRINCIPLES.map((principle, index) => (
              <motion.div
                key={principle.index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <SpotlightCard
                  spotlightColor="rgba(8, 72, 45, 0.1)"
                  className="p-7 rounded-3xl reelmark-card h-full flex flex-col justify-between bg-white"
                >
                  <div>
                    <span className="text-2xl font-black font-display text-[#DAE7C7] block mb-3">
                      {principle.index}
                    </span>
                    <h4 className="text-lg font-black text-[#0d120e] font-display mb-2.5">
                      {principle.title}
                    </h4>
                    <p className="text-sm text-[#414447] leading-relaxed font-sans">
                      {principle.body}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-[#08482D]/10 flex items-center justify-between text-xs font-mono text-[#08482D] font-bold">
                    <span>STANDARD #{principle.index}</span>
                    <ArrowRight className="w-4 h-4 opacity-50" />
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
