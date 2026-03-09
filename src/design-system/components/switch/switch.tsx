"use client";

import { cn } from "@/lib/cn";
import type { SwitchProps as AntSwitchProps } from "antd";
import { Switch as AntSwitch } from "antd";
import * as React from "react";

export interface SwitchProps extends AntSwitchProps {
  label?: string;
  description?: string;
  labelPlacement?: "left" | "right";
}

export const Switch: React.FC<SwitchProps> = ({
  label,
  description,
  labelPlacement = "right",
  className,
  ...rest
}) => (
  <label className="inline-flex items-center gap-3 cursor-pointer select-none group">
    {label && labelPlacement === "left" && (
      <div className="flex flex-col">
        <span className="text-sm font-medium text-[var(--ds-text-headline)] leading-none">
          {label}
        </span>
        {description && (
          <span className="text-xs text-[var(--ds-text-caption)] mt-0.5">
            {description}
          </span>
        )}
      </div>
    )}

    <AntSwitch className={cn(className)} {...rest} />

    {label && labelPlacement === "right" && (
      <div className="flex flex-col">
        <span className="text-sm font-medium text-[var(--ds-text-headline)] leading-none">
          {label}
        </span>
        {description && (
          <span className="text-xs text-[var(--ds-text-caption)] mt-0.5">
            {description}
          </span>
        )}
      </div>
    )}
  </label>
);

Switch.displayName = "Switch";
