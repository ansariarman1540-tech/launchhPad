import { forwardRef, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>>(
  function Textarea({ className, rows = 5, ...rest }, ref) {
    return (
      <textarea
        ref={ref}
        rows={rows}
        className={cn(
          "flex w-full rounded-xl border border-border/60 bg-surface-1/50 px-4 py-3 text-sm leading-relaxed text-fg backdrop-blur-sm",
          "placeholder:text-muted/60",
          "transition-all duration-200",
          "hover:border-border",
          "focus-visible:border-primary/60 focus-visible:bg-surface-1/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-0",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "resize-y",
          className,
        )}
        {...rest}
      />
    );
  },
);
