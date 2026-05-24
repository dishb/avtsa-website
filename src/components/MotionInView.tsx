"use client";

import type { ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";
import { defaultTransition, fadeInUp, viewportOnce } from "@/lib/motion";

type MotionInViewProps = Omit<HTMLMotionProps<"div">, "children"> & {
  children: ReactNode;
  variants?: Variants;
  delay?: number;
};

export default function MotionInView({
  children,
  variants = fadeInUp,
  delay = 0,
  className,
  ...props
}: MotionInViewProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={false}
      whileInView="visible"
      viewport={viewportOnce}
      variants={variants}
      transition={{ ...defaultTransition, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
