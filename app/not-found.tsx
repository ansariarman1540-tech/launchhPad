import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center py-24 sm:py-32">
      <Container>
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            404
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-fg sm:text-6xl">
            Nothing here yet.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            The page you tried to reach moved, was renamed, or never existed.
            Try one of the links below, or head back home.
          </p>

          <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <Link
              href="/"
              className={cn(buttonVariants({ variant: "default", size: "lg" }))}
            >
              Back home
            </Link>
            <Link
              href="/contact"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Start a project
            </Link>
          </div>

          <nav aria-label="Site pages" className="mt-14 border-t border-border pt-8">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
              Or try one of these
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2 md:grid-cols-3">
              {[...site.nav, { label: "Launch", href: "/launch" }].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="rounded-md px-3 py-2 text-sm text-muted transition-colors hover:bg-surface-1 hover:text-fg"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </section>
  );
}
