import AboutSection from "../components/homepage/AboutSection";
import BlessingSadaqah from "../components/homepage/BlessingSadaqah";
import FivePiller from "../components/homepage/FivePiller";
import HeroSection from "../components/homepage/HeroSection";
import OurProject from "../components/homepage/OurProject";

export default function Home() {
    return (
        <main>
            <HeroSection />
            <AboutSection />
            <FivePiller />
            <OurProject />
            <BlessingSadaqah />
        </main>
    );
}
