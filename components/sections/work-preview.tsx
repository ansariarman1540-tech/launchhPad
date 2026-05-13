import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Loaded, CaseStudyFrontmatter } from "@/lib/content";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type Props = {
  studies: ReadonlyArray<Loaded<CaseStudyFrontmatter>>;
};

export function WorkPreview({ studies }: Props) {
  const top = studies.slice(0, 3);
  if (top.length === 0) return null;

  return (
    <Section id="work">
      <div className="flex items-end justify-between gap-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Selected work
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
            Real launches. Real metrics. Real customers.
          </h2>
        </div>
        <Link
          href="/work"
          className="hidden items-center gap-1 text-sm text-muted transition-colors hover:text-fg sm:inline-flex"
        >
          See all work
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
      </div>

      <div className="mt-12 grid gap-4 lg:grid-cols-2">
        {top.map((study, idx) => {
          const isFeature = idx === 2;
          return (
            <Link
              key={study.frontmatter.slug}
              href={`/work/${study.frontmatter.slug}`}
              className={cn(
                "group flex flex-col rounded-3xl border border-border bg-surface-1 p-6 transition-all",
                "hover:-translate-y-0.5 hover:border-primary/40",
                "sm:p-8",
                isFeature && "lg:col-span-2",
              )}
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

              <h3 className="mt-6 text-pretty text-xl font-semibold tracking-tight text-fg sm:text-2xl">
                {study.frontmatter.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                {study.frontmatter.summary}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {study.frontmatter.tags.slice(0, 4).map((tag) => (
                  <Badge key={tag} variant="default">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-10 sm:hidden">
        <Link
          href="/work"
          className="inline-flex items-center gap-1 text-sm text-muted hover:text-fg"
        >
          See all work
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </Section>
  );
}
