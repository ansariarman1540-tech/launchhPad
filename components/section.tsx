import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/container";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  /**
   * If `true`, the section renders without the inner Container.
   * Use for sections that need full-bleed children.
   */
  bare?: boolean;
};

/**
 * Vertical layout primitive. Provides our standard vertical rhythm
 * (`py-24 sm:py-32`) and an inner `Container` unless `bare` is set.
 */
export function Section({ className, children, bare, ...rest }: SectionProps) {
  return (
    <section className={cn("py-24 sm:py-32", className)} {...rest}>
      {bare ? children : <Container>{children}</Container>}
    </section>
  );
}
