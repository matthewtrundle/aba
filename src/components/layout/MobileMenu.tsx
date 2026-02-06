"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { scrollToElement } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const handleNavClick = (href: string) => {
    onClose();
    setTimeout(() => scrollToElement(href.replace("#", "")), 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-navy-950/98 backdrop-blur-xl"
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-6">
              <span className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-cream-50">
                ATX ABA
              </span>
              <button
                onClick={onClose}
                className="p-2 text-cream-50/60 hover:text-cream-50 transition-colors"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>

            <nav className="flex flex-col items-center justify-center flex-1 gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-3xl font-[family-name:var(--font-cormorant)] text-cream-50 hover:text-gold-400 transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Button
                  size="lg"
                  onClick={() => handleNavClick("#conference-registration")}
                >
                  Register Now
                </Button>
              </motion.div>
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
