import { cva } from "class-variance-authority";

export const badgeStyles = cva(
  "inline-flex items-center gap-1 font-medium rounded-full leading-none whitespace-nowrap",
  {
    variants: {
      variant: {
        primary: "bg-[var(--ds-primary-light)] text-primary",
        success: "bg-[var(--ds-success-light)] text-success",
        warning: "bg-[var(--ds-warning-light)] text-warning",
        danger: "bg-[var(--ds-danger-light)]  text-danger",
        info: "bg-[var(--ds-info-light)]    text-info",
        neutral: "bg-[var(--ds-bg-muted)] text-[var(--ds-text-subtitle)]",
        dark: "bg-[var(--ds-fg)] text-white",
      },
      size: {
        sm: "text-[10px] px-2   py-0.5",
        md: "text-xs     px-2.5 py-1",
        lg: "text-sm     px-3   py-1.5",
      },
      dot: {
        true: "pl-2",
        false: "",
      },
    },
    defaultVariants: { variant: "primary", size: "md", dot: false },
  },
);
