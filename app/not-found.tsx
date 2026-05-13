import Link from "next/link";
import { Container } from "@/components/container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
            Try a different filter, or head back home.
          </p>
          <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <Link
              href="/"
              className={cn(buttonVariants({ variant: "default", size: "lg" }))}
            >
              Back home
            </Link>
            <Link
              href="/work"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              See the work
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
