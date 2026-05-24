"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type GradientOutlineButtonProps = {
  href: string;
  external?: boolean;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
};

export default function GradientOutlineButton({
  href,
  external,
  className,
  innerClassName,
  children,
}: GradientOutlineButtonProps) {
  const prefersReducedMotion = useReducedMotion();

  const innerClasses = cn(
    "inline-flex items-center justify-center bg-[#2A1044] hover:bg-[#2A1044]/80 text-white font-bold transition-colors w-full h-full",
    innerClassName,
  );

  return (
    <motion.div
      className={cn(
        "p-0.5 bg-gradient-to-b from-amber-500 to-purple-900",
        className,
      )}
      whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      {external ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={innerClasses}
        >
          {children}
        </a>
      ) : (
        <Link href={href} className={innerClasses}>
          {children}
        </Link>
      )}
    </motion.div>
  );
}
