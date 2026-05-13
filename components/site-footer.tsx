import Link from "next/link";
import { Github, Linkedin, Twitter, Dribbble } from "lucide-react";
import { site } from "@/content/site";
import { Container } from "@/components/container";

const socialIcons: Record<string, typeof Github> = {
  Twitter,
  LinkedIn: Linkedin,
  GitHub: Github,
  Dribbble,
};

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-bg">
      {/* Gradient separator line */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
      />

      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="group text-lg font-semibold tracking-tight text-fg"
              aria-label="LaunchhPad home"
            >
              Launchh<span className="text-primary transition-transform duration-200 group-hover:scale-110 inline-block">P</span>ad
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {site.footer.tagline}
            </p>
            <div className="mt-6 flex items-center gap-2.5">
              {site.footer.social.map((social) => {
                const Icon = socialIcons[social.label] ?? Github;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`LaunchhPad on ${social.label}`}
                    className="group/icon inline-flex size-9 items-center justify-center rounded-lg border border-border/60 bg-surface-1/50 text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary hover:shadow-[0_4px_12px_rgba(124,58,237,0.15)]"
                  >
                    <Icon className="size-4 transition-transform duration-200 group-hover/icon:scale-110" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link columns */}
          {site.footer.columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-fg">{column.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group/link inline-flex items-center gap-1.5 text-sm text-muted transition-colors duration-200 hover:text-fg"
                    >
                      <span className="inline-block size-0.5 rounded-full bg-muted/50 opacity-0 transition-opacity duration-200 group-hover/link:opacity-100" aria-hidden="true" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-8 sm:flex-row sm:items-center">
          <p className="font-mono text-xs text-muted/70">{site.footer.copyright}</p>
          {site.footer.legal.length > 0 ? (
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {site.footer.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-xs text-muted/70 transition-colors hover:text-fg"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </Container>
    </footer>
  );
}
