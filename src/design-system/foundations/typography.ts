/**
 * Design System — Typography Foundation
 * Pre-composed Tailwind class strings for common text styles.
 * Values consume the fluid type scale defined in globals.css @theme.
 */

const headingBase =
  "font-dm-sans font-bold  leading-tight  text-[var(--ds-text-headline)]";
const subtitleBase =
  "font-dm-sans font-semibold leading-tight text-[var(--ds-text-subtitle)]";
const bodyBase =
  "font-dm-sans font-normal leading-relaxed text-[var(--ds-text-paragraph)]";

export const typography = {
  /* ── Headings ─────────────────────────────────────────── */
  h1: `${headingBase}  text-h1`,
  h2: `${headingBase}  text-h2`,
  h3: `${headingBase}  text-h3`,
  h4: `${subtitleBase} text-h4`,
  h5: `${subtitleBase} text-h5`,
  h6: `${subtitleBase} text-h6`,

  /* ── Body ─────────────────────────────────────────────── */
  lead: `${bodyBase} text-lg`,
  body: `${bodyBase} text-base`,
  small: `${bodyBase} text-sm`,
  caption: `font-dm-sans text-xs text-[var(--ds-text-caption)]`,
  label: `font-dm-sans font-medium text-sm text-[var(--ds-text-subtitle)]`,
  code: `font-mono text-sm bg-[var(--ds-bg-muted)] px-1 py-0.5 rounded`,

  /* ── Links ────────────────────────────────────────────── */
  link: `text-[var(--ds-text-link)] hover:text-[var(--ds-text-link-hover)] transition-colors`,
  linkSubtle: `text-[var(--ds-text-paragraph)] hover:text-[var(--ds-text-link)] transition-colors`,

  /* ── Legacy aliases (backwards compat) ───────────────── */
  p: `${bodyBase} text-16`,
  a: `text-[var(--ds-text-headline)] text-18`,
} as const;

export type TypographyKey = keyof typeof typography;
