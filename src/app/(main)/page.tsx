import AboutSection from "../../components/homepage/AboutSection";
import BlessingSadaqah from "../../components/homepage/BlessingSadaqah";
import Contact from "../../components/homepage/Contact";
import FivePiller from "../../components/homepage/FivePiller";
import Gallery from "../../components/homepage/Gallery";
import HeroSection from "../../components/homepage/HeroSection";
import ImamKhatib from "../../components/homepage/ImamKhatib";
import OurProject from "../../components/homepage/OurProject";
import PrayerTimes from "../../components/homepage/PrayerTimes";
import ScrollHandler from "../../components/ScrollHandler";

export default function Home() {
    return (
        <main>
            <ScrollHandler />
            <HeroSection />
            <AboutSection />
            <PrayerTimes />
            <FivePiller />
            <OurProject />
            <BlessingSadaqah />
            <Gallery />
            <ImamKhatib />
            <Contact />
        </main>
    );
}
