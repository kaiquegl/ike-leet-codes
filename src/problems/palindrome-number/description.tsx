import { ProblemSection } from "@/problems/_shared/ProblemSection";

export function PalindromeNumberDescription() {
  return (
    <ProblemSection defaultOpen={false} title="Description">
      <pre className="whitespace-pre-wrap rounded-lg border border-white/5 bg-black/20 p-5 font-mono text-sm text-white/60 leading-relaxed">
        Given an integer x, return true if x is a palindrome, and false otherwise. <br />
        An integer is a palindrome when it reads the same forward and backward. For example, 121 is a palindrome while
        123 is not.
        <br />
        <br />
        Example 1:
        <br />
        Input: x = 121 Output: true
        <br />
        Explanation: 121 reads as 121 from left to right and from right to left.
        <br />
        <br />
        Example 2:
        <br />
        Input: x = -121 Output: false
        <br />
        Explanation: From left to right, it reads -121. From right to left, it reads 121-. Therefore it is not a
        palindrome.
        <br />
        <br />
        Example 3: Input: x = 10 Output: false Explanation: Reads 01 from right to left. Therefore it is not a
        palindrome.
        <br />
        <br />
        <code className="text-white/60">Constraints: -2^31 &lt;= x &lt;= 2^31 - 1</code>
      </pre>
    </ProblemSection>
  );
}
