"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import navItems from "@/data/navItems";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const navbarRef = useRef<HTMLElement>(null);
  const router = useRouter();
  const pathname = usePathname();

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
    <nav
      ref={navbarRef}
      className="w-full flex justify-between items-center fixed top-0 z-50 px-10 pt-10 pb-4 transition-all duration-200"
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

      <div className="flex-1 flex justify-center gap-16">
        {navItems.map((item, index) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={index}
              href={item.href}
              className={`font-bold text-lg decoration-amber-500 decoration-3 ${
                isActive ? "underline" : "hover:underline"
              }`}
            >
              {item.title}
            </Link>
          );
        })}
      </div>

      <div className="p-0.75 rounded-md bg-gradient-to-b from-amber-500 to-purple-900 hover:bg-[#2A1044]">
        <button
          className="bg-[#2A1044] hover:bg-[#2A1044]/60 transition-color duration-200 ease-in-out px-8 py-3 rounded-md w-full h-full"
          onClick={() => router.push("/compete")}
        >
          Compete
        </button>
      </div>
    </nav>
  );
}
