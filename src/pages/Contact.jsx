import "./Contact.css";
import communication from "../assets/images/parent-communication-650x455.jpg.png";
import location from "../assets/images/location.png";
import phone from "../assets/images/phone.png";
import email from "../assets/images/email.png";
import Banner from "../components/layout/Banner";
import SlideIn from "../components/effects/SlideIn";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <>
      <Banner>{t("contact-page.banner")}</Banner>
      <section className="technical-support container py-5 my-5">
        <div className="row g-5 d-flex justify-content-between align-items-center">
          <div className="col-lg-6 ">
            <h2 className="fw-bold mb-4">{t("contact-page.title")}</h2>
            <p className="mb-4">{t("contact-page.paragraph")}</p>
            <ul>
              <li className="mb-2">{t("contact-page.list.item1")}</li>
              <li className="mb-2">{t("contact-page.list.item2")}</li>
            </ul>
          </div>

          <div className="col-lg-6 mb-4 mb-lg-0">
            <SlideIn direction="right">
              <img
                src={communication}
                alt="Technical Support"
                className="img-fluid rounded shadow"
              />
            </SlideIn>
          </div>
        </div>
      </section>
      <section className="contact container my-5 py-5">
        <div className="row g-5 d-flex justify-content-between align-items-center">
          <div className="col-lg-4">
            <h2 className="fw-bold mb-3">
              {t("contact-page.contact.heading")}
            </h2>
            <hr className="rounded-2" />
            <p className="mb-4">{t("contact-page.contact.paragraph")}</p>
            <div className="container">
              <SlideIn direction="left">
                <div className="contact-item display-flex align-items-center py-3">
                  <img src={location} className="pb-2 px-1" />
                  <ul>
                    <li>{t("contact-page.contact.list.item1.part1")}</li>
                    <li> {t("contact-page.contact.list.item1.part2")} </li>
                  </ul>
                </div>

                <div className="contact-item display-flex align-items-center py-3">
                  <img src={phone} className="pb-2 px-1" />
                  <ul>
                    <li>{t("contact-page.contact.list.item2.part1")}</li>
                    <li>{t("contact-page.contact.list.item2.part2")}</li>
                  </ul>
                </div>

                <div className="contact-item display-flex align-items-center py-3">
                  <img src={email} className="pb-2 px-1" />
                  <ul>
                    <li>{t("contact-page.contact.list.item3.part1")}</li>
                    <li>{t("contact-page.contact.list.item3.part2")}</li>
                  </ul>
                </div>
              </SlideIn>
            </div>
          </div>
          <div className="contact-form rounded shadow pt-4 px-5 col-lg-7">
            <h3 className="fw-bold mb-3">
              {t("contact-page.contact-form.heading")}
            </h3>
            <hr className="rounded-2" />

            <form className="row my-4">
              <div className="col-lg-6 my-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder={t(
                    "contact-page.contact-form.form.name-placeholder"
                  )}
                />
              </div>

              <div className="col-lg-6 my-2">
                <input
                  type="email"
                  className="form-control"
                  placeholder={t(
                    "contact-page.contact-form.form.email-placeholder"
                  )}
                />
              </div>
              <div className="col-lg-6 my-2">
                <input
                  type="tel"
                  className="form-control"
                  placeholder={t(
                    "contact-page.contact-form.form.phone-placeholder"
                  )}
                />
              </div>

              <div className="col-lg-6 my-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder={t(
                    "contact-page.contact-form.form.subject-placeholder"
                  )}
                />
              </div>

              <div className="col-lg-12 my-2">
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder={t(
                    "contact-page.contact-form.form.contact-placeholder"
                  )}
                ></textarea>
              </div>

              <button className="col-lg-3 my-4 py-2 mx-auto text-center rounded-2 border-0">
                {t("contact-page.contact-form.button")}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
