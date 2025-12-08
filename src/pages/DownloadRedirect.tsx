import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Smartphone, Download } from "lucide-react";

// App store links configuration
const APP_LINKS = {
    parent: {
        ios: "https://apps.apple.com/in/app/school-cab/id6751194844",
        android: "https://play.google.com/store/apps/details?id=com.rahulatanny.mobileapp&hl=en",
        title: "SchoolCab Parent App",
    },
    driver: {
        ios: "https://apps.apple.com/in/app/school-cab-driver/id6754593106",
        android: "https://play.google.com/store/apps/details?id=com.rahulatanny.schoolcabdriver",
        title: "SchoolCab Driver App",
    },
};

type AppType = "parent" | "driver";

const detectOS = (): "ios" | "android" | "unknown" => {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;

    // iOS detection
    if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
        return "ios";
    }

    // Android detection
    if (/android/i.test(userAgent)) {
        return "android";
    }

    return "unknown";
};

const DownloadRedirect = () => {
    const { appType } = useParams<{ appType: string }>();
    const [redirecting, setRedirecting] = useState(true);
    const [detectedOS, setDetectedOS] = useState<"ios" | "android" | "unknown">("unknown");

    const validAppType = (appType === "parent" || appType === "driver") ? appType : "parent";
    const appConfig = APP_LINKS[validAppType as AppType];

    useEffect(() => {
        const os = detectOS();
        setDetectedOS(os);

        if (os === "ios") {
            window.location.href = appConfig.ios;
        } else if (os === "android") {
            window.location.href = appConfig.android;
        } else {
            // Desktop or unknown - show download options
            setRedirecting(false);
        }
    }, [appConfig]);

    // Show loading while redirecting on mobile
    if (redirecting && detectedOS !== "unknown") {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center space-y-4">
                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent mx-auto"></div>
                    <p className="text-lg text-muted-foreground">Redirecting to {detectedOS === "ios" ? "App Store" : "Play Store"}...</p>
                </div>
            </div>
        );
    }

    // Fallback UI for desktop or when OS detection fails
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
                                Download {appConfig.title}
                            </div>

                            <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                                Get the {validAppType === "parent" ? "Parent" : "Driver"} App
                                <span className="block text-primary">On Your Phone</span>
                            </h1>

                            <p className="text-lg text-muted-foreground">
                                {validAppType === "parent"
                                    ? "Download the SchoolCab app for easy booking and real-time tracking of your child's school transport."
                                    : "Download the SchoolCab Driver app to manage your rides and stay connected with parents."}
                            </p>
                        </div>

                        {/* App Store Buttons */}
                        <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                            {/* Play Store Button */}
                            <div className="text-center">
                                <a
                                    href={appConfig.android}
                                    target="_blank"
                                    rel="noopener noreferrer"
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
                                    href={appConfig.ios}
                                    target="_blank"
                                    rel="noopener noreferrer"
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

export default DownloadRedirect;
