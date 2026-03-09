"use client";

import { cn } from "@/lib/cn";
import type { PaginationProps as AntPaginationProps } from "antd";
import { Pagination as AntPagination } from "antd";
import * as React from "react";

export interface PaginationProps extends AntPaginationProps {
  className?: string;
}

export const Pagination: React.FC<PaginationProps> = ({
  className,
  ...rest
}) => (
  <div className={cn("flex justify-end items-center py-3", className)}>
    <AntPagination
      showSizeChanger
      showQuickJumper
      showTotal={(total, range) => `${range[0]}–${range[1]} of ${total} items`}
      {...rest}
    />
  </div>
);

Pagination.displayName = "Pagination";
