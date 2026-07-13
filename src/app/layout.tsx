import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stone-Stitch | Structural Stone Repairs & Helibar Reinforcement",
  description: "Expert structural masonry repairs, helibar reinforcement, and rope access stonework in Edinburgh and Central Scotland. Fast, cost-effective, and fully insured.",
  openGraph: {
    title: "Stone-Stitch | Structural Stone Repairs & Helibar Reinforcement",
    description: "Expert structural masonry repairs, helibar reinforcement, and rope access stonework in Edinburgh and Central Scotland.",
    url: "https://stone-stitch.co.uk",
    siteName: "Stone-Stitch",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col bg-slate-50 text-slate-900`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
