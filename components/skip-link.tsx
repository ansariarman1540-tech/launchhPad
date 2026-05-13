import Link from "next/link";

/**
 * WCAG-required skip link. Visually hidden until focused.
 * Targets `<main id="main">` rendered by `app/layout.tsx`.
 */
export function SkipLink() {
  return (
    <Link
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:border focus:border-primary/40 focus:bg-bg focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-fg focus:outline-2 focus:outline-offset-2 focus:outline-primary"
    >
      Skip to content
    </Link>
  );
}
