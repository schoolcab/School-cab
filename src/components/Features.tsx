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

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary p-8 rounded-2xl shadow-strong">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Ready to Experience Safe School Transport?
            </h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied parents who trust us with their children's daily commute.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-background text-primary px-8 py-3 rounded-lg font-semibold hover:bg-background/90 transition-colors">
                Start Your Free Trial
              </button>
              <button className="border-2 border-background text-background px-8 py-3 rounded-lg font-semibold hover:bg-background hover:text-primary transition-colors">
                View Pricing Plans
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;