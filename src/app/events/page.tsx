"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Event from "@/components/Event";
import PageHero from "@/components/PageHero";
import PageContainer from "@/components/PageContainer";
import MotionInView from "@/components/MotionInView";
import events from "@/data/events.json";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { fadeInUp, defaultTransition } from "@/lib/motion";

const eventsHero = {
  title: "Events",
  subtitle: "Find quick overviews of each event that TSA offers!",
  image: "/photos/2.jpg",
  imagePosition: "0% 80%",
};

export default function Page() {
  const [query, setQuery] = useState("");
  const prefersReducedMotion = useReducedMotion();

  const filteredEvents = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return events;
    return events.filter((ev) => (ev.title ?? "").toLowerCase().includes(q));
  }, [query]);

  return (
    <>
      <PageHero {...eventsHero} />

      <PageContainer className="pb-16">
        <MotionInView className="mt-6 sm:mt-8 w-full">
          <p className="mb-4 font-sans text-white/70 text-sm sm:text-base">
            Search by event name. Click &quot;See more&quot; on any card for the
            full description and theme.
          </p>
          <div className="relative w-full max-w-xl">
            <Input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search events by title..."
              aria-label="Search events by title"
              className="h-11 sm:h-12 w-full bg-white/10 border-white/20 text-white placeholder:text-white/60 pr-11 font-sans text-base focus-visible:border-amber-500/50 focus-visible:ring-amber-500/30"
            />
            <AnimatePresence>
              {query !== "" && (
                <motion.div
                  initial={
                    prefersReducedMotion ? false : { opacity: 0, scale: 0.8 }
                  }
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-1 top-1/2 -translate-y-1/2"
                >
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon-sm"
                    onClick={() => setQuery("")}
                    aria-label="Clear search"
                    className="text-white hover:bg-white/20 hover:text-white"
                  >
                    <X className="size-4" />
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <motion.p
            key={filteredEvents.length}
            className="mt-2 text-sm text-purple-300 font-sans"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={defaultTransition}
          >
            Showing {filteredEvents.length} of {events.length} events
          </motion.p>
        </MotionInView>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-4 sm:gap-6 mt-6 w-full"
        >
          <AnimatePresence mode="popLayout">
            {filteredEvents.length === 0 ? (
              <motion.div
                key="empty"
                className="col-span-full text-left text-purple-300 py-12 font-sans"
                initial={prefersReducedMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                variants={fadeInUp}
              >
                No events found. Try a different search term.
              </motion.div>
            ) : (
              filteredEvents.map((event) => (
                <Event key={event.title} {...event} />
              ))
            )}
          </AnimatePresence>
        </motion.div>
      </PageContainer>
    </>
  );
}
