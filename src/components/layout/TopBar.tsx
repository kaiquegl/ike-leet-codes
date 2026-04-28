import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { problems } from "@/data/problems";

export function TopBar() {
  const { theme, setTheme } = useTheme();

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <div className="flex items-center justify-between border-white/5 border-b px-4 py-3">
      <div>
        <span className="font-bold text-xs uppercase tracking-[0.25em]" style={{ color: "var(--codex-amber)" }}>
          Codex
        </span>
        <div className="mt-0.5 font-mono text-[10px] text-white/30">
          {problems.length} problem{problems.length === 1 ? "" : "s"} solved
        </div>
      </div>

      <button
        className="flex h-7 w-7 items-center justify-center rounded text-white/40 transition-colors hover:bg-white/5 hover:text-white/80"
        onClick={toggleTheme}
        title="Toggle theme"
        type="button"
      >
        {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
      </button>
    </div>
  );
}
