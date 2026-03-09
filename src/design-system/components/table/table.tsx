"use client";

import { cn } from "@/lib/cn";
import { Table as AntTable } from "antd";
import type { TableProps as AntTableProps, ColumnType } from "antd/es/table";

export interface DataTableProps<
  T extends object = object,
> extends AntTableProps<T> {
  /** Adds alternating row background for readability */
  striped?: boolean;
  /** Wraps table in a Card-like surface */
  surfaced?: boolean;
  className?: string;
}

export function DataTable<T extends object = object>({
  striped = false,
  surfaced = true,
  className,
  ...rest
}: DataTableProps<T>) {
  return (
    <div
      className={cn(
        surfaced &&
          "rounded-xl border border-[var(--ds-border)] overflow-hidden shadow-[var(--ds-shadow-card)]",
        className,
      )}
    >
      <AntTable<T>
        className={cn("ds-table", striped && "ds-table-striped")}
        pagination={false}
        scroll={{ x: "max-content" }}
        {...rest}
      />
    </div>
  );
}

DataTable.displayName = "DataTable";

/** Re-export column type for convenience */
export type { ColumnType };
