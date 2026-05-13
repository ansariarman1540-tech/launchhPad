import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[color:var(--color-primary)] text-white hover:bg-[color:var(--color-primary-deep)] focus-visible:outline-[color:var(--color-primary)]",
        secondary:
          "bg-[color:var(--color-surface-1)] text-[color:var(--color-fg)] hover:bg-[color:var(--color-surface-2)]",
        ghost:
          "bg-transparent text-[color:var(--color-fg)] hover:bg-[color:var(--color-surface-1)]",
        outline:
          "border border-[color:var(--color-border)] bg-transparent text-[color:var(--color-fg)] hover:bg-[color:var(--color-surface-1)]",
      },
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant, size, type = "button", ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
});

export { buttonVariants };
