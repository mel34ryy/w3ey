import Home from "./pages/Home";
import Instructors from "./pages/Instructors";
import FollowCursor from "./components/effects/FollowCursor";
import i18n from "i18next";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Courses from "./pages/Courses";
import Course from "./components/layout/Course";
import Auth from "./pages/Auth";
import ChatBot from "./components/layout/Chatbot";
import About from "./pages/About"; 
import Contact from "./pages/Contact"; 

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
      <ChatBot />
      <Navbar onToggle={toggleLanguage} />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Auth defaultSignIn={true} />} />
        <Route path="/signup" element={<Auth defaultSignIn={false} />} />
        <Route path="instructors" element={<Instructors />} />
        <Route path="courses" element={<Courses />} />
        <Route path="courses/:course" element={<Course />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
