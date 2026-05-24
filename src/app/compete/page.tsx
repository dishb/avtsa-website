import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PageContainer from "@/components/PageContainer";
import PageSection from "@/components/PageSection";
import GradientCard from "@/components/GradientCard";
import CTABanner from "@/components/CTABanner";
import {
  competeHero,
  competeIntro,
  competitionLevels,
  seasonTimeline,
  competeTips,
  competeCta,
} from "@/data/competeContent";
import { links } from "@/data/site";
import {
  Flag,
  Map,
  Globe,
  Lightbulb,
  MessageCircle,
  Scale,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Compete | AV TSA",
  description:
    "How TSA competition works at Amador Valley - from chapter rounds to nationals.",
};

const levelIcons = {
  chapter: Flag,
  regionals: Map,
  nationals: Globe,
};

const tipIcons = [Lightbulb, MessageCircle, Scale];

export default function Page() {
  return (
    <>
      <PageHero {...competeHero} />

      <PageContainer className="pb-16">
        <PageSection title={competeIntro.title}>
          <div className="space-y-4 font-sans text-white/85 text-lg leading-relaxed max-w-3xl">
            {competeIntro.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </PageSection>

        <PageSection title="Competition Levels">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {competitionLevels.map((level) => {
              const Icon = levelIcons[level.icon];
              return (
                <GradientCard key={level.title}>
                  <Icon className="text-amber-500 mb-4" size={40} />
                  <h3 className="text-xl font-bold text-purple-300">
                    {level.title}
                  </h3>
                  <p className="mt-3 font-sans text-white/80 text-sm leading-relaxed">
                    {level.description}
                  </p>
                </GradientCard>
              );
            })}
          </div>
        </PageSection>

        <PageSection title="Season Timeline">
          <div className="relative">
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500 to-purple-900" />
            <div className="space-y-6">
              {seasonTimeline.map((item) => (
                <div key={item.step} className="flex gap-4 sm:gap-6 md:gap-8">
                  <div className="shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-b from-amber-500 to-purple-900 flex items-center justify-center text-lg sm:text-2xl font-bold z-10">
                    {item.step}
                  </div>
                  <GradientCard className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <span className="text-sm font-bold text-amber-500 shrink-0">
                        {item.timeframe}
                      </span>
                    </div>
                    <p className="mt-3 font-sans text-white/80 leading-relaxed">
                      {item.description}
                    </p>
                  </GradientCard>
                </div>
              ))}
            </div>
          </div>
        </PageSection>

        <PageSection title="Tips for Success">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {competeTips.map((tip, index) => {
              const Icon = tipIcons[index] ?? Lightbulb;
              return (
                <GradientCard key={tip.title}>
                  <Icon className="text-purple-300 mb-3" size={32} />
                  <h3 className="text-lg font-bold">{tip.title}</h3>
                  <p className="mt-2 font-sans text-sm text-white/80">
                    {tip.body}
                  </p>
                </GradientCard>
              );
            })}
          </div>
        </PageSection>

        <PageSection>
          <CTABanner
            title={competeCta.title}
            description={competeCta.description}
            links={[
              {
                label: "Join Now",
                href: links.join,
                external: true,
                primary: true,
              },
              { label: "View Events", href: "/events" },
              {
                label: "Schedule",
                href: links.schedule,
                external: true,
              },
            ]}
          />
        </PageSection>
      </PageContainer>
    </>
  );
}
