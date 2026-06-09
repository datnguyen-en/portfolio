"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Send,
  Check,
} from "lucide-react";
import { profile } from "@/lib/data";
import { Reveal, SectionHeading } from "@/components/reveal";
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  FacebookIcon,
} from "@/components/brand-icons";

type IconType = (props: React.SVGProps<SVGSVGElement>) => React.ReactElement;

const socialIcons: Record<string, IconType> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
  facebook: FacebookIcon,
};

const contactRows = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
  { icon: Calendar, label: "Birthday", value: profile.birthday },
  { icon: MapPin, label: "Location", value: profile.location },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend wired up — simulate a successful submission.
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section
      id="contact"
      className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32"
    >
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something."
        description="Have a role, a project, or just want to say hello? My inbox is always open."
      />

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
        {/* Contact info card */}
        <Reveal className="lg:col-span-2">
          <div className="h-full rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8">
            <div className="space-y-6">
              {contactRows.map((row) => {
                const Icon = row.icon;
                const content = (
                  <div className="flex items-center gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[var(--accent)] text-black">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
                        {row.label}
                      </p>
                      <p className="truncate font-medium">{row.value}</p>
                    </div>
                  </div>
                );
                return row.href ? (
                  <a
                    key={row.label}
                    href={row.href}
                    className="block transition-opacity hover:opacity-70"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={row.label}>{content}</div>
                );
              })}
            </div>

            <div className="mt-8 flex gap-3 border-t border-[var(--border)] pt-6">
              {profile.socials.map((social) => {
                const Icon = socialIcons[social.icon] ?? GithubIcon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="grid h-11 w-11 place-items-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-colors hover:bg-[var(--accent)] hover:text-black"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Form */}
        <Reveal delay={0.1} className="lg:col-span-3">
          <form
            onSubmit={onSubmit}
            className="h-full rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field
                label="Full name"
                value={form.name}
                onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                type="text"
                required
              />
              <Field
                label="Email address"
                value={form.email}
                onChange={(v) => setForm((f) => ({ ...f, email: v }))}
                type="email"
                required
              />
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium text-[var(--muted)]">
                Your message
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) =>
                  setForm((f) => ({ ...f, message: e.target.value }))
                }
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--accent)]"
              />
            </div>

            <div className="mt-6 flex justify-end">
              <motion.button
                type="submit"
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-7 py-3 text-sm font-semibold text-black transition-transform hover:scale-105"
              >
                {sent ? (
                  <>
                    <Check className="h-4 w-4" /> Sent!
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" /> Send message
                  </>
                )}
              </motion.button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  type,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-[var(--muted)]">
        {label}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={label}
        className="w-full rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--accent)]"
      />
    </div>
  );
}
