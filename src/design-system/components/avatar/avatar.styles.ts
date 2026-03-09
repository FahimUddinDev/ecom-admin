import { cva } from "class-variance-authority";

export const avatarStyles = cva(
  [
    "inline-flex items-center justify-center",
    "rounded-full font-semibold uppercase select-none shrink-0",
    "bg-[var(--ds-primary-light)] text-primary",
    "overflow-hidden",
  ].join(" "),
  {
    variants: {
      size: {
        xs: "w-6  h-6  text-[10px]",
        sm: "w-8  h-8  text-xs",
        md: "w-10 h-10 text-sm",
        lg: "w-12 h-12 text-base",
        xl: "w-16 h-16 text-xl",
        "2xl": "w-20 h-20 text-2xl",
      },
      shape: {
        circle: "rounded-full",
        square: "rounded-lg",
      },
    },
    defaultVariants: { size: "md", shape: "circle" },
  },
);
