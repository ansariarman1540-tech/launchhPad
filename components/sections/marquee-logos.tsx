import { Container } from "@/components/container";

const LOGOS = [
  "Nova",
  "Helio",
  "Meridian",
  "Orbital",
  "Caldera",
  "Kinfolk",
  "Northwind",
  "Atlas Kit",
] as const;

/**
 * Pure CSS infinite marquee. Two copies of the list slide -50% on a loop;
 * the parent uses `pause-on-hover` to freeze the animation when hovered.
 * No JS, no external library.
 */
export function MarqueeLogos() {
  return (
    <section
      aria-label="Featured customers"
      className="border-y border-border bg-bg/50 py-10"
    >
      <Container className="mb-6">
        <p className="text-center font-mono text-xs uppercase tracking-[0.2em] text-muted">
          Trusted by founders shipping at
        </p>
      </Container>
      <div
        className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"
      >
        <div
          className="marquee-track flex w-max items-center gap-16 px-8 [animation:marquee_36s_linear_infinite] group-hover:[animation-play-state:paused]"
        >
          {[...LOGOS, ...LOGOS].map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="select-none text-2xl font-semibold tracking-tight text-muted/70"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
