import { describe, expect, it } from "vitest"
import { isPalindrome } from "./solution"

describe("isPalindrome", () => {
  it("returns true for 121", () => {
    expect(isPalindrome(121)).toBe(true)
  })

  it("returns false for -121", () => {
    expect(isPalindrome(-121)).toBe(false)
  })

  it("returns false for 10", () => {
    expect(isPalindrome(10)).toBe(false)
  })

  it("returns true for 0", () => {
    expect(isPalindrome(0)).toBe(true)
  })

  it("returns true for single digit numbers", () => {
    expect(isPalindrome(5)).toBe(true)
    expect(isPalindrome(9)).toBe(true)
  })

  it("returns true for 1221", () => {
    expect(isPalindrome(1221)).toBe(true)
  })

  it("returns false for 123", () => {
    expect(isPalindrome(123)).toBe(false)
  })
})
