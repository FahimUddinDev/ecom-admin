"use client";

import { cn } from "@/lib/cn";
import type { PopoverProps as AntPopoverProps } from "antd";
import { Popover as AntPopover } from "antd";
import type { VariantProps } from "class-variance-authority";
import * as React from "react";
import { popoverStyles } from "./popover.styles";

import {
  AnimationsType,
  PopoverPosition,
  PopoverTrigger,
} from "./popover.types";

export interface PopoverProps
  extends
    Omit<AntPopoverProps, "title" | "content" | "trigger" | "placement">,
    VariantProps<typeof popoverStyles> {
  position?: PopoverPosition;
  children?: React.ReactNode;
  content?: React.ReactNode;
  Button?: React.ReactNode;
  wrapperClassName?: string;
  animationType?: AnimationsType;
  trigger?: PopoverTrigger | PopoverTrigger[];
  open?: boolean;
  id?: string;
  onOpenChange?: (open: boolean) => void;
}

const placementMap: Record<PopoverPosition, AntPopoverProps["placement"]> = {
  [PopoverPosition.Top]: "top",
  [PopoverPosition.TopLeft]: "topLeft",
  [PopoverPosition.TopRight]: "topRight",
  [PopoverPosition.Bottom]: "bottom",
  [PopoverPosition.BottomLeft]: "bottomLeft",
  [PopoverPosition.BottomRight]: "bottomRight",
  [PopoverPosition.Left]: "left",
  [PopoverPosition.LeftTop]: "leftTop",
  [PopoverPosition.LeftBottom]: "leftBottom",
  [PopoverPosition.Right]: "right",
  [PopoverPosition.RightTop]: "rightTop",
  [PopoverPosition.RightBottom]: "rightBottom",
};

/* ── Component ─────────────────────────────────────────────────── */
export const Popover = React.forwardRef<HTMLElement, PopoverProps>(
  (
    {
      position = PopoverPosition.Top,
      children,
      content,
      Button,
      wrapperClassName,
      animationType = AnimationsType.Scale,
      trigger = PopoverTrigger.Click,
      open,
      id,
      onOpenChange,
      className,
      size,
      radius,
      theme,
      ...rest
    },
    ref,
  ) => {
    const popoverId = id ?? React.useId();

    // Ant Design uses 'overlayClassName' and 'rootClassName' for styling popover wrappers.
    // 'className' is assigned to the AntPopover, which usually gets applied to the tooltip node.

    const popoverContent = content !== undefined ? content : children;
    const triggerElement = content !== undefined ? children : Button;

    return (
      <AntPopover
        id={popoverId}
        placement={placementMap[position]}
        trigger={trigger}
        open={open}
        onOpenChange={onOpenChange}
        content={
          <div className={cn("flex flex-col gap-0", wrapperClassName)}>
            {popoverContent}
          </div>
        }
        overlayClassName={cn(
          popoverStyles({ size, radius, theme, animation: animationType }),
          className,
        )}
        {...rest}
      >
        <span
          ref={ref as React.Ref<HTMLSpanElement>}
          className="inline-flex cursor-pointer"
        >
          {triggerElement}
        </span>
      </AntPopover>
    );
  },
);

Popover.displayName = "Popover";
