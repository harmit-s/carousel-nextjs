"use client"

import React from "react";
import { ChevronDown } from "lucide-react";
import useMediaQuery from "@/useMediaQuery";
import { useLanguage } from "@/LanguageContext";
import  translations from "@/translations";
import "@/styles/Footer.scss"

const footerData: { [key: string]: string[] } = {
  Shop: ["Seating", "Modules", "Tables", "Storage", "Accessories", "Outdoor", "Refurbished", "Gift Cards"],
  Explore: ["Altus Collection", "Ciello Collection", "Atmosphere Collection", "Neptune Collection", "Mistral Collection", "Free Swatches", "Blog - Simone's Corner", "Our Locations"],
  Company: ["About Cozey", "Our Story", "Our Initiatives", "Our Approach", "Careers"],
  Support: ["Track My Order", "FAQs", "Shipping", "Returns", "Warranty", "Financing", "Reviews", "Assembly Guides", "Consultations"],
  FollowUs: ["Instagram →", "Youtube →", "Facebook →", "X(Twitter) →", "Pinterest →", "TikTok →", "LinkedIn →"],
};

const Footer: React.FC = () => {
    const isDesktop = useMediaQuery("(min-width: 1280px)");
    const { selectedLang } = useLanguage();
    const t = translations[selectedLang]

  return (
    <footer className="footer">
      <div className="footer__sections">
        {Object.entries(footerData).map(([title, items], index) => {
          const translatedTitle = t[title as keyof typeof t] || title;

          return isDesktop ? (
            <div key={index} className="footer__dropdown footer__dropdown--desktop">
              <h4 className="footer__summary">{translatedTitle}</h4>
              <ul className="footer__list">
                {items.map((item, i) => (
                  <li key={i} className="footer__item">{item}</li>
                ))}
              </ul>
            </div>
          ) : (
            <details key={index} className="footer__dropdown">
              <summary className="footer__summary">
                <span>{translatedTitle}</span>
                <ChevronDown className="footer__icon" />
              </summary>
              <ul className="footer__list">
                {items.map((item, i) => (
                  <li key={i} className="footer__item">{item}</li>
                ))}
              </ul>
            </details>
          );
        })}
      </div>

      <div className="footer__legal">
        <p className="footer__copyright">{t.copyright}</p>
        <div className="footer__links">
          <a href="#" className="footer__link">{t.privacy}</a>
          <a href="#" className="footer__link">{t.terms}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;