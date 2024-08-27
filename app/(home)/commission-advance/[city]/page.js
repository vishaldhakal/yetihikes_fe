import ContactUs from "@/components/ContactUs";
import GetStarted from "@/components/GetStarted";
import HeroSection from "@/components/HeroSection";
import PopularCities from "@/components/PopularCities";
import UnLockSection from "@/components/UnLockSection";
import VideoEmbed from "@/components/VideoEmbed";
import WhyUs from "@/components/WhyUs";
import { notFound } from "next/navigation";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export async function generateMetadata({ params }, parent) {
  const city = capitalizeFirstLetter(params.city);
  return {
    title: `Commission Advance in ${city} | iCommission`,
    description: `Need a commission advance in ${city}? iCommission offers fast and reliable commission advance services for ${city} real estate agents. Get your earnings now!`,
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon-16x16.png",
      apple: "/apple-touch-icon.png",
    },
    openGraph: {
      title: `Commission Advance in ${city} | iCommission`,
      description: `Fast commission advances for ${city} real estate agents. Get your earnings now with iCommission!`,
      url: `https://icommission.ca/commission-advance/${city}`,
      siteName: "iCommission",
      locale: "en_CA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Commission Advance in ${city} | iCommission`,
      description: `${city} realtors, get your commissions advanced quickly with iCommission. Fast, reliable service for real estate professionals.`,
      creator: "@iCommission_",
    },
    canonical: `https://icommission.ca/commission-advance/${city}`,
  };
}

export default function CityPage({ params }) {
  const cities = [
    "toronto",
    "mississauga",
    "calgary",
    "edmonton",
    "vancouver",
    "winnipeg",
    "regina",
    "brampton",
  ];
  //return 404 if not in above cities
  if (!cities.includes(params.city)) {
    return notFound();
  }

  return (
    <>
      <HeroSection city={capitalizeFirstLetter(params.city)} />
      <div className="my-40">
        <VideoEmbed url="https://www.youtube.com/embed/7YtyOyJywac?si=0fwO8HP1U_z_OqW5" />
      </div>
      <UnLockSection />
      <WhyUs />
      <GetStarted />
      <PopularCities />
      <ContactUs />
    </>
  );
}
