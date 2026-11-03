import { useState } from 'react'
import { SITE } from '../config/site'
import { Mail, Copy, Check, Send, ArrowUpRight, MapPin, Clock, Globe } from 'lucide-react'
import { motion } from 'motion/react'
import { SpotlightCard } from './SpotlightCard'
import { Magnetic } from './Magnetic'

function LinkedinIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  )
}

function GithubIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

export function Contact() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SITE.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#08482D]/10 pb-10 mb-14"
        >
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="badge-mint font-mono text-xs sm:text-sm">SECTION 07 // TRANSMISSION</span>
              <span className="font-handwriting text-2xl text-[#08482D] font-bold rotate-[-1deg]">
                let&apos;s build together
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#101410] font-display tracking-tight">
              GET IN TOUCH.
            </h2>
          </div>
          <div className="flex items-center gap-3 mt-4 md:mt-0 font-mono text-sm text-[#08482D] font-bold">
            <span className="w-2.5 h-2.5 rounded-full bg-[#08482D] animate-ping" />
            <span>SOCKET OPEN FOR HARD PROBLEMS</span>
          </div>
        </motion.div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Direct Dispatch Box */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <SpotlightCard
              spotlightColor="rgba(8, 72, 45, 0.08)"
              className="p-8 sm:p-12 rounded-3xl bg-white border border-[#08482D]/15 shadow-xl shadow-[#08482D]/5 flex flex-col justify-between h-full"
            >
              <div>
                <span className="text-sm font-mono font-bold text-[#08482D] uppercase tracking-wider block mb-4">
                  PRIMARY TRANSMISSION PORT
                </span>
                <h3 className="text-3xl sm:text-5xl font-black text-[#101410] font-display tracking-tight mb-5 leading-tight">
                  LET&apos;S ENGINEER SOMETHING MEANINGFUL.
                </h3>
                <p className="text-base sm:text-lg text-[#414447] leading-relaxed mb-10 font-sans">
                  Whether you need high-throughput Spring services, competitive programming mentorship, distributed system architecture, or applied computer vision models, my transmission channels are open.
                </p>

                {/* Direct email box */}
                <div className="p-6 rounded-2xl bg-[#F5F8EF] border border-[#08482D]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-5 font-mono mb-8">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-full bg-[#DAE7C7] text-[#08482D] flex items-center justify-center shadow-sm shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span className="text-[#0d120e] font-bold text-base sm:text-lg select-all">{SITE.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Magnetic pullRatio={0.25}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleCopyEmail}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-[#DAE7C7] text-[#08482D] border border-[#C8DBAE] transition-colors cursor-pointer text-sm font-semibold"
                      >
                        {copied ? (
                          <>
                            <Check className="w-4 h-4 text-[#08482D]" />
                            <span className="text-[#08482D] font-bold">COPIED</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4 text-[#08482D]" />
                            <span>COPY</span>
                          </>
                        )}
                      </motion.button>
                    </Magnetic>

                    <Magnetic pullRatio={0.25}>
                      <a
                        href={SITE.links.email}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#08482D] hover:bg-[#053320] text-white transition-colors cursor-pointer text-sm font-semibold shadow-sm"
                      >
                        <Send className="w-4 h-4" />
                        <span>DISPATCH</span>
                      </a>
                    </Magnetic>
                  </div>
                </div>
              </div>

              {/* Status footer bar */}
              <div className="pt-6 border-t border-[#08482D]/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#414447]">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#08482D]" />
                  <span>TIMEZONE: {SITE.timezone} (UTC+5:30)</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#08482D]" />
                  <span>LOCATION: {SITE.location}</span>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Right Column: Interactive Profiles & Telemetry Badges */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <SpotlightCard className="p-8 rounded-3xl bg-white border border-[#08482D]/15 shadow-sm">
                <h4 className="text-xs font-mono font-bold text-[#08482D] uppercase tracking-wider mb-6">
                  PUBLIC NETWORK PROFILES
                </h4>

                <div className="space-y-4">
                  {[
                    {
                      label: 'GitHub',
                      handle: `@${SITE.handles.github}`,
                      url: SITE.links.github,
                      icon: GithubIcon,
                      desc: 'Repositories, production services, and open-source contributions',
                    },
                    {
                      label: 'LinkedIn',
                      handle: `@${SITE.handles.linkedin}`,
                      url: SITE.links.linkedin,
                      icon: LinkedinIcon,
                      desc: 'Professional engineering background & verified experience',
                    },
                    {
                      label: 'LeetCode',
                      handle: `@${SITE.handles.leetcode}`,
                      url: SITE.links.leetcode,
                      icon: Globe,
                      desc: '705 solved algorithms, contest telemetry, badge history',
                    },
                    {
                      label: 'Codeforces',
                      handle: `@${SITE.handles.codeforces}`,
                      url: SITE.links.codeforces,
                      icon: Globe,
                      desc: 'Rated division contest participant and algorithmic problem solving',
                    },
                  ].map((profile) => (
                    <motion.a
                      key={profile.label}
                      href={profile.url}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ x: 6, backgroundColor: '#EBF2DF' }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="p-4 rounded-2xl bg-[#F5F8EF] border border-[#08482D]/10 flex items-center justify-between group transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="p-2.5 rounded-xl bg-white text-[#08482D] group-hover:bg-[#08482D] group-hover:text-white transition-colors shrink-0 shadow-xs">
                          <profile.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h5 className="font-display font-black text-sm text-[#0d120e]">
                              {profile.label}
                            </h5>
                            <span className="text-xs font-mono text-[#08482D] font-bold">
                              {profile.handle}
                            </span>
                          </div>
                          <p className="text-xs text-[#414447] mt-0.5 line-clamp-1">
                            {profile.desc}
                          </p>
                        </div>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-[#08482D] opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
                    </motion.a>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
