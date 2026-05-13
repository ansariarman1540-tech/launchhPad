import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { FAQ } from "@/components/sections/faq";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Process",
  description:
    "How LaunchhPad ships: discover, define, design, develop, deploy and iterate. The same five steps every engagement.",
  alternates: { canonical: "/process" },
};

const DELIVERABLES = [
  "A one-page brief naming the customer, the problem, and the success metric",
  "Daily Loom updates from the team. Weekly live demos with you in the room",
  "A preview environment from week one, on real infrastructure",
  "Small, reviewed pull requests behind feature flags",
  "Evals, monitoring, error tracking, and a performance budget wired into CI",
  "A closed beta with twenty hand-picked users before public launch",
  "Analytics, dashboards, and a thirty-day post-launch tuning window",
  "A clean codebase, full documentation, and an offboarding session if you walk away",
];

export default function ProcessPage() {
  return (
    <>
      <section className="border-b border-border pt-24 pb-16 sm:pt-32">
        <Container>
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              How we work
            </p>
            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-fg sm:text-6xl">
              The same five steps. Every time.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              We tell you the calendar on the first call and we hold ourselves to it.
              No surprise scope, no surprise invoices, no junior talent hidden in the
              org chart.
            </p>
          </div>
        </Container>
      </section>

      <ProcessTimeline withSectionHeader={false} expanded />

      <Section className="!pt-0">
        <div className="rounded-3xl border border-border bg-surface-1 p-8 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                What you get
              </p>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
                Concrete deliverables. Not vibes.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Every engagement ends with the same checklist on the table. We hit
                every line or we tell you which one we missed and why.
              </p>
            </div>
            <ul className="grid gap-3 lg:col-span-8 sm:grid-cols-2">
              {DELIVERABLES.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-bg p-4"
                >
                  <span
                    aria-hidden="true"
                    className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary"
                  >
                    <Check className="size-3" />
                  </span>
                  <span className="text-sm leading-relaxed text-fg/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <FAQ />

      <CTASection />
    </>
  );
}
