"use client";

import { motion, useReducedMotion } from "framer-motion";
import { socialLinks, type SocialLink } from "@/data/site";
import { SocialIcon } from "@/components/icons/SocialIcons";
import { cn } from "@/lib/utils";
import {
  defaultTransition,
  fadeInUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/motion";

type SocialLinksProps = {
  variant?: "buttons" | "inline" | "footer";
  className?: string;
};

function SocialLinkItem({
  social,
  variant,
}: {
  social: SocialLink;
  variant: SocialLinksProps["variant"];
}) {
  const prefersReducedMotion = useReducedMotion();
  const icon = (
    <SocialIcon
      platform={social.platform}
      size={variant === "footer" ? 20 : 22}
    />
  );

  const motionProps = {
    whileHover: prefersReducedMotion ? undefined : { scale: 1.05, x: 2 },
    whileTap: prefersReducedMotion ? undefined : { scale: 0.97 },
    transition: { type: "spring" as const, stiffness: 400, damping: 20 },
  };

  if (variant === "footer") {
    return (
      <motion.a
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2.5 text-purple-300 hover:text-amber-500 transition-colors font-sans"
        aria-label={social.label}
        {...motionProps}
      >
        {icon}
        <span>{social.label}</span>
      </motion.a>
    );
  }

  if (variant === "inline") {
    return (
      <motion.a
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center size-11 rounded-lg border border-purple-300/40 text-purple-300 hover:border-amber-500 hover:text-amber-500 transition-colors"
        aria-label={social.label}
        {...motionProps}
      >
        {icon}
      </motion.a>
    );
  }

  return (
    <motion.a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 px-5 py-3 rounded-lg border border-purple-300/40 text-purple-300 font-bold hover:border-amber-500 hover:text-amber-500 transition-colors font-sans"
      {...motionProps}
    >
      {icon}
      <span>{social.label}</span>
    </motion.a>
  );
}

export default function SocialLinks({
  variant = "buttons",
  className,
}: SocialLinksProps) {
  return (
    <motion.div
      className={cn(
        variant === "inline" ? "flex gap-3" : "flex flex-wrap gap-4",
        className,
      )}
      initial={false}
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}
    >
      {socialLinks.map((social) => (
        <motion.div
          key={social.platform}
          variants={fadeInUp}
          transition={defaultTransition}
        >
          <SocialLinkItem social={social} variant={variant} />
        </motion.div>
      ))}
    </motion.div>
  );
}
