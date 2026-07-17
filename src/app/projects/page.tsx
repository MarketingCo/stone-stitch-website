import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Stone-Stitch",
  alternates: {
    canonical: "https://www.stone-stitch.co.uk/projects",
  },
};

export default function Projects() {
  const projects = [
    {
      title: "Helibar Crack Stitching",
      location: "New Town, Edinburgh",
      img: "https://images.unsplash.com/photo-1590496794008-383c8070b257?auto=format&fit=crop&q=80&w=800",
      desc: "Extensive cracking repaired using Helibar technology, completely concealed within the mortar beds."
    },
    {
      title: "Commercial Façade Restoration",
      category: "Stone Stitching",
      location: "Glasgow City Centre",
      img: "https://images.unsplash.com/photo-1590496794008-383c8070b257?auto=format&fit=crop&q=80&w=800",
      desc: "Comprehensive crack stitching and stone pinning on a Victorian commercial property."
    },
    {
      title: "High-Level Chimney Repair",
      category: "Rope Access",
      location: "Stockbridge, Edinburgh",
      img: "https://images.unsplash.com/photo-1590496794008-383c8070b257?auto=format&fit=crop&q=80&w=800",
      desc: "Scaffold-free removal of loose masonry and repointing of a dangerous chimney stack."
    },
    {
      title: "Archway Stabilization",
      category: "Structural Support",
      location: "Stirling",
      img: "https://images.unsplash.com/photo-1590496794008-383c8070b257?auto=format&fit=crop&q=80&w=800",
      desc: "Failing archway stabilized using internal stainless steel ties, preserving the historical aesthetic."
    }
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-slate-900">Our Projects</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            See how we've saved properties across Scotland through engineered structural repairs and rope access techniques.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <Card key={i} className="overflow-hidden border-slate-200">
              <div className="relative h-64 md:h-80 w-full bg-slate-200">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="text-sm font-semibold text-orange-600 mb-2">{p.location}</div>
                <h3 className="text-2xl font-bold mb-3">{p.title}</h3>
                <p className="text-slate-600">{p.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
