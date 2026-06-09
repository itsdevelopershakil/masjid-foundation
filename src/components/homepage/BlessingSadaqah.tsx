import { blessingCardData } from "@/src/constants/blessingCardData";
import { getLanguage } from "@/src/lib/getLanguage";
import BlessingCard from "../BlessingCard";
import PrimaryButton from "../PrimaryButton";

const BlessingSadaqah = async () => {
  const language = await getLanguage();
  const titleFont = language === "bn" ? "font-noirrit" : "font-philosopher";
  return (
    <div className="max-width">
      <div className="flex flex-col gap-6 items-center">
        <h1
          className={`text-[26px] md:text-4xl font-bold ${titleFont} text-primary text-center`}
        >
          {language === "bn"
            ? "সাদাকাহ’র  অশেষ বরকত ও কল্যাণ"
            : "Blessings of Giving Sadaqah"}
        </h1>
        <h2
          className={`text-xl md:text-2xl ${language === "bn" ? "font-semibold" : "font-medium"} text-secondary md:block hidden`}
        >
          {language === "bn"
            ? "সাদাকাহ করার মাধ্যমে আপনি যা যা অর্জন করেন"
            : "What Do You Gain From Donating To Charity?"}
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-7.5">
          {blessingCardData[language].map((data) => (
            <BlessingCard key={data.id} data={data} />
          ))}
        </div>
        <PrimaryButton
          link="/"
          className="px-3 sm:px-4 py-1.5 sm:py-2 text-sm! sm:text-base!"
        >
          {language === "bn" ? "এই বরকতময় কাজে শরিক হোন" : "Be Part of It"}
        </PrimaryButton>
      </div>
    </div>
  );
};

export default BlessingSadaqah;
