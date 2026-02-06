import { cn } from "@/lib/utils";

interface DividerProps {
  className?: string;
  variant?: "gold" | "subtle";
}

export function Divider({ className, variant = "gold" }: DividerProps) {
  return (
    <div className={cn("w-20", className)}>
      <svg
        viewBox="0 0 80 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
      >
        <path
          d="M0 4C10 4 10 2 20 2C30 2 30 6 40 6C50 6 50 2 60 2C70 2 70 4 80 4"
          stroke={variant === "gold" ? "#D4A843" : "currentColor"}
          strokeWidth="2"
          strokeLinecap="round"
          className={variant === "subtle" ? "opacity-20" : ""}
        />
      </svg>
    </div>
  );
}
