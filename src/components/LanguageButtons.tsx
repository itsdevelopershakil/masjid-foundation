"use client";
import { useState } from "react";

const LanguageButtons = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("eng");
  return (
    <div className="rounded-md border border-[#20665C]/20 flex overflow-clip">
      <button
        className={`px-3 py-1.5 font-philosopher h-full ${selectedLanguage === "eng" ? "bg-primary text-container" : "bg-transparent text-text"}`}
        onClick={() => setSelectedLanguage("eng")}
      >
        Eng
      </button>
      <button
        className={`px-3 py-1.5 h-full ${selectedLanguage === "bn" ? "bg-primary text-container" : "bg-transparent text-text"}`}
        onClick={() => setSelectedLanguage("bn")}
      >
        বাংলা
      </button>
    </div>
  );
};

export default LanguageButtons;
