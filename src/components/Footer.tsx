import { Car, Clock, Instagram, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-text-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-primary p-2 rounded-lg">
                <Car className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold">SchoolCab</h1>
                <p className="text-xs text-gray-400">Safe School Transport</p>
              </div>
            </div>
            <p className="text-gray-400">
              Providing safe, reliable, and affordable school transportation
              services. Trusted by thousands of parents across the city.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/schoolcab_official?igsh=OXE0NGU3eDAweHc0 "
                className="bg-primary/10 p-2 rounded-lg hover:bg-primary/20 transition-colors"
              >
                <Instagram className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-3">
              <a
                href="#home"
                className="block text-gray-400 hover:text-primary transition-colors"
              >
                Home
              </a>
              <a
                href="#services"
                className="block text-gray-400 hover:text-primary transition-colors"
              >
                Services
              </a>
              <a
                href="#features"
                className="block text-gray-400 hover:text-primary transition-colors"
              >
                Features
              </a>
              <a
                href="#contact"
                className="block text-gray-400 hover:text-primary transition-colors"
              >
                Contact
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-primary transition-colors"
              >
                Terms of Service
              </a>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Services</h3>
            <nav className="space-y-3">
              <a
                href="#"
                className="block text-gray-400 hover:text-primary transition-colors"
              >
                Monthly Subscription
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-primary transition-colors"
              >
                Per Trip Booking
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-primary transition-colors"
              >
                Group Bookings
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-primary transition-colors"
              >
                Emergency Rides
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-primary transition-colors"
              >
                Parent Dashboard
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-primary transition-colors"
              >
                Driver App
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="text-white">+91 9560029986</p>
                  <p className="text-gray-400 text-sm">24/7 Support</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="text-white"> admin@schoolcab.in </p>
                  <p className="text-gray-400 text-sm">General Inquiries</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="text-white">A39, Nirmal Vihar Najafgarh</p>
                  <p className="text-gray-400 text-sm">
                    New Delhi, India 110043
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="text-white">6:00 AM - 10:00 PM</p>
                  <p className="text-gray-400 text-sm">Service Hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              © 2024 SchoolCab. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a
                href="/privacy-policy"
                className="text-gray-400 hover:text-primary text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-and-conditions"
                className="text-gray-400 hover:text-primary text-sm transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="/account-deletion"
                className="text-gray-400 hover:text-primary text-sm transition-colors"
              >
                Account Deletion
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
