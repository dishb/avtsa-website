export const siteName = "Amador Valley TSA";
export const siteTagline = "Technology Student Association";

export const links = {
  join: "https://forms.gle/RZh8bdAnFQfvYNJw7",
  schedule:
    "https://docs.google.com/document/d/1VcWSuumkwqBJjtV8aQh0mOaQEwNBEa-O7wua2LxDlkI/edit",
  calendar: "/bay-tsa-schedule-and-calendar.pdf",
  email: "mailto:avhstsa@gmail.com",
} as const;

export type SocialLink = {
  platform: "instagram" | "discord";
  label: string;
  href: string;
  description: string;
};

export const socialLinks: SocialLink[] = [
  {
    platform: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/av.tsa/",
    description: "Replace with your chapter Instagram URL.",
  },
  {
    platform: "discord",
    label: "Discord",
    href: "https://discord.gg/",
    description: "Replace with your chapter Discord invite.",
  },
];

export const footerCopy = {
  copyright: `© ${new Date().getFullYear()} Amador Valley Technology Student Association`,
  blurb: "Building leaders through technology, innovation, and competition.",
};
