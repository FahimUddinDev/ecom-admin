"use client";
import { cn } from "@/lib/cn";
import type { SelectProps as AntSelectProps } from "antd";
import { Select as AntSelect, ConfigProvider } from "antd";
import * as React from "react";
import { labelStyles } from "../input/input.styles";

export type SelectSize = "sm" | "md" | "lg";

export interface SelectProps extends Omit<AntSelectProps, "size"> {
  label?: string;
  helperText?: string;
  errorText?: string;
  required?: boolean;
  wrapperClassName?: string;
  size?: SelectSize;
}

/** Map DS size to pixel height (matches Input h-8 / h-10 / h-12) */
const sizeHeightMap: Record<SelectSize, number> = {
  sm: 32,
  md: 40,
  lg: 48,
};

export const Select: React.FC<SelectProps> = ({
  label,
  helperText,
  errorText,
  required = false,
  wrapperClassName,
  className,
  status,
  size = "md",
  ...rest
}) => {
  const id = React.useId();
  const height = sizeHeightMap[size];

  return (
    <div className={cn("flex flex-col gap-0 w-full", wrapperClassName)}>
      {label && (
        <label htmlFor={id} className={labelStyles({ required, size })}>
          {label}
        </label>
      )}
      <ConfigProvider
        theme={{
          cssVar: true,
          components: {
            Select: {
              /* ── Selector (the input box) ────────────────────── */
              controlHeight: height,
              selectorBg: "var(--ds-bg)",
              colorBorder: "var(--ds-border)",
              colorText: "var(--ds-text-headline)",
              colorTextPlaceholder: "var(--ds-text-placeholder)",
              colorIcon: "var(--ant-color-text-quaternary)",
              borderRadius: 8,

              /* ── Focus / Active ──────────────────────────────── */
              colorPrimaryHover: "var(--ds-primary)",
              colorPrimary: "var(--ds-primary)",
              controlOutline: "rgba(79, 70, 229, 0.2)",
              controlOutlineWidth: 2,

              /* ── Dropdown options ────────────────────────────── */
              optionSelectedBg: "var(--ds-primary-light)",
              optionSelectedColor: "var(--ds-primary)",
              optionSelectedFontWeight: 600,
              optionActiveBg: "var(--ds-bg-soft)",
              optionFontSize: size === "lg" ? 16 : 14,
              optionHeight: 32,
              optionPadding: "5px 12px",

              /* ── Clear button ────────────────────────────────── */
              clearBg: "var(--ds-bg)",

              /* ── Multiple mode item ──────────────────────────── */
              multipleItemBg: "var(--ds-bg-subtle)",
              multipleItemBorderColor: "var(--ds-border)",
            },
          },
        }}
      >
        <AntSelect
          id={id}
          status={errorText ? "error" : status}
          className={cn("w-full ds-select", `ds-select-${size}`, className)}
          popupClassName="ds-select-dropdown"
          {...rest}
        />
      </ConfigProvider>
      {errorText && <p className="mt-1 text-xs text-danger">{errorText}</p>}
      {!errorText && helperText && (
        <p className="mt-1 text-xs text-[var(--ds-text-caption)]">
          {helperText}
        </p>
      )}
    </div>
  );
};

Select.displayName = "Select";

// Re-export Ant Design Option for convenience
export const { Option } = AntSelect;
