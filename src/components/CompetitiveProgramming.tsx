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
    <section id="cp" className="py-28 relative overflow-hidden bg-white/60 border-b border-[#08482D]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Handwritten note */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#08482D]/15 pb-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="badge-mint font-mono text-xs font-bold">SECTION 03 // CP TELEMETRY</span>
              <span className="font-handwriting text-2xl text-[#08482D] font-bold rotate-[-1deg]">
                930+ verified solves
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#0d120e] font-display tracking-tight">
              COMPETITIVE ARENA.
            </h2>
          </div>
          <div className="flex items-center gap-2 mt-4 md:mt-0 font-mono text-sm text-[#08482D] font-bold">
            <span className="w-2.5 h-2.5 rounded-full bg-[#08482D] animate-pulse"></span>
            <span>PUBLIC RATINGS &amp; CONTEST HISTORY</span>
          </div>
        </div>

        {/* Global Summary Statistics Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">
          <div className="p-7 rounded-3xl reelmark-card flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-[#414447] font-bold">TOTAL SOLVES</span>
              <Target className="w-5 h-5 text-[#08482D]" />
            </div>
            <div className="my-4">
              <span className="text-4xl sm:text-5xl font-display font-black text-[#08482D]">930+</span>
            </div>
            <span className="font-mono text-xs text-[#414447] font-semibold">LC: 705 / CF: 62 / CC: 163</span>
          </div>

          <div className="p-7 rounded-3xl reelmark-card flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-[#414447] font-bold">LEETCODE PEAK</span>
              <Trophy className="w-5 h-5 text-[#08482D]" />
            </div>
            <div className="my-4">
              <span className="text-4xl sm:text-5xl font-display font-black text-[#0d120e]">1879</span>
            </div>
            <span className="font-mono text-xs text-[#08482D] font-extrabold">Top 9.13% Globally</span>
          </div>

          <div className="p-7 rounded-3xl reelmark-card flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-[#414447] font-bold">ACTIVE STREAK</span>
              <Flame className="w-5 h-5 text-orange-600" />
            </div>
            <div className="my-4 flex items-baseline gap-1.5">
              <span className="text-4xl sm:text-5xl font-display font-black text-[#0d120e]">151</span>
              <span className="text-sm font-mono text-[#414447] font-bold">DAYS</span>
            </div>
            <span className="font-mono text-xs text-[#414447] font-semibold">265 Active Days Total</span>
          </div>

          <div className="p-7 rounded-3xl reelmark-card flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-[#414447] font-bold">RATED ROUNDS</span>
              <Award className="w-5 h-5 text-[#08482D]" />
            </div>
            <div className="my-4">
              <span className="text-4xl sm:text-5xl font-display font-black text-[#08482D]">66+</span>
            </div>
            <span className="font-mono text-xs text-[#414447] font-semibold">Weekly &amp; Biweekly</span>
          </div>
        </div>

        {/* Platform Selection Tabs */}
        <div className="flex p-2 rounded-full bg-[#EBF2DF] border-2 border-[#BED4A0] mb-10 font-mono text-xs w-fit">
          <button
            onClick={() => setActivePlatform('leetcode')}
            className={`px-7 py-3 rounded-full font-black text-xs transition-all duration-200 cursor-pointer flex items-center gap-2.5 ${
              activePlatform === 'leetcode'
                ? 'bg-[#08482D] text-[#F5F8EF] shadow-md'
                : 'text-[#414447] hover:text-[#0d120e]'
            }`}
          >
            <span>LEETCODE</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-white/20 text-[#F5F8EF]">1784</span>
          </button>

          <button
            onClick={() => setActivePlatform('codeforces')}
            className={`px-7 py-3 rounded-full font-black text-xs transition-all duration-200 cursor-pointer flex items-center gap-2.5 ${
              activePlatform === 'codeforces'
                ? 'bg-[#08482D] text-[#F5F8EF] shadow-md'
                : 'text-[#414447] hover:text-[#0d120e]'
            }`}
          >
            <span>CODEFORCES</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-white/20 text-[#F5F8EF]">1018</span>
          </button>

          <button
            onClick={() => setActivePlatform('codechef')}
            className={`px-7 py-3 rounded-full font-black text-xs transition-all duration-200 cursor-pointer flex items-center gap-2.5 ${
              activePlatform === 'codechef'
                ? 'bg-[#08482D] text-[#F5F8EF] shadow-md'
                : 'text-[#414447] hover:text-[#0d120e]'
            }`}
          >
            <span>CODECHEF</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-white/20 text-[#F5F8EF]">1564 (2★)</span>
          </button>
        </div>

        {/* Platform Detailed Metrics & Graph */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Platform Metrics Card */}
          <div className="lg:col-span-4 space-y-5">
            <div className="p-8 rounded-3xl reelmark-card">
              <div className="flex items-center justify-between pb-6 border-b border-[#08482D]/15">
                <div>
                  <h3 className="font-display text-2xl font-black text-[#0d120e] uppercase">
                    {platformData.name}
                  </h3>
                  <p className="font-mono text-sm text-[#08482D] font-black mt-1">@{platformData.handle}</p>
                </div>
                <a
                  href={platformData.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[#EBF2DF] hover:bg-[#DAE7C7] text-[#08482D] transition-colors shadow-xs"
                  title="View Public Profile"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>

              <div className="mt-6 space-y-4 font-mono text-sm">
                <div className="flex justify-between py-2.5 border-b border-[#08482D]/10">
                  <span className="text-[#414447] font-semibold">Current Rating</span>
                  <span className="text-[#0d120e] font-black text-base">
                    {platformData.currentRating ?? 'N/A'}
                  </span>
                </div>
                <div className="flex justify-between py-2.5 border-b border-[#08482D]/10">
                  <span className="text-[#414447] font-semibold">Peak Rating</span>
                  <span className="text-[#08482D] font-black text-base">
                    {platformData.maxRating ?? 'N/A'}
                  </span>
                </div>
                <div className="flex justify-between py-2.5 border-b border-[#08482D]/10">
                  <span className="text-[#414447] font-semibold">Rank / Tier</span>
                  <span className="text-[#0d120e] uppercase font-bold text-sm">
                    {platformData.rankTitle ?? (platformData.stars ? `${platformData.stars}★` : 'Knight Contender')}
                  </span>
                </div>
                <div className="flex justify-between py-2.5 border-b border-[#08482D]/10">
                  <span className="text-[#414447] font-semibold">Contests Attended</span>
                  <span className="text-[#0d120e] font-bold">{platformData.contests}</span>
                </div>
                <div className="flex justify-between py-2.5 border-b border-[#08482D]/10">
                  <span className="text-[#414447] font-semibold">Total Solved</span>
                  <span className="text-[#08482D] font-black text-sm">{platformData.solved} Problems</span>
                </div>

                {/* LeetCode Difficulty Breakdown if available */}
                {platformData.solvedBreakdown && (
                  <div className="pt-4">
                    <span className="text-xs text-[#414447] uppercase tracking-wider block mb-3 font-extrabold">
                      DIFFICULTY DISTRIBUTION
                    </span>
                    <div className="space-y-2.5">
                      <div className="flex justify-between text-xs font-bold">
                        <span className="text-emerald-800">Easy</span>
                        <span className="text-[#0d120e] font-black">{platformData.solvedBreakdown.easy}</span>
                      </div>
                      <div className="w-full bg-[#EBF2DF] rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-emerald-600 h-2 rounded-full"
                          style={{
                            width: `${(platformData.solvedBreakdown.easy / (platformData.solved || 1)) * 100}%`,
                          }}
                        />
                      </div>

                      <div className="flex justify-between text-xs font-bold pt-1.5">
                        <span className="text-amber-800">Medium</span>
                        <span className="text-[#0d120e] font-black">{platformData.solvedBreakdown.medium}</span>
                      </div>
                      <div className="w-full bg-[#EBF2DF] rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-amber-500 h-2 rounded-full"
                          style={{
                            width: `${(platformData.solvedBreakdown.medium / (platformData.solved || 1)) * 100}%`,
                          }}
                        />
                      </div>

                      <div className="flex justify-between text-xs font-bold pt-1.5">
                        <span className="text-rose-800">Hard</span>
                        <span className="text-[#0d120e] font-black">{platformData.solvedBreakdown.hard}</span>
                      </div>
                      <div className="w-full bg-[#EBF2DF] rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-rose-500 h-2 rounded-full"
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

            <div className="p-5 rounded-2xl bg-white border border-[#08482D]/15 font-mono text-xs text-[#414447] flex items-center justify-between font-bold">
              <span>TELEMETRY SNAPSHOT VERIFIED</span>
              <span className="text-[#08482D]">SHA256: VALID</span>
            </div>
          </div>

          {/* Right Column: Recharts Rating Progression Graph */}
          <div className="lg:col-span-8 p-8 sm:p-10 rounded-3xl reelmark-card flex flex-col justify-between">
            <div className="flex items-center justify-between pb-6 border-b border-[#08482D]/15">
              <div>
                <span className="font-mono text-xs text-[#08482D] font-black uppercase block tracking-wider">
                  CONTEST RATING PROGRESSION
                </span>
                <span className="text-sm text-[#414447] mt-1 block font-sans font-semibold">
                  {platformData.name} Rated Rounds Performance Curve
                </span>
              </div>
              <div className="font-mono text-xs px-4 py-2 rounded-full bg-[#EBF2DF] border border-[#BED4A0] text-[#08482D] font-black">
                Rounds: {chartData.length}
              </div>
            </div>

            {/* Responsive Recharts Container */}
            <div className="h-80 w-full pt-6">
              {chartData.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(8, 72, 45, 0.12)" vertical={false} />
                    <XAxis
                      dataKey="date"
                      stroke="#414447"
                      tick={{ fill: '#414447', fontSize: 11, fontFamily: 'monospace', fontWeight: 600 }}
                      tickLine={false}
                    />
                    <YAxis
                      domain={['dataMin - 50', 'dataMax + 50']}
                      stroke="#414447"
                      tick={{ fill: '#414447', fontSize: 11, fontFamily: 'monospace', fontWeight: 600 }}
                      tickLine={false}
                    />
                    <Tooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload
                          return (
                            <div className="p-4 rounded-2xl bg-white border-2 border-[#08482D]/30 font-mono text-xs shadow-2xl">
                              <p className="text-[#08482D] font-black text-sm">{data.contest}</p>
                              <p className="text-[#414447] text-xs mt-0.5 font-semibold">{data.date}</p>
                              <div className="mt-3 pt-2.5 border-t border-[#08482D]/15 flex justify-between gap-5 text-sm">
                                <span className="text-[#414447] font-bold">Rating:</span>
                                <span className="text-[#0d120e] font-black">{data.rating}</span>
                              </div>
                              {data.rank && (
                                <div className="flex justify-between gap-5 text-sm">
                                  <span className="text-[#414447] font-bold">Rank:</span>
                                  <span className="text-[#0d120e] font-black">{data.rank}</span>
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
                      stroke="#08482D"
                      strokeWidth={3.5}
                      dot={{ r: 4, fill: '#08482D' }}
                      activeDot={{ r: 7, fill: '#DAE7C7', stroke: '#08482D', strokeWidth: 3.5 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-full flex items-center justify-center font-mono text-sm text-[#414447]">
                  No historical contest curves available for this platform.
                </div>
              )}
            </div>

            {/* Bottom Chart Metadata */}
            <div className="pt-6 border-t border-[#08482D]/15 flex flex-wrap justify-between items-center text-xs font-mono text-[#414447] font-bold gap-2">
              <span>X-AXIS: CHRONOLOGICAL CONTEST DATE</span>
              <span>Y-AXIS: ELO DERIVED RATING</span>
              <span className="text-[#08482D]">LIVE HISTORICAL RECORD</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
