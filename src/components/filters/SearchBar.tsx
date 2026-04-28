import { Search } from "lucide-react";
import { useFilterStore } from "@/store/filters";

export function SearchBar() {
  const search = useFilterStore((s) => s.search);
  const setSearch = useFilterStore((s) => s.setSearch);

  return (
    <div className="relative">
      <Search className="absolute top-1/2 left-2.5 -translate-y-1/2 text-white/30" size={12} />
      <input
        className="w-full rounded border border-white/10 bg-black/20 py-1.5 pr-3 pl-7 font-mono text-white/70 text-xs placeholder-white/25 outline-none transition-colors focus:border-[var(--codex-cyan)]/40 focus:text-white/90"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search problems..."
        type="text"
        value={search}
      />
    </div>
  );
}
