import { cn } from "@/lib/utils";
import { useFilterStore } from "@/store/filters";
import type { Difficulty } from "@/types";

const options: Array<Difficulty | "All"> = ["All", "Easy", "Medium", "Hard"];

const activeColors: Record<string, string> = {
  All: "border-white/30 text-white/70",
  Easy: "border-emerald-400/50 text-emerald-400",
  Medium: "border-amber-400/50 text-amber-400",
  Hard: "border-rose-400/50 text-rose-400"
};

export function DifficultyFilter() {
  const current = useFilterStore((s) => s.difficulty);
  const setDifficulty = useFilterStore((s) => s.setDifficulty);

  return (
    <div className="flex gap-1">
      {options.map((opt) => (
        <button
          className={cn(
            "flex-1 rounded border py-0.5 font-mono text-[10px] uppercase tracking-wider transition-colors",
            current === opt
              ? activeColors[opt]
              : "border-white/5 text-white/25 hover:border-white/15 hover:text-white/50"
          )}
          key={opt}
          onClick={() => setDifficulty(opt)}
          type="button"
        >
          {opt === "All" ? "All" : opt.slice(0, 1)}
        </button>
      ))}
    </div>
  );
}
