"use client";

import { motion } from "framer-motion";
import { STATS } from "@/lib/constants";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { staggerContainer, fadeUp } from "@/lib/animations";

export function StatsCounter() {
  return (
    <section className="py-20 bg-gold-400 relative overflow-hidden flex justify-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={staggerContainer}
        className="w-full max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 relative z-10"
      >
        {STATS.map((stat) => (
          <motion.div
            key={stat.label}
            variants={fadeUp}
            className="text-center"
          >
            <div className="text-5xl md:text-6xl font-bold font-[family-name:var(--font-cormorant)] text-navy-950">
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                className="text-5xl md:text-6xl font-bold font-[family-name:var(--font-cormorant)] text-navy-950"
              />
            </div>
            <p className="mt-3 text-sm font-light text-navy-950/70 uppercase tracking-wider">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
