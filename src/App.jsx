import Home from "./pages/Home";
import Instructors from "./pages/Instructors";
import FollowCursor from "./components/effects/FollowCursor";
import i18n from "i18next";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Courses from "./pages/Courses";
import Course from "./components/layout/Course";
import Auth from "./pages/Auth";
import ChatBot from "./components/layout/Chatbot";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Lenis from "lenis";
import Blog from "./pages/Blog";
import Blog1 from "./pages/blogs/Blog1";
import Blog2 from "./pages/blogs/Blog2";
import Blog3 from "./pages/blogs/Blog3";
import Blog4 from "./pages/blogs/Blog4";
import Blog5 from "./pages/blogs/Blog5";
import Blog6 from "./pages/blogs/Blog6";
import Blog7 from "./pages/blogs/Blog7";
import Blog8 from "./pages/blogs/Blog8";
import Blog9 from "./pages/blogs/Blog9";
import ScrollProgress from "./components/effects/ScrollProgress";
import ScrollToTop from "./components/layout/ScrollToTop";

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

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <BrowserRouter>
      <ScrollProgress />
      <ScrollToTop />
      <FollowCursor color="#024585" />
      <ChatBot />
      <Navbar onToggle={toggleLanguage} />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Auth defaultSignIn={true} />} />
        <Route path="/signup" element={<Auth defaultSignIn={false} />} />
        <Route path="instructors" element={<Instructors />} />
        <Route path="courses" element={<Courses />} />
        <Route path="course/:id" element={<Course />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blogs" element={<Blog />} />
        <Route path="blog1" element={<Blog1 />} />
        <Route path="blog2" element={<Blog2 />} />
        <Route path="blog3" element={<Blog3 />} />
        <Route path="blog4" element={<Blog4 />} />
        <Route path="blog5" element={<Blog5 />} />
        <Route path="blog6" element={<Blog6 />} />
        <Route path="blog7" element={<Blog7 />} />
        <Route path="blog8" element={<Blog8 />} />
        <Route path="blog9" element={<Blog9 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
