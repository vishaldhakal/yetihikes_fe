import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    location: "USA",
    text: "Yeti Hikes made my dream of trekking to Everest Base Camp a reality. Their guides were knowledgeable, patient, and always prioritized our safety. The views were breathtaking, and the cultural experiences along the way were unforgettable. I can't recommend Yeti Hikes enough!",
    experience: "April 15, 2024",
    image: "/reviews/1.jpeg",
  },
  {
    name: "Raj P.",
    location: "India",
    text: "As an experienced trekker, I was impressed by Yeti Hikes' professionalism and attention to detail. Our Annapurna Circuit trek was perfectly organized, from the pre-trip briefing to the post-trek celebration. The local insights provided by our guide added so much value to the journey.",
    experience: "May 22, 2024",
    image: "/reviews/4.avif",
  },
  {
    name: "Emma L.",
    location: "UK",
    text: "Yeti Hikes went above and beyond during our Langtang Valley trek. When unexpected weather hit, they quickly adjusted our itinerary to ensure we still had an amazing experience. Their commitment to responsible tourism and supporting local communities really stood out to me.",
    experience: "March 8, 2024",
    image: "/reviews/3.webp",
  },
  {
    name: "Hiroshi T.",
    location: "Japan",
    text: "The Manaslu Circuit trek with Yeti Hikes was life-changing. Our guide's expertise in high-altitude trekking was crucial, and the tea house accommodations they arranged were comfortable and authentic. Yeti Hikes made this challenging trek accessible and enjoyable for our group.",
    experience: "June 3, 2024",
    image: "/reviews/2.jpg",
  },
];

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center justify-center mb-4">
      <div className="w-10 h-10 bg-blue-300 rounded-full flex items-center justify-center text-white font-bold mr-3">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="h-9 rounded-full w-9 object-cover object-left-top"
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
