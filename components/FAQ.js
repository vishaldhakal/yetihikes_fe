"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FAQ = () => {
  const [showAll, setShowAll] = useState(false);
  const faqRef = useRef(null);

  const visibleFAQs = showAll ? faqData : faqData.slice(0, 3);

  const toggleView = () => {
    setShowAll(!showAll);
  };

  useEffect(() => {
    if (faqRef.current) {
      faqRef.current.style.maxHeight = showAll
        ? `${faqRef.current.scrollHeight}px`
        : "600px";
    }
  }, [showAll]);

  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Have a question in mind? Check out our FAQ section to find the
            answer.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-8 md:mt-16 relative">
          <div
            ref={faqRef}
            className="space-y-4 overflow-hidden transition-all duration-500 ease-in-out"
            style={{ maxHeight: "600px" }}
          >
            <Accordion type="single" collapsible className="w-full">
              {visibleFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-semibold text-black">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {!showAll && (
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>
          )}
        </div>

        <div className="flex justify-center mt-8">
          <Button
            variant="outline"
            onClick={toggleView}
            className="text-gray-600 border-gray-600 hover:bg-gray-800 hover:text-white"
          >
            {showAll ? "View Less" : "View More FAQs"}
          </Button>
        </div>

        <div className="flex justify-center">
          <Button
            asChild
            className="inline-flex text-white hover:bg-blue-700 bg-blue-600 justify-center mt-8"
          >
            <Link href="#contact">Apply Now</Link>
          </Button>
        </div>

        <p className="text-center text-gray-600 text-base mt-9">
          Didn't find the answer you are looking for?{" "}
          <Link
            href="/#contact"
            className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
          >
            Contact our support
          </Link>
        </p>
      </div>
    </section>
  );
};

const faqData = [
  {
    question: "What is a Commission Advance?",
    answer:
      "A Commission Advance is a service where we purchase your commissions at a reasonable and affordable discount, allowing you to get paid without waiting for months until your transaction closes. This service helps you with better cash flow management.",
  },
  {
    question: "Why should I advance my commissions?",
    answer:
      "As a real estate agent, you're an independent contractor with unpaid commissions as “receivables.” Advancing your commissions is a cost-effective way to finance your business, covering selling costs and personal expenses while you wait for deals to close. Many businesses in other industries also use the sale of receivables to fund their operations quickly.",
  },
  {
    question: "Why choose iCommission?",
    answer:
      "iCommission is built by agents for agents. We are an innovative Canadian Commission Advance company offering fast, effective, and transparent services. We are a reliable partner who understands your business and needs. Our state-of-the-art system ensures quick advances with minimal restrictions. We have serviced prestigious brokerages such as Bay Street Group and their affiliates and they love our efficient service.",
  },
  {
    question: "How quickly can I set up a new account with iCommission?",
    answer:
      "Our dedicated team will set up your account swiftly. Once we receive your application and required documents, we aim to approve and set up your account within one hour during business hours.",
  },
  {
    question: "How quickly can my advance get processed?",
    answer:
      "We aim to provide funds the same day. After receiving a complete Commission Advance request, we send out a Commission Purchase Agreement within one hour during business hours. If the signed contract and all necessary documents are returned by 1 PM EST, funds are deposited between 4:30 PM and 6:30 PM EST. If received between 1 PM and 6 PM EST, funds are deposited between 9 PM and 11 PM EST the next day.",
  },
  {
    question: "Does my brokerage need to be registered with you?",
    answer:
      "Most brokerages in Canada are already registered with us. If not, we will quickly set them up when you register.",
  },
  {
    question: "Does my brokerage need to sign anything?",
    answer:
      "Yes, both you and your broker of record need to sign our Commission Purchase Agreement.",
  },
  {
    question: "When can I apply for a Commission Advance?",
    answer:
      "You can apply for an advance once your deal goes firm, meaning all conditions have been waived.",
  },
  {
    question:
      "What types of real estate transactions qualify for a commission advance?",
    answer:
      "We advance on most real estate deals, including residential resales and leases, commercial sales and leases, industrial sales and leases, and new home and pre-constructions*.",
  },
  {
    question: "Is there a maximum size commission that you advance?",
    answer: "Yes, each advance is capped at $30,000.",
  },
  {
    question: "How much of my commission can I advance?",
    answer:
      "You can advance up to 90% of your net commission (before HST/GST) on residential resale deals and up to 80% on all other types of deals, exceptions may apply.",
  },
  {
    question: "Do you have restrictions on the timing of closing?",
    answer:
      "No, we do not have any restrictions or limitations for the timing to close. We consider all deals, even with long closing periods.",
  },
  {
    question: "Do you require a minimum deposit size?",
    answer: "No, we do not require a minimum deposit size.",
  },
  {
    question: "Will you check my credit history?",
    answer:
      "No, we do not conduct credit checks on your personal credit history.",
  },
  {
    question: "Where is your service available?",
    answer: "We advance across Canada, except for Quebec.",
  },
  {
    question: "Will my information be kept confidential?",
    answer:
      "Yes, we handle all information with absolute discretion and privacy. Our online submission process is secure, and your data will not be sold.",
  },
  {
    question: "Are there any reserve holdbacks or admin fees?",
    answer:
      "No, our pricing is competitive with no hidden costs, reserve holdbacks, or admin fees.",
  },
  {
    question: "How much does a Commission Advance cost?",
    answer:
      "We charge a flat daily discount rate with no hidden fees. It may vary depending on prime rate, currently it’s at $0.75 per $1,000 per day. The number of days is calculated from the day of funding to the closing date, plus 10 days to account for delayed processing times.",
  },
  {
    question: "How do you fund my advance?",
    answer:
      "Funds are transferred to your account via Electronic Funds Transfer (EFT) using the void cheque you provided for efficiency.",
  },
  {
    question: "Do you work with new agents?",
    answer: "Yes, we assist new agents in growing their business.",
  },
  {
    question: "Do you advance brokers of record?",
    answer: "We do advance brokers of records, some conditions may apply.",
  },
  {
    question:
      "Do you advance on commercial/industrial deals and pre-construction?",
    answer:
      "Yes, we advance on most commercial, industrial, and condo/pre-construction deals, submit your advance request now.",
  },
  {
    question: "Can I advance more than one deal at a time?",
    answer: "Yes, there is no maximum number of concurrent advances.",
  },
  {
    question: "How do you collect charges?",
    answer:
      "Charges are deducted from the Purchased Commission amount, and the net amount is funded to you.",
  },
  {
    question: "Are your fees tax-deductible?",
    answer:
      "Many clients deduct our fees for business purposes. Consult your accountant for specifics. We can provide an annual summary statement upon request.",
  },
  {
    question: "How do I repay the Purchased Commission?",
    answer: "Your brokerage will remit payment to us after the deal closes.",
  },
  {
    question:
      "What happens if the closing date is extended or the deal falls through?",
    answer:
      "Notify us immediately of any changes. We may extend the payment due date with an additional fee if necessary. If the deal falls through, repayment plans can be arranged to ensure your business operations continue smoothly.",
  },
  {
    question: "Is my brokerage liable if my sale falls through?",
    answer:
      "No, our agreement indemnifies brokerage from liability if the sale falls through or commissions are not collected. It’ll be your personal responsibility to repay this advanced amount.",
  },
];

export default FAQ;
