"use client";

import { useState } from "react";
import { GraduationCap, Briefcase } from "lucide-react";
import { education, experience, type TimelineItem } from "@/lib/data";
import { Reveal, SectionHeading } from "@/components/reveal";
import { cn } from "@/lib/utils";

export function Resume() {
  return (
    <section
      id="resume"
      className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32"
    >
      <SectionHeading
        eyebrow="Resume"
        title="A track record of building."
        description="Education and experience across research labs, startups, and engineering teams."
      />

      <div className="grid grid-cols-1 gap-x-10 gap-y-14 lg:grid-cols-2">
        <TimelineColumn
          icon={<GraduationCap className="h-5 w-5" />}
          heading="Education"
          items={education}
        />
        <TimelineColumn
          icon={<Briefcase className="h-5 w-5" />}
          heading="Experience"
          items={experience}
        />
      </div>
    </section>
  );
}

function TimelineColumn({
  icon,
  heading,
  items,
}: {
  icon: React.ReactNode;
  heading: string;
  items: TimelineItem[];
}) {
  return (
    <div>
      <Reveal>
        <div className="mb-7 flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[var(--accent)] text-black">
            {icon}
          </span>
          <h3 className="text-2xl font-bold tracking-tight">{heading}</h3>
        </div>
      </Reveal>

      <div className="space-y-4">
        {items.map((item, i) => (
          <Reveal key={item.title + i} delay={i * 0.06}>
            <EntryCard item={item} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function EntryCard({ item }: { item: TimelineItem }) {
  return (
    <article className="group flex gap-4 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-5 transition-colors hover:border-[var(--accent)]/40 sm:p-6">
      <Logo item={item} />

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-1">
          <h4 className="font-semibold leading-snug">{item.title}</h4>
          <span className="shrink-0 rounded-full bg-[var(--accent-soft)] px-2.5 py-0.5 text-xs font-semibold text-[var(--accent)]">
            {item.period}
          </span>
        </div>

        {item.subtitle && (
          <p className="mt-1 text-sm font-medium text-[var(--foreground)]/80">
            {item.subtitle}
          </p>
        )}

        {item.lines.length > 0 && (
          <ul className="mt-3 space-y-1.5 text-sm text-[var(--muted)]">
            {item.lines.map((line, j) => (
              <li key={j} className="flex gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                <span className="leading-relaxed">{line}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

/** Square brand logo with a monogram fallback when no image is available. */
function Logo({ item }: { item: TimelineItem }) {
  const [failed, setFailed] = useState(false);

  const initials = item.title
    .replace(/[^A-Za-z\s]/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");

  const showImage = item.logo && !failed;

  return (
    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-2xl ring-1 ring-[var(--border)]">
      <div
        className={cn(
          "absolute inset-0 grid place-items-center bg-gradient-to-br text-sm font-bold text-white",
          item.tint ?? "from-zinc-600 to-zinc-800"
        )}
      >
        {initials}
      </div>
      {showImage && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={item.logo}
          alt={`${item.title} logo`}
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
    </div>
  );
}
