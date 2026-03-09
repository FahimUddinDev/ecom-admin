import { cn } from "@/lib/cn";
import type { VariantProps } from "class-variance-authority";
import * as React from "react";
import { badgeStyles } from "./badge.styles";

export interface BadgeProps
  extends
    React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeStyles> {
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  variant,
  size,
  dot = false,
  className,
  children,
  ...rest
}) => (
  <span
    className={cn(badgeStyles({ variant, size, dot }), className)}
    {...rest}
  >
    {dot && (
      <span
        className="inline-block w-1.5 h-1.5 rounded-full bg-current opacity-80"
        aria-hidden="true"
      />
    )}
    {children}
  </span>
);

Badge.displayName = "Badge";
