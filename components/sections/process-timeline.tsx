"use client";

import { motion, useReducedMotion } from "motion/react";
import { site } from "@/content/site";
import { Section } from "@/components/section";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/motion/fade-in";

type Props = {
  withSectionHeader?: boolean;
  expanded?: boolean;
};

const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export function ProcessTimeline({ withSectionHeader = true, expanded = false }: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <Section id="process">
      {withSectionHeader ? (
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            How we ship
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
            Five steps. No surprises.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            The same process every engagement. We tell you the calendar on the first
            call and we hold ourselves to it.
          </p>
        </FadeIn>
      ) : null}

      <motion.ol
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={
          reduceMotion
            ? {}
            : { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }
        }
        className={cn(
          "grid gap-4",
          withSectionHeader ? "mt-14" : "mt-0",
          "md:grid-cols-5",
        )}
      >
        {site.process.map((step, i) => (
          <motion.li
            key={step.number}
            variants={reduceMotion ? {} : staggerItem}
            className={cn(
              "group relative flex flex-col rounded-2xl border border-border/60 bg-surface-1/50 p-6 backdrop-blur-sm",
              "transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_8px_32px_rgba(124,58,237,0.08)]",
            )}
          >
            {/* Connecting line on desktop */}
            {i < site.process.length - 1 ? (
              <span
                aria-hidden="true"
                className="absolute -right-2 top-1/2 hidden h-px w-4 bg-gradient-to-r from-border to-transparent md:block"
              />
            ) : null}

            {/* Number with glow */}
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-2xl font-bold text-primary drop-shadow-[0_0_8px_rgba(124,58,237,0.5)] transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(124,58,237,0.8)]">
                {step.number}
              </span>
            </div>

            <h3 className="mt-4 text-lg font-semibold tracking-tight text-fg">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{step.summary}</p>
            <p
              className={cn(
                "mt-3 text-sm leading-relaxed text-fg/70",
                expanded
                  ? ""
                  : "md:max-h-0 md:overflow-hidden md:opacity-0 md:transition-all md:duration-300 md:group-hover:max-h-40 md:group-hover:opacity-100",
              )}
            >
              {step.detail}
            </p>

            {/* Top accent bar */}
            <span
              aria-hidden="true"
              className={cn(
                "absolute inset-x-0 top-0 h-px rounded-t-2xl",
                "bg-gradient-to-r from-transparent via-primary/50 to-transparent",
                "opacity-0 transition-opacity duration-300 group-hover:opacity-100",
              )}
            />
          </motion.li>
        ))}
      </motion.ol>
    </Section>
  );
}
