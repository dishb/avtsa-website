"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import navItems from "@/data/navItems";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import GradientOutlineButton from "@/components/GradientOutlineButton";
import { defaultTransition, menuItem, menuItemStagger } from "@/lib/motion";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinkClass = (isActive: boolean, size: "mobile" | "desktop") =>
    cn(
      "font-bold underline decoration-3 underline-offset-4 transition-all ease-in-out duration-200 hover:decoration-amber-500",
      size === "mobile"
        ? "text-2xl sm:text-3xl decoration-4"
        : "text-base lg:text-lg",
      isActive ? "decoration-amber-500" : "decoration-transparent",
    );

  const mobileNavItems = [...navItems, { title: "Compete", href: "/compete" }];

  return (
    <>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 sm:gap-8 bg-[#2A1044]/95 backdrop-blur-md px-6"
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <motion.button
              type="button"
              className="absolute top-5 right-5 sm:top-8 sm:right-8"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
              initial={
                prefersReducedMotion ? false : { opacity: 0, rotate: -90 }
              }
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <X size={32} className="text-white sm:w-9 sm:h-9" />
            </motion.button>

            <motion.div
              className="flex flex-col items-center gap-6 sm:gap-8"
              variants={menuItemStagger}
              initial={prefersReducedMotion ? false : "hidden"}
              animate="visible"
            >
              {mobileNavItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div key={item.href} variants={menuItem}>
                    <Link
                      href={item.href}
                      className={navLinkClass(isActive, "mobile")}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.nav
        className={cn(
          "w-full flex justify-between items-center fixed top-0 z-50 px-4 sm:px-6 lg:px-10 pb-3 transition-all duration-200",
          scrolled
            ? "backdrop-blur-md bg-purple-900/30 pt-3"
            : "pt-5 sm:pt-6 lg:pt-8",
        )}
        initial={prefersReducedMotion ? false : { y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={defaultTransition}
      >
        <Link href="/" className="w-20 sm:w-24 shrink-0 flex items-center">
          <Image
            src="/logo.svg"
            alt="Amador Valley TSA logo"
            width={890}
            height={321}
            priority
          />
        </Link>

        <button
          type="button"
          className="md:hidden p-1"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={28} className="text-white sm:w-9 sm:h-9" />
        </button>

        <div className="hidden md:flex flex-1 justify-center gap-8 lg:gap-14">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <motion.div
                key={item.href}
                initial={prefersReducedMotion ? false : { opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...defaultTransition, delay: 0.1 + index * 0.05 }}
              >
                <Link
                  href={item.href}
                  className={navLinkClass(isActive, "desktop")}
                >
                  {item.title}
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...defaultTransition, delay: 0.3 }}
        >
          <GradientOutlineButton
            href="/compete"
            className="hidden md:block rounded-md shrink-0"
            innerClassName="rounded-md px-6 lg:px-8 h-10 text-base lg:text-lg"
          >
            Compete
          </GradientOutlineButton>
        </motion.div>
      </motion.nav>
    </>
  );
}
