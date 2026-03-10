"use client";

import { Card } from "@/design-system";
import { ReactNode } from "react";

interface FilterBarProps {
  children: ReactNode;
  className?: string;
}

export function FilterBar({ children, className }: FilterBarProps) {
  return (
    <Card
      variant="flat"
      className={`p-4 flex flex-wrap gap-4 items-center sticky top-0 z-10 bg-[var(--ds-bg)] border-b border-[var(--ds-border)] rounded-none -mx-8 px-8 mb-6 ${className || ""}`}
    >
      {children}
    </Card>
  );
}
