import {
  Shield,
  MapPin,
  Clock,
  CreditCard,
  Phone,
  Star,
  Users,
  Map,
  Bell
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "100% Safe",
      description: "Background verified drivers with clean records. GPS tracking for complete peace of mind.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Clock,
      title: "Always On Time",
      description: "Punctual pickups and drops. Real-time updates to keep you informed about delays.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: MapPin,
      title: "Door-to-Door Service",
      description: "Convenient pickup from your home and safe drop at school entrance.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: CreditCard,
      title: "Easy Payments",
      description: "Multiple payment options including monthly subscriptions and per-ride payments.",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Phone,
      title: "24/7 Support",
      description: "Round-the-clock customer support for any queries or emergency situations.",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: Star,
      title: "Top Rated",
      description: "Consistently rated 4.9/5 stars by parents and students for our reliable service.",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: Users,
      title: "Parent Community",
      description: "Connect with other parents and stay updated about your child's commute.",
      color: "bg-pink-100 text-pink-600"
    },
    {
      icon: Map,
      title: "Live Tracking",
      description: "Real-time GPS tracking so you always know where your child is during the commute.",
      color: "bg-teal-100 text-teal-600"
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Instant alerts for pickup, drop-off, delays, and important announcements.",
      color: "bg-indigo-100 text-indigo-600"
    }
  ];

  return (
    <section id="features" className="py-20 bg-soft-gray">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="h-4 w-4 mr-2" />
            Why Choose SchoolCab
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Features That Make Us
            <span className="block text-primary">The Best Choice</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We've designed every feature with your child's safety and your peace of mind in focus.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex p-3 rounded-lg ${feature.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* QR Code Download Section - Uber Style */}
        <div className="mt-20 bg-card rounded-2xl shadow-medium p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-10 text-center md:text-left">
            It's easier in the apps
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Parent App QR */}
            <div className="flex items-center gap-6 group cursor-pointer hover:bg-muted/50 p-4 rounded-xl transition-colors">
              <div className="flex-shrink-0 w-28 h-28 bg-white rounded-xl p-2 shadow-soft flex items-center justify-center border border-border">
                {/* QR Code Placeholder - Replace with actual QR code image */}
                <img
                  src="/qr-parent-app.png"
                  alt="Scan to download Parent App"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    // Fallback to a placeholder if image not found
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = '<div class="w-full h-full bg-muted rounded flex items-center justify-center text-xs text-muted-foreground text-center p-2">Add QR Code</div>';
                  }}
                />
              </div>
              <div className="flex-grow">
                <h4 className="text-lg font-semibold text-foreground mb-1">Download the Parent app</h4>
                <p className="text-sm text-muted-foreground">Scan to download</p>
              </div>
              <div className="flex-shrink-0 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* Driver App QR */}
            <div className="flex items-center gap-6 group cursor-pointer hover:bg-muted/50 p-4 rounded-xl transition-colors">
              <div className="flex-shrink-0 w-28 h-28 bg-white rounded-xl p-2 shadow-soft flex items-center justify-center border border-border">
                {/* QR Code Placeholder - Replace with actual QR code image */}
                <img
                  src="/qr-driver-app.png"
                  alt="Scan to download Driver App"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    // Fallback to a placeholder if image not found
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = '<div class="w-full h-full bg-muted rounded flex items-center justify-center text-xs text-muted-foreground text-center p-2">Add QR Code</div>';
                  }}
                />
              </div>
              <div className="flex-grow">
                <h4 className="text-lg font-semibold text-foreground mb-1">Download the Driver app</h4>
                <p className="text-sm text-muted-foreground">Scan to download</p>
              </div>
              <div className="flex-shrink-0 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;