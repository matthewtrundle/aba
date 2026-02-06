"use client";

import { MegaMenu } from "@/components/layout/MegaMenu";
import { Footer } from "@/components/layout/Footer";
import { HeroFull } from "@/components/sections/HeroFull";
import { QuickLinks } from "@/components/sections/QuickLinks";
import { WelcomeSection } from "@/components/sections/WelcomeSection";
import { StatsCounter } from "@/components/sections/StatsCounter";
import { ConferencePreview } from "@/components/sections/ConferencePreview";
import { UpcomingEventsPreview } from "@/components/sections/UpcomingEventsPreview";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";

export default function Home() {
  return (
    <>
      <MegaMenu />
      <main>
        <HeroFull />
        <QuickLinks />
        <WelcomeSection />
        <StatsCounter />
        <ConferencePreview />
        <UpcomingEventsPreview />
        <TestimonialsCarousel />
      </main>
      <Footer />
    </>
  );
}
