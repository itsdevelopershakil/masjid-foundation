import Image from "next/image";
import { getLanguage } from "../lib/getLanguage";

interface BlessingCardProps {
  data: {
    id: number | string;
    icon: string;
    iconAlt: string;
    title: string;
    description: string;
    source: string;
  };
}

const BlessingCard: React.FC<BlessingCardProps> = async ({ data }) => {
  const language = await getLanguage();
  const titleFont = language === "bn" ? "font-noirrit" : "font-philosopher";
  return (
    <div
      key={data.id}
      className="p-5 border border-primary/20 rounded-xl bg-container flex flex-col items-center gap-4"
    >
      <div className="flex items-center justify-center size-18 bg-bg border border-primary/20 rounded-full">
        <Image src={data.icon} alt={data.iconAlt} />
      </div>
      <h3
        className={`text-xl font-bold ${titleFont} text-secondary text-center`}
      >
        {data.title}
      </h3>
      <div className="flex flex-col items-center gap-2">
        <p className="text-sm text-text font-medium text-center leading-6">
          {data.description}
        </p>
        <em className="text-sm text-primary">{data.source}</em>
      </div>
    </div>
  );
};

export default BlessingCard;
