import { cn } from "@/lib/cn";
import * as React from "react";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "block" | "circle" | "text" | "card";
  /** Width in px/rem/% (for block/text) */
  width?: string | number;
  /** Height in px/rem (for block/circle) */
  height?: string | number;
  /** Number of text lines */
  lines?: number;
  /** Rounded corners for block variant */
  rounded?: boolean;
}

const shimmer =
  "relative overflow-hidden bg-[var(--ds-bg-muted)] " +
  "after:absolute after:inset-0 after:bg-gradient-to-r " +
  "after:from-transparent after:via-white/20 after:to-transparent " +
  "after:animate-[shimmer_1.4s_ease-in-out_infinite]";

export const Skeleton: React.FC<SkeletonProps> = ({
  variant = "block",
  width,
  height,
  lines = 3,
  rounded = false,
  className,
  style,
  ...rest
}) => {
  if (variant === "text") {
    return (
      <div className={cn("flex flex-col gap-2", className)} {...rest}>
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={cn(shimmer, "h-4 rounded-md")}
            style={{ width: i === lines - 1 ? "66%" : "100%" }}
            aria-hidden="true"
          />
        ))}
      </div>
    );
  }

  if (variant === "circle") {
    const size = height ?? width ?? 40;
    return (
      <div
        className={cn(shimmer, "rounded-full", className)}
        style={{ width: size, height: size, ...style }}
        aria-hidden="true"
        {...rest}
      />
    );
  }

  if (variant === "card") {
    return (
      <div
        className={cn(
          "rounded-xl border border-[var(--ds-border)] p-5 flex flex-col gap-4",
          className,
        )}
        {...rest}
      >
        <div className="flex items-center gap-3">
          <div
            className={cn(shimmer, "w-10 h-10 rounded-full")}
            aria-hidden="true"
          />
          <div className="flex-1 flex flex-col gap-2">
            <div
              className={cn(shimmer, "h-4 rounded-md w-1/2")}
              aria-hidden="true"
            />
            <div
              className={cn(shimmer, "h-3 rounded-md w-1/3")}
              aria-hidden="true"
            />
          </div>
        </div>
        <div className={cn(shimmer, "h-32 rounded-lg")} aria-hidden="true" />
        <div className="flex flex-col gap-2">
          <div className={cn(shimmer, "h-3 rounded-md")} aria-hidden="true" />
          <div
            className={cn(shimmer, "h-3 rounded-md w-4/5")}
            aria-hidden="true"
          />
        </div>
      </div>
    );
  }

  // block (default)
  return (
    <div
      className={cn(shimmer, rounded ? "rounded-lg" : "rounded-md", className)}
      style={{ width: width ?? "100%", height: height ?? 16, ...style }}
      aria-hidden="true"
      {...rest}
    />
  );
};

Skeleton.displayName = "Skeleton";
