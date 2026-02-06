"use client";

import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/sections/PageHero";
import { WelcomeSection } from "@/components/sections/WelcomeSection";
import { StatsCounter } from "@/components/sections/StatsCounter";
import { CategoryCards } from "@/components/sections/CategoryCards";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";
import { MembersSection } from "@/components/sections/MembersSection";

export default function AboutPage() {
  return (
    <PageLayout>
      <PageHero
        title="About ATX ABA"
        subtitle="A TxABA Special Interest Group uniting behavior analysts across the greater Austin area through networking, education, and community."
        breadcrumbs={[{ label: "About" }]}
        backgroundImage="/images/austin-ladybird.jpg"
      />
      <CategoryCards />
      <WelcomeSection />
      <StatsCounter />
      <div id="testimonials">
        <TestimonialsCarousel />
      </div>
      <div id="members">
        <MembersSection />
      </div>
    </PageLayout>
  );
}
