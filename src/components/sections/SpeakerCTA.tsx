"use client";

import { Mic } from "lucide-react";
import { SITE } from "@/lib/constants";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";

export function SpeakerCTA() {
  return (
    <section className="py-20 bg-gold-400 relative overflow-hidden flex justify-center">
      <div className="w-full max-w-5xl px-6 relative z-10">
        <RevealOnScroll className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex items-center gap-8">
            <div className="hidden sm:flex w-16 h-16 rounded-full bg-navy-950/10 items-center justify-center">
              <Mic className="w-8 h-8 text-navy-950" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-cormorant)] text-navy-950">
                Interested in Speaking?
              </h3>
              <p className="text-navy-950/70 mt-2 text-lg">
                Share your expertise with the Austin ABA community.
              </p>
            </div>
          </div>
          <a href={`mailto:${SITE.email}?subject=Speaking Inquiry`}>
            <Button
              variant="outline"
              size="lg"
              className="border-navy-950/30 text-navy-950 hover:border-navy-950 hover:text-navy-950 whitespace-nowrap"
            >
              Get in Touch
            </Button>
          </a>
        </RevealOnScroll>
      </div>
    </section>
  );
}
