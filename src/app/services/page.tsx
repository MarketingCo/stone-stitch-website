import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Shield, Wrench, HardHat, Link as LinkIcon, Building2 } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Helibar & Stone Stitching",
  alternates: {
    canonical: "https://www.stone-stitch.co.uk/services",
  },
};

export default function Services() {
  const services = [
    {
      title: "Helibar Repair",
      desc: "High-tensile stainless steel Helibars are grouted into cracked masonry beds. This bonds the masonry together, distributing the structural loads and preventing further cracking. Fast, concealed, and cost-effective.",
      icon: Wrench
    },
    {
      title: "Stone Crack Stitching",
      desc: "Specialist repair of individual cracked stones using stainless steel pins and colour-matched resin or lime mortar. Restores structural integrity without the need for full stone replacement.",
      icon: LinkIcon
    },
    {
      title: "Rope Access Stonework",
      desc: "IRATA-qualified technicians perform structural repairs via abseil. Eliminates scaffolding costs, minimizes disruption to residents and public, and allows for rapid deployment.",
      icon: Shield
    },
    {
      title: "Structural Masonry Repair",
      desc: "Comprehensive solutions for failing masonry, including lintel repair, arch stabilization, and lateral restraints. We assess the root cause and provide an engineered fix.",
      icon: Building2
    },
    {
      title: "Stone Pinning",
      desc: "Securing loose cornices, corbels, or facing stones back to the structural substrate using specialized mechanical or resin anchors.",
      icon: HardHat
    },
    {
      title: "Lime Pointing & Consolidation",
      desc: "Raking out and repointing using traditional lime mortars. Essential for allowing stone buildings to breathe and preventing moisture-induced structural damage.",
      icon: CheckCircle2
    }
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-8 max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-slate-900">Our Services</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            From targeted crack stitching to comprehensive rope access repairs, we provide engineered solutions that save your stonework and your budget.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <Card key={i} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="h-14 w-14 bg-orange-50 rounded-xl flex items-center justify-center mb-4">
                  <s.icon className="h-7 w-7 text-orange-600" />
                </div>
                <CardTitle className="text-2xl">{s.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-slate-600 leading-relaxed">
                  {s.desc}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 bg-slate-50 border border-slate-200 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Not Sure What You Need?</h2>
          <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
            Our experts can assess your property's cracking or stone damage and recommend the most cost-effective structural repair.
          </p>
          <Link href="/contact" className={buttonVariants({ size: "lg", className: "bg-orange-600 hover:bg-orange-700 text-white" })}>
            Book a Free Survey
          </Link>
        </div>
      </div>
    </div>
  );
}
