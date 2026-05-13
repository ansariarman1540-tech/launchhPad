import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Centered, max-w-7xl wrapper with consistent horizontal padding.
 * Used inside every section to keep gutters aligned.
 */
export function Container({
  className,
  ...rest
}: ComponentPropsWithoutRef<"div">) {
  return <div className={cn("mx-auto w-full max-w-7xl px-6", className)} {...rest} />;
}
