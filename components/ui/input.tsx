import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  function Input({ className, type = "text", ...rest }, ref) {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          "flex h-11 w-full rounded-xl border border-border/60 bg-surface-1/50 px-4 text-sm text-fg backdrop-blur-sm",
          "placeholder:text-muted/60",
          "transition-all duration-200",
          "hover:border-border",
          "focus-visible:border-primary/60 focus-visible:bg-surface-1/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-0",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        {...rest}
      />
    );
  },
);
