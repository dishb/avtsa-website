"use client";

import EventProps from "@/types/EventProps";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { cardHover } from "@/lib/motion";

function extractLinks(text: string): string[] {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.match(urlRegex) || [];
}

function removeLinks(text: string): string {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.replace(urlRegex, "").trim();
}

function EventBody({
  description,
  themeText,
  links,
  className,
}: {
  description: string;
  themeText: string;
  links: string[];
  className?: string;
}) {
  return (
    <div className={cn("font-sans text-sm leading-relaxed", className)}>
      <p className="mb-4">
        <span className="text-amber-500 font-semibold">Description:</span>{" "}
        {description}
      </p>
      <p>
        <span className="text-amber-500 font-semibold">Theme:</span> {themeText}
        {links.map((link, index) => (
          <span key={index}>
            {" "}
            <Link href={link} className="text-purple-300 underline">
              Link
            </Link>
          </span>
        ))}
      </p>
    </div>
  );
}

export default function Event({ title, description, theme }: EventProps) {
  const links = extractLinks(theme);
  const themeText = removeLinks(theme);
  const prefersReducedMotion = useReducedMotion();

  return (
    <Dialog>
      <motion.div
        layout
        initial={false}
        whileHover={prefersReducedMotion ? undefined : cardHover}
      >
        <motion.div
          className="relative flex flex-col max-h-80 overflow-hidden border-2 border-purple-900 bg-[#2F114C] rounded-xl p-4 sm:p-6 hover:border-purple-300/40 transition-colors h-full"
          whileTap={prefersReducedMotion ? undefined : { scale: 0.99 }}
        >
          <h3 className="text-lg sm:text-2xl font-bold text-purple-300 mb-3 sm:mb-4">
            {title}
          </h3>

          <motion.div
            className="flex-1 overflow-hidden mb-3 sm:mb-4 relative"
            initial={false}
          >
            <EventBody
              description={description}
              themeText={themeText}
              links={links}
            />
            <motion.div
              className="z-10 pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#2F114C] to-transparent"
              initial={false}
            />
          </motion.div>

          <DialogTrigger
            render={
              <Button
                variant="ghost"
                className="text-purple-300 hover:text-amber-500 hover:bg-transparent font-bold max-w-max"
              />
            }
          >
            See more
          </DialogTrigger>
        </motion.div>
      </motion.div>

      <DialogContent className="w-[calc(100%-2rem)] sm:max-w-2xl max-h-[85vh] overflow-y-auto text-popover-foreground p-6 sm:p-8">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-purple-800 pr-8 font-sans">
            {title}
          </DialogTitle>
        </DialogHeader>
        <EventBody
          description={description}
          themeText={themeText}
          links={links}
          className="text-base text-black [&_a]:text-purple-600"
        />
      </DialogContent>
    </Dialog>
  );
}
