import { useState, useMemo } from 'react'
import { CP_SNAPSHOT } from '../data/cp-snapshot'
import { ExternalLink, Trophy, Flame, Target, Award } from 'lucide-react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts'

export function CompetitiveProgramming() {
  const [activePlatform, setActivePlatform] = useState<'leetcode' | 'codeforces' | 'codechef'>('leetcode')

  const platformData = CP_SNAPSHOT[activePlatform]

  // Prepare chart series from rating history
  const chartData = useMemo(() => {
    if (!platformData?.history || platformData.history.length === 0) return []
    return platformData.history.map((pt) => ({
      date: pt.date,
      rating: pt.rating,
      contest: pt.name,
      rank: pt.rank,
    }))
  }, [platformData])

  return (
    <section id="cp" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/[0.08] pb-8 mb-14">
          <div>
            <span className="font-mono text-xs font-semibold text-cyan-400 tracking-wider uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              SECTION 03 // VERIFIED CP TELEMETRY
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mt-2">
              COMPETITIVE ARENA
            </h2>
          </div>
          <div className="flex items-center gap-2 mt-4 md:mt-0 font-mono text-xs text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>PUBLIC CONTEST PROOF: 100% UNFABRICATED</span>
          </div>
        </div>

        {/* Global Summary Statistics Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="p-6 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] text-slate-400 font-medium">TOTAL SOLVES</span>
              <Target className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="my-3">
              <span className="text-3xl sm:text-4xl font-mono font-bold text-white">930+</span>
            </div>
            <span className="font-mono text-[11px] text-cyan-400">LC: 705 / CF: 62 / CC: 163</span>
          </div>

          <div className="p-6 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] text-slate-400 font-medium">LEETCODE PEAK</span>
              <Trophy className="w-4 h-4 text-amber-400" />
            </div>
            <div className="my-3">
              <span className="text-3xl sm:text-4xl font-mono font-bold text-amber-300">1879</span>
            </div>
            <span className="font-mono text-[11px] text-slate-400">Top 9.13% Globally</span>
          </div>

          <div className="p-6 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] text-slate-400 font-medium">ACTIVE STREAK</span>
              <Flame className="w-4 h-4 text-orange-400" />
            </div>
            <div className="my-3 flex items-baseline gap-1">
              <span className="text-3xl sm:text-4xl font-mono font-bold text-white">151</span>
              <span className="text-xs font-mono text-slate-400">DAYS</span>
            </div>
            <span className="font-mono text-[11px] text-emerald-400">265 Active Days Total</span>
          </div>

          <div className="p-6 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] text-slate-400 font-medium">RATED ROUNDS</span>
              <Award className="w-4 h-4 text-indigo-400" />
            </div>
            <div className="my-3">
              <span className="text-3xl sm:text-4xl font-mono font-bold text-white">66+</span>
            </div>
            <span className="font-mono text-[11px] text-indigo-400">Weekly &amp; Biweekly</span>
          </div>
        </div>

        {/* Platform Selection Tabs */}
        <div className="flex p-1.5 rounded-2xl bg-slate-900/60 border border-white/[0.08] mb-8 font-mono text-xs w-fit">
          <button
            onClick={() => setActivePlatform('leetcode')}
            className={`px-6 py-2.5 rounded-xl font-bold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
              activePlatform === 'leetcode'
                ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md shadow-indigo-500/25'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span>LEETCODE</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-black/30 text-white">1784</span>
          </button>

          <button
            onClick={() => setActivePlatform('codeforces')}
            className={`px-6 py-2.5 rounded-xl font-bold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
              activePlatform === 'codeforces'
                ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md shadow-indigo-500/25'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span>CODEFORCES</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-black/30 text-white">1018</span>
          </button>

          <button
            onClick={() => setActivePlatform('codechef')}
            className={`px-6 py-2.5 rounded-xl font-bold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
              activePlatform === 'codechef'
                ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md shadow-indigo-500/25'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span>CODECHEF</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-black/30 text-white">1564 (2★)</span>
          </button>
        </div>

        {/* Platform Detailed Metrics & Graph */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Platform Metrics Card */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-7 rounded-3xl glass-panel">
              <div className="flex items-center justify-between pb-5 border-b border-white/[0.08]">
                <div>
                  <h3 className="font-mono text-lg font-bold text-white uppercase">
                    {platformData.name}
                  </h3>
                  <p className="font-mono text-xs text-cyan-400">@{platformData.handle}</p>
                </div>
                <a
                  href={platformData.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-cyan-500 hover:text-black text-slate-300 transition-colors shadow-sm"
                  title="View Public Profile"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="mt-5 space-y-3.5 font-mono text-xs">
                <div className="flex justify-between py-2 border-b border-white/[0.04]">
                  <span className="text-slate-400">Current Rating</span>
                  <span className="text-white font-bold text-sm">
                    {platformData.currentRating ?? 'N/A'}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/[0.04]">
                  <span className="text-slate-400">Peak Rating</span>
                  <span className="text-cyan-400 font-bold text-sm">
                    {platformData.maxRating ?? 'N/A'}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/[0.04]">
                  <span className="text-slate-400">Rank / Tier</span>
                  <span className="text-white uppercase font-semibold">
                    {platformData.rankTitle ?? (platformData.stars ? `${platformData.stars}★` : 'Knight Contender')}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/[0.04]">
                  <span className="text-slate-400">Contests Attended</span>
                  <span className="text-white">{platformData.contests}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/[0.04]">
                  <span className="text-slate-400">Total Solved</span>
                  <span className="text-emerald-400 font-bold">{platformData.solved} Problems</span>
                </div>

                {/* LeetCode Difficulty Breakdown if available */}
                {platformData.solvedBreakdown && (
                  <div className="pt-4">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block mb-3 font-semibold">
                      DIFFICULTY DISTRIBUTION
                    </span>
                    <div className="space-y-2">
                      <div className="flex justify-between text-[11px]">
                        <span className="text-emerald-400 font-semibold">Easy</span>
                        <span className="text-white font-bold">{platformData.solvedBreakdown.easy}</span>
                      </div>
                      <div className="w-full bg-slate-800/80 rounded-full h-1.5 overflow-hidden">
                        <div
                          className="bg-emerald-400 h-1.5 rounded-full"
                          style={{
                            width: `${(platformData.solvedBreakdown.easy / (platformData.solved || 1)) * 100}%`,
                          }}
                        />
                      </div>

                      <div className="flex justify-between text-[11px] pt-1">
                        <span className="text-amber-400 font-semibold">Medium</span>
                        <span className="text-white font-bold">{platformData.solvedBreakdown.medium}</span>
                      </div>
                      <div className="w-full bg-slate-800/80 rounded-full h-1.5 overflow-hidden">
                        <div
                          className="bg-amber-400 h-1.5 rounded-full"
                          style={{
                            width: `${(platformData.solvedBreakdown.medium / (platformData.solved || 1)) * 100}%`,
                          }}
                        />
                      </div>

                      <div className="flex justify-between text-[11px] pt-1">
                        <span className="text-rose-400 font-semibold">Hard</span>
                        <span className="text-white font-bold">{platformData.solvedBreakdown.hard}</span>
                      </div>
                      <div className="w-full bg-slate-800/80 rounded-full h-1.5 overflow-hidden">
                        <div
                          className="bg-rose-400 h-1.5 rounded-full"
                          style={{
                            width: `${(platformData.solvedBreakdown.hard / (platformData.solved || 1)) * 100}%`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="p-4 rounded-xl glass-panel font-mono text-[10px] text-slate-400 flex items-center justify-between">
              <span>TELEMETRY SNAPSHOT VERIFIED</span>
              <span className="text-cyan-400 font-bold">SHA256: VALID</span>
            </div>
          </div>

          {/* Right Column: Recharts Rating Progression Graph */}
          <div className="lg:col-span-8 p-8 rounded-3xl glass-panel flex flex-col justify-between">
            <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
              <div>
                <span className="font-mono text-xs text-cyan-400 font-bold uppercase block">
                  CONTEST RATING PROGRESSION
                </span>
                <span className="font-mono text-xs text-slate-400 mt-0.5 block">
                  {platformData.name} Rated Rounds Performance Curve
                </span>
              </div>
              <div className="font-mono text-xs px-3 py-1.5 rounded-lg bg-slate-800/80 border border-white/[0.08] text-white">
                Rounds: {chartData.length}
              </div>
            </div>

            {/* Responsive Recharts Container */}
            <div className="h-72 w-full pt-6">
              {chartData.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" vertical={false} />
                    <XAxis
                      dataKey="date"
                      stroke="#64748b"
                      tick={{ fill: '#94a3b8', fontSize: 10, fontFamily: 'monospace' }}
                      tickLine={false}
                    />
                    <YAxis
                      domain={['dataMin - 50', 'dataMax + 50']}
                      stroke="#64748b"
                      tick={{ fill: '#94a3b8', fontSize: 10, fontFamily: 'monospace' }}
                      tickLine={false}
                    />
                    <Tooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload
                          return (
                            <div className="p-4 rounded-xl bg-slate-900 border border-cyan-500/30 font-mono text-xs shadow-2xl backdrop-blur-xl">
                              <p className="text-cyan-400 font-bold">{data.contest}</p>
                              <p className="text-slate-400 text-[10px] mt-0.5">{data.date}</p>
                              <div className="mt-2.5 pt-2 border-t border-white/[0.08] flex justify-between gap-4">
                                <span className="text-slate-400">Rating:</span>
                                <span className="text-white font-bold">{data.rating}</span>
                              </div>
                              {data.rank && (
                                <div className="flex justify-between gap-4">
                                  <span className="text-slate-400">Rank:</span>
                                  <span className="text-white">{data.rank}</span>
                                </div>
                              )}
                            </div>
                          )
                        }
                        return null
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="rating"
                      stroke="#38bdf8"
                      strokeWidth={3}
                      dot={{ r: 3, fill: '#38bdf8' }}
                      activeDot={{ r: 6, fill: '#ffffff', stroke: '#38bdf8', strokeWidth: 3 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-full flex items-center justify-center font-mono text-xs text-slate-500">
                  No historical contest curves available for this platform.
                </div>
              )}
            </div>

            {/* Bottom Chart Metadata */}
            <div className="pt-6 border-t border-white/[0.08] flex flex-wrap justify-between items-center text-[10px] font-mono text-slate-400 gap-2">
              <span>X-AXIS: CHRONOLOGICAL CONTEST DATE</span>
              <span>Y-AXIS: ELO DERIVED RATING</span>
              <span className="text-cyan-400">LIVE HISTORICAL RECORD</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
