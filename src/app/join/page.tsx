"use client";

import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/sections/PageHero";
import { JoinSection } from "@/components/sections/JoinSection";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { MembersSection } from "@/components/sections/MembersSection";

export default function JoinPage() {
  return (
    <PageLayout>
      <PageHero
        title="Join ATX ABA"
        subtitle="Become part of Austin's premier behavior analysis community. Membership is free and open to all ABA professionals."
        breadcrumbs={[{ label: "Join" }]}
        backgroundImage="/images/austin-skyline.jpg"
      />
      <JoinSection />
      <ProcessSteps />
      <div id="business">
        <MembersSection />
      </div>
    </PageLayout>
  );
}
