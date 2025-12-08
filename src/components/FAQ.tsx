import { HelpCircle, Mail, Phone } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ_DATA = [
    {
        question: "What is SchoolCab?",
        answer: `SchoolCab is a smart and safe school-cab management app that connects parents with verified drivers and vans for daily school commuting.

You can track the cab live, pay monthly fees easily, and receive updates — all in one app.`,
    },
    {
        question: "How does SchoolCab work?",
        answer: `• Drivers register with all valid documents
• SchoolCab verifies their details and GPS
• Parents subscribe monthly
• The driver picks up and drops the student daily
• Parents track everything in the app in real-time`,
    },
    {
        question: "Is SchoolCab available in my area?",
        answer: `We operate route-wise.

Once you enter your home address and school name, the app will show available vans serving your route.`,
    },
    {
        question: "How do I contact support?",
        answer: `You can always reach us at:

📧 Email: admin@schoolcab.in
📞 Phone: 9560090431`,
    },
    {
        question: "Are the drivers verified?",
        answer: `Yes. All drivers undergo:

✔ ID verification
✔ Driving licence check
✔ Vehicle document check
✔ Background screening

We onboard only those who meet our standards.`,
    },
    {
        question: "Is live tracking available?",
        answer: `Yes.

You can track your child's cab in real-time from pickup to drop.`,
    },
    {
        question: "What safety measures are in place in the vans?",
        answer: `Every van is required to have:

• First-aid kit
• GPS tracking
• Valid fitness certificate
• Clean seating
• Speed governor`,
    },
    {
        question: "What if the driver changes suddenly?",
        answer: `You will receive a notification in the app.

Only verified drivers are allowed to operate.`,
    },
    {
        question: "What if the cab is late?",
        answer: `Sometimes traffic or weather delays can happen.

You can track the cab through the app and also receive any important updates.`,
    },
    {
        question: "How do I pay the monthly fee?",
        answer: `You can pay through the app using:

✔ UPI
✔ Debit/Credit card
✔ Net banking`,
    },
    {
        question: "Who decides the pickup & drop timings?",
        answer: `The route is planned based on:

• Your school timing
• Nearby students
• Traffic feasibility

Exact timing is shown in the app.`,
    },
    {
        question: "What if my child is absent for a day?",
        answer: `Just let the driver know directly. Or update us on our contact details.

There is no change in the monthly fee for absence.`,
    },
    {
        question: "What if I want to change the pickup location?",
        answer: `Routes are fixed for efficiency.

Small adjustments may be considered depending on the driver's approval.`,
    },
    {
        question: "How do I track my child's cab?",
        answer: `Open the SchoolCab app → Go to Track Driver section → View live location.`,
    },
    {
        question: "Will I get notifications?",
        answer: `Yes! You'll get updates for:

• Cab arrival
• Pickup done
• Drop completed
• Route changes
• Driver changes`,
    },
    {
        question: "Do I need to register again every month?",
        answer: `No.

Subscription renews automatically when you pay the monthly fee.`,
    },
    {
        question: "Can more than one parent track the cab?",
        answer: `Yes.

Both parents can log in using the same student account.`,
    },
];

const FAQ = () => {
    return (
        <section id="faq" className="py-20 bg-soft-gray">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12 animate-fade-in">
                    <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <HelpCircle className="h-4 w-4 mr-2" />
                        Got Questions?
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Everything you need to know about SchoolCab. Can't find the answer you're looking for? Contact our support team.
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {FAQ_DATA.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="bg-card rounded-xl px-6 border border-border shadow-soft data-[state=open]:shadow-medium transition-shadow"
                            >
                                <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-foreground hover:no-underline hover:text-primary py-5">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground whitespace-pre-line leading-relaxed">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                {/* Contact CTA */}
                <div className="text-center mt-12">
                    <p className="text-muted-foreground mb-4">Still have questions?</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="mailto:admin@schoolcab.in"
                            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                        >
                            <Mail className="h-5 w-5" />
                            Email Us
                        </a>
                        <a
                            href="tel:9560090431"
                            className="inline-flex items-center gap-2 bg-card border border-border text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-muted transition-colors"
                        >
                            <Phone className="h-5 w-5" />
                            Call Us
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
