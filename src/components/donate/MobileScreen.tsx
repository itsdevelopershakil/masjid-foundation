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
                            01712 345678
                        </span>{" "}
                        (Personal)
                    </p>
                    <CopyButton text="01712345678" />
                </div>
                <ul className="text-sm">
                    <li className="flex items-center gap-4 max-w-68 leading-6">
                        <span className="block size-1.5 bg-secondary shrink-0 rounded-full"></span>
                        <p>
                            Donate by choosing the{" "}
                            <span className="font-semibold">Send Money</span>{" "}
                            option. <span className="text-red-500">*</span>
                        </p>
                    </li>{" "}
                    <li className="flex items-center gap-4 leading-6">
                        <span className="block size-1.5 bg-secondary shrink-0 rounded-full"></span>
                        <p>
                            {" "}
                            Please include your name as reference.
                            <span className="text-red-500">*</span>
                        </p>
                    </li>
                </ul>
            </div>
            <div>
                <h3 className="font-philosopher font-bold leading-6.5 text-primary text-center p-5 bg-container rounded-[20px] shadow-main">
                    Whoever builds a mosque, Allah will make for him a house in
                    Paradise. (Sahih al-Bukhari)
                </h3>
            </div>
        </section>
    );
};

export default MobileScreenSection;
