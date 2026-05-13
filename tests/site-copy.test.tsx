import { describe, it, expect } from "vitest";
import { site } from "@/content/site";

describe("site copy sanity", () => {
  it("has a non-trivial primary nav", () => {
    expect(site.nav.length).toBeGreaterThanOrEqual(5);
  });

  it("hero headline mentions 'launch'", () => {
    expect(site.hero.headline.toLowerCase()).toContain("launch");
  });

  it("every service has a slug, title, and oneLiner", () => {
    expect(site.services.length).toBe(6);
    for (const service of site.services) {
      expect(service.slug).toMatch(/^[a-z][a-z0-9-]+$/);
      expect(service.title.length).toBeGreaterThan(0);
      expect(service.oneLiner.length).toBeGreaterThan(0);
      expect(service.bullets.length).toBeGreaterThanOrEqual(3);
    }
  });

  it("has 5 process steps with sequential numbers", () => {
    expect(site.process.length).toBe(5);
    site.process.forEach((step, i) => {
      expect(step.number).toBe(String(i + 1).padStart(2, "0"));
      expect(step.title.length).toBeGreaterThan(0);
      expect(step.detail.length).toBeGreaterThan(0);
    });
  });

  it("every testimonial has a quote, name, role, and company", () => {
    expect(site.testimonials.length).toBe(3);
    for (const t of site.testimonials) {
      expect(t.quote.length).toBeGreaterThan(20);
      expect(t.name.length).toBeGreaterThan(0);
      expect(t.role.length).toBeGreaterThan(0);
      expect(t.company.length).toBeGreaterThan(0);
    }
  });

  it("has 8 faqs with unique questions", () => {
    expect(site.faqs.length).toBe(8);
    const questions = site.faqs.map((f) => f.question);
    expect(new Set(questions).size).toBe(questions.length);
  });

  it("footer has tagline, three columns, and legal links", () => {
    expect(site.footer.tagline.length).toBeGreaterThan(0);
    expect(site.footer.columns.length).toBe(3);
    expect(site.footer.legal.length).toBeGreaterThan(0);
  });

  it("never spells the brand as 'Launchpad'", () => {
    const flat = JSON.stringify(site);
    expect(flat).not.toMatch(/Launchpad/);
    expect(flat).toMatch(/LaunchhPad/);
  });
});
