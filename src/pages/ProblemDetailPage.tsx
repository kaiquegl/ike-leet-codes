import { ChevronLeft, ExternalLink } from "lucide-react";
import { Link, useParams } from "react-router";
import { CodeBlock } from "@/components/code/CodeBlock";
import { DifficultyBadge } from "@/components/problems/DifficultyBadge";
import { problems } from "@/data/problems";
import { ProblemSection } from "@/problems/_shared/ProblemSection";

export function ProblemDetailPage() {
  const { id } = useParams<{ id: string }>();
  const problem = problems.find((p) => p.id === id);

  if (!problem) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <div className="text-center">
          <div className="font-mono text-sm text-white/30">Problem not found</div>
          <Link className="mt-3 block font-mono text-(--codex-cyan)/60 text-xs hover:text-(--codex-cyan)" to="/">
            ← Back to list
          </Link>
        </div>
      </div>
    );
  }

  const Description = problem.Description;
  const Approach = problem.solution.Approach;

  return (
    <article className="flex flex-col">
      <header className="sticky top-0 z-10 flex items-center justify-between border-white/5 border-b bg-(--codex-bg)/80 px-8 py-4 backdrop-blur-sm">
        <Link
          className="flex items-center gap-1.5 font-mono text-white/30 text-xs transition-colors hover:text-white/60"
          to="/"
        >
          <ChevronLeft size={12} />
          Back
        </Link>
        {problem.url && (
          <a
            className="flex items-center gap-1.5 rounded border border-white/10 px-3 py-1.5 font-mono text-white/40 text-xs transition-colors hover:border-white/20 hover:text-white/70"
            href={problem.url}
            rel="noopener noreferrer"
            target="_blank"
          >
            <ExternalLink size={11} />
            LeetCode
          </a>
        )}
      </header>

      <div className="flex flex-col gap-8 p-8">
        <div className="flex flex-col gap-3">
          <div className="flex items-end gap-4">
            <span
              className="font-bold font-mono text-7xl tabular-nums leading-none"
              style={{ color: "var(--codex-amber)" }}
            >
              #{String(problem.number).padStart(3, "0")}
            </span>
            <DifficultyBadge className="mb-1.5" difficulty={problem.difficulty} />
          </div>
          <h1 className="font-bold text-2xl text-white/90">{problem.title}</h1>
        </div>

        <Description />

        <ProblemSection title="Solution">
          <CodeBlock code={problem.solution.code} />
        </ProblemSection>

        <Approach />
      </div>
    </article>
  );
}
