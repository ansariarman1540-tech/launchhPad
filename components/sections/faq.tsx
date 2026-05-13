import Script from "next/script";
import { site } from "@/content/site";
import { Section } from "@/components/section";
import { Accordion } from "@/components/ui/accordion";
import { faqLD } from "@/lib/jsonld";

type Props = {
  withSectionHeader?: boolean;
};

export function FAQ({ withSectionHeader = true }: Props) {
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
        <Accordion items={site.faqs} />
      </div>

      <Script
        id="faq-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: faqLD(site.faqs) }}
      />
    </Section>
  );
}
