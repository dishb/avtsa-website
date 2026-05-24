"use client";

import Link from "next/link";
import Image from "next/image";
import navItems from "@/data/navItems";
import { footerCopy, links, siteName } from "@/data/site";
import SocialLinks from "@/components/SocialLinks";
import PageContainer from "@/components/PageContainer";
import { motion, useReducedMotion } from "framer-motion";
import {
  defaultTransition,
  fadeInUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/motion";

export default function Footer() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <footer className="mt-auto w-full border-t border-purple-900/60 bg-[#2A1044]/80">
      <PageContainer className="py-10 sm:py-12">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
          initial={false}
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} transition={defaultTransition}>
            <Link href="/" className="inline-block w-24 sm:w-28">
              <Image
                src="/logo.svg"
                alt={`${siteName} logo`}
                width={890}
                height={321}
              />
            </Link>
            <p className="mt-4 text-sm text-white/70 font-sans max-w-xs">
              {footerCopy.blurb}
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} transition={defaultTransition}>
            <h3 className="text-sm font-bold uppercase tracking-wider text-amber-500 mb-4">
              Navigate
            </h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-purple-300 hover:text-amber-500 transition-colors font-sans"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/compete"
                  className="text-purple-300 hover:text-amber-500 transition-colors font-sans"
                >
                  Compete
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp} transition={defaultTransition}>
            <h3 className="text-sm font-bold uppercase tracking-wider text-amber-500 mb-4">
              Resources
            </h3>
            <ul className="space-y-2 font-sans text-purple-300">
              <li>
                <a
                  href={links.join}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-500 transition-colors"
                >
                  Join the chapter
                </a>
              </li>
              <li>
                <a
                  href={links.schedule}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-500 transition-colors"
                >
                  Schedule
                </a>
              </li>
              <li>
                <Link
                  href="/events"
                  className="hover:text-amber-500 transition-colors"
                >
                  Browse events
                </Link>
              </li>
            </ul>

            <h3 className="text-sm font-bold uppercase tracking-wider text-amber-500 mt-8 mb-4">
              Social
            </h3>
            <SocialLinks
              variant="footer"
              className="flex-col items-start gap-3"
            />
          </motion.div>
        </motion.div>
      </PageContainer>

      <div className="w-full border-t border-purple-900/40">
        <PageContainer>
          <motion.p
            className="py-6 text-center text-sm text-white/50 font-sans"
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOnce}
            transition={defaultTransition}
          >
            {footerCopy.copyright}
          </motion.p>
        </PageContainer>
      </div>
    </footer>
  );
}
