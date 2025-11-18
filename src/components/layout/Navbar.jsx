import { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import ar from "../../assets/images/ar.svg";
import menu from "../../assets/images/menu.png";
import "./Navbar.css";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";

export default function Navbar({ onToggle }) {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("bs-theme") || "system"
  );

  function applyTheme(mode = "system") {
    const validModes = ["light", "dark", "system"];
    if (!validModes.includes(mode)) mode = "system";

    const sysLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    const useSystem = mode === "system";
    const finalMode = useSystem ? (sysLight ? "light" : "dark") : mode;

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

  return (
    <nav className="navbar navbar-expand-xl">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img
            style={{ width: "250px", height: "120px" }}
            src="/images/Logo.svg"
            alt="logo"
          />
        </Link>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <img className="img-fluid" src={menu} alt="icon"></img>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <Link to="/" className="offcanvas-title" id="offcanvasNavbarLabel">
              <img
                style={{ width: "250px", height: "120px" }}
                src="/images/Logo.svg"
                alt="logo"
              />
            </Link>
            <button
              type="button"
              className={`btn-close text-reset close-icon ${
                menuOpen ? "rotated" : ""
              }`}
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" aria-current="page">
                  {t("navbar.home")}
                </NavLink>
              </li>
              <li className="nav-item">
                <Link to="about" className="nav-link">
                  {t("navbar.about")}
                </Link>
              </li>
              <li className="nav-item">
                <NavLink to="instructors" className="nav-link">
                  {t("navbar.instructors")}
                </NavLink>
              </li>
              <li className="nav-item">
                <Link to="courses" className="nav-link">
                  {t("navbar.courses")}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="blogs" className="nav-link">
                  {t("navbar.blogs")}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="contact" className="nav-link">
                  {t("navbar.contact")}
                </Link>
              </li>
              <li className="nav-item">
                <div className="mode-switch d-flex gap-2">
                  <button
                    title="Use light mode"
                    id="light"
                    className={`btn btn-sm btn-default text-secondary ${
                      theme === "light" ? "active" : ""
                    }`}
                    onClick={() => applyTheme("light")}
                  >
                    <i className="bi bi-sun"></i>
                  </button>
                  <button
                    title="Use dark mode"
                    id="dark"
                    className={`btn btn-sm btn-default text-secondary ${
                      theme === "dark" ? "active" : ""
                    }`}
                    onClick={() => applyTheme("dark")}
                  >
                    <i className="bi bi-moon"></i>
                  </button>
                  <button
                    title="Use system preferred mode"
                    id="system"
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
                    src={ar}
                    alt="arabic"
                    style={{ height: "18px", width: "auto", margin: "0 5px" }}
                  />
                  <span>{t("navbar.lang")}</span>
                </button>
              </li>
            </ul>
            <Link to="signup" className="button">
              <button className="register-btn bg-white">
                {t("navbar.register")}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
