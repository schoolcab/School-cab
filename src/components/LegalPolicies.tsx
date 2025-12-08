import {
    FileText,
    Shield,
    Users,
    Car,
    RefreshCcw,
    Scale,
    ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";

const POLICIES = [
    {
        title: "Privacy Policy",
        description: "How we collect, use, and protect your personal information.",
        icon: Shield,
        href: "/privacy-policy",
        color: "bg-blue-100 text-blue-600",
    },
    {
        title: "Terms and Conditions",
        description: "General terms governing the use of SchoolCab services.",
        icon: Scale,
        href: "/terms-and-conditions",
        color: "bg-purple-100 text-purple-600",
    },
    {
        title: "Parent & Student User Agreement",
        description: "Terms for parents and students using the SchoolCab app.",
        icon: Users,
        href: "/parent-student-agreement",
        color: "bg-green-100 text-green-600",
    },
    {
        title: "Driver Onboarding Agreement",
        description: "Terms and conditions for drivers joining the SchoolCab platform.",
        icon: Car,
        href: "/driver-agreement",
        color: "bg-orange-100 text-orange-600",
    },
    {
        title: "Van Owner Agreement",
        description: "Terms for vehicle owners partnering with SchoolCab.",
        icon: FileText,
        href: "/van-owner-agreement",
        color: "bg-yellow-100 text-yellow-600",
    },
    {
        title: "Safety & Compliance Policy",
        description: "Our commitment to safety standards and regulatory compliance.",
        icon: Shield,
        href: "/safety-policy",
        color: "bg-red-100 text-red-600",
    },
    {
        title: "Refund Policy",
        description: "Information about refunds, cancellations, and payment terms.",
        icon: RefreshCcw,
        href: "/refund-policy",
        color: "bg-teal-100 text-teal-600",
    },
];

const LegalPolicies = () => {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12 animate-fade-in">
                    <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <FileText className="h-4 w-4 mr-2" />
                        Legal & Policies
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Our Policies & Agreements
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Transparency is key. Read our policies to understand how we operate and protect your interests.
                    </p>
                </div>

                {/* Policy Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {POLICIES.map((policy, index) => {
                        const IconComponent = policy.icon;
                        return (
                            <Link
                                key={index}
                                to={policy.href}
                                className="group bg-card p-6 rounded-xl border border-border shadow-soft hover:shadow-medium transition-all duration-300 hover:border-primary/30 hover:-translate-y-1"
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`p-3 rounded-lg ${policy.color} group-hover:scale-110 transition-transform`}>
                                        <IconComponent className="h-6 w-6" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                                            {policy.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {policy.description}
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all self-center">
                                        <ChevronRight className="h-5 w-5" />
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default LegalPolicies;
