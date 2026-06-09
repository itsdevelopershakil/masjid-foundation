import HajjBg from "@/public/images/HajjBg.jpg";
import Tawhid from "@/public/images/icons/allah.svg";
import Hajj from "@/public/images/icons/kaaba.svg";
import Sawm from "@/public/images/icons/ramadan.svg";
import Salah from "@/public/images/icons/sujood.svg";
import Zakat from "@/public/images/icons/zakat.svg";
import zakatBg from "@/public/images/zakatRatioBg.jpg";

import { getLanguage } from "@/src/lib/getLanguage";
import Image from "next/image";

const FivePiller = async () => {
    const language = await getLanguage();
    return (
        <section className="max-width pt-20">
            <h3
                className={`text-primary text-4xl font-bold text-center ${language === "eng" ? "font-philosopher" : "font-noirrit"}`}
            >
                {language === "eng"
                    ? "The Five Pillars of Islam"
                    : "ইসলামের পাঁচটি স্তম্ভ"}
            </h3>
            <p
                className={`mt-6 text-secondary text-center text-xl md:text-2xl max-w-220 mx-auto ${language === "eng" ? "font-medium" : "font-semibold"} leading-6 md:leading-9 hidden sm:block`}
            >
                {language === "eng"
                    ? "The foundational core of a Muslim's life and faith, guidingour devotion to Allah and our duty to uplift the community through charity and service."
                    : "ইসলামের পাঁচটি স্তম্ভ একজন মুসলমানের ঈমান ও জীবনের ভিত্তি, যা আল্লাহর প্রতি আনুগত্য এবং মানবতার সেবায় নিজেকে উৎসর্গ করার শিক্ষা দেয়।"}
            </p>
            <div className="pt-6 grid grid-cols-6 gap-7.5">
                <div className="col-span-6 sm:col-span-3 lg:col-span-2 p-4 border border-[rgb(32,102,92)]/10 rounded-xl bg-container">
                    <div className="p-1.25 border border-[rgb(32,102,92)]/10 size-12 rounded-md flex justify-center items-center">
                        <Image className="size-8" src={Tawhid} alt="" />
                    </div>
                    <h4
                        className={`mt-4 font-bold text-primary text-[20px] ${language === "eng" ? "font-philosopher" : "font-noirrit"} `}
                    >
                        {language === "eng" ? "Iman (Faith)" : "ঈমান (বিশ্বাস)"}
                    </h4>
                    <p className="mt-4 leading-6  text-sm w-full lg:max-w-67">
                        {language === "eng"
                            ? " The declaration of faith: “There is no God but Allah, and Muhammad (S:) is His messenger,” signifying total devotion."
                            : "“আল্লাহ ছাড়া কোনো উপাস্য নেই এবং মুহাম্মদ ﷺ তাঁর রাসূল” — এই সাক্ষ্য প্রদানের মাধ্যমে একজন মুসলমান আল্লাহর প্রতি পূর্ণ বিশ্বাস, আনুগত্য ও আত্মসমর্পণের অঙ্গীকার করে।"}
                    </p>
                    <ul className="mt-4 list-disc px-4 marker:text-secondary text-sm font-nunito text-primary">
                        <li>
                            {language === "eng"
                                ? "Absolute Monotheism"
                                : "তাওহীদে বিশ্বাস (একত্ববাদ)"}
                        </li>
                        <li>
                            {language === "eng"
                                ? "AIntentionality (Niyyah)"
                                : "তাওহীদে বিশ্বাস (একত্ববাদ)"}
                        </li>
                    </ul>
                </div>
                <div className="col-span-6 sm:col-span-3 lg:col-span-2 p-4 border border-[rgb(32,102,92)]/10 rounded-xl bg-container">
                    <div className="p-1.25 border border-[rgb(32,102,92)]/20 size-12 rounded-md flex justify-center items-center">
                        <Image src={Salah} className="size-8" alt="" />
                    </div>
                    <h4
                        className={`mt-4 font-bold text-primary text-[20px] ${language === "eng" ? "font-philosopher" : "font-noirrit"} `}
                    >
                        {language === "eng"
                            ? "Salah (Prayer)"
                            : "সালাত (নামাজ)"}
                    </h4>
                    <p className="mt-4 text-sm leading-6 w-full lg:max-w-72">
                        {language === "eng"
                            ? "The five daily prayers performed at dawn, noon, afternoon, sunset, and night, connecting the believer to the Divine."
                            : "সালাত একজন মুসলমানের জীবনের অবিচ্ছেদ্য অংশ। দিনে পাঁচ ওয়াক্ত নামাজের মাধ্যমে একজন মুমিন আল্লাহর প্রতি আনুগত্য প্রকাশ করে এবং তাঁর সন্তুষ্টির পথে অগ্রসর হয়।"}
                    </p>
                    <ul className="mt-4 grid grid-cols-6 gap-1.5">
                        <li
                            className={`col-span-2 p-1 text-sm border rounded-md border-[rgb(32,102,92)]/20 text-center ${language === "bn" ? "font-noirrit" : "font-philosopher"} font-bold text-primary bg-bg`}
                        >
                            {language === "eng" ? "Fajr" : "ফজর"}
                        </li>
                        <li
                            className={`col-span-2 p-1 text-sm border rounded-md border-[rgb(32,102,92)]/20 text-center  ${language === "bn" ? "font-noirrit" : "font-philosopher"} font-bold text-primary bg-bg`}
                        >
                            {language === "eng" ? "Dhuhr" : "যোহর"}
                        </li>
                        <li
                            className={`col-span-2 p-1 text-sm border rounded-md border-[rgb(32,102,92)]/20 text-center ${language === "bn" ? "font-noirrit" : "font-philosopher"} font-bold text-primary bg-bg`}
                        >
                            {language === "eng" ? "Asr" : "আসর"}
                        </li>
                        <li
                            className={`col-span-2 p-1 text-sm border rounded-md border-[rgb(32,102,92)]/20 text-center  ${language === "bn" ? "font-noirrit" : "font-philosopher"} font-bold text-primary bg-bg`}
                        >
                            {language === "eng" ? "Maghrib" : "মাগরিব"}
                        </li>
                        <li
                            className={`col-span-2 p-1 text-sm border rounded-md border-[rgb(32,102,92)]/20 text-center  ${language === "bn" ? "font-noirrit" : "font-philosopher"} font-bold text-primary bg-bg`}
                        >
                            {language === "eng" ? "Isha" : "ইশা"}
                        </li>
                    </ul>
                </div>
                <div className="col-span-6 sm:col-span-3 lg:col-span-2 p-4 border border-[rgb(32,102,92)]/10 rounded-xl bg-container">
                    <div className="p-1.25 border border-[rgb(32,102,92)]/20 size-12 rounded-md flex justify-center items-center">
                        <Image src={Sawm} className="size-8" alt="" />
                    </div>
                    <h4
                        className={`mt-4 font-bold text-primary text-[20px] ${language === "eng" ? "font-philosopher" : "font-noirrit"} `}
                    >
                        {language === "eng" ? "Sawm (Fasting)" : "সাওম (রোজা)"}
                    </h4>
                    <p className="mt-4 text-sm leading-6 w-full lg:max-w-67">
                        {language === "eng"
                            ? "Abstaining from food, drink, and worldly desires from dawn until sunset during the holy month of Ramadan."
                            : "পবিত্র রমজান মাসে সুবহে সাদিক থেকে সূর্যাস্ত পর্যন্ত পানাহার ও সকল প্রকার নফসানী চাহিদা থেকে বিরত থাকার মাধ্যমে আল্লাহর সন্তুষ্টি অর্জনের ইবাদতই হলো সাওম।"}
                    </p>
                    <div className="mt-4 border-l px-3 font-light leading-4.5 text-xs rounded-md border-secondary italic text-text bg-bg">
                        {language === "eng" ? (
                            <p>
                                “Whoever fasts with faith and seeking reward,
                                his previous sins will be forgiven.” <br />
                                (- Sahih al-Bukhari)
                            </p>
                        ) : (
                            <p>
                                “যে ব্যক্তি ঈমানের সাথে এবং সওয়াবের আশায় রমজানের
                                রোজা পালন করে, তার পূর্ববর্তী গুনাহসমূহ ক্ষমা
                                করে দেওয়া হয়।”
                                <br />{" "}
                                <span className="text-primary">
                                    (সহীহ আল-বুখারি)
                                </span>
                            </p>
                        )}
                    </div>
                </div>
                <div className="col-span-6 sm:col-span-3 p-4 border border-[rgb(32,102,92)]/10 rounded-xl flex gap-5 justify-between items-center">
                    <div>
                        <div className="p-1.25 border border-[rgb(32,102,92)]/20 size-12 rounded-md flex justify-center items-center">
                            <Image
                                src={Zakat}
                                className="size-8 rounded-md"
                                alt=""
                            />
                        </div>
                        <h4
                            className={`mt-4 font-bold text-primary text-[20px] ${language === "eng" ? "font-philosopher" : "font-noirrit"} `}
                        >
                            {language === "eng"
                                ? "Zakat (Almsgiving)"
                                : "যাকাত (দান করা)"}
                        </h4>
                        <p className="mt-4 text-sm leading-6  w-full lg:max-w-83.25">
                            {language === "eng"
                                ? "The mandatory charitable contribution of 2.5% of one’s wealth to help the poor and needy, purifying one’s soul and finances."
                                : "যাকাত ইসলামের অন্যতম প্রধান স্তম্ভ। এটি একটি বাধ্যতামূলক ইবাদত, যার মাধ্যমে নির্ধারিত পরিমাণ সম্পদের ২.৫% দরিদ্র ও অভাবগ্রস্তদের মাঝে বিতরণ করা হয়। যাকাত সম্পদকে পবিত্র করে, সমাজে ভারসাম্য প্রতিষ্ঠা করে এবং অসহায় মানুষের কল্যাণে গুরুত্বপূর্ণ ভূমিকা রাখে।"}
                        </p>
                    </div>
                    <div
                        className="size-50 bacground-cover background-center flex-col rounded-md justify-center items-center text-white hidden lg:flex"
                        style={{ backgroundImage: `url(${zakatBg.src})` }}
                    >
                        <p className="font-philosopher font-bold leading-10 text-[32px]">
                            {language === "eng" ? "2.5%" : "২.৫%"}
                        </p>
                        <p
                            className={`font-bold text-[20px] ${language === "eng" ? "font-philosopher" : "font-noirrit"}`}
                        >
                            {language === "eng"
                                ? "Wealth Ratio"
                                : "সম্পদের অনুপাত"}
                        </p>
                    </div>
                </div>
                <div className="col-span-6 sm:col-span-3 p-4 border border-[rgb(32,102,92)]/10 rounded-xl flex sm:justify-center gap-5">
                    <div>
                        <div className="p-1.25 border border-[rgb(32,102,92)]/20 size-12 rounded-md flex justify-center items-center">
                            <Image src={Hajj} className="w-full" alt="" />
                        </div>
                        <h4
                            className={`mt-4 font-bold text-primary text-[20px] ${language === "eng" ? "font-philosopher" : "font-noirrit"} `}
                        >
                            {language === "eng"
                                ? "Hajj (Pilgrimage)"
                                : "হজ (মক্কায় পবিত্র সফর)"}
                        </h4>
                        <p className="mt-4 text-sm leading-6 w-full lg:max-w-83.25">
                            {language === "eng"
                                ? "The pilgrimage to the holy city of Mecca, a duty for every Muslim who is physically and financially able at least once in their lifetime."
                                : "হজ হলো পবিত্র মক্কা নগরীতে সম্পাদিত একটি ইবাদতের সফর, যা প্রত্যেক মুসলমানের জন্য জীবনে অন্তত একবার পালন করা ফরজ যদি তিনি শারীরিক ও আর্থিকভাবে সক্ষম হন।"}
                        </p>
                    </div>
                    <div className="hidden lg:block">
                        <Image className="size-50" src={HajjBg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FivePiller;
