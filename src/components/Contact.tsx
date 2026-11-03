import { useState } from 'react'
import { SITE } from '../config/site'
import { ArrowUpRight, Copy, Check } from 'lucide-react'
import { motion } from 'motion/react'

export function Contact() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(SITE.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const socialLinks = [
    { label: 'GitHub', url: SITE.links.github, handle: `@${SITE.handles.github}` },
    { label: 'LinkedIn', url: SITE.links.linkedin, handle: `@${SITE.handles.linkedin}` },
    { label: 'LeetCode', url: SITE.links.leetcode, handle: `@${SITE.handles.leetcode}` },
    { label: 'Codeforces', url: SITE.links.codeforces, handle: `@${SITE.handles.codeforces}` },
  ]

  return (
    <section id="contact" className="py-36 px-6 md:px-12 max-w-6xl mx-auto w-full border-t border-white/10">
      <div className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-[#666666] block">
            07 / Contact
          </span>
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-black text-white tracking-tight uppercase leading-[0.9]">
            LET&apos;S BUILD
            <br />
            SOMETHING.
          </h2>
        </motion.div>

        {/* Email & Action */}
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <a
            href={SITE.links.email}
            className="btn-primary"
          >
            <span>Send Email</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <button
            onClick={handleCopy}
            className="btn-secondary cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy Email</span>
              </>
            )}
          </button>
        </div>

        {/* Social Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-16 border-t border-white/10">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="group space-y-1 block"
            >
              <div className="flex items-center gap-1 text-sm font-bold text-white group-hover:underline">
                <span>{s.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="text-xs font-mono text-[#666666]">
                {s.handle}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
