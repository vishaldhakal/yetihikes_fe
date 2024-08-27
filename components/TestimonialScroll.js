import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Diana S.",
    location: "US",
    text: "iCommissions is super easy to work with. Fast and same day payment. Highly recommend. All brokerages should work with a company like them so their agents can have a peace of mind.",
    experience: "August 07, 2024",
    image: "/reviews/1.png",
  },
  {
    name: "Meta Realty",
    location: "CA",
    text: "As the broker owner of Meta Realty, we're always committed to providing the best service to our 120 agents. iCommission has been great to work with. They provide quick commission advances at very competitive rates so our agents can access their commission faster allowing them to further grow their business.",
    experience: "July 19, 2024",
    image: "/reviews/2.png",
  },
  {
    name: "Shruti O.",
    location: "CA",
    text: "Icommission has helped me financially in today's market. I get the advance within 48 hours. The process is seemless and is handled efficiently by the brokerage. Chris and his team is very transparent and believes in open communication and feedback.",
    experience: "June 15, 2024",
    image: "/reviews/3.png",
  },
  {
    name: "Tony S.",
    location: "CA",
    text: "They were able to provide me a commission advance within a couple of hours of requesting it. It was a quick and easy process and they're a lot cheaper than other commission advance services. I would use them again and refer them to anybody who asks.",
    experience: "June 28, 2024",
    image: "/reviews/4.png",
  },
];

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center justify-center mb-4">
      <div className="w-10 h-10 bg-blue-300 rounded-full flex items-center justify-center text-white font-bold mr-3">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="h-9 rounded-full"
        />
      </div>
      <div>
        <h3 className="font-semibold text-gray-800 text-md">
          {testimonial.name}
        </h3>
      </div>
    </div>
    <div className="flex justify-center mb-2">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
      ))}
    </div>
    <p className="text-gray-600 mb-4 text-xs text-center leading-5">
      {testimonial.text}
    </p>
  </div>
);

const TestimonialGrid = () => {
  return (
    <section className="py-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            What our customers say
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Don't just take our word for it - hear from some of our satisfied
            customers
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialGrid;
