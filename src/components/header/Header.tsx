"use client";

import {
  AnimationsType,
  Avatar,
  Button,
  Popover,
  PopoverPosition,
  PopoverTrigger,
} from "@/design-system";
import Link from "next/link";
import { useEffect, useState } from "react";

const SunIcon = () => (
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
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </svg>
);

const MoonIcon = () => (
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
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);

const ChatIcon = () => (
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
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
  </svg>
);

const BellIcon = () => (
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
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
  </svg>
);

function Header() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.dataset.theme = savedTheme;
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.dataset.theme = "dark";
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.dataset.theme = newTheme;
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="bg-[var(--ds-bg-soft)] w-full flex justify-between items-center py-2 px-5 border-b border-[var(--ds-bg-soft)]">
      <h3 className="text-[var(--ds-text-headline)] font-medium">Admin</h3>
      <div className="flex gap-4 items-center">
        <div className="flex gap-2">
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>

          {/* Chat Link */}
          <Button variant="ghost" size="icon" href="/chat" aria-label="Chat">
            <ChatIcon />
          </Button>

          {/* Notification Popover */}
          <Popover
            position={PopoverPosition.Bottom}
            trigger={PopoverTrigger.Click}
            animationType={AnimationsType.FadeUp}
            size="auto"
            theme="default"
            radius="md"
            overlayClassName="p-0 overflow-hidden"
            content={
              <div className="flex flex-col w-64">
                <div className="p-3 border-b border-[var(--ds-border)] flex justify-between items-center bg-[var(--ds-bg-soft)]">
                  <span className="font-semibold text-[var(--ds-text-headline)]">
                    Notifications
                  </span>
                  <Link
                    href="/notifications"
                    className="text-xs text-[var(--ds-primary)] font-medium hover:underline"
                  >
                    See All
                  </Link>
                </div>
                <div className="flex flex-col">
                  {/* Sample notifications */}
                  <div className="p-3 border-b border-[var(--ds-border)] hover:bg-[var(--ds-bg-muted)] cursor-pointer text-sm transition-colors">
                    <p className="text-[var(--ds-text-headline)] font-medium mb-1">
                      New Order Placed!
                    </p>
                    <p className="text-[var(--ds-text-paragraph)] text-xs">
                      Order #1234 from John Doe.
                    </p>
                  </div>
                  <div className="p-3 hover:bg-[var(--ds-bg-muted)] cursor-pointer text-sm transition-colors">
                    <p className="text-[var(--ds-text-headline)] font-medium mb-1">
                      Low Stock Alert
                    </p>
                    <p className="text-[var(--ds-text-paragraph)] text-xs">
                      Product "Wireless Earbuds" is low on stock.
                    </p>
                  </div>
                </div>
              </div>
            }
          >
            <Button
              variant="ghost"
              size="icon"
              aria-label="Notifications"
              className="relative group"
            >
              <BellIcon />
              {/* Unread badge indicator */}
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[var(--ds-danger)] border border-[var(--ds-bg-soft)] group-hover:border-[var(--ds-bg-subtle)] transition-colors"></span>
            </Button>
          </Popover>
        </div>

        <div className="h-6 border-l border-[var(--ds-border-strong)]"></div>

        <Popover
          position={PopoverPosition.Bottom}
          trigger={PopoverTrigger.Click}
          animationType={AnimationsType.FadeUp}
          size="auto"
          theme="default"
          radius="md"
          overlayClassName="p-0"
          content={
            <div className="flex flex-col gap-0 text-sm text-[var(--ds-text-headline)]">
              <div className="flex items-center gap-2 p-2 px-4 hover:bg-[var(--ds-bg-muted)] cursor-pointer transition-colors">
                <span>Profile</span>
              </div>
              <div className="flex items-center gap-2 p-2 px-4 hover:bg-[var(--ds-bg-muted)] cursor-pointer transition-colors">
                <span>Settings</span>
              </div>
              <div className="flex items-center gap-2 p-2 px-4 text-[var(--ds-danger)] hover:bg-[var(--ds-danger-light)] cursor-pointer transition-colors">
                <span>Logout</span>
              </div>
            </div>
          }
        >
          <div className="cursor-pointer">
            <Avatar src="/avatar.jpg" alt="Avatar" />
          </div>
        </Popover>
      </div>
    </div>
  );
}

export default Header;
