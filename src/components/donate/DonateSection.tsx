import Bkash from "@/public/icons/bkash.svg";
import PubaliBank from "@/public/icons/pubaliBank.svg";
import { getLanguage } from "@/src/lib/getLanguage";
import Image from "next/image";
import { CopyButton } from "./CopyButton";

const DonateSection = async () => {
    const language = await getLanguage();
    return (
        <section className="max-width hidden md:flex flex-col gap-20 my-20">
            <div className="flex flex-col lg:flex-row gap-7.5 shrink-0">
                {/* Left side  */}
                <div className="flex flex-col gap-6 w-full lg:w-1/2">
                    <div className="shadow-main rounded-[20px] mx-auto w-full md:w-[70%] lg:w-full shrink-0">
                        <iframe
                            src="https://www.youtube.com/embed/2htwraXnMWI?si=qqd0CGMGk0wjkLY7"
                            title="YouTube video player"
                            frameBorder={0}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="w-full min-h-50 h-auto sm:h-91.25 rounded-[20px] "
                        />
                    </div>

                    <div className="bg-container shadow-main rounded-[20px] p-10 flex-1">
                        <h4
                            className={`${language === "eng" ? "font-philosopher" : "font-noirrit"} font-bold text-2xl text-primary`}
                        >
                            {language === "eng"
                                ? "Expense Categories"
                                : "ব্যয়ের খাত"}
                        </h4>
                        <div
                            className={`pt-6 ${language === "eng" ? "font-medium" : ""} text-sm flex gap-2.5 items-center`}
                        >
                            <span className="size-2.5 bg-secondary block rounded-full"></span>
                            {language === "eng"
                                ? "All expenses related to the complex construction"
                                : "মসজিদ নির্মাণ সংক্রান্ত যাবতীয় ব্যয়।"}
                        </div>
                    </div>
                </div>
                {/* Right Side  */}
                <div className="w-full lg:w-1/2 flex flex-col gap-5 justify-between">
                    <div className="p-10 bg-container shadow-main rounded-[20px]">
                        <h2 className="font-philosopher leading-8.5 text-2xl font-bold text-primary">
                            {language === "eng" ? (
                                <p>
                                    Whoever builds a mosque, Allah will make for
                                    him a house in Paradise.{" "}
                                    <span className="font-normal">
                                        (Sahih al-Bukhari)
                                    </span>
                                </p>
                            ) : (
                                <p>
                                    যে ব্যক্তি মসজিদ নির্মাণ করে, আল্লাহ তার
                                    জন্য জান্নাতে ঘর নির্মাণ করবেন।{" "}
                                    <span className="font-normal">
                                        (সহীহ বুখারী)
                                    </span>
                                </p>
                            )}
                        </h2>
                    </div>
                    <p
                        className={`${language === "eng" ? "font-medium" : ""} w-full lg:max-w-146`}
                    >
                        {language === "eng"
                            ? " For the welfare of the Ummah, Baitul Haque Jame Masjid will stand as a centre of worship, guidance, and authentic Islamic learning. Insha'Allah, it will become a trusted place where people of all ages can strengthen their faith, gain sound Islamic knowledge, and develop noble character, contributing to a more righteous and united community."
                            : "উম্মাহর কল্যাণে বাইতুল হক্ব জামে মসজিদ হবে ইবাদত, হেদায়েত ও বিশুদ্ধ ইসলামী শিক্ষার এক বিশ্বস্ত কেন্দ্র। ইনশাআল্লাহ্‌, এখানে সকল বয়সের মানুষ ঈমানকে সুদৃঢ় করতে, সঠিক দ্বীনি জ্ঞান অর্জন করতে এবং ইসলামের আদর্শে উত্তম চরিত্র গঠনের মাধ্যমে একটি সৎ, সচেতন ও ঐক্যবদ্ধ সমাজ প্রতিষ্ঠায় ভূমিকা রাখবে।"}
                    </p>
                    <div className="p-10 bg-container shadow-main rounded-[20px] space-y-4">
                        <div className="leading-8.5 flex items-center gap-2 text-2xl font-philosopher font-bold">
                            <Image src={Bkash} className="size-6" alt="" />
                            <h4>{language === "eng" ? "Bkash" : "বিকাশ"} </h4>
                        </div>
                        <div className="flex gap-6 items-center">
                            <h2 className="font-bold font-philosopher text-2xl">
                                01712 345678{" "}
                                <span
                                    className={`${language === "eng" ? "font-nunito" : "font-noirrit"} font-semibold text-base`}
                                >
                                    {language === "eng"
                                        ? "(Personal)"
                                        : "(পার্সোনাল)"}
                                </span>
                            </h2>
                            <CopyButton text="01712345678" />
                        </div>
                        <div>
                            <ul className="leading-6">
                                <li className="flex items-center gap-2.5">
                                    <span className="block size-1.5 bg-secondary rounded-full"></span>
                                    <p>
                                        {language === "eng"
                                            ? " Donate by choosing the Send Money option."
                                            : "সেন্ড মানি অপশন থেকে পাঠাতে হবে।"}

                                        <span className="text-red-500">*</span>
                                    </p>
                                </li>{" "}
                                <li className="flex items-center gap-2.5">
                                    <span className="block size-1.5 bg-secondary rounded-full"></span>
                                    <p>
                                        {language === "eng"
                                            ? `Please enter your name as a reference. If you wish to remain anonymous, enter "Donate to BHJM" instead.`
                                            : "অনুগ্রহ করে রেফারেন্স হিসেবে আপনার নাম উল্লেখ করুন।"}

                                        <span className="text-red-500">*</span>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden md:flex gap-10 justify-around items-center p-10 bg-container max-width border border-primary/10 rounded-[20px]">
                <div className="">
                    <div className="flex flex-col gap-2 items-center leading-8.5">
                        <Image
                            src={PubaliBank}
                            className="size-24 lg:size-30"
                            alt=""
                        />
                        <h4
                            className={`text-xl lg:text-2xl ${language === "eng" ? "font-philosopher" : "font-noirrit"} font-bold `}
                        >
                            {language === "eng"
                                ? "Direct Bank Transfer"
                                : "সরাসরি ব্যাংক ট্রান্সফার"}
                        </h4>
                        <p
                            className={` text-center ${language === "eng" ? "font-semibold max-w-59.25" : "max-w-70"} text-sm lg:text-base`}
                        >
                            {language === "eng"
                                ? "For large Donations or overseas wire transfer."
                                : "বড় অঙ্কের অনুদান বা বিদেশ থেকে ব্যাংক ট্রান্সফারের মাধ্যমে দান করতে আগ্রহীদের জন্য।"}
                        </p>
                    </div>
                </div>
                <div className="h-60 w-px bg-gray-300"></div>
                <div className=" lg:text-2xl lg:leading-8.5">
                    <div className="flex gap-12 font-philosopher ">
                        <div className="flex flex-col gap-6 shrink-0">
                            <div className="flex flex-col gap-2">
                                <h4
                                    className={`${language === "bn" && "font-noirrit"}`}
                                >
                                    {language === "eng" ? "Bank" : "ব্যাংক"}
                                </h4>
                                <p className="font-bold">Pubali Bank PLC</p>
                            </div>
                            <div className="flex flex-col gap-2 pt-6 lg:pt-0">
                                <h4
                                    className={`${language === "bn" && "font-noirrit"}`}
                                >
                                    {language === "eng" ? "Branch" : "শাখা"}
                                </h4>
                                <p className="font-bold">Hetimgonj, Sylhet</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4
                                    className={`${language === "bn" && "font-noirrit"}`}
                                >
                                    {language === "eng"
                                        ? "Routing Number"
                                        : "রাউটিং নম্বর"}
                                </h4>
                                <p className="font-bold">175911758</p>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col gap-2 w-[90%] lg:w-full">
                                    <h4
                                        className={`${language === "bn" && "font-noirrit"}`}
                                    >
                                        {language === "eng"
                                            ? "Account Name"
                                            : "অ্যাকাউন্টের নাম"}
                                    </h4>
                                    <p className="font-bold">
                                        Baitul Haque Jame Masjid Kushumbag
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h4
                                        className={`${language === "bn" && "font-noirrit"}`}
                                    >
                                        {language === "eng"
                                            ? "Account Number"
                                            : "অ্যাকাউন্ট নম্বর"}
                                    </h4>
                                    <p className="font-bold">4327101045456</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h4
                                        className={`${language === "bn" && "font-noirrit"}`}
                                    >
                                        {language === "eng"
                                            ? "Swift Code"
                                            : "সুইফ্ট কোড"}
                                    </h4>
                                    <p className="font-bold">PUBABDDH</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="text-sm mt-2">
                        {language === "eng"
                            ? "Please include your name as reference."
                            : "অনুগ্রহ করে রেফারেন্স হিসেবে আপনার নাম উল্লেখ করুন।*"}

                        <span className="text-red-500">*</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default DonateSection;
