import * as React from "react";

import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost" | "danger";
  size?: "sm" | "md";
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50",
        size === "sm" ? "h-9 px-3 text-sm" : "h-10 px-4 text-sm",
        variant === "primary" &&
          "bg-zinc-50 text-zinc-900 hover:bg-zinc-200",
        variant === "ghost" &&
          "bg-transparent text-zinc-100 hover:bg-zinc-900",
        variant === "danger" &&
          "bg-red-500 text-white hover:bg-red-600",
        className,
      )}
      {...props}
    />
  );
}

