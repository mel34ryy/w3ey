import "./About.css";
import img1 from "../assets/images/about-us3.png";
import img2 from "../assets/images/about-us2.png";
import img3 from "../assets/images/about-us.png";
import mohamed from "../assets/images/mohamed.jpg";
import youssef from "../assets/images/youssef.jpg";
import omar from "../assets/images/omar.jpg";
import yasmeen from "../assets/images/yasmeen.jpg";
import vision from "../assets/images/vision.png";
import target from "../assets/images/target.png";
import diamond from "../assets/images/diamond.png";
import zoom from "../assets/images/zoom.png";
import hat from "../assets/images/graduation-hat-1.png";
import choice from "../assets/images/choice-1.png";
import duration from "../assets/images/duration.png";
import communication from "../assets/images/communication-center.png";
import parent from "../assets/images/parent-communication-650x455.jpg.png";
import Banner from "../components/layout/Banner";
import Reveal from "../components/effects/Reveal";
import SlideIn from "../components/effects/SlideIn";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <div className="about-page">
      <Banner>{t("about-page.banner.aboutUs")}</Banner>
      <div className="about-us container py-5 my-5">
        <div className="row d-flex justify-content-between g-5 align-items-center">
          <div className="col-lg-5 col-md-12 mb-4 mb-md-0">
            <h6 className="rounded-2 px-3">
              {t("about-page.about-us.sectionTitle")}
            </h6>
            <SlideIn direction="left">
              <h2 className="fw-bold mb-4">
                {t("about-page.about-us.heading.part1")}{" "}
                <span className="about-highlight-text">
                  {" "}
                  {t("about-page.about-us.heading.highlight")}
                </span>{" "}
                {t("about-page.about-us.heading.part2")} <br />{" "}
                {t("about-page.about-us.heading.part3")}
              </h2>

              <p className="info-text">{t("about-page.about-us.paragraph1")}</p>

              <p className="info-text2">
                {t("about-page.about-us.paragraph2")}
              </p>
            </SlideIn>
          </div>

          <div className="col-lg-7 col-md-12 text-center">
            <SlideIn direction="right">
              <div className="row g-3">
                <div className="col-6 py-2 my-2 py-md-5 my-md-5">
                  <img
                    src={img1}
                    className="img-fluid rounded shadow"
                    alt="Student 1"
                  />
                </div>
                <div className="col-6 ">
                  <img
                    src={img2}
                    className="img-fluid rounded shadow my-2 my-md-5"
                    alt="Student 2"
                  />
                  <img
                    src={img3}
                    className="img-fluid rounded shadow"
                    alt="Student 3"
                  />
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </div>
      <div className="vision container my-5">
        <Reveal>
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow border-0 p-4">
                <div className="card-body">
                  <div className="mb-3">
                    <img src={vision} alt="Our Vision" />
                  </div>
                  <h3 className="card-title fw-bold">
                    {t("about-page.vision.card-body.title1")}
                  </h3>
                  <p className="card-text">
                    {t("about-page.vision.card-body.p1")}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow border-0 p-4">
                <div className="card-body">
                  <div className="mb-3">
                    <img src={target} alt="Our Mission" />
                  </div>
                  <h3 className="card-title fw-bold">
                    {t("about-page.vision.card-body.title2")}
                  </h3>
                  <p className="card-text">
                    {t("about-page.vision.card-body.p2")}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow border-0 p-4">
                <div className="card-body">
                  <div className="mb-3">
                    <img src={diamond} alt="Our Philosophy" />
                  </div>
                  <h3 className="card-title fw-bold">
                    {t("about-page.vision.card-body.title3")}
                  </h3>
                  <p className="card-text">
                    {t("about-page.vision.card-body.p3")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
      <section className="about-academic text-center">
        <div className="container">
          <div className="title row mb-5">
            <div className="col-lg-8 mx-auto">
              <h2 className="display-6 fw-bold mb-3">
                {t("about-page.about-academic.heading.part1")}{" "}
                <span className="about-highlight-text">
                  {" "}
                  {t("about-page.about-academic.heading.part2")}
                </span>
              </h2>
              <p>
                {t("about-page.about-academic.p.p1")}
                <br />
                {t("about-page.about-academic.p.p2")}
              </p>
            </div>
          </div>

          <div className="row d-flex justify-content-center align-items-stretch">
            <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
              <div className="system h-100 py-4 shadow border rounded-2">
                <div className="system-body d-flex flex-column justify-content-center align-items-center">
                  <img src={zoom} alt="Zoom sessions icon" />
                  <p className="system-text fw-semibold my-2">
                    {" "}
                    {t("about-page.about-academic.titles.title1")}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
              <div className="system h-100 py-4 shadow border rounded-2">
                <div className="system-body d-flex flex-column justify-content-center align-items-center">
                  <img src={hat} alt="Educator icon" />
                  <p className="system-text fw-semibold my-2">
                    {t("about-page.about-academic.titles.title2")}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
              <div className="system h-100 py-4 shadow border rounded-2">
                <div className="system-body d-flex flex-column justify-content-center align-items-center">
                  <img src={choice} alt="Teaching methods icon" />
                  <p className="system-text fw-semibold my-2">
                    {t("about-page.about-academic.titles.title3")}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
              <div className="system h-100 py-4 shadow border rounded-2">
                <div className="system-body d-flex flex-column justify-content-center align-items-center">
                  <img src={duration} alt="Duration icon" />
                  <p className="system-text fw-semibold my-2">
                    {t("about-page.about-academic.titles.title4")}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
              <div className="system h-100 py-4 shadow border rounded-2">
                <div className="system-body d-flex flex-column justify-content-center align-items-center">
                  <img src={communication} alt="Extra help icon" />
                  <p className="system-text fw-semibold my-2">
                    {" "}
                    {t("about-page.about-academic.titles.title5")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hero-section d-flex align-items-center justify-content-center">
        <div className="overlay">
          <div className="container text-center text-white p-5">
            <p className="h5 fw-semibold text-uppercase mb-2">
              {t("about-page.hero-section.p")}
            </p>
            <h3 className="fw-semibold pt-4">
              {t("about-page.hero-section.heading.part1")}
              <br />
              {t("about-page.hero-section.heading.part2")}
            </h3>
          </div>
        </div>
      </section>
      <div className="about-instructor container my-5 py-5">
        <h6 className="fw-semibold mb-2 rounded-1 px-3">
          {t("about-page.about-instructor.heading.part1")}
        </h6>
        <h2 className="fw-bold mb-3">
          {t("about-page.about-instructor.heading.part2")}
          <span className="about-highlight-text-ins">
            {t("about-page.about-instructor.heading.part3")}
          </span>
          {t("about-page.about-instructor.heading.part4")}
        </h2>
        <p className="mb-5">
          {t("about-page.about-instructor.paragraph.p1")}
          <br />
          {t("about-page.about-instructor.paragraph.p2")}
        </p>

        <div className="row g-5">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card border-1  instructor-card ">
              <img src={youssef} className="card-img-top" alt="Youssef" />
              <div className="card-body">
                <a href="https://www.linkedin.com/in/youssef-bakir/" className="fw-bold text-center mx-auto" target="_blank" >Youssef Bakir</a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card  shadow instructor-card ">
              <img src={mohamed} className="card-img-top" alt="Mohamed" />
              <div className="card-body">
                <a target="_blank" href="https://www.linkedin.com/in/mohamed-moustafa-elashry/" className="fw-bold text-center">Mohamed El-Ashry</a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card border-1 shadow instructor-card rounded">
              <img src={omar} className="card-img-top" alt="Omar" />
              <div className="card-body">
                <a target="_blank" href="https://www.linkedin.com/in/omar-abozekry-5700aa279/" className="fw-bold text-center">Omar Ahmed</a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card border-1 shadow instructor-card rounded">
              <img src={yasmeen} className="card-img-top" alt="Yasmeen" />
              <div className="card-body">
                <a target="_blank" href="https://www.linkedin.com/in/yasmeen-498426339/" className="fw-bold text-center">Yasmeen Waleed</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-Communication container my-5 py-5">
        <div className="row g-5 align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <SlideIn direction="left">
              <h2 className="fw-bold mb-4">
                {t("about-page.about-Communication.heading")}
              </h2>

              <p>{t("about-page.about-Communication.paragraph")}</p>

              <ul className="fw-semibold">
                <li>{t("about-page.about-Communication.list.item1")}</li>
                <li>{t("about-page.about-Communication.list.item2")}</li>
                <li>{t("about-page.about-Communication.list.item3")}</li>
              </ul>
            </SlideIn>
          </div>

          <div className="col-md-6">
            <SlideIn direction="right">
              <img
                src={parent}
                className="img-fluid shadow rounded"
                alt="Parent communicating with school staff"
              />
            </SlideIn>
          </div>
        </div>
      </div>
    </div>
  );
}
