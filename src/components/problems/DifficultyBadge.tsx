import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { Difficulty } from "@/types";

const badge = cva("inline-flex items-center rounded px-1.5 py-0.5 font-bold text-[10px] uppercase tracking-wider", {
  variants: {
    difficulty: {
      Easy: "bg-emerald-500/10 text-emerald-400",
      Medium: "bg-amber-500/10 text-amber-400",
      Hard: "bg-rose-500/10 text-rose-400"
    }
  }
});

type Props = {
  className?: string;
  difficulty: Difficulty;
};

export function DifficultyBadge({ difficulty, className }: Props) {
  return <span className={cn(badge({ difficulty }), className)}>{difficulty}</span>;
}
