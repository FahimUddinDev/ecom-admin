"use client";

import { cn } from "@/lib/cn";
import type { TagProps as AntTagProps } from "antd";
import { Tag as AntTag } from "antd";
import * as React from "react";

export interface TagProps extends AntTagProps {
  /** Color shorthand using DS token names */
  dsColor?: "primary" | "success" | "warning" | "danger" | "info" | "neutral";
}

const dsColorMap: Record<NonNullable<TagProps["dsColor"]>, string> = {
  primary: "var(--ds-primary)",
  success: "var(--ds-success)",
  warning: "var(--ds-warning)",
  danger: "var(--ds-danger)",
  info: "var(--ds-info)",
  neutral: "var(--ds-fg-muted)",
};

export const Tag: React.FC<TagProps> = ({
  dsColor,
  color,
  className,
  ...rest
}) => (
  <AntTag
    color={dsColor ? dsColorMap[dsColor] : color}
    className={cn("font-medium text-xs rounded-md", className)}
    {...rest}
  />
);

Tag.displayName = "Tag";
