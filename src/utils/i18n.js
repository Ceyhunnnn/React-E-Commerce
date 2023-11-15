import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import EN from "./locales/en/lang.json";
import TR from "./locales/tr/lang.json";
import Config from "config/index";
const resources = {
  en: {
    translation: EN,
  },
  tr: {
    translation: TR,
  },
};
const i18nInit = {
  resources,
  lng: localStorage.getItem("i18nextLng") || Config.lang.default,
  fallbackLng: "tr",
  interpolation: {
    escapeValue: false,
  },
};
i18n.use(LanguageDetector).use(initReactI18next).init(i18nInit);

export default i18n;
