import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Smartphone, Download } from "lucide-react";

const Downloads = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="min-h-[80vh] bg-gradient-hero relative overflow-hidden flex items-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,hsl(var(--taxi-yellow))_0%,transparent_50%)] opacity-5"></div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-lg mx-auto text-center space-y-8">
            {/* Header */}
            <div className="space-y-4 animate-fade-in">
              <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Download className="h-4 w-4 mr-2" />
                Download SchoolCab App
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Get the App
                <span className="block text-primary">On Your Phone</span>
              </h1>

              <p className="text-lg text-muted-foreground">
                Download the SchoolCab app for easy booking and real-time tracking of your child's school transport.
              </p>
            </div>

            {/* App Store Buttons */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              {/* Play Store Button */}
              <div className="text-center">
                <a
                  href="https://play.google.com/store/apps/details?id=com.rahulatanny.mobileapp&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="display: block; text-decoration: none;"
                  style={{ display: 'block', textDecoration: 'none' }}
                >
                  <img
                    src="/google-play-badge.svg"
                    alt="Get it on Google Play"
                    style={{ height: '60px', width: 'auto', margin: '0 auto', cursor: 'pointer' }}
                  />
                </a>
              </div>

              {/* App Store Button */}
              <div className="text-center">
                <a
                  href="https://apps.apple.com/in/app/school-cab/id6751194844"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="display: block; text-decoration: none;"
                  style={{ display: 'block', textDecoration: 'none' }}
                >
                  <img
                    src="/app-store-badge.svg"
                    alt="Download on the App Store"
                    style={{ height: '60px', width: 'auto', margin: '0 auto', cursor: 'pointer' }}
                  />
                </a>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-primary/20 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center justify-center space-x-2 text-primary">
                <Smartphone className="h-5 w-5" />
                <span className="text-sm font-medium">Available for iOS and Android</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Downloads;