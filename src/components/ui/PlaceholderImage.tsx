"use client";

import { cn } from "@/lib/utils";

interface PlaceholderImageProps {
  src?: string;
  alt?: string;
  className?: string;
  gradient?: string;
  aspectRatio?: string;
}

export function PlaceholderImage({
  src,
  alt = "",
  className,
  gradient = "from-navy-800 via-navy-700 to-teal-400/30",
  aspectRatio = "aspect-[4/3]",
}: PlaceholderImageProps) {
  if (src) {
    return (
      <div className={cn("relative overflow-hidden rounded-2xl", aspectRatio, className)}>
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl bg-gradient-to-br",
        gradient,
        aspectRatio,
        className
      )}
    >
      {/* Noise pattern overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.12]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="noise" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="4" cy="4" r="1" fill="#F5C563" />
            <circle cx="16" cy="12" r="0.5" fill="#4ECDC4" />
            <circle cx="8" cy="20" r="0.8" fill="#F5C563" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#noise)" />
      </svg>
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-gold-400/15 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-teal-400/15 blur-3xl" />
      {/* Decorative geometric elements */}
      <div className="absolute bottom-6 right-6 w-32 h-32 rounded-full border-2 border-gold-400/20" />
      <div className="absolute bottom-6 right-6 w-20 h-20 rounded-full border border-teal-400/15" />
      <div className="absolute top-8 left-8 w-20 h-[1px] bg-gold-400/30" />
      <div className="absolute top-8 left-8 w-[1px] h-20 bg-gold-400/30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rotate-45 border border-cream-50/10" />
    </div>
  );
}
