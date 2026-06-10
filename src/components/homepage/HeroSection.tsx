import BismillahImg from "@/public/images/Bismillah.svg";
import backgroundImage from "@/public/images/hero.png";
import { getLanguage } from "@/src/lib/getLanguage";
import Image from "next/image";
import Link from "next/link";

const HeroSection = async () => {
<<<<<<< HEAD
    const language = await getLanguage();
    return (
        <section
            className="bg-cover bg-center p-4 py-8 sm:py-45 flex flex-col items-center sm:text-center text-white"
            style={{ backgroundImage: `url(${backgroundImage.src})` }}
        >
            <Image
                src={BismillahImg}
                className="max-w-37.5 sm:max-w-50"
                alt="Bismillah"
            />
            <h1
                className={`pt-2.5 text-[32px] sm:text-[48px] font-bold ${language === "bn" ? "font-noirrit" : "font-philosopher"} text-start sm:text-center`}
            >
                {language === "eng"
                    ? "A Place of Worship, Guidance &amp; Community"
                    : "ইবাদত, জ্ঞান ও ঐক্যের এক পবিত্র কেন্দ্র"}
            </h1>

            <p
                className={`pt-4 ${language === "eng" ? "font-semibold" : ""} max-w-180 text-start sm:text-center`}
            >
                {language === "eng"
                    ? "Join us in prayer, seek beneficial knowledge, and be part of a caring community dedicated to faith, compassion, and service for the sake of Allah."
                    : "আল্লাহর স্মরণে আমাদের সঙ্গে যুক্ত হোন, দ্বীনের উপকারী জ্ঞান অর্জন করুন এবং ঈমান, ভ্রাতৃত্ব ও মানবসেবার মাধ্যমে গড়ে উঠা একটি প্রাণবন্ত মুসলিম সম্প্রদায়ের অংশ হয়ে উঠুন।"}
            </p>
            <Link
                href={"/donate"}
                className={`mt-7.5 bg-secondary font-bold ${language === "bn" ? "font-noirrit" : "font-philosopher"} py-1.5 px-3 rounded-md w-full sm:w-auto`}
            >
                {language === "eng" ? "Donate Now" : "সাদকায়ে জারিয়ায় অংশ নিন"}
            </Link>
        </section>
    );
=======
  const language = await getLanguage();
  return (
    <section
      className="bg-cover bg-center p-4 py-8 sm:py-45 flex flex-col items-center sm:text-center text-white"
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
    >
      <Image
        src={BismillahImg}
        className="max-w-37.5 sm:max-w-50"
        alt="Bismillah"
      />
      <h1
        className={`pt-2.5 text-[32px] sm:text-[48px] font-bold ${language === "bn" ? "font-noirrit" : "font-philosopher"} text-start sm:text-center`}
      >
        {language === "eng"
          ? "A Place of Worship, Guidance & Community"
          : "ইবাদত, জ্ঞান ও ঐক্যের এক পবিত্র কেন্দ্র"}
      </h1>

      <p
        className={`pt-4 ${language === "eng" ? "font-semibold" : ""} max-w-180 text-start sm:text-center`}
      >
        {language === "eng"
          ? "Join us in prayer, seek beneficial knowledge, and be part of a caring community dedicated to faith, compassion, and service for the sake of Allah."
          : "আল্লাহর স্মরণে আমাদের সঙ্গে যুক্ত হোন, দ্বীনের উপকারী জ্ঞান অর্জন করুন এবং ঈমান, ভ্রাতৃত্ব ও মানবসেবার মাধ্যমে গড়ে উঠা একটি প্রাণবন্ত মুসলিম সম্প্রদায়ের অংশ হয়ে উঠুন।"}
      </p>
      <button
        className={`mt-7.5 bg-secondary hover:bg-hover2 duration-300 font-bold ${language === "bn" ? "font-noirrit" : "font-philosopher"} py-1.5 px-3 rounded-md w-full sm:w-auto`}
      >
        {language === "eng" ? "Donate Now" : "সাদকায়ে জারিয়ায় অংশ নিন"}
      </button>
    </section>
  );
>>>>>>> 131bc6e45b84b0c791d660d0a366c386230b3c3c
};

export default HeroSection;
