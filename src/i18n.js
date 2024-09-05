import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enTranslations from "./locales/en.json";
import arTranslations from "./locales/ar.json";
import heTranslations from "./locales/he.json";

const setLocaleAndDirection = (lng) => {
  document.body.dir = lng === "ar" || lng === "he" ? "rtl" : "ltr";
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(
    {
      supportedLngs: ["en", "ar", "he"],
      fallbackLng: "ar",
      resources: {
        en: {
          translation: enTranslations,
        },
        ar: {
          translation: arTranslations,
        },
        he: {
          translation: heTranslations,
        },
      },
      debug: true, // Enable debug mode to see logs in the console
      detection: {
        order: ["path", "cookie", "localStorage", "htmlTag"],
        caches: ["cookie", "localStorage"],
      },
      react: {
        useSuspense: false, // Disable suspense to avoid issues with loading translations
      },
    },
    (err) => {
      if (err) {
        console.error("i18n initialization error:", err);
      } else {
        setLocaleAndDirection(i18n.language);
      }
    }
  );

i18n.on("languageChanged", (lng) => {
  setLocaleAndDirection(lng);
});

export default i18n;
