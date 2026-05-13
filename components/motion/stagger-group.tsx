"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

type StaggerGroupProps = {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  initialDelay?: number;
};

/**
 * Container that staggers its children's reveal animations.
 * Pair with individual `motion.div` children using `variants`.
 */
export function StaggerGroup({
  children,
  className,
  staggerDelay = 0.08,
  initialDelay = 0,
}: StaggerGroupProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: initialDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};
