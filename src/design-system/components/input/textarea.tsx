"use client";

import { cn } from "@/lib/cn";
import type { VariantProps } from "class-variance-authority";
import * as React from "react";
import { inputStyles, labelStyles } from "./input.styles";

export interface TextareaProps
  extends
    Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "size">,
    Pick<VariantProps<typeof inputStyles>, "size" | "state"> {
  label?: string;
  helperText?: string;
  errorText?: string;
  required?: boolean;
  rows?: number;
  resize?: "none" | "vertical" | "horizontal" | "both";
  wrapperClassName?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      helperText,
      errorText,
      required = false,
      size = "md",
      state,
      rows = 4,
      resize = "vertical",
      className,
      wrapperClassName,
      id,
      ...rest
    },
    ref,
  ) => {
    const textareaId = id ?? React.useId();
    const resolvedState = errorText ? "error" : (state ?? "default");

    const resizeClass = {
      none: "resize-none",
      vertical: "resize-y",
      horizontal: "resize-x",
      both: "resize",
    }[resize];

    return (
      <div className={cn("flex flex-col gap-0 w-full", wrapperClassName)}>
        {label && (
          <label
            htmlFor={textareaId}
            className={cn(labelStyles({ size, required }))}
          >
            {label}
          </label>
        )}

        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          aria-invalid={resolvedState === "error"}
          className={cn(
            inputStyles({
              size,
              state: resolvedState as "error" | "success" | "default",
            }),
            "h-auto py-2.5",
            resizeClass,
            className,
          )}
          {...rest}
        />

        {errorText && <p className="mt-1 text-xs text-danger">{errorText}</p>}
        {!errorText && helperText && (
          <p className="mt-1 text-xs text-[var(--ds-text-caption)]">
            {helperText}
          </p>
        )}
      </div>
    );
  },
);
Textarea.displayName = "Textarea";
