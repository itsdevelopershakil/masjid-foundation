import RightArrow from "@/public/icons/circle-arrow-right.svg";
import MailRounded from "@/public/icons/light_mail-rounded.svg";
import LogoBangla from "@/public/logo-bangla.png";
import Logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { footerLinks } from "../constants/navLinks";
import { getLanguage } from "../lib/getLanguage";
import { toBengaliNumbers } from "../lib/toBengaliNumbers";

const Footer = async () => {
  const language = await getLanguage();
  return (
    <footer className="border-t border-primary/40">
      <div className="pt-15 pb-10 max-width flex flex-wrap lg:flex-nowrap xl:gap-14 lg:gap-10 gap-5 justify-between">
        <div className="flex flex-col gap-6 w-full lg:w-[25%] shrink-0">
          <Image
            src={language === "bn" ? LogoBangla : Logo}
            alt="Brand Logo"
            className="w-37.5 object-contain shrink-0"
          />
          <p className="text-text leading-6.5">
            {language === "bn"
              ? `আল্লাহর একটি বরকতময় ঘর, যেখানে মানুষ একত্রিত হয় ইবাদতের জন্য, দ্বীনি জ্ঞান অর্জনের জন্য, এবং ভালোবাসা ও সহমর্মিতার মাধ্যমে একটি শক্তিশালী ও শান্তিপূর্ণ সমাজ গড়ে তোলার জন্য।`
              : `A blessed house of Allah, dedicated to prayer, learning, unity, and
            serving the community with faith and compassion.`}
          </p>
          <Link
            href="/"
            className="py-2 px-4 bg-primary hover:bg-hover duration-300 rounded-md text-container font-bold flex items-center justify-center gap-2 md:max-w-52 lg:max-w-full"
          >
            <span>{language === "bn" ? "এখনই দান করুন" : "Donate Now"}</span>
            <Image
              src={RightArrow}
              alt="Circle Arrow Right"
              className="size-5"
            />
          </Link>
        </div>
        <div className="flex flex-col gap-6 sm:shrink-0">
          <h2
            className={`text-lg sm:text-xl text-text font-bold ${language === "bn" ? "font-noirrit" : "font-philosopher"}`}
          >
            {language === "bn" ? "লিংকসমূহ" : "Quick Links"}
          </h2>
          <ul className="flex flex-col gap-2 sm:gap-4">
            {footerLinks[language].map((link) => (
              <li key={link.id}>
                <Link
                  href={link.link}
                  className="font-semibold text-text hover:text-secondary duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-6 sm:shrink-0">
          <h2
            className={`text-lg sm:text-xl text-text font-bold ${language === "bn" ? "font-noirrit" : "font-philosopher"}`}
          >
            {language === "bn" ? "যোগাযোগ" : "Contact"}
          </h2>
          <ul className="flex flex-col gap-2 sm:gap-4">
            <li className="flex items-start gap-5">
              <span className="mt-1">
                <FaLocationDot className="text-primary text-lg" />
              </span>
              <address
                className="not-italic text-text font-medium"
                dangerouslySetInnerHTML={{
                  __html:
                    language === "bn"
                      ? `কায়েস্তগ্রাম (কুসুমবাগ), <br /> হেতিমগঞ্জ, গোলাপগঞ্জ, সিলেট`
                      : `Kayestogram (Kushumbag), <br /> Hetimgonj, Golapgonj, Sylhet`,
                }}
              ></address>
            </li>
            <li className="flex items-center gap-5">
              <Image
                src={MailRounded}
                alt="Light Mail Rounded Icon"
                className="size-5 object-contain"
              />
              <Link
                href="mailto:info@example.com"
                className="font-semibold text-text hover:text-secondary duration-300"
              >
                info@example.com
              </Link>
            </li>
            <li className="flex items-center gap-5">
              <IoCall className="text-primary text-base sm:text-lg" />
              <Link
                href="tel:+8801712345678"
                className="font-semibold text-text hover:text-secondary duration-300"
              >
                {language === "bn" ? "+৮৮০ ১৭১২ ৩৪৫৬৭৮" : "+880 1712 345678"}
              </Link>
            </li>
            <li className="flex items-center gap-5">
              <IoCall className="text-primary text-base sm:text-lg" />
              <Link
                href="tel:+8801712345678"
                className="font-semibold text-text hover:text-secondary duration-300"
              >
                {language === "bn" ? "+৮৮০ ১৭১২ ৩৪৫৬৭৮" : "+880 1712 345678"}
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-6 shrink-0 w-full sm:w-auto">
          <h2
            className={`text-lg sm:text-xl text-text font-bold ${language === "bn" ? "font-noirrit" : "font-philosopher"}`}
          >
            {language === "bn" ? "ব্যাংক ট্র্যান্সফার" : "Bank Transfer"}
          </h2>
          <div className="p-6 rounded-xl border border-primary/20 flex flex-col gap-3">
            <ul className="flex flex-col gap-3">
              <li className="text-text">
                {language === "bn" ? "ব্যাংক" : "Bank"}
                <span className="font-bold">: Pubali Bank PLC</span>
              </li>
              <li className="text-text">
                {language === "bn" ? "শাখা" : "Branch"}
                <span className="font-bold">: Hetimgonj, Sylhet</span>
              </li>
              <li className="text-text">
                {language === "bn" ? "রাউটিং নম্বর" : "Routing No"}
                <span className="font-bold">: 175911758</span>
              </li>
              <li className="text-text">
                {language === "bn" ? "অ্যাকাউন্ট" : "Account"}
                <span className="font-bold">: Baitul Haque Jame Masjid</span>
              </li>
              <li className="text-text">
                {language === "bn" ? "অ্যাকাউন্ট নম্বর" : "Account No"}
                <span className="font-bold">: 4327101045456</span>
              </li>
              <li className="text-text">
                {language === "bn" ? "সুইফ্ট কোড" : "Swift Code"}
                <span className="font-bold">: PUBABDDH</span>
              </li>
            </ul>
            <p
              className={`${language === "bn" ? "font-noirrit" : "font-philosopher"} text-sm`}
            >
              {language === "bn"
                ? `অনুগ্রহ করে রেফারেন্স হিসেবে আপনার নাম উল্লেখ করুন।`
                : `Please include your name as reference.`}
              <span className="text-red-600 text-sm">*</span>
            </p>
          </div>
        </div>
      </div>
      {/* Copyright Section */}
      <div className="py-2.5 text-center bg-bg border-t border-secondary">
        <p
          className={`text-xs sm:text-sm ${language === "bn" ? "font-noirrit" : "font-philosopher"} text-primary`}
        >
          {language === "bn"
            ? `© ${toBengaliNumbers(new Date().getFullYear())} বায়তুল হক জামে মসজিদ - সর্বস্বত্ব সংরক্ষিত।`
            : `© ${new Date().getFullYear()} Baitul Haque Jame Masjid. All rights reserved.`}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
