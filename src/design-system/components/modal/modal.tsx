"use client";

import { cn } from "@/lib/cn";
import type { ModalProps as AntModalProps } from "antd";
import { Modal as AntModal } from "antd";
import * as React from "react";

export interface ModalProps extends AntModalProps {
  /** Subtitle shown below the title */
  subtitle?: string;
}

export const Modal: React.FC<ModalProps> = ({
  title,
  subtitle,
  className,
  children,
  ...rest
}) => (
  <AntModal
    className={cn("ds-modal", className)}
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
      ) : undefined
    }
    {...rest}
  >
    {children}
  </AntModal>
);

Modal.displayName = "Modal";

/** Confirm dialog shorthand */
export const {
  confirm: modalConfirm,
  info: modalInfo,
  success: modalSuccess,
  error: modalError,
} = AntModal;
