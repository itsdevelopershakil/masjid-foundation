import FixedLanguageBox from "@/src/components/FixedLanguageBox";
import Footer from "@/src/partials/Footer";
import Header from "@/src/partials/Header";

export default async function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {/* <AppProvider initialLanguage={language}> */}
            <Header />
            <FixedLanguageBox />
            {children}
            <Footer />

            {/* </AppProvider> */}
        </>
    );
}
