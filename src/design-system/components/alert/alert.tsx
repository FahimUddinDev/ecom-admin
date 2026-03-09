"use client";

import { cn } from "@/lib/cn";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import * as React from "react";

const alertStyles = cva("flex gap-3 rounded-xl border p-4 text-sm", {
  variants: {
    variant: {
      info: "bg-[var(--ds-info-light)]    border-info/30    text-info",
      success: "bg-[var(--ds-success-light)] border-success/30 text-success",
      warning: "bg-[var(--ds-warning-light)] border-warning/30 text-warning",
      danger: "bg-[var(--ds-danger-light)]  border-danger/30  text-danger",
      neutral:
        "bg-[var(--ds-bg-subtle)]     border-[var(--ds-border)] text-[var(--ds-text-paragraph)]",
    },
  },
  defaultVariants: { variant: "info" },
});

const icons: Record<string, string> = {
  info: "ℹ",
  success: "✓",
  warning: "⚠",
  danger: "✕",
  neutral: "•",
};

export interface AlertProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertStyles> {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
}

export const Alert: React.FC<AlertProps> = ({
  variant = "info",
  title,
  description,
  icon,
  dismissible = false,
  onDismiss,
  className,
  children,
  ...rest
}) => {
  const [visible, setVisible] = React.useState(true);
  if (!visible) return null;

  return (
    <div
      role="alert"
      className={cn(alertStyles({ variant }), className)}
      {...rest}
    >
      {/* Icon */}
      <span
        className="mt-0.5 shrink-0 text-lg leading-none font-bold"
        aria-hidden="true"
      >
        {icon ?? icons[variant ?? "info"]}
      </span>

      {/* Content */}
      <div className="flex-1 min-w-0">
        {title && <p className="font-semibold leading-snug mb-0.5">{title}</p>}
        {description && (
          <p className="opacity-90 leading-relaxed">{description}</p>
        )}
        {children}
      </div>

      {/* Dismiss */}
      {dismissible && (
        <button
          type="button"
          aria-label="Dismiss alert"
          className="shrink-0 opacity-60 hover:opacity-100 transition-opacity text-lg leading-none self-start"
          onClick={() => {
            setVisible(false);
            onDismiss?.();
          }}
        >
          ×
        </button>
      )}
    </div>
  );
};

Alert.displayName = "Alert";
