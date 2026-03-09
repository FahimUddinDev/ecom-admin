"use client";

import { cn } from "@/lib/cn";
import type { VariantProps } from "class-variance-authority";
import * as React from "react";
import {
  inputStyles,
  labelStyles,
  stateIcon,
  stateIconColor,
} from "./input.styles";

/* ── Types ─────────────────────────────────────────────────────── */
export type InputState = "default" | "error" | "success" | "warning";

export interface InputProps
  extends
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputStyles> {
  label?: string;
  helperText?: string;
  /** Error message — sets state to "error" automatically */
  errorText?: string;
  /** Warning message — sets state to "warning" automatically */
  warningText?: string;
  /** Success message — sets state to "success" automatically */
  successText?: string;
  required?: boolean;
  prefixIcon?: React.ReactNode;
  /** Explicit suffix; if omitted an auto state-icon is shown */
  suffixIcon?: React.ReactNode;
  /** Hide the automatic state suffix icon */
  noStateIcon?: boolean;
  wrapperClassName?: string;
}

/* ── Component ─────────────────────────────────────────────────── */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      errorText,
      warningText,
      successText,
      required = false,
      prefixIcon,
      suffixIcon,
      noStateIcon = false,
      size = "md",
      state,
      className,
      wrapperClassName,
      id,
      ...rest
    },
    ref,
  ) => {
    const inputId = id ?? React.useId();

    // Auto-resolve state from message props
    const resolvedState: InputState = errorText
      ? "error"
      : warningText
        ? "warning"
        : successText
          ? "success"
          : ((state as InputState) ?? "default");

    // Which message to show below the input
    const subMessage = errorText ?? warningText ?? successText ?? helperText;

    const subColor = errorText
      ? "text-danger"
      : warningText
        ? "text-warning"
        : successText
          ? "text-success"
          : "text-[var(--ds-text-caption)]";

    // Suffix: explicit > auto state icon (if state active) > nothing
    const resolvedSuffix =
      suffixIcon ??
      (!noStateIcon && resolvedState !== "default" ? (
        <span
          className={cn("text-sm font-bold", stateIconColor[resolvedState])}
        >
          {stateIcon[resolvedState]}
        </span>
      ) : null);

    return (
      <div className={cn("flex flex-col gap-0 w-full", wrapperClassName)}>
        {label && (
          <label
            htmlFor={inputId}
            className={cn(labelStyles({ size, required }))}
          >
            {label}
          </label>
        )}

        <div className="relative">
          {prefixIcon && (
            <span
              className={cn(
                "absolute inset-y-0 left-3 flex items-center pointer-events-none",
                stateIconColor[resolvedState],
              )}
            >
              {prefixIcon}
            </span>
          )}

          <input
            ref={ref}
            id={inputId}
            aria-invalid={resolvedState === "error"}
            aria-describedby={subMessage ? `${inputId}-msg` : undefined}
            className={cn(
              inputStyles({
                size,
                state: resolvedState,
                hasPrefix: !!prefixIcon,
                hasSuffix: !!resolvedSuffix,
              }),
              className,
            )}
            {...rest}
          />

          {resolvedSuffix && (
            <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              {resolvedSuffix}
            </span>
          )}
        </div>

        {subMessage && (
          <p id={`${inputId}-msg`} className={cn("mt-1 text-xs", subColor)}>
            {subMessage}
          </p>
        )}
      </div>
    );
  },
);
Input.displayName = "Input";
