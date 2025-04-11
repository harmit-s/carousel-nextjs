"use client";

import React, { useState, useEffect } from "react";
import "flag-icons/css/flag-icons.min.css";
import { ChevronDown } from "lucide-react";
import useMediaQuery from "@/useMediaQuery";
import ThemeToggle from "@/components/ThemeToggle";
import { useLanguage } from "@/LanguageContext";
import translations from "@/translations";
import "@/styles/TopNavBar.scss";

const flags = {
  EN: "us",
  FR: "fr",
};

type LanguageKey = keyof typeof translations;

const TopNavBar: React.FC = () => {
  const isDesktop = useMediaQuery("(min-width: 1280px)");
  const { selectedLang, setSelectedLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setSelectedLang(isDesktop ? "EN" : "FR");
  }, [isDesktop, setSelectedLang]);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const selectLanguage = (lang: LanguageKey) => {
    setSelectedLang(lang);
    setIsOpen(false);
  };

  const t = translations[selectedLang];

  return (
    <div className="top-nav">
      <div className="top-nav__info">
        <span className="top-nav__info--mobile">
          {t.designed} <span className="top-nav__divider">|</span> {t.shipping}
        </span>
        <span className="top-nav__info--desktop">
          {t.designed} <span className="top-nav__divider">|</span> {t.shipping}
        </span>
      </div>

      <div className="top-nav__links">
        <a href="#" className="top-nav__link">{t.reviews}</a>
        <a href="#" className="top-nav__link">{t.swatches}</a>
        <a href="#" className="top-nav__link">{t.financing}</a>
        <a href="#" className="top-nav__link">{t.support}</a>
        <a href="#" className="top-nav__link">{t.contact}</a>
        <a href="#" className="top-nav__link">{t.locations}</a>
      </div>

      <ThemeToggle />

      <div className="top-nav__locale" onClick={toggleDropdown}>
        <span className="top-nav__lang">{selectedLang}</span>
        <span className={`fi fi-${flags[selectedLang]} top-nav__flag`} />
        <span className="top-nav__arrow"><ChevronDown size={13} /></span>
        {isOpen && (
          <ul className="top-nav__dropdown">
            {Object.entries(flags).map(([lang, code]) => (
              <li
                key={lang}
                className="top-nav__option"
                onClick={() => selectLanguage(lang as LanguageKey)}
              >
                <span className={`fi fi-${code} top-nav__flag`} />
                <span className="top-nav__option-label">{lang}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TopNavBar;
