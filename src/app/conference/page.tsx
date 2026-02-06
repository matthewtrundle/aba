"use client";

import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/sections/PageHero";
import { ConferenceSection } from "@/components/sections/ConferenceSection";
import { ConferenceRegistration } from "@/components/sections/ConferenceRegistration";
import { SpeakerCTA } from "@/components/sections/SpeakerCTA";

export default function ConferencePage() {
  return (
    <PageLayout>
      <PageHero
        title="5th Annual Conference"
        subtitle="February 28, 2026 — A full day of learning, networking, and 5.5 CEUs with leading professionals in the field."
        breadcrumbs={[{ label: "Conference" }]}
        backgroundImage="/images/austin-capitol.jpg"
        size="lg"
      />
      <ConferenceSection />
      <div id="speakers">
        <SpeakerCTA />
      </div>
      <div id="register">
        <ConferenceRegistration />
      </div>
    </PageLayout>
  );
}
