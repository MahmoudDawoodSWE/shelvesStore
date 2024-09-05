import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const useLanguageTranslation = () => {
  const { t, i18n } = useTranslation();
  const [direction, setDirection] = useState("ltr");

  useEffect(() => {
    const currentLanguage = i18n.language;
    setDirection(
      currentLanguage === "ar" || currentLanguage === "he" ? "rtl" : "ltr"
    );
  }, [i18n.language]);

  return { t, i18n, direction };
};

export default useLanguageTranslation;
