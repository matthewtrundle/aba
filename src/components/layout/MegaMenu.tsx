"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface SubLink {
  label: string;
  href: string;
  description?: string;
}

interface NavItem {
  label: string;
  href: string;
  megaMenu?: {
    sections: {
      title: string;
      links: SubLink[];
    }[];
    featured?: {
      title: string;
      description: string;
      href: string;
      image?: string;
    };
  };
}

const navigation: NavItem[] = [
  {
    label: "About",
    href: "/about",
    megaMenu: {
      sections: [
        {
          title: "Our Community",
          links: [
            { label: "About ATX ABA", href: "/about", description: "Our mission and story" },
            { label: "Meet the Officers", href: "/officers", description: "Leadership team" },
            { label: "Business Members", href: "/about#members", description: "Our supporters" },
          ],
        },
        {
          title: "Get Connected",
          links: [
            { label: "Testimonials", href: "/about#testimonials", description: "Member stories" },
            { label: "Contact Us", href: "/contact", description: "Reach out" },
          ],
        },
      ],
      featured: {
        title: "Join Our Community",
        description: "Become part of Austin's premier behavior analysis network.",
        href: "/join",
      },
    },
  },
  {
    label: "Join",
    href: "/join",
    megaMenu: {
      sections: [
        {
          title: "Membership",
          links: [
            { label: "Membership Benefits", href: "/join", description: "What you get" },
            { label: "Get Involved", href: "/join#involved", description: "Ways to contribute" },
            { label: "Volunteer", href: "/join#volunteer", description: "Help organize events" },
          ],
        },
        {
          title: "For Organizations",
          links: [
            { label: "Business Membership", href: "/join#business", description: "Partner with us" },
            { label: "Sponsorship", href: "/join#sponsor", description: "Support our events" },
          ],
        },
      ],
    },
  },
  {
    label: "Conference",
    href: "/conference",
    megaMenu: {
      sections: [
        {
          title: "5th Annual Conference",
          links: [
            { label: "Conference Details", href: "/conference", description: "February 28, 2026" },
            { label: "Registration", href: "/conference#register", description: "Secure your spot" },
            { label: "Speaker Information", href: "/conference#speakers", description: "Present at the conference" },
          ],
        },
        {
          title: "Resources",
          links: [
            { label: "Schedule", href: "/conference#schedule", description: "Day-of agenda" },
            { label: "Venue & Parking", href: "/conference#venue", description: "UT Austin campus" },
          ],
        },
      ],
      featured: {
        title: "Register Now",
        description: "Members $35 | Non-Members $80. Includes 5.5 CEUs and lunch.",
        href: "/conference#register",
      },
    },
  },
  {
    label: "Events",
    href: "/events",
    megaMenu: {
      sections: [
        {
          title: "Event Types",
          links: [
            { label: "All Events", href: "/events", description: "Complete calendar" },
            { label: "CEU Workshops", href: "/events?type=ceu", description: "Earn continuing education" },
            { label: "Article Discussions", href: "/events?type=journal", description: "Journal club meetings" },
            { label: "Networking Socials", href: "/events?type=social", description: "Connect with peers" },
          ],
        },
      ],
    },
  },
  {
    label: "Jobs",
    href: "/jobs",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export function MegaMenu() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveMenu(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-navy-950/5"
            : "bg-transparent"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className={`font-[family-name:var(--font-cormorant)] text-2xl font-bold transition-colors duration-500 ${
                isScrolled ? "text-navy-950 hover:text-gold-500" : "text-white hover:text-gold-400"
              }`}
            >
              ATX ABA
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.megaMenu && handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg
                      ${pathname === item.href
                        ? "text-gold-400"
                        : isScrolled
                          ? "text-navy-800/70 hover:text-navy-950 hover:bg-navy-950/5"
                          : "text-white/80 hover:text-white hover:bg-white/10"
                      }`}
                  >
                    {item.label}
                    {item.megaMenu && (
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${activeMenu === item.label ? "rotate-180" : ""}`}
                      />
                    )}
                  </Link>
                </div>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Link href="/conference#register">
                <Button size="sm" className={!isScrolled ? "shadow-lg shadow-gold-500/30" : ""}>
                  Register for Conference
                </Button>
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMobileOpen(true)}
              className={`lg:hidden p-2 transition-colors ${
                isScrolled ? "text-navy-800/70 hover:text-navy-950" : "text-white/80 hover:text-white"
              }`}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mega Menu Dropdown */}
        <AnimatePresence>
          {activeMenu && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 right-0 bg-white border-t border-navy-950/5 shadow-xl shadow-navy-950/10"
              onMouseEnter={() => {
                if (timeoutRef.current) clearTimeout(timeoutRef.current);
              }}
              onMouseLeave={handleMouseLeave}
            >
              <div className="w-full max-w-7xl mx-auto px-6 py-8">
                {navigation.find((n) => n.label === activeMenu)?.megaMenu && (
                  <div className="grid grid-cols-12 gap-8">
                    {/* Sections */}
                    <div className="col-span-8 grid grid-cols-2 gap-8">
                      {navigation
                        .find((n) => n.label === activeMenu)
                        ?.megaMenu?.sections.map((section) => (
                          <div key={section.title}>
                            <h3 className="text-xs font-semibold uppercase tracking-wider text-navy-800/50 mb-4">
                              {section.title}
                            </h3>
                            <ul className="space-y-1">
                              {section.links.map((link) => (
                                <li key={link.href}>
                                  <Link
                                    href={link.href}
                                    className="group flex flex-col p-3 rounded-lg hover:bg-cream-50 transition-colors duration-300"
                                    onClick={() => setActiveMenu(null)}
                                  >
                                    <span className="text-sm font-medium text-navy-950 group-hover:text-gold-500 transition-colors">
                                      {link.label}
                                    </span>
                                    {link.description && (
                                      <span className="text-xs text-navy-800/50 mt-0.5">
                                        {link.description}
                                      </span>
                                    )}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                    </div>

                    {/* Featured Card */}
                    {navigation.find((n) => n.label === activeMenu)?.megaMenu?.featured && (
                      <div className="col-span-4">
                        <Link
                          href={navigation.find((n) => n.label === activeMenu)!.megaMenu!.featured!.href}
                          className="block p-6 rounded-2xl bg-gradient-to-br from-gold-400/10 to-gold-400/5 border border-gold-400/20 hover:border-gold-400/40 transition-all duration-500 group"
                          onClick={() => setActiveMenu(null)}
                        >
                          <h3 className="text-lg font-bold font-[family-name:var(--font-cormorant)] text-navy-950 mb-2">
                            {navigation.find((n) => n.label === activeMenu)!.megaMenu!.featured!.title}
                          </h3>
                          <p className="text-sm text-navy-800/60 mb-4">
                            {navigation.find((n) => n.label === activeMenu)!.megaMenu!.featured!.description}
                          </p>
                          <span className="inline-flex items-center text-sm font-medium text-gold-500 group-hover:text-gold-600 transition-colors">
                            Learn more
                            <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                          </span>
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-navy-950/50 backdrop-blur-sm z-50 lg:hidden"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <Link
                    href="/"
                    className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-navy-950"
                  >
                    ATX ABA
                  </Link>
                  <button
                    onClick={() => setIsMobileOpen(false)}
                    className="p-2 text-navy-800/70 hover:text-navy-950 transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <nav className="space-y-2">
                  {navigation.map((item) => (
                    <div key={item.label}>
                      <Link
                        href={item.href}
                        className={`block px-4 py-3 rounded-lg text-lg font-medium transition-colors ${
                          pathname === item.href
                            ? "bg-gold-400/10 text-gold-500"
                            : "text-navy-950 hover:bg-cream-50"
                        }`}
                      >
                        {item.label}
                      </Link>
                      {item.megaMenu && (
                        <div className="ml-4 mt-1 space-y-1">
                          {item.megaMenu.sections.map((section) =>
                            section.links.map((link) => (
                              <Link
                                key={link.href}
                                href={link.href}
                                className="block px-4 py-2 text-sm text-navy-800/70 hover:text-gold-500 transition-colors"
                              >
                                {link.label}
                              </Link>
                            ))
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>

                <div className="mt-8 pt-8 border-t border-navy-950/10">
                  <Link href="/conference#register">
                    <Button size="lg" className="w-full">
                      Register for Conference
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
