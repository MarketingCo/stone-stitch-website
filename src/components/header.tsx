import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { HardHat, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "./ui/sheet";

export function Header() {
  const routes = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <HardHat className="h-6 w-6 text-orange-500" />
          <span className="text-xl font-bold tracking-tight">Stone-Stitch</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {routes.map((route) => (
            <Link key={route.href} href={route.href} className="transition-colors hover:text-orange-500">
              {route.label}
            </Link>
          ))}
        </nav>
        
        <div className="hidden md:flex">
          <Link href="/contact" className={buttonVariants({ className: "bg-orange-600 hover:bg-orange-700 text-white" })}>
            Get a Free Quote
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger render={
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            } />
            <SheetContent side="right">
              <SheetTitle>Navigation Menu</SheetTitle>
              <div className="flex flex-col space-y-4 mt-6">
                {routes.map((route) => (
                  <Link key={route.href} href={route.href} className="text-lg font-medium hover:text-orange-500">
                    {route.label}
                  </Link>
                ))}
                <div className="pt-4 border-t">
                  <Link href="/contact" className={buttonVariants({ className: "w-full bg-orange-600 hover:bg-orange-700 text-white" })}>
                    Get a Free Quote
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
