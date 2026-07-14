import Link from "next/link";
import { HardHat, Phone, Mail, MapPin } from "lucide-react";
import { areas } from "@/lib/areas-data";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="container mx-auto px-4 sm:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <HardHat className="h-6 w-6 text-orange-500" />
              <span className="text-xl font-bold text-white tracking-tight">Stone-Stitch</span>
            </div>
            <p className="text-sm">
              Structural Stone Repairs | Helibar Reinforcement | Rope Access Specialists. 
              Serving Edinburgh & Central Scotland with high-quality, cost-effective masonry solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-orange-500 transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-orange-500 transition-colors">Services</Link></li>
              <li><Link href="/projects" className="hover:text-orange-500 transition-colors">Projects</Link></li>
              <li><Link href="/about" className="hover:text-orange-500 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-orange-500 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Helibar Repair</li>
              <li>Stone Crack Stitching</li>
              <li>Rope Access Stonework</li>
              <li>Structural Masonry Repair</li>
              <li>Stone Pinning & Repointing</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-500 shrink-0" />
                <span>Edinburgh & Central Scotland</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-500 shrink-0" />
                <span>0131 555 0000</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-500 shrink-0" />
                <span>info@stone-stitch.co.uk</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Areas We Cover */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <h3 className="text-white font-semibold mb-4 text-xs tracking-wider uppercase">Areas We Cover</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-xs">
            {Object.values(areas).map((area) => (
              <Link key={area.slug} href={`/areas/${area.slug}`} className="hover:text-orange-500 transition-colors">
                {area.name}
              </Link>
            ))}
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} Stone-Stitch. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
