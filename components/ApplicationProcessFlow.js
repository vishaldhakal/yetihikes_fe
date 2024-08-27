import React from "react";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

const ProcessStep = ({ title, description, number }) => (
  <div className="flex items-start mb-20 last:mb-0">
    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg mr-4">
      {number}
    </div>
    <div className="flex-grow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
    <CheckCircle className="w-6 h-6 text-green-500 ml-4 flex-shrink-0" />
  </div>
);

function ApplicationProcessFlow() {
  const steps = [
    {
      title: "Quick Application",
      description:
        "Complete a simple online application in minutes, with no credit check required.",
    },
    {
      title: "Free Quote",
      description:
        "Get a free quote to understand how much you're eligible for and what's the cost breakdown for the advance.",
    },
    {
      title: "Instant Payout",
      description:
        "Accept the quote and receive your funds in as little as one hour.",
    },
    {
      title: "Seamless Repayment",
      description:
        "Enjoy convenient and confidential automatic repayment upon closing.",
    },
    {
      title: "Best Rates",
      description: "Benefit from our industry-leading best rates guarantee.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-extrabold text-center mb-20">
        Our Simple Application Process
      </h2>
      <div className="relative">
        {steps.map((step, index) => (
          <ProcessStep
            key={index}
            title={step.title}
            description={step.description}
            number={index + 1}
          />
        ))}
      </div>
      <div className="text-center mt-10">
        <Link
          href="#contact"
          className="bg-blue-500 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-600 transition duration-300"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
}

export default ApplicationProcessFlow;
