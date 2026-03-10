"use client";

import { ReactNode } from "react";
import { PageHeader } from "./PageHeader";

interface DetailLayoutProps {
  title: string;
  description?: string;
  actions?: ReactNode;
  children: ReactNode;
}

export function DetailLayout({
  title,
  description,
  actions,
  children,
}: DetailLayoutProps) {
  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto py-8">
      <PageHeader title={title} description={description} actions={actions} />

      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  );
}
