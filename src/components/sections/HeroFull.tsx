"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Calendar, MapPin, Award, Sparkles } from "lucide-react";

export function HeroFull() {
  return (
    <section className="relative min-h-[90vh] bg-navy-950 overflow-hidden flex items-center">
      {/* Background Image - More visible */}
      <div className="absolute inset-0">
        <img
          src="/images/austin-skyline.jpg"
          alt="Austin Texas Skyline"
          className="w-full h-full object-cover opacity-60"
        />
        {/* Softer gradient to show more skyline */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/30" />
      </div>

      {/* Decorative Flair Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gold-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-40 left-1/4 w-48 h-48 bg-teal-400/10 rounded-full blur-2xl" />

      {/* Decorative Lines */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute left-8 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-gold-400/50 to-transparent origin-top hidden lg:block"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-32">
        <div className="max-w-3xl">
          {/* Content Container with subtle backdrop */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            {/* Glowing backdrop for content */}
            <div className="absolute -inset-8 bg-navy-950/40 backdrop-blur-sm rounded-3xl -z-10 hidden md:block" />

            {/* Badge with Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-lg border-2 border-gold-400 bg-gold-400/10 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span className="text-gold-400 font-semibold tracking-wide uppercase text-sm">
                TxABA Special Interest Group
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-cormorant)] text-white leading-[1.05] mb-8 drop-shadow-2xl"
            >
              Austin&apos;s Premier{" "}
              <span className="text-gold-400">Behavior Analysis</span>{" "}
              Community
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-xl md:text-2xl text-cream-50/80 leading-relaxed mb-12 max-w-2xl drop-shadow-lg"
            >
              Connecting BCBAs, RBTs, and behavior science professionals through
              networking events, CEU workshops, and our annual conference.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Link href="/conference#register">
              <Button size="lg" className="group shadow-lg shadow-gold-400/20">
                Register for Conference
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-500" />
              </Button>
            </Link>
            <Link href="/join">
              <Button variant="outline" size="lg" className="border-white/40 text-white hover:border-gold-400 hover:text-gold-400 hover:bg-gold-400/10 backdrop-blur-sm">
                Join ATX ABA
              </Button>
            </Link>
          </motion.div>

          {/* Conference Quick Info - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="inline-flex flex-wrap gap-6 px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl"
          >
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-full bg-gold-400/20">
                <Calendar className="w-4 h-4 text-gold-400" />
              </div>
              <span className="text-cream-50 text-sm font-medium">February 28, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-full bg-gold-400/20">
                <MapPin className="w-4 h-4 text-gold-400" />
              </div>
              <span className="text-cream-50 text-sm font-medium">Austin, TX</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-full bg-gold-400/20">
                <Award className="w-4 h-4 text-gold-400" />
              </div>
              <span className="text-cream-50 text-sm font-medium">5.5 CEUs</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream-50 to-transparent" />
    </section>
  );
}
