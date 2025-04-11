"use client"
import React from "react";
import { useLanguage } from "@/LanguageContext";
import translations from "@/translations"
import "@/styles/SignupSection.scss"

const SignupSection: React.FC = () => {
  const { selectedLang } = useLanguage();
  const t = translations[selectedLang];
  return (
    <section className="signup">
      <div className="signup__content">
        <p className="signup__text">
          {t.signupPrompt}
        </p>
        <form className="signup__form" onSubmit={(e) => e.preventDefault()}>
          <div className="signup__input-wrapper">
            <input type="email" placeholder={t.signupPlaceholder} className="signup__input" required />
            <button type="submit" className="signup__button">{t.signupButton}</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignupSection;