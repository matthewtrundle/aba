"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { scrollToElement } from "@/lib/utils";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-cream-50 overflow-hidden">
      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-32 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center w-full">

          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Badge variant="gold" className="mb-8">
              TxABA Special Interest Group
            </Badge>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-cormorant)] text-navy-950 leading-[1.05] mb-8">
              Elevating Behavior Analysis in{" "}
              <span className="text-gold-500">Austin</span>
            </h1>

            <p className="text-lg md:text-xl text-navy-800/70 leading-relaxed mb-10 max-w-xl">
              Join the premier community of BCBAs, RBTs, and behavior science
              professionals in Central Texas. Network, earn CEUs, and grow together.
            </p>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-8 mb-12">
              <div className="flex items-center gap-2 text-navy-800/60">
                <Users size={18} className="text-gold-500" />
                <span className="text-sm font-medium">200+ Members</span>
              </div>
              <div className="flex items-center gap-2 text-navy-800/60">
                <Calendar size={18} className="text-gold-500" />
                <span className="text-sm font-medium">50+ Events Hosted</span>
              </div>
              <div className="flex items-center gap-2 text-navy-800/60">
                <MapPin size={18} className="text-gold-500" />
                <span className="text-sm font-medium">Austin, TX</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToElement("conference-registration")}
                className="group"
              >
                Register for Conference
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-500" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToElement("about")}
              >
                Learn More
              </Button>
            </div>
          </motion.div>

          {/* Right side - Image with minimal frame */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
            className="relative"
          >
            {/* Subtle accent line */}
            <div className="absolute -top-4 -right-4 w-full h-full rounded-2xl border border-gold-400/20" />

            {/* Main image container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-navy-950/10">
              <img
                src="/images/austin-skyline.jpg"
                alt="ATX ABA Conference attendees networking"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />

              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/30 via-transparent to-transparent" />

              {/* Conference callout card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gold-500 font-semibold uppercase tracking-wider mb-1">
                      5th Annual Conference
                    </p>
                    <p className="text-navy-950 font-bold font-[family-name:var(--font-cormorant)] text-lg">
                      February 28, 2026
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-navy-800/60 mb-1">Starting at</p>
                    <p className="text-3xl font-bold text-gold-500 font-[family-name:var(--font-cormorant)]">
                      $35
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
