import Imam from "@/public/imam.png";
import { getLanguage } from "@/src/lib/getLanguage";
import Image from "next/image";

const ImamKhatib = async () => {
  const language = await getLanguage();
  const titleFont = language === "bn" ? "font-noirrit" : "font-philosopher";
  return (
    <section className="pt-15 md:pt-20">
      <div className="max-width">
        <div className="flex flex-col gap-6 items-center">
          <h1
            className={`text-[26px] md:text-4xl font-bold ${titleFont} text-primary text-center`}
          >
            {language === "bn"
              ? "ইমাম ও খতিবগণের পরিচিতি"
              : "Our Imam & Khatib"}
          </h1>
          <h2
            className={`text-xl md:text-2xl text-center ${language === "bn" ? "font-semibold" : "font-medium"} text-secondary md:block hidden`}
            dangerouslySetInnerHTML={{
              __html: `${
                language === "bn"
                  ? `আমাদের সম্মানিত ইমাম ও খতিবের সাথে পরিচিত হোন, যাঁরা আমাদের জামাতকে অনুপ্রাণিত করেন, <br class="hidden lg:block"/> দ্বীনি শিক্ষা প্রদান করেন এবং আন্তরিকভাবে সেবা করে থাকেন।`
                  : "Meet the Imam and Khatib who inspire, educate, and serve our congregation."
              }`,
            }}
          ></h2>
          <div className="flex flex-col gap-3 bg-container rounded-xl p-5 border border-primary/20 text-text">
            <Image
              src={Imam}
              alt="Imam Image"
              className="rounded-xl shadow-main w-full max-w-55 sm:max-w-60 h-60 sm:h-70 object-cover shrink-0"
            />
            <h3 className={`font-bold text-xl text-center ${titleFont}`}>
              {language === "bn" ? "মাওলানা মাসুম আহমদ" : "Mawlana Masum Ahmed"}
            </h3>
            <p className="font-medium text-sm text-center">
              {language === "bn" ? "ইমাম ও খতিব" : "Imam & Khatib"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImamKhatib;
