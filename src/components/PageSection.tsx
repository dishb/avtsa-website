"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { defaultTransition, fadeInUp, viewportOnce } from "@/lib/motion";

type PageSectionProps = {
  title?: string;
  intro?: string;
  children: ReactNode;
  className?: string;
  id?: string;
};

export default function PageSection({
  title,
  intro,
  children,
  className = "",
  id,
}: PageSectionProps) {
  return (
    <motion.section
      id={id}
      className={`py-12 md:py-16 ${className}`}
      initial={false}
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeInUp}
      transition={defaultTransition}
    >
      {(title || intro) && (
        <header className="mb-8 md:mb-10">
          {title && (
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-300">
              {title}
            </h2>
          )}
          {intro && (
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-white/80 font-sans max-w-3xl">
              {intro}
            </p>
          )}
        </header>
      )}
      {children}
    </motion.section>
  );
}
