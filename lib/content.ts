import "server-only";

import { promises as fs } from "node:fs";
import path from "node:path";
import { cache } from "react";
import matter from "gray-matter";

/**
 * Frontmatter shapes mirror the actual MDX frontmatter under
 * `content/case-studies/*.mdx` and `content/blog/*.mdx`.
 */

export type CaseStudyMetric = {
  value: string;
  label: string;
};

export type CaseStudyHero = {
  metric: string;
  label: string;
};

export type CaseStudyFrontmatter = {
  title: string;
  client: string;
  industry: string;
  services: string[];
  year: number;
  summary: string;
  hero: CaseStudyHero;
  metrics: CaseStudyMetric[];
  tags: string[];
  slug: string;
  publishedAt: string;
};

export type BlogFrontmatter = {
  title: string;
  description: string;
  author: string;
  publishedAt: string;
  tags: string[];
  slug: string;
  readingTime: string;
};

export type Loaded<T> = {
  frontmatter: T;
  content: string;
};

const CASE_STUDIES_DIR = path.join(process.cwd(), "content", "case-studies");
const BLOG_DIR = path.join(process.cwd(), "content", "blog");

async function readMdxDir(dir: string): Promise<string[]> {
  const entries = await fs.readdir(dir);
  return entries.filter((name) => name.endsWith(".mdx"));
}

async function loadMdx<T>(filePath: string): Promise<Loaded<T>> {
  const raw = await fs.readFile(filePath, "utf8");
  const parsed = matter(raw);
  return {
    frontmatter: parsed.data as T,
    content: parsed.content,
  };
}

function compareByDateDesc(a: { publishedAt: string }, b: { publishedAt: string }): number {
  return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
}

/**
 * Returns every case study, newest first, with frontmatter + raw MDX body.
 * Cached for the lifetime of a request via `React.cache`.
 */
export const getAllCaseStudies = cache(
  async (): Promise<Loaded<CaseStudyFrontmatter>[]> => {
    const files = await readMdxDir(CASE_STUDIES_DIR);
    const loaded = await Promise.all(
      files.map((file) => loadMdx<CaseStudyFrontmatter>(path.join(CASE_STUDIES_DIR, file))),
    );
    return loaded.sort((a, b) => compareByDateDesc(a.frontmatter, b.frontmatter));
  },
);

/**
 * Returns a single case study by slug, or `null` if it does not exist.
 */
export const getCaseStudyBySlug = cache(
  async (slug: string): Promise<Loaded<CaseStudyFrontmatter> | null> => {
    const all = await getAllCaseStudies();
    return all.find((entry) => entry.frontmatter.slug === slug) ?? null;
  },
);

/**
 * Returns every blog post, newest first.
 */
export const getAllBlogPosts = cache(
  async (): Promise<Loaded<BlogFrontmatter>[]> => {
    const files = await readMdxDir(BLOG_DIR);
    const loaded = await Promise.all(
      files.map((file) => loadMdx<BlogFrontmatter>(path.join(BLOG_DIR, file))),
    );
    return loaded.sort((a, b) => compareByDateDesc(a.frontmatter, b.frontmatter));
  },
);

/**
 * Returns a single blog post by slug, or `null` if it does not exist.
 */
export const getBlogPostBySlug = cache(
  async (slug: string): Promise<Loaded<BlogFrontmatter> | null> => {
    const all = await getAllBlogPosts();
    return all.find((entry) => entry.frontmatter.slug === slug) ?? null;
  },
);
