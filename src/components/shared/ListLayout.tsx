"use client";

import { ReactNode } from "react";
import { FilterBar } from "./FilterBar";
import { PageHeader } from "./PageHeader";

interface ListLayoutProps {
  title: string;
  description?: string;
  actions?: ReactNode;
  filters?: ReactNode;
  children: ReactNode;
  pagination?: ReactNode;
}

export function ListLayout({
  title,
  description,
  actions,
  filters,
  children,
  pagination,
}: ListLayoutProps) {
  return (
    <div className="flex flex-col h-full">
      <PageHeader title={title} description={description} actions={actions} />

      {filters && <FilterBar>{filters}</FilterBar>}

      <div className="flex-1 overflow-auto">{children}</div>

      {pagination && (
        <div className="sticky bottom-0 bg-[var(--ds-bg)] border-t border-[var(--ds-border)] p-4 -mx-8 px-8 mt-auto z-10">
          {pagination}
        </div>
      )}
    </div>
  );
}
