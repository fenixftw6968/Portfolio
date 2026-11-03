import { useRef, useEffect } from 'react'
import { CP_SNAPSHOT } from '../data/cp-snapshot'
import { GITHUB_SNAPSHOT } from '../data/github-snapshot'
import { PROJECTS } from '../data/projects'
import { SITE } from '../config/site'
import { Terminal as TerminalIcon, X, CornerDownLeft } from 'lucide-react'
import { useState } from 'react'

interface InteractiveTerminalProps {
  isOpen: boolean
  onClose: () => void
}

interface CommandHistoryItem {
  command: string
  output: React.ReactNode
}

export function InteractiveTerminal({ isOpen, onClose }: InteractiveTerminalProps) {
  const [inputVal, setInputVal] = useState('')
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      command: 'sys.init',
      output: (
        <div className="space-y-1 text-xs">
          <p className="text-cyan-400 font-bold">KARTIK.EXE INTERACTIVE TERMINAL [VERSION 3.0.0]</p>
          <p className="text-slate-400">
            Type <span className="text-white font-bold">help</span> to view available system commands.
          </p>
        </div>
      ),
    },
  ])

  const inputRef = useRef<HTMLInputElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [isOpen])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  const handleCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase()
    if (!cmd) return

    let output: React.ReactNode = null

    switch (cmd) {
      case 'help':
        output = (
          <div className="space-y-1 font-mono text-xs">
            <p className="text-cyan-400 font-semibold">AVAILABLE SYSTEM COMMANDS:</p>
            <p><span className="text-white w-28 inline-block">about</span> : Engineer biography and academic background</p>
            <p><span className="text-white w-28 inline-block">projects</span> : List verified engineering systems &amp; repositories</p>
            <p><span className="text-white w-28 inline-block">leetcode</span> : Solved count, current rating, and contest stats</p>
            <p><span className="text-white w-28 inline-block">codeforces</span> : CF rating, rank title, and submissions</p>
            <p><span className="text-white w-28 inline-block">codechef</span> : Rating, stars, and global standing</p>
            <p><span className="text-white w-28 inline-block">github</span> : Inspect repos, contribution calendar, languages</p>
            <p><span className="text-white w-28 inline-block">skills</span> : Core architectural and programming stack</p>
            <p><span className="text-white w-28 inline-block">contact</span> : Transmission channels and profiles</p>
            <p><span className="text-white w-28 inline-block">clear</span> : Flush terminal output buffer</p>
          </div>
        )
        break

      case 'about':
        output = (
          <div className="space-y-1 text-xs font-mono">
            <p className="text-cyan-400 font-bold">KARTIK BHANGALE</p>
            <p>Institution: Pune Institute of Computer Technology (PICT)</p>
            <p>Specialization: B.Tech Artificial Intelligence &amp; Data Science (Year 3)</p>
            <p>Mantra: I BUILD. I BREAK. I UNDERSTAND. I REBUILD.</p>
            <p>Ecosystem: Core member of PICT Coders League (PCL)</p>
          </div>
        )
        break

      case 'projects':
        output = (
          <div className="space-y-1.5 text-xs font-mono">
            <p className="text-cyan-400 font-semibold">VERIFIED SYSTEMS ON RECORD:</p>
            {PROJECTS.map((p) => (
              <div key={p.id} className="border-l-2 border-indigo-500/50 pl-3 py-1">
                <span className="text-white font-bold">{p.name}</span> ({p.alias}) - {p.category}
                <br />
                <span className="text-slate-400">{p.tagline}</span>
              </div>
            ))}
          </div>
        )
        break

      case 'leetcode': {
        const lc = CP_SNAPSHOT.leetcode
        output = (
          <div className="space-y-1 text-xs font-mono">
            <p className="text-cyan-400 font-semibold">LEETCODE TELEMETRY (@{lc.handle}):</p>
            <p>Current Rating: <span className="text-white font-bold">{lc.currentRating}</span> (Peak: {lc.maxRating})</p>
            <p>Global Standing: Top {lc.topPercentage}% (Global Rank: #{lc.globalRank})</p>
            <p>Total Solved: <span className="text-emerald-400 font-bold">{lc.solved}</span> [Easy: {lc.solvedBreakdown?.easy}, Med: {lc.solvedBreakdown?.medium}, Hard: {lc.solvedBreakdown?.hard}]</p>
            <p>Current Streak: {lc.streak} days • Active Days: {lc.activeDays}</p>
          </div>
        )
        break
      }

      case 'codeforces': {
        const cf = CP_SNAPSHOT.codeforces
        output = (
          <div className="space-y-1 text-xs font-mono">
            <p className="text-cyan-400 font-semibold">CODEFORCES TELEMETRY (@{cf.handle}):</p>
            <p>Current Rating: <span className="text-white font-bold">{cf.currentRating}</span></p>
            <p>Rank Title: <span className="uppercase text-white">{cf.rankTitle}</span></p>
            <p>Contests Attended: {cf.contests} rounds</p>
            <p>Problems Solved: {cf.solved}</p>
          </div>
        )
        break
      }

      case 'codechef': {
        const cc = CP_SNAPSHOT.codechef
        output = (
          <div className="space-y-1 text-xs font-mono">
            <p className="text-cyan-400 font-semibold">CODECHEF TELEMETRY (@{cc.handle}):</p>
            <p>Rating: <span className="text-white font-bold">{cc.currentRating}</span> (Max: {cc.maxRating})</p>
            <p>Division / Stars: 2★ Division</p>
            <p>Contests: {cc.contests} • Problems Solved: {cc.solved}</p>
          </div>
        )
        break
      }

      case 'github': {
        const gh = GITHUB_SNAPSHOT
        output = (
          <div className="space-y-1 text-xs font-mono">
            <p className="text-cyan-400 font-semibold">GITHUB ACTIVITY SNAPSHOT (@{gh.user.login}):</p>
            <p>Public Repositories: {gh.user.publicRepos}</p>
            <p>Total Yearly Commits: {gh.contributions.total} across {gh.contributions.activeDays} active days</p>
            <p>Primary Languages: {gh.languages.map((l) => `${l.name} (${l.percent}%)`).join(', ')}</p>
          </div>
        )
        break
      }

      case 'skills':
        output = (
          <div className="space-y-1 text-xs font-mono">
            <p className="text-cyan-400 font-semibold">ARSENAL SUMMARY:</p>
            <p>Core Languages: C++, Java, Python, TypeScript, SQL</p>
            <p>Backend: Spring Boot, Spring Security, WebSockets/STOMP, Kafka, REST, Docker</p>
            <p>Databases: PostgreSQL, MongoDB, JPA / Hibernate</p>
            <p>Machine Learning: TensorFlow, Keras, DenseNet121, Grad-CAM, OpenCV, Gemini</p>
          </div>
        )
        break

      case 'contact':
        output = (
          <div className="space-y-1 text-xs font-mono">
            <p className="text-cyan-400 font-semibold">TRANSMISSION ENDPOINTS:</p>
            <p>Email: <a href={SITE.links.email} className="text-white underline">{SITE.email}</a></p>
            <p>LinkedIn: <a href={SITE.links.linkedin} target="_blank" rel="noreferrer" className="text-white underline">{SITE.links.linkedin}</a></p>
            <p>GitHub: <a href={SITE.links.github} target="_blank" rel="noreferrer" className="text-white underline">{SITE.links.github}</a></p>
          </div>
        )
        break

      case 'clear':
        setHistory([])
        setInputVal('')
        return

      default:
        output = (
          <p className="text-xs font-mono text-rose-400">
            Command not recognized: &quot;{rawCmd}&quot;. Type &quot;help&quot; for available commands.
          </p>
        )
        break
    }

    setHistory((prev) => [...prev, { command: rawCmd, output }])
    setInputVal('')
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="w-full max-w-3xl rounded-2xl glass-panel border-white/[0.1] shadow-2xl flex flex-col h-[520px] overflow-hidden">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-slate-900/90 border-b border-white/[0.08]">
          <div className="flex items-center gap-2.5">
            <div className="p-1 rounded-md bg-indigo-500/10 text-cyan-400">
              <TerminalIcon className="w-4 h-4" />
            </div>
            <span className="font-mono text-xs font-bold text-white tracking-wider">
              KARTIK.EXE // CLI INTERACTIVE CONSOLE
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Output area */}
        <div className="flex-1 p-5 overflow-y-auto font-mono space-y-4 text-xs bg-slate-950/60">
          {history.map((item, index) => (
            <div key={index} className="space-y-1.5">
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-cyan-400">guest@kartik-exe:~$</span>
                <span className="text-white">{item.command}</span>
              </div>
              <div className="pl-4 text-slate-300">{item.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Command Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleCommand(inputVal)
          }}
          className="flex items-center gap-2.5 p-3.5 bg-slate-900/90 border-t border-white/[0.08]"
        >
          <span className="text-cyan-400 font-mono text-xs">guest@kartik-exe:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type a command (help, about, projects, leetcode, skills)..."
            className="flex-1 bg-transparent font-mono text-xs text-white focus:outline-none placeholder-slate-500"
          />
          <button
            type="submit"
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-cyan-500 hover:text-black text-slate-300 transition-colors cursor-pointer"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  )
}
