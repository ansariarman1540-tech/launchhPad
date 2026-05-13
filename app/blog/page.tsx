import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing",
  description: "Field notes from LaunchhPad on launching, shipping, and growing modern products.",
};

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24">
      <h1 className="text-4xl font-semibold tracking-tight">Writing</h1>
    </main>
  );
}
