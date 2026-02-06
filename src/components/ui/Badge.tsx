import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "teal" | "outline";
  className?: string;
}

export function Badge({ children, variant = "gold", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase",
        {
          "bg-gold-400/15 text-gold-500 border border-gold-500/30":
            variant === "gold",
          "bg-teal-400/10 text-teal-400 border border-teal-400/20":
            variant === "teal",
          "bg-transparent text-cream-50/60 border border-cream-50/20":
            variant === "outline",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
