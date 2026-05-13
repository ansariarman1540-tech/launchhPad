"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/motion/fade-in";
import type { CaseStudyFrontmatter } from "@/lib/content";

type Props = {
  studies: ReadonlyArray<{ frontmatter: CaseStudyFrontmatter; content: string }>;
};

const staggerItem = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export function WorkPreview({ studies }: Props) {
  const reduceMotion = useReducedMotion();
  const top3 = studies.slice(0, 3);

  return (
    <Section id="work">
      <FadeIn className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
          Selected work
        </p>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
          Real launches. Measured outcomes.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Every project below was paid for, launched, and measured against a number we
          agreed on day three.
        </p>
      </FadeIn>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={
          reduceMotion
            ? {}
            : { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }
        }
        className="mt-14 grid gap-4 lg:grid-cols-2"
      >
        {top3.map((study, i) => (
          <motion.div
            key={study.frontmatter.slug}
            variants={reduceMotion ? {} : staggerItem}
            className={i === 2 ? "lg:col-span-2" : ""}
          >
            <Link
              href={`/work/${study.frontmatter.slug}`}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/60 bg-surface-1/50 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_12px_40px_rgba(124,58,237,0.08)] sm:p-8"
            >
              {/* Hover gradient overlay */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

              <div className="relative flex items-center justify-between text-xs">
                <span className="font-mono uppercase tracking-[0.18em] text-muted">
                  {study.frontmatter.client} {String.fromCharCode(0x2014)}{" "}
                  {study.frontmatter.industry}
                </span>
                <ArrowUpRight
                  className="size-4 text-muted/40 transition-all duration-300 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </div>

              {/* Hero metric with gradient accent */}
              <div className="relative mt-6 flex flex-col gap-1">
                <span className="text-5xl font-semibold tracking-tight text-fg sm:text-6xl">
                  <span className="bg-gradient-to-r from-fg to-primary bg-clip-text [-webkit-text-fill-color:transparent]">
                    {study.frontmatter.hero.metric}
                  </span>
                </span>
                <span className="text-sm text-muted">
                  {study.frontmatter.hero.label}
                </span>
              </div>

              <h3 className="relative mt-6 text-pretty text-xl font-semibold tracking-tight text-fg sm:text-2xl">
                {study.frontmatter.title}
              </h3>
              <p className="relative mt-3 flex-1 text-sm leading-relaxed text-muted sm:text-base">
                {study.frontmatter.summary}
              </p>

              <div className="relative mt-6 flex flex-wrap gap-2">
                {study.frontmatter.tags.slice(0, 4).map((tag) => (
                  <Badge key={tag} variant="primary">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Bottom accent line on hover */}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
