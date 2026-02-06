"use client";

import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/sections/PageHero";
import { OfficersSection } from "@/components/sections/OfficersSection";

export default function OfficersPage() {
  return (
    <PageLayout>
      <PageHero
        title="Meet the Officers"
        subtitle="Our volunteer leadership team is dedicated to serving the Austin behavior analysis community."
        breadcrumbs={[
          { label: "About", href: "/about" },
          { label: "Officers" },
        ]}
      />
      <OfficersSection />
    </PageLayout>
  );
}
