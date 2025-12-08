import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Instagram } from "lucide-react";

// Add your Instagram Reel URLs here
// Format: Just the reel ID or full URL - both work
const INSTAGRAM_REELS = [
    "https://www.instagram.com/reel/DRRZsREiB5v/?igsh=Y3V2cWEwczl6azJt",
    "https://www.instagram.com/reel/DQYavrdAuD7/?igsh=cXF1MmVwcmwyd3Nq",
    "https://www.instagram.com/reel/DPR64Yxk1Y-/?igsh=MTVzbGViMWhmcWRs",
    "https://www.instagram.com/reel/DQt0OhDjix_/?igsh=c3RqM2h0MzNlY2tj",
    "https://www.instagram.com/reel/PASTE_REEL_ID_5/",
];

const InstagramReels = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScrollButtons = () => {
        const container = scrollContainerRef.current;
        if (container) {
            setCanScrollLeft(container.scrollLeft > 0);
            setCanScrollRight(
                container.scrollLeft < container.scrollWidth - container.clientWidth - 10
            );
        }
    };

    const scroll = (direction: "left" | "right") => {
        const container = scrollContainerRef.current;
        if (container) {
            const scrollAmount = 340; // Width of one embed + gap
            container.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    useEffect(() => {
        // Load Instagram embed script
        const script = document.createElement("script");
        script.src = "https://www.instagram.com/embed.js";
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            // Process embeds after script loads
            if ((window as any).instgrm) {
                (window as any).instgrm.Embeds.process();
            }
        };

        return () => {
            // Cleanup
            const existingScript = document.querySelector(
                'script[src="https://www.instagram.com/embed.js"]'
            );
            if (existingScript) {
                existingScript.remove();
            }
        };
    }, []);

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener("scroll", checkScrollButtons);
            checkScrollButtons();
            return () => container.removeEventListener("scroll", checkScrollButtons);
        }
    }, []);

    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12 animate-fade-in">
                    <div className="inline-flex items-center bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 text-pink-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <Instagram className="h-4 w-4 mr-2" />
                        Follow Us on Instagram
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        SchoolCab in Action!
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Watch how we're making school commutes safer and more convenient every day.
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="relative group">
                    {/* Left Arrow */}
                    <button
                        onClick={() => scroll("left")}
                        className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-white hover:scale-110 ${canScrollLeft
                            ? "opacity-100"
                            : "opacity-0 pointer-events-none"
                            }`}
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="h-6 w-6 text-gray-700" />
                    </button>

                    {/* Reels Container */}
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
                        style={{
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                        }}
                    >
                        {INSTAGRAM_REELS.map((reelUrl, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-[320px] rounded-2xl overflow-hidden bg-card shadow-soft hover:shadow-medium transition-shadow duration-300"
                            >
                                <blockquote
                                    className="instagram-media"
                                    data-instgrm-permalink={reelUrl}
                                    data-instgrm-version="14"
                                    style={{
                                        background: "#FFF",
                                        border: 0,
                                        borderRadius: "16px",
                                        margin: 0,
                                        maxWidth: "320px",
                                        minWidth: "280px",
                                        padding: 0,
                                        width: "100%",
                                    }}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={() => scroll("right")}
                        className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-white hover:scale-110 ${canScrollRight
                            ? "opacity-100"
                            : "opacity-0 pointer-events-none"
                            }`}
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="h-6 w-6 text-gray-700" />
                    </button>
                </div>

                {/* Instagram Follow CTA */}
                <div className="text-center mt-10">
                    <a
                        href="https://www.instagram.com/schoolcab_official/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-lg"
                    >
                        <Instagram className="h-5 w-5" />
                        Follow @schoolcab.in
                    </a>
                </div>
            </div>

            {/* Hide scrollbar CSS */}
            <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
        </section>
    );
};

export default InstagramReels;
