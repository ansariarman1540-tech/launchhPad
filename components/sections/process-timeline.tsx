import { site } from "@/content/site";
import { Section } from "@/components/section";
import { cn } from "@/lib/utils";

type Props = {
  withSectionHeader?: boolean;
  /** When true, expanded layout shows the long-form `detail` text under each step. */
  expanded?: boolean;
};

export function ProcessTimeline({ withSectionHeader = true, expanded = false }: Props) {
  return (
    <Section id="process">
      {withSectionHeader ? (
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            How we ship
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
            Five steps. No surprises.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            The same process every engagement. We tell you the calendar on the first
            call and we hold ourselves to it.
          </p>
        </div>
      ) : null}

      <ol
        className={cn(
          "grid gap-6",
          withSectionHeader ? "mt-14" : "mt-0",
          "md:grid-cols-5",
        )}
      >
        {site.process.map((step, i) => (
          <li
            key={step.number}
            className={cn(
              "group relative flex flex-col rounded-2xl border border-border bg-surface-1 p-6",
              "transition-colors hover:border-primary/40",
            )}
          >
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-sm text-primary">{step.number}</span>
              <span className="hidden h-px flex-1 bg-border md:block" aria-hidden="true" />
            </div>
            <h3 className="mt-3 text-lg font-semibold tracking-tight text-fg">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{step.summary}</p>
            <p
              className={cn(
                "mt-3 text-sm leading-relaxed text-fg/80",
                expanded
                  ? ""
                  : "md:opacity-60 md:transition-opacity md:duration-200 md:group-hover:opacity-100",
              )}
            >
              {step.detail}
            </p>
            {/* Visual connector dot for desktop horizontal flow */}
            <span
              aria-hidden="true"
              className={cn(
                "absolute -top-1.5 left-6 size-3 rounded-full border border-border bg-bg",
                i === 0 && "bg-primary border-primary",
              )}
            />
          </li>
        ))}
      </ol>
    </Section>
  );
}
