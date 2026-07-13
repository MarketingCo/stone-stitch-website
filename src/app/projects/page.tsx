import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Helibar Crack Stitching",
      location: "New Town, Edinburgh",
      img: "https://images.unsplash.com/photo-1541888052445-fa0bc3338bf3?auto=format&fit=crop&q=80&w=800",
      desc: "Extensive cracking repaired using Helibar technology, completely concealed within the mortar beds."
    },
    {
      title: "Rope Access Lintel Repair",
      location: "Leith, Edinburgh",
      img: "https://images.unsplash.com/photo-1504307651254-35680f356fce?auto=format&fit=crop&q=80&w=800",
      desc: "Failed stone lintel reinforced via rope access, saving the client £4,000 in scaffolding costs."
    },
    {
      title: "Stone Pinning & Consolidation",
      location: "Stirling",
      img: "https://images.unsplash.com/photo-1498677231914-50deb6ba4217?auto=format&fit=crop&q=80&w=800",
      desc: "Loose high-level masonry pinned securely back to the substrate to prevent falling hazards."
    },
    {
      title: "Structural Arch Tie",
      location: "Glasgow",
      img: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=800",
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
