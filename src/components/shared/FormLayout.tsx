"use client";

import { Button } from "@/design-system";
import { ReactNode } from "react";
import { PageHeader } from "./PageHeader";

interface FormLayoutProps {
  title: string;
  description?: string;
  children: ReactNode;
  onSubmit: () => void;
  onCancel: () => void;
  isSubmitting?: boolean;
  submitLabel?: string;
  cancelLabel?: string;
}

export function FormLayout({
  title,
  description,
  children,
  onSubmit,
  onCancel,
  isSubmitting = false,
  submitLabel = "Save Changes",
  cancelLabel = "Cancel",
}: FormLayoutProps) {
  return (
    <div className="flex flex-col h-full max-w-4xl mx-auto py-8">
      <PageHeader title={title} description={description} />

      <div className="flex-1 overflow-auto mb-20 px-1">{children}</div>

      <div className="fixed bottom-0 left-0 right-0 sm:left-64 bg-[var(--ds-bg)] border-t border-[var(--ds-border)] p-4 px-8 flex justify-end gap-3 z-20 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        <Button variant="ghost" onClick={onCancel} disabled={isSubmitting}>
          {cancelLabel}
        </Button>
        <Button onClick={onSubmit} loading={isSubmitting}>
          {submitLabel}
        </Button>
      </div>
    </div>
  );
}
