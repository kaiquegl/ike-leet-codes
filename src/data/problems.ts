import type { Problem } from "@/types"
import palindromeSolution from "../problems/palindrome-number/solution.ts?raw"
import { PalindromeNumberApproach } from "@/problems/palindrome-number/approach"
import { PalindromeNumberDescription } from "@/problems/palindrome-number/description"

export const problems: Problem[] = [
  {
    id: "9",
    number: 9,
    title: "Palindrome Number",
    difficulty: "Easy",
    Description: PalindromeNumberDescription,
    url: "https://leetcode.com/problems/palindrome-number/",
    solution: {
      code: palindromeSolution,
      Approach: PalindromeNumberApproach,
    },
  },
]
