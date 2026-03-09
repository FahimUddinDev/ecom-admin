"use client";

import { Dropdown, Tooltip } from "@/design-system";
import { cn } from "@/lib/cn";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

// Icons
const DashboardIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="7" height="9" x="3" y="3" rx="1" />
    <rect width="7" height="5" x="14" y="3" rx="1" />
    <rect width="7" height="9" x="14" y="12" rx="1" />
    <rect width="7" height="5" x="3" y="16" rx="1" />
  </svg>
);
const UsersIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const CatalogIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </svg>
);
const PackageIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m7.5 4.27 9 5.15" />
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
    <path d="m3.3 7 8.7 5 8.7-5" />
    <path d="M12 22V12" />
  </svg>
);
const OrdersIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="8" cy="21" r="1" />
    <circle cx="19" cy="21" r="1" />
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
  </svg>
);
const PromoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
    <path d="M7 7h.01" />
  </svg>
);
const ModIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
  </svg>
);
const SettingsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);
const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);
const PanelLeftClose = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="M9 3v18" />
    <path d="m16 15-3-3 3-3" />
  </svg>
);
const PanelLeftOpen = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="M9 3v18" />
    <path d="m14 9 3 3-3 3" />
  </svg>
);

const menuItems = [
  // Dashboard
  { label: "Dashboard", href: "/", icon: <DashboardIcon /> },

  // User & Role Management
  {
    label: "Users & Roles",
    icon: <UsersIcon />,
    subItems: [
      { label: "Users Directory", href: "/users" },
      { label: "Sellers Directory", href: "/sellers" },
      { label: "KYC Moderation", href: "/sellers-review" },
    ],
  },

  // Catalog & Product Management
  {
    label: "Catalog & Products",
    icon: <CatalogIcon />,
    subItems: [
      { label: "Categories", href: "/categories" },
      { label: "Sub Categories", href: "/sub-categories" },
      { label: "Child Categories", href: "/child-categories" },
      { label: "Product Moderation", href: "/products" },
    ],
  },

  // Order & Transaction Management
  {
    label: "Transactions",
    icon: <OrdersIcon />,
    subItems: [
      { label: "Orders List", href: "/orders" },
      { label: "Returns Management", href: "/returns" },
    ],
  },

  // Marketing & Promotions
  {
    label: "Marketing",
    icon: <PromoIcon />,
    subItems: [
      { label: "Coupons Builder", href: "/coupons" },
      { label: "Offers Management", href: "/offers" },
    ],
  },

  // Content & Interaction Moderation
  {
    label: "Moderation",
    icon: <ModIcon />,
    subItems: [
      { label: "Reviews Moderation", href: "/reviews" },
      { label: "Q&A Moderation", href: "/qa" },
    ],
  },

  // System Configuration & Settings
  {
    label: "System Configuration",
    icon: <SettingsIcon />,
    subItems: [
      { label: "Settings", href: "/settings" },
      { label: "Email Templates", href: "/email-templates" },
    ],
  },
];

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});
  const pathname = usePathname();
  const router = useRouter();

  const toggleSubmenu = (label: string) => {
    // Only toggle the state if the sidebar is open.
    // We don't want to force the sidebar open automatically.
    if (!isCollapsed) {
      setOpenMenus((prev) => ({ ...prev, [label]: !prev[label] }));
    }
  };

  return (
    <aside
      className={cn(
        "bg-[var(--ds-bg-soft)] border-r border-[var(--ds-border)] transition-all duration-300 flex flex-col h-full",
        isCollapsed ? "w-20" : "w-64",
      )}
    >
      <div className="p-4 flex items-center justify-between border-b border-[var(--ds-border)] h-16 shrink-0">
        {!isCollapsed && (
          <span className="font-semibold text-[var(--ds-text-headline)] truncate">
            Menu
          </span>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={cn(
            "p-2 rounded-md hover:bg-[var(--ds-bg-subtle)] text-[var(--ds-text-paragraph)] hover:text-[var(--ds-text-headline)] transition-colors",
            isCollapsed && "mx-auto",
          )}
          aria-label="Toggle Sidebar"
          title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          {isCollapsed ? <PanelLeftOpen /> : <PanelLeftClose />}
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto py-4 flex flex-col gap-1 px-3 custom-scrollbar">
        {menuItems.map((item) => {
          // Determine if any sub-item is active
          const isAnySubActive =
            item.subItems?.some((sub) => pathname === sub.href) ?? false;
          const isActive = pathname === item.href || isAnySubActive;
          const isOpen = openMenus[item.label] || isAnySubActive;

          // Render item block for simple link
          if (!item.subItems) {
            const content = (
              <Link
                href={item.href!}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-md transition-colors font-medium text-sm w-full",
                  isActive
                    ? "bg-[var(--ds-bg-subtle)] text-[var(--ds-text-headline)]"
                    : "text-[var(--ds-text-paragraph)] hover:bg-[var(--ds-bg-subtle)] hover:text-[var(--ds-text-headline)]",
                  isCollapsed && "justify-center px-0",
                )}
              >
                <span
                  className={cn(
                    "shrink-0",
                    isActive
                      ? "text-[var(--ds-text-headline)]"
                      : "text-[var(--ds-text-paragraph)]",
                  )}
                >
                  {item.icon}
                </span>
                {!isCollapsed && <span className="truncate">{item.label}</span>}
              </Link>
            );

            if (isCollapsed) {
              return (
                <Tooltip
                  key={item.label}
                  content={item.label}
                  placement="right"
                >
                  {content}
                </Tooltip>
              );
            }
            return <div key={item.label}>{content}</div>;
          }

          // Render item block for items with submenus
          const buttonContent = (
            <button
              onClick={() => toggleSubmenu(item.label)}
              // The button becomes effectively non-clickable in collapsed state
              // because the Dropdown trigger intercepts the hover.
              // For consistent behavior, we visually distinguish it if active.
              className={cn(
                "flex items-center justify-between px-3 py-2.5 rounded-md transition-colors font-medium text-sm w-full outline-none",
                isActive
                  ? "bg-[var(--ds-bg-subtle)] text-[var(--ds-text-headline)]"
                  : "text-[var(--ds-text-paragraph)] hover:bg-[var(--ds-bg-subtle)] hover:text-[var(--ds-text-headline)]",
                isCollapsed && "justify-center px-0",
              )}
            >
              <div className="flex items-center gap-3">
                <span
                  className={cn(
                    "shrink-0",
                    isActive
                      ? "text-[var(--ds-text-headline)]"
                      : "text-[var(--ds-text-paragraph)]",
                  )}
                >
                  {item.icon}
                </span>
                {!isCollapsed && <span className="truncate">{item.label}</span>}
              </div>
              {!isCollapsed && (
                <ChevronDownIcon
                  className={cn(
                    "transition-transform duration-300 text-[var(--ds-text-paragraph)]",
                    isOpen && "rotate-180",
                  )}
                />
              )}
            </button>
          );

          return (
            <div key={item.label} className="flex flex-col gap-1">
              {isCollapsed ? (
                // When collapsed: show a dropdown menu on hover containing the submenu items.
                <Dropdown
                  placement="rightTop"
                  trigger={["hover"]}
                  items={item.subItems.map((s) => ({
                    key: s.href,
                    label: s.label,
                  }))}
                  onSelect={(key) => {
                    router.push(key);
                  }}
                >
                  {buttonContent}
                </Dropdown>
              ) : (
                // When expanded: standard recursive accordion button
                buttonContent
              )}

              {/* Submenu rendering (only visible when expanded) with smooth height transition */}
              {!isCollapsed && (
                <div
                  className={cn(
                    "grid transition-all duration-300 ease-in-out",
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0 pointer-events-none",
                  )}
                >
                  <div className="overflow-hidden flex flex-col gap-1 mt-1 pl-9 pr-2">
                    {item.subItems.map((subItem) => {
                      const isSubActive = pathname === subItem.href;
                      return (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className={cn(
                            "px-3 py-2 rounded-md text-sm transition-colors",
                            isSubActive
                              ? "bg-[var(--ds-bg-subtle)] text-[var(--ds-text-headline)] font-medium"
                              : "text-[var(--ds-text-paragraph)] hover:text-[var(--ds-text-headline)] hover:bg-[var(--ds-bg-subtle)]",
                          )}
                        >
                          {subItem.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
