import { seo } from "@/content/seo";
import { siteUrl } from "@/lib/site-url";
import type { BlogFrontmatter } from "@/lib/content";
import type { FAQ } from "@/content/site";

/**
 * JSON-LD helpers. Each function returns a stringified JSON object ready to
 * place inside a `<script type="application/ld+json">` tag.
 */

export function organizationLD(): string {
  return JSON.stringify(seo.jsonLd.organization);
}

export function articleLD(post: BlogFrontmatter): string {
  const url = `${siteUrl()}/blog/${post.slug}`;
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "LaunchhPad",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl()}/brand/launchhpad-mark.png`,
      },
    },
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    keywords: post.tags.join(", "),
  });
}

export function faqLD(faqs: ReadonlyArray<FAQ>): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  });
}

export type BreadcrumbItem = {
  label: string;
  href: string;
};

export function breadcrumbLD(items: ReadonlyArray<BreadcrumbItem>): string {
  const base = siteUrl();
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href.startsWith("http") ? item.href : `${base}${item.href}`,
    })),
  });
}
