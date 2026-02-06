"use client";

import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/sections/PageHero";
import { UpcomingEvents } from "@/components/sections/UpcomingEvents";
import { CategoryCards } from "@/components/sections/CategoryCards";

export default function EventsPage() {
  return (
    <PageLayout>
      <PageHero
        title="Events"
        subtitle="CEU workshops, networking socials, article discussions, and our annual conference. Find your next learning opportunity."
        breadcrumbs={[{ label: "Events" }]}
        backgroundImage="/images/austin-bridge.jpg"
      />
      <UpcomingEvents />
      <CategoryCards />
    </PageLayout>
  );
}
