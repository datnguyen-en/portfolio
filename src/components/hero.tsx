"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "motion/react";
import { ArrowDown, ChevronLeft, ChevronRight } from "lucide-react";
import { profile, slides } from "@/lib/data";
import { GradientMedia } from "@/components/media";

const AUTOPLAY_MS = 6000;

export function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax: content drifts up and fades as you scroll past the hero.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      AUTOPLAY_MS
    );
    return () => clearInterval(id);
  }, [paused, index]);

  const go = (dir: number) =>
    setIndex((i) => (i + dir + slides.length) % slides.length);

  const slide = slides[index];

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background slides */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <GradientMedia
              gradient={slide.gradient}
              image={slide.image}
              kenburns
              className="absolute inset-0 h-full w-full"
            />
          </motion.div>
        </AnimatePresence>
        {/* Legibility overlays (kept light so the hero isn't a black void) */}
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent" />
        {/* Soft gold glow + gentle vignette */}
        <div className="absolute left-1/2 top-1/3 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-[var(--accent)]/15 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.35))]" />
      </motion.div>

      {/* Foreground content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white"
      >
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Available for new opportunities
        </motion.span>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-base font-medium tracking-wide text-white/70"
        >
          Hello, I&rsquo;m{" "}
          <span className="font-semibold text-white">{profile.name}</span>
        </motion.p>

        {/* Storytelling — animates per slide */}
        <div className="mt-3 min-h-[200px] sm:min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
                {slide.kicker}
              </p>
              <h1 className="text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
                {slide.title}
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-white/75 sm:text-lg">
                {slide.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#work"
            className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-black shadow-lg shadow-black/30 transition-transform hover:scale-105 active:scale-95"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-[var(--accent)]/70 bg-[var(--accent)]/10 px-7 py-3 text-sm font-semibold text-[var(--accent)] backdrop-blur-md transition-colors hover:bg-[var(--accent)]/20"
          >
            Get in touch
          </a>
        </motion.div>
      </motion.div>

      {/* Slide controls */}
      <div className="absolute bottom-28 left-1/2 z-10 flex -translate-x-1/2 items-center gap-4">
        <button
          onClick={() => go(-1)}
          aria-label="Previous slide"
          className="grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="group relative h-1.5 overflow-hidden rounded-full bg-white/30 transition-all"
              style={{ width: i === index ? 40 : 16 }}
            >
              {i === index && !paused && (
                <motion.span
                  key={index}
                  className="absolute inset-0 origin-left bg-white"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
                />
              )}
              {i === index && paused && (
                <span className="absolute inset-0 bg-white" />
              )}
            </button>
          ))}
        </div>
        <button
          onClick={() => go(1)}
          aria-label="Next slide"
          className="grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#work"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/70"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="block"
        >
          <ArrowDown className="h-5 w-5" />
        </motion.span>
      </motion.a>
    </section>
  );
}
