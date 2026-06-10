import backgroundImage from "@/public/images/hero.png";
import { getLanguage } from "@/src/lib/getLanguage";

const MainSection = async () => {
    const language = await getLanguage();
    return (
        <section
            className="bg-cover bg-top bg-no-repeat min-h-75 flex flex-col items-center justify-center sm:text-center text-white p-4"
            style={{ backgroundImage: `url(${backgroundImage.src})` }}
        >
            <h1
                className={`pt-2.5 text-2xl sm:text-3xl md:text-5xl font-bold ${language === "bn" ? "font-noirrit" : "font-philosopher"} text-start sm:text-center`}
            >
                {language === "eng"
                    ? "Baitul Haque Jame Masjid"
                    : "বাইতুল হক্ব জামে মসজিদ"}
            </h1>

            <p
                className={`pt-4 ${language === "eng" ? "font-semibold" : ""}  text-center text-sm`}
                dangerouslySetInnerHTML={{
                    __html: `${
                        language === "eng"
                            ? "A blessed house of Allah, dedicated to prayer, learning, unity, and serving the community <br class='hidden md:block' /> with faith and compassion."
                            : "আল্লাহর একটি বরকতময় ঘর, যেখানে মানুষ একত্রিত হয় ইবাদতের জন্য, দ্বীনি জ্ঞান অর্জনের জন্য, <br/> এবং ভালোবাসা ও সহমর্মিতার মাধ্যমে একটি শক্তিশালী ও শান্তিপূর্ণ সমাজ গড়ে তোলার জন্য।"
                    }`,
                }}
            ></p>
        </section>
    );
};

export default MainSection;
