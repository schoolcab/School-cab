import { useState } from "react";
import { MapPin, Clock, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-taxi.jpg";
import BookingModal from "./BookingModal";

const Hero = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <section id="home" className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,hsl(var(--taxi-yellow))_0%,transparent_50%)] opacity-5"></div>
      
      <div className="container mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center min-h-screen">
        {/* Content */}
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Shield className="h-4 w-4 mr-2" />
              Safe & Reliable School Transport
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Safe School Rides
              <span className="block text-primary">Every Day</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg">
              Professional school cab service ensuring your child's safe journey to and from school. 
              Trusted by thousands of parents across the city.
            </p>
          </div>
          
          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-3 bg-card p-4 rounded-lg shadow-soft">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">On Time</p>
                <p className="text-sm text-muted-foreground">Always punctual</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 bg-card p-4 rounded-lg shadow-soft">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Safe</p>
                <p className="text-sm text-muted-foreground">Verified drivers</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 bg-card p-4 rounded-lg shadow-soft">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Star className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Rated</p>
                <p className="text-sm text-muted-foreground">4.9/5 stars</p>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 relative z-10">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8 py-6 relative z-10 cursor-pointer"
              onClick={() => setIsBookingOpen(true)}
            >
              <MapPin className="h-5 w-5 mr-2" />
              Book Your Ride Now
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6 relative z-10 cursor-pointer"
            >
              Download App
            </Button>
          </div>
          
          {/* Stats */}
          <div className="flex items-center space-x-8 pt-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">5000+</p>
              <p className="text-sm text-muted-foreground">Happy Students</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">200+</p>
              <p className="text-sm text-muted-foreground">Verified Drivers</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">50+</p>
              <p className="text-sm text-muted-foreground">Partner Schools</p>
            </div>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="relative animate-slide-up">
          <div className="relative">
            <img 
              src={heroImage} 
              alt="School Cab Service" 
              className="w-full h-auto rounded-2xl shadow-strong"
            />
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-4 rounded-xl shadow-medium animate-bounce-soft">
              <div className="text-center">
                <p className="text-lg font-bold">Starts from</p>
                <p className="text-2xl font-bold">₹299</p>
                <p className="text-sm">Per Month</p>
              </div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-medium animate-float">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-foreground">Live Tracking</span>
            </div>
          </div>
        </div>
      </div>
      
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </section>
  );
};

export default Hero;