"use client";

import { motion, useReducedMotion } from "framer-motion";
import { defaultTransition } from "@/lib/motion";

type PageHeroProps = {
  title: string;
  subtitle: string;
  image: string;
  imagePosition?: string;
};

export default function PageHero({
  title,
  subtitle,
  image,
  imagePosition = "center",
}: PageHeroProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="relative min-h-[min(50vh,28rem)] sm:min-h-[22rem] lg:min-h-[24rem] p-4 sm:p-6 bg-gradient-to-b from-amber-500 to-purple-900"
      initial={false}
    >
      <motion.div
        className="relative h-full min-h-[inherit] rounded-xl overflow-hidden bg-cover"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: imagePosition,
        }}
        initial={prefersReducedMotion ? false : { opacity: 0, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#2A1044]/40 to-[#2A1044]/90" />
        <motion.div
          className="relative z-10 h-full min-h-[inherit] w-full flex items-center px-4 sm:px-6 pt-20 sm:pt-24 pb-8 sm:pb-10"
          initial={false}
        >
          <div className="w-full max-w-3xl">
            <motion.h1
              className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...defaultTransition, delay: 0.1 }}
            >
              {title}
            </motion.h1>
            <motion.h2
              className="mt-4 sm:mt-6 text-lg sm:text-2xl lg:text-3xl text-purple-300 leading-snug"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...defaultTransition, delay: 0.2 }}
            >
              {subtitle}
            </motion.h2>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
