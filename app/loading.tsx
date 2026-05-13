import { Container } from "@/components/container";

/**
 * Default route-segment loading UI. Kept lightweight so it does not
 * delay the meaningful frame.
 */
export default function Loading() {
  return (
    <section className="py-24 sm:py-32" aria-busy="true" aria-live="polite">
      <Container>
        <div className="max-w-3xl space-y-6">
          <div className="h-3 w-24 rounded bg-surface-2/70" />
          <div className="h-12 w-full rounded bg-surface-2/60 sm:h-16" />
          <div className="h-12 w-3/4 rounded bg-surface-2/60 sm:h-16" />
          <div className="h-4 w-2/3 rounded bg-surface-2/40" />
          <div className="h-4 w-1/2 rounded bg-surface-2/40" />
        </div>
        <span className="sr-only">Loading</span>
      </Container>
    </section>
  );
}
