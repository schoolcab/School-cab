import { Newspaper, ArrowLeft, Bell, TrendingUp, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const News = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-16">
        {/* Back Navigation */}
        <Link
          to="/"
          className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center bg-primary/10 p-4 rounded-2xl mb-6">
            <Newspaper className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            News & Updates
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay informed with the latest updates, announcements, and stories
            from SchoolCab.
          </p>
        </div>

        {/* Coming Soon Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Placeholder Cards */}
            {[
              {
                icon: Bell,
                title: "Announcements",
                description:
                  "Important updates and announcements about our services.",
              },
              {
                icon: TrendingUp,
                title: "Growth Stories",
                description:
                  "How SchoolCab is expanding to serve more families.",
              },
              {
                icon: Calendar,
                title: "Events",
                description:
                  "Upcoming events, partnerships, and community initiatives.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-soft border border-border relative overflow-hidden group hover:shadow-medium transition-shadow"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="bg-primary/10 p-3 rounded-xl w-fit mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {item.description}
                  </p>
                  <div className="h-24 rounded-xl bg-muted/50 flex items-center justify-center border border-dashed border-border">
                    <span className="text-muted-foreground text-sm">
                      Coming Soon
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Coming Soon Banner */}
          <div className="bg-gradient-primary rounded-2xl p-10 text-center text-primary-foreground">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              We're Working on Something Exciting
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-6">
              Our news section is under construction. Soon you'll find the
              latest updates, safety tips, parent testimonials, and much more
              right here.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white/20 hover:bg-white/30 transition-colors px-6 py-3 rounded-xl font-medium"
            >
              Get Notified When We Launch
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default News;
