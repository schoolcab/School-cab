import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
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
          <div className="inline-flex items-center bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Shield className="h-4 w-4 mr-2" />
            Privacy Policy
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mb-2">
            As Applicable to Use of the SchoolCab Digital Platform
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
                <strong>1.1</strong> This Privacy Policy ("Policy") sets forth the principles and procedures governing the collection, processing, retention, storage, transmission, disclosure, and protection of Personal Information and Sensitive Personal Data or Information ("SPDI") belonging to Users of the SchoolCab Platform ("Platform"), operated by Mukman Technologies Private Limited ("Company").
              </p>
              <p>
                <strong>1.2</strong> This Policy is framed pursuant to the Information Technology Act, 2000, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, applicable intermediary guidelines, and any other statutory mandates governing data protection within India.
              </p>
              <p>
                <strong>1.3</strong> By accessing or using the Platform, the User expressly acknowledges having read, understood, and agreed to be bound by the terms of this Policy.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">2. CATEGORIES OF INFORMATION COLLECTED</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>2.1</strong> Personal Information may include, without limitation:
              </p>
              <ul className="list-none space-y-2 ml-6">
                <li>(a) Parent/Student details: name, contact number, residential address, school information, emergency contacts, class details, and route-specific data;</li>
                <li>(b) Driver/Van Owner information: identity documents, address proofs, driving licence, permit details, vehicle documents, insurance records;</li>
                <li>(c) Operational data: GPS coordinates, routing patterns, timestamps, trip logs, attendance logs, and communication metadata;</li>
                <li>(d) Financial information: subscription payments, transaction IDs, UPI or payment gateway identifiers.</li>
              </ul>
              <p>
                <strong>2.2</strong> The Company may also collect automated data including device identifiers, IP addresses, network information, application logs, and telemetry data for monitoring, diagnostic, and analytical purposes.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">3. PURPOSE OF COLLECTION AND PROCESSING</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>3.1</strong> The Company processes User data solely for the following lawful purposes:
              </p>
              <ul className="list-none space-y-2 ml-6">
                <li>(a) Facilitation of school commute services through the Platform;</li>
                <li>(b) Allocation of routes, monitoring of GPS movements, and enhancement of operational efficiency;</li>
                <li>(c) Verification and onboarding of Drivers and Van Owners;</li>
                <li>(d) Processing and reconciliation of subscription fees;</li>
                <li>(e) Communication of service updates, safety alerts, and administrative notices;</li>
                <li>(f) Compliance with legal, regulatory, investigative, or law enforcement requirements;</li>
                <li>(g) Ensuring safety of students and maintaining service integrity.</li>
              </ul>
              <p>
                <strong>3.2</strong> No Personal Information shall be retained beyond the period necessary for fulfilment of the aforementioned purposes unless retention is mandated under applicable law.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">4. CONSENT</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>4.1</strong> By providing Personal Information voluntarily, the User grants explicit consent to the Company for its collection, processing, and usage in accordance with this Policy.
              </p>
              <p>
                <strong>4.2</strong> The User may withdraw consent; however, such withdrawal may render the User unable to access or use certain essential Platform functionalities.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">5. DISCLOSURE AND SHARING OF INFORMATION</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>5.1</strong> The Company may disclose User information strictly on a need-to-know basis to:
              </p>
              <ul className="list-none space-y-2 ml-6">
                <li>(a) Drivers, for the limited purpose of facilitating student pickup and drop services;</li>
                <li>(b) Parents/guardians, for accessing live location and service-related notifications;</li>
                <li>(c) Van Owners, for coordinating driver performance and fleet operations;</li>
                <li>(d) Payment gateway partners, for processing financial transactions;</li>
                <li>(e) Government authorities, upon lawful request or statutory obligation.</li>
              </ul>
              <p>
                <strong>5.2</strong> The Company does not sell, trade, rent, license, or commercially exploit User data to any unaffiliated third party.
              </p>
              <p>
                <strong>5.3</strong> Any third-party service provider engaged by the Company shall be contractually obligated to maintain confidentiality and adopt reasonable security measures.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">6. DATA SECURITY AND PROTECTION MEASURES</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>6.1</strong> The Company adopts reasonable security practices including, but not limited to:
              </p>
              <ul className="list-none space-y-2 ml-6">
                <li>(a) encryption of data in transit;</li>
                <li>(b) restricted and role-based access to systems;</li>
                <li>(c) routine audits and logging;</li>
                <li>(d) secure cloud-based storage infrastructure;</li>
                <li>(e) monitoring for unauthorized access or anomalous activity.</li>
              </ul>
              <p>
                <strong>6.2</strong> While the Company employs prudent protocols, it disclaims liability for breaches arising from circumstances beyond reasonable control including hacking, cyber-attacks, system failures, or third-party vulnerabilities.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">7. USER RIGHTS</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>Subject to applicable laws, the User may:</p>
              <ul className="list-none space-y-2 ml-6">
                <li>(a) request correction of inaccurate information;</li>
                <li>(b) request deletion of data no longer required for business purposes;</li>
                <li>(c) seek clarification regarding data usage;</li>
                <li>(d) withdraw consent for future processing.</li>
              </ul>
              <p>
                <strong>7.1</strong> The Company reserves the right to deny requests that are frivolous, repetitive, conflict with legal obligations, or jeopardize the integrity of its security systems.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">8. RETENTION OF DATA</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>8.1</strong> Data shall be retained only for the duration necessary for legitimate business needs, contractual obligations, compliance, or dispute resolution.
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">9. GRIEVANCE REDRESSAL</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>9.1</strong> Pursuant to Rule 5(9) of the SPDI Rules, the Company designates the following Grievance Officer:
              </p>
              <div className="bg-muted/50 p-4 rounded-lg mt-2">
                <p><strong>Name:</strong> Pankaj Talan</p>
                <p><strong>Email:</strong> admin@schoolcab.in</p>
                <p><strong>Address:</strong> A-39, Nirmal Vihar, Najafgarh, New Delhi</p>
              </div>
              <p>
                <strong>9.2</strong> Complaints shall be acknowledged within the statutory time frame and resolved in accordance with applicable law.
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">10. AMENDMENTS</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>10.1</strong> The Company reserves absolute discretion to modify, revise, update, or replace this Policy. Updated versions shall be published on the Platform and shall take effect immediately upon publication.
              </p>
            </div>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">11. GOVERNING LAW</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>11.1</strong> This Policy shall be governed by and interpreted in accordance with the laws of India.
              </p>
              <p>
                <strong>11.2</strong> All disputes arising hereunder shall be subject to the exclusive jurisdiction of courts situated in Delhi.
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

export default PrivacyPolicy;
