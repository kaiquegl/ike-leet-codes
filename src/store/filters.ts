import { create } from "zustand"
import type { Difficulty } from "@/types"

interface FilterStore {
  search: string
  difficulty: Difficulty | "All"
  setSearch: (q: string) => void
  setDifficulty: (d: Difficulty | "All") => void
}

export const useFilterStore = create<FilterStore>()((set) => ({
  search: "",
  difficulty: "All",
  setSearch: (search) => set({ search }),
  setDifficulty: (difficulty) => set({ difficulty }),
}))
