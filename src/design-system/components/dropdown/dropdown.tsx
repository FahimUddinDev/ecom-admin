"use client";

import type { DropdownProps as AntDropdownProps, MenuProps } from "antd";
import { Dropdown as AntDropdown } from "antd";
import * as React from "react";

export interface DropdownMenuItem {
  key: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  danger?: boolean;
  disabled?: boolean;
  divider?: boolean;
}

export interface DropdownProps extends Omit<AntDropdownProps, "menu"> {
  items: DropdownMenuItem[];
  onSelect?: (key: string) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({
  items,
  onSelect,
  children,
  trigger = ["click"],
  ...rest
}) => {
  const menu: MenuProps = {
    items: items.flatMap((item) =>
      item.divider
        ? [{ type: "divider" as const }]
        : [
            {
              key: item.key,
              label: item.label,
              icon: item.icon,
              danger: item.danger,
              disabled: item.disabled,
            },
          ],
    ),
    onClick: ({ key }) => onSelect?.(key),
  };

  return (
    <AntDropdown menu={menu} trigger={trigger} {...rest}>
      <span className="inline-flex cursor-pointer">{children}</span>
    </AntDropdown>
  );
};

Dropdown.displayName = "Dropdown";
