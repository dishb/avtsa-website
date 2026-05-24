export const siteName = "Amador Valley TSA";
export const siteTagline = "Technology Student Association";

export const links = {
  join: "https://forms.gle/RZh8bdAnFQfvYNJw7",
  schedule:
    "https://docs.google.com/document/d/1VcWSuumkwqBJjtV8aQh0mOaQEwNBEa-O7wua2LxDlkI/edit",
  calendar: "",
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
    description:
      "Visit AVTSA on Instagram, where we post updates, highlights, and meeting notifications!",
  },
  {
    platform: "discord",
    label: "Discord",
    href: "https://discord.gg/nDnw233wMV",
    description:
      "Join our chapter Discord server, which is our main form of communication, to stay updated!",
  },
];

export const footerCopy = {
  copyright: "© 2026 Amador Valley Technology Student Association",
  blurb: "Building leaders through technology, innovation, and competition.",
};
