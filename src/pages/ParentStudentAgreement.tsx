import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ParentStudentAgreement = () => {
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
                    <div className="inline-flex items-center bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <Users className="h-4 w-4 mr-2" />
                        User Agreement
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                        Parent / Student User Agreement
                    </h1>
                    <p className="text-muted-foreground mb-2">
                        Governing Use of SchoolCab Services by Parents, Guardians, and Students
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
                                <strong>1.1</strong> This Parent/Student User Agreement ("Agreement") governs the rights, obligations, representations, and operational responsibilities applicable to Parents, Guardians, and Students ("User") who utilize the SchoolCab Platform ("Platform") operated by Mukman Technologies Private Limited ("Company").
                            </p>
                            <p>
                                <strong>1.2</strong> By accessing, registering on, or using the Platform, the User acknowledges and affirms acceptance of all terms herein, without limitation or qualification.
                            </p>
                            <p>
                                <strong>1.3</strong> The User expressly acknowledges that SchoolCab is a digital marketplace and does not own, operate, or manage transportation vehicles or employ Drivers. Transportation services are rendered exclusively by independent third-party Drivers and Van Owners.
                            </p>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">2. USER OBLIGATIONS & REPRESENTATIONS</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                <strong>2.1</strong> The User warrants that all information furnished during registration—including student details, school information, residential address, and contact data—is accurate, complete, and up-to-date.
                            </p>
                            <p>
                                <strong>2.2</strong> The User shall promptly update the Platform in the event of any change in:
                            </p>
                            <ul className="list-none space-y-2 ml-6">
                                <li>(a) address or residence;</li>
                                <li>(b) pickup/drop requirements;</li>
                                <li>(c) emergency contact numbers;</li>
                                <li>(d) school timings or schedule adjustments.</li>
                            </ul>
                            <p>
                                <strong>2.3</strong> The User agrees to ensure that the Student reports punctually to designated pickup and drop locations.
                            </p>
                            <p>
                                <strong>2.4</strong> The User acknowledges that delays caused by the Student may disrupt route schedules and shall not constitute grounds for refund or complaint.
                            </p>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">3. SAFETY & CONDUCT REQUIREMENTS FOR STUDENTS</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                <strong>3.1</strong> The User shall ensure that the Student:
                            </p>
                            <ul className="list-none space-y-2 ml-6">
                                <li>(a) boards and deboards only at designated points;</li>
                                <li>(b) follows Driver instructions concerning seating, safety, and conduct;</li>
                                <li>(c) refrains from misconduct, tampering with vehicle equipment, distracting the Driver, or engaging in unsafe behaviours.</li>
                            </ul>
                            <p>
                                <strong>3.2</strong> The User shall be responsible for any damage to the vehicle or equipment caused by the Student.
                            </p>
                        </div>
                    </section>

                    {/* Section 4 */}
                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">4. USE OF GPS AND LOCATION DATA</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                <strong>4.1</strong> The User acknowledges and consents to:
                            </p>
                            <ul className="list-none space-y-2 ml-6">
                                <li>(a) the use of GPS tracking for operational transparency, safety, and monitoring;</li>
                                <li>(b) the sharing of the vehicle's live location with authorized Parents/Guardians.</li>
                            </ul>
                            <p>
                                <strong>4.2</strong> The User shall not misuse or disseminate driver location data, student information, or trip logs.
                            </p>
                        </div>
                    </section>

                    {/* Section 5 */}
                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">5. PAYMENT OBLIGATIONS</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                <strong>5.1</strong> Subscription fees are payable strictly in advance on a monthly basis.
                            </p>
                            <p>
                                <strong>5.2</strong> Non-payment shall result in automatic suspension of services without further notice.
                            </p>
                            <p>
                                <strong>5.3</strong> The User understands and agrees that refusal of service due to non-payment shall not constitute a dispute or deficiency on part of the Company.
                            </p>
                        </div>
                    </section>

                    {/* Section 6 */}
                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">6. REFUNDS AND CANCELLATIONS</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                <strong>6.1</strong> Refund eligibility is governed exclusively by the Refund & Cancellation Policy.
                            </p>
                            <p>
                                <strong>6.2</strong> Mid-month cancellation or partial usage of service shall not entitle the User to any refund.
                            </p>
                        </div>
                    </section>

                    {/* Section 7 */}
                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">7. PLATFORM DISCLAIMERS</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                <strong>7.1</strong> The User expressly acknowledges the following:
                            </p>
                            <ul className="list-none space-y-2 ml-6">
                                <li>(a) All transportation services are provided by independent Drivers and Van Owners;</li>
                                <li>(b) The Company shall not be liable for vehicular accidents, delays, conduct of Drivers, or unforeseen disruptions;</li>
                                <li>(c) The Company does not guarantee uninterrupted or error-free access to GPS, routing, or communication systems.</li>
                            </ul>
                            <p>
                                <strong>7.2</strong> The Company shall not be responsible for:
                            </p>
                            <ul className="list-none space-y-2 ml-6">
                                <li>(a) mechanical breakdowns;</li>
                                <li>(b) traffic delays, congestion, or road diversions;</li>
                                <li>(c) weather conditions disrupting service;</li>
                                <li>(d) temporary driver unavailability;</li>
                                <li>(e) negligence or misconduct of Drivers or Van Owners.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 8 */}
                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">8. LIMITATION OF LIABILITY</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                <strong>8.1</strong> The liability of the Company, if any, shall be strictly limited to the subscription fee paid by the User for the relevant billing cycle.
                            </p>
                            <p>
                                <strong>8.2</strong> Under no circumstances shall the Company be liable for indirect, incidental, punitive, exemplary, or consequential damages.
                            </p>
                        </div>
                    </section>

                    {/* Section 9 */}
                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">9. PROHIBITED USER ACTIONS</h2>
                        <p className="text-muted-foreground mb-4">The User shall not:</p>
                        <ul className="list-none space-y-2 ml-6 text-muted-foreground">
                            <li>(a) misuse the Platform, GPS data, or communication channels;</li>
                            <li>(b) harass Drivers or Van Owners;</li>
                            <li>(c) demand unauthorised route deviations;</li>
                            <li>(d) alter or falsify student attendance or pickup details;</li>
                            <li>(e) allow third parties to access the User's Platform account.</li>
                        </ul>
                    </section>

                    {/* Section 10 */}
                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">10. SUSPENSION & TERMINATION</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                <strong>10.1</strong> The Company reserves the right to suspend or terminate User access if:
                            </p>
                            <ul className="list-none space-y-2 ml-6">
                                <li>(a) payment is overdue;</li>
                                <li>(b) safety protocols are violated;</li>
                                <li>(c) User behaviour disrupts commute operations;</li>
                                <li>(d) fraudulent or incorrect information is provided.</li>
                            </ul>
                            <p>
                                <strong>10.2</strong> Suspension or termination shall not entail any obligation to refund fees.
                            </p>
                        </div>
                    </section>

                    {/* Section 11 */}
                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">11. INDEMNIFICATION</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                <strong>11.1</strong> The User agrees to indemnify, defend, and hold harmless the Company and its officers, employees, and affiliates from any claim, damage, penalty, or liability arising out of:
                            </p>
                            <ul className="list-none space-y-2 ml-6">
                                <li>(a) misconduct by the Student;</li>
                                <li>(b) breach of this Agreement;</li>
                                <li>(c) misuse of the Platform;</li>
                                <li>(d) disputes with Drivers or Van Owners.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 12 */}
                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">12. AMENDMENTS</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                <strong>12.1</strong> The Company may revise, modify, or update this Agreement at its sole discretion without prior notice.
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
                                <strong>13.1</strong> This Agreement shall be governed by the laws of India.
                            </p>
                            <p>
                                <strong>13.2</strong> All disputes shall be subject to the exclusive jurisdiction of courts located in Delhi.
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

export default ParentStudentAgreement;
