import { cva } from "class-variance-authority";

export const buttonStyles = cva(
  // Base classes shared by all variants
  [
    "inline-flex items-center justify-center gap-2",
    "font-medium border rounded-lg",
    "transition-all duration-200 ease-out",
    "cursor-pointer select-none",
    "disabled:opacity-50 disabled:pointer-events-none",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ds-border-focus)] focus-visible:ring-offset-2",
  ].join(" "),
  {
    variants: {
      variant: {
        /** Filled brand button */
        primary:
          "bg-primary border-primary text-white " +
          "hover:bg-primary-hover hover:border-primary-hover " +
          "active:scale-[0.98]",

        /** Subtle secondary */
        secondary:
          "bg-[var(--ds-bg-subtle)] border-[var(--ds-border)] text-[var(--ds-text-headline)] " +
          "hover:bg-[var(--ds-bg-muted)] hover:border-[var(--ds-border-strong)] " +
          "active:scale-[0.98]",

        /** Ghost / outline */
        outline:
          "bg-transparent border-primary text-primary " +
          "hover:bg-primary hover:text-white " +
          "active:scale-[0.98]",

        /** Transparent, no border */
        ghost:
          "bg-transparent border-transparent text-[var(--ds-text-headline)] " +
          "hover:bg-[var(--ds-bg-subtle)] " +
          "active:scale-[0.98]",

        /** Destructive / danger */
        danger:
          "bg-danger border-danger text-white " +
          "hover:opacity-90 " +
          "active:scale-[0.98]",

        /** Danger outline */
        "danger-outline":
          "bg-transparent border-danger text-danger " +
          "hover:bg-danger hover:text-white " +
          "active:scale-[0.98]",

        /** Arrow / text link style */
        arrow:
          "bg-transparent border-transparent text-primary " +
          "hover:underline underline-offset-2 " +
          "gap-1",

        /** Surface card button */
        card:
          "bg-[var(--ds-bg)] border-[var(--ds-border)] text-[var(--ds-text-headline)] " +
          "hover:border-primary hover:text-primary " +
          "active:scale-[0.98]",
      },

      size: {
        xs: "h-7  px-2.5 text-xs  rounded-md",
        sm: "h-8  px-3.5 text-sm  rounded-md",
        md: "h-10 px-5   text-sm",
        lg: "h-12 px-7   text-base",
        xl: "h-14 px-8   text-base rounded-xl",
        /** Square icon-only button */
        icon: "h-9 w-9 px-0 rounded-md",
      },

      fullWidth: {
        true: "w-full",
        false: "w-auto",
      },

      /** Loading state — pointer-events disabled, opacity reduced slightly */
      loading: {
        true: "opacity-75 pointer-events-none cursor-wait",
        false: "",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
      loading: false,
    },
  },
);
