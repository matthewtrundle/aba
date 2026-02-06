"use client";

import { motion } from "framer-motion";
import { textReveal, wordReveal } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
  animate?: boolean;
}

export function TextReveal({ text, className, as: Tag = "h1", animate: animateImmediately = false }: TextRevealProps) {
  const words = text.split(" ");

  const motionProps = animateImmediately
    ? { initial: "hidden" as const, animate: "visible" as const }
    : { initial: "hidden" as const, whileInView: "visible" as const, viewport: { once: true, margin: "-40px" } };

  return (
    <motion.div
      {...motionProps}
      variants={textReveal}
      aria-label={text}
    >
      <Tag className={cn("flex flex-wrap gap-x-[0.3em] justify-center", className)}>
        {words.map((word, i) => (
          <motion.span
            key={`word-${i}`}
            variants={wordReveal}
            className="inline-block"
          >
            {word}
          </motion.span>
        ))}
      </Tag>
    </motion.div>
  );
}
