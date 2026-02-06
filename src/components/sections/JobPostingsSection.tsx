"use client";

import { motion } from "framer-motion";
import { MapPin, Building2, Clock, ExternalLink, Briefcase } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Divider } from "@/components/ui/Divider";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { SITE } from "@/lib/constants";

const jobPostings = [
  {
    title: "Board Certified Behavior Analyst (BCBA)",
    company: "Austin ABA Clinic",
    location: "Austin, TX",
    type: "Full-time",
    posted: "2 days ago",
    description: "Seeking a passionate BCBA to join our growing team. Competitive salary, flexible schedule, and supportive supervision environment.",
  },
  {
    title: "Registered Behavior Technician (RBT)",
    company: "Bluebonnet Behavioral",
    location: "Round Rock, TX",
    type: "Full-time",
    posted: "1 week ago",
    description: "Entry-level RBT position with training provided. Work with children ages 2-12 in home and clinic settings.",
  },
  {
    title: "Clinical Director - BCBA-D",
    company: "Capital City Therapy",
    location: "Austin, TX",
    type: "Full-time",
    posted: "3 days ago",
    description: "Leadership role overseeing clinical operations and BCBA supervision. Doctoral-level certification required.",
  },
  {
    title: "BCBA - School District",
    company: "Austin ISD",
    location: "Austin, TX",
    type: "Contract",
    posted: "5 days ago",
    description: "Contracted BCBA position supporting special education classrooms. School schedule with summer flexibility.",
  },
];

export function JobPostingsSection() {
  return (
    <section id="jobs" className="py-32 md:py-40 bg-cream-50 overflow-hidden flex justify-center">
      <div className="w-full max-w-7xl px-6">
        <RevealOnScroll className="text-center mb-20">
          <Badge variant="teal" className="mb-8">
            Career Opportunities
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-cormorant)] text-navy-950">
            Job Postings
          </h2>
          <Divider className="mx-auto mt-8 mb-6" />
          <p className="text-navy-800/60 max-w-2xl mx-auto text-lg">
            Explore behavior analysis positions in the Austin area. Members can post jobs for free.
          </p>
        </RevealOnScroll>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="space-y-6 mb-16"
        >
          {jobPostings.map((job, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="group bg-white rounded-2xl p-8 border border-navy-950/5 hover:border-gold-500/30 hover:shadow-lg hover:shadow-navy-950/5 transition-all duration-500"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold font-[family-name:var(--font-cormorant)] text-navy-950">
                      {job.title}
                    </h3>
                    <Badge variant="outline" className="text-xs">
                      {job.type}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-navy-800/60 mb-4">
                    <span className="flex items-center gap-1.5">
                      <Building2 className="w-4 h-4" />
                      {job.company}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {job.posted}
                    </span>
                  </div>
                  <p className="text-navy-800/70 leading-relaxed">
                    {job.description}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Button variant="outline" size="sm" className="group/btn">
                    View Details
                    <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-0.5 transition-transform duration-500" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <RevealOnScroll className="text-center">
          <div className="bg-white rounded-2xl p-10 border border-navy-950/5 max-w-2xl mx-auto">
            <Briefcase className="w-12 h-12 text-gold-500 mx-auto mb-6" />
            <h3 className="text-2xl font-bold font-[family-name:var(--font-cormorant)] text-navy-950 mb-4">
              Post a Job
            </h3>
            <p className="text-navy-800/60 mb-8">
              ATX ABA members can post job openings for free. Reach qualified behavior analysis professionals in the Austin area.
            </p>
            <a href={`mailto:${SITE.email}?subject=Job Posting Submission`}>
              <Button size="lg">
                Submit a Job Posting
              </Button>
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
