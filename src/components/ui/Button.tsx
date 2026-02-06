"use client";

import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-medium rounded-full cursor-pointer",
        "transition-all duration-500 ease-out",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900",
        {
          "bg-gold-400 text-navy-950 hover:bg-gold-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-gold-400/20 active:scale-[0.98]":
            variant === "primary",
          "border-2 border-navy-950/20 text-navy-950 hover:border-gold-500 hover:text-gold-500 hover:scale-[1.02] bg-transparent":
            variant === "outline",
          "text-navy-950 hover:text-gold-500 hover:scale-[1.02] bg-transparent":
            variant === "ghost",
        },
        {
          "px-5 py-2.5 text-sm": size === "sm",
          "px-7 py-3.5 text-base": size === "md",
          "px-9 py-4 text-lg": size === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
