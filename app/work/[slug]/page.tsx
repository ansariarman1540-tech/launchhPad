import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { CTASection } from "@/components/sections/cta-section";
import { MDX } from "@/lib/mdx";
import { formatDate } from "@/lib/format";
import { getAllCaseStudies, getCaseStudyBySlug } from "@/lib/content";
import { breadcrumbLD } from "@/lib/jsonld";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  const all = await getAllCaseStudies();
  return all.map((entry) => ({ slug: entry.frontmatter.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = await getCaseStudyBySlug(slug);
  if (!entry) {
    return {
      title: "Case study not found",
    };
  }
  return {
    title: entry.frontmatter.title,
    description: entry.frontmatter.summary,
    alternates: { canonical: `/work/${entry.frontmatter.slug}` },
    openGraph: {
      title: entry.frontmatter.title,
      description: entry.frontmatter.summary,
      type: "article",
      url: `/work/${entry.frontmatter.slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const entry = await getCaseStudyBySlug(slug);
  if (!entry) notFound();

  const { frontmatter, content } = entry;

  return (
    <>
      <section className="border-b border-border pt-12 pb-16 sm:pt-16">
        <Container>
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg"
          >
            <ChevronLeft className="size-4" aria-hidden="true" />
            All work
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-muted">
                <span>{frontmatter.client}</span>
                <span aria-hidden="true">{String.fromCharCode(0x00b7)}</span>
                <span>{frontmatter.industry}</span>
                <span aria-hidden="true">{String.fromCharCode(0x00b7)}</span>
                <span>{frontmatter.year}</span>
              </div>
              <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-fg sm:text-5xl md:text-6xl">
                {frontmatter.title}
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
                {frontmatter.summary}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {frontmatter.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="flex h-full flex-col rounded-3xl border border-primary/30 bg-gradient-to-br from-[color:var(--color-primary-deep)]/30 via-surface-1 to-surface-1 p-8">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
                  Outcome
                </span>
                <span className="mt-4 text-6xl font-semibold tracking-tight text-fg sm:text-7xl">
                  {frontmatter.hero.metric}
                </span>
                <span className="mt-2 text-sm text-muted">
                  {frontmatter.hero.label}
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section className="!py-16 sm:!py-20">
        <article className="mx-auto max-w-3xl">
          <MDX source={content} />
        </article>
      </Section>

      <Section className="!py-16">
        <div className="rounded-3xl border border-border bg-surface-1 p-8 sm:p-12">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                The numbers
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
                Measured, not assumed.
              </h2>
            </div>
            <span className="font-mono text-xs text-muted">
              Published {formatDate(frontmatter.publishedAt)}
            </span>
          </div>

          <dl className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {frontmatter.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-border bg-bg p-5"
              >
                <dt className="text-sm text-muted">{metric.label}</dt>
                <dd className="mt-2 text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-12 border-t border-border pt-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              Services on this engagement
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {frontmatter.services.map((service) => (
                <li key={service}>
                  <Badge variant="primary">{service}</Badge>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <CTASection />

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: breadcrumbLD([
            { label: "Home", href: "/" },
            { label: "Work", href: "/work" },
            { label: frontmatter.title, href: `/work/${frontmatter.slug}` },
          ]),
        }}
      />
    </>
  );
}
