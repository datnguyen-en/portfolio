"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Moon, Sun, Wifi, BatteryFull, Search } from "lucide-react";
import { navItems, profile } from "@/lib/data";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

export function MacNavbar() {
  const { theme, toggleTheme } = useTheme();
  const [active, setActive] = useState<string>("home");
  const [scrolled, setScrolled] = useState(false);
  const [clock, setClock] = useState("");

  // Live clock, like the macOS menu bar.
  useEffect(() => {
    const tick = () =>
      setClock(
        new Date().toLocaleTimeString([], {
          hour: "numeric",
          minute: "2-digit",
        })
      );
    tick();
    const id = setInterval(tick, 1000 * 30);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track which section is in view to highlight the nav item.
  useEffect(() => {
    const ids = navItems.map((n) => n.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "glass border-b border-[var(--border)]" : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-11 max-w-7xl items-center justify-between px-4 text-[13px] sm:px-6">
        {/* Left: brand + apple-style dot */}
        <div className="flex items-center gap-4">
          <a href="#home" className="flex items-center gap-2 font-semibold">
            <span className="grid h-5 w-5 place-items-center rounded-full bg-[var(--accent)] text-[10px] font-bold text-black">
              {profile.name.charAt(0)}
            </span>
            <span className="hidden tracking-tight sm:inline">
              {profile.name}
            </span>
          </a>
        </div>

        {/* Center: nav links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = active === id;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={cn(
                    "relative rounded-full px-3 py-1 transition-colors",
                    isActive
                      ? "text-[var(--accent)]"
                      : "text-[var(--muted)] hover:text-[var(--foreground)]"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-[var(--accent-soft)]"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right: macOS status cluster */}
        <div className="flex items-center gap-3 text-[var(--muted)]">
          <Wifi className="hidden h-4 w-4 sm:block" />
          <BatteryFull className="hidden h-4 w-4 sm:block" />
          <Search className="hidden h-4 w-4 sm:block" />
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="grid h-7 w-7 place-items-center rounded-full text-[var(--foreground)] transition-transform hover:scale-110 active:scale-95"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>
          <span className="hidden font-medium text-[var(--foreground)] tabular-nums sm:inline">
            {clock}
          </span>
        </div>
      </nav>
    </motion.header>
  );
}
