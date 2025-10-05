"use client";

import { useState } from "react";
import EventProps from "@/types/EventProps";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Event({ title, description, theme }: EventProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div className="relative max-h-100 overflow-hidden border-2 border-purple-900 bg-purple-900/10 rounded-xl p-6 text-white hover:scale-[1.02] transition-transform duration-200 ease-in-out">
        <h3 className="text-2xl font-bold text-purple-300 mb-4">{title}</h3>

        <p className="text-sm mb-4">
          <span className="text-amber-500">Description:</span> {description}
        </p>

        <p className="text-sm">
          <span className="text-amber-500">Theme:</span> {theme}
        </p>

        <div className="pointer-events-none absolute left-0 bottom-0 w-full h-20 bg-gradient-to-t from-[#2A1044] from-40% to-transparent" />

        <button
          className="mx-6 mb-3 absolute left-0 bottom-0 text-left text-purple-300"
          onClick={() => setIsExpanded(true)}
        >
          See more
        </button>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            onClick={() => setIsExpanded(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl p-8 max-w-lg w-full shadow-lg relative text-black"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <button
                className="absolute top-4 right-4 text-black"
                onClick={() => setIsExpanded(false)}
                aria-label="Close popup"
              >
                <X />
              </button>
              <h3 className="text-2xl font-bold text-purple-700 mb-4">
                {title}
              </h3>
              <p className="mb-4 leading-snug">
                <span className="font-semibold text-amber-600">
                  Description:
                </span>{" "}
                {description}
              </p>
              <p className="leading-snug">
                <span className="font-semibold text-amber-600">Theme:</span>{" "}
                {theme}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
