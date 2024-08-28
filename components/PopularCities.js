import React from "react";
import Link from "next/link";

const cities = [
  { name: "Kathmandu", image: "/cities/kathamdnu.jpeg" },
  { name: "Pokhara", image: "/cities/pokhara.jpeg" },
  { name: "Chitwan", image: "/cities/chitwan.png" },
  { name: "Everest Region", image: "/cities/everest-region.jpeg" },
];

function PopularCities() {
  return (
    <section className="py-12 mb-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-2">
          Serving travellers all across Nepal
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Find package of your choice
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cities.map((city) => (
            <Link href={`/`} key={city.name} className="group">
              <div className="relative overflow-hidden rounded-lg shadow-md aspect-w-16 aspect-h-9">
                <img
                  src={city.image}
                  alt={`${city.name} cityscape`}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold">{city.name}</h3>
                  <p className="text-sm">Trekking Packages</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularCities;
