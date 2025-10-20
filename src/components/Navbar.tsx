"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import navItems from "@/data/navItems";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const navbarRef = useRef<HTMLElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function changeNavbar() {
      if (navbarRef.current === null) return;

      const newClasses = ["backdrop-blur-md", "bg-purple-900/30", "pt-4"];

      if (window.scrollY > 0) {
        navbarRef.current.classList.remove("pt-10");
        navbarRef.current.classList.add(...newClasses);
      } else {
        navbarRef.current.classList.remove(...newClasses);
        navbarRef.current.classList.add("pt-10");
      }
    }

    changeNavbar();
    window.addEventListener("scroll", changeNavbar);

    return () => window.removeEventListener("scroll", changeNavbar);
  }, [navbarRef]);

  return (
    <>
      {isMenuOpen && (
        <div className="w-screen backdrop-blur-md h-screen bg-[#2A1044]/80 fixed top-0 left-0 flex flex-col items-center justify-center gap-8 z-99">
          <button
            className="absolute top-10 right-10"
            onClick={() => setIsMenuOpen(false)}
          >
            <X size={36} color="white" />
          </button>

          {navItems.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={index}
                href={item.href}
                className={`font-bold text-3xl underline decoration-4 underline-offset-4 transition-all ease-in-out duration-200 hover:decoration-amber-500 ${
                  isActive ? "decoration-amber-500" : "decoration-transparent"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      )}

      <nav
        ref={navbarRef}
        className="w-screen flex justify-between items-center fixed top-0 z-50 px-16 pt-10 pb-4 transition-all duration-200"
      >
        <button
          className="w-24 flex items-center"
          onClick={() => router.push("/")}
        >
          <Image
            src="/logo.svg"
            alt="Amador Valley TSA's logo."
            width={890}
            height={321}
          />
        </button>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={36} color="white" />
        </button>

        <div className="hidden md:flex flex-1 justify-center gap-16">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={index}
                href={item.href}
                className={`font-bold text-lg underline decoration-3 transition-all ease-in-out duration-200 hover:decoration-amber-500 ${
                  isActive ? "decoration-amber-500" : "decoration-transparent"
                }`}
              >
                {item.title}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:block p-0.75 rounded-md bg-gradient-to-b from-amber-500 to-purple-900 hover:bg-[#2A1044]">
          <button
            className="bg-[#2A1044] hover:bg-[#2A1044]/60 transition-color duration-200 ease-in-out px-8 py-3 rounded-md w-full h-full"
            onClick={() => router.push("/compete")}
          >
            Compete
          </button>
        </div>
      </nav>
    </>
  );
}
