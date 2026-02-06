"use client";

import { motion } from "framer-motion";
import { Users, GraduationCap, BookOpen, Award } from "lucide-react";
import { CATEGORY_CARDS } from "@/lib/constants";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Divider } from "@/components/ui/Divider";

const iconMap = {
  Users,
  GraduationCap,
  BookOpen,
  Award,
} as const;

export function CategoryCards() {
  return (
    <section id="about" className="py-32 md:py-40 bg-cream-50 flex justify-center">
      <div className="w-full max-w-7xl px-6">
        <RevealOnScroll className="text-center mb-20">
          <span className="text-sm font-light uppercase tracking-wider text-gold-500">
            What We Do
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-cormorant)] text-navy-950">
            Four Pillars of Community
          </h2>
          <Divider className="mx-auto mt-8" />
        </RevealOnScroll>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {CATEGORY_CARDS.map((card) => {
            const Icon = iconMap[card.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={card.title}
                variants={fadeUp}
                className="group p-10 rounded-2xl bg-white border border-navy-950/5 shadow-sm hover:shadow-xl hover:shadow-navy-950/5 hover:scale-[1.02] transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-xl bg-gold-400/10 flex items-center justify-center mb-8 group-hover:bg-gold-400/20 transition-colors duration-500">
                  <Icon className="w-7 h-7 text-gold-500" />
                </div>
                <h3 className="text-xl font-bold text-navy-950 font-[family-name:var(--font-cormorant)] mb-4">
                  {card.title}
                </h3>
                <p className="text-sm text-navy-800/60 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
