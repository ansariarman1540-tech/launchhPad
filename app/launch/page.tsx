import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Zap, Shield, BarChart3, Rocket, Clock, Sparkles } from "lucide-react";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { WaitlistForm } from "./waitlist-form";

export const metadata: Metadata = {
  title: "Launch — Ship your product in 30 days",
  description:
    "LaunchhPad Launch is the AI-powered platform that takes you from idea to live product in 30 days. Strategy, design, engineering, and growth — one timeline, one team, one tool.",
  alternates: { canonical: "/launch" },
  openGraph: {
    title: "LaunchhPad Launch — Ship in 30 days",
    description:
      "The AI-powered launch platform for ambitious founders. Idea to paying customers in 30 days.",
    url: "/launch",
  },
};

const FEATURES = [
  {
    icon: Zap,
    title: "AI scope engine",
    description:
      "Paste your idea. Get a prioritized scope, success metrics, and a 30-day timeline in under 60 seconds. Cut the scoping calls.",
  },
  {
    icon: Clock,
    title: "Daily ship cadence",
    description:
      "Automated daily stand-ups, Loom reviews, and progress dashboards. See what shipped today, what ships tomorrow.",
  },
  {
    icon: Shield,
    title: "Built-in quality gates",
    description:
      "Lighthouse budgets, accessibility audits, and type-safety checks run on every push. Ship fast without shipping broken.",
  },
  {
    icon: BarChart3,
    title: "Launch analytics",
    description:
      "Real-time activation funnels, LCP tracking, and revenue attribution from day one. Know what is working before you guess.",
  },
  {
    icon: Sparkles,
    title: "AI content & copy",
    description:
      "Generate on-brand landing copy, meta descriptions, and social cards. Trained on your voice guidelines, not generic templates.",
  },
  {
    icon: Rocket,
    title: "One-click deploy",
    description:
      "Preview environments on every PR. Production deploy to Vercel, Netlify, or your own infra with zero config.",
  },
] as const;

export default function LaunchPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border pt-24 pb-24 sm:pt-32 sm:pb-32">
        {/* Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute -top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,var(--color-primary)_0%,transparent_70%)] opacity-[0.12]" />
        </div>

        <Container>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to LaunchhPad
          </Link>

          <div className="mt-12 max-w-3xl">
            <Badge variant="primary">Coming soon</Badge>

            <h1 className="mt-6 text-balance text-5xl font-semibold tracking-tight text-fg sm:text-7xl">
              From idea to live product.{" "}
              <span className="text-primary">30 days.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted sm:text-xl">
              LaunchhPad Launch is the AI-powered platform that replaces your
              agency, your PM tool, and your deployment pipeline. One team, one
              tool, one timeline. Scope it, build it, ship it — in a month.
            </p>

            <div className="mt-10 max-w-xl">
              <WaitlistForm />
              <p className="mt-4 text-xs text-muted">
                No spam. One email when we open early access. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Features grid */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            What you get
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
            Everything a launch needs. Nothing it does not.
          </h2>
          <p className="mt-4 text-base text-muted sm:text-lg">
            We took the playbook from 40+ launches and turned it into software.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-border bg-surface-1 p-7 transition-all hover:-translate-y-0.5 hover:border-primary/40"
              >
                <span className="inline-flex size-10 items-center justify-center rounded-xl border border-border bg-bg text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-fg">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* How it works */}
      <Section className="border-t border-border">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            How it works
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
            Three steps. Thirty days.
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-12 md:grid-cols-3">
          {[
            {
              step: "01",
              title: "Scope",
              body: "Describe your product in plain English. The AI scope engine returns a prioritized backlog, success metrics, and a calendar in under a minute.",
            },
            {
              step: "02",
              title: "Build",
              body: "A senior team ships daily into a live preview. Design, code, and copy generated and reviewed in one loop. You approve what ships.",
            },
            {
              step: "03",
              title: "Launch",
              body: "Closed beta in week four, public launch on day thirty. Analytics, error tracking, and a growth dashboard from the first session.",
            },
          ].map((item) => (
            <div key={item.step}>
              <span className="font-mono text-4xl font-semibold text-primary">
                {item.step}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-fg">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section>
        <div className="mx-auto max-w-2xl rounded-3xl border border-primary/30 bg-gradient-to-br from-primary-deep/30 via-surface-1 to-surface-1 p-10 text-center sm:p-14">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
            Be first in line.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base text-muted">
            We are opening early access to 50 founders. Drop your email and we
            will reach out when your seat is ready.
          </p>
          <div className="mx-auto mt-8 max-w-md">
            <WaitlistForm />
          </div>
        </div>
      </Section>
    </>
  );
}
