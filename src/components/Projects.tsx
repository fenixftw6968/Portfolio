import { PROJECTS } from '../data/projects'
import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6 md:px-12 max-w-6xl mx-auto w-full border-t border-white/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#666666] block mb-2">
            03 / Works
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Featured Systems
          </h2>
        </div>
        <p className="text-sm text-[#A0A0A0] mt-3 md:mt-0 font-mono">
          Architectures • Codebases • Production Repositories
        </p>
      </div>

      {/* Clean Project Showcase Cards */}
      <div className="space-y-16">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="mono-card p-8 sm:p-12 hover:border-white/20 transition-all duration-300"
          >
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
              <div className="space-y-4 max-w-2xl">
                <div className="flex items-center gap-3 text-xs font-mono text-[#666666]">
                  <span>CASE {project.index}</span>
                  <span>•</span>
                  <span>{project.category}</span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                  {project.name}
                </h3>

                <p className="text-base sm:text-lg text-[#A0A0A0] leading-relaxed">
                  {project.tagline}
                </p>

                <p className="text-sm text-[#666666] leading-relaxed pt-2">
                  {project.problem}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-4">
                  {project.stack.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#A0A0A0]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-4 shrink-0 pt-2 lg:pt-0">
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary text-xs py-2.5 px-5"
                  >
                    <span>Source Code</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary text-xs py-2.5 px-5"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
