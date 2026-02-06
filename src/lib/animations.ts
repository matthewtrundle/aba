import type { Variants } from "framer-motion";

// Sophisticated easing curves (typed as tuples for Framer Motion)
const smoothEase: [number, number, number, number] = [0.25, 0.1, 0.25, 1];
const editorialEase: [number, number, number, number] = [0.77, 0, 0.175, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.0, ease: smoothEase },
  },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.0, ease: smoothEase },
  },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.0, ease: smoothEase },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Smooth editorial reveal with blur
export const smoothReveal: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: smoothEase },
  },
};

// Mask reveal for headlines
export const maskReveal: Variants = {
  hidden: { clipPath: "inset(100% 0% 0% 0%)" },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    transition: { duration: 0.8, ease: editorialEase },
  },
};

// Slide in from left with subtle depth
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40, rotateY: 5 },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: { duration: 1.0, ease: smoothEase },
  },
};

// Slide in from right with subtle depth
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40, rotateY: -5 },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: { duration: 1.0, ease: smoothEase },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: smoothEase },
  },
};

export const textReveal: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const wordReveal: Variants = {
  hidden: { opacity: 0, y: 15, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: smoothEase },
  },
};

export const lineDrawVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 2.0, ease: "easeInOut" },
  },
};
