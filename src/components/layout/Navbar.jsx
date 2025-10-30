import { useEffect, useState } from "react";
import ar from "../../assets/images/ar.svg";
import menu from "../../assets/images/menu.png";
import "./Navbar.css";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";

export default function Navbar({ onToggle }) {
  const { t } = useTranslation();

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const offcanvasEl = document.getElementById("offcanvasNavbar");

    const handleShow = () => setMenuOpen(true);
    const handleHide = () => setMenuOpen(false);

    offcanvasEl.addEventListener("show.bs.offcanvas", handleShow);
    offcanvasEl.addEventListener("hide.bs.offcanvas", handleHide);

    return () => {
      offcanvasEl.removeEventListener("show.bs.offcanvas", handleShow);
      offcanvasEl.removeEventListener("hide.bs.offcanvas", handleHide);
    };
  }, []);
  return (
    <nav className="navbar navbar-expand-xl">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src="/images/Logo.svg" alt="logo" />
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
              <img src="/images/Logo.svg" alt="logo" />
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
                  {t("home")}
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {t("about")}
                </a>
              </li>
              <li className="nav-item">
                <NavLink to="instructors" className="nav-link">
                  {t("instructors")}
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {t("courses")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {t("jobs")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {t("blogs")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {t("contact")}
                </a>
              </li>
              <li className="nav-item">
                <button
                  onClick={onToggle}
                  className="nav-link d-flex align-items-center"
                  href="#"
                >
                  <img
                    className="img-fluid"
                    src={ar}
                    alt="arabic"
                    style={{ height: "18px", width: "auto", margin: "0 5px" }}
                  />
                  <span>{t("lang")}</span>
                </button>
              </li>
            </ul>
            <div className="button">
              <button className="register-btn bg-white">{t("register")}</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
