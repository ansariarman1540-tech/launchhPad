/**
 * Resolves the canonical site URL for absolute metadata, OG images, and sitemap entries.
 * Order of precedence:
 *   1. NEXT_PUBLIC_SITE_URL (explicit override, used in preview deploys)
 *   2. VERCEL_URL (auto-injected on Vercel previews; we add the protocol)
 *   3. Production fallback: https://www.launchhpad.com
 */
export function siteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit && explicit.length > 0) {
    return stripTrailingSlash(explicit);
  }

  const vercel = process.env.VERCEL_URL;
  if (vercel && vercel.length > 0) {
    return stripTrailingSlash(`https://${vercel}`);
  }

  return "https://www.launchhpad.com";
}

function stripTrailingSlash(url: string): string {
  return url.endsWith("/") ? url.slice(0, -1) : url;
}
