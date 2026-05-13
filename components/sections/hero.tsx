"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";
import { Container } from "@/components/container";
import { buttonVariants } from "@/components/ui/button";

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Hero() {
  const reduceMotion = useReducedMotion();

  const initial = reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 };
  const animate = { opacity: 1, y: 0 };

  return (
    <section className="relative isolate overflow-hidden pt-28 pb-32 sm:pt-36 sm:pb-40">
      {/* Multi-layered glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-20%] h-[80rem] w-[80rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.18),transparent_55%)]" />
        <div className="absolute right-[-15%] top-1/4 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(76,29,149,0.22),transparent_55%)] [animation:float_8s_ease-in-out_infinite]" />
        <div className="absolute left-[-10%] bottom-0 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08),transparent_55%)] [animation:float_10s_ease-in-out_infinite_reverse]" />
      </div>

      {/* Dot grid pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 dot-pattern opacity-40"
        style={{
          maskImage: "radial-gradient(ellipse at 50% 30%, black 20%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 30%, black 20%, transparent 70%)",
        }}
      />

      <Container>
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: reduceMotion ? 1 : 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: reduceMotion ? 0 : 0.1, delayChildren: 0.05 },
            },
          }}
          className="mx-auto flex max-w-4xl flex-col items-center text-center"
        >
          {/* Eyebrow chip */}
          <motion.div
            initial={initial}
            animate={animate}
            transition={{ duration: 0.5, ease: easeOutExpo }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 font-mono text-xs text-primary backdrop-blur-sm"
          >
            <Sparkles className="size-3.5 [animation:pulse-glow_2s_ease_infinite]" aria-hidden="true" />
            {site.hero.eyebrow}
          </motion.div>

          {/* Headline with gradient */}
          <motion.h1
            initial={initial}
            animate={animate}
            transition={{ duration: 0.7, ease: easeOutExpo, delay: 0.1 }}
            className="mt-8 text-balance text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            <span className="gradient-text">{site.hero.headline}</span>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            initial={initial}
            animate={animate}
            transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.2 }}
            className="mt-7 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg md:text-xl"
          >
            {site.hero.subhead}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={initial}
            animate={animate}
            transition={{ duration: 0.5, ease: easeOutExpo, delay: 0.3 }}
            className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
          >
            <Link
              href={site.hero.primaryCta.href}
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "group relative overflow-hidden shadow-[0_0_24px_rgba(124,58,237,0.3)] hover:shadow-[0_0_32px_rgba(124,58,237,0.5)] transition-shadow",
              )}
            >
              <span className="relative z-10 flex items-center gap-2">
                {site.hero.primaryCta.label}
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </Link>
            <Link
              href={site.hero.secondaryCta.href}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "backdrop-blur-sm",
              )}
            >
              {site.hero.secondaryCta.label}
            </Link>
          </motion.div>

          {/* Social proof */}
          <motion.p
            initial={initial}
            animate={animate}
            transition={{ duration: 0.5, ease: easeOutExpo, delay: 0.4 }}
            className="mt-16 font-mono text-xs uppercase tracking-[0.2em] text-muted/70"
          >
            {site.socialProof}
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
