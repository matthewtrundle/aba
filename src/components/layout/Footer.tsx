"use client";

import Link from "next/link";
import { SITE } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Divider } from "@/components/ui/Divider";
import { Instagram, Facebook, Linkedin, Mail } from "lucide-react";

const footerLinks = {
  community: [
    { label: "About Us", href: "/about" },
    { label: "Join ATX ABA", href: "/join" },
    { label: "Meet the Officers", href: "/officers" },
    { label: "Business Members", href: "/about#members" },
  ],
  events: [
    { label: "Annual Conference", href: "/conference" },
    { label: "Upcoming Events", href: "/events" },
    { label: "CEU Workshops", href: "/events?type=ceu" },
  ],
  resources: [
    { label: "Job Postings", href: "/jobs" },
    { label: "Contact Us", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-cream-50/5 flex justify-center">
      <div className="w-full max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/">
              <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-cream-50 hover:text-gold-400 transition-colors duration-500">
                ATX ABA
              </h3>
            </Link>
            <Divider />
            <p className="text-cream-50/50 text-sm leading-relaxed max-w-sm">
              {SITE.description}
            </p>
            <div className="flex gap-4">
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-cream-50/5 text-cream-50/50 hover:bg-gold-400/10 hover:text-gold-400 transition-all duration-500"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-cream-50/5 text-cream-50/50 hover:bg-gold-400/10 hover:text-gold-400 transition-all duration-500"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href={SITE.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-cream-50/5 text-cream-50/50 hover:bg-gold-400/10 hover:text-gold-400 transition-all duration-500"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Community Links */}
          <div className="space-y-6">
            <h4 className="text-sm font-light uppercase tracking-wider text-cream-50/70">
              Community
            </h4>
            <nav className="flex flex-col gap-3">
              {footerLinks.community.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-cream-50/40 hover:text-gold-400 transition-colors duration-500"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Events Links */}
          <div className="space-y-6">
            <h4 className="text-sm font-light uppercase tracking-wider text-cream-50/70">
              Events
            </h4>
            <nav className="flex flex-col gap-3">
              {footerLinks.events.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-cream-50/40 hover:text-gold-400 transition-colors duration-500"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Resources & CTA */}
          <div className="space-y-6">
            <h4 className="text-sm font-light uppercase tracking-wider text-cream-50/70">
              Resources
            </h4>
            <nav className="flex flex-col gap-3">
              {footerLinks.resources.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-cream-50/40 hover:text-gold-400 transition-colors duration-500"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="pt-4">
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2 text-sm text-cream-50/40 hover:text-gold-400 transition-colors duration-500"
              >
                <Mail size={14} />
                {SITE.email}
              </a>
            </div>
          </div>
        </div>

        {/* Conference CTA Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-gold-400/10 border border-gold-400/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-cream-50 font-bold font-[family-name:var(--font-cormorant)] text-xl mb-1">
              5th Annual ATX ABA Conference
            </p>
            <p className="text-cream-50/60 text-sm">
              February 28, 2026 — Register now and save with member pricing.
            </p>
          </div>
          <Link href="/conference#register">
            <Button size="sm">Register Now</Button>
          </Link>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-cream-50/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream-50/30">
            &copy; {new Date().getFullYear()} ATX ABA — Austin Behavior
            Analysis. All rights reserved.
          </p>
          <p className="text-xs text-cream-50/20">
            A TxABA Special Interest Group
          </p>
        </div>
      </div>
    </footer>
  );
}
