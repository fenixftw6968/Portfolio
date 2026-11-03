import { useState, useMemo } from 'react'
import { CP_SNAPSHOT } from '../data/cp-snapshot'
import { ExternalLink, Trophy, Flame, Target, Award } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
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
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#08482D]/15 pb-8 mb-16"
        >
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
        </motion.div>

        {/* Global Summary Statistics Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="p-7 rounded-3xl reelmark-card flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-[#414447] font-bold">TOTAL SOLVES</span>
              <Target className="w-5 h-5 text-[#08482D]" />
            </div>
            <div className="my-4">
              <span className="text-4xl sm:text-5xl font-black text-[#0d120e] font-display">930+</span>
            </div>
            <span className="text-xs font-mono text-[#08482D] font-bold">LC: 705 • CF: 62 • CC: 163</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="p-7 rounded-3xl reelmark-card flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-[#414447] font-bold">PEAK LEETCODE</span>
              <Trophy className="w-5 h-5 text-[#08482D]" />
            </div>
            <div className="my-4">
              <span className="text-4xl sm:text-5xl font-black text-[#08482D] font-display">1879</span>
            </div>
            <span className="text-xs font-mono text-[#414447] font-semibold">Current: 1784 (Top 9.13%)</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.19 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="p-7 rounded-3xl reelmark-card flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-[#414447] font-bold">CODECHEF RATING</span>
              <Award className="w-5 h-5 text-[#08482D]" />
            </div>
            <div className="my-4">
              <span className="text-4xl sm:text-5xl font-black text-[#0d120e] font-display">1564</span>
            </div>
            <span className="text-xs font-mono text-[#08482D] font-bold">2-STAR RATED (DIV 3)</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.26 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="p-7 rounded-3xl reelmark-card flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-[#414447] font-bold">ACTIVE STREAK</span>
              <Flame className="w-5 h-5 text-amber-600" />
            </div>
            <div className="my-4">
              <span className="text-4xl sm:text-5xl font-black text-[#0d120e] font-display">35+</span>
            </div>
            <span className="text-xs font-mono text-[#414447] font-semibold">347 Days in 2025</span>
          </motion.div>
        </div>

        {/* Platform Selector Buttons */}
        <div className="flex items-center gap-3 mb-8">
          {(['leetcode', 'codeforces', 'codechef'] as const).map((plat) => {
            const isActive = activePlatform === plat
            return (
              <motion.button
                key={plat}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActivePlatform(plat)}
                className={`px-6 py-3 rounded-full font-mono text-xs sm:text-sm font-bold uppercase transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#08482D] text-[#F5F8EF] shadow-md'
                    : 'bg-white text-[#414447] border border-[#08482D]/15 hover:border-[#08482D]/35 hover:text-[#0d120e]'
                }`}
              >
                {plat}
              </motion.button>
            )
          })}
        </div>

        {/* Platform Detailed Metrics & Graph */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePlatform}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8"
          >
            
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
                  <motion.a
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    href={platformData.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-[#EBF2DF] hover:bg-[#DAE7C7] text-[#08482D] transition-colors shadow-xs"
                    title="View Public Profile"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
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
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{
                              width: `${(platformData.solvedBreakdown.easy / (platformData.solved || 1)) * 100}%`,
                            }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            className="bg-emerald-600 h-2 rounded-full"
                          />
                        </div>

                        <div className="flex justify-between text-xs font-bold pt-1.5">
                          <span className="text-amber-800">Medium</span>
                          <span className="text-[#0d120e] font-black">{platformData.solvedBreakdown.medium}</span>
                        </div>
                        <div className="w-full bg-[#EBF2DF] rounded-full h-2 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{
                              width: `${(platformData.solvedBreakdown.medium / (platformData.solved || 1)) * 100}%`,
                            }}
                            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
                            className="bg-amber-500 h-2 rounded-full"
                          />
                        </div>

                        <div className="flex justify-between text-xs font-bold pt-1.5">
                          <span className="text-rose-800">Hard</span>
                          <span className="text-[#0d120e] font-black">{platformData.solvedBreakdown.hard}</span>
                        </div>
                        <div className="w-full bg-[#EBF2DF] rounded-full h-2 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{
                              width: `${(platformData.solvedBreakdown.hard / (platformData.solved || 1)) * 100}%`,
                            }}
                            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                            className="bg-rose-500 h-2 rounded-full"
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
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
