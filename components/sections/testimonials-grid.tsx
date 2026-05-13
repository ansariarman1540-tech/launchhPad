import { Quote } from "lucide-react";
import { site } from "@/content/site";
import { Section } from "@/components/section";

type Props = {
  withSectionHeader?: boolean;
};

export function TestimonialsGrid({ withSectionHeader = true }: Props) {
  return (
    <Section id="testimonials">
      {withSectionHeader ? (
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            What founders say
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
            They came back. Most of them twice.
          </h2>
        </div>
      ) : null}

      <div className="mt-14 grid gap-4 md:grid-cols-3">
        {site.testimonials.map((t) => (
          <figure
            key={`${t.name}-${t.company}`}
            className="flex h-full flex-col rounded-2xl border border-border bg-surface-1 p-6"
          >
            <Quote className="size-5 text-primary" aria-hidden="true" />
            <blockquote className="mt-4 flex-1 text-pretty text-base leading-relaxed tracking-tight text-fg/90 sm:text-lg">
              {t.quote}
            </blockquote>
            <figcaption className="mt-6 flex flex-col gap-0.5 border-t border-border pt-4">
              <span className="text-sm font-semibold text-fg">{t.name}</span>
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
                {t.role} {String.fromCharCode(0x00b7)} {t.company}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
