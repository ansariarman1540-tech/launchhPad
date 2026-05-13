"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Top-level App Router error boundary. Logs the error and renders a
 * recoverable fallback so the navigation chrome stays usable.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surface the error to the runtime; production hooks (Sentry, etc.)
    // can replace this in a follow-up.
    if (process.env.NODE_ENV !== "production") {
      console.error("App error boundary caught:", error);
    }
  }, [error]);

  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Something broke
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
            That is on us, not on you.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            An unexpected error stopped this page from rendering. Try again, or
            head back home. If it keeps happening, let us know at{" "}
            <a
              href="mailto:hello@launchhpad.com"
              className="text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
            >
              hello@launchhpad.com
            </a>
            .
          </p>
          {error.digest ? (
            <p className="mt-3 font-mono text-xs text-muted">
              Reference: {error.digest}
            </p>
          ) : null}

          <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={reset}
              className={cn(buttonVariants({ variant: "default", size: "lg" }))}
            >
              Try again
            </button>
            <Link
              href="/"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Back home
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
