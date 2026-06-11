import backgroundImage from "@/public/images/hero.png";
import { getLanguage } from "@/src/lib/getLanguage";
import React from "react";

interface MainSectionProps {
  titleEng: string;
  titleBn: string;
  descEng?: string;
  descBn?: string;
}

const MainSection: React.FC<MainSectionProps> = async ({
  titleEng,
  titleBn,
  descEng,
  descBn,
}) => {
  const language = await getLanguage();
  return (
    <section
      className="bg-cover bg-no-repeat min-h-75 flex flex-col items-center justify-center sm:text-center text-white p-4 relative"
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundPosition: "center -400px",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-0"></div>
      <div className="relative z-1">
        <h1
          className={`pt-2.5 text-2xl sm:text-3xl md:text-5xl font-bold ${language === "bn" ? "font-noirrit" : "font-philosopher"} text-start sm:text-center`}
        >
          {language === "eng" ? titleEng : titleBn}
        </h1>

        {descEng && descBn && (
          <p
            className={`pt-4 ${language === "eng" ? "font-semibold" : ""}  text-center text-sm`}
            dangerouslySetInnerHTML={{
              __html: `${language === "eng" ? descEng : descBn}`,
            }}
          ></p>
        )}
      </div>
    </section>
  );
};

export default MainSection;
