"use client";

import type { TooltipProps as AntTooltipProps } from "antd";
import { Tooltip as AntTooltip } from "antd";
import * as React from "react";

export interface TooltipProps extends AntTooltipProps {
  content: React.ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  placement = "top",
  ...rest
}) => (
  <AntTooltip title={content} placement={placement} {...rest}>
    {/* Wrap to ensure tooltip always has a valid host element */}
    <span className="inline-flex">{children}</span>
  </AntTooltip>
);

Tooltip.displayName = "Tooltip";
