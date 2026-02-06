"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Users, Calendar, Briefcase, GraduationCap, ArrowRight } from "lucide-react";
import { staggerContainer, fadeUp } from "@/lib/animations";

const quickLinks = [
  {
    icon: Users,
    title: "Join Our Community",
    description: "Become a member and access exclusive benefits, events, and resources.",
    href: "/join",
    color: "gold",
  },
  {
    icon: GraduationCap,
    title: "Upcoming Events",
    description: "CEU workshops, networking socials, and article discussions.",
    href: "/events",
    color: "teal",
  },
  {
    icon: Calendar,
    title: "Annual Conference",
    description: "February 28, 2026 — 5.5 CEUs and a full day of learning.",
    href: "/conference",
    color: "gold",
  },
  {
    icon: Briefcase,
    title: "Job Postings",
    description: "Find behavior analysis positions in the Austin area.",
    href: "/jobs",
    color: "teal",
  },
];

export function QuickLinks() {
  return (
    <section className="py-20 bg-cream-50">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={staggerContainer}
        className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {quickLinks.map((link) => (
          <motion.div key={link.title} variants={fadeUp}>
            <Link
              href={link.href}
              className="group block p-8 rounded-2xl bg-white border border-navy-950/5 hover:border-gold-500/30 hover:shadow-xl hover:shadow-navy-950/5 hover:-translate-y-1 transition-all duration-500"
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-500 ${
                  link.color === "gold"
                    ? "bg-gold-400/10 group-hover:bg-gold-400/20"
                    : "bg-teal-400/10 group-hover:bg-teal-400/20"
                }`}
              >
                <link.icon
                  className={`w-7 h-7 ${
                    link.color === "gold" ? "text-gold-500" : "text-teal-500"
                  }`}
                />
              </div>
              <h3 className="text-lg font-bold font-[family-name:var(--font-cormorant)] text-navy-950 mb-2">
                {link.title}
              </h3>
              <p className="text-sm text-navy-800/60 leading-relaxed mb-4">
                {link.description}
              </p>
              <span className="inline-flex items-center text-sm font-medium text-gold-500 group-hover:text-gold-600 transition-colors">
                Learn more
                <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
