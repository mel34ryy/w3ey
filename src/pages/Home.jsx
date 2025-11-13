import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneVolume,
  faArrowRight,
  faArrowLeft,
  faPeopleGroup,
  faGraduationCap,
  faClock,
  faUserGroup,
  faStar,
  faAtom,
  faComments,
  faFilm,
  faPenRuler,
  faCakeCandles,
  faShareNodes,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import hero from "../assets/images/hero.svg";
import planet from "../assets/images/planet.svg";
import dots from "../assets/images/dots.png";
import rotation from "../assets/images/rotation.png";
import quote from "../assets/images/quote.png";
import icon01 from "../assets/images/about-icon01.svg";
import icon02 from "../assets/images/about-icon02.svg";
import icon03 from "../assets/images/about-icon03.svg";
import icon04 from "../assets/images/about-icon04.svg";
import icon05 from "../assets/images/about-icon05.svg";
import instructor1 from "../assets/images/instructor01.jpg";
import instructor2 from "../assets/images/instructor02.jpeg";
import instructor3 from "../assets/images/instructor03.jpg";
import instructor4 from "../assets/images/instructor04.jpg";
import sub from "../assets/images/subscribe.png";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <div className="home">
        <section className="hero container d-flex px-4 px-md-5 py-5 mb-5">
          <img
            src={planet}
            alt="planet"
            style={{ width: "60px", height: "60px" }}
            className="planet d-none d-md-block"
          />
          <div className="row align-items-center">
            <div className="intro mt-4 mt-lg-5 col-12 col-lg-6 text-center text-lg-start">
              <p className="bg-babyblue paragraph px-4 py-1 rounded-1 mx-auto mx-lg-0">
                {t("hero.satisfaction")}
              </p>
              <h1 className="mb-4 mt-3 home-h1">
                {t("hero.title.part1")}{" "}
                <span className="highlight-text">
                  {t("hero.title.highlight")}
                </span>{" "}
                {t("hero.title.part2")}
              </h1>
              <p className="lead mb-5">{t("hero.description")}</p>
              <div className="buttons d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start align-items-center gap-4">
                <button className="px-5 py-2 border-0 rounded-2 text-uppercase">
                  {t("hero.button.explore")}
                  <span className="ms-2">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="right-arrow"
                    />
                  </span>
                </button>
                <div className="call d-flex align-items-center">
                  <FontAwesomeIcon
                    className="h2 m-0 me-2 icon"
                    icon={faPhoneVolume}
                    color="#082a5e"
                  />
                  <div className="content d-flex flex-column">
                    <p className="m-0">{t("hero.call.question")}</p>
                    <button className="border-0 bg-transparent p-0 text-start">
                      {t("hero.call.phone")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="photo col-12 col-lg-6 mt-5 mt-lg-0 text-center position-relative">
              <img src={hero} alt="hero" className="img-fluid w-100" />
              <div className="boxes">
                <div className="first-box d-flex flex-column align-items-center rounded-4 p-3 p-md-4 shadow-sm">
                  <FontAwesomeIcon className="first" icon={faPeopleGroup} />
                  <p className="m-0">{t("hero.box1.title")}</p>
                  <span>{t("hero.box1.value")}</span>
                </div>
                {/* todo: handle this on lg screens */}
                <div className="second-box d-flex flex-column align-items-center rounded-4 p-3 p-md-4 shadow-sm">
                  <FontAwesomeIcon className="second" icon={faGraduationCap} />
                  <p className="m-0">{t("hero.box2.title")}</p>
                  <span>{t("hero.box2.value")}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="icons-carousel container text-center my-5 pt-3 pb-5 border-bottom border-2">
          <div className="row justify-content-center align-items-center g-4">
            <div className="col-4 col-sm-3 col-md-2 col-lg-auto">
              <img src="/images/udemy.png" alt="udemy" className="img-fluid" />
            </div>
            <div className="col-4 col-sm-3 col-md-2 col-lg-auto">
              <img src="/images/zoom.png" alt="zoom" className="img-fluid" />
            </div>
            <div className="col-4 col-sm-3 col-md-2 col-lg-auto">
              <img
                src="/images/coursera.png"
                alt="coursera"
                className="img-fluid"
              />
            </div>
            <div className="col-4 col-sm-3 col-md-2 col-lg-auto">
              <img src="/images/meet.png" alt="meet" className="img-fluid" />
            </div>
            <div className="col-4 col-sm-3 col-md-2 col-lg-auto">
              <img
                src="/images/oxford.png"
                alt="oxford"
                className="img-fluid"
              />
            </div>
            <div className="col-4 col-sm-3 col-md-2 col-lg-auto">
              <img
                src="/images/cambridge.png"
                alt="cambridge"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
        <section className="about container d-flex gap-5 mb-5">
          <div className="row align-items-center gy-5">
            <div className="col-12 col-md-5 text-center text-md-start">
              <div className="photo">
                <img
                  src="/images/about1.png"
                  alt="child"
                  className="img-fluid rounded-3"
                />
              </div>
            </div>
            <div className="content col-12 col-md-7">
              <p className="bg-babyblue paragraph px-4 py-1 rounded-1 mx-auto mx-lg-0">
                {t("about.badge")}
              </p>
              <h2 className="mb-4 mt-3">
                {t("about.title.part1")}{" "}
                <span className="highlight-text">
                  {t("about.title.highlight")}
                </span>{" "}
                {t("about.title.part2")}
              </h2>
              <div className="paragraph">
                <p>{t("about.p1")}</p>
                <br />
                <p>{t("about.p2")}</p>
                <br />
                <p>{t("about.p3")}</p>
                <br />
              </div>
              <div className="icons d-grid mb-4">
                <div className="icon d-flex gap-2">
                  <img
                    className="img-fluid w-15 w-md-20"
                    src={icon01}
                    alt="icon"
                  />
                  <p className="m-0">
                    {t("about.icons.expYears.p1")}
                    <br />
                    {t("about.icons.expYears.p2")}
                  </p>
                </div>
                <div className="icon d-flex gap-2">
                  <img
                    className="img-fluid w-15 w-md-20"
                    src={icon02}
                    alt="icon"
                  />
                  <p className="m-0">
                    {t("about.icons.programs.p1")}
                    <br />
                    {t("about.icons.programs.p2")}
                  </p>
                </div>
                <div className="icon d-flex gap-2">
                  <img
                    className="img-fluid w-15 w-md-20"
                    src={icon03}
                    alt="icon"
                  />
                  <p className="m-0">
                    {t("about.icons.students.p1")}
                    <br />
                    {t("about.icons.students.p2")}
                  </p>
                </div>
                <div className="icon d-flex gap-2">
                  <img
                    className="img-fluid w-15 w-md-20"
                    src={icon04}
                    alt="icon"
                  />
                  <p className="m-0">
                    {t("about.icons.curriculum.p1")}
                    <br />
                    {t("about.icons.curriculum.p2")}
                  </p>
                </div>
                <div className="icon d-flex gap-2">
                  <img
                    className="img-fluid w-15 w-md-20"
                    src={icon05}
                    alt="icon"
                  />
                  <p className="m-0">
                    {t("about.icons.support.p1")}
                    <br />
                    {t("about.icons.support.p2")}
                  </p>
                </div>
              </div>
              <button className="px-5 py-2 border-0 rounded-2 text-uppercase">
                discover more
                <span className="ms-2">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="right-arrow"
                  />
                </span>
              </button>
            </div>
          </div>
        </section>
        <section className="featured container my-5">
          <img
            src={dots}
            alt="dots"
            className="d-none d-md-block dots"
            style={{ width: "60px", height: "60px" }}
          />
          <p className="bg-babyblue paragraph px-4 py-1 rounded-1">
            {t("featured.badge")}
          </p>
          <h2 className="mb-4 mt-3">
            {t("featured.title.part1")}{" "}
            <span className="highlight-text">
              {t("featured.title.highlight")}
            </span>{" "}
            {t("featured.title.part2")}
          </h2>
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="card mb-4">
                <img
                  className="card-img-top"
                  src="/images/featured01.png"
                  alt="Card"
                />
                <div className="card-body">
                  <div className="card-icons">
                    <ul className="list-unstyled d-flex gap-3">
                      <li>
                        <FontAwesomeIcon icon={faClock} />{" "}
                        {t("featured.card.duration")}
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faUserGroup} />{" "}
                        {t("featured.card.students")}
                      </li>
                    </ul>
                  </div>
                  <h5 className="card-title">
                    <a className="text-decoration-none" href="#">
                      {t("featured.card.title")}
                    </a>
                  </h5>
                  <div className="card-content">
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <span className="ms-1">{t("featured.card.reviews")}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card mb-4">
                <img
                  className="card-img-top"
                  src="/images/featured01.png"
                  alt="Card"
                />
                <div className="card-body">
                  <div className="card-icons">
                    <ul className="list-unstyled d-flex gap-3">
                      <li>
                        <FontAwesomeIcon icon={faClock} />{" "}
                        {t("featured.card.duration")}
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faUserGroup} />{" "}
                        {t("featured.card.students")}
                      </li>
                    </ul>
                  </div>
                  <h5 className="card-title">
                    <a className="text-decoration-none" href="#">
                      {t("featured.card.title")}
                    </a>
                  </h5>
                  <div className="card-content">
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <span className="ms-1">{t("featured.card.reviews")}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card mb-4">
                <img
                  className="card-img-top"
                  src="/images/featured01.png"
                  alt="Card"
                />
                <div className="card-body">
                  <div className="card-icons">
                    <ul className="list-unstyled d-flex gap-3">
                      <li>
                        <FontAwesomeIcon icon={faClock} />{" "}
                        {t("featured.card.duration")}
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faUserGroup} />{" "}
                        {t("featured.card.students")}
                      </li>
                    </ul>
                  </div>
                  <h5 className="card-title">
                    <a className="text-decoration-none" href="#">
                      {t("featured.card.title")}
                    </a>
                  </h5>
                  <div className="card-content">
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <span className="ms-1">{t("featured.card.reviews")}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card mb-4">
                <img
                  className="card-img-top"
                  src="/images/featured01.png"
                  alt="Card"
                />
                <div className="card-body">
                  <div className="card-icons">
                    <ul className="list-unstyled d-flex gap-3">
                      <li>
                        <FontAwesomeIcon icon={faClock} />{" "}
                        {t("featured.card.duration")}
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faUserGroup} />{" "}
                        {t("featured.card.students")}
                      </li>
                    </ul>
                  </div>
                  <h5 className="card-title">
                    <a className="text-decoration-none" href="#">
                      {t("featured.card.title")}
                    </a>
                  </h5>
                  <div className="card-content">
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <span className="ms-1">{t("featured.card.reviews")}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card mb-4">
                <img
                  className="card-img-top"
                  src="/images/featured01.png"
                  alt="Card"
                />
                <div className="card-body">
                  <div className="card-icons">
                    <ul className="list-unstyled d-flex gap-3">
                      <li>
                        <FontAwesomeIcon icon={faClock} />{" "}
                        {t("featured.card.duration")}
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faUserGroup} />{" "}
                        {t("featured.card.students")}
                      </li>
                    </ul>
                  </div>
                  <h5 className="card-title">
                    <a className="text-decoration-none" href="#">
                      {t("featured.card.title")}
                    </a>
                  </h5>
                  <div className="card-content">
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <span className="ms-1">{t("featured.card.reviews")}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card mb-4">
                <img
                  className="card-img-top"
                  src="/images/featured01.png"
                  alt="Card"
                />
                <div className="card-body">
                  <div className="card-icons">
                    <ul className="list-unstyled d-flex gap-3">
                      <li>
                        <FontAwesomeIcon icon={faClock} />{" "}
                        {t("featured.card.duration")}
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faUserGroup} />{" "}
                        {t("featured.card.students")}
                      </li>
                    </ul>
                  </div>
                  <h5 className="card-title">
                    <a className="text-decoration-none" href="#">
                      {t("featured.card.title")}
                    </a>
                  </h5>
                  <div className="card-content">
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <span className="ms-1">{t("featured.card.reviews")}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card mb-4">
                <img
                  className="card-img-top"
                  src="/images/featured01.png"
                  alt="Card"
                />
                <div className="card-body">
                  <div className="card-icons">
                    <ul className="list-unstyled d-flex gap-3">
                      <li>
                        <FontAwesomeIcon icon={faClock} />{" "}
                        {t("featured.card.duration")}
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faUserGroup} />{" "}
                        {t("featured.card.students")}
                      </li>
                    </ul>
                  </div>
                  <h5 className="card-title">
                    <a className="text-decoration-none" href="#">
                      {t("featured.card.title")}
                    </a>
                  </h5>
                  <div className="card-content">
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <span className="ms-1">{t("featured.card.reviews")}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card mb-4">
                <img
                  className="card-img-top"
                  src="/images/featured01.png"
                  alt="Card"
                />
                <div className="card-body">
                  <div className="card-icons">
                    <ul className="list-unstyled d-flex gap-3">
                      <li>
                        <FontAwesomeIcon icon={faClock} />{" "}
                        {t("featured.card.duration")}
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faUserGroup} />{" "}
                        {t("featured.card.students")}
                      </li>
                    </ul>
                  </div>
                  <h5 className="card-title">
                    <a className="text-decoration-none" href="#">
                      {t("featured.card.title")}
                    </a>
                  </h5>
                  <div className="card-content">
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <span className="ms-1">{t("featured.card.reviews")}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card mb-4">
                <img
                  className="card-img-top"
                  src="/images/featured01.png"
                  alt="Card"
                />
                <div className="card-body">
                  <div className="card-icons">
                    <ul className="list-unstyled d-flex gap-3">
                      <li>
                        <FontAwesomeIcon icon={faClock} />{" "}
                        {t("featured.card.duration")}
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faUserGroup} />{" "}
                        {t("featured.card.students")}
                      </li>
                    </ul>
                  </div>
                  <h5 className="card-title">
                    <a className="text-decoration-none" href="#">
                      {t("featured.card.title")}
                    </a>
                  </h5>
                  <div className="card-content">
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <span className="ms-1">{t("featured.card.reviews")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="btn d-flex mx-auto mt-4 px-4 py-2">
            {t("featured.button")}
          </button>
        </section>
        <section className="w3ey py-5">
          <img className="d-none d-lg-block" src={rotation} alt="circle" />
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <p className="bg-babyblue paragraph px-4 py-1 rounded-1">
                  {t("w3ey.badge")}
                </p>
                <h2 className="mb-4 mt-3">
                  {t("w3ey.title.part1")}{" "}
                  <span className="highlight-text">
                    {t("w3ey.title.part2")}
                    <span className="three">{t("w3ey.title.highlight")}</span>
                    {t("w3ey.title.part3")}
                  </span>
                </h2>
                <p className="lead">
                  {t("w3ey.description.p1")}
                  <br /> {t("w3ey.description.p2")}
                  <br /> {t("w3ey.description.p3")}
                </p>
              </div>
              <div className="col-md-6 col-lg-8 cards">
                <div className="row justify-content-center h-100">
                  <div className="col-6 col-md-4 mb-3">
                    <div className="card h-100 d-flex justify-content-center align-items-center mx-auto">
                      <FontAwesomeIcon icon={faAtom} className="icon" />
                      <span>{t("w3ey.cards.science")}</span>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 mb-3">
                    <div className="card h-100 d-flex justify-content-center align-items-center mx-auto">
                      <FontAwesomeIcon icon={faComments} className="icon" />
                      <span>{t("w3ey.cards.debate")}</span>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 mb-3">
                    <div className="card h-100 d-flex justify-content-center align-items-center mx-auto">
                      <FontAwesomeIcon icon={faFilm} className="icon" />
                      <span>{t("w3ey.cards.movies")}</span>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 mb-3">
                    <div className="card h-100 d-flex justify-content-center align-items-center mx-auto">
                      <FontAwesomeIcon icon={faPenRuler} className="icon" />
                      <span>{t("w3ey.cards.drawing")}</span>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 mb-3">
                    <div className="card h-100 d-flex justify-content-center align-items-center mx-auto">
                      <FontAwesomeIcon icon={faCakeCandles} className="icon" />
                      <span>{t("w3ey.cards.fundays")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="carousel-section py-5">
          <div className="container">
            <div
              id="carouselExampleAutoplaying"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner p-4 rounded-4 bg-white shadow-sm">
                <div className="carousel-item text-center active">
                  <div className="img mb-3">
                    <img className="img-fluid" src={quote} alt="quote" />
                  </div>
                  <div className="stars mb-2">
                    {[...Array(5)].map((_, i) => (
                      <FontAwesomeIcon key={i} icon={faStar} className="star" />
                    ))}
                  </div>
                  <p className="lead mx-auto">{t("carousel.items.0.text")}</p>
                  <h4 className="mt-3 mb-0">{t("carousel.items.0.name")}</h4>
                  <span className="text-muted small">
                    {t("carousel.items.0.meta")}
                  </span>
                </div>
                <div className="carousel-item text-center">
                  <div className="img mb-3">
                    <img className="img-fluid" src={quote} alt="quote" />
                  </div>
                  <div className="stars mb-2">
                    {[...Array(5)].map((_, i) => (
                      <FontAwesomeIcon key={i} icon={faStar} className="star" />
                    ))}
                  </div>
                  <p className="lead mx-auto">{t("carousel.items.1.text")}</p>
                  <h4 className="mt-3 mb-0">{t("carousel.items.1.name")}</h4>
                  <span className="text-muted small">
                    {t("carousel.items.1.meta")}
                  </span>
                </div>
                <div className="carousel-item text-center">
                  <div className="img mb-3">
                    <img className="img-fluid" src={quote} alt="quote" />
                  </div>
                  <div className="stars mb-2">
                    {[...Array(5)].map((_, i) => (
                      <FontAwesomeIcon key={i} icon={faStar} className="star" />
                    ))}
                  </div>
                  <p className="lead mx-auto">{t("carousel.items.2.text")}</p>
                  <h4 className="mt-3 mb-0">{t("carousel.items.2.name")}</h4>
                  <span className="text-muted small">
                    {t("carousel.items.2.meta")}
                  </span>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
              >
                <FontAwesomeIcon icon={faArrowLeft} className="control-icon" />
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <FontAwesomeIcon icon={faArrowRight} className="control-icon" />
              </button>
            </div>
          </div>
        </section>
        <section className="instructors my-5">
          <div className="container">
            <div className="header row align-items-center">
              <div className="text col-lg-8 col-md-7">
                <p className="bg-babyblue paragraph px-4 py-1 rounded-1 mx-auto mx-lg-0">
                  {t("instructors.badge")}
                </p>
                <h2 className="mb-4 mt-3">
                  {t("instructors.title.part1")}{" "}
                  <span className="highlight-text">
                    {t("instructors.title.highlight")}{" "}
                  </span>
                  {t("instructors.title.part2")}
                </h2>
                <p>{t("instructors.description")}</p>
              </div>
              <div className="button mb-3 col-lg-4 col-md-5 text-lg-end text-center mt-3 mt-md-0">
                <button className="px-3 py-2 text-uppercase rounded-2">
                  {t("instructors.button")}{" "}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="right-arrow"
                  />
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-md-3">
                <div className="card h-100">
                  <img
                    src={instructor1}
                    className="card-img-top"
                    alt="instructor"
                  />
                  <div className="card-body d-flex align-items-center justify-content-between">
                    <div className="text d-flex flex-column gap-2">
                      <p className="card-text m-0">
                        {t("instructors.cards.0.role")}
                      </p>
                      <h5 className="card-title">
                        {t("instructors.cards.0.name")}
                      </h5>
                    </div>
                    <div className="button">
                      <FontAwesomeIcon icon={faShareNodes} className="share" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="card h-100">
                  <img
                    src={instructor2}
                    className="card-img-top"
                    alt="instructor"
                  />
                  <div className="card-body d-flex align-items-center justify-content-between">
                    <div className="text d-flex flex-column gap-2">
                      <p className="card-text m-0">
                        {t("instructors.cards.1.role")}
                      </p>
                      <h5 className="card-title">
                        {t("instructors.cards.1.name")}
                      </h5>
                    </div>
                    <div className="button">
                      <FontAwesomeIcon icon={faShareNodes} className="share" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="card h-100">
                  <img
                    src={instructor3}
                    className="card-img-top"
                    alt="instructor"
                  />
                  <div className="card-body d-flex align-items-center justify-content-between">
                    <div className="text d-flex flex-column gap-2">
                      <p className="card-text m-0">
                        {t("instructors.cards.2.role")}
                      </p>
                      <h5 className="card-title">
                        {t("instructors.cards.2.name")}
                      </h5>
                    </div>
                    <div className="button">
                      <FontAwesomeIcon icon={faShareNodes} className="share" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="card h-100">
                  <img
                    src={instructor4}
                    className="card-img-top"
                    alt="instructor"
                  />
                  <div className="card-body d-flex align-items-center justify-content-between">
                    <div className="text d-flex flex-column gap-2">
                      <p className="card-text m-0">
                        {t("instructors.cards.3.role")}
                      </p>
                      <h5 className="card-title">
                        {t("instructors.cards.3.name")}
                      </h5>
                    </div>
                    <div className="button">
                      <FontAwesomeIcon icon={faShareNodes} className="share" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="jobs mt-5 row flex-column flex-lg-row justify-content-between align-items-center mx-auto p-5 rounded-2 text-white">
              <div className="col-lg-3">
                <h2 className="fs-1">
                  {t("instructors.jobs.title.part1")}
                  <span> {t("instructors.jobs.title.highlight")}</span>{" "}
                  {t("instructors.jobs.title.part2")}
                </h2>
              </div>
              <div className="col-lg-6">
                <p className="lead">{t("instructors.jobs.description")}</p>
              </div>
              <div className="col-lg-3">
                <button className="text-uppercase px-2 py-2 rounded-2">
                  {t("instructors.jobs.button")}{" "}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="right-arrow"
                  />
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="blog">
          <div className="container">
            <div className="header text-center">
              <p className="bg-babyblue paragraph px-4 py-1 rounded-1 mx-auto">
                {t("blog.badge")}
              </p>
              <h2 className="mb-4 mt-3">
                {t("blog.title.part1")}{" "}
                <span className="highlight-text">
                  {" "}
                  {t("blog.title.highlight")}{" "}
                </span>
                {t("blog.title.part2")}
              </h2>
              <p className="w-50 mx-auto">{t("blog.description")}</p>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="card mb-4 h-100">
                  <img
                    className="card-img-top"
                    src="/images/featured01.png"
                    alt="Card"
                  />
                  <div className="card-body">
                    <div className="btn">
                      <button className="btn rounded-5 px-3 py-1">
                        {t("blog.posts.0.tag")}
                      </button>
                    </div>
                    <h5 className="card-title">
                      <a className="text-decoration-none" href="#">
                        {t("blog.posts.0.title")}
                      </a>
                    </h5>
                    <div className="card-content d-flex gap-2 align-items-center">
                      <FontAwesomeIcon icon={faCalendar} />
                      <span>{t("blog.posts.0.date")}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4 h-100">
                  <img
                    className="card-img-top"
                    src="/images/featured01.png"
                    alt="Card"
                  />
                  <div className="card-body">
                    <div className="btn">
                      <button className="btn rounded-5 px-3 py-1">
                        {t("blog.posts.1.tag")}
                      </button>
                    </div>
                    <h5 className="card-title">
                      <a className="text-decoration-none" href="#">
                        {t("blog.posts.1.title")}
                      </a>
                    </h5>
                    <div className="card-content d-flex gap-2 align-items-center">
                      <FontAwesomeIcon icon={faCalendar} />
                      <span>{t("blog.posts.1.date")}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4 h-100">
                  <img
                    className="card-img-top"
                    src="/images/featured01.png"
                    alt="Card"
                  />
                  <div className="card-body">
                    <div className="btn">
                      <button className="btn rounded-5 px-3 py-1">
                        {t("blog.posts.2.tag")}
                      </button>
                    </div>
                    <h5 className="card-title">
                      <a className="text-decoration-none" href="#">
                        {t("blog.posts.2.title")}
                      </a>
                    </h5>
                    <div className="card-content d-flex gap-2 align-items-center">
                      <FontAwesomeIcon icon={faCalendar} />
                      <span>{t("blog.posts.2.date")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="mail container my-5">
          <div className="row align-items-center justify-content-between gx-3">
            <div className="join col-12 col-md-5 text-md-start text-center mb-3 mb-md-0">
              <h4>{t("mail.title")}</h4>
              <img src={sub} alt="join" className="img-fluid" />
            </div>
            <div className="col-12 col-md-6">
              <div className="subscribe-box d-flex w-100">
                <input type="email" placeholder={t("mail.input.placeholder")} />
                <button type="button">{t("mail.button")}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
