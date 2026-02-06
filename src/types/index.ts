export interface NavLink {
  label: string;
  href: string;
}

export interface HeroSlide {
  headline: string;
  subtext: string;
  image: string;
}

export interface CategoryCard {
  icon: string;
  title: string;
  description: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface Event {
  title: string;
  date: string;
  type: string;
  ceus: string | null;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  organization: string;
  interests: string[];
  message: string;
}

export interface RegistrationFormData {
  name: string;
  email: string;
  phone: string;
  organization: string;
  membershipStatus: "member" | "non-member";
  dietaryRestrictions: string;
  referralSource: string;
}
