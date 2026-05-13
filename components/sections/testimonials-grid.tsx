"use client";

import { motion, useReducedMotion } from "motion/react";
import { site } from "@/content/site";
import { Section } from "@/components/section";
import { FadeIn } from "@/components/motion/fade-in";

type Props = {
  withSectionHeader?: boolean;
};

const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export function TestimonialsGrid({ withSectionHeader = true }: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <Section id="testimonials">
      {withSectionHeader ? (
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            What founders say
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
            They came back. Most of them twice.
          </h2>
        </FadeIn>
      ) : null}

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={
          reduceMotion
            ? {}
            : { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }
        }
        className="mt-14 grid gap-4 md:grid-cols-3"
      >
        {site.testimonials.map((t) => (
          <motion.figure
            key={`${t.name}-${t.company}`}
            variants={reduceMotion ? {} : staggerItem}
            className="group flex h-full flex-col rounded-2xl border border-border/60 bg-surface-1/50 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_8px_32px_rgba(124,58,237,0.06)]"
          >
            {/* Large decorative quote mark */}
            <span
              aria-hidden="true"
              className="select-none text-5xl font-serif leading-none text-primary/20 transition-colors duration-300 group-hover:text-primary/40"
            >
              {String.fromCharCode(0x201c)}
            </span>

            <blockquote className="mt-2 flex-1 text-pretty text-base leading-relaxed tracking-tight text-fg/90 sm:text-lg">
              {t.quote}
            </blockquote>

            <figcaption className="mt-6 flex items-center gap-3 border-t border-border/60 pt-5">
              {/* Avatar initials */}
              <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                {t.name.split(" ").map((n) => n[0]).join("")}
              </span>
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-semibold text-fg">{t.name}</span>
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
                  {t.role} {String.fromCharCode(0x00b7)} {t.company}
                </span>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </motion.div>
    </Section>
  );
}
