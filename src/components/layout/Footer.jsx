import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
  faTwitter,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <div className="footer py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-3">
            <div className="logo">
              <img
                style={{ width: "250px", height: "120px" }}
                src="/images/Logo.svg"
                alt="logo"
              />
            </div>
            <p>{t("footer.description")}</p>
            <ul>
              <li>{t("footer.location")}</li>
              <li>{t("footer.phone")}</li>
              <li className="d-flex gap-3 icons">
                <FontAwesomeIcon icon={faFacebookF} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faWhatsapp} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faTiktok} />
              </li>
            </ul>
          </div>
          <div className="col-sm-6 col-md-3">
            <h4 className="mb-3">{t("footer.quickLinks.title")}</h4>
            <ul>
              <li>
                <Link to="/" className="link">
                  {t("footer.quickLinks.home")}
                </Link>
              </li>
              <li>{t("footer.quickLinks.about")}</li>
              <li>{t("footer.quickLinks.courses")}</li>
              <li>
                <Link to="instructors" className="link">
                  {t("footer.quickLinks.instructors")}
                </Link>
              </li>
              <li>{t("footer.quickLinks.blogs")}</li>
              <li>{t("footer.quickLinks.contact")}</li>
            </ul>
          </div>
          <div className="col-sm-6 col-md-3">
            <h4 className="mb-3">{t("footer.policy.title")}</h4>
            <ul>
              <li>{t("footer.policy.question")}</li>
            </ul>
          </div>
          <div className="col-sm-6 col-md-3">
            <h4 className="mb-3">{t("footer.hours.title")}</h4>
            <div className="open d-flex justify-content-between">
              <span>{t("footer.hours.days")}</span>
              <span>{t("footer.hours.time")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
