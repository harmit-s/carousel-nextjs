"use client";

import React from "react";
import { Search, ShoppingCart, User, Menu } from "lucide-react";
import "@/styles/Header.scss";
import Link from "next/link";
import { useLanguage } from "@/LanguageContext";
import translations from "@/translations";

const Header: React.FC = () => {
  const { selectedLang } = useLanguage();
  const t = translations[selectedLang];

  return (
    <header className="header">
      <Link href="/" className="header__logo">cozey</Link>

      <nav className="header__nav">
        <a href="#" className="header__link">{t.seating}</a>
        <a href="#" className="header__link">{t.tables}</a>
        <a href="#" className="header__link">{t.storage}</a>
        <a href="#" className="header__link">{t.accessories}</a>
        <a href="#" className="header__link">{t.rugs}</a>
        <a href="#" className="header__link">{t.outdoor}</a>
      </nav>

      <div className="header__icons">
        <Search className="header__icon header__icon--mobile" />
        <User className="header__icon header__icon--mobile" />
        <Menu className="header__icon header__icon--mobile" />
        <ShoppingCart className="header__icon" />
      </div>
    </header>
  );
};

export default Header;
