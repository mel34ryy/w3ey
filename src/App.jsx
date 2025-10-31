import Home from "./pages/Home";
import Instructors from "./pages/Instructors";
import FollowCursor from "./components/effects/FollowCursor";
import i18n from "i18next";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

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
    <BrowserRouter>
      <FollowCursor color="#024585" />
      <Navbar onToggle={toggleLanguage} />
      <Routes>
        <Route index element={<Home />} />
         <Route path="instructors" element={<Instructors />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
