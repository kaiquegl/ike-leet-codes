import { BookOpen } from "lucide-react"
import { problems } from "@/data/problems"

const byDifficulty = {
  Easy: problems.filter((p) => p.difficulty === "Easy").length,
  Medium: problems.filter((p) => p.difficulty === "Medium").length,
  Hard: problems.filter((p) => p.difficulty === "Hard").length,
}

export function ProblemListPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-10 p-12">
      <div className="flex flex-col items-center gap-6 text-center">
        <BookOpen className="text-white/10" size={32} />

        <div>
          <div
            className="font-bold font-mono tabular-nums text-6xl leading-none"
            style={{ color: "var(--codex-cyan)" }}
          >
            {problems.length}
          </div>
          <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-white/30">
            Problems solved
          </div>
        </div>

        <div className="flex gap-6 font-mono text-xs">
          <span className="text-emerald-400">{byDifficulty.Easy} Easy</span>
          <span className="text-white/20">·</span>
          <span style={{ color: "var(--codex-amber)" }}>{byDifficulty.Medium} Medium</span>
          <span className="text-white/20">·</span>
          <span className="text-rose-400">{byDifficulty.Hard} Hard</span>
        </div>

        <p className="font-mono text-xs text-white/25">Select a problem from the sidebar</p>
      </div>
    </div>
  )
}
