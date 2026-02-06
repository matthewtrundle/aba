"use client";

import { MEMBER_LOGOS } from "@/lib/constants";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { Divider } from "@/components/ui/Divider";
import { SITE } from "@/lib/constants";

function LogoPlaceholder({ name }: { name: string }) {
  return (
    <div className="flex-shrink-0 w-48 h-20 mx-4 rounded-xl bg-white border border-navy-950/5 flex items-center justify-center px-4 hover:border-gold-500/30 transition-all duration-500 shadow-sm">
      <span className="text-xs text-navy-800/60 text-center font-medium tracking-wide">
        {name}
      </span>
    </div>
  );
}

export function MembersSection() {
  const logos = [...MEMBER_LOGOS, ...MEMBER_LOGOS];

  return (
    <section className="py-32 md:py-40 bg-cream-100 overflow-hidden">
      <div className="w-full max-w-7xl px-6 mb-20 mx-auto">
        <RevealOnScroll className="text-center">
          <span className="text-sm font-light uppercase tracking-wider text-gold-500">
            Our Partners
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-cormorant)] text-navy-950">
            Business Members
          </h2>
          <Divider className="mx-auto mt-8" />
        </RevealOnScroll>
      </div>

      {/* Marquee Row 1 */}
      <div className="mb-6 overflow-hidden">
        <div className="flex animate-marquee">
          {logos.map((name, i) => (
            <LogoPlaceholder key={`row1-${i}`} name={name} />
          ))}
        </div>
      </div>

      {/* Marquee Row 2 (reversed) */}
      <div className="mb-20 overflow-hidden">
        <div className="flex animate-marquee-reverse">
          {[...logos].reverse().map((name, i) => (
            <LogoPlaceholder key={`row2-${i}`} name={name} />
          ))}
        </div>
      </div>

      <div className="text-center">
        <a href={`mailto:${SITE.email}?subject=Business Membership Inquiry`}>
          <Button variant="outline" size="lg">
            Become a Business Member
          </Button>
        </a>
      </div>
    </section>
  );
}
