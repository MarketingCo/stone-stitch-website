import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Stone-Stitch",
  description: "Get a free quote for structural masonry repairs and helibar reinforcement in Edinburgh and Central Scotland.",
  alternates: {
    canonical: "https://www.stone-stitch.co.uk/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
