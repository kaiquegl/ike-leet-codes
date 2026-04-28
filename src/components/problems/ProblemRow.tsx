import { NavLink } from "react-router";
import { cn } from "@/lib/utils";
import type { Problem } from "@/types";
import { DifficultyBadge } from "./DifficultyBadge";

type Props = {
  problem: Problem;
};

export function ProblemRow({ problem }: Props) {
  return (
    <li>
      <NavLink
        className={({ isActive }) =>
          cn(
            "group flex flex-col gap-1 border-white/5 border-b px-4 py-3 transition-colors",
            isActive
              ? "border-l-2 border-l-[var(--codex-cyan)] bg-[var(--codex-bg-highlight)]"
              : "hover:bg-[var(--codex-bg-highlight)]"
          )
        }
        to={`/problems/${problem.id}`}
      >
        <div className="flex items-start justify-between gap-2">
          <span
            className="font-bold font-mono text-xl tabular-nums leading-none"
            style={{ color: "var(--codex-amber)" }}
          >
            #{String(problem.number).padStart(3, "0")}
          </span>
          <DifficultyBadge className="mt-0.5 shrink-0" difficulty={problem.difficulty} />
        </div>
        <span className="truncate font-mono text-white/60 text-xs group-hover:text-white/90">{problem.title}</span>
      </NavLink>
    </li>
  );
}
