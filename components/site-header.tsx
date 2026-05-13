"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Menu, X } from "lucide-react";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

/**
 * Premium sticky nav with scroll-based blur intensification,
 * active link indicator dot, and animated mobile sheet.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();

  // Track scroll position for enhanced blur/border
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      triggerRef.current?.focus();
    };
  }, [open]);

  // Close the sheet whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-all duration-300",
        scrolled
          ? "border-b border-border/80 bg-bg/80 shadow-[0_1px_12px_rgba(0,0,0,0.4)] backdrop-blur-2xl"
          : "border-b border-transparent bg-transparent backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6">
        {/* Wordmark */}
        <Link
          href="/"
          className="group text-lg font-semibold tracking-tight text-fg transition-opacity hover:opacity-80"
          aria-label="LaunchhPad home"
        >
          <span className="inline-flex items-baseline gap-0">
            Launchh
            <span className="text-primary transition-transform duration-200 group-hover:scale-110 inline-block">P</span>
            ad
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-0.5 md:flex" aria-label="Primary">
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
                  "relative rounded-md px-3.5 py-2 text-sm transition-colors duration-200",
                  active ? "text-fg" : "text-muted hover:text-fg",
                )}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
                {/* Active indicator dot */}
                {active ? (
                  <motion.span
                    layoutId={reduceMotion ? undefined : "nav-indicator"}
                    className="absolute -bottom-0.5 left-1/2 size-1 -translate-x-1/2 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "default", size: "sm" }),
              "shadow-[0_0_12px_rgba(124,58,237,0.2)] hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-shadow",
            )}
          >
            Start a project
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          ref={triggerRef}
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-haspopup="dialog"
          className="md:hidden inline-flex size-10 items-center justify-center rounded-md border border-border bg-surface-1/80 text-fg backdrop-blur-sm transition-colors hover:border-primary/40"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile sheet with animation */}
      <AnimatePresence>
        {open ? (
          <motion.div
            key="mobile-nav"
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="fixed inset-0 top-16 z-50 flex h-[calc(100dvh-4rem)] flex-col bg-bg/95 px-6 py-8 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-1 flex-col gap-1" aria-label="Mobile">
              {site.nav.map((link, i) => {
                const active =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <motion.div
                    key={link.href}
                    initial={reduceMotion ? {} : { opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "flex items-center gap-3 rounded-xl px-4 py-3.5 text-lg transition-colors",
                        active
                          ? "bg-primary/10 text-fg"
                          : "text-muted hover:bg-surface-1 hover:text-fg",
                      )}
                      aria-current={active ? "page" : undefined}
                    >
                      {active ? (
                        <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
                      ) : (
                        <span className="size-1.5" aria-hidden="true" />
                      )}
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "w-full shadow-[0_0_20px_rgba(124,58,237,0.3)]",
              )}
            >
              Start a project
            </Link>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
