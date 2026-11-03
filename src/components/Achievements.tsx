import { motion } from 'motion/react'

export function Achievements() {
  const achievements = [
    {
      metric: 'Top 9.13%',
      title: 'LeetCode Global Percentile',
      description: 'Peak contest rating of 1879 with over 705 algorithmic challenges solved.',
    },
    {
      metric: '930+ Solves',
      title: 'Competitive Programming Solves',
      description: 'Active contributor across LeetCode, Codeforces (1018), and CodeChef (160+ solves).',
    },
    {
      metric: '98.4%',
      title: 'Computer Vision Validation Accuracy',
      description: 'DenseNet121 transfer learning neural network with explainable Grad-CAM overlays for medical imaging.',
    },
    {
      metric: '< 50ms',
      title: 'Real-Time Dueling Engine Latency',
      description: 'Spring Boot 3 + STOMP WebSockets server-authoritative code execution platforms (CF Arena & AlgoArena).',
    },
  ]

  return (
    <section id="honors" className="py-32 px-6 md:px-12 max-w-6xl mx-auto w-full border-t border-white/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#666666] block mb-2">
            04 / Recognition
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Honors &amp; Milestones
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {achievements.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="mono-card p-8 space-y-3"
          >
            <div className="text-3xl sm:text-4xl font-extrabold font-display text-white">
              {item.metric}
            </div>
            <h3 className="text-lg font-bold text-white tracking-tight">
              {item.title}
            </h3>
            <p className="text-sm text-[#A0A0A0] leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
