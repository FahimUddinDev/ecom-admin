"use client";

import { cn } from "@/lib/cn";
import type {
  CheckboxProps as AntCheckboxProps,
  CheckboxGroupProps,
} from "antd";
import { Checkbox as AntCheckbox } from "antd";
import * as React from "react";

export interface CheckboxProps extends AntCheckboxProps {
  label?: string;
  helperText?: string;
  errorText?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  helperText,
  errorText,
  className,
  children,
  ...rest
}) => (
  <div className="flex flex-col gap-1">
    <AntCheckbox
      className={cn("text-[var(--ds-text-paragraph)]", className)}
      {...rest}
    >
      {label ?? children}
    </AntCheckbox>
    {errorText && <p className="text-xs text-danger pl-6">{errorText}</p>}
    {!errorText && helperText && (
      <p className="text-xs text-[var(--ds-text-caption)] pl-6">{helperText}</p>
    )}
  </div>
);

Checkbox.displayName = "Checkbox";

export const CheckboxGroup = AntCheckbox.Group;
export type { CheckboxGroupProps };
