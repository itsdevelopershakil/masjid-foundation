import { getLanguage } from "@/src/lib/getLanguage";

const PrivacyPolicy = async () => {
  const language = await getLanguage();
  const titleFont = language === "bn" ? "font-noirrit" : "font-philosopher";
  return (
    <div className="py-15 sm:py-20">
      <div className="max-width text-text">
        <div className="flex flex-col gap-5 sm:gap-10">
          <div className="flex flex-col gap-3 sm:gap-6">
            <h2 className={`text-2xl font-bold ${titleFont}`}>
              {language === "bn"
                ? "গোপনীয়তার বিবৃতি"
                : "Articulation Of Privacy"}
            </h2>
            <div className="flex flex-col gap-6.5">
              <p className="leading-6.5">
                {language === "bn"
                  ? `বাইতুল হক জামে মসজিদে আমরা আপনার গোপনীয়তা রক্ষা এবং ব্যক্তিগত তথ্যের নিরাপত্তা নিশ্চিত করতে প্রতিশ্রুতিবদ্ধ। এই প্রাইভেসি পলিসিতে ব্যাখ্যা করা হয়েছে যে, আপনি আমাদের ওয়েবসাইট ভিজিট করলে বা আমাদের সেবা ব্যবহার করলে আমরা কীভাবে আপনার তথ্য সংগ্রহ, ব্যবহার, সংরক্ষণ এবং সুরক্ষিত রাখি।`
                  : `At Baitul Haque Jame Masjid, we are committed to protecting your
                privacy and ensuring the security of your personal information.
                This Privacy Policy explains how we collect, use, store, and
                protect information when you visit our website or use our
                services.`}
              </p>
              <p className="leading-6.5">
                {language === "bn"
                  ? `আমাদের ওয়েবসাইটটি সাধারণ ব্যবহারকারীদের জন্য উন্মুক্ত। ব্যবহারকারীদের অভিজ্ঞতা উন্নত করা, দান প্রক্রিয়া সম্পন্ন করা, গুরুত্বপূর্ণ তথ্য ও আপডেট প্রদান করা এবং আমাদের দাওয়াহ, মানবকল্যাণ ও সামাজিক কার্যক্রম পরিচালনার উদ্দেশ্যে আমরা কিছু ব্যক্তিগত তথ্য সংগ্রহ করতে পারি। সংগৃহীত সকল তথ্য যথাযথ দায়িত্বশীলতার সঙ্গে এবং এই প্রাইভেসি পলিসির আলোকে পরিচালনা করা হয়।`
                  : `This policy applies to the Baitul Haque Jame Masjid website and
                its related services. It does not apply to third-party websites,
                products, or services that may be linked from our site. We
                encourage you to review the privacy policies of any external
                websites you visit.`}
              </p>
              <p className="leading-6.5">
                {language === "bn"
                  ? `আমাদের ওয়েবসাইট ব্যবহার করার মাধ্যমে আপনি এই প্রাইভেসি পলিসিতে বর্ণিত তথ্য সংগ্রহ ও ব্যবহারের বিষয়ে সম্মতি প্রদান করছেন। আমরা সর্বদা স্বচ্ছতা বজায় রাখা এবং আমাদের মুসল্লি, দাতা ও কমিউনিটির আস্থা রক্ষায় প্রতিশ্রুতিবদ্ধ।`
                  : `Our website is intended for a general audience, and we may
                collect certain personal information from visitors to improve
                user experience, process donations, communicate important
                updates, and support our charitable and community activities.
                Any information collected is handled responsibly and in
                accordance with this Privacy Policy.`}
              </p>
              {language === "eng" && (
                <p className="leading-6.5">
                  By using our website, you acknowledge and agree to the
                  collection and use of information as outlined in this Privacy
                  Policy. We are dedicated to maintaining transparency and
                  safeguarding the trust of our community.
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:gap-6">
            <h2 className={`text-2xl font-bold ${titleFont}`}>
              {language === "bn"
                ? "ব্যক্তিগত তথ্য সংগ্রহ"
                : "Assortment of Your Personal Information"}
            </h2>
            <div className="flex flex-col gap-6.5">
              <p className="leading-6.5">
                {language === "bn"
                  ? `একটি দান সংক্রান্ত ও অলাভজনক প্রতিষ্ঠান হিসেবে, বাইতুল হক জামে মসজিদ আপনার নাম, ইমেইল ঠিকানা অথবা ফোন নম্বরের মতো কিছু ব্যক্তিগত তথ্য সংগ্রহ করতে পারে। এই তথ্য শুধুমাত্র দান প্রক্রিয়া সম্পন্ন করা, বিভিন্ন কার্যক্রমে নিবন্ধন পরিচালনা করা এবং সংশ্লিষ্ট সেবা প্রদান করার উদ্দেশ্যে ব্যবহার করা হয়। বাইতুল হক জামে মসজিদ আপনার কম্পিউটারের হার্ডওয়্যার বা সফটওয়্যার সম্পর্কিত কোনো তথ্য সংগ্রহ করবে না।`
                  : `As a charitable, non-profit organisation, Baitul Haque Jame
                Masjid may collect personal information such as your name, email
                address, postal address, or telephone number. This information
                is used solely to process donations, manage event registrations,
                and provide related services. Baitul Haque Jame Masjid does not
                collect information about your computer hardware or software.`}
              </p>
              {language === "eng" && (
                <p className="leading-6.5">
                  Baitul Haque Jame Masjid encourages you to review the privacy
                  policies of any websites you visit through links on our site
                  so that you understand how they collect, use, and share your
                  information. We are not responsible for the privacy practices
                  or content of websites outside the Baitul Haque Jame Masjid
                  website.
                </p>
              )}
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

export default PrivacyPolicy;
