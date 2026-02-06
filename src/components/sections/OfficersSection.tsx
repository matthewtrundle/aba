"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Badge } from "@/components/ui/Badge";
import { Divider } from "@/components/ui/Divider";
import { fadeUp, staggerContainer } from "@/lib/animations";

const officers = [
  {
    name: "Dr. Emily Chen",
    role: "President",
    credentials: "BCBA-D, LBA",
    bio: "Emily has been practicing behavior analysis in Austin for over 12 years. She oversees ATX ABA's strategic direction and community initiatives.",
    image: null,
  },
  {
    name: "Marcus Williams",
    role: "Vice President",
    credentials: "BCBA, LBA",
    bio: "Marcus coordinates our CEU programming and speaker outreach. He brings 8 years of clinical and organizational experience.",
    image: null,
  },
  {
    name: "Sarah Thompson",
    role: "Secretary",
    credentials: "BCBA, LBA",
    bio: "Sarah manages communications and membership records. She's passionate about building inclusive professional communities.",
    image: null,
  },
  {
    name: "Dr. James Park",
    role: "Treasurer",
    credentials: "BCBA-D, LBA",
    bio: "James oversees financial operations and sponsorship relationships. He also chairs the annual conference planning committee.",
    image: null,
  },
  {
    name: "Ana Rodriguez",
    role: "Events Coordinator",
    credentials: "BCBA, LBA",
    bio: "Ana plans and executes our networking socials and workshop logistics. Her attention to detail ensures smooth events.",
    image: null,
  },
  {
    name: "David Kim",
    role: "Communications Chair",
    credentials: "BCBA, LBA",
    bio: "David manages our social media presence and newsletter. He keeps the community informed and engaged.",
    image: null,
  },
];

export function OfficersSection() {
  return (
    <section id="officers" className="py-32 md:py-40 bg-navy-950 overflow-hidden flex justify-center">
      <div className="w-full max-w-7xl px-6">
        <RevealOnScroll className="text-center mb-20">
          <Badge variant="gold" className="mb-8">
            Leadership Team
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-cormorant)] text-cream-50">
            Meet the Officers
          </h2>
          <Divider className="mx-auto mt-8 mb-6" />
          <p className="text-cream-50/60 max-w-2xl mx-auto text-lg">
            Our volunteer leadership team is dedicated to serving the Austin behavior analysis community.
          </p>
        </RevealOnScroll>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {officers.map((officer) => (
            <motion.div
              key={officer.name}
              variants={fadeUp}
              className="group bg-navy-800/40 rounded-2xl p-8 border border-cream-50/5 hover:border-gold-400/20 transition-all duration-500"
            >
              {/* Avatar placeholder */}
              <div className="w-20 h-20 rounded-full bg-gold-400/10 flex items-center justify-center mb-6 mx-auto group-hover:bg-gold-400/20 transition-colors duration-500">
                <span className="text-2xl font-bold text-gold-500 font-[family-name:var(--font-cormorant)]">
                  {officer.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold font-[family-name:var(--font-cormorant)] text-cream-50 mb-1">
                  {officer.name}
                </h3>
                <p className="text-gold-400 text-sm font-medium mb-1">
                  {officer.role}
                </p>
                <p className="text-cream-50/40 text-xs mb-4">
                  {officer.credentials}
                </p>
                <p className="text-cream-50/60 text-sm leading-relaxed">
                  {officer.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <RevealOnScroll className="text-center mt-16">
          <p className="text-cream-50/50 text-sm">
            Interested in joining the leadership team?{" "}
            <a href="#contact" className="text-gold-400 hover:text-gold-300 transition-colors duration-500">
              Contact us
            </a>{" "}
            to learn about volunteer opportunities.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
