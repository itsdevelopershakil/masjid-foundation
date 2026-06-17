import LogoBangla from "@/public/logo-bangla.png";
import Logo from "@/public/logo.png";
import Image from "next/image";
import LanguageButtons from "../components/LanguageButtons";
import PrimaryButton from "../components/PrimaryButton";
import ScrollLink from "../components/ScrollLink";
import ToggleMenuButton from "../components/ToggleMenuButton";
import { getLanguage } from "../lib/getLanguage";
import SidePanel from "./SidePanel";

const Header = async () => {
  const language = await getLanguage();
  return (
    <header className="py-5 sticky top-0 z-10 bg-container border-b border-primary/20">
      <div className="max-width flex justify-between items-center">
        <ScrollLink href="/">
          <div className="relative w-30 sm:w-37.5 h-10">
            <Image
              src={language === "bn" ? LogoBangla : Logo}
              alt="Logo"
              fill
              sizes="120px (max-width: 640px) 150px"
              className="object-contain"
            />
          </div>
        </ScrollLink>
        <div className="flex items-center gap-3 sm:gap-5">
          <LanguageButtons />
          <PrimaryButton link="/" className="px-3 py-1.5">
            {language === "bn" ? "মসজিদে আসতে চান !" : "Want to visit !"}
          </PrimaryButton>
          <ToggleMenuButton />
        </div>
      </div>
      <SidePanel />
    </header>
  );
};

export default Header;
