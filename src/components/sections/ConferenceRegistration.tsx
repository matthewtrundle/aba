"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { CONFERENCE, REGISTRATION_SOURCES } from "@/lib/constants";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Divider } from "@/components/ui/Divider";
import { fadeUp } from "@/lib/animations";
import type { RegistrationFormData } from "@/types";

const registrationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  organization: z.string().min(2, "Organization is required"),
  membershipStatus: z.enum(["member", "non-member"]),
  dietaryRestrictions: z.string(),
  referralSource: z.string().min(1, "Please select how you heard about us"),
});

// Using native zod v4 inference
type FormValues = z.infer<typeof registrationSchema>;

export function ConferenceRegistration() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      organization: "",
      membershipStatus: "non-member",
      dietaryRestrictions: "",
      referralSource: "",
    },
  });

  const membershipStatus = watch("membershipStatus");
  const price =
    membershipStatus === "member"
      ? CONFERENCE.pricing.member
      : CONFERENCE.pricing.nonMember;

  const onSubmit = async (data: FormValues) => {
    // Client-side only for now — log and show success
    console.log("Registration data:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitted(true);
  };

  const inputClasses =
    "w-full px-4 py-3.5 rounded-xl bg-white border border-navy-950/10 text-navy-950 placeholder-navy-800/40 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-400/25 transition-all duration-500 text-sm";
  const labelClasses = "block text-sm font-light text-navy-800/80 mb-2";
  const errorClasses = "mt-1 text-xs text-red-500";

  return (
    <section
      id="conference-registration"
      className="py-32 md:py-40 bg-cream-50 flex justify-center"
    >
      <div className="w-full max-w-2xl px-6">
        <RevealOnScroll className="text-center mb-16">
          <Badge variant="gold" className="mb-8">
            Secure Your Spot
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-cormorant)] text-navy-950">
            Conference Registration
          </h2>
          <Divider className="mx-auto mt-8 mb-6" />
          <p className="text-navy-800/60 text-sm">
            February 28, 2026 &middot; Members ${CONFERENCE.pricing.member} |
            Non-Members ${CONFERENCE.pricing.nonMember}
          </p>
        </RevealOnScroll>

        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-center py-20"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.2,
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }}
              >
                <CheckCircle className="w-24 h-24 text-gold-400 mx-auto mb-8" />
              </motion.div>
              <h3 className="text-3xl font-bold font-[family-name:var(--font-cormorant)] text-navy-950 mb-6">
                Registration Received!
              </h3>
              <p className="text-navy-800/60 max-w-md mx-auto text-lg">
                Thank you for registering for the 5th Annual ATX ABA Conference.
                We&apos;ll send confirmation details to your email shortly.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-8 bg-white rounded-2xl p-10 border border-navy-950/5 shadow-lg shadow-navy-950/5"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClasses}>Full Name *</label>
                  <input
                    {...register("name", { required: "Name is required", minLength: { value: 2, message: "Name must be at least 2 characters" } })}
                    className={inputClasses}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className={errorClasses}>{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label className={labelClasses}>Email *</label>
                  <input
                    {...register("email", { required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Please enter a valid email" } })}
                    type="email"
                    className={inputClasses}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className={errorClasses}>{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClasses}>Phone *</label>
                  <input
                    {...register("phone", { required: "Phone is required", minLength: { value: 10, message: "Please enter a valid phone number" } })}
                    type="tel"
                    className={inputClasses}
                    placeholder="(512) 555-0123"
                  />
                  {errors.phone && (
                    <p className={errorClasses}>{errors.phone.message}</p>
                  )}
                </div>
                <div>
                  <label className={labelClasses}>Organization *</label>
                  <input
                    {...register("organization", { required: "Organization is required", minLength: { value: 2, message: "Organization is required" } })}
                    className={inputClasses}
                    placeholder="Your clinic or organization"
                  />
                  {errors.organization && (
                    <p className={errorClasses}>
                      {errors.organization.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Membership Status */}
              <div>
                <label className={labelClasses}>Membership Status *</label>
                <div className="grid grid-cols-2 gap-6">
                  <label
                    className={`flex items-center justify-center p-6 rounded-xl border-2 cursor-pointer transition-all duration-500 ${
                      membershipStatus === "member"
                        ? "border-gold-500 bg-gold-400/10 text-gold-500"
                        : "border-navy-950/10 text-navy-800/60 hover:border-navy-950/20"
                    }`}
                  >
                    <input
                      {...register("membershipStatus")}
                      type="radio"
                      value="member"
                      className="sr-only"
                    />
                    <div className="text-center">
                      <p className="font-semibold mb-1">Member</p>
                      <p className="text-3xl font-bold font-[family-name:var(--font-cormorant)]">
                        ${CONFERENCE.pricing.member}
                      </p>
                    </div>
                  </label>
                  <label
                    className={`flex items-center justify-center p-6 rounded-xl border-2 cursor-pointer transition-all duration-500 ${
                      membershipStatus === "non-member"
                        ? "border-gold-500 bg-gold-400/10 text-gold-500"
                        : "border-navy-950/10 text-navy-800/60 hover:border-navy-950/20"
                    }`}
                  >
                    <input
                      {...register("membershipStatus")}
                      type="radio"
                      value="non-member"
                      className="sr-only"
                    />
                    <div className="text-center">
                      <p className="font-semibold mb-1">Non-Member</p>
                      <p className="text-3xl font-bold font-[family-name:var(--font-cormorant)]">
                        ${CONFERENCE.pricing.nonMember}
                      </p>
                    </div>
                  </label>
                </div>
              </div>

              <div>
                <label className={labelClasses}>Dietary Restrictions</label>
                <input
                  {...register("dietaryRestrictions")}
                  className={inputClasses}
                  placeholder="Any dietary needs (optional)"
                />
              </div>

              <div>
                <label className={labelClasses}>
                  How did you hear about us? *
                </label>
                <select
                  {...register("referralSource", { required: "Please select an option" })}
                  className={inputClasses}
                >
                  <option value="">Select an option</option>
                  {REGISTRATION_SOURCES.map((source) => (
                    <option key={source} value={source}>
                      {source}
                    </option>
                  ))}
                </select>
                {errors.referralSource && (
                  <p className={errorClasses}>
                    {errors.referralSource.message}
                  </p>
                )}
              </div>

              {/* Price Summary */}
              <div className="p-6 rounded-xl bg-cream-100 border border-navy-950/5">
                <div className="flex justify-between items-center">
                  <span className="text-navy-800/60">Registration Fee</span>
                  <span className="text-3xl font-bold font-[family-name:var(--font-cormorant)] text-gold-500">
                    ${price}
                  </span>
                </div>
                <p className="text-xs text-navy-800/40 mt-3">
                  Payment details will be sent via email after registration.
                </p>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : `Register — $${price}`}
              </Button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
