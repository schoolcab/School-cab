import { Car, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/3b19e97a-ab06-4f26-97ca-4ce58a6e0592.png" 
            alt="School Cab Logo" 
            className="h-12 w-12 object-contain"
          />
          <div>
            <h1 className="text-xl font-bold text-foreground">SchoolCab</h1>
            <p className="text-xs text-muted-foreground">Safe School Transport</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#home" className="text-foreground hover:text-primary transition-colors">
            Home
          </a>
          <a href="#services" className="text-foreground hover:text-primary transition-colors">
            Services
          </a>
          <a href="#features" className="text-foreground hover:text-primary transition-colors">
            Features
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">
            Contact
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-primary" />
              <span className="text-foreground">+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-primary" />
              <span className="text-foreground">info@schoolcab.com</span>
            </div>
          </div>
          <Button variant="default" className="bg-gradient-primary hover:opacity-90 transition-opacity">
            Book Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;