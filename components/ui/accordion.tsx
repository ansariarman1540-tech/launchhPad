import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type AccordionItemProps = {
  question: string;
  answer: ReactNode;
  defaultOpen?: boolean;
};

/**
 * Pure CSS accordion built on `<details>` / `<summary>`. No JS, no Radix.
 * Keyboard navigation, focus, and accessibility come for free from the
 * native element.
 */
export function AccordionItem({ question, answer, defaultOpen }: AccordionItemProps) {
  return (
    <details
      className={cn(
        "group rounded-2xl border border-border bg-surface-1 px-5 py-4 transition-colors",
        "open:border-primary/40 open:bg-surface-1",
        "[&_summary::-webkit-details-marker]:hidden",
      )}
      open={defaultOpen}
    >
      <summary
        className={cn(
          "flex cursor-pointer list-none items-center justify-between gap-6",
          "text-left text-base font-medium text-fg sm:text-lg",
          "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary",
        )}
      >
        <span>{question}</span>
        <ChevronDown
          aria-hidden="true"
          className="size-5 shrink-0 text-muted transition-transform duration-200 group-open:rotate-180 group-open:text-primary"
        />
      </summary>
      <div className="mt-3 text-sm leading-relaxed text-fg/85 sm:text-base">
        {answer}
      </div>
    </details>
  );
}

type AccordionProps = {
  items: ReadonlyArray<{ question: string; answer: ReactNode }>;
  className?: string;
};

export function Accordion({ items, className }: AccordionProps) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      {items.map((item) => (
        <AccordionItem key={item.question} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}
