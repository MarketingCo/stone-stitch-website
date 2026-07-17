import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.stone-stitch.co.uk'),
  title: "Stone-Stitch | Structural Stone Repairs & Helibar Reinforcement",
  description: "Expert structural masonry repairs, helibar reinforcement, and rope access stonework in Edinburgh & Central Scotland. Fast, cost-effective, and fully insured.",
  openGraph: {
    siteName: "Stone-Stitch",
    images: [
      {
        url: "https://images.unsplash.com/photo-1590496794008-383c8070b257?auto=format&fit=crop&q=80&w=1200",
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
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
