"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <div className="py-16 md:py-24 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-slate-900">Contact Us</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Get in touch for a free survey and quote. We cover Edinburgh and Central Scotland.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-8 mb-12">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Phone</h3>
                  <p className="text-slate-600">0131 555 0000</p>
                  <p className="text-sm text-slate-500 mt-1">Mon-Fri, 8am - 6pm</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email</h3>
                  <p className="text-slate-600">info@stone-stitch.co.uk</p>
                  <p className="text-sm text-slate-500 mt-1">We aim to reply within 24 hours.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Service Area</h3>
                  <p className="text-slate-600">Edinburgh, Lothians, Fife, and Central Scotland.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-900 text-white p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">Send Us Photos</h3>
              <p className="text-slate-300 mb-6">
                For a faster estimate, you can email us photos of the cracking or stone damage directly.
              </p>
              <Button asChild variant="outline" className="text-slate-900 border-white bg-white hover:bg-slate-100">
                <a href="mailto:info@stone-stitch.co.uk">Email Photos</a>
              </Button>
            </div>
          </div>

          <Card className="border-0 shadow-xl shadow-slate-200/50">
            <CardHeader>
              <CardTitle className="text-2xl">Request a Quote</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you shortly.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" required placeholder="John Doe" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" required placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="07123 456789" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Project Details</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    required 
                    placeholder="Please describe the cracking or masonry issue..."
                    className="min-h-[150px]"
                  />
                </div>
                
                {status === "success" && (
                  <div className="p-4 bg-green-50 text-green-700 rounded-lg text-sm">
                    Message sent successfully! We'll be in touch soon.
                  </div>
                )}
                {status === "error" && (
                  <div className="p-4 bg-red-50 text-red-700 rounded-lg text-sm">
                    Failed to send message. Please try emailing us directly.
                  </div>
                )}
                
                <Button 
                  type="submit" 
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
