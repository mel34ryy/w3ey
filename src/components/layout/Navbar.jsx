import { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import ar from "../../assets/images/ar.svg";
import en from "../../assets/images/en.svg";
import menu from "../../assets/images/menu.png";
import "./Navbar.css";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";

export default function Navbar({ onToggle, lang }) {
  const { t } = useTranslation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ Default = light (system موجود عادي)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("bs-theme") || "light";
  });

  function applyTheme(mode = "system") {
    const validModes = ["light", "dark", "system"];
    if (!validModes.includes(mode)) mode = "light";

    const sysLight = window.matchMedia(
      "(prefers-color-scheme: light)"
    ).matches;

    const finalMode =
      mode === "system" ? (sysLight ? "light" : "dark") : mode;

    localStorage.setItem("bs-theme", mode);
    document.documentElement.setAttribute("data-bs-theme", finalMode);

    if (finalMode === "dark") {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }

    setTheme(mode);
  }

  useEffect(() => {
    applyTheme(theme);

    const offcanvasEl = document.getElementById("offcanvasNavbar");
    const handleShow = () => setMenuOpen(true);
    const handleHide = () => setMenuOpen(false);

    if (offcanvasEl) {
      offcanvasEl.addEventListener("show.bs.offcanvas", handleShow);
      offcanvasEl.addEventListener("hide.bs.offcanvas", handleHide);
    }

    // 👇 يفضل شغال لو المستخدم مختار system
    const mq = window.matchMedia("(prefers-color-scheme: light)");
    const handleSystemChange = () => {
      if (localStorage.getItem("bs-theme") === "system") {
        applyTheme("system");
      }
    };
    mq.addEventListener("change", handleSystemChange);

    return () => {
      if (offcanvasEl) {
        offcanvasEl.removeEventListener("show.bs.offcanvas", handleShow);
        offcanvasEl.removeEventListener("hide.bs.offcanvas", handleHide);
      }
      mq.removeEventListener("change", handleSystemChange);
    };
  }, [theme]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);

    const handleStorageChange = () => {
      const token = localStorage.getItem("token");
      setIsLoggedIn(!!token);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <nav className="navbar navbar-expand-xxl">
      <div className="container-fluid navbar navbar-expand-lg my-navbar">
        <Link to="/" className="navbar-brand">
          <img className="logo" src="/images/Logo.png" alt="logo" />
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-expanded={menuOpen}
        >
          <img className="img-fluid" src={menu} alt="icon" />
        </button>

        <div className="offcanvas offcanvas-end" id="offcanvasNavbar">
          <div className="offcanvas-header">
            <Link to="/" className="offcanvas-title">
              <img
                style={{ width: "200px", height: "70px" }}
                src="/images/Logo.png"
                alt="logo"
              />
            </Link>
            <button
              type="button"
              className={`btn-close text-reset ${
                menuOpen ? "rotated" : ""
              }`}
              data-bs-dismiss="offcanvas"
            ></button>
          </div>

          <div className="offcanvas-body">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  {t("navbar.home")}
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="about" className="nav-link">
                  {t("navbar.about")}
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="instructors" className="nav-link">
                  {t("navbar.instructors")}
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  {t("navbar.courses")}
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="courses" className="dropdown-item">
                      {t("navbar.all-courses")}
                    </Link>
                  </li>
                  <li>
                    <Link to="my-courses" className="dropdown-item">
                      {t("navbar.my-courses")}
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <NavLink to="blogs" className="nav-link">
                  {t("navbar.blogs")}
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="contact" className="nav-link">
                  {t("navbar.contact")}
                </NavLink>
              </li>

              {/* 🌗 Light / Dark / System */}
              <li className="nav-item">
                <div className="mode-switch d-flex gap-2">
                  <button
                    title="Use light mode"
                    className={`btn btn-sm btn-default text-secondary ${
                      theme === "light" ? "active" : ""
                    }`}
                    onClick={() => applyTheme("light")}
                  >
                    <i className="bi bi-sun"></i>
                  </button>

                  <button
                    title="Use dark mode"
                    className={`btn btn-sm btn-default text-secondary ${
                      theme === "dark" ? "active" : ""
                    }`}
                    onClick={() => applyTheme("dark")}
                  >
                    <i className="bi bi-moon"></i>
                  </button>

                  <button
                    title="Use system mode"
                    className={`btn btn-sm btn-default text-secondary ${
                      theme === "system" ? "active" : ""
                    }`}
                    onClick={() => applyTheme("system")}
                  >
                    <i className="bi bi-display"></i>
                  </button>
                </div>
              </li>

              <li className="nav-item">
                <button
                  onClick={onToggle}
                  className="nav-link d-flex align-items-center"
                >
                  <img
                    className="img-fluid"
                    src={(lang || "en").startsWith("en") ? ar : en}
                    alt="lang"
                    style={{ height: "18px", margin: "0 5px" }}
                  />
                  <span>{t("navbar.lang")}</span>
                </button>
              </li>
            </ul>

            {!isLoggedIn ? (
              <Link to="signup">
                <button className="register-btn bg-white">
                  {t("navbar.register")}
                </button>
              </Link>
            ) : (
              <button className="register-btn bg-white" onClick={handleLogout}>
                {t("navbar.signout")}
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
