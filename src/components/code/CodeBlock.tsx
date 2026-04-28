import { Check, Copy } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { codeToHtml } from "shiki";

type Props = {
  code: string;
};

export function CodeBlock({ code }: Props) {
  const [html, setHtml] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    let cancelled = false;
    codeToHtml(code, { lang: "typescript", theme: "tokyo-night" }).then((result) => {
      if (!cancelled) {
        setHtml(result);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [code]);

  function handleCopy() {
    navigator.clipboard.writeText(code);
    setCopied(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="overflow-hidden rounded-lg border border-white/10">
      <div className="flex items-center justify-between border-white/10 border-b bg-black/30 px-4 py-2">
        <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest">typescript</span>
        <button
          className="flex items-center gap-1.5 font-mono text-[10px] text-white/30 transition-colors hover:text-white/70"
          onClick={handleCopy}
          type="button"
        >
          {copied ? (
            <>
              <Check className="text-emerald-400" size={11} />
              <span className="text-emerald-400">copied</span>
            </>
          ) : (
            <>
              <Copy size={11} />
              copy
            </>
          )}
        </button>
      </div>

      {html ? (
        <div
          className="overflow-x-auto text-sm [&>pre]:p-4 [&>pre]:font-mono [&>pre]:text-sm [&>pre]:leading-relaxed"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      ) : (
        <pre className="overflow-x-auto bg-[#1a1b2e] p-4 font-mono text-sm text-white/60 leading-relaxed">{code}</pre>
      )}
    </div>
  );
}
