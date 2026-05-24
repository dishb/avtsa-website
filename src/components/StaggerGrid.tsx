"use client";

import { Children, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  defaultTransition,
  fadeIn,
  staggerContainer,
  viewportOnce,
} from "@/lib/motion";

type StaggerGridProps = {
  children: ReactNode;
  className?: string;
};

export default function StaggerGrid({ children, className }: StaggerGridProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}
    >
      {Children.toArray(children).map((child, index) => (
        <motion.div
          key={index}
          variants={fadeIn}
          transition={defaultTransition}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
