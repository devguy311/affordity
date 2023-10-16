import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
// import { getLanguage } from "./SiteUtil";

i18n
  .use(initReactI18next)
  .use(Backend)
  .use(LanguageDetector)
  .init({
    backend: {
      loadPath: "/lang/{{lng}}/{{ns}}.json",
    },
    // lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["path", "navigator"],
      caches: [],
    },
    keySeparator: ".",
    // defaultNS: "landingpage",
    // ns: ["landingpage"],
  });

export default i18n;
