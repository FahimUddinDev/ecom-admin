import { cn } from "@/lib/cn";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import * as React from "react";

/* ── Card ────────────────────────────────────────────────────────── */
const cardStyles = cva(
  [
    "bg-[var(--ds-bg-subtle)] border border-[var(--ds-border)] rounded-xl",
    "transition-shadow duration-200",
  ].join(" "),
  {
    variants: {
      shadow: {
        none: "",
        sm: "shadow-sm",
        md: "shadow-md",
        card: "shadow-[var(--ds-shadow-card)]",
      },
      hoverable: {
        true: "hover:shadow-md cursor-pointer",
        false: "",
      },
    },
    defaultVariants: { shadow: "card", hoverable: false },
  },
);

export interface CardProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardStyles> {}

export const Card: React.FC<CardProps> = ({
  shadow,
  hoverable,
  className,
  children,
  ...rest
}) => (
  <div className={cn(cardStyles({ shadow, hoverable }), className)} {...rest}>
    {children}
  </div>
);
Card.displayName = "Card";

/* ── CardHeader ──────────────────────────────────────────────────── */
export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  action?: React.ReactNode;
  noBorder?: boolean;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  subtitle,
  action,
  noBorder = false,
  className,
  children,
  ...rest
}) => (
  <div
    className={cn(
      "px-6 py-4 flex items-center justify-between gap-4",
      !noBorder && "border-b border-[var(--ds-border)]",
      className,
    )}
    {...rest}
  >
    <div className="min-w-0">
      {title && (
        <h3 className="text-base font-semibold text-[var(--ds-text-headline)] truncate">
          {title}
        </h3>
      )}
      {subtitle && (
        <p className="text-sm text-[var(--ds-text-caption)] mt-0.5">
          {subtitle}
        </p>
      )}
      {children}
    </div>
    {action && <div className="shrink-0">{action}</div>}
  </div>
);
CardHeader.displayName = "CardHeader";

/* ── CardBody ────────────────────────────────────────────────────── */
export const CardBody: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...rest
}) => <div className={cn("px-6 py-5", className)} {...rest} />;
CardBody.displayName = "CardBody";

/* ── CardFooter ──────────────────────────────────────────────────── */
export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  noBorder?: boolean;
  align?: "left" | "right" | "between";
}

export const CardFooter: React.FC<CardFooterProps> = ({
  noBorder = false,
  align = "right",
  className,
  ...rest
}) => (
  <div
    className={cn(
      "px-6 py-4 flex items-center gap-3",
      !noBorder && "border-t border-[var(--ds-border)]",
      align === "right" && "justify-end",
      align === "between" && "justify-between",
      align === "left" && "justify-start",
      className,
    )}
    {...rest}
  />
);
CardFooter.displayName = "CardFooter";

/* ── StatCard ─────────────────────────────────────────────────────
   Compact card for dashboard KPI metrics
──────────────────────────────────────────────────────────────────── */
export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  value: React.ReactNode;
  change?: number; // percentage, positive = up, negative = down
  icon?: React.ReactNode;
  iconColor?: "primary" | "success" | "warning" | "danger" | "info";
}

const iconBg: Record<NonNullable<StatCardProps["iconColor"]>, string> = {
  primary: "bg-[var(--ds-primary-light)] text-primary",
  success: "bg-[var(--ds-success-light)] text-success",
  warning: "bg-[var(--ds-warning-light)] text-warning",
  danger: "bg-[var(--ds-danger-light)]  text-danger",
  info: "bg-[var(--ds-info-light)]    text-info",
};

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  icon,
  iconColor = "primary",
  className,
  ...rest
}) => (
  <div
    className={cn(
      "bg-[var(--ds-bg-subtle)] border border-[var(--ds-border)] rounded-xl p-5",
      "shadow-[var(--ds-shadow-card)]",
      className,
    )}
    {...rest}
  >
    <div className="flex items-start justify-between gap-4">
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-[var(--ds-text-caption)] truncate">
          {title}
        </p>
        <p className="text-2xl font-bold text-[var(--ds-text-headline)] mt-1 leading-none">
          {value}
        </p>
        {change !== undefined && (
          <p
            className={cn(
              "text-xs font-medium mt-2 flex items-center gap-0.5",
              change >= 0 ? "text-success" : "text-danger",
            )}
          >
            {change >= 0 ? "▲" : "▼"}&nbsp;
            {Math.abs(change)}% vs last period
          </p>
        )}
      </div>
      {icon && (
        <div
          className={cn(
            "shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-xl",
            iconBg[iconColor],
          )}
        >
          {icon}
        </div>
      )}
    </div>
  </div>
);
StatCard.displayName = "StatCard";
