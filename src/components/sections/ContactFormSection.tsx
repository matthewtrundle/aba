"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Instagram, Facebook, Linkedin, Mail } from "lucide-react";
import { SITE, CONTACT_INTERESTS } from "@/lib/constants";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Divider } from "@/components/ui/Divider";
import { fadeLeft, fadeRight } from "@/lib/animations";

interface ContactFormValues {
  name: string;
  email: string;
  organization: string;
  interests: string[];
  message: string;
}

export function ContactFormSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      email: "",
      organization: "",
      interests: [],
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    console.log("Contact form data:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitted(true);
  };

  const inputClasses =
    "w-full px-4 py-3.5 rounded-xl bg-navy-800/50 border border-cream-50/10 text-cream-50 placeholder-cream-50/30 focus:outline-none focus:border-gold-400/50 focus:ring-1 focus:ring-gold-400/25 transition-all duration-500 text-sm";
  const labelClasses = "block text-sm font-light text-cream-50/70 mb-2";
  const errorClasses = "mt-1 text-xs text-red-400";

  const socialLinks = [
    { icon: Instagram, href: SITE.social.instagram, label: "Instagram" },
    { icon: Facebook, href: SITE.social.facebook, label: "Facebook" },
    { icon: Linkedin, href: SITE.social.linkedin, label: "LinkedIn" },
  ];

  return (
    <section id="contact" className="py-32 md:py-40 bg-navy-900 flex justify-center">
      <div className="w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left — Copy */}
          <RevealOnScroll variants={fadeLeft}>
            <Badge variant="gold" className="mb-8">
              Get in Touch
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-cormorant)] text-cream-50 leading-tight">
              Let&apos;s Build the Community
              <span className="text-gold-400"> Together</span>
            </h2>
            <Divider className="mt-8 mb-10" />
            <p className="text-cream-50/60 leading-relaxed mb-10 text-lg">
              Whether you have questions about membership, want to learn more
              about our events, or are interested in collaborating — we&apos;d
              love to hear from you. Reach out and a member of our team will
              respond promptly.
            </p>

            <div className="space-y-4 mb-10">
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-3 text-cream-50/50 hover:text-gold-400 transition-colors duration-500"
              >
                <Mail size={18} />
                {SITE.email}
              </a>
            </div>

            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-cream-50/5 flex items-center justify-center text-cream-50/40 hover:bg-gold-400/10 hover:text-gold-400 hover:scale-[1.05] transition-all duration-500"
                  aria-label={label}
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </RevealOnScroll>

          {/* Right — Form */}
          <RevealOnScroll variants={fadeRight}>
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                  className="flex flex-col items-center justify-center text-center py-20"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                    }}
                  >
                    <CheckCircle className="w-20 h-20 text-gold-400 mb-8" />
                  </motion.div>
                  <h3 className="text-2xl font-bold font-[family-name:var(--font-cormorant)] text-cream-50 mb-4">
                    Message Sent!
                  </h3>
                  <p className="text-cream-50/60 text-lg">
                    We&apos;ll get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6 bg-navy-800/30 rounded-2xl p-10 border border-cream-50/5"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className={labelClasses}>Name *</label>
                      <input
                        {...register("name", { required: "Name is required" })}
                        className={inputClasses}
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <p className={errorClasses}>{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <label className={labelClasses}>Email *</label>
                      <input
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Invalid email",
                          },
                        })}
                        type="email"
                        className={inputClasses}
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className={errorClasses}>{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className={labelClasses}>Organization</label>
                    <input
                      {...register("organization")}
                      className={inputClasses}
                      placeholder="Your clinic or organization (optional)"
                    />
                  </div>

                  <div>
                    <label className={labelClasses}>
                      I&apos;m interested in...
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      {CONTACT_INTERESTS.map((interest) => (
                        <label
                          key={interest}
                          className="flex items-center gap-2 text-sm text-cream-50/60 cursor-pointer hover:text-cream-50 transition-colors duration-500"
                        >
                          <input
                            type="checkbox"
                            value={interest}
                            {...register("interests")}
                            className="w-4 h-4 rounded border-cream-50/20 bg-navy-800 text-gold-400 focus:ring-gold-400/25"
                          />
                          {interest}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className={labelClasses}>Message *</label>
                    <textarea
                      {...register("message", {
                        required: "Message is required",
                      })}
                      rows={4}
                      className={inputClasses}
                      placeholder="How can we help?"
                    />
                    {errors.message && (
                      <p className={errorClasses}>{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </AnimatePresence>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
