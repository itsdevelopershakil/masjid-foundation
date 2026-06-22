import DonateSection from "@/src/components/donate/DonateSection";
import MainSection from "@/src/components/donate/MainSection";
import MobileScreenSection from "@/src/components/donate/MobileScreen";

function page() {
    return (
        <div>
            <MainSection
                titleEng="Baitul Haque Jame Masjid"
                titleBn="বাইতুল হক্ব জামে মসজিদ"
                descEng="A blessed house of Allah, dedicated to prayer, learning, unity, and serving the community <br class='hidden md:block' /> with faith and compassion."
                descBn="আল্লাহর একটি বরকতময় ঘর, যেখানে মানুষ একত্রিত হয় ইবাদতের জন্য, দ্বীনি জ্ঞান অর্জনের জন্য, <br/> এবং ভালোবাসা ও সহমর্মিতার মাধ্যমে একটি শক্তিশালী ও শান্তিপূর্ণ সমাজ গড়ে তোলার জন্য।"
            />
            <MobileScreenSection />
            <DonateSection />
        </div>
    );
}

export default page;
