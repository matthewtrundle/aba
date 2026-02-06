"use client";

import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/sections/PageHero";
import { JobPostingsSection } from "@/components/sections/JobPostingsSection";

export default function JobsPage() {
  return (
    <PageLayout>
      <PageHero
        title="Job Postings"
        subtitle="Explore behavior analysis positions in the Austin area. Members can post jobs for free."
        breadcrumbs={[{ label: "Jobs" }]}
      />
      <JobPostingsSection />
    </PageLayout>
  );
}
