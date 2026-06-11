import React from "react";

interface PrayerCardProps {
  data: {
    id: number;
    symbol: string;
    name: string;
    startTime: string;
    endTime: string;
    isActive: boolean;
  };
  language: "eng" | "bn";
}

const PrayerCard: React.FC<PrayerCardProps> = ({ data, language }) => {
  return (
    <div
      key={data.id}
      className={`w-full flex flex-col gap-2.5 text-center items-center p-4 lg:p-5 ${data.isActive ? "bg-primary border-secondary text-white" : "bg-bg text-text border-primary/10"} rounded-xl border`}
    >
      <div
        className={`font-amiri text-3xl leading-6 ${data.isActive ? "text-white" : "text-primary"}`}
      >
        {data.symbol}
      </div>
      <h3
        className={`${language === "bn" ? "font-noirrit font-semibold" : "font-philosopher font-bold"} lg:text-lg`}
      >
        {data.name}
      </h3>
      <p
        className={`flex justify-between items-center ${language === "bn" ? "font-noirrit" : "font-philosopher"} text-xs lg:text-sm sm:gap-x-5 lg:gap-x-10 w-full`}
      >
        <span>{language === "bn" ? "ওয়াক্ত আরম্ভ" : "Waqt Starts"}</span>
        <span className={language === "bn" ? "font-semibold" : "font-bold"}>
          {data.startTime}
        </span>
      </p>
      <p
        className={`flex justify-between items-center ${language === "bn" ? "font-noirrit" : "font-philosopher"} text-xs lg:text-sm sm:gap-x-5 lg:gap-x-10 w-full`}
      >
        <span>{language === "bn" ? "ওয়াক্ত শেষ" : "Waqt Ends"}</span>
        <span className={language === "bn" ? "font-semibold" : "font-bold"}>
          {data.endTime}
        </span>
      </p>
    </div>
  );
};

export default PrayerCard;
