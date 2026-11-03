import { STACK_GROUPS } from '../config/site'
import { motion } from 'motion/react'

export function TechnicalArsenal() {
  return (
    <section id="stack" className="py-32 px-6 md:px-12 max-w-6xl mx-auto w-full border-t border-white/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#666666] block mb-2">
            06 / Arsenal
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Technical Stack
          </h2>
        </div>
        <p className="text-sm text-[#A0A0A0] font-mono mt-3 md:mt-0">
          Languages • Frameworks • Systems
        </p>
      </div>

      {/* Clean Typography-Based Stack Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {STACK_GROUPS.map((group, idx) => (
          <motion.div
            key={group.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="space-y-4"
          >
            <div className="border-b border-white/10 pb-3 flex items-center justify-between">
              <h3 className="text-sm font-mono font-bold tracking-wider uppercase text-white">
                {group.label}
              </h3>
              <span className="text-xs font-mono text-[#666666]">
                0{idx + 1}
              </span>
            </div>

            <ul className="space-y-2.5">
              {group.tags.map((tag) => (
                <li key={tag.name} className="flex items-center justify-between text-sm">
                  <span className="text-[#A0A0A0] font-medium hover:text-white transition-colors">
                    {tag.name}
                  </span>
                  <span className="text-xs font-mono text-[#666666]">
                    {tag.status === 'shipped' ? 'Production' : 'Study'}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
