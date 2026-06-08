"use client";

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { createContext, useContext, useState } from "react";

type Language = "eng" | "bn";

type AppContextType = {
  selectedLanguage: Language;
  setLanguage: (lang: Language) => void;
  toggleMenu: boolean;
  setToggleMenu: (toggle: boolean) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({
  children,
  initialLanguage,
}: {
  children: React.ReactNode;
  initialLanguage: Language;
}) {
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] =
    useState<Language>(initialLanguage);
  const [toggleMenu, setToggleMenu] = useState(false);

  const setLanguage = (lang: Language) => {
    Cookies.set("language", lang, {
      expires: 365,
      sameSite: "lax",
    });

    setSelectedLanguage(lang);
    router.refresh();
  };

  return (
    <AppContext.Provider
      value={{
        selectedLanguage,
        setLanguage,
        toggleMenu,
        setToggleMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }

  return context;
}
