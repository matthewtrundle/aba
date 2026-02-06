"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Award, DollarSign } from "lucide-react";
import { CONFERENCE } from "@/lib/constants";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Divider } from "@/components/ui/Divider";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { scrollToElement } from "@/lib/utils";

const details = [
  { icon: Calendar, label: "Date", value: CONFERENCE.date },
  { icon: Clock, label: "Time", value: CONFERENCE.time },
  { icon: MapPin, label: "Location", value: CONFERENCE.location },
  { icon: Award, label: "CEUs", value: CONFERENCE.ceus },
  {
    icon: DollarSign,
    label: "Members",
    value: `$${CONFERENCE.pricing.member}`,
  },
  {
    icon: DollarSign,
    label: "Non-Members",
    value: `$${CONFERENCE.pricing.nonMember}`,
  },
];

export function ConferenceSection() {
  return (
    <section id="conference" className="py-32 md:py-40 bg-navy-950 relative overflow-hidden flex justify-center">
      {/* Large decorative "5th" */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-20 md:right-10 pointer-events-none select-none">
        <span className="text-[200px] md:text-[300px] font-[family-name:var(--font-cormorant)] font-bold text-cream-50/[0.02] leading-none">
          5th
        </span>
      </div>

      <div className="w-full max-w-7xl px-6 relative z-10">
        <RevealOnScroll className="text-center mb-20">
          <Badge variant="gold" className="mb-8">
            Flagship Event
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-cormorant)] text-cream-50 leading-tight">
            {CONFERENCE.title}
          </h2>
          <Divider className="mx-auto mt-8 mb-10" />
          <p className="max-w-2xl mx-auto text-cream-50/60 leading-relaxed text-lg">
            {CONFERENCE.description}
          </p>
        </RevealOnScroll>

        {/* Details Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-3xl mx-auto mb-16"
        >
          {details.map((detail) => (
            <motion.div
              key={detail.label}
              variants={fadeUp}
              className="p-8 rounded-2xl bg-navy-800/40 border border-cream-50/5 text-center hover:border-gold-400/20 transition-all duration-500"
            >
              <detail.icon className="w-6 h-6 text-gold-400 mx-auto mb-4" />
              <p className="text-xs text-cream-50/40 uppercase tracking-wider mb-2 font-light">
                {detail.label}
              </p>
              <p className="text-lg font-semibold text-cream-50">
                {detail.value}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <RevealOnScroll className="text-center">
          <Button
            size="lg"
            onClick={() => scrollToElement("conference-registration")}
          >
            Register Now — Starting at ${CONFERENCE.pricing.member}
          </Button>
        </RevealOnScroll>
      </div>
    </section>
  );
}
