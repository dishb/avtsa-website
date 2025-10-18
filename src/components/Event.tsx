"use client";

import { useState } from "react";
import EventProps from "@/types/EventProps";
import { X } from "lucide-react";
import Link from "next/link";
import { IBM_Plex_Sans } from "next/font/google";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

function extractLinks(text: string): string[] {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.match(urlRegex) || [];
}

function removeLinks(text: string): string {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.replace(urlRegex, "").trim();
}

export default function Event({ title, description, theme }: EventProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const links = extractLinks(theme);
  const themeText = removeLinks(theme);

  return (
    <>
      <div className="relative max-h-100 overflow-hidden border-2 border-purple-900 bg-purple-900/10 rounded-xl p-6 text-white">
        <h3 className="text-2xl font-bold text-purple-300 mb-4">{title}</h3>

        <p className={`${ibmPlexSans.className} text-sm mb-4`}>
          <span className="text-amber-500">Description:</span> {description}
        </p>

        <p className={`${ibmPlexSans.className} text-sm`}>
          <span className="text-amber-500">Theme:</span>{" "}
          <span>{themeText}</span>
          {links.length > 0 &&
            links.map((link, index) => (
              <span key={index}>
                {" "}
                <Link href={link} className="text-purple-300 underline">
                  Link
                </Link>
              </span>
            ))}
        </p>

        <div className="pointer-events-none absolute left-0 bottom-0 w-full h-20 bg-gradient-to-t from-[#2A1044] from-40% to-transparent" />

        <button
          className="mx-6 mb-3 py-2 absolute left-0 bottom-0 text-left text-purple-300"
          onClick={() => setIsExpanded(true)}
        >
          See more
        </button>
      </div>
      {isExpanded && (
        <div
          className="fixed inset-0 px-6 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setIsExpanded(false)}
        >
          <div
            className="bg-white rounded-xl p-8 max-w-2xl w-full shadow-lg relative text-black"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-black"
              onClick={() => setIsExpanded(false)}
              aria-label="Close popup"
            >
              <X />
            </button>
            <h3 className="text-2xl font-bold text-purple-800 mb-4">{title}</h3>
            <p className={`mb-4 leading-snug ${ibmPlexSans.className}`}>
              <span className="font-semibold text-amber-600">Description:</span>{" "}
              {description}
            </p>
            <p className={`leading-snug ${ibmPlexSans.className}`}>
              <span className="font-semibold text-amber-600">Theme:</span>{" "}
              <span>{themeText}</span>
              {links.length > 0 &&
                links.map((link, index) => (
                  <span key={index}>
                    {" "}
                    <Link href={link} className="text-purple-600 underline">
                      Link
                    </Link>
                  </span>
                ))}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
