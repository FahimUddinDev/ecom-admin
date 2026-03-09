"use client";

import { cn } from "@/lib/cn";
import type { SelectProps as AntSelectProps } from "antd";
import { Select as AntSelect } from "antd";
import * as React from "react";
import { labelStyles } from "../input/input.styles";

export interface SelectProps extends AntSelectProps {
  label?: string;
  helperText?: string;
  errorText?: string;
  required?: boolean;
  wrapperClassName?: string;
}

export const Select: React.FC<SelectProps> = ({
  label,
  helperText,
  errorText,
  required = false,
  wrapperClassName,
  className,
  status,
  ...rest
}) => {
  const id = React.useId();
  return (
    <div className={cn("flex flex-col gap-0 w-full", wrapperClassName)}>
      {label && (
        <label htmlFor={id} className={labelStyles({ required })}>
          {label}
        </label>
      )}
      <AntSelect
        id={id}
        status={errorText ? "error" : status}
        className={cn("w-full", className)}
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
};

Select.displayName = "Select";

// Re-export Ant Design Option for convenience
export const { Option } = AntSelect;
