import { cva } from "class-variance-authority";

export const inputStyles = cva(
  [
    "w-full border rounded-lg bg-[var(--ds-bg)] text-[var(--ds-text-headline)]",
    "placeholder:text-[var(--ds-text-placeholder)]",
    "outline-none transition-all duration-200",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-[var(--ds-bg-muted)]",
    "read-only:bg-[var(--ds-bg-subtle)] read-only:cursor-default",
  ].join(" "),
  {
    variants: {
      size: {
        sm: "h-8  px-3   text-sm",
        md: "h-10 px-3.5 text-sm",
        lg: "h-12 px-4   text-base",
      },
      state: {
        default:
          "border-[var(--ds-border)] focus:border-primary focus:ring-2 focus:ring-primary/20",
        error:
          "border-danger   bg-[var(--ds-danger-light)]/30   focus:border-danger   focus:ring-2 focus:ring-danger/20",
        success:
          "border-success  bg-[var(--ds-success-light)]/30  focus:border-success  focus:ring-2 focus:ring-success/20",
        warning:
          "border-warning  bg-[var(--ds-warning-light)]/30  focus:border-warning  focus:ring-2 focus:ring-warning/20",
      },
      hasPrefix: { true: "pl-10", false: "" },
      hasSuffix: { true: "pr-10", false: "" },
    },
    defaultVariants: {
      size: "md",
      state: "default",
      hasPrefix: false,
      hasSuffix: false,
    },
  },
);

export const labelStyles = cva(
  "block font-medium text-[var(--ds-text-subtitle)]",
  {
    variants: {
      size: {
        sm: "text-xs  mb-1",
        md: "text-sm  mb-1.5",
        lg: "text-base mb-2",
      },
      required: {
        true: "after:content-['*'] after:ml-0.5 after:text-danger",
        false: "",
      },
    },
    defaultVariants: { size: "md", required: false },
  },
);

/** Icon colours to match input state */
export const stateIconColor: Record<string, string> = {
  default: "text-[var(--ds-text-placeholder)]",
  error: "text-danger",
  success: "text-success",
  warning: "text-warning",
};

/** Built-in state suffix icons */
export const stateIcon: Record<string, string> = {
  error: "✕",
  success: "✓",
  warning: "⚠",
};
