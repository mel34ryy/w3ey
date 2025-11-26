import { useTranslation } from "react-i18next";
import "./Banner.css";

export default function Banner({ children }) {
  const { t } = useTranslation();
  return (
    <>
      <section className="about-banner d-flex align-items-center text-white">
        <div className="container pb-4">
          <h1 className="display-5 fw-bold mb-2">{children}</h1>
          <p className="fw-semibold">
            {t("banner.w3ey")} &gt; <span>{children}</span>
          </p>
        </div>
      </section>
    </>
  );
}
