import { Shield, Clock, HardHat, Award } from "lucide-react";

export default function About() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-slate-900">About Stone-Stitch</h1>
          <p className="text-lg text-slate-600">
            We are Edinburgh's dedicated specialists in structural masonry repair, helibar reinforcement, and rope access stonework.
          </p>
        </div>

        <div className="prose prose-lg prose-slate mx-auto mb-16">
          <p>
            Traditional stone replacement is often unnecessary, massively expensive, and incredibly disruptive. At Stone-Stitch, we believe in a smarter approach to masonry repair. By utilizing engineered Helibar systems and advanced crack stitching techniques, we can restore the structural integrity of your building at a fraction of the cost of full replacement.
          </p>
          <p>
            Combined with our IRATA-certified rope access capabilities, we can reach high-level and difficult-to-access areas without the need for unsightly, expensive, and disruptive scaffolding. This allows us to rapidly deploy, fix the problem, and leave your property safe and secure.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <Award className="h-10 w-10 text-orange-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Expert Knowledge</h3>
            <p className="text-slate-600">Our team understands Scottish masonry deeply, ensuring repairs are structurally sound and sympathetic to the building.</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <Shield className="h-10 w-10 text-orange-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Fully Insured</h3>
            <p className="text-slate-600">We carry comprehensive public liability and employer's liability insurance for all our structural and rope access work.</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <Clock className="h-10 w-10 text-orange-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Rapid Response</h3>
            <p className="text-slate-600">Without the need for scaffolding permits and erection, we can often mobilize and complete the repair in days, not weeks.</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <HardHat className="h-10 w-10 text-orange-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Safety First</h3>
            <p className="text-slate-600">All rope access work is carried out by IRATA-qualified technicians adhering to the strictest safety standards.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
