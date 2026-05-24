"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import GradientOutlineButton from "@/components/GradientOutlineButton";
import { defaultTransition, fadeIn, viewportOnce } from "@/lib/motion";

type CTALink = {
  label: string;
  href: string;
  external?: boolean;
  primary?: boolean;
};

type CTABannerProps = {
  title: string;
  description: string;
  links: CTALink[];
};

export default function CTABanner({
  title,
  description,
  links,
}: CTABannerProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="p-0.5 rounded-xl bg-gradient-to-b from-amber-500 to-purple-900 hover:from-amber-400 hover:to-purple-800 transition-colors duration-200"
      initial={false}
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeIn}
      transition={defaultTransition}
    >
      <div className="rounded-[10px] bg-background/95 px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-14 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-8">
        <motion.div className="max-w-xl" initial={false}>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-300">
            {title}
          </h2>
          <p className="mt-3 text-white/80 font-sans text-sm sm:text-base">
            {description}
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col sm:flex-row flex-wrap gap-3 w-full lg:w-auto lg:shrink-0"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.06, delayChildren: 0.1 },
            },
          }}
          initial={false}
          whileInView="visible"
          viewport={viewportOnce}
        >
          {links.map((link) => {
            if (link.primary) {
              return (
                <motion.div
                  key={link.href}
                  variants={fadeIn}
                  transition={defaultTransition}
                  whileHover={
                    prefersReducedMotion ? undefined : { scale: 1.03 }
                  }
                  whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                >
                  <GradientOutlineButton
                    href={link.href}
                    external={link.external}
                    className="rounded-lg w-full sm:w-auto"
                    innerClassName="gap-2 px-5 py-3 rounded-[7px] text-sm sm:text-base"
                  >
                    {link.label}
                    <ArrowRight size={18} />
                  </GradientOutlineButton>
                </motion.div>
              );
            }

            const className =
              "inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-bold text-sm sm:text-base w-full sm:w-auto border border-purple-300/40 text-purple-300 hover:border-amber-500 hover:text-amber-500 transition-colors";

            const linkContent = (
              <>
                {link.label}
                <ArrowRight size={18} />
              </>
            );

            return (
              <motion.div
                key={link.href}
                variants={fadeIn}
                transition={defaultTransition}
                whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
              >
                {link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {linkContent}
                  </a>
                ) : (
                  <Link href={link.href} className={className}>
                    {linkContent}
                  </Link>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
}
