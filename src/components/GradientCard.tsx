"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  cardHover,
  defaultTransition,
  fadeInUp,
  springTransition,
  viewportOnce,
} from "@/lib/motion";

type GradientCardProps = {
  children: ReactNode;
  className?: string;
  disableEntrance?: boolean;
};

export default function GradientCard({
  children,
  className = "",
  disableEntrance = false,
}: GradientCardProps) {
  const prefersReducedMotion = useReducedMotion();

  const entranceProps = disableEntrance
    ? {}
    : {
        initial: false as const,
        whileInView: "visible" as const,
        viewport: viewportOnce,
        variants: fadeInUp,
        transition: defaultTransition,
      };

  return (
    <motion.div
      className={`p-0.5 rounded-xl bg-gradient-to-b from-amber-500 to-purple-900 hover:from-amber-400 hover:to-purple-800 transition-colors duration-200 ${className}`}
      {...entranceProps}
      whileHover={prefersReducedMotion ? undefined : cardHover}
    >
      <motion.div
        className="h-full rounded-[10px] bg-background/90 backdrop-blur-sm p-6 md:p-8"
        whileHover={
          prefersReducedMotion ? undefined : { transition: springTransition }
        }
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
