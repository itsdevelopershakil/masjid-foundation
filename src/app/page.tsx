import AboutSection from "../components/homepage/AboutSection";
import BlessingSadaqah from "../components/homepage/BlessingSadaqah";
import Contact from "../components/homepage/Contact";
import FivePiller from "../components/homepage/FivePiller";
import HeroSection from "../components/homepage/HeroSection";
import ImamKhatib from "../components/homepage/ImamKhatib";
import OurProject from "../components/homepage/OurProject";
import PrayerTimes from "../components/homepage/PrayerTimes";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <PrayerTimes />
      <FivePiller />
      <OurProject />
      <BlessingSadaqah />
      <ImamKhatib />
      <Contact />
    </main>
  );
}
