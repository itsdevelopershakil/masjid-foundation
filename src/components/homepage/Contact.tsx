import { getLanguage } from "@/src/lib/getLanguage";
import Image from "next/image";

import CallIcon from "@/public/icons/call.svg";
import LocationIcon from "@/public/icons/location-filled.svg";
import MailIcon from "@/public/icons/mail-rounded.svg";

const Contact = async () => {
    const language = await getLanguage();
    const titleFont = language === "bn" ? "font-noirrit" : "font-philosopher";
    return (
        <section className="pt-15 md:pt-20 scroll-mt-10" id="contact">
            <div className="max-width">
                <div className="flex flex-col gap-6 items-center">
                    <h1
                        className={`text-[26px] md:text-4xl font-bold ${titleFont} text-primary text-center`}
                    >
                        {language === "bn"
                            ? "আপনাকে স্বাগত জানাতে আমরা প্রস্তুত"
                            : "Wants to Visit Us !"}
                    </h1>
                    <h2
                        className={`text-xl md:text-2xl text-center ${language === "bn" ? "font-semibold" : "font-medium"} text-secondary md:block hidden`}
                    >
                        {language === "bn"
                            ? `যোগাযোগ ও ঠিকানা`
                            : "Contact & Location Info"}
                    </h2>
                    <div className="grid w-full max-w-196.5 gap-7.5 sm:grid-cols-3 mx-auto">
                        <div className="w-full flex flex-col gap-4 bg-container rounded-xl p-5 border border-primary/20 items-center">
                            <div className="flex items-center justify-center rounded-full size-10 bg-primary">
                                <Image src={LocationIcon} alt="Location" />
                            </div>
                            <h3
                                className={`font-bold text-xl text-secondary ${titleFont} text-center`}
                            >
                                {language === "bn" ? "ঠিকানা" : "Our Location"}
                            </h3>
                            <p
                                className={`${language === "bn" ? "font-semibold" : "font-medium"} text-sm leading-6 text-center text-text`}
                            >
                                {language === "bn" ? (
                                    <>
                                        কায়েস্তগ্রাম (কুসুমবাগ), <br />{" "}
                                        হেতিমগঞ্জ, গোলাপগঞ্জ, সিলেট
                                    </>
                                ) : (
                                    <>
                                        Kayestogram (Kushumbag),
                                        <br /> Hetimgonj, Golapgonj, Sylhet
                                    </>
                                )}
                            </p>
                        </div>
                        <div className="w-full flex flex-col gap-4 bg-container rounded-xl p-5 border border-primary/20 items-center">
                            <div className="flex items-center justify-center rounded-full size-10 bg-primary">
                                <Image src={CallIcon} alt="Call" />
                            </div>
                            <h3
                                className={`font-bold text-xl text-secondary ${titleFont} text-center`}
                            >
                                {language === "bn" ? "যোগাযোগ" : "Contact Us"}
                            </h3>
                            <div>
                                <p
                                    className={`${language === "bn" ? "font-semibold" : "font-medium"} text-sm leading-6 text-center text-text`}
                                >
                                    {language === "bn"
                                        ? "মোবাইল : +৮৮০ ১৭১১ ৩৯৯৫৯১"
                                        : "Mobile : +880 1711 399591"}
                                </p>
                                <p
                                    className={`${language === "bn" ? "font-semibold" : "font-medium"} text-sm leading-6 text-center text-text`}
                                >
                                    {language === "bn"
                                        ? "মোবাইল : +৪৪ ৭৭০৯ ৭২৬০৬৫"
                                        : "Mobile : +44 7709 726065"}
                                </p>
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-4 bg-container rounded-xl p-5 border border-primary/20 items-center">
                            <div className="flex items-center justify-center rounded-full size-10 bg-primary">
                                <Image src={MailIcon} alt="Mail" />
                            </div>
                            <h3
                                className={`font-bold text-xl text-secondary ${titleFont} text-center`}
                            >
                                {language === "bn"
                                    ? "গুরুত্বপূর্ণ পরামর্শ দিন"
                                    : "Write Some Words"}
                            </h3>
                            <div>
                                <p
                                    className={`${language === "bn" ? "font-semibold" : "font-medium"} text-sm leading-6 text-center text-text`}
                                >
                                    info.bhjmk@gmail.com
                                </p>
                                <p
                                    className={`${language === "bn" ? "font-semibold" : "font-medium"} text-sm leading-6 text-center text-text`}
                                >
                                    baitulhaque2024@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full mt-6">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.459390255297!2d91.96621237610891!3d24.84815494574845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3751ad00004e135d%3A0x2972962263964c8!2sBaitul%20Haque%20Jame%20Masjid%2C%20Kusumbag!5e0!3m2!1sen!2sbd!4v1781083501988!5m2!1sen!2sbd"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-50 sm:h-75"
                />
            </div>
        </section>
    );
};

export default Contact;
