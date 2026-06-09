"use client";

import { motion } from "motion/react";
import {
  Binary,
  Brain,
  Cloud,
  Server,
  Quote,
  type LucideIcon,
} from "lucide-react";
import {
  aboutText,
  skills,
  recommendations,
  whatIDo,
} from "@/lib/data";
import { Reveal, SectionHeading } from "@/components/reveal";

const iconMap: Record<string, LucideIcon> = {
  binary: Binary,
  server: Server,
  cloud: Cloud,
  brain: Brain,
};

export function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32"
    >
      <SectionHeading eyebrow="About Me" title="The person behind the code." />

      <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-[var(--muted)]">
        {aboutText.map((para, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <p>{para}</p>
          </Reveal>
        ))}
      </div>

      {/* What I'm doing */}
      <div className="mt-20">
        <Reveal>
          <h3 className="mb-8 text-2xl font-bold tracking-tight">
            What I&rsquo;m doing
          </h3>
        </Reveal>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {whatIDo.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Server;
            return (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="group flex h-full gap-5 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 transition-colors hover:border-[var(--accent)]/40">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[var(--accent)] text-black transition-transform group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="mt-1.5 text-sm text-[var(--muted)]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Recommendations */}
      <div className="mt-20">
        <Reveal>
          <h3 className="mb-8 text-2xl font-bold tracking-tight">
            Recommendations
          </h3>
        </Reveal>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {recommendations.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure className="relative h-full overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6">
                <Quote className="absolute right-5 top-5 h-8 w-8 text-[var(--accent)]/30" />
                <blockquote className="text-[15px] leading-relaxed text-[var(--muted)]">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--accent)] text-sm font-bold text-black">
                    {t.name.charAt(0)}
                  </span>
                  <span className="font-semibold">{t.name}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="mt-20">
        <Reveal>
          <h3 className="mb-8 text-2xl font-bold tracking-tight">My skills</h3>
        </Reveal>
        <div className="grid grid-cols-1 gap-x-12 gap-y-7 sm:grid-cols-2">
          {skills.map((skill, i) => (
            <Reveal key={skill.name} delay={i * 0.06}>
              <div>
                <div className="mb-2 flex items-center justify-between text-sm font-medium">
                  <span>{skill.name}</span>
                  <span className="text-[var(--accent)]">{skill.level}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-[var(--foreground)]/10">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--foreground)]"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
