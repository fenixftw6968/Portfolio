import { CP_SNAPSHOT } from '../data/cp-snapshot'
import { motion } from 'motion/react'
import { ExternalLink } from 'lucide-react'

export function CompetitiveProgramming() {
  const platforms = [
    {
      name: 'LeetCode',
      handle: CP_SNAPSHOT.leetcode.handle,
      rating: CP_SNAPSHOT.leetcode.currentRating,
      peak: CP_SNAPSHOT.leetcode.maxRating,
      solved: CP_SNAPSHOT.leetcode.solved,
      url: CP_SNAPSHOT.leetcode.profileUrl,
      detail: 'Top 9.13% Global',
    },
    {
      name: 'Codeforces',
      handle: CP_SNAPSHOT.codeforces.handle,
      rating: CP_SNAPSHOT.codeforces.currentRating,
      peak: CP_SNAPSHOT.codeforces.maxRating,
      solved: CP_SNAPSHOT.codeforces.solved,
      url: CP_SNAPSHOT.codeforces.profileUrl,
      detail: 'Division Contests',
    },
    {
      name: 'CodeChef',
      handle: CP_SNAPSHOT.codechef.handle,
      rating: CP_SNAPSHOT.codechef.currentRating,
      peak: CP_SNAPSHOT.codechef.maxRating,
      solved: CP_SNAPSHOT.codechef.solved,
      url: CP_SNAPSHOT.codechef.profileUrl,
      detail: 'Star Coder',
    },
  ]

  return (
    <section id="cp" className="py-32 px-6 md:px-12 max-w-6xl mx-auto w-full border-t border-white/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#666666] block mb-2">
            05 / Ratings
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Competitive Programming
          </h2>
        </div>
        <p className="text-sm text-[#A0A0A0] font-mono mt-3 md:mt-0">
          930+ Verified Problem Solves
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {platforms.map((p, idx) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="mono-card p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#666666] mb-4">
                <span>{p.detail}</span>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <h3 className="text-xl font-bold text-white mb-1">
                {p.name}
              </h3>
              <div className="text-xs font-mono text-[#A0A0A0] mb-6">
                @{p.handle}
              </div>

              <div className="space-y-3 border-t border-white/10 pt-4 font-mono text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-[#666666]">Current Rating</span>
                  <span className="font-bold text-white">{p.rating || 'N/A'}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#666666]">Peak Rating</span>
                  <span className="text-[#A0A0A0]">{p.peak || 'N/A'}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#666666]">Problems Solved</span>
                  <span className="font-bold text-white">{p.solved || 'N/A'}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
