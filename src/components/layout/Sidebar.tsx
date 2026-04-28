import { DifficultyFilter } from "@/components/filters/DifficultyFilter";
import { SearchBar } from "@/components/filters/SearchBar";
import { ProblemRow } from "@/components/problems/ProblemRow";
import { useProblems } from "@/hooks/useProblems";
import { TopBar } from "./TopBar";

export function Sidebar() {
  const problems = useProblems();

  return (
    <aside
      className="relative z-10 flex w-72 shrink-0 flex-col border-white/5 border-r"
      style={{ background: "var(--codex-bg-elevated)" }}
    >
      <TopBar />

      <div className="flex flex-col gap-2 border-white/5 border-b p-3">
        <SearchBar />
        <DifficultyFilter />
      </div>

      <div className="flex-1 overflow-y-auto">
        {problems.length === 0 ? (
          <div className="px-4 py-8 text-center font-mono text-white/30 text-xs">
            No problems match
            <br />
            your filters
          </div>
        ) : (
          <ul>
            {problems.map((p) => (
              <ProblemRow key={p.id} problem={p} />
            ))}
          </ul>
        )}
      </div>

      <div className="border-white/5 border-t px-4 py-2 font-mono text-[10px] text-white/20">
        {problems.length} problem{problems.length === 1 ? "" : "s"} shown
      </div>
    </aside>
  );
}
