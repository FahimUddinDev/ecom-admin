"use client";

import { cn } from "@/lib/cn";
import type { DrawerProps as AntDrawerProps } from "antd";
import { Drawer as AntDrawer } from "antd";
import * as React from "react";

export interface DrawerProps extends AntDrawerProps {
  subtitle?: string;
}

export const Drawer: React.FC<DrawerProps> = ({
  title,
  subtitle,
  className,
  children,
  width = 480,
  ...rest
}) => (
  <AntDrawer
    className={cn("ds-drawer", className)}
    width={width}
    title={
      title ? (
        <div className="flex flex-col gap-0.5">
          <span className="text-base font-semibold text-[var(--ds-text-headline)]">
            {title}
          </span>
          {subtitle && (
            <span className="text-sm font-normal text-[var(--ds-text-caption)]">
              {subtitle}
            </span>
          )}
        </div>
      ) : (
        title
      )
    }
    {...rest}
  >
    {children}
  </AntDrawer>
);

Drawer.displayName = "Drawer";
