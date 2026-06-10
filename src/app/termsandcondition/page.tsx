import { getLanguage } from "@/src/lib/getLanguage";

const TermsAndCondition = async () => {
  const language = await getLanguage();
  const titleFont = language === "bn" ? "font-noirrit" : "font-philosopher";
  return (
    <div className="py-15 sm:py-20">
      <div className="max-width text-text">
        <div className="flex flex-col gap-5 sm:gap-10">
          <div className="flex flex-col gap-3 sm:gap-6">
            <h2 className={`text-2xl font-bold ${titleFont}`}>
              {language === "bn" ? "ব্যবহারের শর্তাবলি" : "Terms of Use"}
            </h2>
            <div className="flex flex-col gap-6.5">
              <p className="leading-6.5">
                {language === "bn"
                  ? `বাইতুল হক জামে মসজিদের ওয়েবসাইটে প্রবেশ ও ব্যবহার করার মাধ্যমে আপনি আমাদের শর্তাবলীর প্রতি সম্মতি প্রদান করছেন এবং সেগুলো মেনে চলতে সম্মত হচ্ছেন। আমাদের ওয়েবসাইট বা সেবা ব্যবহারের পূর্বে শর্তাবলী মনোযোগ সহকারে পড়ার জন্য আমরা আপনাকে অনুরোধ জানাচ্ছি।`
                  : `By accessing and using the Baitul Haque Jame Masjid website, you agree to be bound by these Terms and Conditions. We encourage you to read these terms carefully before using our website or services.`}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:gap-6">
            <h2 className={`text-2xl font-bold ${titleFont}`}>
              {language === "bn" ? "কপিরাইট" : "Copyright"}
            </h2>
            <div className="flex flex-col gap-6.5">
              <p className="leading-6.5">
                {language === "bn"
                  ? `এই ওয়েবসাইটে প্রদর্শিত সকল বিষয়বস্তু, যেমন—লেখা, গ্রাফিক্স, লোগো, আইকন, ছবি, অডিও ও ভিডিও ক্লিপ, ডিজিটাল ডাউনলোড এবং সফটওয়্যার, বাইতুল হক জামে মসজিদের নিজস্ব সম্পত্তি এবং প্রযোজ্য বাংলাদেশি ও আন্তর্জাতিক কপিরাইট আইনের মাধ্যমে সুরক্ষিত। এসব বিষয়বস্তুর কোনো অংশ অনুমতি ছাড়া ব্যবহার, অনুলিপি, পরিবর্তন বা বিতরণ করা কঠোরভাবে নিষিদ্ধ।`
                  : `All content displayed on this website, including text, graphics, logos, icons, images, audio and video clips, digital downloads, and software, is the property of Baitul Haque Jame Masjid and is protected by applicable Bangladeshi and international copyright laws. Unauthorised use, reproduction, modification, or distribution of any content is strictly prohibited. Baitul Haque Jame Masjid reserves the right to take appropriate legal action against any infringement of its intellectual property rights.`}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:gap-6">
            <h2 className={`text-2xl font-bold ${titleFont}`}>
              {language === "bn"
                ? "আপনার ব্যক্তিগত তথ্যের নিরাপত্তা"
                : "Security of Your Personal Information"}
            </h2>
            <div className="flex flex-col gap-6.5">
              <p className="leading-6.5">
                {language === "bn"
                  ? `বাইতুল হক জামে মসজিদ আপনার ব্যক্তিগত তথ্যের নিরাপত্তা নিশ্চিত করতে প্রতিশ্রুতিবদ্ধ। আপনার তথ্যকে অননুমোদিত প্রবেশ, ব্যবহার বা প্রকাশ থেকে সুরক্ষিত রাখতে আমরা বিভিন্ন নিরাপত্তা প্রযুক্তি ও প্রক্রিয়া অনুসরণ করি। উদাহরণস্বরূপ, আপনার প্রদানকৃত ব্যক্তিগত তথ্য সীমিত প্রবেশাধিকারসম্পন্ন নিরাপদ কম্পিউটার সিস্টেমে সংরক্ষণ করা হয় এবং সেগুলো নিয়ন্ত্রিত ও সুরক্ষিত পরিবেশে রক্ষিত থাকে।`
                  : `Baitul Haque Jame Masjid is committed to ensuring the security
                  of your personal information. We use a variety of security
                  technologies and procedures to help protect your data from
                  unauthorised access, use, or disclosure. For example, the
                  personal information you provide is stored on secure computer
                  systems with restricted access and located in controlled
                  facilities.`}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:gap-6">
            <h2 className={`text-2xl font-bold ${titleFont}`}>
              {language === "bn" ? "প্রযোজ্য আইন" : "Applicable Law"}
            </h2>
            <div className="flex flex-col gap-6.5">
              <p className="leading-6.5">
                {language === "bn"
                  ? `ওয়েবসাইট ব্যবহার করার মাধ্যমে আপনি সম্মত হচ্ছেন যে, এই ব্যবহারের শর্তাবলি ও এর থেকে উদ্ভূত যেকোনো বিতর্ক বাংলাদেশের আইন অনুযায়ী নিষ্পত্তি হবে।`
                  : `By using this website, you agree that these Terms and Conditions, and any disputes arising from them or your use of the website, shall be governed by and interpreted in accordance with the laws of Bangladesh.`}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:gap-6">
            <h2 className={`text-2xl font-bold ${titleFont}`}>
              {language === "bn"
                ? "নীতির পরিবর্তন"
                : "Changes to This Statement"}
            </h2>
            <div className="flex flex-col gap-6.5">
              <p className="leading-6.5">
                {language === "bn"
                  ? `বাইতুল হক জামে মসজিদ সময়ে সময়ে এই প্রাইভেসি পলিসি হালনাগাদ করতে পারে, যাতে আমাদের প্রতিষ্ঠান, সেবা বা ব্যবহারকারীদের মতামতের ভিত্তিতে প্রয়োজনীয় পরিবর্তন প্রতিফলিত হয়। এই নীতিমালায় বা আপনার ব্যক্তিগত তথ্য ব্যবহারের পদ্ধতিতে কোনো গুরুত্বপূর্ণ পরিবর্তন আনা হলে, তা কার্যকর হওয়ার পূর্বেই আমরা স্পষ্টভাবে প্রকাশ করব। আপনার তথ্য কীভাবে সুরক্ষিত রাখা হয় সে সম্পর্কে অবগত থাকার জন্য আমরা আপনাকে নিয়মিত এই প্রাইভেসি পলিসি পর্যালোচনা করার জন্য অনুরোধ জানাচ্ছি।`
                  : `Baitul Haque Jame Masjid may periodically update this Privacy
                  Policy to reflect changes in our organisation, services, or user
                  feedback. If any material changes are made to this Policy or to
                  the way we use your personal information, we will clearly post
                  those changes before they take effect. We encourage you to
                  review this Privacy Policy from time to time to stay informed
                  about how Baitul Haque Jame Masjid protects your information.`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndCondition;
