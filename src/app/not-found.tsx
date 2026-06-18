import errorPhone from "@/public/error-phone.svg";
import serverError from "@/public/server-error.svg";
import Image from "next/image";
import Link from "next/link";
import { getLanguage } from "../lib/getLanguage";

const notFound = async () => {
    const language = await getLanguage();
    return (
        <div
            className={`flex flex-col gap-6 items-center p-4 py-15 md:p-20 ${language === "eng" ? "font-philosopher" : "font-noirrit"} text-center`}
        >
            <Image
                className="w-100 hidden md:block"
                src={serverError}
                alt=""
                loading="eager"
            />
            <Image className="w-30 md:hidden" src={errorPhone} alt="" />
            <h1
                className={`font-bold text-primary text-[32px] md:text-4xl lg:text-5xl ${language === "bn" ? "w-[80%] md:w-full" : "w-[90%] md:w-full"}`}
            >
                {language === "eng"
                    ? "Sorry, the page could not be found."
                    : "দুঃখিত, পৃষ্ঠাটি খুঁজে পাওয়া যায়নি।"}
            </h1>
            <p
                className={`md:text-xl lg:text-2xl text-secondary ${language === "bn" ? "w-[80%]  md:w-full" : "w-[90%] md:w-full"}`}
            >
                {language === "eng"
                    ? "The page you are looking for does not exist or has been moved."
                    : "আপনি যে পৃষ্ঠাটি খুঁজছেন, সেটি বর্তমানে নেই বা স্থানান্তরিত হয়েছে।"}
            </p>
            <Link
                className="py-1.5 px-3 md:px-6 md:py-3 bg-primary text-container md:text-lg font-bold rounded-md"
                href="/"
            >
                {language === "eng"
                    ? "Go Back To Homepage"
                    : "হোমপেজে ফিরে যান"}
            </Link>
        </div>
    );
};

export default notFound;
