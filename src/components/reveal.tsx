"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12 max-w-2xl">
      {eyebrow && (
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h2>
      </Reveal>
      <Reveal delay={0.08}>
        <span className="mt-4 block h-1 w-16 rounded-full bg-[var(--accent)]" />
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="mt-5 text-lg text-[var(--muted)]">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
