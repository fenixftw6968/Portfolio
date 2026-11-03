import { useMemo, useState } from 'react'
import { GITHUB_SNAPSHOT } from '../data/github-snapshot'
import { Star, GitFork, ExternalLink, Calendar, FolderGit2 } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'

export function GitHubActivity() {
  const { user, repos, languages, contributions } = GITHUB_SNAPSHOT
  const [filterLang, setFilterLang] = useState<string>('ALL')

  const filteredRepos = useMemo(() => {
    if (filterLang === 'ALL') return repos.slice(0, 8)
    return repos.filter((r) => r.language === filterLang)
  }, [repos, filterLang])

  const availableLangs = useMemo(() => {
    const langs = new Set<string>()
    repos.forEach((r) => {
      if (r.language) langs.add(r.language)
    })
    return ['ALL', ...Array.from(langs)]
  }, [repos])

  const heatmapDays = useMemo(() => {
    if (!contributions?.days) return []
    return contributions.days.slice(-140)
  }, [contributions])

  return (
    <section id="github" className="py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#08482D]/15 pb-8 mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="badge-mint font-mono text-xs font-bold">SECTION 04 // OPEN SOURCE</span>
              <span className="font-handwriting text-2xl text-[#08482D] font-bold rotate-[-1deg]">
                activity footprint
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#0d120e] font-display tracking-tight">
              GITHUB FOOTPRINT.
            </h2>
          </div>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            href={user.htmlUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 mt-4 md:mt-0 font-mono text-sm text-[#08482D] font-extrabold hover:underline"
          >
            <span>GITHUB @{user.login}</span>
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>

        {/* GitHub Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="p-7 rounded-3xl reelmark-card"
          >
            <span className="font-mono text-xs text-[#414447] block font-bold">PUBLIC REPOS</span>
            <span className="text-4xl sm:text-5xl font-display font-black text-[#0d120e] mt-1.5 block">
              {user.publicRepos}
            </span>
            <span className="text-xs font-mono text-[#08482D] font-extrabold mt-1 block">Active Codebases</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="p-7 rounded-3xl reelmark-card"
          >
            <span className="font-mono text-xs text-[#414447] block font-bold">TOTAL COMMITS</span>
            <span className="text-4xl sm:text-5xl font-display font-black text-[#08482D] mt-1.5 block">
              {contributions.total}
            </span>
            <span className="text-xs font-mono text-[#414447] font-semibold mt-1 block">In Last 12 Months</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.19 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="p-7 rounded-3xl reelmark-card"
          >
            <span className="font-mono text-xs text-[#414447] block font-bold">LONGEST STREAK</span>
            <span className="text-4xl sm:text-5xl font-display font-black text-[#0d120e] mt-1.5 block">
              {contributions.longestStreak} <span className="text-sm font-bold text-[#414447]">DAYS</span>
            </span>
            <span className="text-xs font-mono text-[#08482D] font-extrabold mt-1 block">{contributions.activeDays} Active Days</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.26 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="p-7 rounded-3xl reelmark-card"
          >
            <span className="font-mono text-xs text-[#414447] block font-bold">FOLLOWERS</span>
            <span className="text-4xl sm:text-5xl font-display font-black text-[#0d120e] mt-1.5 block">
              {user.followers}
            </span>
            <span className="text-xs font-mono text-[#414447] font-semibold mt-1 block">Following {user.following}</span>
          </motion.div>
        </div>

        {/* Contribution Heatmap Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-[#08482D]/15 shadow-sm mb-14"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#08482D]/15 gap-3 mb-6">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-[#08482D]" />
              <span className="font-mono text-sm font-extrabold text-[#0d120e] uppercase tracking-wider">
                COMMIT FREQUENCY MATRIX // 2025–2026
              </span>
            </div>
            <div className="flex items-center gap-2.5 font-mono text-xs text-[#414447] font-bold">
              <span>LESS</span>
              <span className="w-3.5 h-3.5 rounded-[4px] bg-[#EBF2DF] border border-[#C8DBAE]" />
              <span className="w-3.5 h-3.5 rounded-[4px] bg-[#DAE7C7]" />
              <span className="w-3.5 h-3.5 rounded-[4px] bg-[#9fc485]" />
              <span className="w-3.5 h-3.5 rounded-[4px] bg-[#428254]" />
              <span className="w-3.5 h-3.5 rounded-[4px] bg-[#08482D]" />
              <span>MORE</span>
            </div>
          </div>

          {/* Grid of contribution squares */}
          <div className="overflow-x-auto pb-4">
            <div className="grid grid-flow-col grid-rows-7 gap-2 min-w-[700px]">
              {heatmapDays.map((d, i) => {
                const colors = [
                  'bg-[#EBF2DF] border border-[#C8DBAE]/70',
                  'bg-[#DAE7C7]',
                  'bg-[#9fc485]',
                  'bg-[#428254]',
                  'bg-[#08482D]',
                ]
                const colorClass = colors[Math.min(d.level, 4)]
                return (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.35, zIndex: 10 }}
                    title={`${d.date}: ${d.count} contributions`}
                    className={`w-4 h-4 rounded-[4px] ${colorClass} transition-colors cursor-pointer`}
                  />
                )
              })}
            </div>
          </div>

          <div className="pt-5 border-t border-[#08482D]/15 flex justify-between font-mono text-xs text-[#414447] font-bold">
            <span>140 CONSECUTIVE ACTIVE DAYS MONITORED</span>
            <span>DATA SOURCE: GITHUB EVENT PIPELINE</span>
          </div>
        </motion.div>

        {/* Public Repositories List with Language Filters */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#08482D]/15 mb-8 gap-4">
            <h3 className="font-display text-lg font-black text-[#0d120e] uppercase flex items-center gap-3">
              <FolderGit2 className="w-5 h-5 text-[#08482D]" />
              INSPECTED PUBLIC REPOSITORIES
            </h3>

            {/* Language filter pills */}
            <div className="flex flex-wrap gap-2 font-mono text-xs">
              {availableLangs.map((lang) => (
                <motion.button
                  key={lang}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFilterLang(lang)}
                  className={`px-4 py-2 rounded-full border transition-all cursor-pointer font-bold ${
                    filterLang === lang
                      ? 'bg-[#08482D] text-[#F5F8EF] border-[#08482D] shadow-sm'
                      : 'bg-white text-[#414447] border-[#08482D]/15 hover:text-[#0d120e]'
                  }`}
                >
                  {lang}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Repo cards grid with stagger animation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <AnimatePresence mode="popLayout">
              {filteredRepos.map((repo, idx) => (
                <motion.a
                  key={repo.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-7 rounded-3xl reelmark-card flex flex-col justify-between group block"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-3.5">
                      <h4 className="font-display text-base font-black text-[#0d120e] group-hover:text-[#08482D] transition-colors flex items-center gap-2.5">
                        <span>{repo.name}</span>
                        {repo.fork && (
                          <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#EBF2DF] text-[#08482D] border border-[#BED4A0] font-mono font-bold">
                            FORK
                          </span>
                        )}
                      </h4>
                      <ExternalLink className="w-4 h-4 text-[#414447] group-hover:text-[#08482D] transition-colors shrink-0" />
                    </div>

                    <p className="text-sm text-[#414447] line-clamp-2 leading-relaxed mb-5 font-sans font-medium">
                      {repo.description || 'Production codebase repository.'}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-[#08482D]/15 font-mono text-xs font-bold">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#08482D]" />
                      <span className="text-[#0d120e]">{repo.language || 'Multi-stack'}</span>
                    </div>

                    <div className="flex items-center gap-4 text-[#414447]">
                      <span className="flex items-center gap-1.5">
                        <Star className="w-4 h-4" />
                        {repo.stars}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <GitFork className="w-4 h-4" />
                        {repo.forks}
                      </span>
                    </div>
                  </div>
                </motion.a>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Aggregated Language Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 p-8 sm:p-10 rounded-3xl bg-white border-2 border-[#08482D]/15"
        >
          <span className="font-mono text-xs text-[#414447] uppercase tracking-wider block mb-4 font-extrabold">
            CODEBASE LANGUAGE PROPORTION
          </span>

          <div className="flex h-4 w-full bg-[#EBF2DF] rounded-full overflow-hidden mb-6">
            {languages.map((l, idx) => {
              const bgColors = ['bg-[#08482D]', 'bg-[#106b43]', 'bg-[#428254]', 'bg-[#7ba987]', 'bg-[#b6d1be]']
              return (
                <motion.div
                  key={l.name}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${l.percent}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.1, ease: 'easeOut' }}
                  className={`${bgColors[idx % bgColors.length]} h-full`}
                  title={`${l.name}: ${l.percent}%`}
                />
              )
            })}
          </div>

          <div className="flex flex-wrap gap-5 font-mono text-sm">
            {languages.map((l) => (
              <div key={l.name} className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#08482D]" />
                <span className="text-[#0d120e] font-bold">{l.name}</span>
                <span className="text-[#414447] font-semibold">{l.percent}%</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
