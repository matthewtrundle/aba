"use client";

import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/sections/PageHero";
import { ContactFormSection } from "@/components/sections/ContactFormSection";

export default function ContactPage() {
  return (
    <PageLayout>
      <PageHero
        title="Contact Us"
        subtitle="Have questions? We'd love to hear from you. Reach out and a member of our team will respond promptly."
        breadcrumbs={[{ label: "Contact" }]}
      />
      <ContactFormSection />
    </PageLayout>
  );
}
