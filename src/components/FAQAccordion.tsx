"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import {
  defaultTransition,
  fadeInUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/motion";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  items: FAQItem[];
  className?: string;
};

export default function FAQAccordion({ items, className }: FAQAccordionProps) {
  return (
    <motion.div
      className={className}
      initial={false}
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}
    >
      <Accordion>
        {items.map((item) => (
          <motion.div
            key={item.question}
            variants={fadeInUp}
            transition={defaultTransition}
          >
            <AccordionItem
              value={item.question}
              className="rounded-xl border border-purple-900/60 bg-purple-900/10 px-4 sm:px-6 overflow-hidden mb-4"
            >
              <AccordionTrigger className="py-4 text-base sm:text-lg font-bold text-purple-300 hover:text-amber-500 hover:no-underline [&_[data-slot=accordion-trigger-icon]]:text-amber-500">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pb-4 font-sans text-white/80 leading-relaxed text-sm sm:text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </motion.div>
  );
}
