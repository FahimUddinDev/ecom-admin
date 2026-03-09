import { cva } from "class-variance-authority";

export const popoverStyles = cva(
  "z-50 [&_.ant-popover-inner]:p-0 shadow-md transition-all duration-200 border",
  {
    variants: {
      size: {
        sm: "w-48 text-xs [&_.ant-popover-inner]:p-2",
        md: "w-64 text-sm [&_.ant-popover-inner]:p-3",
        lg: "w-80 text-base [&_.ant-popover-inner]:p-4",
        auto: "min-w-max text-sm [&_.ant-popover-inner]:p-3",
      },

      radius: {
        none: "[&_.ant-popover-inner]:rounded-none",
        sm: "[&_.ant-popover-inner]:rounded-sm",
        md: "[&_.ant-popover-inner]:rounded-md",
        lg: "[&_.ant-popover-inner]:rounded-lg",
        full: "[&_.ant-popover-inner]:rounded-2xl",
      },
      theme: {
        default:
          "border-[var(--ds-border)] [&_.ant-popover-inner]:bg-[var(--ds-bg)] [&_.ant-popover-inner]:text-[var(--ds-text-headline)] [&_.ant-popover-arrow::before]:bg-[var(--ds-bg)] [&_.ant-popover-arrow::before]:bg-clip-padding",
        inverted:
          "border-transparent [&_.ant-popover-inner]:bg-[var(--ds-text-headline)] [&_.ant-popover-inner]:text-[var(--ds-bg)] [&_.ant-popover-arrow::before]:bg-[var(--ds-text-headline)]",
        primary:
          "border-transparent [&_.ant-popover-inner]:bg-primary [&_.ant-popover-inner]:text-primary-foreground [&_.ant-popover-arrow::before]:bg-primary",
      },
      animation: {
        none: "",
        scale: "animate-in zoom-in-95",
        "fade-up": "animate-in slide-in-from-bottom-2 fade-in",
        "fade-down": "animate-in slide-in-from-top-2 fade-in",
        "fade-left": "animate-in slide-in-from-right-2 fade-in",
        "fade-right": "animate-in slide-in-from-left-2 fade-in",
      },
    },
    defaultVariants: {
      size: "auto",
      radius: "md",
      theme: "default",
      animation: "scale",
    },
  },
);
