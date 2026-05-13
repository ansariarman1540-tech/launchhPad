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

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: organizationLD() }}
      />
    </>
  );
}
