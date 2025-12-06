import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
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
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-primary" />
              <span className="text-foreground">+91 9560029986</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-primary" />
              <span className="text-foreground"> admin@schoolcab.in </span>
            </div>
          </div>
          <Button
            variant="default"
            className="bg-gradient-primary hover:opacity-90 transition-opacity"
          >
            <Link
              to="https://docs.google.com/forms/d/e/1FAIpQLSfsAskXtQ9DARPUE1quLk2sUzhnRTmiyl0CsPyEyyQXFsu17g/viewform?fbclid=PAZnRzaAOLhG5leHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAafIiqYI3zb74N7Yrra9s1qFC-vHb9YPgJ32BEuj3T4CzWOyJxH8yWsx-IRXhA_aem_g26j--hFqTw63B34zB5lXA&utm_source=ig&utm_medium=social&utm_content=link_in_bio"
              target="_blank"
            >
              Book Now
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
