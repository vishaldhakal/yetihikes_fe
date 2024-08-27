import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Instagram, Twitter, Facebook, Youtube } from "lucide-react";
import TestimonialScroll from "@/components/TestimonialScroll";
import ContactUs from "@/components/ContactUs";

export const metadata = {
  title: "About iCommission | Leading Commission Advance Company for Realtors",
  description:
    "iCommission is Canada's premier commission advance company for real estate professionals. Learn about our mission, values, and how we're revolutionizing realtor financing.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "About iCommission | Leading Commission Advance Company",
    description:
      "Discover how iCommission is transforming realtor financing with fast, reliable commission advances. Learn about our company, mission, and values.",
    url: "https://icommission.ca/company",
    siteName: "iCommission",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About iCommission | Premier Realtor Commission Advance Service",
    description:
      "iCommission: Empowering real estate professionals with innovative financing solutions. Learn about our commitment to your success.",
    creator: "@iCommission_",
  },
  canonical: "https://icommission.ca/company",
};

const AboutAndSocialPage = () => {
  return (
    <div className="mb-40 mt-10">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* About Section */}
        <section className="mb-16" id="company">
          <h1 className="text-4xl font-bold text-center mb-8">
            About iCommission
          </h1>
          <div className="flex justify-center">
            <img className="w-auto h-24 text-center" src="/logo.png" alt="" />
          </div>
          <Card className="border-0 max-w-4xl mx-auto">
            <CardContent className="p-6">
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                iCommission is a leading Canadian commission advance company,
                providing fast and efficient financial solutions for real estate
                professionals. Our innovative platform allows agents to access
                their hard-earned commissions quickly, supporting their business
                growth and cash flow management.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4 text-center">
                Founded by industry experts, we understand the unique challenges
                faced by real estate agents. Our mission is to empower agents
                with the financial flexibility they need to thrive in a
                competitive market.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Reviews Section */}
        <section className="mt-10 mb-20" id="reviews">
          <TestimonialScroll />
        </section>

        {/* Review Us Badge */}
        <section className="mb-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Loved our service?</h2>
          <div
            className="trustpilot-widget flex justify-start mt-4"
            data-locale="en-US"
            data-template-id="56278e9abfbbba0bdcd568bc"
            data-businessunit-id="66981487a28d00325aacceea"
            data-style-height="52px"
            data-style-width="100%"
          >
            <a
              href="https://www.trustpilot.com/review/icommission.ca"
              target="_blank"
              rel="noopener"
            >
              Trustpilot
            </a>
          </div>
        </section>

        {/* Social Media Section */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8">
            Connect with us
          </h2>
          <div className="flex justify-center space-x-6">
            <Link
              href="https://www.linkedin.com/company/icommission/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-8 h-8" />
            </Link>
            <Link
              href="https://www.instagram.com/icommission_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-8 h-8 " />
            </Link>
            <Link
              href="https://x.com/iCommission_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-8 h-8 " />
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=61563112392385"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="w-8 h-8 " />
            </Link>
            <Link
              href="https://www.youtube.com/channel/UC3NQSXJzHVqSXuSo3lH9idQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube className="w-8 h-8 " />
            </Link>
          </div>
        </section>
      </main>
      <section className="my-20">
        <ContactUs />
      </section>
    </div>
  );
};

export default AboutAndSocialPage;
