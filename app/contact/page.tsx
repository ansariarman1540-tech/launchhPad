import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell LaunchhPad what you're building. We reply within one business day.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24">
      <h1 className="text-4xl font-semibold tracking-tight">Contact</h1>
    </main>
  );
}
