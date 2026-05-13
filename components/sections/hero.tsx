"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";
import { Container } from "@/components/container";
import { buttonVariants } from "@/components/ui/button";

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Hero() {
  const reduceMotion = useReducedMotion();

  const initial = reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 };
  const animate = { opacity: 1, y: 0 };

  const stagger = {
    hidden: { opacity: reduceMotion ? 1 : 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.04,
        delayChildren: reduceMotion ? 0 : 0.05,
      },
    },
  };

  return (
    <section className="relative isolate overflow-hidden pt-24 pb-28 sm:pt-32 sm:pb-36">
      {/* Subtle violet glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-[-10%] h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.22),transparent_60%)]" />
        <div className="absolute right-[-10%] top-1/3 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(76,29,149,0.25),transparent_60%)]" />
      </div>

      {/* Faint grid mask */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at 50% 30%, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 30%, black 30%, transparent 75%)",
        }}
      />

      <Container>
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="mx-auto flex max-w-4xl flex-col items-center text-center"
        >
          <motion.div
            initial={initial}
            animate={animate}
            transition={{ duration: 0.5, ease: easeOutExpo }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs text-primary"
          >
            <span className="inline-block size-1.5 rounded-full bg-primary" aria-hidden="true" />
            {site.hero.eyebrow}
          </motion.div>

          <motion.h1
            initial={initial}
            animate={animate}
            transition={{ duration: 0.6, ease: easeOutExpo }}
            className="mt-6 text-balance text-5xl font-semibold tracking-tight text-fg sm:text-6xl md:text-7xl"
          >
            {site.hero.headline}
          </motion.h1>

          <motion.p
            initial={initial}
            animate={animate}
            transition={{ duration: 0.5, ease: easeOutExpo }}
            className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg"
          >
            {site.hero.subhead}
          </motion.p>

          <motion.div
            initial={initial}
            animate={animate}
            transition={{ duration: 0.5, ease: easeOutExpo }}
            className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
          >
            <Link
              href={site.hero.primaryCta.href}
              className={cn(buttonVariants({ variant: "default", size: "lg" }), "group")}
            >
              {site.hero.primaryCta.label}
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
            <Link
              href={site.hero.secondaryCta.href}
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              {site.hero.secondaryCta.label}
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
