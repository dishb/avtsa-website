import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PageSection from "@/components/PageSection";
import PageContainer from "@/components/PageContainer";
import GradientCard from "@/components/GradientCard";
import StaggerGrid from "@/components/StaggerGrid";
import CTABanner from "@/components/CTABanner";
import FAQAccordion from "@/components/FAQAccordion";
import SocialLinks from "@/components/SocialLinks";
import {
  contactHero,
  contactIntro,
  contactMethods,
  officersContact,
  faqSection,
} from "@/data/contactContent";
import { links } from "@/data/site";
import { Mail, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | AV TSA",
  description:
    "Get in touch with Amador Valley TSA officers and chapter leadership.",
};

export default function Page() {
  return (
    <>
      <PageHero {...contactHero} />

      <PageContainer className="pb-16">
        <PageSection title={contactIntro.title}>
          <div className="space-y-4 font-sans text-white/85 text-base sm:text-lg leading-relaxed max-w-3xl">
            {contactIntro.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </PageSection>

        <PageSection title="Get in Touch">
          <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {contactMethods.map((method) => (
              <GradientCard key={method.title} disableEntrance>
                <Mail className="text-purple-300 mb-4" size={32} />
                <h3 className="text-lg sm:text-xl font-bold">{method.title}</h3>
                <p className="mt-2 font-sans text-sm text-white/70">
                  {method.description}
                </p>
                <p className="mt-4 font-sans text-purple-300 break-all">
                  {method.value}
                </p>
                <a
                  href={method.href}
                  target={method.external ? "_blank" : undefined}
                  rel={method.external ? "noopener noreferrer" : undefined}
                  className="mt-4 inline-flex items-center gap-2 text-amber-500 font-bold hover:underline text-sm sm:text-base"
                >
                  {method.action}
                  {method.external && <ExternalLink size={16} />}
                </a>
              </GradientCard>
            ))}
          </StaggerGrid>
        </PageSection>

        <PageSection
          title={officersContact.title}
          intro={officersContact.intro}
        >
          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {officersContact.contacts.map((contact) => (
              <GradientCard key={contact.role} disableEntrance>
                <p className="text-sm font-bold uppercase tracking-wide text-amber-500">
                  {contact.role}
                </p>
                <h3 className="text-lg sm:text-xl font-bold mt-2">
                  {contact.name}
                </h3>
                <a
                  href={`mailto:${contact.email}`}
                  className="mt-3 inline-block font-sans text-sm text-purple-300 hover:text-amber-500 transition-colors break-all"
                >
                  {contact.email}
                </a>
              </GradientCard>
            ))}
          </StaggerGrid>
        </PageSection>

        <PageSection title="Follow Us">
          <SocialLinks variant="buttons" />
          <p className="mt-4 text-sm text-white/50 font-sans">
            Update social URLs in{" "}
            <code className="text-purple-300 text-xs sm:text-sm">
              src/data/site.ts
            </code>
            .
          </p>
        </PageSection>

        <PageSection title={faqSection.title}>
          <FAQAccordion items={faqSection.items} />
        </PageSection>

        <PageSection>
          <CTABanner
            title="Still have questions?"
            description="Come to a chapter meeting or send us an email - we're happy to help."
            links={[
              { label: "Email Us", href: links.email, primary: true },
              { label: "About AV TSA", href: "/about" },
            ]}
          />
        </PageSection>
      </PageContainer>
    </>
  );
}
