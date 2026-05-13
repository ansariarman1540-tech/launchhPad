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
    <footer className="border-t border-border bg-bg">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link
              href="/"
              className="text-lg font-semibold tracking-tight text-fg"
              aria-label="LaunchhPad home"
            >
              Launchh<span className="text-primary">P</span>ad
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              <span className="text-primary">{site.footer.tagline}</span>
            </p>
            <div className="mt-6 flex items-center gap-3">
              {site.footer.social.map((social) => {
                const Icon = socialIcons[social.label] ?? Github;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`LaunchhPad on ${social.label}`}
                    className="inline-flex size-9 items-center justify-center rounded-md border border-border bg-surface-1 text-muted transition-colors hover:text-fg"
                  >
                    <Icon className="size-4" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          {site.footer.columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-fg">{column.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-fg"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="font-mono text-xs text-muted">{site.footer.copyright}</p>
          {site.footer.legal.length > 0 ? (
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {site.footer.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-xs text-muted transition-colors hover:text-fg"
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
