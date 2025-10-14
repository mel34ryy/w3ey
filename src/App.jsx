import Home from "./pages/Home";
import FollowCursor from "./components/effects/FollowCursor";
import i18n from "i18next";
import { useEffect } from "react";

export default function App() {
  function toggleLanguage() {
    const newLang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
  }

  useEffect(() => {
    const setDir = (lng) => {
      const dir = i18n.dir(lng);
      document.documentElement.lang = lng;
      document.documentElement.dir = dir;
    };
    setDir(i18n.language);

    const handleLanguageChanged = (lng) => {
      setDir(lng);
    };
    i18n.on("languageChanged", handleLanguageChanged);

    return () => {
      i18n.off("languageChanged", handleLanguageChanged);
    };
  }, []);

  return (
    <div>
      <FollowCursor color="#024585" />
      <Home onToggle={toggleLanguage} />
    </div>
  );
}
