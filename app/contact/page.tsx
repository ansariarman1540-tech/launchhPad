import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { site } from "@/content/site";
import { Container } from "@/components/container";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell LaunchhPad what you are building. We reply within one business day from a real person, not a sequence.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="border-b border-border pt-24 pb-24 sm:pt-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              {site.contact.eyebrow}
            </p>
            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
              {site.contact.headline}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
              {site.contact.subhead}
            </p>

            <div className="mt-10 space-y-6">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                  {site.contact.emailLabel}
                </p>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="mt-2 inline-flex items-center gap-2 text-lg text-fg transition-colors hover:text-primary"
                >
                  <Mail className="size-4" aria-hidden="true" />
                  {site.contact.email}
                </a>
              </div>

              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                  Response time
                </p>
                <p className="mt-2 text-base text-fg/90">
                  {site.contact.responseTime}
                </p>
              </div>

              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                  Find us
                </p>
                <ul className="mt-2 flex flex-wrap gap-x-6 gap-y-2">
                  {site.footer.social.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted transition-colors hover:text-fg"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
