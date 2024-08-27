import ApplicationProcessFlow from "@/components/ApplicationProcessFlow";
import FAQ from "@/components/FAQ";
import VideoEmbed from "@/components/VideoEmbed";
import CommissionAdvanceCalculator from "@/components/CommissionCalculator";
import ContactUs from "@/components/ContactUs";

export const metadata = {
  title: "How iCommission Works | Easy Commission Advance Process for Realtors",
  description:
    "Discover how iCommission's streamlined process makes getting a commission advance simple. Learn about our advance types, application process, and watch our explainer video.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "How iCommission Works | Simple Commission Advances for Realtors",
    description:
      "Learn about iCommission's easy process, advance types, and quick application. Watch our video to see how we help realtors access their commissions faster.",
    url: "https://icommission.ca/how-it-works",
    siteName: "iCommission",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How iCommission Works | Fast & Easy Realtor Commission Advances",
    description:
      "Explore iCommission's simple process, various advance types, and quick application. See how we're revolutionizing commission advances for realtors.",
    creator: "@iCommission_",
  },
  canonical: "https://icommission.ca/how-it-works",
};

function ServicesPage() {
  return (
    <div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Video Section */}
        <section className="mb-20 md:mb-40 mt-10" id="overview">
          <div className="flex justify-center">
            <div className="relative inline-flex mb-10">
              <span class="absolute inset-x-0 bottom-0 border-b-[5px] border-[#fff12b] w-1/3 mx-auto md:w-full"></span>
              <h2 className="text-4xl font-black text-center">
                How iCommission Works
              </h2>
            </div>
          </div>
          <VideoEmbed url="https://www.youtube.com/embed/7YtyOyJywac?si=0fwO8HP1U_z_OqW5" />
        </section>

        {/* Advance Types Section */}
        <section className="my-40" id="advance-types">
          <h2 className="text-4xl font-black mb-10 text-center">
            Advance Types
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-center md:text-start">
                Resale/Commercial/Leasing
              </h3>
              <p className="text-center md:text-start">
                Up to 90% of the agent's portion of the commission, capped at
                $40,000 per deal.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4 text-center md:text-start">
                Pre-Construction Advances
              </h3>
              <p className="text-center md:text-start">
                10-20% of total commissions.
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-600 text-center">
            <span className="text-red-500">*</span> Some terms and conditions
            may apply.
          </p>
        </section>
        <div className="mb-20"></div>
        {/* Cost Calculator Section */}
        <div id="cost-calculator">
          <CommissionAdvanceCalculator />
        </div>
        <div className="mb-40"></div>
        {/* Application Process Section */}
        <section className="mb-16" id="application-process">
          <ApplicationProcessFlow />
        </section>
        <section className="mb-16" id="faq">
          <FAQ />
        </section>
      </main>
      <section className="my-20">
        <ContactUs />
      </section>
      <div className="mb-40"></div>
    </div>
  );
}

export default ServicesPage;
