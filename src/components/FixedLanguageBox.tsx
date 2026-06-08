"use client";

import { useRef, useState } from "react";
import { CiGlobe } from "react-icons/ci";
import { useAppContext } from "../context/AppContext";
import useOutsideClick from "../hooks/useOutsideClick";

const FixedLanguageBox = () => {
  const { selectedLanguage, setLanguage } = useAppContext();
  const [isOpen, setIsOpen] = useState(false);
  const boxRef = useRef(null);

  useOutsideClick(boxRef, () => {
    setIsOpen(false);
  });

  return (
    <div ref={boxRef} className="fixed bottom-10 right-4 z-20 block sm:hidden">
      <button
        className="size-12 rounded-full bg-secondary shrink-0 flex justify-center items-center shadow-main"
        id="languageToggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        <CiGlobe className="text-2xl shrink-0 text-white" />
      </button>
      <div
        id="languageOptions"
        className={`absolute right-0 bottom-14 rounded-md p-2.5 flex flex-col gap-2 bg-container shadow-main border border-primary/10 duration-300 origin-bottom ${isOpen ? "visible opacity-100 scale-y-full" : "invisible opacity-0 scale-y-0"}`}
      >
        <button
          className={` ${selectedLanguage === "eng" ? "bg-primary border-primary text-white" : "bg-bg border-primary/20 text-text"} border w-25 py-1.5 text-center text-sm leading-6 font-semibold rounded-md`}
          onClick={() => {
            setLanguage("eng");
            setIsOpen(false);
          }}
        >
          Eng
        </button>
        <button
          className={` ${selectedLanguage === "bn" ? "bg-primary border-primary text-white" : "bg-bg border-primary/20 text-text"} border  w-25 py-1.5 text-center text-sm leading-6 font-semibold rounded-md`}
          onClick={() => {
            setLanguage("bn");
            setIsOpen(false);
          }}
        >
          বাংলা
        </button>
      </div>
    </div>
  );
};

export default FixedLanguageBox;
