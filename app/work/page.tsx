import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { CTASection } from "@/components/sections/cta-section";
import { getAllCaseStudies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected case studies from LaunchhPad. Real launches, real metrics, real customers.",
  alternates: { canonical: "/work" },
};

export default async function WorkPage() {
  const studies = await getAllCaseStudies();

  return (
    <>
      <section className="border-b border-border pt-24 pb-16 sm:pt-32">
        <Container>
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Selected work
            </p>
            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-fg sm:text-6xl">
              Real launches. Real metrics. Real customers.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              We do not show concept work or things we did not ship. Every project
              below was paid for, launched, and measured against a number we agreed
              on day three.
            </p>
          </div>
        </Container>
      </section>

      <Section>
        <div className="grid gap-4 lg:grid-cols-2">
          {studies.map((study) => (
            <Link
              key={study.frontmatter.slug}
              href={`/work/${study.frontmatter.slug}`}
              className="group flex flex-col rounded-3xl border border-border bg-surface-1 p-6 transition-all hover:-translate-y-0.5 hover:border-primary/40 sm:p-8"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono uppercase tracking-[0.18em] text-muted">
                  {study.frontmatter.client} {String.fromCharCode(0x2014)} {study.frontmatter.industry}
                </span>
                <ArrowUpRight
                  className="size-4 text-muted transition-colors group-hover:text-fg"
                  aria-hidden="true"
                />
              </div>

              <div className="mt-6 flex flex-col gap-1">
                <span className="text-5xl font-semibold tracking-tight text-fg sm:text-6xl">
                  {study.frontmatter.hero.metric}
                </span>
                <span className="text-sm text-muted">
                  {study.frontmatter.hero.label}
                </span>
              </div>

              <h2 className="mt-6 text-pretty text-xl font-semibold tracking-tight text-fg sm:text-2xl">
                {study.frontmatter.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                {study.frontmatter.summary}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {study.frontmatter.tags.slice(0, 5).map((tag) => (
                  <Badge key={tag} variant="default">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
