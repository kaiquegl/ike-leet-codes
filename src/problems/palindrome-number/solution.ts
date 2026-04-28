export function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false
  }

  const a = String(x).split("")
  let start = 0

  while (start < a.length) {
    if (a.at(start) !== a.at(-start - 1)) {
      return false
    }
    start++
  }

  return true
}
