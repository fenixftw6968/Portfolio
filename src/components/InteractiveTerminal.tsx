import { useState, useRef, useEffect } from 'react'
import { Terminal as TerminalIcon, X, CornerDownLeft } from 'lucide-react'
import { SITE, STACK_GROUPS } from '../config/site'
import { PROJECTS } from '../data/projects'
import type { Project } from '../types'
import { CP_SNAPSHOT } from '../data/cp-snapshot'

interface InteractiveTerminalProps {
  isOpen: boolean
  onClose: () => void
}

interface CommandHistory {
  command: string
  output: React.ReactNode
}

export function InteractiveTerminal({ isOpen, onClose }: InteractiveTerminalProps) {
  const [inputVal, setInputVal] = useState('')
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: 'init',
      output: (
        <div className="space-y-1 text-sm font-mono leading-relaxed">
          <p className="text-[#08482D] font-bold">KARTIK.EXE TELEMETRY CONSOLE [v3.0.0]</p>
          <p className="text-[#414447]">Authenticated session established. Public verified telemetry loaded.</p>
          <p className="text-[#414447]">Type <span className="text-[#08482D] font-bold">&quot;help&quot;</span> to inspect supported subroutines.</p>
        </div>
      ),
    },
  ])

  const inputRef = useRef<HTMLInputElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isOpen])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  const handleCommand = (cmd: string) => {
    const rawCmd = cmd.trim().toLowerCase()
    if (!rawCmd) return

    let output: React.ReactNode

    switch (rawCmd) {
      case 'help':
        output = (
          <div className="space-y-1 text-sm font-mono">
            <p className="text-[#08482D] font-bold">AVAILABLE COMMANDS:</p>
            <p><span className="text-[#0d120e] font-bold">about</span>       - Developer background &amp; university details</p>
            <p><span className="text-[#0d120e] font-bold">projects</span>    - List production repositories &amp; systems</p>
            <p><span className="text-[#0d120e] font-bold">skills</span>      - Engineering stack and architectures</p>
            <p><span className="text-[#0d120e] font-bold">leetcode</span>    - Verified LeetCode stats &amp; rating telemetry</p>
            <p><span className="text-[#0d120e] font-bold">codeforces</span>  - Codeforces rating &amp; contest telemetry</p>
            <p><span className="text-[#0d120e] font-bold">codechef</span>    - CodeChef division stars &amp; rating</p>
            <p><span className="text-[#0d120e] font-bold">contact</span>     - Direct transmission ports &amp; coordinates</p>
            <p><span className="text-[#0d120e] font-bold">clear</span>       - Wipe console output</p>
          </div>
        )
        break

      case 'about':
        output = (
          <div className="space-y-1 text-sm font-mono leading-relaxed">
            <p className="text-[#08482D] font-bold">{SITE.name} ({SITE.title})</p>
            <p className="text-[#414447]">Role: {SITE.role} ({SITE.institution})</p>
            <p className="text-[#414447]">Domain: Backend systems, high-concurrency architectures, competitive programming, applied vision AI.</p>
            <p className="text-[#414447]">Community: Active in PICT Coders League (PCL).</p>
          </div>
        )
        break

      case 'projects':
        output = (
          <div className="space-y-2 text-sm font-mono">
            <p className="text-[#08482D] font-bold">VERIFIED SYSTEMS ON RECORD:</p>
            {PROJECTS.map((p: Project) => (
              <div key={p.id} className="border-l-2 border-[#08482D] pl-3 py-1">
                <span className="text-[#0d120e] font-bold">{p.name}</span> ({p.alias}) - {p.category}
                <br />
                <span className="text-[#414447] text-xs sm:text-sm">{p.tagline}</span>
              </div>
            ))}
          </div>
        )
        break

      case 'leetcode': {
        const lc = CP_SNAPSHOT.leetcode
        output = (
          <div className="space-y-1 text-sm font-mono">
            <p className="text-[#08482D] font-bold">LEETCODE TELEMETRY (@{lc.handle}):</p>
            <p>Current Rating: <span className="text-[#0d120e] font-bold">{lc.currentRating}</span> (Peak: {lc.maxRating})</p>
            <p>Global Standing: Top {lc.topPercentage}% (Global Rank: #{lc.globalRank})</p>
            <p>Total Solved: <span className="text-[#08482D] font-bold">{lc.solved}</span> [Easy: {lc.solvedBreakdown?.easy}, Med: {lc.solvedBreakdown?.medium}, Hard: {lc.solvedBreakdown?.hard}]</p>
            <p>Current Streak: {lc.streak} days • Active Days: {lc.activeDays}</p>
          </div>
        )
        break
      }

      case 'codeforces': {
        const cf = CP_SNAPSHOT.codeforces
        output = (
          <div className="space-y-1 text-sm font-mono">
            <p className="text-[#08482D] font-bold">CODEFORCES TELEMETRY (@{cf.handle}):</p>
            <p>Current Rating: <span className="text-[#0d120e] font-bold">{cf.currentRating}</span></p>
            <p>Rank Title: <span className="uppercase text-[#0d120e] font-semibold">{cf.rankTitle}</span></p>
            <p>Contests Attended: {cf.contests} rounds</p>
            <p>Problems Solved: {cf.solved}</p>
          </div>
        )
        break
      }

      case 'codechef': {
        const cc = CP_SNAPSHOT.codechef
        output = (
          <div className="space-y-1 text-sm font-mono">
            <p className="text-[#08482D] font-bold">CODECHEF TELEMETRY (@{cc.handle}):</p>
            <p>Rating: <span className="text-[#0d120e] font-bold">{cc.currentRating}</span> ({cc.stars})</p>
            <p>Division: {cc.division} • Global Rank: #{cc.globalRank}</p>
          </div>
        )
        break
      }

      case 'skills':
        output = (
          <div className="space-y-2 text-sm font-mono">
            <p className="text-[#08482D] font-bold">ARCHITECTURAL DOMAINS:</p>
            {STACK_GROUPS.map((g) => (
              <div key={g.id}>
                <span className="text-[#0d120e] font-bold">{g.label}: </span>
                <span className="text-[#414447]">{g.tags.map((t) => t.name).join(', ')}</span>
              </div>
            ))}
          </div>
        )
        break

      case 'contact':
        output = (
          <div className="space-y-1 text-sm font-mono">
            <p className="text-[#08482D] font-bold">DIRECT TRANSMISSION CHANNELS:</p>
            <p>Email: <span className="text-[#0d120e] font-bold">{SITE.email}</span></p>
            <p>LinkedIn: <a href={SITE.links.linkedin} target="_blank" rel="noreferrer" className="text-[#08482D] underline font-bold">{SITE.links.linkedin}</a></p>
            <p>GitHub: <a href={SITE.links.github} target="_blank" rel="noreferrer" className="text-[#08482D] underline font-bold">{SITE.links.github}</a></p>
          </div>
        )
        break

      case 'clear':
        setHistory([])
        setInputVal('')
        return

      default:
        output = (
          <p className="text-sm font-mono text-rose-600">
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#101410]/60 backdrop-blur-md">
      <div className="w-full max-w-3xl rounded-3xl bg-white border border-[#08482D]/20 shadow-2xl flex flex-col h-[560px] overflow-hidden">
        
        {/* Terminal Header in Soft Mint */}
        <div className="flex items-center justify-between px-6 py-4.5 bg-[#EBF2DF] border-b border-[#C8DBAE]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#08482D] text-[#F5F8EF] flex items-center justify-center shadow-xs">
              <TerminalIcon className="w-4 h-4" />
            </div>
            <span className="font-mono text-sm font-bold text-[#08482D] tracking-wider">
              KARTIK.EXE // CLI INTERACTIVE CONSOLE
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-black/10 text-[#08482D] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Output area */}
        <div className="flex-1 p-6 overflow-y-auto font-mono space-y-4 text-sm bg-[#F5F8EF]">
          {history.map((item, index) => (
            <div key={index} className="space-y-1.5">
              <div className="flex items-center gap-2 text-[#414447]">
                <span className="text-[#08482D] font-bold">guest@kartik-exe:~$</span>
                <span className="text-[#0d120e] font-semibold">{item.command}</span>
              </div>
              <div className="pl-4 text-[#0d120e]">{item.output}</div>
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
          className="flex items-center gap-3 p-4 bg-white border-t border-[#08482D]/10"
        >
          <span className="text-[#08482D] font-mono text-sm font-bold">guest@kartik-exe:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type a command (help, about, projects, leetcode, skills)..."
            className="flex-1 bg-transparent font-mono text-sm text-[#0d120e] focus:outline-none placeholder-[#414447]"
          />
          <button
            type="submit"
            className="p-2 rounded-full bg-[#08482D] hover:bg-[#053320] text-[#F5F8EF] transition-colors cursor-pointer shadow-xs"
          >
            <CornerDownLeft className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  )
}
