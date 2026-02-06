"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function IntroLoader() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const letters = "ATX ABA".split("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const hasPlayed = sessionStorage.getItem("atx-aba-intro");
    if (hasPlayed) {
      setIsVisible(false);
      return;
    }
    setIsVisible(true);
    document.body.style.overflow = "hidden";

    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 2200);

    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem("atx-aba-intro", "true");
      document.body.style.overflow = "";
    }, 2800);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(hideTimer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-cream-50"
        >
          <motion.div
            animate={isExiting ? { y: -80, opacity: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="flex gap-1"
          >
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3 + i * 0.1,
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className={`font-[family-name:var(--font-cormorant)] text-5xl md:text-7xl font-bold ${
                  letter === " " ? "w-4" : "text-navy-950"
                }`}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.div>

          {/* Decorative gold line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.2, duration: 0.8, ease: "easeInOut" }}
            className="absolute bottom-1/2 mt-16 translate-y-12 w-24 h-[2px] bg-gold-400 origin-left"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
