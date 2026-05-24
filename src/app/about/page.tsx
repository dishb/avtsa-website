import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import PageContainer from "@/components/PageContainer";
import PageSection from "@/components/PageSection";
import GradientCard from "@/components/GradientCard";
import StaggerGrid from "@/components/StaggerGrid";
import CTABanner from "@/components/CTABanner";
import {
  aboutHero,
  aboutIntro,
  aboutMission,
  aboutHighlights,
  meetingInfo,
  leadershipSection,
} from "@/data/aboutContent";
import { links } from "@/data/site";
import {
  Calendar,
  MapPin,
  Users,
  Sparkles,
  Trophy,
  Wrench,
  Heart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About | AV TSA",
  description:
    "Learn about Amador Valley Technology Student Association - mission, meetings, and leadership.",
};

const highlightIcons = [Sparkles, Trophy, Wrench, Heart];

export default function Page() {
  return (
    <>
      <PageHero {...aboutHero} />

      <PageContainer className="pb-16">
        <PageSection title={aboutIntro.title}>
          <div className="space-y-4 font-sans text-white/85 text-lg leading-relaxed max-w-3xl">
            {aboutIntro.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </PageSection>

        <PageSection>
          <GradientCard>
            <h3 className="text-2xl font-bold text-amber-500 mb-4">
              {aboutMission.title}
            </h3>
            <p className="font-sans text-white/85 text-lg leading-relaxed">
              {aboutMission.body}
            </p>
          </GradientCard>
        </PageSection>

        <PageSection title="Why Join AV TSA?">
          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {aboutHighlights.map((item, index) => {
              const Icon = highlightIcons[index] ?? Sparkles;
              return (
                <GradientCard key={item.title} disableEntrance>
                  <Icon className="text-purple-300 mb-4" size={40} />
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="font-sans text-white/80 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </GradientCard>
              );
            })}
          </StaggerGrid>
        </PageSection>

        <PageSection title={meetingInfo.title}>
          <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {meetingInfo.items.map((item, index) => {
              const icons = [Calendar, MapPin, Users];
              const Icon = icons[index] ?? Calendar;
              return (
                <GradientCard
                  key={item.label}
                  disableEntrance
                  className="h-full"
                >
                  <Icon className="text-amber-500 mb-3" size={32} />
                  <h3 className="text-lg font-bold text-purple-300">
                    {item.label}
                  </h3>
                  <p className="mt-2 font-sans text-white/80">{item.value}</p>
                </GradientCard>
              );
            })}
          </StaggerGrid>
        </PageSection>

        <PageSection
          title={leadershipSection.title}
          intro={leadershipSection.intro}
        >
          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadershipSection.officers.map((officer) => (
              <GradientCard
                key={officer.role}
                disableEntrance
                className="h-full"
              >
                <div className="flex h-full flex-col gap-4">
                  <div className="overflow-hidden rounded-xl bg-zinc-950/50">
                    <Image
                      src={officer.image}
                      alt={`${officer.name} headshot`}
                      width={560}
                      height={320}
                      className="h-44 w-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold uppercase tracking-wide text-amber-500">
                      {officer.role}
                    </p>
                    <h3 className="text-xl font-bold mt-2">{officer.name}</h3>
                    <p className="mt-2 font-sans text-sm text-white/70">
                      {officer.bio}
                    </p>
                  </div>
                </div>
              </GradientCard>
            ))}
          </StaggerGrid>
        </PageSection>

        <PageSection>
          <CTABanner
            title="Ready to get involved?"
            description="Join the chapter or explore events to find your first competition."
            links={[
              {
                label: "Join AV TSA",
                href: links.join,
                external: true,
                primary: true,
              },
              { label: "Browse Events", href: "/events" },
            ]}
          />
        </PageSection>
      </PageContainer>
    </>
  );
}
