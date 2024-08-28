import React from "react";
import { Zap, Award, Users, Cpu } from "lucide-react";

const FeatureItem = ({ icon: Icon, title }) => (
  <div className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
    <div className="flex-shrink-0 p-2 bg-blue-100 rounded-full">
      <Icon className="w-6 h-6 text-blue-600" />
    </div>
    <p className="ml-3 text-sm font-medium text-gray-800">{title}</p>
  </div>
);

const FeatureList = () => {
  const features = [
    { icon: Zap, title: "7 Years+ Experience" },
    { icon: Award, title: "Best rates guaranteed" },
    { icon: Users, title: "Value-added business support" },
    { icon: Cpu, title: "Experience Driven operation" },
  ];

  return (
    <section className="w-full max-w-4xl mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <FeatureItem key={index} icon={feature.icon} title={feature.title} />
        ))}
      </div>
    </section>
  );
};

export default FeatureList;
