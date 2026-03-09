import { cn } from "@/lib/cn";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import * as React from "react";

const spinnerStyles = cva(
  "inline-block rounded-full border-[3px] border-[var(--ds-border)] border-t-primary animate-spin",
  {
    variants: {
      size: {
        xs: "w-3 h-3",
        sm: "w-4 h-4",
        md: "w-6 h-6",
        lg: "w-8 h-8",
        xl: "w-12 h-12",
      },
    },
    defaultVariants: { size: "md" },
  },
);

export interface SpinnerProps
  extends
    React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof spinnerStyles> {
  label?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({
  size,
  label = "Loading…",
  className,
  ...rest
}) => (
  <span
    role="status"
    aria-label={label}
    className={cn("inline-flex items-center justify-center", className)}
    {...rest}
  >
    <span className={cn(spinnerStyles({ size }))} aria-hidden="true" />
    <span className="sr-only">{label}</span>
  </span>
);

Spinner.displayName = "Spinner";
