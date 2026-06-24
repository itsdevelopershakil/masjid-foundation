import Bkash from "@/public/icons/bkash.svg";
import PubaliBank from "@/public/icons/pubaliBank.svg";
import { getLanguage } from "@/src/lib/getLanguage";
import Image from "next/image";
import { CopyButton } from "./CopyButton";

const MobileScreenSection = async () => {
    const language = await getLanguage();
    return (
        <section className="max-width flex flex-col gap-5 my-15  md:hidden">
            <h1
                className={`text-center ${language === "eng" ? "font-philosopher" : "font-noirrit"}  font-bold text-[32px] leading-10.5 text-primary`}
            >
                {language === "eng"
                    ? "Direct Bank Transfer"
                    : "সরাসরি ব্যাংক ট্রান্সফার"}
            </h1>
            <div className="bg-container border border-primary/20 rounded-[20px] p-5 flex flex-col gap-3 text-sm sm:text-base shadow-main">
                <Image
                    src={PubaliBank}
                    className="size-12.5 sm:size-16"
                    alt=""
                />
                <p>
                    {language === "eng" ? "Bank " : "ব্যাংক "}:{" "}
                    <span className="font-bold">Pubali Bank PLC</span>
                </p>
                <p>
                    {language === "eng" ? "Branch " : "শাখা "}:{" "}
                    <span className="font-bold">Hetimgonj, Sylhet</span>
                </p>
                <p>
                    {language === "eng" ? "Routing No " : "রাউটিং নম্বর "}:{" "}
                    <span className="font-bold">175911758</span>
                </p>
                <p>
                    {language === "eng" ? "Account " : "অ্যাকাউন্ট "}:{" "}
                    <span className="font-bold">Baitul Haque Jame Masjid</span>
                </p>
                <p>
                    {language === "eng" ? "Account No " : "অ্যাকাউন্ট নম্বর "}:{" "}
                    :<span className="font-bold">4327101045456</span>
                </p>
                <p>
                    {language === "eng" ? "Swift Code" : "সুইফ্ট কোড"}:{" "}
                    <span className="font-bold">PUBABDDH</span>
                </p>
                <p className="text-xs sm:text-sm font-philosopher">
                    Please include your name as reference
                    <span className="span text-red-500">*</span>
                </p>
            </div>
            <div className="bg-container p-5 rounded-[20px] shadow-main leading-8.5 flex flex-col gap-3">
                <div className="flex gap-2 items-center">
                    <Image className="size-6" src={Bkash} alt="" />
                    <h3 className="font-bold font-philosopher text-2xl">
                        Bkash
                    </h3>
                </div>
                <div className="flex justify-between items-center">
                    <p className="font-semibold">
                        <span className="font-philosopher font-bold">
                            017***********
                        </span>{" "}
                        (Personal)
                    </p>
                    <CopyButton text="**********" />
                </div>
                <ul className="text-sm">
                    <li className="flex  gap-4 max-w-68 leading-6">
                        <span className="block size-1.5 bg-secondary shrink-0 rounded-full mt-2"></span>
                        {language === "eng" ? (
                            <p>
                                Donate by choosing the{" "}
                                <span className="font-semibold">
                                    Send Money
                                </span>{" "}
                                option.<span className="text-red-500">*</span>
                            </p>
                        ) : (
                            <p>
                                অনুগ্রহ করে রেফারেন্স হিসেবে আপনার নাম উল্লেখ
                                করুন।<span className="text-red-500">*</span>
                            </p>
                        )}
                    </li>{" "}
                    <li className="flex gap-4 leading-6">
                        <span className="block size-1.5 bg-secondary shrink-0 rounded-full mt-2"></span>
                        <p>
                            {language === "eng"
                                ? "Please include your name as reference."
                                : "সেন্ড মানি অপশন থেকে পাঠাতে হবে।"}

                            <span className="text-red-500">*</span>
                        </p>
                    </li>
                    <li className="flex gap-4 leading-6">
                        <span className="block size-1.5 bg-secondary shrink-0 rounded-full mt-2"></span>
                        <div className="leading-6">
                            {language === "eng" ? (
                                <p>
                                    If you wish to remain anonymous, enter
                                    <span className="font-semibold">
                                        &quot;Donate to BHJM&quot;
                                    </span>{" "}
                                    instead.
                                    <span className="text-red-500">*</span>
                                </p>
                            ) : (
                                <p>
                                    আপনি যদি পরিচয় গোপন রাখতে চান, তাহলে{" "}
                                    <span className="font-semibold">
                                        “Donate to BHJM”
                                    </span>{" "}
                                    লিখুন।
                                    <span className="text-red-500">*</span>
                                </p>
                            )}
                        </div>
                    </li>
                </ul>
            </div>
            <div>
                {language === "eng" ? (
                    <h3 className="font-philosopher font-bold leading-6.5 text-primary text-center p-5 bg-container rounded-[20px] shadow-main">
                        Whoever builds a mosque, Allah will make for him a house
                        in Paradise.{" "}
                        <span className="font-normal block">
                            (Sahih al-Bukhari)
                        </span>
                    </h3>
                ) : (
                    <h3
                        className={`${language === "bn" ? "font-noirrit" : "font-philosopher"}  font-bold leading-6.5 text-primary text-center p-5 bg-container rounded-[20px] shadow-main`}
                    >
                        যে ব্যক্তি মসজিদ নির্মাণ করে, আল্লাহ তার জন্য জান্নাতে
                        ঘর নির্মাণ করবেন।{" "}
                        <span className="font-normal block">(সহীহ বুখারী)</span>
                    </h3>
                )}
            </div>
            <div className="rounded-[20px] w-full">
                <iframe
                    src="https://www.youtube.com/embed/HKsEkmrlwEc?si=9Ut-NhN0yQ7mW9rK"
                    title="YouTube video player"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full min-h-50 h-auto sm:h-91.25 rounded-[20px] "
                />
            </div>
            <p className="font-medium text-text leading-6.5">
                {language === "eng"
                    ? `For the welfare of the Ummah, Baitul Haque Jame Masjid will stand as a centre of worship, guidance, and authentic Islamic learning Insha'Allah, it will become a trusted place where people of all ages can strengthen their faith, gain sound
                Islamic knowledge, and develop noble character, contributing to
                a more righteous and united community.`
                    : "উম্মাহর কল্যাণে বাইতুল হক্ব জামে মসজিদ হবে ইবাদত, হেদায়েত ও বিশুদ্ধ ইসলামী শিক্ষার এক বিশ্বস্ত কেন্দ্র। ইনশাআল্লাহ্‌, এখানে সকল বয়সের মানুষ ঈমানকে সুদৃঢ় করতে, সঠিক দ্বীনি জ্ঞান অর্জন করতে এবং ইসলামের আদর্শে উত্তম চরিত্র গঠনের মাধ্যমে একটি সৎ, সচেতন ও ঐক্যবদ্ধ সমাজ প্রতিষ্ঠায় ভূমিকা রাখবে।"}
            </p>
            <div className="p-5 bg-container rounded-[20px] shadow-main flex flex-col gap-2.5">
                <h3 className="text-2xl text-primary font-bold font-philosopher">
                    Expense Categories
                </h3>
                <div className="flex gap-2">
                    <p className="size-2.5 bg-secondary rounded-full shrink-0 mt-2"></p>
                    <p className="">
                        {language === "eng"
                            ? "All expenses related to the complex construction"
                            : "মসজিদ নির্মাণ সংক্রান্ত যাবতীয় ব্যয়।"}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default MobileScreenSection;
