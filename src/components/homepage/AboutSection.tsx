import AboutImg from "@/public/images/about-img.jpeg";
import { getLanguage } from "@/src/lib/getLanguage";
import Image from "next/image";
import PrimaryButton from "../PrimaryButton";

const AboutSection = async () => {
  const language = await getLanguage();
  const titleFont = language === "bn" ? "font-noirrit" : "font-philosopher";
  return (
    <section
      className="flex md:flex-row flex-col gap-7.5 max-width py-15 md:py-20 scroll-mt-24"
      id="about"
    >
      <div className="md:w-1/2">
        <Image
          src={AboutImg}
          className="w-full max-h-61 sm:max-h-109 object-cover rounded-[20px] block border border-primary/20"
          alt=""
        />
      </div>
      <div className="md:w-1/2">
        <h1
          className={`font-bold ${titleFont} text-[26px] lg:text-4xl text-primary`}
        >
          {language === "eng"
            ? "Baitul Haque Jame Masjid"
            : "বাইতুল হক জামে মসজিদ"}
        </h1>
        <h2
          className={`font-medium text-secondary text-2xl pt-2 hidden sm:block ${language === "bn" ? "font-semibold" : "font-medium"}`}
        >
          {language === "eng"
            ? "A place for salah, learning, and community"
            : "নামাজ, শিক্ষা ও কমিউনিটির জন্য একটি নিবেদিত স্থান"}
        </h2>
        <p
          className="my-8 font-medium"
          dangerouslySetInnerHTML={{
            __html:
              language === "eng"
                ? `Our masjid is located in Kayestogram (Kushumbag), Hetimgonj, Golapganj, Sylhet, and was established on 26 July 2024 to serve as a house of Allah for the local Muslim community. It is a place where worshippers come together for prayer, remembrance of Allah, and spiritual growth in an atmosphere of peace, faith, and unity. <br /> More than a place of worship, the masjid is a spiritual home that brings families and neighbours together, strengthens the bonds of brotherhood, and inspires a deeper connection with Islam and the community.`
                : `আমাদের মসজিদ সিলেটের গোলাপগঞ্জ উপজেলার হেতিমগঞ্জের কায়েস্তগ্রাম (কুসুমবাগ) এলাকায় অবস্থিত। ২৬ জুলাই ২০২৪ সালে প্রতিষ্ঠিত এই মসজিদটি স্থানীয় মুসলিম সম্প্রদায়ের জন্য ইবাদতের কেন্দ্রবিন্দু হিসেবে গড়ে উঠেছে। এটি এমন একটি স্থান, যেখানে মুসল্লিরা নামাজ আদায়, আল্লাহর স্মরণ এবং আত্মিক উন্নয়নের মাধ্যমে শান্তি, ঈমান ও ঐক্যের আবহে একত্রিত হন। <br><br> ইবাদতের স্থান হওয়ার পাশাপাশি, আমাদের মসজিদে দ্বীনি শিক্ষা প্রদান করা হয়,  যা মুসাল্লীগণের মধ্যে সৌহার্দ্য ও ভ্রাতৃত্বের বন্ধন সুদৃঢ় করে। এটি এমন এক আধ্যাত্মিক কেন্দ্র, যা মানুষের হৃদয়ে ইসলামের শিক্ষা, নৈতিক মূল্যবোধ এবং সম্প্রদায়ের প্রতি দায়িত্ববোধকে আরও গভীরভাবে জাগ্রত করে।`,
          }}
        ></p>
        <PrimaryButton link="/donate" className="py-2 px-4">
          {language === "eng" ? "Support Our Masjid" : "মসজিদের খেদমতে অংশ নিন"}
        </PrimaryButton>
      </div>
    </section>
  );
};

export default AboutSection;
