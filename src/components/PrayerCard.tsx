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
}

const PrayerCard: React.FC<PrayerCardProps> = ({ data }) => {
  return (
    <div
      key={data.id}
      className={`flex flex-col gap-2 5 text-center items-center p-5 ${data.isActive ? "bg-primary border-secondary text-white" : "bg-bg text-text border-primary/10"} rounded-xl border`}
    >
      <div
        className={`font-amiri text-3xl leading-6 ${data.isActive ? "text-white" : "text-primary"}`}
      >
        {data.symbol}
      </div>
      <h3 className="font-philosopher text-lg font-bold">{data.name}</h3>
      <p className="flex justify-between items-center font-philosopher text-sm gap-x-10">
        <span>Waqt Starts</span>
        <span className="font-bold">{data.startTime}</span>
      </p>
      <p className="flex justify-between items-center font-philosopher text-sm gap-x-10">
        <span>Waqt Ends</span>
        <span className="font-bold">{data.endTime}</span>
      </p>
    </div>
  );
};

export default PrayerCard;
