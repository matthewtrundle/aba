"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Divider } from "@/components/ui/Divider";
import { staggerContainer, fadeUp, lineDrawVariants } from "@/lib/animations";

export function ProcessSteps() {
  return (
    <section className="py-32 md:py-40 bg-cream-50 overflow-hidden flex justify-center">
      <div className="w-full max-w-7xl px-6">
        <RevealOnScroll className="text-center mb-24">
          <span className="text-sm font-light uppercase tracking-wider text-gold-500">
            Your Journey
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-cormorant)] text-navy-950">
            How It Works
          </h2>
          <Divider className="mx-auto mt-8" />
        </RevealOnScroll>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-[2px]">
            <motion.svg
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="w-full h-full"
            >
              <motion.line
                x1="0"
                y1="1"
                x2="100%"
                y2="1"
                stroke="#F5C563"
                strokeWidth="2"
                strokeDasharray="8 4"
                variants={lineDrawVariants}
              />
            </motion.svg>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8"
          >
            {PROCESS_STEPS.map((step) => (
              <motion.div
                key={step.step}
                variants={fadeUp}
                className="text-center relative"
              >
                {/* Step Number Circle */}
                <div className="w-32 h-32 mx-auto mb-10 relative">
                  <div className="absolute inset-0 rounded-full border border-gold-400/20" />
                  <div className="absolute inset-3 rounded-full bg-white flex items-center justify-center shadow-lg shadow-navy-950/5">
                    <span className="text-4xl font-bold font-[family-name:var(--font-cormorant)] text-gold-500">
                      {step.step}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold font-[family-name:var(--font-cormorant)] text-navy-950 mb-4">
                  {step.title}
                </h3>
                <p className="text-sm text-navy-800/60 leading-relaxed max-w-[250px] mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
