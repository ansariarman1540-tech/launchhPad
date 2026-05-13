import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "LaunchhPad is the senior team behind ambitious founders and scaling brands.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24">
      <h1 className="text-4xl font-semibold tracking-tight">About</h1>
    </main>
  );
}
