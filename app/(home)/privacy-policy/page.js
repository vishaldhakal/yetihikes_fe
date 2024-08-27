import Head from "next/head";
import ContactUs from "@/components/ContactUs";

export const metadata = {
  title: "Privacy Policy | iCommission",
  description:
    "Read iCommission's Privacy Policy to understand how we collect, use, and protect your personal information. We are committed to safeguarding your privacy and ensuring transparency in our data practices.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Privacy Policy | iCommission",
    description:
      "Learn about iCommission's commitment to protecting your privacy. Our policy outlines how we handle your personal information with care and transparency.",
    url: "https://icommission.ca/privacy-policy",
    siteName: "iCommission",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "iCommission Privacy Policy",
    description:
      "Discover how iCommission protects your personal information. Our Privacy Policy ensures transparency and compliance in our data handling practices.",
    creator: "@iCommission_",
  },
  canonical: "https://icommission.ca/privacy-policy",
};

export default function Privacy() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <h1 className="text-3xl font-bold text-center mb-8">Privacy Policy</h1>

        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">
            Our Commitment to Privacy
          </h2>
          <p className="mb-4">
            iCommission is committed to respecting the privacy of individuals
            and recognizes a need for the appropriate management and protection
            of any personal information that you agree to provide to us.
          </p>
          <p className="mb-4">
            We will not share your information with any third party outside of
            our organization, other than as necessary to fulfill your request.
          </p>
          <p>
            Your privacy is extremely important to us. The trust placed in us by
            our customers is absolutely essential to our success. We understand
            that and do all we can to earn and protect that trust.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">
            Information Collection and Use
          </h2>
          <p className="mb-4">
            We do not share your personal information with any outside companies
            nor collect any information.
          </p>
          <p>We do not keep a mailing list nor distribute a newsletter.</p>
        </div>
      </main>
      <section className="my-20">
        <ContactUs />
      </section>
      <div className="pb-40"></div>
    </div>
  );
}
