import { TIMELINE_EXPERIENCES } from '../data/experience'
import { motion } from 'motion/react'

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-32 px-6 md:px-12 max-w-6xl mx-auto w-full border-t border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        {/* Left: Heading */}
        <div className="md:col-span-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#666666] block mb-2">
            02 / Trajectory
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Experience &amp; Education
          </h2>
        </div>

        {/* Right: Minimal Vertical Timeline */}
        <div className="md:col-span-8 space-y-12">
          {TIMELINE_EXPERIENCES.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="pb-10 border-b border-white/10 last:border-b-0 space-y-3"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {item.role}
                </h3>
                <span className="text-xs font-mono text-[#A0A0A0]">
                  {item.period}
                </span>
              </div>

              <div className="text-sm text-[#A0A0A0] font-medium">
                {item.organization} • {item.location}
              </div>

              <p className="text-base text-[#666666] leading-relaxed pt-1">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-white/5 text-[#A0A0A0] border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
