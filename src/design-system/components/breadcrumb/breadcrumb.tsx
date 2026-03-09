"use client";

import type { BreadcrumbProps as AntBreadcrumbProps } from "antd";
import { Breadcrumb as AntBreadcrumb } from "antd";
import Link from "next/link";
import * as React from "react";

export interface BreadcrumbItem {
  label: React.ReactNode;
  href?: string;
}

export interface BreadcrumbProps extends Omit<AntBreadcrumbProps, "items"> {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, ...rest }) => (
  <AntBreadcrumb
    items={items.map(({ label, href }) => ({
      title: href ? (
        <Link
          href={href}
          className="text-[var(--ds-text-caption)] hover:text-primary transition-colors text-sm"
        >
          {label}
        </Link>
      ) : (
        <span className="text-[var(--ds-text-subtitle)] font-medium text-sm">
          {label}
        </span>
      ),
    }))}
    {...rest}
  />
);

Breadcrumb.displayName = "Breadcrumb";
