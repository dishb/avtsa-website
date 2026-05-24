"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { defaultTransition } from "@/lib/motion";

export default function Page() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative min-h-[100dvh] p-4 sm:p-6 bg-gradient-to-b from-amber-500 to-purple-900">
      <motion.div
        className="relative h-full min-h-[calc(100dvh-2rem)] rounded-xl overflow-hidden bg-[url(/photos/4.jpg)] bg-cover bg-center"
        initial={prefersReducedMotion ? false : { scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <motion.div
          className="absolute inset-0 opacity-80 bg-[#2A1044] md:bg-radial-[at_75%_50%] md:from-[#2A1044]/10 md:to-[#2A1044]/90 to-50%"
          initial={false}
        />
        <div className="relative z-10 h-full min-h-[inherit] w-full flex items-center justify-center px-4 sm:px-6 pt-20">
          <div className="max-w-lg text-center md:text-left">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={defaultTransition}
            >
              <span className="pb-2 bg-gradient-to-b from-amber-500 from-40% to-purple-900 text-transparent bg-clip-text inline-block">
                404
              </span>{" "}
              Requested page not found.
            </motion.h1>

            <motion.h2
              className="mt-6 sm:mt-10 text-lg sm:text-2xl md:text-3xl text-purple-300"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...defaultTransition, delay: 0.15 }}
            >
              Try going back{" "}
              <Link
                href="/"
                className="text-white hover:underline decoration-amber-500 decoration-3"
              >
                home
              </Link>
              ?
            </motion.h2>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
