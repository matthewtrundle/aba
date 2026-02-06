"use client";

import { motion } from "framer-motion";
import { CheckCircle, Users, Calendar, DollarSign, Heart } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Divider } from "@/components/ui/Divider";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { SITE } from "@/lib/constants";

const membershipBenefits = [
  "Discounted conference registration ($35 vs $80)",
  "Early access to CEU event registration",
  "Exclusive networking event invitations",
  "Access to job postings board",
  "Monthly newsletter with Austin ABA updates",
  "Voting rights on SIG initiatives",
];

const getInvolvedOptions = [
  {
    icon: Users,
    title: "Become a Member",
    description: "Join our community and access exclusive benefits, discounts, and networking opportunities.",
    cta: "Join Now",
    href: "#contact",
  },
  {
    icon: Calendar,
    title: "Volunteer",
    description: "Help organize events, mentor new professionals, or contribute to our article discussions.",
    cta: "Get Involved",
    href: "#contact",
  },
  {
    icon: DollarSign,
    title: "Business Membership",
    description: "Partner with ATX ABA to support the community and gain visibility among local professionals.",
    cta: "Learn More",
    href: "#contact",
  },
  {
    icon: Heart,
    title: "Sponsor an Event",
    description: "Support our CEU workshops, socials, or annual conference with sponsorship opportunities.",
    cta: "Sponsor",
    href: "#contact",
  },
];

export function JoinSection() {
  return (
    <section id="join" className="py-32 md:py-40 bg-white overflow-hidden flex justify-center">
      <div className="w-full max-w-7xl px-6">
        <RevealOnScroll className="text-center mb-20">
          <Badge variant="gold" className="mb-8">
            Become Part of the Community
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-cormorant)] text-navy-950">
            Join ATX ABA
          </h2>
          <Divider className="mx-auto mt-8" />
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Membership Benefits */}
          <RevealOnScroll>
            <div className="bg-cream-50 rounded-2xl p-10 border border-navy-950/5">
              <h3 className="text-2xl font-bold font-[family-name:var(--font-cormorant)] text-navy-950 mb-6">
                Membership Benefits
              </h3>
              <ul className="space-y-4">
                {membershipBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-800/70">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-8 border-t border-navy-950/10">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold font-[family-name:var(--font-cormorant)] text-gold-500">Free</span>
                  <span className="text-navy-800/60">to join</span>
                </div>
                <p className="text-sm text-navy-800/50 mb-6">
                  ATX ABA membership is free for all behavior analysis professionals in the Austin area.
                </p>
                <a href={`mailto:${SITE.email}?subject=Membership Inquiry`}>
                  <Button size="lg" className="w-full">
                    Join ATX ABA Today
                  </Button>
                </a>
              </div>
            </div>
          </RevealOnScroll>

          {/* Get Involved Options */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {getInvolvedOptions.map((option) => (
              <motion.div
                key={option.title}
                variants={fadeUp}
                className="group p-8 rounded-2xl bg-cream-50 border border-navy-950/5 hover:border-gold-500/30 hover:scale-[1.02] transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-400/10 flex items-center justify-center mb-6 group-hover:bg-gold-400/20 transition-colors duration-500">
                  <option.icon className="w-6 h-6 text-gold-500" />
                </div>
                <h4 className="text-lg font-bold font-[family-name:var(--font-cormorant)] text-navy-950 mb-3">
                  {option.title}
                </h4>
                <p className="text-sm text-navy-800/60 leading-relaxed mb-6">
                  {option.description}
                </p>
                <a href={`mailto:${SITE.email}?subject=${option.title}`}>
                  <Button variant="ghost" size="sm" className="text-gold-500 hover:text-gold-600 p-0">
                    {option.cta} →
                  </Button>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
