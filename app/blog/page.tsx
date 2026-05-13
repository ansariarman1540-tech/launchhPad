import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { CTASection } from "@/components/sections/cta-section";
import { getAllBlogPosts } from "@/lib/content";
import { formatDate } from "@/lib/format";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Field notes from LaunchhPad on launching, shipping, and growing modern products.",
  alternates: { canonical: "/blog" },
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <>
      <section className="border-b border-border pt-24 pb-16 sm:pt-32">
        <Container>
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Writing
            </p>
            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-fg sm:text-6xl">
              Field notes from LaunchhPad.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              Short essays from the team on launching, shipping, and growing
              modern products. No SEO bait. No newsletter prompts. Read it,
              forward it, build something.
            </p>
          </div>
        </Container>
      </section>

      <Section>
        <div className="grid gap-4 md:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.frontmatter.slug}
              href={`/blog/${post.frontmatter.slug}`}
              className="group flex flex-col rounded-3xl border border-border bg-surface-1 p-8 transition-all hover:-translate-y-0.5 hover:border-primary/40"
            >
              <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.18em] text-muted">
                <span>{formatDate(post.frontmatter.publishedAt)}</span>
                <span>{post.frontmatter.readingTime}</span>
              </div>

              <h2 className="mt-5 text-pretty text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
                {post.frontmatter.title}
              </h2>
              <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-muted sm:text-base">
                {post.frontmatter.description}
              </p>

              <div className="mt-6 flex items-end justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {post.frontmatter.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-sm text-muted transition-colors group-hover:text-fg">
                  Read
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </span>
              </div>

              <p className="mt-6 border-t border-border pt-4 text-xs text-muted">
                By {post.frontmatter.author}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
