import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events | AV TSA",
  description:
    "Browse 40+ TSA competitive events - descriptions, themes, and overviews.",
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
