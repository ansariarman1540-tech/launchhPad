import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web engineering, product design, brand identity, growth marketing, AI integration, and Launch Sprints from LaunchhPad.",
};

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24">
      <h1 className="text-4xl font-semibold tracking-tight">Services</h1>
    </main>
  );
}
