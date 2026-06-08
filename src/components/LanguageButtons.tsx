"use client";
import { useAppContext } from "../context/AppContext";

const LanguageButtons = () => {
  const { selectedLanguage, setLanguage } = useAppContext();
  return (
    <div className="rounded-md border border-[#20665C]/20 overflow-clip hidden sm:flex">
      <button
        type="button"
        className={`px-2.5 py-1.5 h-full ${selectedLanguage === "eng" ? "bg-primary text-container" : "bg-transparent text-text"} font-philosopher`}
        onClick={() => setLanguage("eng")}
      >
        ENG
      </button>
      <button
        type="button"
        className={`px-2.5 py-1.5 h-full ${selectedLanguage === "bn" ? "bg-primary text-container" : "bg-transparent text-text"}`}
        onClick={() => setLanguage("bn")}
      >
        বাংলা
      </button>
    </div>
  );
};

export default LanguageButtons;
