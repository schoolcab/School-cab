import { Calendar, Users, Route, Smartphone } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Calendar,
      title: "Monthly Subscriptions",
      description: "Regular monthly plans for daily school commute with discounted rates.",
      price: "₹299/month",
      features: ["Daily pickup & drop", "GPS tracking", "Dedicated driver", "Emergency support"],
      popular: true
    },
    {
      icon: Route,
      title: "Per Trip Booking",
      description: "Book individual rides for occasional school trips or events.",
      price: "₹25/trip",
      features: ["Instant booking", "Flexible timing", "Multiple payment options", "Real-time tracking"],
      popular: false
    },
    {
      icon: Users,
      title: "Group Bookings",
      description: "Special rates for multiple students from the same area or building.",
      price: "₹199/month",
      features: ["Shared rides", "Cost effective", "Same route optimization", "Bulk discounts"],
      popular: false
    },
    {
      icon: Smartphone,
      title: "App-Based Service",
      description: "Complete cab management through our easy-to-use mobile application.",
      price: "Free App",
      features: ["Live tracking", "Driver details", "Payment history", "Support chat"],
      popular: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Route className="h-4 w-4 mr-2" />
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Choose Your Perfect
            <span className="block text-primary">Transport Plan</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Flexible plans designed to meet every family's needs and budget requirements.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className={`relative bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 ${
                  service.popular ? 'ring-2 ring-primary ring-offset-2' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-6 bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="bg-primary/10 p-4 rounded-xl inline-flex mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {service.description}
                  </p>
                  <div className="text-2xl font-bold text-primary">
                    {service.price}
                  </div>
                </div>

                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <button 
                    className={`w-full py-3 rounded-lg font-medium transition-colors ${
                      service.popular 
                        ? 'bg-gradient-primary text-primary-foreground hover:opacity-90' 
                        : 'bg-muted text-foreground hover:bg-muted/80'
                    }`}
                  >
                    {service.title === "App-Based Service" ? "Download App" : "Choose Plan"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-soft-gray p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Need a Custom Plan?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We understand every family has unique requirements. Contact us to create a personalized transport solution that fits your schedule and budget perfectly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Contact Sales Team
              </button>
              <button className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;