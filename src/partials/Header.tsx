import Logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import LanguageButtons from "../components/LanguageButtons";
import PrimaryButton from "../components/PrimaryButton";

const Header = () => {
  return (
    <header className="py-5 max-width flex justify-between items-center">
      <Link href="/">
        <Image
          src={Logo}
          alt="Logo"
          width={150}
          height={50}
          className="object-contain"
        />
      </Link>
      <div className="flex items-center gap-5">
        <LanguageButtons />
        <PrimaryButton link="/" className="px-3 py-1.5">
          Want to visit !
        </PrimaryButton>
      </div>
    </header>
  );
};

export default Header;
