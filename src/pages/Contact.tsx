import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";
import {
    Mail,
    MapPin,
    Phone,
    Send,
    Clock,
    CheckCircle,
} from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { toast } = useToast();

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (
            !formData.fullName ||
            !formData.email ||
            !formData.phoneNumber ||
            !formData.message
        ) {
            toast({
                title: "Missing Information",
                description: "Please fill in all required fields.",
                variant: "destructive",
            });
            return;
        }

        setIsSubmitting(true);

        try {
            const { error } = await supabase
                .from("website_contact_form_response")
                .insert({
                    full_name: formData.fullName,
                    email: formData.email,
                    phone_number: formData.phoneNumber,
                    message: formData.message,
                });

            if (error) throw error;

            setIsSubmitted(true);
            toast({
                title: "Message Sent!",
                description: "Thank you for contacting us. We'll get back to you soon.",
            });

            // Reset form after submission
            setFormData({
                fullName: "",
                email: "",
                phoneNumber: "",
                message: "",
            });
        } catch (error) {
            console.error("Error submitting contact form:", error);
            toast({
                title: "Submission Failed",
                description: "Something went wrong. Please try again later.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="container mx-auto px-4 py-16">
                {/* Page Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Get In Touch
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Have questions about our school cab service? We're here to help!
                        Reach out to us and we'll respond as soon as possible.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div className="bg-gradient-primary rounded-2xl p-8 text-primary-foreground">
                            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-white/20 p-3 rounded-lg">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-lg">Phone</p>
                                        <a
                                            href="tel:+919560029986"
                                            className="text-white/90 hover:text-white transition-colors"
                                        >
                                            +91 9560029986
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-white/20 p-3 rounded-lg">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-lg">Email</p>
                                        <a
                                            href="mailto:admin@schoolcab.in"
                                            className="text-white/90 hover:text-white transition-colors"
                                        >
                                            admin@schoolcab.in
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-white/20 p-3 rounded-lg">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-lg">Address</p>
                                        <p className="text-white/90">
                                            New Delhi, India
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-white/20 p-3 rounded-lg">
                                        <Clock className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-lg">Business Hours</p>
                                        <p className="text-white/90">
                                            Mon - Sat: 8:00 AM - 8:00 PM
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Why Contact Us */}
                        <div className="bg-card rounded-2xl p-8 shadow-soft">
                            <h3 className="text-xl font-bold text-foreground mb-4">
                                Why Contact Us?
                            </h3>
                            <ul className="space-y-3 text-muted-foreground">
                                <li className="flex items-center space-x-2">
                                    <CheckCircle className="h-5 w-5 text-primary" />
                                    <span>Enquire about our school cab services</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <CheckCircle className="h-5 w-5 text-primary" />
                                    <span>Get pricing information for your route</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <CheckCircle className="h-5 w-5 text-primary" />
                                    <span>Partner with us as a school or driver</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <CheckCircle className="h-5 w-5 text-primary" />
                                    <span>Report issues or provide feedback</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-card rounded-2xl p-8 shadow-medium">
                        {isSubmitted ? (
                            <div className="text-center py-12 space-y-4">
                                <div className="bg-green-100 p-6 rounded-full w-20 h-20 mx-auto flex items-center justify-center">
                                    <CheckCircle className="h-10 w-10 text-green-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-foreground">
                                    Thank You!
                                </h3>
                                <p className="text-muted-foreground">
                                    Your message has been sent successfully. We'll get back to you
                                    within 24 hours.
                                </p>
                                <Button
                                    onClick={() => setIsSubmitted(false)}
                                    variant="outline"
                                    className="mt-4"
                                >
                                    Send Another Message
                                </Button>
                            </div>
                        ) : (
                            <>
                                <h2 className="text-2xl font-bold text-foreground mb-6">
                                    Send Us a Message
                                </h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <Label
                                            htmlFor="fullName"
                                            className="text-foreground font-medium"
                                        >
                                            Full Name *
                                        </Label>
                                        <Input
                                            id="fullName"
                                            placeholder="Enter your full name"
                                            value={formData.fullName}
                                            onChange={(e) =>
                                                handleInputChange("fullName", e.target.value)
                                            }
                                            className="mt-2"
                                        />
                                    </div>

                                    <div>
                                        <Label
                                            htmlFor="email"
                                            className="text-foreground font-medium"
                                        >
                                            Email Address *
                                        </Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="Enter your email address"
                                            value={formData.email}
                                            onChange={(e) =>
                                                handleInputChange("email", e.target.value)
                                            }
                                            className="mt-2"
                                        />
                                    </div>

                                    <div>
                                        <Label
                                            htmlFor="phoneNumber"
                                            className="text-foreground font-medium"
                                        >
                                            Phone Number *
                                        </Label>
                                        <Input
                                            id="phoneNumber"
                                            type="tel"
                                            placeholder="+91 XXXXX XXXXX"
                                            value={formData.phoneNumber}
                                            onChange={(e) =>
                                                handleInputChange("phoneNumber", e.target.value)
                                            }
                                            className="mt-2"
                                        />
                                    </div>

                                    <div>
                                        <Label
                                            htmlFor="message"
                                            className="text-foreground font-medium"
                                        >
                                            Your Message *
                                        </Label>
                                        <Textarea
                                            id="message"
                                            placeholder="How can we help you?"
                                            value={formData.message}
                                            onChange={(e) =>
                                                handleInputChange("message", e.target.value)
                                            }
                                            className="mt-2 resize-none"
                                            rows={5}
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
                                        size="lg"
                                    >
                                        {isSubmitting ? (
                                            "Sending..."
                                        ) : (
                                            <>
                                                <Send className="h-5 w-5 mr-2" />
                                                Send Message
                                            </>
                                        )}
                                    </Button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Contact;
