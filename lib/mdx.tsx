import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { cn } from "@/lib/utils";

/**
 * Convert a heading's text content to a slug suitable for an `id`/anchor link.
 */
function slugify(input: ReactNode): string {
  const text =
    typeof input === "string"
      ? input
      : Array.isArray(input)
        ? input.filter((c) => typeof c === "string").join(" ")
        : "";
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

type HeadingProps = ComponentPropsWithoutRef<"h1">;

function H1({ children, className, ...rest }: HeadingProps) {
  return (
    <h1
      id={slugify(children)}
      className={cn(
        "scroll-mt-24 mt-12 text-4xl font-semibold tracking-tight text-fg sm:text-5xl",
        className,
      )}
      {...rest}
    >
      {children}
    </h1>
  );
}

function H2({ children, className, ...rest }: HeadingProps) {
  return (
    <h2
      id={slugify(children)}
      className={cn(
        "scroll-mt-24 mt-12 text-2xl font-semibold tracking-tight text-fg sm:text-3xl",
        className,
      )}
      {...rest}
    >
      {children}
    </h2>
  );
}

function H3({ children, className, ...rest }: HeadingProps) {
  return (
    <h3
      id={slugify(children)}
      className={cn(
        "scroll-mt-24 mt-8 text-xl font-semibold tracking-tight text-fg sm:text-2xl",
        className,
      )}
      {...rest}
    >
      {children}
    </h3>
  );
}

function P({ className, ...rest }: ComponentPropsWithoutRef<"p">) {
  return (
    <p
      className={cn("mt-5 text-base leading-relaxed text-fg/90 sm:text-lg", className)}
      {...rest}
    />
  );
}

function UL({ className, ...rest }: ComponentPropsWithoutRef<"ul">) {
  return (
    <ul
      className={cn(
        "mt-5 list-disc space-y-2 pl-6 text-base text-fg/90 marker:text-primary sm:text-lg",
        className,
      )}
      {...rest}
    />
  );
}

function OL({ className, ...rest }: ComponentPropsWithoutRef<"ol">) {
  return (
    <ol
      className={cn(
        "mt-5 list-decimal space-y-2 pl-6 text-base text-fg/90 marker:text-primary sm:text-lg",
        className,
      )}
      {...rest}
    />
  );
}

function LI({ className, ...rest }: ComponentPropsWithoutRef<"li">) {
  return <li className={cn("leading-relaxed", className)} {...rest} />;
}

function A({ className, href, ...rest }: ComponentPropsWithoutRef<"a">) {
  const isExternal = href?.startsWith("http");
  return (
    <a
      href={href}
      className={cn(
        "text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:decoration-primary",
        className,
      )}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    />
  );
}

function Blockquote({ className, ...rest }: ComponentPropsWithoutRef<"blockquote">) {
  return (
    <blockquote
      className={cn(
        "mt-6 border-l-2 border-primary pl-5 text-lg italic text-fg/80",
        className,
      )}
      {...rest}
    />
  );
}

function InlineCode({ className, ...rest }: ComponentPropsWithoutRef<"code">) {
  return (
    <code
      className={cn(
        "rounded-md border border-border bg-surface-1 px-1.5 py-0.5 font-mono text-[0.92em] text-fg",
        className,
      )}
      {...rest}
    />
  );
}

function Pre({ className, ...rest }: ComponentPropsWithoutRef<"pre">) {
  return (
    <pre
      className={cn(
        "mt-6 overflow-x-auto rounded-2xl border border-border bg-surface-1 p-5 font-mono text-sm leading-relaxed text-fg",
        className,
      )}
      {...rest}
    />
  );
}

function HR(props: ComponentPropsWithoutRef<"hr">) {
  return <hr className="my-12 border-border" {...props} />;
}

const mdxComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
  ul: UL,
  ol: OL,
  li: LI,
  a: A,
  blockquote: Blockquote,
  code: InlineCode,
  pre: Pre,
  hr: HR,
};

type MDXProps = {
  source: string;
};

/**
 * Server component that renders a raw MDX string with our token-styled
 * components. Use directly inside a server component / page.
 */
export function MDX({ source }: MDXProps) {
  return (
    <div className="mdx-body">
      <MDXRemote source={source} components={mdxComponents} />
    </div>
  );
}
