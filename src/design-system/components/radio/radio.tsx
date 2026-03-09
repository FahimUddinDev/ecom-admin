"use client";

import { cn } from "@/lib/cn";
import type { RadioProps as AntRadioProps, RadioGroupProps } from "antd";
import { Radio as AntRadio } from "antd";
import * as React from "react";
import { labelStyles } from "../input/input.styles";

export interface RadioGroupWrapperProps extends RadioGroupProps {
  label?: string;
  helperText?: string;
  errorText?: string;
  required?: boolean;
  wrapperClassName?: string;
  direction?: "horizontal" | "vertical";
}

export const RadioGroup: React.FC<RadioGroupWrapperProps> = ({
  label,
  helperText,
  errorText,
  required = false,
  wrapperClassName,
  direction = "vertical",
  className,
  ...rest
}) => (
  <div className={cn("flex flex-col gap-1 w-full", wrapperClassName)}>
    {label && <span className={labelStyles({ required })}>{label}</span>}
    <AntRadio.Group
      className={cn(
        direction === "vertical"
          ? "flex flex-col gap-2"
          : "flex flex-row gap-4 flex-wrap",
        className,
      )}
      {...rest}
    />
    {errorText && <p className="text-xs text-danger">{errorText}</p>}
    {!errorText && helperText && (
      <p className="text-xs text-[var(--ds-text-caption)]">{helperText}</p>
    )}
  </div>
);

RadioGroup.displayName = "RadioGroup";

export const Radio = AntRadio;
export type { AntRadioProps as RadioProps };
