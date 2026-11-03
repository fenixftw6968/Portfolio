import { useState } from 'react'
import { SITE, EMAIL_SUBJECT } from '../config/site'
import { Mail, Copy, Check, Send, ArrowUpRight, MapPin, Clock, Globe } from 'lucide-react'

function LinkedinIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  )
}

function GithubIcon({ className = 'w-4 h-4' }: { className?: string }) {
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
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/[0.08] pb-8 mb-14">
          <div>
            <span className="font-mono text-xs font-semibold text-cyan-400 tracking-wider uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              SECTION 06 // TRANSMISSION CHANNEL
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mt-2">
              GET IN TOUCH
            </h2>
          </div>
          <div className="flex items-center gap-2 mt-4 md:mt-0 font-mono text-xs text-cyan-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>OPEN FOR HARD PROBLEMS &amp; INTERNSHIPS</span>
          </div>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Direct Dispatch Box */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl glass-panel flex flex-col justify-between shadow-2xl">
            <div>
              <span className="font-mono text-xs text-cyan-400 font-semibold uppercase tracking-wider block mb-3">
                DIRECT INBOX
              </span>
              <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-4">
                LET&apos;S ENGINEER SOMETHING EXCEPTIONAL.
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-8 font-sans">
                Whether you need high-performance Spring services, competitive programming mentorship, distributed system architecture, or applied computer vision models, my transmission channels are open.
              </p>

              {/* Direct email box */}
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-cyan-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-white font-bold text-sm">{SITE.email}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-white/[0.08] transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-bold">COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-400" />
                        <span>COPY</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${SITE.email}?subject=${EMAIL_SUBJECT}`}
                    className="flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white font-bold shadow-md shadow-indigo-500/25 transition-all"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>LAUNCH MAIL</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-white/[0.06] flex justify-between font-mono text-[11px] text-slate-400">
              <span>RESPONSE TIME: &lt; 24 HOURS</span>
              <span className="text-cyan-400">DIRECT DISPATCH ACTIVE</span>
            </div>
          </div>

          {/* Social Profiles & Coordinates Grid */}
          <div className="lg:col-span-5 space-y-4">
            {/* LinkedIn */}
            <a
              href={SITE.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl glass-panel glass-panel-hover flex items-center justify-between group block"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-indigo-500/10 text-white group-hover:text-cyan-400 transition-colors">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-mono text-sm font-bold text-white uppercase">
                    LINKEDIN PROFILE
                  </h4>
                  <p className="font-mono text-xs text-slate-400">
                    /in/kartik-bhangale-13011a329
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
            </a>

            {/* GitHub */}
            <a
              href={SITE.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl glass-panel glass-panel-hover flex items-center justify-between group block"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-indigo-500/10 text-white group-hover:text-cyan-400 transition-colors">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-mono text-sm font-bold text-white uppercase">
                    GITHUB REPOSITORIES
                  </h4>
                  <p className="font-mono text-xs text-slate-400">
                    @fenixftw6968 (16 Repositories)
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
            </a>

            {/* Location & Timezone info card */}
            <div className="p-6 rounded-2xl glass-panel font-mono text-xs space-y-2.5 text-slate-400">
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  BASE:
                </span>
                <span className="text-white">Pune, Maharashtra, India</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  TIMEZONE:
                </span>
                <span className="text-white">Asia/Kolkata (UTC +05:30)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5 text-cyan-400" />
                  STATUS:
                </span>
                <span className="text-emerald-400 font-bold">READY TO BUILD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
