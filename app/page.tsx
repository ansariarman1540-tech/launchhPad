import Script from "next/script";
import { Hero } from "@/components/sections/hero";
import { MarqueeLogos } from "@/components/sections/marquee-logos";
import { ServicesGrid } from "@/components/sections/services-grid";
import { WorkPreview } from "@/components/sections/work-preview";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { TestimonialsGrid } from "@/components/sections/testimonials-grid";
import { CTASection } from "@/components/sections/cta-section";
import { getAllCaseStudies } from "@/lib/content";
import { organizationLD } from "@/lib/jsonld";

export default async function HomePage() {
  const studies = await getAllCaseStudies();

  return (
    <>
      <Hero />
      <MarqueeLogos />
      <ServicesGrid />
      <WorkPreview studies={studies} />
      <ProcessTimeline />
      <TestimonialsGrid />
      <CTASection />

      <Script
        id="organization-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: organizationLD() }}
      />
    </>
  );
}
