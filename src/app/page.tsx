"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowDown, Hammer, Swords, Crown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import titles from "@/data/titles";
import rotatingText from "@/data/rotatingText";
import { homeIntro, homeFeatures } from "@/data/homeContent";
import CTABanner from "@/components/CTABanner";
import PageContainer from "@/components/PageContainer";
import MotionInView from "@/components/MotionInView";
import { links } from "@/data/site";
import {
  cardHover,
  defaultTransition,
  fadeInUp,
  staggerContainer,
} from "@/lib/motion";

const featureIcons = [Hammer, Swords, Crown];

export default function Page() {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  return (
    <>
      <div className="relative min-h-[100dvh] p-4 sm:p-6 bg-gradient-to-b from-amber-500 to-purple-900">
        <motion.div
          className="relative h-full min-h-[calc(100dvh-2rem)] sm:min-h-[calc(100dvh-3rem)] rounded-xl overflow-hidden bg-[url(/photos/1.png)] bg-cover bg-center"
          initial={prefersReducedMotion ? false : { scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.div
            className="absolute inset-0 opacity-80 bg-[#2A1044] md:bg-radial-[at_75%_50%] md:from-[#2A1044]/10 md:to-[#2A1044]/90 to-50%"
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          <div className="relative z-10 h-full min-h-[inherit] w-full flex flex-col md:flex-row justify-center md:justify-evenly items-center gap-8 pt-20 sm:pt-24 pb-16 px-4 sm:px-6">
            <motion.div
              className="w-full md:max-w-[40%] text-center md:text-left"
              initial={false}
            >
              <motion.h1
                className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={defaultTransition}
              >
                A community of Amador Valley&apos;s{" "}
                <span className="pb-2 bg-gradient-to-b from-amber-500 from-40% to-purple-900 text-transparent bg-clip-text inline-block min-w-[8ch]">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={titles[index]}
                      initial={
                        prefersReducedMotion ? false : { opacity: 0, y: 20 }
                      }
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="inline-block"
                    >
                      {titles[index]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </motion.h1>

              <motion.h2
                className="mt-6 sm:mt-10 md:mt-12 text-xl sm:text-2xl md:text-3xl text-purple-300"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...defaultTransition, delay: 0.2 }}
              >
                TSA offers something for{" "}
                <span className="italic">everyone</span>.
              </motion.h2>
            </motion.div>

            <motion.div
              className="hidden md:flex min-w-[40%] items-center justify-center"
              initial={
                prefersReducedMotion
                  ? false
                  : { opacity: 0, scale: 0.8, rotate: -10 }
              }
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ ...defaultTransition, delay: 0.4, duration: 0.7 }}
            >
              <div className="w-56 md:w-80 lg:w-[30rem] h-56 md:h-80 lg:h-[30rem] relative">
                <svg
                  viewBox="0 0 350 350"
                  className="w-full h-full"
                  role="img"
                  aria-label="Rotating circle text"
                >
                  <defs>
                    <path
                      id="circlePath"
                      d="M175,175 m0,-150 a150,150 0 1,1 0,300 a150,150 0 1,1 0,-300"
                    />
                  </defs>

                  <g className="origin-center [transform-box:view-box] animate-spinning">
                    <text fill="#FFBF00" fontWeight="700" letterSpacing="1.25">
                      <textPath href="#circlePath" startOffset="0%">
                        {Array(rotatingText.length)
                          .fill(rotatingText.join(" • "))
                          .join(" • ")}
                      </textPath>
                    </text>
                  </g>
                </svg>
              </div>
            </motion.div>

            <motion.button
              type="button"
              className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2"
              onClick={() => {
                const el = document.getElementById("main-content");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              aria-label="Scroll to main content"
              initial={prefersReducedMotion ? false : { opacity: 0, y: -10 }}
              animate={
                prefersReducedMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 1, y: [0, 8, 0] }
              }
              transition={
                prefersReducedMotion
                  ? { delay: 0.8, duration: 0.5 }
                  : {
                      opacity: { delay: 0.8, duration: 0.5 },
                      y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
                    }
              }
            >
              <ArrowDown size={46} />
            </motion.button>
          </div>
        </motion.div>
      </div>

      <PageContainer id="main-content" className="py-16 sm:py-20 md:py-28">
        <MotionInView className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-300">
            {homeIntro.title}
          </h2>
          <div className="mt-6 space-y-4 font-sans text-white/85 text-lg leading-relaxed">
            {homeIntro.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <Link
            href="/about"
            className="mt-6 inline-flex items-center gap-2 text-amber-500 font-bold hover:underline"
          >
            Learn more about us
            <ArrowRight size={18} />
          </Link>
        </MotionInView>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {homeFeatures.map((feature, i) => {
            const Icon = featureIcons[i];
            return (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                transition={defaultTransition}
                whileHover={prefersReducedMotion ? undefined : cardHover}
              >
                <motion.div
                  className="p-2 rounded-lg bg-gradient-to-b from-amber-500 to-purple-900 hover:from-amber-400 hover:to-purple-800 transition-colors"
                  whileHover={
                    prefersReducedMotion
                      ? undefined
                      : { scale: 1.02, transition: { duration: 0.2 } }
                  }
                >
                  <motion.div
                    className="h-full rounded-lg bg-background/80 flex flex-col items-center px-5 sm:px-6 py-7 sm:py-8 text-center"
                    initial={false}
                  >
                    <Icon
                      size={56}
                      className="text-purple-300 sm:w-[72px] sm:h-[72px]"
                    />
                    <h3 className="text-xl sm:text-2xl font-bold mt-4 mb-3">
                      {feature.title}
                    </h3>
                    <p className="font-sans text-white/80 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-12 sm:mt-20">
          <CTABanner
            title="Start your TSA journey"
            description="Join the chapter, pick your events, and compete with Amador Valley's best."
            links={[
              {
                label: "Join AV TSA",
                href: links.join,
                external: true,
                primary: true,
              },
              { label: "How to Compete", href: "/compete" },
              { label: "Browse Events", href: "/events" },
            ]}
          />
        </div>
      </PageContainer>
    </>
  );
}
