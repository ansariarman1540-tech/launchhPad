import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-url";
import { getAllBlogPosts, getAllCaseStudies } from "@/lib/content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteUrl();
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = [
    "/",
    "/services",
    "/work",
    "/process",
    "/about",
    "/contact",
    "/blog",
  ].map((path) => ({
    url: `${base}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));

  const [posts, studies] = await Promise.all([
    getAllBlogPosts(),
    getAllCaseStudies(),
  ]);

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${base}/blog/${post.frontmatter.slug}`,
    lastModified: new Date(post.frontmatter.publishedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const workEntries: MetadataRoute.Sitemap = studies.map((study) => ({
    url: `${base}/work/${study.frontmatter.slug}`,
    lastModified: new Date(study.frontmatter.publishedAt),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticEntries, ...blogEntries, ...workEntries];
}
