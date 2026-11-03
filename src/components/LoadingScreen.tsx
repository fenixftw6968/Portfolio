import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

interface LoadingScreenProps {
  onComplete: () => void
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setIsDone(true)
            setTimeout(onComplete, 800)
          }, 200)
          return 100
        }
        // Random increment for realistic shader/asset warmup feel
        const diff = Math.floor(Math.random() * 12) + 4
        return Math.min(prev + diff, 100)
      })
    }, 45)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -40,
            filter: 'blur(10px)',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[9999] flex flex-col justify-between p-8 sm:p-14 bg-[#080B09] text-[#E0E7DC] select-none"
        >
          {/* Top Metadata */}
          <div className="flex items-center justify-between font-mono text-xs text-[#8A9684] tracking-widest uppercase">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#34D399] animate-ping" />
              <span>EXPERIENCE ENGINE // V3.2</span>
            </div>
            <span>PUNE, IN [18.52° N, 73.85° E]</span>
          </div>

          {/* Center Cinematic Monogram */}
          <div className="flex flex-col items-center justify-center my-auto">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative text-center"
            >
              <h1 className="text-7xl sm:text-9xl font-black font-display tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#E2E8F0] to-[#64748B]">
                KARTIK
              </h1>
              <p className="font-mono text-xs sm:text-sm tracking-[0.35em] text-[#34D399] uppercase mt-2">
                ACTIVE CREATIVE &amp; SYSTEMS ARCHITECT
              </p>
            </motion.div>
          </div>

          {/* Bottom Telemetry & Progress */}
          <div className="w-full max-w-xl mx-auto space-y-3 font-mono">
            <div className="flex justify-between items-baseline text-xs text-[#8A9684]">
              <span className="flex items-center gap-2">
                <span className="inline-block animate-spin text-[#34D399]">⟡</span>
                <span>WARMING SHADERS &amp; 3D ENVIRONMENT</span>
              </span>
              <span className="text-sm font-bold text-[#E0E7DC]">{progress}%</span>
            </div>

            {/* Precision Loading Bar */}
            <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#10B981] via-[#34D399] to-[#6EE7B7]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

