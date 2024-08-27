import React from "react";
import Link from "next/link";
import {
  AlertCircle,
  Home,
  HelpCircle,
  Star,
  BookOpen,
  ArrowRight,
} from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center mb-40">
      <div className="max-w-2xl w-full px-6 py-12 bg-white shadow-lg rounded-xl text-center">
        <div className="flex justify-center mb-6">
          <AlertCircle size={80} className="text-blue-500" />
        </div>
        <h1 className="text-7xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          The page you're looking for seems to have vanished into thin air.
        </p>

        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition duration-300"
          >
            <Home size={20} className="mr-2" />
            Back to Homepage
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
          <QuickLink
            href="/how-it-works"
            icon={<HelpCircle size={24} />}
            text="How it Works"
          />
          <QuickLink
            href="/how-it-works#faq"
            icon={<BookOpen size={24} />}
            text="FAQ"
          />
          <QuickLink
            href="/company#reviews"
            icon={<Star size={24} />}
            text="Reviews"
          />
          <QuickLink
            href="/resources#blog"
            icon={<BookOpen size={24} />}
            text="Blog"
          />
        </div>
      </div>
    </div>
  );
};

const QuickLink = ({ href, icon, text }) => (
  <Link
    href={href}
    className="flex items-center p-3 bg-blue-50 rounded-lg text-gray-700 hover:bg-blue-100 transition duration-300"
  >
    {icon}
    <span className="ml-2 font-medium">{text}</span>
    <ArrowRight size={16} className="ml-auto text-blue-500" />
  </Link>
);

export default NotFoundPage;
