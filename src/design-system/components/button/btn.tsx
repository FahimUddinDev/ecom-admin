"use client";

import { cn } from "@/lib/cn";
import type { VariantProps } from "class-variance-authority";
import Link from "next/link";
import * as React from "react";
import { buttonStyles } from "./btn.styles";

/* ── Inline spinner (used for loading state) ────────────────────── */
const ButtonSpinner = ({ size }: { size?: string | null }) => {
  const sz =
    size === "xs" || size === "sm"
      ? "w-3 h-3"
      : size === "lg" || size === "xl"
        ? "w-5 h-5"
        : "w-4 h-4";

  return (
    <span
      aria-hidden="true"
      className={cn(
        sz,
        "shrink-0 rounded-full border-2 border-current border-t-transparent",
        "animate-spin inline-block",
      )}
    />
  );
};

/* ── Types ──────────────────────────────────────────────────────── */
type ButtonBaseProps = VariantProps<typeof buttonStyles> & {
  className?: string;
  children?: React.ReactNode;
  /** Shows a spinner and disables the button */
  loading?: boolean;
  /** Text shown SR-only while loading (for accessibility) */
  loadingText?: string;
};

type ButtonAsButton = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };

type ButtonAsAnchor = ButtonBaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

/* ── Component ──────────────────────────────────────────────────── */
export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>((props, ref) => {
  const {
    variant,
    size,
    fullWidth,
    loading = false,
    loadingText = "Loading…",
    className,
    children,
  } = props;

  const classes = cn(
    buttonStyles({ variant, size, fullWidth, loading }),
    className,
  );

  const content = (
    <>
      {loading && <ButtonSpinner size={size as string} />}
      {loading ? (
        <>
          <span className="sr-only">{loadingText}</span>
          <span aria-hidden="true">{children}</span>
        </>
      ) : (
        children
      )}
    </>
  );

  if ("href" in props && props.href !== undefined) {
    const {
      href,
      target,
      rel,
      onClick,
      children: _,
      ...rest
    } = props as ButtonAsAnchor;
    return (
      <Link
        {...rest}
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        onClick={!loading ? onClick : undefined}
        className={classes}
        aria-busy={loading}
      >
        {content}
      </Link>
    );
  }

  const {
    type = "button",
    disabled,
    onClick,
    children: __,
    ...rest
  } = props as ButtonAsButton;

  return (
    <button
      {...rest}
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      aria-busy={loading}
      className={classes}
    >
      {content}
    </button>
  );
});

Button.displayName = "Button";
