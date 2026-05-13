"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/content/site";
import { Section } from "@/components/section";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";

export function CTASection() {
  const { cta } = site;
  return (
    <Section className="pb-24">
      <FadeIn>
        <div
          className={cn(
            "relative isolate overflow-hidden rounded-3xl",
            "border border-primary/20 bg-gradient-to-br from-[color:var(--color-primary-deep)]/40 via-surface-1 to-bg",
            "px-6 py-16 sm:px-12 sm:py-20",
            "shadow-[0_0_60px_-12px_rgba(124,58,237,0.2)]",
          )}
        >
          {/* Animated border gradient overlay */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-3xl"
            style={{
              background:
                "linear-gradient(135deg, transparent 40%, rgba(124,58,237,0.15) 50%, transparent 60%)",
              backgroundSize: "200% 200%",
              animation: "gradient-shift 4s ease infinite",
            }}
          />

          {/* Grid pattern */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              maskImage:
                "radial-gradient(ellipse at 50% 50%, black 25%, transparent 70%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at 50% 50%, black 25%, transparent 70%)",
            }}
          />

          <div className="relative mx-auto max-w-2xl text-center">
            {/* Pulsing dot */}
            <span className="mx-auto mb-4 flex size-3 items-center justify-center">
              <span className="absolute size-3 rounded-full bg-primary/60 [animation:pulse-glow_2s_ease_infinite]" />
              <span className="relative size-2 rounded-full bg-primary" />
            </span>

            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              {cta.eyebrow}
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-fg sm:text-5xl">
              {cta.headline}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              {cta.subhead}
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Link
                href={cta.primaryCta.href}
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "group shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] transition-shadow",
                )}
              >
                {cta.primaryCta.label}
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href={cta.secondaryCta.href}
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "backdrop-blur-sm")}
              >
                {cta.secondaryCta.label}
              </Link>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
