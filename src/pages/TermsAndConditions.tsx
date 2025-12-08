import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Scale, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
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
          <div className="inline-flex items-center bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Scale className="h-4 w-4 mr-2" />
            Legal Terms
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Terms & Conditions
          </h1>
          <p className="text-muted-foreground mb-2">
            Operative for Use of the SchoolCab Digital Platform
          </p>
          <p className="text-sm text-muted-foreground">
            Mukman Technologies Private Limited<br />
            A-39, Nirmal Vihar, Najafgarh, New Delhi<br />
            Last Updated: 7th December 2025
          </p>
        </div>

        {/* Content */}
        <div className="bg-card rounded-xl p-6 md:p-8 shadow-soft border border-border space-y-8">

          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">1. PRELIMINARY PROVISIONS</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>1.1</strong> These Terms & Conditions ("Terms") constitute a legally binding agreement between the user ("User") and Mukman Technologies Private Limited ("Company"), governing the access to and utilization of the SchoolCab application, website, systems, and associated services ("Platform").
              </p>
              <p>
                <strong>1.2</strong> By accessing, browsing, downloading, registering, or otherwise using the Platform, the User expressly acknowledges and agrees to be bound by these Terms. If the User does not concur with any provision herein, the User is required to immediately cease use of the Platform.
              </p>
              <p>
                <strong>1.3</strong> For the avoidance of doubt, the Platform merely facilitates interactions between Parents/Students and independent third-party Drivers and Van Owners. SchoolCab does not provide transportation services and assumes no role beyond that of a technological intermediary.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">2. NATURE OF PLATFORM & INTERMEDIARY STATUS</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>2.1</strong> The Company operates exclusively as a digital marketplace and intermediary as contemplated under the Information Technology Act, 2000 and the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021.
              </p>
              <p>
                <strong>2.2</strong> The Platform does not, at any point, own, operate, control, manage, or maintain any school van, bus, vehicle, transportation facility, or commuting service.
              </p>
              <p>
                <strong>2.3</strong> All transportation-related actions, including but not limited to driving, routing, safety compliance, student handling, and vehicle maintenance, are the exclusive responsibility of the respective independent Driver or Van Owner.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">3. USER CATEGORIES AND THEIR OBLIGATIONS</h2>
            <div className="space-y-6 text-muted-foreground">
              <div>
                <p className="font-semibold text-foreground mb-2">3.1 "Parent/Student Users" shall:</p>
                <ul className="list-none space-y-2 ml-6">
                  <li>(a) Furnish accurate and complete information regarding the student, residence, emergency contacts, and school details;</li>
                  <li>(b) Ensure timely and full payment of subscription or service fees;</li>
                  <li>(c) Adhere to safety directives, boarding protocols, and behavioural guidelines;</li>
                  <li>(d) Acknowledge that the Company bears no liability arising from conduct, negligence, or acts of Drivers or Van Owners.</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">3.2 "Driver Users" shall:</p>
                <ul className="list-none space-y-2 ml-6">
                  <li>(a) Possess valid licenses, permits, government-mandated certifications, and compliance documents;</li>
                  <li>(b) Maintain professional conduct, refrain from any behaviour endangering minors, and adhere to all statutory transportation norms;</li>
                  <li>(c) Keep the GPS device/app active during operational hours;</li>
                  <li>(d) Operate strictly as independent contractors with no employer–employee relationship with the Company.</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">3.3 "Van Owners" shall:</p>
                <ul className="list-none space-y-2 ml-6">
                  <li>(a) Maintain vehicle fitness, insurance, pollution certificates, safety equipment, and regulatory compliance;</li>
                  <li>(b) Ensure that only verified Drivers operate their vehicles;</li>
                  <li>(c) Accept full liability for mechanical failures, incidents, or breaches committed by their Drivers.</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">3.4 "Schools" may, where applicable:</p>
                <ul className="list-none space-y-2 ml-6">
                  <li>(a) Provide updated student lists;</li>
                  <li>(b) Facilitate operational coordination;</li>
                  <li>(c) Acknowledge that the Company is not a transport service provider.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">4. SERVICE MODALITIES</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>4.1</strong> The Platform merely provides:
              </p>
              <ul className="list-none space-y-2 ml-6">
                <li>(i) technological routing assistance;</li>
                <li>(ii) GPS-based location transparency;</li>
                <li>(iii) digital fee collection and reconciliation;</li>
                <li>(iv) communication tools for Users and Drivers;</li>
                <li>(v) onboarding and verification workflows.</li>
              </ul>
              <p>
                <strong>4.2</strong> The Company reserves the right to modify, enhance, suspend, or discontinue any component of the Platform at its exclusive discretion and without prior notice.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">5. FEES, PAYMENTS, AND BILLING</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>5.1</strong> All fee payments must be made in advance and are non-negotiable except as expressly governed under the Refund & Cancellation Policy.
              </p>
              <p>
                <strong>5.2</strong> Non-payment automatically authorizes the Company to suspend access to services without liability.
              </p>
              <p>
                <strong>5.3</strong> The Company is not responsible for the financial arrangements, agreements, or disputes between Drivers and Van Owners.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">6. DISCLAIMERS & LIMITATION OF LIABILITY</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>6.1</strong> The Company expressly disclaims all liabilities, whether direct, indirect, incidental, consequential, exemplary, or punitive, arising out of or connected with:
              </p>
              <ul className="list-none space-y-2 ml-6">
                <li>(a) vehicular accidents, breakdowns, delays, or operational lapses;</li>
                <li>(b) driver behaviour, negligence, misconduct, or omissions;</li>
                <li>(c) route deviations, traffic congestion, weather disruptions, or unforeseeable events;</li>
                <li>(d) loss of data, unauthorized access, or technical failures.</li>
              </ul>
              <p>
                <strong>6.2</strong> Under no circumstances shall the aggregate liability of the Company exceed the total subscription amount paid by the User for the month in which the claim arises.
              </p>
              <p>
                <strong>6.3</strong> The User expressly acknowledges that the Company does not assume any legal or supervisory responsibility over the transportation activity itself.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">7. INDEMNIFICATION</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>7.1</strong> The User agrees to indemnify, defend, and hold harmless the Company, its directors, employees, affiliates, and contractors from any claims, damages, losses, penalties, liabilities, or expenses arising out of:
              </p>
              <ul className="list-none space-y-2 ml-6">
                <li>(a) misuse or unauthorized use of the Platform;</li>
                <li>(b) breach of these Terms;</li>
                <li>(c) negligence or misconduct by the User;</li>
                <li>(d) disputes between Parents, Drivers, Van Owners, or Schools.</li>
              </ul>
            </div>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">8. SUSPENSION AND TERMINATION</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>8.1</strong> The Company may suspend or terminate User access without prior notice in the event of:
              </p>
              <ul className="list-none space-y-2 ml-6">
                <li>(a) policy violations;</li>
                <li>(b) fraudulent or misleading information;</li>
                <li>(c) misuse of GPS data;</li>
                <li>(d) behaviour jeopardizing safety.</li>
              </ul>
              <p>
                <strong>8.2</strong> Termination shall not obligate the Company to refund any fees unless explicitly permitted under the Refund & Cancellation Policy.
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">9. GOVERNING LAW AND JURISDICTION</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>9.1</strong> These Terms shall be governed by and construed in accordance with the laws of India.
              </p>
              <p>
                <strong>9.2</strong> Exclusive jurisdiction for disputes rests with courts located in Delhi.
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">10. SEVERABILITY</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>10.1</strong> If any clause herein is adjudicated invalid, the remaining provisions shall remain in full force and effect.
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

export default TermsAndConditions;
