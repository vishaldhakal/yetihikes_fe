import ContactUs from "@/components/ContactUs";
import GetStarted from "@/components/GetStarted";
import HeroSection from "@/components/HeroSection";
import PopularCities from "@/components/PopularCities";
import UnLockSection from "@/components/UnLockSection";
import VideoEmbed from "@/components/VideoEmbed";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <div className="my-20 md:my-40">
        <VideoEmbed url="https://www.youtube.com/embed/7YtyOyJywac?si=0fwO8HP1U_z_OqW5" />
      </div> */}
      <UnLockSection />
      <WhyUs />
      <GetStarted />
      <PopularCities />
      <ContactUs />
    </>
  );
}
