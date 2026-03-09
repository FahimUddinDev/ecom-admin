"use client";

import { cn } from "@/lib/cn";
import type { TabsProps as AntTabsProps } from "antd";
import { Tabs as AntTabs } from "antd";
import * as React from "react";

export interface TabItem {
  key: string;
  label: React.ReactNode;
  children: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps extends Omit<AntTabsProps, "items"> {
  items: TabItem[];
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({ items, className, ...rest }) => (
  <AntTabs
    className={cn("ds-tabs", className)}
    items={items.map(({ key, label, children, icon, disabled }) => ({
      key,
      label: (
        <span className="flex items-center gap-1.5">
          {icon}
          {label}
        </span>
      ),
      children,
      disabled,
    }))}
    {...rest}
  />
);

Tabs.displayName = "Tabs";
