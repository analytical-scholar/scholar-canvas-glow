# Portfolio Layout Refinement Plan

Refactor `src/components/Portfolio.tsx` and `src/styles.css` to feel like an authentic student-built site: left-aligned content, compact hero, and a light/dark theme toggle.

## 1. Theme system (light + dark)
- Reintroduce a `useTheme` hook persisting to `localStorage` (`theme` = `light` | `dark`), toggling a `.dark` class on `<html>`.
- In `src/styles.css`: define `:root` (light) and `.dark` token sets.
  - Light: bg `#ffffff`, surface `#f7f8fb`, text `#0d1120`, muted `#5b6478`, border `#e5e7ef`, accent `#1a6fff`.
  - Dark: bg `#070B14`, surface `#0d1424`, text `#f0f2ff`, muted `#7682a3`, border `#1a2138`, accent `#3b82f6`.
- Add ☀️/🌙 toggle button to the navbar (right side, before "Let's Connect").
- Reduce decorative glows/shadows globally by ~30%; keep transitions subtle.

## 2. Container & alignment
- Introduce a single `.container-narrow` wrapper: `max-w-[1100px] mx-auto px-6 md:px-10`.
- Every section title (`About Me`, `Beyond Academics`, `Journey`, `Currently Learning`, `Current Training`, `Learning Projects`, `Let's Connect`) is left-aligned — remove any `text-center` / `mx-auto` on headings and lead paragraphs.

## 3. Hero refinement
- Two-column grid `grid-cols-1 md:grid-cols-[60%_40%]` with `gap-10`, top padding reduced so content sits higher (`pt-20 md:pt-24` instead of full-viewport).
- Tighten vertical rhythm between eyebrow → name → brand line → role → buttons → socials (use `space-y-3 md:space-y-4`, remove large `mt-*`).
- "Analytical Scholar" brand line: larger (`text-2xl md:text-3xl`), semibold, blue accent with a thin left border (`border-l-2 border-accent pl-3`) or underline accent.
- Role line ("300-Level Chemistry Student at LASUED | AI Development Trainee at BELIGHT TECH | Graphic Designer"): `text-base md:text-lg font-semibold`, accent-colored segments or a subtle blue tint on key terms.
- Profile image: keep circular, fixed `w-56 h-56 md:w-64 md:h-64`, soft ring, no oversized framing.
- Move social icons into the hero left column (compact row under the buttons).

## 4. Sections
- **About Me**: directly after hero (`mt-16` not `mt-32`); left-aligned heading + readable paragraph (`max-w-2xl`).
- **Beyond Academics**: single content card, left-aligned heading above it, paragraph capped at `max-w-2xl`.
- **Leadership**: 3-card grid (`md:grid-cols-3`), subtle border, surface bg, gentle hover (`hover:border-accent/40`), equal heights via `h-full` + flex.
- **Journey**: left-anchored vertical line (`border-l border-border pl-6`), entries stacked with date on top, description below — no center alignment.
- **Currently Learning**: skill badges in a left-aligned `flex flex-wrap gap-2`.
- **Current Training**: single highlighted card — "BELIGHT TECH", "AI Development Trainee", "Started June 2026", with a subtle accent left border.
- **Learning Projects**: wider cards (`md:grid-cols-2`), each with title + short honest description, no fake tech tags or stats.
- **Let's Connect**: fully left-aligned heading, short lead, then a vertical list of Email / LinkedIn / Instagram / TikTok links.

## 5. Footer
- Keep centered, minimal: name + year only. Remove any extra link rows or big social grids (social icons now live only in hero + contact).

## 6. Files touched
- `src/components/Portfolio.tsx` — restructure layout, add theme toggle, re-align sections.
- `src/styles.css` — add light theme tokens, tone down shadows/glows, ensure `.dark` variant works.

No new dependencies, no route changes, no backend work.
