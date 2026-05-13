import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected case studies from LaunchhPad — real launches, real metrics, real customers.",
};

export default function WorkPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24">
      <h1 className="text-4xl font-semibold tracking-tight">Work</h1>
    </main>
  );
}
