import type { ReactNode } from "react";
import { site } from "@/content/site";
import { Section } from "@/components/section";
import { Accordion } from "@/components/ui/accordion";
import { faqLD } from "@/lib/jsonld";

type Props = {
  withSectionHeader?: boolean;
};

export function FAQ({ withSectionHeader = true }: Props) {
  // FAQs are static, server-rendered text — coerce to ReactNode for the accordion's typed prop.
  const items: ReadonlyArray<{ question: string; answer: ReactNode }> = site.faqs.map((f) => ({
    question: f.question,
    answer: f.answer,
  }));

  return (
    <Section id="faq">
      {withSectionHeader ? (
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Questions, answered
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
            Frequently asked.
          </h2>
        </div>
      ) : null}

      <div className="mx-auto mt-14 max-w-3xl">
        <Accordion items={items} />
      </div>

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: faqLD(site.faqs) }}
      />
    </Section>
  );
}
