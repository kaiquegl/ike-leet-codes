import { useMemo } from "react"
import { problems } from "@/data/problems"
import { useFilterStore } from "@/store/filters"
import type { Problem } from "@/types"

export function useProblems(): Problem[] {
  const search = useFilterStore((s) => s.search)
  const difficulty = useFilterStore((s) => s.difficulty)

  return useMemo(() => {
    let result = [...problems]

    if (search.trim()) {
      const q = search.toLowerCase()
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          String(p.number).includes(q)
      )
    }

    if (difficulty !== "All") {
      result = result.filter((p) => p.difficulty === difficulty)
    }

    return result.sort((a, b) => a.number - b.number)
  }, [search, difficulty])
}
