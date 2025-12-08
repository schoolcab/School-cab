import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Car, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const DriverAgreement = () => {
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
                    <div className="inline-flex items-center bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <Car className="h-4 w-4 mr-2" />
                        Driver Agreement
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                        Driver Onboarding Agreement
                    </h1>
                    <p className="text-muted-foreground mb-2">
                        As Applicable to Independent Drivers Engaged Through the SchoolCab Platform
                    </p>
                    <p className="text-sm text-muted-foreground">
                        Mukman Technologies Private Limited
                    </p>
                </div>

                {/* Content */}
                <div className="bg-card rounded-xl p-6 md:p-8 shadow-soft border border-border space-y-8">

                    {/* Section 1 */}
                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">1. PREAMBLE</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                <strong>1.1</strong> This Driver Onboarding Agreement ("Agreement") governs the rights, obligations, conduct requirements, operational responsibilities, and legal relationship between an individual driver ("Driver") and Mukman Technologies Private Limited ("Company"), in connection with the Driver's utilization of the SchoolCab Platform ("Platform").
                            </p>
                            <p>
                                <strong>1.2</strong> By registering on the Platform, submitting documentation, or undertaking any student commute activity arranged through the Platform, the Driver acknowledges having read, understood, and accepted the terms of this Agreement.
                            </p>
                            <p>
                                <strong>1.3</strong> Nothing in this Agreement shall be construed as creating an employer–employee relationship. The Driver operates strictly as an <strong>independent contractor</strong>.
                            </p>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">2. DRIVER ELIGIBILITY & DOCUMENTATION REQUIREMENTS</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                <strong>2.1</strong> The Driver shall, at all times, possess valid, legally enforceable, and government-recognized documents, including but not limited to:
                            </p>
                            <ul className="list-none space-y-2 ml-6">
                                <li>(a) a valid Driving Licence appropriate for transport category vehicles;</li>
                                <li>(b) Aadhaar, PAN, or other mandated identity proofs;</li>
                                <li>(c) RC (Registration Certificate) of the assigned vehicle;</li>
                                <li>(d) valid insurance policy and coverage for passenger transport;</li>
                                <li>(e) valid fitness certificate and pollution control certificate;</li>
                                <li>(f) transport permit, if mandated under applicable laws.</li>
                            </ul>
                            <p>
                                <strong>2.2</strong> The Driver must promptly notify the Company and the Van Owner of any lapse, revocation, expiry, or suspension of any required document.
                            </p>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">3. DRIVER CONDUCT & PROFESSIONAL OBLIGATIONS</h2>
                        <p className="text-muted-foreground mb-4">The Driver shall undertake the following obligations:</p>

                        <div className="space-y-6 text-muted-foreground">
                            <div>
                                <p className="font-semibold text-foreground mb-2">3.1 Safety & Behavioural Standards</p>
                                <ul className="list-none space-y-2 ml-6">
                                    <li>(a) The Driver shall treat all students with utmost professionalism, courtesy, and care.</li>
                                    <li>(b) The Driver shall strictly abstain from abusive language, inappropriate behaviour, or any action that may endanger the safety of minors.</li>
                                    <li>(c) The Driver shall not smoke, consume alcohol, chew tobacco, or use drugs at any time during duty hours or while operating a vehicle.</li>
                                </ul>
                            </div>

                            <div>
                                <p className="font-semibold text-foreground mb-2">3.2 Operational Compliance</p>
                                <ul className="list-none space-y-2 ml-6">
                                    <li>(a) The Driver shall adhere strictly to assigned pickup and drop schedules.</li>
                                    <li>(b) The Driver shall not deviate from assigned routes without operational necessity or instructions.</li>
                                    <li>(c) The Driver shall ensure GPS remains active, uninterrupted, and accurate during operational hours.</li>
                                    <li>(d) The Driver shall use the Platform for marking attendance, receiving instructions, updating trip status, and other operational requirements.</li>
                                </ul>
                            </div>

                            <div>
                                <p className="font-semibold text-foreground mb-2">3.3 Duty of Care</p>
                                <ul className="list-none space-y-2 ml-6">
                                    <li>(a) The Driver shall ensure safe boarding and deboarding of students.</li>
                                    <li>(b) The Driver shall maintain cleanliness and hygienic conditions within the vehicle.</li>
                                    <li>(c) The Driver shall maintain moderate and safe driving speed, avoid rash driving, and comply with all traffic regulations.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Section 4 */}
                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">4. VEHICLE RESPONSIBILITY</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                <strong>4.1</strong> Unless otherwise agreed between the Driver and Van Owner, the Driver acknowledges that the vehicle is not owned by the Company and remains the sole responsibility of the Van Owner.
                            </p>
                            <p>
                                <strong>4.2</strong> The Driver shall immediately report any mechanical defect, safety concern, or behavior issue involving passengers or third parties.
                            </p>
                        </div>
                    </section>

                    {/* Section 5 */}
                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">5. PROHIBITIONS</h2>
                        <p className="text-muted-foreground mb-4">The Driver is expressly prohibited from:</p>
                        <ul className="list-none space-y-2 ml-6 text-muted-foreground">
                            <li>(a) allowing unauthorized individuals to board the vehicle;</li>
                            <li>(b) modifying or disabling GPS devices or tracking systems;</li>
                            <li>(c) soliciting additional payments directly from parents or students;</li>
                            <li>(d) using the Platform for purposes other than commute operations;</li>
                            <li>(e) engaging in any behaviour that may tarnish the reputation of the Company.</li>
                        </ul>
                    </section>

                    {/* Section 6 */}
                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">6. PAYMENT TERMS</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                <strong>6.1</strong> The Driver acknowledges that:
                            </p>
                            <ul className="list-none space-y-2 ml-6">
                                <li>(a) all payouts are subject to deductions of platform charges, commissions, or applicable fees as per Company policy;</li>
                                <li>(b) the Company is not responsible for disputes between Drivers and Van Owners relating to salary, incentives, or employment arrangements;</li>
                                <li>(c) the Company merely facilitates disbursement under a marketplace model.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 7 */}
                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">7. SUSPENSION & TERMINATION</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                <strong>7.1</strong> The Company may immediately suspend or terminate Driver access if:
                            </p>
                            <ul className="list-none space-y-2 ml-6">
                                <li>(a) any document is found invalid, expired, or fraudulent;</li>
                                <li>(b) the Driver violates safety protocols or behaves inappropriately with students;</li>
                                <li>(c) the Driver tampers with GPS or misuses the Platform;</li>
                                <li>(d) the Company receives complaints indicating risk to student safety.</li>
                            </ul>
                            <p>
                                <strong>7.2</strong> The Company may, at its sole discretion, impose temporary deactivation pending investigation.
                            </p>
                        </div>
                    </section>

                    {/* Section 8 */}
                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">8. LIMITATION OF LIABILITY</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                <strong>8.1</strong> The Company is not liable for:
                            </p>
                            <ul className="list-none space-y-2 ml-6">
                                <li>(a) accidents arising from vehicle operation;</li>
                                <li>(b) behaviour, negligence, or misconduct of the Driver;</li>
                                <li>(c) breakdowns, traffic delays, or force majeure events.</li>
                            </ul>
                            <p>
                                <strong>8.2</strong> Under no circumstances shall the Company's liability exceed the total payout made to the Driver for the disputed month.
                            </p>
                        </div>
                    </section>

                    {/* Section 9 */}
                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">9. INDEMNIFICATION</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                <strong>9.1</strong> The Driver agrees to indemnify and hold the Company harmless against any claims, damages, penalties, or liabilities arising from:
                            </p>
                            <ul className="list-none space-y-2 ml-6">
                                <li>(a) breach of this Agreement;</li>
                                <li>(b) unlawful conduct or negligence;</li>
                                <li>(c) regulatory non-compliance;</li>
                                <li>(d) disputes with Parents, Schools, or Van Owners.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 10 */}
                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">10. GOVERNING LAW</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                <strong>10.1</strong> This Agreement shall be governed by the laws of India.
                            </p>
                            <p>
                                <strong>10.2</strong> Any disputes hereunder shall be subject exclusively to the jurisdiction of courts situated in Delhi.
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

export default DriverAgreement;
