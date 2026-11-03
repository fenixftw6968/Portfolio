import { useMemo, useState } from 'react'
import { GITHUB_SNAPSHOT } from '../data/github-snapshot'
import { Star, GitFork, ExternalLink, Calendar, FolderGit2 } from 'lucide-react'

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
    <section id="github" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/[0.08] pb-8 mb-14">
          <div>
            <span className="font-mono text-xs font-semibold text-cyan-400 tracking-wider uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              SECTION 04 // OPEN SOURCE TELEMETRY
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mt-2">
              ENGINEERING FOOTPRINT
            </h2>
          </div>
          <a
            href={user.htmlUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 mt-4 md:mt-0 font-mono text-xs text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <span>GITHUB @{user.login}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* GitHub Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="p-6 rounded-2xl glass-panel glass-panel-hover">
            <span className="font-mono text-[11px] text-slate-400 block">PUBLIC REPOS</span>
            <span className="text-3xl font-mono font-bold text-white mt-1 block">
              {user.publicRepos}
            </span>
            <span className="text-[11px] font-mono text-cyan-400">Active Codebases</span>
          </div>

          <div className="p-6 rounded-2xl glass-panel glass-panel-hover">
            <span className="font-mono text-[11px] text-slate-400 block">TOTAL COMMITS</span>
            <span className="text-3xl font-mono font-bold text-gradient-emerald mt-1 block">
              {contributions.total}
            </span>
            <span className="text-[11px] font-mono text-slate-400">In Last 12 Months</span>
          </div>

          <div className="p-6 rounded-2xl glass-panel glass-panel-hover">
            <span className="font-mono text-[11px] text-slate-400 block">LONGEST STREAK</span>
            <span className="text-3xl font-mono font-bold text-white mt-1 block">
              {contributions.longestStreak} <span className="text-xs font-normal text-slate-400">DAYS</span>
            </span>
            <span className="text-[11px] font-mono text-indigo-400">{contributions.activeDays} Active Days</span>
          </div>

          <div className="p-6 rounded-2xl glass-panel glass-panel-hover">
            <span className="font-mono text-[11px] text-slate-400 block">FOLLOWERS</span>
            <span className="text-3xl font-mono font-bold text-white mt-1 block">
              {user.followers}
            </span>
            <span className="text-[11px] font-mono text-slate-400">Following {user.following}</span>
          </div>
        </div>

        {/* Contribution Heatmap Container */}
        <div className="p-8 rounded-3xl glass-panel mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/[0.08] gap-2 mb-6">
            <div className="flex items-center gap-2.5">
              <Calendar className="w-4 h-4 text-cyan-400" />
              <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                COMMIT FREQUENCY MATRIX // 2025–2026
              </span>
            </div>
            <div className="flex items-center gap-2 font-mono text-[10px] text-slate-400">
              <span>LESS</span>
              <span className="w-2.5 h-2.5 rounded-[2px] bg-slate-800 border border-white/[0.05]" />
              <span className="w-2.5 h-2.5 rounded-[2px] bg-indigo-950" />
              <span className="w-2.5 h-2.5 rounded-[2px] bg-indigo-700" />
              <span className="w-2.5 h-2.5 rounded-[2px] bg-cyan-600" />
              <span className="w-2.5 h-2.5 rounded-[2px] bg-cyan-400" />
              <span>MORE</span>
            </div>
          </div>

          {/* Grid of contribution squares */}
          <div className="overflow-x-auto pb-3">
            <div className="grid grid-flow-col grid-rows-7 gap-1.5 min-w-[700px]">
              {heatmapDays.map((d, i) => {
                const colors = [
                  'bg-slate-900 border border-white/[0.06]',
                  'bg-indigo-950',
                  'bg-indigo-700',
                  'bg-cyan-600',
                  'bg-cyan-400 shadow-sm shadow-cyan-400/40',
                ]
                const colorClass = colors[Math.min(d.level, 4)]
                return (
                  <div
                    key={i}
                    title={`${d.date}: ${d.count} contributions`}
                    className={`w-3.5 h-3.5 rounded-[3px] ${colorClass} transition-transform hover:scale-125 hover:z-10`}
                  />
                )
              })}
            </div>
          </div>

          <div className="pt-4 border-t border-white/[0.08] flex justify-between font-mono text-[10px] text-slate-500">
            <span>140 CONSECUTIVE ACTIVE DAYS MONITORED</span>
            <span>DATA SOURCE: GITHUB EVENT PIPELINE</span>
          </div>
        </div>

        {/* Public Repositories List with Language Filters */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/[0.08] mb-8 gap-4">
            <h3 className="font-mono text-sm font-bold text-white uppercase flex items-center gap-2.5">
              <FolderGit2 className="w-4 h-4 text-cyan-400" />
              INSPECTED PUBLIC REPOSITORIES
            </h3>

            {/* Language filter pills */}
            <div className="flex flex-wrap gap-1.5 font-mono text-xs">
              {availableLangs.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setFilterLang(lang)}
                  className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                    filterLang === lang
                      ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white border-transparent shadow-md shadow-indigo-500/20'
                      : 'bg-slate-900/60 text-slate-400 border-white/[0.08] hover:text-white'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          {/* Repo cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredRepos.map((repo) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h4 className="font-mono text-sm font-bold text-white group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                      <span>{repo.name}</span>
                      {repo.fork && (
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/[0.06] text-slate-400 border border-white/[0.08]">
                          FORK
                        </span>
                      )}
                    </h4>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors shrink-0" />
                  </div>

                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4 font-sans">
                    {repo.description || 'Production codebase repository.'}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/[0.06] font-mono text-[11px]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    <span className="text-slate-300">{repo.language || 'Multi-stack'}</span>
                  </div>

                  <div className="flex items-center gap-3 text-slate-400">
                    <span className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5" />
                      {repo.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3.5 h-3.5" />
                      {repo.forks}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Aggregated Language Bar */}
        <div className="mt-12 p-8 rounded-3xl glass-panel">
          <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block mb-4 font-semibold">
            CODEBASE LANGUAGE PROPORTION
          </span>

          <div className="flex h-3 w-full bg-slate-900 rounded-full overflow-hidden mb-5">
            {languages.map((l, idx) => {
              const bgColors = ['bg-cyan-400', 'bg-indigo-500', 'bg-purple-500', 'bg-emerald-400', 'bg-amber-400']
              return (
                <div
                  key={l.name}
                  style={{ width: `${l.percent}%` }}
                  className={`${bgColors[idx % bgColors.length]} h-full`}
                  title={`${l.name}: ${l.percent}%`}
                />
              )
            })}
          </div>

          <div className="flex flex-wrap gap-4 font-mono text-xs">
            {languages.map((l) => (
              <div key={l.name} className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span className="text-white font-medium">{l.name}</span>
                <span className="text-slate-400">{l.percent}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
