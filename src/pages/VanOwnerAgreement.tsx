import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const VanOwnerAgreement = () => {
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
                    <div className="inline-flex items-center bg-yellow-100 text-yellow-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <FileText className="h-4 w-4 mr-2" />
                        Legal Agreement
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                        Van Owner Agreement
                    </h1>
                    <p className="text-muted-foreground mb-2">
                        Applicable to Fleet and Vehicle Owners Engaging with the SchoolCab Platform
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
                                <strong>1.1</strong> This Van Owner Agreement ("Agreement") is executed between the vehicle owner ("Van Owner") and Mukman Technologies Private Limited ("Company"), governing the Van Owner's participation in the SchoolCab Platform ("Platform").
                            </p>
                            <p>
                                <strong>1.2</strong> By registering vehicles on the Platform, submitting documentation, or enabling Drivers to use the Platform for student commute operations, the Van Owner acknowledges and accepts all terms herein.
                            </p>
                            <p>
                                <strong>1.3</strong> The Van Owner expressly acknowledges that the Company functions solely as a technological intermediary and does not, under any circumstances, own, operate, control, or manage school transport vehicles.
                            </p>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">2. REPRESENTATIONS & WARRANTIES</h2>
                        <p className="text-muted-foreground mb-4">The Van Owner hereby represents that:</p>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                <strong>2.1</strong> They have lawful ownership or authorization to operate and list the vehicle(s) on the Platform.
                            </p>
                            <p>
                                <strong>2.2</strong> All documents furnished to the Company are valid, complete, and authentic, including:
                            </p>
                            <ul className="list-none space-y-2 ml-6">
                                <li>(a) Registration Certificate (RC);</li>
                                <li>(b) Commercial Insurance Policy;</li>
                                <li>(c) Fitness Certificate;</li>
                                <li>(d) Pollution Certificate;</li>
                                <li>(e) Road/Transport Permits required by applicable law.</li>
                            </ul>
                            <p>
                                <strong>2.3</strong> The vehicle meets all statutory requirements mandated for transportation of school children, including adherence to state and central government norms.
                            </p>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">3. VEHICLE & SAFETY OBLIGATIONS</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                <strong>3.1</strong> The Van Owner shall ensure that each vehicle:
                            </p>
                            <ul className="list-none space-y-2 ml-6">
                                <li>(a) Is structurally sound and maintained in roadworthy condition;</li>
                                <li>(b) Contains functional safety equipment including:</li>
                                <ul className="list-disc ml-8 space-y-1">
                                    <li>first-aid kit</li>
                                    <li>fire extinguisher</li>
                                    <li>emergency contact signage</li>
                                    <li>speed governor as per mandated regulations</li>
                                </ul>
                                <li>(c) Is equipped with a functioning GPS unit compatible with the Platform;</li>
                                <li>(d) Undergoes periodic maintenance and inspections.</li>
                            </ul>
                            <p>
                                <strong>3.2</strong> The Van Owner shall ensure that the vehicle environment remains clean, hygienic, and suitable for commuting school children.
                            </p>
                        </div>
                    </section>

                    {/* Section 4 */}
                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">4. DRIVER ENGAGEMENT & RESPONSIBILITY</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                <strong>4.1</strong> The Van Owner shall appoint only verified and legally eligible Drivers.
                            </p>
                            <p>
                                <strong>4.2</strong> The Van Owner shall ensure Drivers:
                            </p>
                            <ul className="list-none space-y-2 ml-6">
                                <li>(a) possess valid and unexpired driving licences and background verification;</li>
                                <li>(b) adhere to all obligations defined in the Driver Onboarding Agreement;</li>
                                <li>(c) comply with safety norms, behavioural expectations, and statutory rules.</li>
                            </ul>
                            <p>
                                <strong>4.3</strong> The Van Owner shall be solely liable for the acts, omissions, negligence, and conduct of the Driver operating their vehicle.
                            </p>
                        </div>
                    </section>

                    {/* Section 5 */}
                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">5. PLATFORM USAGE</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                <strong>5.1</strong> The Van Owner acknowledges that:
                            </p>
                            <ul className="list-none space-y-2 ml-6">
                                <li>(a) the Platform is solely a facilitation mechanism;</li>
                                <li>(b) the Company is not responsible for allocating earnings, employment terms, or labour obligations;</li>
                                <li>(c) GPS data and route allocations may be adjusted by the Platform for operational efficiency.</li>
                            </ul>
                            <p>
                                <strong>5.2</strong> Misuse of the Platform, including tampering with GPS devices or falsifying information, shall constitute grounds for immediate termination.
                            </p>
                        </div>
                    </section>

                    {/* Section 6 */}
                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">6. FINANCIAL TERMS</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                <strong>6.1</strong> Payments (where applicable) are processed via the Platform after deduction of commissions, service fees, or other applicable charges.
                            </p>
                            <p>
                                <strong>6.2</strong> The Company shall not be liable for:
                            </p>
                            <ul className="list-none space-y-2 ml-6">
                                <li>(a) disputes between Van Owners and Drivers regarding compensation;</li>
                                <li>(b) alleged income shortfalls;</li>
                                <li>(c) fuel, maintenance, or operational expenses.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 7 */}
                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">7. PROHIBITED CONDUCT</h2>
                        <p className="text-muted-foreground mb-4">The Van Owner is expressly prohibited from:</p>
                        <ul className="list-none space-y-2 ml-6 text-muted-foreground">
                            <li>(a) enabling unverified drivers to operate listed vehicles;</li>
                            <li>(b) providing incorrect, incomplete, or fraudulent documentation;</li>
                            <li>(c) disabling or tampering with GPS tracking systems;</li>
                            <li>(d) engaging in behaviour detrimental to the reputation of the Company.</li>
                        </ul>
                    </section>

                    {/* Section 8 */}
                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">8. LIABILITY & LIMITATION</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                <strong>8.1</strong> The Van Owner acknowledges that all risks associated with vehicle operations, including but not limited to accidents, breakdowns, regulatory violations, or injuries, lie solely with the Van Owner.
                            </p>
                            <p>
                                <strong>8.2</strong> The Company shall not be liable for:
                            </p>
                            <ul className="list-none space-y-2 ml-6">
                                <li>(a) any accident, incident, loss, or damage arising from vehicle operation;</li>
                                <li>(b) misconduct, negligence, or unlawful behaviour of the Driver;</li>
                                <li>(c) regulatory penalties imposed on the Van Owner or vehicle.</li>
                            </ul>
                            <p>
                                <strong>8.3</strong> The Company's cumulative liability, if any, shall not exceed the total monthly service charge or commission retained by the Company during the disputed period.
                            </p>
                        </div>
                    </section>

                    {/* Section 9 */}
                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">9. INDEMNITY</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                <strong>9.1</strong> The Van Owner agrees to indemnify, defend, and hold harmless the Company, its officers, directors, employees, and affiliates from any claims, losses, liabilities, penalties, or damages arising out of:
                            </p>
                            <ul className="list-none space-y-2 ml-6">
                                <li>(a) operational failures, negligence, or breaches by the Van Owner or Driver;</li>
                                <li>(b) non-compliance with statutory vehicle norms;</li>
                                <li>(c) disputes originating from parental complaints or student safety incidents.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 10 */}
                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">10. TERMINATION</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                <strong>10.1</strong> The Company may terminate or suspend this Agreement, with or without notice, upon:
                            </p>
                            <ul className="list-none space-y-2 ml-6">
                                <li>(a) document irregularities;</li>
                                <li>(b) repeated safety violations;</li>
                                <li>(c) complaints indicating risk to student security;</li>
                                <li>(d) misuse or manipulation of Platform data.</li>
                            </ul>
                            <p>
                                <strong>10.2</strong> Upon termination, the Van Owner shall immediately cease operation of vehicles through the Platform.
                            </p>
                        </div>
                    </section>

                    {/* Section 11 */}
                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">11. GOVERNING LAW</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                <strong>11.1</strong> This Agreement shall be governed by the laws of India.
                            </p>
                            <p>
                                <strong>11.2</strong> All disputes shall be subject exclusively to the jurisdiction of courts situated in Delhi.
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

export default VanOwnerAgreement;
