import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "About",
  description:
    "LaunchhPad is the senior team behind ambitious founders and scaling brands. Senior operators, not a content farm.",
  alternates: { canonical: "/about" },
};

const VALUES = [
  {
    title: "Senior, full stop.",
    body:
      "Average tenure on the team is nine years. We do not staff junior talent on client work and we do not subcontract overseas without telling you. The person on your kickoff call is the person on your launch call.",
  },
  {
    title: "Specifics over adjectives.",
    body:
      "If a service ships in four weeks, we say four weeks. If a metric moved 28 percent, we say 28 percent. We replaced our marketing copy with our project metrics two years ago and never went back.",
  },
  {
    title: "Calendar as contract.",
    body:
      "We tell you the calendar on the first call and we hold ourselves to it. Scope changes happen on a v2 list, not as a quiet line item on the next invoice. You always know the number before we start.",
  },
  {
    title: "Build it like you own it.",
    body:
      "We write the codebase you would inherit on day one of a Series A. Typed, tested, documented, and deployable without us. The day we hand it back to your team is the day the work was actually finished.",
  },
];

const DIFFERENT = [
  "We work on a calendar, not a meter. Fixed price. Fixed scope. Fixed dates.",
  "We pick the two channels that fit your business and make them work. We will not sell you a third.",
  "We measure against pipeline and conversion, not impressions and reach.",
  "We will turn down a project we cannot win. We would rather refer you out than waste your quarter.",
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border pt-24 pb-16 sm:pt-32">
        <Container>
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              About
            </p>
            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-fg sm:text-6xl">
              We are senior operators, not a content farm.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              LaunchhPad is a small studio of senior designers, engineers, and
              strategists who have shipped at the companies you have heard of.
              We exist to compress the distance between an idea and the moment a
              real customer pays for it.
            </p>
          </div>
        </Container>
      </section>

      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Values
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
            Four principles. We hold the line on all of them.
          </h2>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {VALUES.map((value, i) => (
            <article
              key={value.title}
              className="rounded-2xl border border-border bg-surface-1 p-8"
            >
              <span className="font-mono text-xs text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-fg">
                {value.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                {value.body}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="rounded-3xl border border-border bg-surface-1 p-8 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                How we are different
              </p>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
                Four things you will notice in the first week.
              </h2>
            </div>
            <ul className="lg:col-span-7 grid gap-3">
              {DIFFERENT.map((item, i) => (
                <li
                  key={item}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-bg p-5"
                >
                  <span className="font-mono text-xs text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm leading-relaxed text-fg/90 sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
