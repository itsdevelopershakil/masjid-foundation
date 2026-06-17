import { getPrayerCardData } from "@/src/constants/prayerCardData";
import { getLanguage } from "@/src/lib/getLanguage";
import { toBengaliNumbers } from "@/src/lib/toBengaliNumbers";
import PrayerCard from "../PrayerCard";

const PrayerTimes = async () => {
  const language = await getLanguage();
  const titleFont = language === "bn" ? "font-noirrit" : "font-philosopher";
  const prayerCardData = await getPrayerCardData();
  return (
    <section className="max-width scroll-mt-24" id="prayertimes">
      <div className="flex flex-col gap-3 md:gap-5 py-4 px-2 sm:p-10 bg-container border border-primary/10 rounded-xl">
        <div className="flex flex-col gap-4 items-center">
          <h1
            className={`text-2xl md:text-[32px] font-bold ${titleFont} text-primary text-center mb-2 md:mb-0`}
          >
            {language === "bn"
              ? "আজকের সালাতের সময়সূচি"
              : "Today’s Prayer Times"}
          </h1>
          <h2
            className={`${language === "bn" ? "font-semibold" : "font-medium"} text-secondary md:block hidden text-center`}
          >
            {language === "bn"
              ? "যখন পরিস্থিতি সামলানো কঠিন মনে হয়, তখন একটু থামুন, আল্লাহর দেওয়া নিয়ামতগুলোর কথা স্মরণ করুন এবং তাঁর প্রতি কৃতজ্ঞতা প্রকাশ করুন।"
              : "When things are hard to handle, retreat & count your blessings instead"}
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 w-full gap-3 xl:gap-[37.5]">
          {prayerCardData[language].map((data) => (
            <PrayerCard data={data} key={data.id} language={language} />
          ))}
          <div className="w-full flex md:hidden flex-col gap-2.5">
            <div
              className={`w-full flex justify-between items-center bg-bg border border-primary/10 rounded-md px-5 py-2.5 text-xs md:text-sm ${titleFont} sm:gap-9 md:gap-17.5`}
            >
              <span>{language === "bn" ? "সূর্যোদয়" : "Sunrise"}</span>
              <span
                className={language === "bn" ? "font-semibold" : "font-bold"}
              >
                {language === "bn" ? "০৫ : ১০" : "05 : 15"}
              </span>
            </div>
            <div
              className={`w-full flex justify-between items-center bg-bg border border-primary/10 rounded-md px-5 py-2.5 text-xs md:text-sm ${titleFont} sm:gap-9 md:gap-17.5`}
            >
              <span>{language === "bn" ? "সূর্যাস্ত" : "Sunset"}</span>
              <span
                className={language === "bn" ? "font-semibold" : "font-bold"}
              >
                {language === "bn" ? "০৬ : ০৯" : "06 : 09"}
              </span>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between">
          <div className="flex flex-col gap-3 text-text">
            <h2 className={`${titleFont} font-bold`}>
              {language === "bn"
                ? "নামাজ আদায়ের নিষিদ্ধ সময়সমূহ"
                : "Prohibited Times for Prayer"}
            </h2>
            <ul className="flex flex-col gap-2 text-xs sm:text-sm">
              <li className={`${language === "bn" ? "" : "font-medium"}`}>
                <span className="font-bold text-secondary">• </span>
                {language === "bn"
                  ? "সূর্যোদয় থেকে সূর্য সম্পূর্ণরূপে উদিত হওয়া পর্যন্ত।"
                  : "From Sunrise Until the Sun Has Fully Risen"}
                <span className="text-[#FF383C] font-bold">*</span>
              </li>
              <li className={`${language === "bn" ? "" : "font-medium"}`}>
                <span className="font-bold text-secondary">• </span>
                {language === "bn"
                  ? "সূর্য আকাশের সর্বোচ্চ স্থানে অবস্থান করার সময়।"
                  : "When the sun reaches its highest point in the sky"}
                <span className="text-[#FF383C] font-bold">*</span>
              </li>
              <li className={`${language === "bn" ? "" : "font-medium"}`}>
                <span className="font-bold text-secondary">• </span>
                {language === "bn"
                  ? "সূর্যাস্ত শুরু হওয়া থেকে সূর্য সম্পূর্ণরূপে অস্ত যাওয়া পর্যন্ত।"
                  : "From Sunset Until the Sun Has Fully Set"}
                <span className="text-[#FF383C] font-bold">*</span>
              </li>
            </ul>
          </div>
          <div className="hidden md:flex flex-col gap-2.5">
            <div
              className={`flex justify-between items-center bg-bg border border-primary/10 rounded-md px-5 py-2.5 text-sm ${titleFont} gap-17.5`}
            >
              <span>{language === "bn" ? "সূর্যোদয়" : "Sunrise"}</span>
              <span
                className={language === "bn" ? "font-semibold" : "font-bold"}
              >
                {language === "bn"
                  ? toBengaliNumbers(prayerCardData.sunrise)
                  : prayerCardData.sunrise}
              </span>
            </div>
            <div
              className={`flex justify-between items-center bg-bg border border-primary/10 rounded-md px-5 py-2.5 text-sm ${titleFont} gap-17.5`}
            >
              <span>{language === "bn" ? "সূর্যাস্ত" : "Sunset"}</span>
              <span
                className={language === "bn" ? "font-semibold" : "font-bold"}
              >
                {language === "bn"
                  ? toBengaliNumbers(prayerCardData.sunset)
                  : prayerCardData.sunset}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrayerTimes;
