"use client";

import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { Divider } from "@/components/ui/Divider";
import { Badge } from "@/components/ui/Badge";
import { fadeLeft, fadeRight } from "@/lib/animations";

export function WelcomeSection() {
  return (
    <section className="py-32 md:py-40 bg-white overflow-hidden flex justify-center">
      <div className="w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Text Content */}
          <RevealOnScroll variants={fadeLeft}>
            <Badge variant="gold" className="mb-8">
              TxABA Special Interest Group
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-cormorant)] text-navy-950 leading-tight">
              Building Austin&apos;s
              <span className="text-gold-500"> Strongest </span>
              ABA Community
            </h2>
            <Divider className="mt-8 mb-10" />
            <div className="space-y-6 text-navy-800/70 leading-relaxed text-lg">
              <p>
                ATX ABA is a TxABA Special Interest Group dedicated to uniting
                behavior analysts across the greater Austin area. We create
                meaningful opportunities for professional growth, collaboration,
                and community.
              </p>
              <p>
                Whether you&apos;re a seasoned BCBA-D, newly certified
                professional, RBT, or graduate student, our events and resources
                are designed to support every stage of your career in applied
                behavior analysis.
              </p>
              <p>
                From monthly CEU workshops and journal clubs to our annual
                conference, we&apos;re committed to advancing the science and
                practice of behavior analysis in Central Texas.
              </p>
            </div>
          </RevealOnScroll>

          {/* Parallax Image */}
          <RevealOnScroll variants={fadeRight}>
            <ParallaxImage
              className="h-[450px] md:h-[550px] rounded-2xl"
              src="/images/austin-ladybird.jpg"
              alt="ATX ABA community members collaborating"
            />
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
