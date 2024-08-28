import ContactUs from "@/components/ContactUs";
import GetStarted from "@/components/GetStarted";
import HeroSection from "@/components/HeroSection";
import PopularCities from "@/components/PopularCities";
import UnLockSection from "@/components/UnLockSection";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "WebSite",
            name: "Yeti Hikes",
            url: "https://yetihikes.com",
            description: "Yeti Hikes - Travel and Tourism Agency in Nepal",
            image: "https://yetihikes.com/logo.svg",
            sameAs: [
              "https://www.facebook.com/profile.php?id=61561912073901&mibextid=ZbWKwL",
              "https://www.instagram.com/yeti_hikes?igsh=c2l1emZ3ZDByazA0",
              "https://www.linkedin.com/company/yeti-hikes/",
              "https://www.tripadvisor.com/Attraction_Review-g293890-d28127088-Reviews-Yeti_Hikes_Pvt_Ltd-Kathmandu_Kathmandu_Valley_Bagmati_Zone_Central_Region.html",
            ],
            potentialAction: {
              "@type": "SearchAction",
              target: "https://yetihikes.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+977 986‑1145476",
              contactType: "customer support",
            },
            openingHours: "Mo-Su 08:00-20:00",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Pankajol Marg, Thamel",
              addressLocality: "Kathmandu",
              addressRegion: "Bagmati",
              postalCode: "44600",
              addressCountry: "NP",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            name: "Yeti Hikes",
            alternateName: "Yeti Hikes Travel and Tourism",
            url: "https://yetihikes.com",
            logo: "https://yetihikes.com/logo.svg",
            description:
              "Travel and tourism agency specializing in Nepal adventures",
          }),
        }}
      />
      <HeroSection />
      <UnLockSection />
      <WhyUs />
      <GetStarted />
      <PopularCities />
      <ContactUs />
    </>
  );
}
