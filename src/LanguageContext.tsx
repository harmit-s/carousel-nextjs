import React, { createContext, useContext, useState, ReactNode } from "react";
import translations from "@/translations";

type Language = "EN" | "FR";

interface LanguageContextProps {
  selectedLang: Language;
  setSelectedLang: (lang: Language) => void;
  t: (key: keyof typeof translations.EN) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [selectedLang, setSelectedLang] = useState<Language>("EN");

  const t = (key: keyof typeof translations.EN) => translations[selectedLang][key];

  return (
    <LanguageContext.Provider value={{ selectedLang, setSelectedLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
