import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/content/site";
import { Section } from "@/components/section";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function CTASection() {
  const { cta } = site;
  return (
    <Section className="pb-24">
      <div
        className={cn(
          "relative isolate overflow-hidden rounded-3xl border border-primary/30",
          "bg-gradient-to-br from-[color:var(--color-primary-deep)] via-[color:var(--color-primary)]/30 to-[color:var(--color-bg)]",
          "px-6 py-16 sm:px-12 sm:py-20",
        )}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse at 50% 50%, black 25%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at 50% 50%, black 25%, transparent 70%)",
          }}
        />

        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            {cta.eyebrow}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-fg sm:text-5xl">
            {cta.headline}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            {cta.subhead}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href={cta.primaryCta.href}
              className={cn(buttonVariants({ variant: "default", size: "lg" }), "group")}
            >
              {cta.primaryCta.label}
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
            <Link
              href={cta.secondaryCta.href}
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              {cta.secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
