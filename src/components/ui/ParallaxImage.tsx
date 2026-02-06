"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface ParallaxImageProps {
  className?: string;
  src?: string;
  alt?: string;
  gradient?: string;
  speed?: number;
  children?: React.ReactNode;
}

export function ParallaxImage({
  className,
  src,
  alt = "",
  gradient = "from-gold-400/20 to-teal-400/20",
  speed = 0.3,
  children,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [speed * -100, speed * 100]);

  return (
    <div ref={ref} className={cn("relative overflow-hidden rounded-2xl", className)}>
      {src ? (
        <motion.div
          style={{ y }}
          className="absolute inset-0"
        >
          <img
            src={src}
            alt={alt}
            className="absolute inset-[-10%] w-[120%] h-[120%] object-cover"
          />
        </motion.div>
      ) : (
        <motion.div
          style={{ y }}
          className={cn("absolute inset-0 bg-gradient-to-br", gradient)}
        >
          <svg className="absolute inset-0 w-full h-full opacity-[0.15]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="parallax-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#parallax-dots)" />
          </svg>
          <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-gold-400/15 blur-3xl" />
          <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-teal-400/15 blur-2xl" />
          {children}
        </motion.div>
      )}
    </div>
  );
}
