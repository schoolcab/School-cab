import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const SafetyPolicy = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="container mx-auto px-4 py-12">
                {/* Back Button */}
                <Link
                    to="/"
                    className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors"
                >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Home
                </Link>

                {/* Header */}
                <div className="mb-8">
                    <div className="inline-flex items-center bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <Shield className="h-4 w-4 mr-2" />
                        Safety Policy
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                        Safety & Compliance Policy
                    </h1>
                    <p className="text-muted-foreground mb-2">
                        Governing Operational, Vehicle, and Conduct Standards for Use of the SchoolCab Platform
                    </p>
                    <p className="text-sm text-muted-foreground">
                        Mukman Technologies Private Limited<br />
                        Last Updated: 7th December 2025
                    </p>
                </div>

                {/* Content */}
                <div className="bg-card rounded-xl p-6 md:p-8 shadow-soft border border-border space-y-8">

                    {/* Section 1 */}
                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">1. PREAMBLE</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                <strong>1.1</strong> This Safety & Compliance Policy ("Policy") delineates mandatory safety practices, regulatory obligations, behavioural norms, and operational compliance requirements applicable to all Users of the SchoolCab Platform ("Platform"), including Parents/Students, Drivers, Van Owners, and Schools.
                            </p>
                            <p>
                                <strong>1.2</strong> By accessing or operating through the Platform, each User expressly agrees to adhere to the terms herein, acknowledging that student safety constitutes a fundamental, non-negotiable priority.
                            </p>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">2. GENERAL SAFETY PRINCIPLES</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                <strong>2.1</strong> The Company functions solely as a digital intermediary and does not assume operational control over vehicles.
                            </p>
                            <p>
                                <strong>2.2</strong> Notwithstanding its intermediary status, the Company imposes mandatory safety protocols to ensure reasonable operational integrity and mitigation of foreseeable risks.
                            </p>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">3. VEHICLE SAFETY REQUIREMENTS</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                <strong>3.1</strong> Each vehicle enlisted through the Platform ("Vehicle") shall, at all times, conform to statutory requirements governing school transportation, including but not limited to:
                            </p>
                            <ul className="list-none space-y-2 ml-6">
                                <li>(a) valid Registration, Insurance, Fitness, and Pollution Certificates;</li>
                                <li>(b) mechanical roadworthiness and routine servicing;</li>
                                <li>(c) compliance with safety specifications mandated under Motor Vehicle Rules.</li>
                            </ul>
                            <p>
                                <strong>3.2</strong> Each Vehicle shall be equipped with:
                            </p>
                            <ul className="list-none space-y-2 ml-6">
                                <li>(a) a fully stocked first-aid kit;</li>
                                <li>(b) a functional fire extinguisher certified within the validity period;</li>
                                <li>(c) functional door locks, window grills, and child-safety mechanisms;</li>
                                <li>(d) an operative speed governor calibrated to legally permissible school-transport limits;</li>
                                <li>(e) emergency contact numbers displayed in a clearly visible manner.</li>
                            </ul>
                            <p>
                                <strong>3.3</strong> The Van Owner shall ensure that no unauthorized modification, removal, or disabling of safety equipment occurs.
                            </p>
                        </div>
                    </section>

                    {/* Section 4 */}
                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">4. GPS AND TECHNOLOGICAL COMPLIANCE</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                <strong>4.1</strong> Every Vehicle operating through the Platform shall be fitted with a functioning GPS device or equivalent tracking mechanism integrated with the Platform.
                            </p>
                            <p>
                                <strong>4.2</strong> Drivers and Van Owners shall ensure:
                            </p>
                            <ul className="list-none space-y-2 ml-6">
                                <li>(a) real-time GPS tracking remains uninterrupted;</li>
                                <li>(b) no tampering, disabling, manipulation, or interference occurs with tracking data;</li>
                                <li>(c) accurate marking of trip start, trip end, and intermediate status updates.</li>
                            </ul>
                            <p>
                                <strong>4.3</strong> Intentional interference with GPS constitutes grounds for immediate suspension.
                            </p>
                        </div>
                    </section>

                    {/* Section 5 */}
                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">5. DRIVER SAFETY & BEHAVIOURAL PROTOCOLS</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                <strong>5.1</strong> The Driver shall:
                            </p>
                            <ul className="list-none space-y-2 ml-6">
                                <li>(a) maintain professional, courteous, and responsible behaviour;</li>
                                <li>(b) exercise heightened caution when transporting minors;</li>
                                <li>(c) refrain from harsh driving, overspeeding, or abrupt manoeuvres;</li>
                                <li>(d) strictly comply with all traffic rules and school zone regulations.</li>
                            </ul>
                            <p className="font-semibold text-foreground mt-4">5.2 Prohibitions</p>
                            <p>The Driver shall not:</p>
                            <ul className="list-none space-y-2 ml-6">
                                <li>(a) smoke, consume alcohol, or use narcotics during or prior to duty hours;</li>
                                <li>(b) engage in verbal or physical misconduct;</li>
                                <li>(c) permit unauthorized passengers to board the Vehicle;</li>
                                <li>(d) leave the Vehicle unattended with students inside.</li>
                            </ul>
                            <p className="font-semibold text-foreground mt-4">5.3 Mandatory Conduct</p>
                            <ul className="list-none space-y-2 ml-6">
                                <li>(a) The Driver must ensure safe boarding/deboarding;</li>
                                <li>(b) Maintain a polite interaction protocol;</li>
                                <li>(c) Immediately report disciplinary or safety concerns to the Van Owner or Platform.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 6 */}
                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">6. STUDENT SAFETY STANDARDS</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                <strong>6.1</strong> Students must be boarded and deboarded only at designated pickup/drop points as communicated through the Platform.
                            </p>
                            <p>
                                <strong>6.2</strong> No child shall be:
                            </p>
                            <ul className="list-none space-y-2 ml-6">
                                <li>(a) forced to disembark at an unfamiliar location;</li>
                                <li>(b) permitted to stand during transit;</li>
                                <li>(c) transported without being marked Present on the Platform, where applicable.</li>
                            </ul>
                            <p>
                                <strong>6.3</strong> Parents/Students must adhere to instructions issued by Drivers, Schools, and the Platform concerning safety measures.
                            </p>
                        </div>
                    </section>

                    {/* Section 7 */}
                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">7. EMERGENCY MANAGEMENT</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                <strong>7.1</strong> In case of mechanical failure, accident, health emergency, or any event jeopardizing student safety, the Driver shall:
                            </p>
                            <ul className="list-none space-y-2 ml-6">
                                <li>(a) immediately bring the Vehicle to a safe stop;</li>
                                <li>(b) notify the Van Owner and Platform support;</li>
                                <li>(c) facilitate first-aid assistance where feasible;</li>
                                <li>(d) cooperate with authorities, parents, and emergency responders.</li>
                            </ul>
                            <p>
                                <strong>7.2</strong> The Company may assist in coordination but assumes no operational liability for emergency events.
                            </p>
                        </div>
                    </section>

                    {/* Section 8 */}
                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">8. COMPLIANCE MONITORING</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                <strong>8.1</strong> The Company may:
                            </p>
                            <ul className="list-none space-y-2 ml-6">
                                <li>(a) conduct periodic audits of Vehicle documents;</li>
                                <li>(b) evaluate GPS logs for route deviation or operational irregularities;</li>
                                <li>(c) review complaints and user feedback;</li>
                                <li>(d) impose compliance-driven corrective measures.</li>
                            </ul>
                            <p>
                                <strong>8.2</strong> Repeated deviations shall constitute grounds for suspension or permanent deactivation.
                            </p>
                        </div>
                    </section>

                    {/* Section 9 */}
                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">9. USER RESPONSIBILITIES (Parents, Students, Schools)</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                <strong>9.1</strong> Parents must ensure:
                            </p>
                            <ul className="list-none space-y-2 ml-6">
                                <li>(a) accurate student details;</li>
                                <li>(b) punctuality at designated pickup/drop points;</li>
                                <li>(c) raising timely concerns related to safety.</li>
                            </ul>
                            <p>
                                <strong>9.2</strong> Schools must cooperate in establishing safe pickup/drop zones and timings.
                            </p>
                        </div>
                    </section>

                    {/* Section 10 */}
                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">10. LIMITATION OF LIABILITY</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                <strong>10.1</strong> The Company explicitly disclaims responsibility for:
                            </p>
                            <ul className="list-none space-y-2 ml-6">
                                <li>(a) accidents, injuries, damages, or losses arising from vehicle operation;</li>
                                <li>(b) negligent or unlawful conduct of Drivers or Van Owners;</li>
                                <li>(c) non-compliance with statutory transport norms;</li>
                                <li>(d) delays or disruptions caused by weather, traffic, breakdowns, or unforeseen circumstances.</li>
                            </ul>
                            <p>
                                <strong>10.2</strong> The Company's role is limited to facilitation, monitoring, and communication.
                            </p>
                        </div>
                    </section>

                    {/* Section 11 */}
                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">11. INDEMNIFICATION</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                <strong>11.1</strong> Users, Drivers, and Van Owners shall indemnify, defend, and hold harmless the Company from claims arising from:
                            </p>
                            <ul className="list-none space-y-2 ml-6">
                                <li>(a) breach of safety obligations;</li>
                                <li>(b) violations of applicable laws;</li>
                                <li>(c) negligent conduct;</li>
                                <li>(d) tampering with safety systems or GPS.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 12 */}
                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">12. AMENDMENTS</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                <strong>12.1</strong> The Company reserves the right to revise this Policy at any time without prior notice.
                            </p>
                            <p>
                                <strong>12.2</strong> Continued use of the Platform constitutes acceptance of updated terms.
                            </p>
                        </div>
                    </section>

                    {/* Section 13 */}
                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">13. GOVERNING LAW</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                <strong>13.1</strong> This Policy shall be governed by Indian law.
                            </p>
                            <p>
                                <strong>13.2</strong> Disputes shall fall under the exclusive jurisdiction of courts situated in Delhi.
                            </p>
                        </div>
                    </section>

                    {/* End */}
                    <div className="pt-8 border-t border-border text-center text-muted-foreground">
                        <p className="font-medium">END OF DOCUMENT</p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default SafetyPolicy;
