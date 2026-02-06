"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, MapPin, Award, ArrowRight } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Divider } from "@/components/ui/Divider";
import { CONFERENCE } from "@/lib/constants";

const highlights = [
  { icon: Calendar, label: "Date", value: CONFERENCE.date },
  { icon: Clock, label: "Time", value: CONFERENCE.time },
  { icon: MapPin, label: "Venue", value: "UT Austin" },
  { icon: Award, label: "CEUs", value: CONFERENCE.ceus },
];

export function ConferencePreview() {
  return (
    <section className="py-32 md:py-40 bg-navy-950 relative overflow-hidden">
      {/* Large decorative text */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-20 md:right-10 pointer-events-none select-none">
        <span className="text-[200px] md:text-[300px] font-[family-name:var(--font-cormorant)] font-bold text-cream-50/[0.02] leading-none">
          5th
        </span>
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <RevealOnScroll>
            <Badge variant="gold" className="mb-8">
              Flagship Event
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-cormorant)] text-cream-50 leading-tight mb-6">
              5th Annual Conference
            </h2>
            <Divider className="mb-8" />
            <p className="text-lg text-cream-50/60 leading-relaxed mb-10">
              {CONFERENCE.description}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 p-4 rounded-xl bg-navy-800/40 border border-cream-50/5"
                >
                  <item.icon className="w-5 h-5 text-gold-400" />
                  <div>
                    <p className="text-xs text-cream-50/40 uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium text-cream-50">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/conference#register">
                <Button size="lg" className="group">
                  Register Now — ${CONFERENCE.pricing.member}
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-500" />
                </Button>
              </Link>
              <Link href="/conference">
                <Button variant="outline" size="lg" className="border-cream-50/20 text-cream-50 hover:border-cream-50 hover:text-cream-50">
                  View Details
                </Button>
              </Link>
            </div>
          </RevealOnScroll>

          {/* Image */}
          <RevealOnScroll>
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-full h-full rounded-2xl border border-gold-400/20" />
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="/images/austin-capitol.jpg"
                  alt="ATX ABA Conference"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />

                {/* Price card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gold-500 font-semibold uppercase tracking-wider mb-1">
                        Member Price
                      </p>
                      <p className="text-3xl font-bold font-[family-name:var(--font-cormorant)] text-navy-950">
                        ${CONFERENCE.pricing.member}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-navy-800/60 mb-1">Non-Member</p>
                      <p className="text-xl font-bold font-[family-name:var(--font-cormorant)] text-navy-800/60">
                        ${CONFERENCE.pricing.nonMember}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
