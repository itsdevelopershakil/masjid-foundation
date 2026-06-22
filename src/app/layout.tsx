import type { Metadata } from "next";
import { Amiri, Nunito, Philosopher } from "next/font/google";
import localFont from "next/font/local";
import { cookies } from "next/headers";
import LoadingOverlay from "../components/LoadingOverlay";
import { AppProvider } from "../context/AppContext";
import "./globals.css";

export const philosopher = Philosopher({
    weight: ["400", "700"],
    variable: "--font-philosopher",
    subsets: ["latin"],
});

const nunito = Nunito({
    weight: ["400", "500", "600", "700"],
    variable: "--font-nunito",
    subsets: ["latin"],
});

const amiri = Amiri({
    weight: ["400", "700"],
    variable: "--font-amiri",
    subsets: ["latin"],
});

const noirrit = localFont({
    src: [
        {
            path: "../assets/fonts/Li_Ador_Noirrit_Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../assets/fonts/Li_Ador_Noirrit_Italic.ttf",
            weight: "400",
            style: "italic",
        },
        {
            path: "../assets/fonts/Li_Ador_Noirrit_Bold.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "../assets/fonts/Li_Ador_Noirrit_SemiBold.ttf",
            weight: "600",
            style: "normal",
        },
    ],
    variable: "--font-noirrit",
});

export async function generateMetadata(): Promise<Metadata> {
    const cookieStore = await cookies();

    const language = cookieStore.get("language")?.value === "bn" ? "bn" : "eng";

    return {
        title: "Baitul Haque Jame Masjid",
        description:
            language === "bn"
                ? "বাইতুল হক্ব জামে মসজিদ; এটি বিশ্বাস, ইসলামিক শিক্ষা, আধ্যাত্মিক উন্নয়ন ও সম্প্রদায়গত ঐক্যের কেন্দ্র।"
                : "More than a place of prayer, Baitul Haque Jame Masjid is a centre for faith, Islamic learning, spiritual growth, and community unity.",

        other: {
            designers: "Shahria Hussain & Shumon Ahmad",
            developers: "Shakil Ahmed & Mahdi Hussain",
            credits:
                "Designed by Shahria Hussain & Shumon Ahmad. Developed by Shakil Ahmed & Mahdi Hussain.",

            "developer-shakil-github": "https://github.com/itsdevelopershakil",
            "developer-mahdi-github": "https://github.com/mahdiHdev",
        },

        icons: {
            icon: "/favicon.png",
        },
    };
}

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const cookieStore = await cookies();
    const language = cookieStore.get("language")?.value === "bn" ? "bn" : "eng";

    return (
        <html
            lang="en"
            className={`${philosopher.variable} ${nunito.variable} ${noirrit.variable} ${amiri.variable} h-full antialiased bg-bg`}
        >
            <body className="min-h-full flex flex-col">
                <AppProvider initialLanguage={language}>
                    <LoadingOverlay />
                    {children}
                </AppProvider>
            </body>
        </html>
    );
}
