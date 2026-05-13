"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

/**
 * Sticky, frosted-blur top navigation.
 * Mobile menu uses a state-driven full-screen sheet (no Radix).
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previous;
      };
    }
  }, [open]);

  // Close the sheet whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-bg/70 backdrop-blur-xl supports-[backdrop-filter]:bg-bg/55">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-fg transition-opacity hover:opacity-80"
          aria-label="LaunchhPad home"
        >
          Launchh<span className="text-primary">P</span>ad
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {site.nav.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm transition-colors",
                  active ? "text-fg" : "text-muted hover:text-fg",
                )}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className={cn(buttonVariants({ variant: "default", size: "sm" }))}
          >
            Start a project
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="md:hidden inline-flex size-10 items-center justify-center rounded-md border border-border bg-surface-1 text-fg"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 top-16 z-50 flex h-[calc(100dvh-4rem)] flex-col bg-bg px-6 py-8 md:hidden"
        >
          <nav className="flex flex-1 flex-col gap-1" aria-label="Mobile">
            {site.nav.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-md px-3 py-3 text-lg",
                    active ? "text-fg" : "text-muted hover:text-fg",
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <Link
            href="/contact"
            className={cn(buttonVariants({ variant: "default", size: "lg" }), "w-full")}
          >
            Start a project
          </Link>
        </div>
      ) : null}
    </header>
  );
}
