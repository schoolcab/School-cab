import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Mail, Menu, Phone, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeSheet = () => setIsOpen(false);

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
          <img
            src="/lovable-uploads/3b19e97a-ab06-4f26-97ca-4ce58a6e0592.png"
            alt="School Cab Logo"
            className="h-12 w-12 object-contain"
          />
          <div>
            <h1 className="text-xl font-bold text-foreground">SchoolCab</h1>
            <p className="text-xs text-muted-foreground">
              Safe School Transport
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className="text-foreground hover:text-primary transition-colors"
          >
            Home
          </Link>
          <a
            href="#features"
            className="text-foreground hover:text-primary transition-colors"
          >
            Features
          </a>
          <Link
            to="/contact"
            className="text-foreground hover:text-primary transition-colors"
          >
            Contact
          </Link>
          <Link
            to="/news"
            className="text-foreground hover:text-primary transition-colors"
          >
            News
          </Link>
        </nav>

        {/* Desktop Contact Info & CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="hidden lg:flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-primary" />
              <span className="text-foreground">+91 9560029986</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-primary" />
              <span className="text-foreground">admin@schoolcab.in</span>
            </div>
          </div>
          <Button
            variant="default"
            className="bg-gradient-primary hover:opacity-90 transition-opacity"
            asChild
          >
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfsAskXtQ9DARPUE1quLk2sUzhnRTmiyl0CsPyEyyQXFsu17g/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Now
            </a>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
              <SheetHeader className="text-left">
                <SheetTitle className="flex items-center space-x-3">
                  <img
                    src="/lovable-uploads/3b19e97a-ab06-4f26-97ca-4ce58a6e0592.png"
                    alt="School Cab Logo"
                    className="h-10 w-10 object-contain"
                  />
                  <span>SchoolCab</span>
                </SheetTitle>
              </SheetHeader>

              {/* Mobile Navigation Links */}
              <nav className="flex flex-col space-y-4 mt-8">
                <Link
                  to="/"
                  onClick={closeSheet}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2 border-b border-border"
                >
                  Home
                </Link>
                <a
                  href="#features"
                  onClick={closeSheet}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2 border-b border-border"
                >
                  Features
                </a>
                <Link
                  to="/contact"
                  onClick={closeSheet}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2 border-b border-border"
                >
                  Contact
                </Link>
                <Link
                  to="/news"
                  onClick={closeSheet}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2 border-b border-border"
                >
                  News
                </Link>
                <Link
                  to="/downloads"
                  onClick={closeSheet}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2 border-b border-border"
                >
                  Download App
                </Link>
              </nav>

              {/* Mobile Contact Info */}
              <div className="mt-8 space-y-4">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                  Contact Us
                </h3>
                <div className="space-y-3">
                  <a
                    href="tel:+919560029986"
                    className="flex items-center space-x-3 text-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="h-5 w-5 text-primary" />
                    <span>+91 9560029986</span>
                  </a>
                  <a
                    href="mailto:admin@schoolcab.in"
                    className="flex items-center space-x-3 text-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="h-5 w-5 text-primary" />
                    <span>admin@schoolcab.in</span>
                  </a>
                </div>
              </div>

              {/* Mobile CTA Button */}
              <div className="mt-8">
                <Button
                  variant="default"
                  className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
                  asChild
                  onClick={closeSheet}
                >
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfsAskXtQ9DARPUE1quLk2sUzhnRTmiyl0CsPyEyyQXFsu17g/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Now
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
