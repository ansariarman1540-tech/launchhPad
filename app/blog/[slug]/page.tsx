import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { ArrowRight, ChevronLeft } from "lucide-react";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { MDX } from "@/lib/mdx";
import { formatDate } from "@/lib/format";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/content";
import { articleLD } from "@/lib/jsonld";
import { cn } from "@/lib/utils";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  const posts = await getAllBlogPosts();
  return posts.map((p) => ({ slug: p.frontmatter.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = await getBlogPostBySlug(slug);
  if (!entry) {
    return { title: "Post not found" };
  }
  return {
    title: entry.frontmatter.title,
    description: entry.frontmatter.description,
    alternates: { canonical: `/blog/${entry.frontmatter.slug}` },
    openGraph: {
      title: entry.frontmatter.title,
      description: entry.frontmatter.description,
      type: "article",
      url: `/blog/${entry.frontmatter.slug}`,
      publishedTime: entry.frontmatter.publishedAt,
      authors: [entry.frontmatter.author],
      tags: [...entry.frontmatter.tags],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const entry = await getBlogPostBySlug(slug);
  if (!entry) notFound();

  const { frontmatter, content } = entry;

  return (
    <>
      <section className="border-b border-border pt-12 pb-12 sm:pt-16">
        <Container>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg"
          >
            <ChevronLeft className="size-4" aria-hidden="true" />
            All writing
          </Link>

          <div className="mt-10 max-w-3xl">
            <div className="flex flex-wrap gap-2">
              {frontmatter.tags.map((tag) => (
                <Badge key={tag} variant="primary">
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-fg sm:text-5xl md:text-6xl">
              {frontmatter.title}
            </h1>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted">
              {frontmatter.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs uppercase tracking-[0.18em] text-muted">
              <span>{frontmatter.author}</span>
              <span aria-hidden="true">{String.fromCharCode(0x00b7)}</span>
              <span>{formatDate(frontmatter.publishedAt)}</span>
              <span aria-hidden="true">{String.fromCharCode(0x00b7)}</span>
              <span>{frontmatter.readingTime}</span>
            </div>
          </div>
        </Container>
      </section>

      <Section className="!py-16 sm:!py-20">
        <article className="mx-auto max-w-3xl">
          <MDX source={content} />

          <div className="mt-16 rounded-3xl border border-primary/30 bg-gradient-to-br from-[color:var(--color-primary-deep)]/30 via-surface-1 to-surface-1 p-8 sm:p-10">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              What now?
            </p>
            <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
              If you would rather a senior team did this for you, tell us what you are building.
            </h2>
            <Link
              href="/contact"
              className={cn(buttonVariants({ variant: "default", size: "lg" }), "mt-6 group")}
            >
              Start a project
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </article>
      </Section>

      <Script
        id={`article-jsonld-${frontmatter.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: articleLD(frontmatter) }}
      />
    </>
  );
}
