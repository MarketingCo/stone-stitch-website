import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Shield, Wrench, HardHat, PoundSterling, Clock } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1590496794008-383c8070b257?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-900/50" />
        <div className="container mx-auto px-4 sm:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full text-sm font-medium border border-orange-500/20">
              <Shield className="h-4 w-4" />
              <span>Edinburgh & Central Scotland's Specialists</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Structural Stone Repairs & <span className="text-orange-500">Helibar Reinforcement</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
              Don't replace failing stone. Reinforce it. We provide permanent, cost-effective structural repairs using Helibar technology and advanced rope access—no scaffolding required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contact" className={buttonVariants({ size: "lg", className: "bg-orange-600 hover:bg-orange-700 text-white text-base" })}>
                Get a Free Quote
              </Link>
              <Link href="/services" className={buttonVariants({ variant: "outline", size: "lg", className: "text-white border-white hover:bg-white/10 hover:text-white text-base bg-transparent" })}>
                View Our Services
              </Link>
            </div>
            <div className="flex items-center space-x-6 pt-6 text-sm text-slate-400">
              <div className="flex items-center">
                <CheckCircle2 className="h-4 w-4 mr-2 text-orange-500" /> Fully Insured
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="h-4 w-4 mr-2 text-orange-500" /> Free Surveys
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="h-4 w-4 mr-2 text-orange-500" /> 10-Year Guarantee
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-slate-900">Why Choose Helibar Repair Over Full Replacement?</h2>
            <p className="text-slate-600 text-lg">
              Traditional masonry replacement is expensive, disruptive, and time-consuming. Our engineered Helibar stitching system saves structural integrity without the massive cost.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-slate-100 shadow-sm">
              <CardHeader>
                <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <PoundSterling className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Fraction of the Cost</CardTitle>
                <CardDescription className="text-base mt-2">
                  Up to 70% cheaper than full stone replacement. We repair the structural integrity of your existing masonry, saving you thousands.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-slate-100 shadow-sm">
              <CardHeader>
                <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Minimal Disruption</CardTitle>
                <CardDescription className="text-base mt-2">
                  Completed in days, not weeks. Our rope access team can reach difficult areas without expensive, intrusive scaffolding blocking your property.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-slate-100 shadow-sm">
              <CardHeader>
                <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Permanent & Invisible</CardTitle>
                <CardDescription className="text-base mt-2">
                  High-tensile stainless steel bars are grouted into the mortar joints. The repair is structural, permanent, and visually concealed.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight mb-4 text-slate-900">Our Core Services</h2>
              <p className="text-slate-600 text-lg">Specialist masonry repair solutions tailored for Scotland's traditional and modern buildings.</p>
            </div>
            <Link href="/services" className={buttonVariants({ variant: "outline", className: "mt-6 md:mt-0" })}>
              View All Services
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Helibar Repair",
                desc: "High-tensile steel reinforcement for cracked or failing stonework.",
                icon: Wrench
              },
              {
                title: "Crack Stitching",
                desc: "Reconnecting cracked masonry to restore structural integrity.",
                icon: HardHat
              },
              {
                title: "Rope Access",
                desc: "Abseil solutions for high-level repairs without scaffolding costs.",
                icon: Shield
              },
              {
                title: "Stone Pinning",
                desc: "Securing loose masonry and architectural features safely.",
                icon: CheckCircle2
              }
            ].map((s, i) => (
              <Card key={i} className="group hover:border-orange-500 transition-colors">
                <CardHeader>
                  <s.icon className="h-8 w-8 text-slate-400 group-hover:text-orange-500 transition-colors mb-3" />
                  <CardTitle className="text-lg">{s.title}</CardTitle>
                  <CardDescription>{s.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Structural Repair Assessment?</h2>
          <p className="text-slate-300 text-lg mb-8">
            Send us photos of your cracked or failing stonework. Our experts will review them and provide a free, no-obligation estimate.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className={buttonVariants({ size: "lg", className: "bg-orange-600 hover:bg-orange-700 text-white" })}>
              Contact Us Today
            </Link>
            <Link href="tel:01315550000" className={buttonVariants({ size: "lg", variant: "outline", className: "bg-transparent text-white border-white hover:bg-white/10 hover:text-white" })}>
              Call 0131 555 0000
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
