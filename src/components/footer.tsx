import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-[var(--muted)] sm:flex-row">
        <p>
          &copy; {new Date().getFullYear()} - {profile.name}
        </p>
        <p className="flex items-center gap-2">
          Eager to learn and experience.
        </p>
      </div>
    </footer>
  );
}
