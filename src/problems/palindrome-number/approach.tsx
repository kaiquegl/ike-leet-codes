import { ProblemSection } from "@/problems/_shared/ProblemSection";

export function PalindromeNumberApproach() {
  return (
    <ProblemSection title="Approach">
      <div className="rounded-lg border border-white/5 bg-black/20 p-5">
        <pre className="whitespace-pre-wrap font-mono text-sm text-white/55 leading-relaxed">
          Converted the number to a string and used two pointers — one starting at the beginning and one from the end.
          <br /> <br />
          At each step, compared "a.at(start)" with "a.at(-start - 1)". If any pair of characters doesn't match, the
          number is not a palindrome and returned false immediately.
          <br /> <br />
          Negative numbers are never palindromes (the "-" sign makes them asymmetric), so short-circuited early for x
          &lt; 0.
          <br /> <br />
          Complexity: <br />
          Time - O(n) where n is the number of digits
          <br />
          Space - O(n) for the string/array representation
        </pre>
      </div>
    </ProblemSection>
  );
}
