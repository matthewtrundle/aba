"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { UPCOMING_EVENTS } from "@/lib/constants";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Badge } from "@/components/ui/Badge";
import { Divider } from "@/components/ui/Divider";
import { staggerContainer, fadeUp } from "@/lib/animations";

export function UpcomingEvents() {
  return (
    <section id="events" className="py-32 md:py-40 bg-white flex justify-center">
      <div className="w-full max-w-7xl px-6">
        <RevealOnScroll className="text-center mb-20">
          <span className="text-sm font-light uppercase tracking-wider text-teal-400">
            What&apos;s Next
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-cormorant)] text-navy-950">
            Upcoming Events
          </h2>
          <Divider className="mx-auto mt-8" />
        </RevealOnScroll>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {UPCOMING_EVENTS.map((event) => (
            <motion.div
              key={event.title}
              variants={fadeUp}
              className="group p-10 rounded-2xl bg-cream-50 border border-navy-950/5 hover:border-gold-500/30 hover:scale-[1.02] transition-all duration-500"
            >
              {/* Date Badge */}
              <div className="flex items-center gap-2 mb-6">
                <Calendar className="w-4 h-4 text-gold-400" />
                <span className="text-sm text-gold-400 font-medium">
                  {event.date}
                </span>
              </div>

              {/* Type Badge */}
              <Badge
                variant={event.ceus ? "teal" : "outline"}
                className="mb-6"
              >
                {event.type}
                {event.ceus && ` — ${event.ceus} CEUs`}
              </Badge>

              <h3 className="text-2xl font-bold font-[family-name:var(--font-cormorant)] text-navy-950 mb-4">
                {event.title}
              </h3>
              <p className="text-sm text-navy-800/60 leading-relaxed mb-8">
                {event.description}
              </p>

              <button className="inline-flex items-center gap-2 text-sm text-gold-400 hover:text-gold-500 transition-colors duration-500 group/link">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-500" />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
