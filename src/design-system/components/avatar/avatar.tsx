import { cn } from "@/lib/cn";
import type { VariantProps } from "class-variance-authority";
import Image from "next/image";
import * as React from "react";
import { avatarStyles } from "./avatar.styles";

export interface AvatarProps
  extends
    React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof avatarStyles> {
  /** Image src URL */
  src?: string;
  /** Alt text for image */
  alt?: string;
  /** Fallback initials (auto-computed from alt if omitted) */
  initials?: string;
  /** Badge / status indicator */
  status?: "online" | "offline" | "busy" | "away";
}

const statusColors: Record<NonNullable<AvatarProps["status"]>, string> = {
  online: "bg-success",
  offline: "bg-[var(--ds-fg-muted)]",
  busy: "bg-danger",
  away: "bg-warning",
};

function getInitials(text?: string) {
  if (!text) return "?";
  return text
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "",
  initials,
  size,
  shape,
  status,
  className,
  ...rest
}) => {
  const sizeMap: Record<string, number> = {
    xs: 24,
    sm: 32,
    md: 40,
    lg: 48,
    xl: 64,
    "2xl": 80,
  };
  const px = sizeMap[(size as string) ?? "md"] ?? 40;

  return (
    <span className="relative inline-flex shrink-0">
      <span
        className={cn(avatarStyles({ size, shape }), className)}
        aria-label={alt}
        {...rest}
      >
        {src ? (
          <Image
            src={src}
            alt={alt}
            width={px}
            height={px}
            className="w-full h-full object-cover"
          />
        ) : (
          <span aria-hidden="true">{initials ?? getInitials(alt)}</span>
        )}
      </span>

      {status && (
        <span
          aria-label={`Status: ${status}`}
          className={cn(
            "absolute bottom-0 right-0 rounded-full border-2 border-[var(--ds-bg)]",
            statusColors[status],
            size === "xs" || size === "sm" ? "w-2 h-2" : "w-3 h-3",
          )}
        />
      )}
    </span>
  );
};

Avatar.displayName = "Avatar";
