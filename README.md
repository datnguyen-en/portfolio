# Dat Nguyen — Portfolio

An Apple / macOS–inspired developer portfolio built with **Next.js 16 (App Router)**,
**TypeScript**, **Tailwind CSS v4**, **Motion (Framer Motion)**, and **lucide-react**.

## Highlights

- **macOS-style top bar** — frosted-glass navbar with live clock, status glyphs, active-section pill, and a dark-mode toggle.
- **Storytelling hero** — full-screen crossfading achievement slides with Ken Burns zoom, per-slide animated captions, parallax on scroll, autoplay with progress indicators, and CTAs that scroll to the sections below.
- **Apple-style Work grid** — product cards that expand into a shared-layout detail modal (scrollytelling).
- **About** — bio, "What I'm doing" cards with icons, testimonials, and animated skill bars.
- **Resume** — education & experience timelines.
- **Contact** — integrated form + contact card with social links.
- Monochrome palette, abundant whitespace, frosted glass, and scroll-triggered reveals throughout.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # eslint
```

## Customizing content

All copy lives in **`src/lib/data.ts`** — edit your name, role, contact details,
projects, resume timelines, skills, testimonials, and the hero slides there.

## Adding your own images

Images are **optional**. Each slide/project renders a gradient backdrop by default;
if you provide an image and it loads, it layers on top — otherwise the gradient
stays. Drop files into `public/` and reference them from `src/lib/data.ts`:

| Purpose            | Suggested path                  | Referenced by            |
| ------------------ | ------------------------------- | ------------------------ |
| Profile photo      | `public/avatar.jpg`             | `profile.avatar`         |
| Hero achievements  | `public/work/achievement-*.jpg` | `slides[].image`         |
| Project thumbnails | `public/work/*.jpg`             | `projects[].image`       |
| Testimonials       | `public/testimonials/*.jpg`     | `testimonials[].avatar`  |

> Tip: 16:9 or 16:10 images look best for hero/project media.

## Project structure

```
src/
  app/
    layout.tsx        # fonts, metadata, theme boot script, ThemeProvider
    page.tsx          # assembles all sections
    globals.css       # theme tokens, dark mode, glass + animations
  components/
    theme-provider.tsx  # dark-mode store (useSyncExternalStore)
    mac-navbar.tsx      # macOS top bar
    hero.tsx            # storytelling slides + parallax
    work.tsx            # expandable project grid
    about.tsx           # bio, skills, testimonials
    resume.tsx          # timelines
    contact.tsx         # form + contact card
    media.tsx           # gradient-with-optional-image helper
    reveal.tsx          # scroll-reveal + section heading
    brand-icons.tsx     # inline social SVGs
  lib/
    data.ts           # ← all content lives here
    utils.ts          # cn() class helper
```
