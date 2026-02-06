"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Badge } from "@/components/ui/Badge";
import { Divider } from "@/components/ui/Divider";
import { Button } from "@/components/ui/Button";
import { UPCOMING_EVENTS } from "@/lib/constants";
import { staggerContainer, fadeUp } from "@/lib/animations";

export function UpcomingEventsPreview() {
  return (
    <section className="py-32 md:py-40 bg-white">
      <div className="w-full max-w-7xl mx-auto px-6">
        <RevealOnScroll className="text-center mb-16">
          <Badge variant="teal" className="mb-8">
            What's Next
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-cormorant)] text-navy-950">
            Upcoming Events
          </h2>
          <Divider className="mx-auto mt-8" />
        </RevealOnScroll>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {UPCOMING_EVENTS.map((event) => (
            <motion.div
              key={event.title}
              variants={fadeUp}
              className="group p-8 rounded-2xl bg-cream-50 border border-navy-950/5 hover:border-gold-500/30 hover:shadow-lg transition-all duration-500"
            >
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-4 h-4 text-gold-400" />
                <span className="text-sm text-gold-500 font-medium">
                  {event.date}
                </span>
              </div>

              <Badge
                variant={event.ceus ? "teal" : "outline"}
                className="mb-4"
              >
                {event.type}
                {event.ceus && ` — ${event.ceus} CEUs`}
              </Badge>

              <h3 className="text-xl font-bold font-[family-name:var(--font-cormorant)] text-navy-950 mb-3">
                {event.title}
              </h3>
              <p className="text-sm text-navy-800/60 leading-relaxed">
                {event.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <Link href="/events">
            <Button variant="outline" size="lg" className="group">
              View All Events
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-500" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
