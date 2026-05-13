import type { Metadata } from "next";
import { Check } from "lucide-react";
import { site } from "@/content/site";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { CTASection } from "@/components/sections/cta-section";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web engineering, product design, brand identity, growth marketing, AI integration, and Launch Sprints from LaunchhPad.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-border pt-24 pb-16 sm:pt-32">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Services
            </p>
            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-fg sm:text-6xl">
              Six surfaces. One senior team.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              Pick the surface that matters most this quarter. We staff it with
              senior people, ship it on a calendar you can plan around, and stay
              until the number moves.
            </p>
          </div>
        </Container>
      </section>

      <Section className="!py-16 sm:!py-20">
        <div className="flex flex-col gap-6">
          {site.services.map((service, idx) => (
            <article
              key={service.slug}
              id={service.slug}
              className="scroll-mt-24 rounded-3xl border border-border bg-surface-1 p-8 sm:p-12"
            >
              <div className="grid gap-10 lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <span className="font-mono text-xs text-primary">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-pretty text-base leading-relaxed text-fg/80">
                    {service.oneLiner}
                  </p>
                  <Badge variant="primary" className="mt-6">
                    {service.slug}
                  </Badge>
                </div>

                <div className="lg:col-span-7">
                  <p className="text-pretty text-base leading-relaxed text-muted sm:text-lg">
                    {service.description}
                  </p>
                  <ul className="mt-8 grid gap-3">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary"
                        >
                          <Check className="size-3" />
                        </span>
                        <span className="text-sm leading-relaxed text-fg/90 sm:text-base">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
