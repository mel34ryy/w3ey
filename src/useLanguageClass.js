import { useEffect } from "react";
import i18n from "./i18n";

const useLanguageClass = () => {
  useEffect(() => {
    const html = document.documentElement;

    const updateClass = () => {
      html.classList.remove("lang-ar", "lang-en");
      html.classList.add(`lang-${i18n.language}`);
    };

    updateClass();

    i18n.on("languageChanged", updateClass);

    return () => i18n.off("languageChanged", updateClass);
  }, []);
};

export default useLanguageClass;
