import { notFound } from "next/navigation";
import { areas } from "@/lib/areas-data";
import { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { CheckCircle2, Shield } from "lucide-react";

export async function generateStaticParams() {
  return Object.keys(areas).map((slug) => ({
    slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = areas[slug];
  if (!area) return {};

  return {
    title: area.title,
    description: area.description,
    openGraph: {
      title: area.title,
      description: area.description,
      url: `https://stone-stitch.co.uk/areas/${slug}`,
    },
  };
}

export default async function AreaPage({ params }: PageProps) {
  const { slug } = await params;
  const area = areas[slug];

  if (!area) {
    notFound();
  }

  // Schema generation
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Stone-Stitch ${area.name}`,
    "image": "https://images.unsplash.com/photo-1590496794008-383c8070b257?auto=format&fit=crop&q=80&w=2000",
    "telephone": "01315550000",
    "email": "info@stone-stitch.co.uk",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": area.name,
      "addressRegion": "Scotland",
      "postalCode": area.postalCode,
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": area.lat,
      "longitude": area.lng
    },
    "url": `https://stone-stitch.co.uk/areas/${slug}`,
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    }
  };

    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Structural Masonry Repair Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Helibar Repair & Structural Stone Stitching",
            "serviceType": "Structural Masonry Repair",
            "description": area.description
          }
        }
      ]
    }
  };

  return (
    <>
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-slate-900 py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 opacity-15 bg-[url('https://images.unsplash.com/photo-1590496794008-383c8070b257?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-900/40" />
          <div className="container mx-auto px-4 sm:px-8 relative z-10">
            <div className="max-w-3xl space-y-5">
              <div className="inline-flex items-center space-x-2 bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full text-sm font-medium border border-orange-500/20">
                <Shield className="h-4 w-4" />
                <span>Specialist Repairs in {area.name}</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {area.heading}
              </h1>
              <p className="text-lg text-slate-300 max-w-2xl font-light">
                {area.subheading}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/contact" className={buttonVariants({ size: "lg", className: "bg-orange-600 hover:bg-orange-700 text-white text-base" })}>
                  Book a Free Survey in {area.name}
                </Link>
                <Link href="tel:01315550000" className={buttonVariants({ variant: "outline", size: "lg", className: "text-white border-white hover:bg-white/10 hover:text-white text-base bg-transparent" })}>
                  Call 0131 555 0000
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Local Context Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-8 max-w-5xl">
            <div className="grid md:grid-cols-3 gap-12 items-start">
              <div className="md:col-span-2 space-y-6">
                <h2 className="text-3xl font-bold text-slate-900">Expert Stonework Repair Tailored for {area.name}</h2>
                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                  {area.intro}
                </p>
                <p className="text-slate-600 leading-relaxed text-base">
                  {area.context}
                </p>
                
                <div className="bg-orange-50 border border-orange-100 rounded-xl p-6 mt-8">
                  <h4 className="font-bold text-orange-900 mb-2">Our Transparent Guarantee:</h4>
                  <p className="text-sm text-orange-800 leading-relaxed">
                    We believe in honest, direct communication. We will never recommend unnecessary stone replacement when a permanent, engineered Helibar stitching repair is safer, faster, and more affordable. All our structural repairs include a full 10-year guarantee.
                  </p>
                </div>
              </div>

              {/* Local benefits box */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 space-y-6">
                <h3 className="font-bold text-xl text-slate-900 border-b pb-4">Key Benefits for Homeowners</h3>
                <ul className="space-y-4">
                  {area.features.map((feat, i) => (
                    <li key={i} className="flex items-start space-x-3 text-sm text-slate-700 leading-snug">
                      <CheckCircle2 className="h-5 w-5 text-orange-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <Link href="/contact" className={buttonVariants({ className: "w-full bg-slate-950 hover:bg-slate-900 text-white" })}>
                    Request Assessment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic CTA */}
        <section className="py-16 bg-slate-950 text-white text-center">
          <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Protect the Integrity of Your {area.name} Property</h2>
            <p className="text-slate-400 text-base mb-8 max-w-xl mx-auto">
              Our IRATA abseil team is fully equipped to survey and repair traditional stonework across {area.name} and the surrounding Central Scotland area.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className={buttonVariants({ className: "bg-orange-600 hover:bg-orange-700 text-white" })}>
                Contact Our Team
              </Link>
              <Link href="tel:01315550000" className={buttonVariants({ variant: "outline", className: "bg-transparent text-white border-white hover:bg-white/10 hover:text-white" })}>
                Call 0131 555 0000
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
