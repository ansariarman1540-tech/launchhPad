"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  Code2,
  PenTool,
  Sparkles,
  TrendingUp,
  Bot,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import { site } from "@/content/site";
import { Section } from "@/components/section";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/motion/fade-in";

const SERVICE_ICONS: Record<string, LucideIcon> = {
  "web-engineering": Code2,
  "product-design": PenTool,
  "brand-identity": Sparkles,
  "growth-marketing": TrendingUp,
  "ai-integration": Bot,
  "launch-sprints": Rocket,
};

const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

type Props = {
  withSectionHeader?: boolean;
};

export function ServicesGrid({ withSectionHeader = true }: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <Section id="services">
      {withSectionHeader ? (
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            What we do
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
            Six services. One senior team. No handoffs.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Pick the surface that matters most this quarter. We staff it with senior
            people, ship it on a calendar you can plan around, and stay until the
            number moves.
          </p>
        </FadeIn>
      ) : null}

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={
          reduceMotion
            ? {}
            : {
                hidden: {},
                visible: { transition: { staggerChildren: 0.08 } },
              }
        }
        className={cn(
          "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
          withSectionHeader ? "mt-14" : "mt-0",
        )}
      >
        {site.services.map((service) => {
          const Icon = SERVICE_ICONS[service.slug] ?? Code2;
          return (
            <motion.div key={service.slug} variants={reduceMotion ? {} : staggerItem}>
              <Link
                href={`/services#${service.slug}`}
                className={cn(
                  "glass-card glow-card group relative flex h-full flex-col rounded-2xl p-6 transition-all duration-300",
                  "hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(124,58,237,0.12)]",
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl border border-border/60 bg-bg/80 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_16px_rgba(124,58,237,0.3)]">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <ArrowUpRight
                    className="size-4 text-muted/50 transition-all duration-300 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-fg">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.oneLiner}
                </p>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
