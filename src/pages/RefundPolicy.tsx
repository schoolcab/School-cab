import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RefreshCcw, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const RefundPolicy = () => {
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
                    <div className="inline-flex items-center bg-teal-100 text-teal-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <RefreshCcw className="h-4 w-4 mr-2" />
                        Refund Policy
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                        Refund & Cancellation Policy
                    </h1>
                    <p className="text-muted-foreground mb-2">
                        As Applicable to Subscription-Based Access to the SchoolCab Platform
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
                        <h2 className="text-xl font-bold text-foreground mb-4">1. INTRODUCTION</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                <strong>1.1</strong> This Refund & Cancellation Policy ("Policy") governs all matters pertaining to subscription payments, billing cycles, cancellations, and refund eligibility concerning the SchoolCab Platform ("Platform"), operated by Mukman Technologies Private Limited ("Company").
                            </p>
                            <p>
                                <strong>1.2</strong> By initiating a payment or accessing the Platform's subscription services, the User expressly accepts and agrees to be bound by the terms of this Policy or any other policy provided on schoolcab website.
                            </p>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">2. BILLING & PAYMENT STRUCTURE</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                <strong>2.1</strong> Subscription fees for the school commute service are levied strictly on a monthly advance-payment basis.
                            </p>
                            <p>
                                <strong>2.2</strong> A billing cycle corresponds to the calendar month, irrespective of the date on which the User originally subscribed.
                            </p>
                            <p>
                                <strong>2.3</strong> The User acknowledges that the advance nature of billing secures a reserved seat and operational allocation for the Student on a designated route.
                            </p>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">3. CANCELLATION FRAMEWORK</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                <strong>3.1</strong> A cancellation request shall be considered valid only if initiated before the commencement of the subsequent billing cycle.
                            </p>
                            <p>
                                <strong>3.2</strong> Any request for cancellation received after the billing cycle has commenced shall not entitle the User to any refund or pro-rata adjustment.
                            </p>
                            <p>
                                <strong>3.3</strong> Cancellations must be communicated via the official communication channels specified by the Company.
                            </p>
                        </div>
                    </section>

                    {/* Section 4 */}
                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">4. GENERAL PRINCIPLES GOVERNING REFUNDS</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                <strong>4.1</strong> Refunds shall be issued strictly under circumstances expressly described herein.
                            </p>
                            <p>
                                <strong>4.2</strong> The User unequivocally acknowledges that:
                            </p>
                            <ul className="list-none space-y-2 ml-6">
                                <li>(a) mid-month cancellations do not qualify for refunds;</li>
                                <li>(b) partial utilization of services shall not constitute grounds for refund;</li>
                                <li>(c) absence of the student for any duration does not reduce or waive subscription charges.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 5 */}
                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">5. CIRCUMSTANCES UNDER WHICH REFUNDS ARE PERMITTED</h2>
                        <p className="text-muted-foreground mb-4">Refunds shall be processed only in the following events:</p>
                        <div className="space-y-4 text-muted-foreground">
                            <div>
                                <p className="font-semibold text-foreground">5.1 Permanent Service Discontinuation by Driver</p>
                                <p>Where a Driver permanently ceases service and the Company is unable to arrange a suitable replacement within a reasonable timeframe.</p>
                            </div>
                            <div>
                                <p className="font-semibold text-foreground">5.2 Route Discontinuation by the Company</p>
                                <p>If the Company permanently discontinues a specific route due to operational, regulatory, or logistical constraints.</p>
                            </div>
                            <div>
                                <p className="font-semibold text-foreground">5.3 Seat Non-Allocation</p>
                                <p>If, despite receipt of payment, the User is not allocated a seat or service slot for the applicable billing period.</p>
                            </div>
                        </div>
                    </section>

                    {/* Section 6 */}
                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">6. NON-REFUNDABLE EVENTS</h2>
                        <p className="text-muted-foreground mb-4">Under no circumstances shall refunds be issued for the following:</p>
                        <div className="space-y-4 text-muted-foreground">
                            <div>
                                <p className="font-semibold text-foreground">6.1 Temporary Delays or Interruptions</p>
                                <p>Including but not limited to traffic congestion, strikes, weather conditions, breakdowns, short-term driver unavailability, or force majeure events.</p>
                            </div>
                            <div>
                                <p className="font-semibold text-foreground">6.2 Student Non-Availability</p>
                                <p>Any non-attendance due to exams, illness, vacation, personal reasons, or school closures.</p>
                            </div>
                            <div>
                                <p className="font-semibold text-foreground">6.3 Driver Behavioural Issues</p>
                                <p>While the Company may take remedial action against a Driver, such issues do not constitute grounds for refund unless they fall under Clause 5.</p>
                            </div>
                            <div>
                                <p className="font-semibold text-foreground">6.4 Parent-Initiated Mid-Cycle Withdrawal</p>
                                <p>Any voluntary withdrawal after the billing cycle commences.</p>
                            </div>
                        </div>
                    </section>

                    {/* Section 7 */}
                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">7. REFUND PROCESSING AND TIMELINES</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                <strong>7.1</strong> Eligible refunds shall be processed only through original payment methods or through bank transfers as determined by the Company.
                            </p>
                            <p>
                                <strong>7.2</strong> Refund processing may take between 7 to 10 working days from the date of approval.
                            </p>
                            <p>
                                <strong>7.3</strong> The Company shall not be liable for delays attributable to banking institutions, payment gateways, or external intermediaries.
                            </p>
                        </div>
                    </section>

                    {/* Section 8 */}
                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">8. COMPANY RIGHTS</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                <strong>8.1</strong> The Company reserves the right to:
                            </p>
                            <ul className="list-none space-y-2 ml-6">
                                <li>(a) withhold refunds if fraudulent, misleading, or inaccurate information is detected;</li>
                                <li>(b) modify or amend this Policy at its sole discretion;</li>
                                <li>(c) decline refund requests that violate any provision herein.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 9 */}
                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">9. LIMITATION OF LIABILITY</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                <strong>9.1</strong> The Company's financial liability connected with refunds shall under no circumstances exceed the amount actually paid by the User for the month in question.
                            </p>
                            <p>
                                <strong>9.2</strong> No consequential, exemplary, incidental, or indirect damages shall be recoverable under this Policy.
                            </p>
                        </div>
                    </section>

                    {/* Section 10 */}
                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">10. GOVERNING LAW</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                <strong>10.1</strong> This Policy shall be governed by and construed in accordance with the laws of India.
                            </p>
                            <p>
                                <strong>10.2</strong> Any disputes shall be subject to the exclusive jurisdiction of courts situated in Delhi.
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

export default RefundPolicy;
