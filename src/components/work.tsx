"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, X } from "lucide-react";
import { projects, type Project } from "@/lib/data";
import { Reveal, SectionHeading } from "@/components/reveal";
import { GradientMedia } from "@/components/media";

export function Work() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = projects.find((p) => p.id === activeId) ?? null;

  // Lock scroll while the expanded card is open.
  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section
      id="work"
      className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32"
    >
      <SectionHeading
        eyebrow="Selected Work"
        title="Built with intent."
        description="A grid of projects spanning machine learning, cloud infrastructure, and full-stack products. Tap any card to dive in."
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={i * 0.05}>
            <ProjectCard
              project={project}
              onClick={() => setActiveId(project.id)}
            />
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <ProjectModal project={active} onClose={() => setActiveId(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  return (
    <motion.button
      layoutId={`card-${project.id}`}
      onClick={onClick}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="group relative flex h-full w-full flex-col overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--card)] text-left"
    >
      <motion.div
        layoutId={`media-${project.id}`}
        className="relative aspect-[16/10] w-full"
      >
        <GradientMedia
          gradient={project.gradient}
          image={project.image}
          alt={project.title}
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-black/30 text-white opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </motion.div>

      <div className="flex flex-1 flex-col p-6">
        <motion.p
          layoutId={`cat-${project.id}`}
          className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)]"
        >
          {project.category}
        </motion.p>
        <motion.h3
          layoutId={`title-${project.id}`}
          className="mt-2 text-xl font-bold tracking-tight"
        >
          {project.title}
        </motion.h3>
        <p className="mt-2 text-sm text-[var(--muted)]">{project.summary}</p>
      </div>
    </motion.button>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
      />

      <motion.div
        layoutId={`card-${project.id}`}
        className="relative z-10 flex max-h-[88vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--card)] shadow-2xl"
      >
        <motion.div
          layoutId={`media-${project.id}`}
          className="relative aspect-[16/9] w-full shrink-0"
        >
          <GradientMedia
            gradient={project.gradient}
            image={project.image}
            alt={project.title}
            className="absolute inset-0 h-full w-full"
          />
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-black/40 text-white backdrop-blur-md transition-colors hover:bg-black/60"
          >
            <X className="h-4 w-4" />
          </button>
        </motion.div>

        <div className="overflow-y-auto p-7 sm:p-9">
          <motion.p
            layoutId={`cat-${project.id}`}
            className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)]"
          >
            {project.category}
          </motion.p>
          <motion.h3
            layoutId={`title-${project.id}`}
            className="mt-2 text-3xl font-bold tracking-tight"
          >
            {project.title}
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-1 text-xs font-medium text-[var(--muted)]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <ul className="mt-6 space-y-3">
              {project.details.map((detail, i) => (
                <li key={i} className="flex gap-3 text-[15px] leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--foreground)]" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
