/**
 * Design System — Color Foundation
 * Maps semantic token names → Tailwind CSS class name suffixes.
 * All values correspond to --ds-* CSS custom properties in globals.css.
 *
 * Usage:  import { colors } from "@/design-system/foundations/colors"
 *         <div className={`bg-${colors.background.default}`} />
 */

export const colors = {
  /* ── Brand ─────────────────────────────────────────────── */
  primary: "primary",
  secondary: "secondary",
  accent: "secondary-light",
  danger: "danger",
  success: "success",
  warning: "warning",
  info: "info",

  /* ── Text ───────────────────────────────────────────────── */
  text: {
    headline: "headline",
    subtitle: "subtitle",
    paragraph: "paragraph",
    caption: "caption",
    placeholder: "placeholder",
    inverse: "white",
    link: "primary",
  },

  /* ── Backgrounds ────────────────────────────────────────── */
  background: {
    default: "bg", // --ds-bg  →  bg-[var(--ds-bg)]
    soft: "bg-soft",
    subtle: "bg-subtle",
    muted: "bg-muted",
  },

  /* ── Foregrounds ────────────────────────────────────────── */
  foreground: {
    default: "fg",
    soft: "fg-soft",
    muted: "fg-muted",
  },

  /* ── Borders ────────────────────────────────────────────── */
  border: {
    default: "border",
    strong: "border-strong",
    focus: "border-focus",
  },

  /* ── Status Backgrounds (light tints) ──────────────────── */
  statusBg: {
    success: "success-light",
    warning: "warning-light",
    danger: "danger-light",
    info: "info-light",
  },
} as const;
