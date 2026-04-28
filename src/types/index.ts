export type Difficulty = "Easy" | "Medium" | "Hard"

export type Solution = {
  code: string
  Approach: React.ComponentType
}

export type Problem = {
  id: string
  number: number
  title: string
  difficulty: Difficulty
  Description: React.ComponentType
  url: string
  solution: Solution
}
