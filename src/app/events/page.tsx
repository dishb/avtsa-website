"use client";

import React, { useMemo, useState, useRef } from "react";
import Event from "@/components/Event";
import events from "@/data/events.json";
import { X } from "lucide-react";

export default function Page() {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const filteredEvents = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return events;
    return events.filter((ev) => (ev.title ?? "").toLowerCase().includes(q));
  }, [query]);

  const clearQuery = () => {
    setQuery("");
    inputRef.current?.focus();
  };

  return (
    <>
      <div className="relative h-150 p-6 bg-gradient-to-b from-amber-500 to-purple-900">
        <div className="relative h-full rounded-xl overflow-hidden bg-[url(/photos/2.jpg)] bg-cover bg-[0%_80%]">
          <div className="absolute inset-0 bg-gradient-to-t from-[#2A1044]/40 to-[#2A1044]/90" />
          <div className="relative z-10 h-full w-full flex justify-evenly items-center px-4">
            <div className="md:max-w-[40%]">
              <h1 className="text-6xl font-bold">Events</h1>

              <h2 className="mt-12 text-3xl text-purple-300">
                Find quick overviews of each event that TSA offers!
              </h2>
            </div>

            <div className="hidden md:block min-w-[40%]" />
          </div>
        </div>
      </div>

      <div className="px-10 mt-6">
        <div className="max-w-3xl mx-auto md:mx-0">
          <div className="relative w-full md:w-1/2">
            <input
              type="text"
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search events by title..."
              className="w-full  p-3 rounded-lg bg-white/10 placeholder:text-white text-white border border-white/20 focus:outline-none pr-10"
              aria-label="Search events by title"
            />

            {query !== "" && (
              <button
                type="button"
                onClick={clearQuery}
                aria-label="Clear search"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/20 rounded-full p-1.5 z-10"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-10 mt-6">
        {filteredEvents.length === 0 ? (
          <div className="col-span-full text-center text-gray-300 py-8">
            No events found.
          </div>
        ) : (
          filteredEvents.map((event, index) => <Event key={index} {...event} />)
        )}
      </div>
    </>
  );
}
