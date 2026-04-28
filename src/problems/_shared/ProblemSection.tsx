import { ChevronRight } from "lucide-react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

type Props = {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}

export function ProblemSection({ title, children, defaultOpen = true }: Props) {
  return (
    <Collapsible defaultOpen={defaultOpen}>
      <CollapsibleTrigger className="group flex w-full items-center gap-2 pb-3 font-mono text-[10px] uppercase tracking-widest text-white/30 transition-colors hover:text-white/50">
        <ChevronRight
          size={12}
          className="shrink-0 transition-transform duration-200 group-data-[open]:rotate-90"
        />
        {title}
      </CollapsibleTrigger>
      <CollapsibleContent>{children}</CollapsibleContent>
    </Collapsible>
  )
}
