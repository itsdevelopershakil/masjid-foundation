import { prayerCardData } from "@/src/constants/prayerCardData";
import { getLanguage } from "@/src/lib/getLanguage";
import PrayerCard from "../PrayerCard";

const PrayerTimes = async () => {
  const language = await getLanguage();
  const titleFont = language === "bn" ? "font-noirrit" : "font-philosopher";
  return (
    <div className="max-width">
      <div className="flex flex-col gap-5 p-10 bg-container border border-primary/10 rounded-xl">
        <div className="flex flex-col gap-4 items-center">
          <h1
            className={`text-2xl md:text-[32px] font-bold ${titleFont} text-primary text-center`}
          >
            {language === "bn"
              ? "আজকের সালাতের সময়সূচি"
              : "Today’s Prayer Times"}
          </h1>
          <h2
            className={`${language === "bn" ? "font-semibold" : "font-medium"} text-secondary md:block hidden`}
          >
            {language === "bn"
              ? "যখন পরিস্থিতি সামলানো কঠিন মনে হয়, তখন একটু থামুন, আল্লাহর দেওয়া নিয়ামতগুলোর কথা স্মরণ করুন এবং তাঁর প্রতি কৃতজ্ঞতা প্রকাশ করুন।"
              : "When things are hard to handle, retreat & count your blessings instead"}
          </h2>
          <div className="flex justify-between w-full">
            {prayerCardData[language].map((data) => (
              <PrayerCard data={data} key={data.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrayerTimes;
