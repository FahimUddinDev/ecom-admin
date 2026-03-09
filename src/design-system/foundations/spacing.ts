/**
 * Design System — Spacing Foundation
 * 8-pt grid system.  Values mirror --space-* tokens in globals.css.
 * Usage:  className={`p-[${spacing[4]}]`} or just use Tailwind utilities.
 */

export const spacing = {
  0: "0px",
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  5: "20px",
  6: "24px",
  8: "32px",
  10: "40px",
  12: "48px",
  16: "64px",
  20: "80px",
  24: "96px",
} as const;

export const borderRadius = {
  none: "0px",
  sm: "4px",
  md: "6px",
  lg: "8px",
  xl: "12px",
  "2xl": "16px",
  "3xl": "24px",
  full: "9999px",
} as const;

export const zIndex = {
  base: 0,
  raised: 10,
  dropdown: 100,
  sticky: 200,
  overlay: 300,
  modal: 400,
  toast: 500,
  tooltip: 600,
} as const;

/** Standard breakpoints (px) */
export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

export type SpacingKey = keyof typeof spacing;
export type RadiusKey = keyof typeof borderRadius;
export type ZIndexKey = keyof typeof zIndex;
export type Breakpoint = keyof typeof breakpoints;
