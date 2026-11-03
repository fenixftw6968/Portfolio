import { motion } from 'motion/react'

export function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 max-w-6xl mx-auto w-full border-t border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        {/* Left: Section Label */}
        <div className="md:col-span-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#666666] block mb-2">
            01 / Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About Me
          </h2>
        </div>

        {/* Right: Clean Editorial Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-8 space-y-6 text-[#A0A0A0] text-lg sm:text-xl font-normal leading-relaxed"
        >
          <p className="text-white font-medium">
            I am an Artificial Intelligence &amp; Data Science undergraduate at Pune Institute of Computer Technology (PICT), graduating in 2028.
          </p>
          <p>
            My engineering work centers on high-throughput backend infrastructure, distributed system reliability, and applied deep learning vision systems. I care deeply about how software behaves under concurrency contention, network partitions, and edge failures.
          </p>
          <p>
            Beyond architecting layered REST services and training CNN classification models, I am an active competitive programmer with over 930 verified algorithmic solutions across LeetCode, Codeforces, and CodeChef.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
