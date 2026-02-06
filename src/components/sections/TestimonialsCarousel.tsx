"use client";

import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { TESTIMONIALS } from "@/lib/constants";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Divider } from "@/components/ui/Divider";

export function TestimonialsCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="community" className="py-32 md:py-40 bg-cream-50 flex justify-center">
      <div className="w-full max-w-7xl px-6">
        <RevealOnScroll className="text-center mb-20">
          <span className="text-sm font-light uppercase tracking-wider text-gold-500">
            Community Voices
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-cormorant)] text-navy-950">
            What Our Members Say
          </h2>
          <Divider className="mx-auto mt-8" />
        </RevealOnScroll>

        <div className="relative">
          {/* Large decorative quote */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 pointer-events-none select-none">
            <span className="text-[120px] font-[family-name:var(--font-cormorant)] text-gold-400/10 leading-none">
              &ldquo;
            </span>
          </div>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {TESTIMONIALS.map((testimonial, i) => (
                <div
                  key={i}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_80%] px-4"
                >
                  <motion.div
                    initial={false}
                    animate={{
                      opacity: selectedIndex === i ? 1 : 0.3,
                      scale: selectedIndex === i ? 1 : 0.95,
                    }}
                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                    className="bg-white rounded-2xl p-10 md:p-14 shadow-lg shadow-navy-950/5 border border-navy-950/5"
                  >
                    <p className="text-xl md:text-2xl text-navy-800/80 leading-relaxed italic font-[family-name:var(--font-cormorant)]">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="mt-10 flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-gold-400/10 flex items-center justify-center">
                        <span className="text-xl font-bold text-gold-500 font-[family-name:var(--font-cormorant)]">
                          {testimonial.author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-navy-950 text-lg">
                          {testimonial.author}
                        </p>
                        <p className="text-sm text-navy-800/50">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-10">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`h-2.5 rounded-full transition-all duration-500 ${
                  selectedIndex === i
                    ? "w-10 bg-gold-400"
                    : "w-2.5 bg-navy-950/20 hover:bg-navy-950/40"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
