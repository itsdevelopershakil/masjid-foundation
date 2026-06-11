import ProjectImage from "@/public/our-project.png";
import { getLanguage } from "@/src/lib/getLanguage";
import Image from "next/image";
import PrimaryButton from "../PrimaryButton";

const OurProject = async () => {
  const language = await getLanguage();

  const titleFont = language === "bn" ? "font-noirrit" : "font-philosopher";
  return (
    <div className="pt-15 md:pt-20">
      <div className="max-width">
        <div className="flex flex-wrap md:flex-nowrap items-start gap-5 md:gap-7.5">
          <div className="w-full md:w-1/2">
            <Image
              src={ProjectImage}
              alt="Our Project"
              className="w-full max-h-109 object-cover rounded-[20px] block border border-primary/20"
            />
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex flex-col gap-5 md:gap-8">
              <div className="flex flex-col gap-2">
                <h1
                  className={`font-bold ${titleFont} text-[26px] lg:text-4xl text-primary`}
                >
                  {language === "bn" ? "আমাদের প্রকল্প" : "Our Project"}
                </h1>
                <h2 className="font-medium text-xl lg:text-2xl text-secondary hidden sm:block">
                  {language === "bn"
                    ? "ইবাদত, শিক্ষা ও ঐক্যের কেন্দ্র নির্মাণ প্রকল্প"
                    : "Expanding Our House of Worship and Community"}
                </h2>
              </div>
              <div className="flex flex-col gap-5 md:gap-6">
                <p className="font-medium leading-6.5 text-text">
                  {language === "bn"
                    ? `আমরা £২০০,০০০ সংগ্রহ করছি বায়তুল হক জামে মসজিদ নির্মাণের জন্য, একটি গ্রামীণ এলাকায় যেখানে অনেক পরিবারের এখনও নামাজ, শিক্ষা ও সামাজিক সমাবেশের জন্য উপযুক্ত কোনো স্থান নেই।`
                    : `We are raising £200,000 to build Baitul Haque Jame Masjid in a
                  rural community where many families still lack a proper place
                  for prayer, learning, and gatherings.`}
                </p>
                {language === "bn" ? (
                  <p className="font-medium leading-6.5 text-text">
                    রাসূলুল্লাহ{" "}
                    <span className="text-xl font-noirrit">(ﷺ)</span> বলেছেন:{" "}
                    <br />
                    “যে ব্যক্তি আল্লাহর জন্য একটি মসজিদ নির্মাণ করে, আল্লাহ তার
                    জন্য জান্নাতে অনুরূপ একটি ঘর নির্মাণ করেন।”
                    <em> (সহীহ বুখারী ৪৫০)</em>
                  </p>
                ) : (
                  <p className="font-medium leading-6.5 text-text">
                    The Messenger of Allah
                    <span className="text-xl font-amiri!"> (ﷺ)</span> said:{" "}
                    <br />
                    “Whoever builds a mosque for Allah, Allah will build for him
                    a house like it in Paradise.”
                    <em> (Sahih al-Bukhari 450)</em>
                  </p>
                )}
                <p className="font-medium leading-6.5 text-text">
                  {language === "bn"
                    ? `৩০০+ মুসল্লির ধারণক্ষমতাসম্পন্ন এই মসজিদটি নামাজ আদায়, ওযু করার সুবিধা এবং ইসলামী শিক্ষা ও সামাজিক কল্যাণমূলক কার্যক্রমের জন্য একটি নিবেদিত স্থান হিসেবে গড়ে উঠবে, ইনশাআল্লাহ।`
                    : `With capacity for 300+ worshippers, the masjid will provide
                  space for salah, wudu facilities, and essential areas for
                  Islamic education and community support, insha'Allah.`}
                </p>
                <div>
                  <PrimaryButton
                    link={"/"}
                    className="py-1.5 px-3 sm:py-2 sm:px-4 text-sm! sm:text-base!"
                  >
                    {language === "bn"
                      ? "আমাদের প্রকল্পে সহায়তা করুন"
                      : "Donate for This Project"}
                  </PrimaryButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProject;
