import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Church Street Studio in Greenville, TX.",
};

const faqs = [
  {
    question: "Where are you located?",
    answer:
      "We're right in Greenville, Texas, just a couple of blocks from downtown. 2404 Church Street, Greenville, TX 75401.",
  },
  {
    question: "How do I book?",
    answer:
      "Choose your service type and dates on our Book page. Full calendar booking with online payments is coming soon. For now, email us at churchstreetstudiotx@gmail.com and we'll get you set up.",
  },
  {
    question: "Do you allow overnight bookings?",
    answer:
      "Yes! We offer overnight stays with 2 queen beds and 1 twin Murphy bed. Book directly through our site for the best rates.",
  },
  {
    question: "How much parking do you have?",
    answer:
      "We've got parking for 3-4 cars in the front yard and a large backyard driveway that can handle 4-5 more vehicles. 7-8 cars total.",
  },
  {
    question: "What do you have going on in the backyard?",
    answer:
      "A little bit of everything: basketball, recreational pickleball, covered seating with a TV, bikes, cornhole, beer pong, a hammock, and a fenced yard for privacy.",
  },
  {
    question: "Are pets welcome?",
    answer:
      "Absolutely! We're pet-friendly, but please make sure to clean up after your pets.",
  },
  {
    question: "Is there a full kitchen?",
    answer:
      "Not yet. We've got a solid kitchenette: microwave, toaster oven, air fryer, Keurig, regular toaster, plus a gas grill outside. Full kitchen is on our future upgrade list.",
  },
  {
    question: "What's included in my stay?",
    answer:
      "Full access to the property and backyard, no matter what rental option you choose. Make yourself at home.",
  },
  {
    question: "Is smoking allowed?",
    answer:
      "Please keep smoking to outside only. We've built a smoker-friendly outdoor space so you can still relax and enjoy.",
  },
  {
    question: "Is the space private?",
    answer:
      "Yes. You'll have the entire house and fenced backyard to yourself during your booking.",
  },
  {
    question: "Do you have WiFi?",
    answer:
      "Fast, reliable internet for streaming, remote work, or just staying connected.",
  },
  {
    question: "Do you allow parties?",
    answer:
      "We're a great spot for small events and gatherings. We're happy to host your party. Just select your appropriate group size when booking.",
  },
  {
    question: "What makes it good for remote work?",
    answer:
      "We've got two rolling desks (one is an electric standing desk), two rolling chairs, a 20\" monitor, keyboard and mouse combo, plus a big 75\" TV if you want to hook up for presentations or multi-screen work.",
  },
  {
    question: "Do you have outdoor games?",
    answer:
      "Yep: cornhole, beer pong, basketball, and even recreational pickleball.",
  },
];

export default function FAQPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-muted text-lg">
            Everything you need to know before you book.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="p-6 rounded-xl border border-border bg-surface hover:border-accent/20 transition-colors"
            >
              <h2 className="text-lg font-semibold mb-2">{faq.question}</h2>
              <p className="text-foreground/70 text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="text-center p-8 rounded-xl border border-border bg-surface">
          <h2 className="text-2xl font-bold mb-3">Still Have Questions?</h2>
          <p className="text-muted mb-6">
            Hit us up directly and we'll get back to you quick.
          </p>
          <a
            href="mailto:churchstreetstudiotx@gmail.com"
            className="inline-block px-8 py-4 bg-accent text-background font-semibold rounded-lg hover:bg-accent-hover transition-colors"
          >
            Email Us
          </a>
        </div>
      </div>
    </div>
  );
}
