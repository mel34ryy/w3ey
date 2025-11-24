import "./Home.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneVolume,
  faArrowRight,
  faArrowLeft,
  faPeopleGroup,
  faGraduationCap,
  faStar,
  faAtom,
  faComments,
  faFilm,
  faPenRuler,
  faCakeCandles,
  faCalendar,
  faClock,
  faUserGroup,
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
import sub from "../assets/images/subscribe.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Home() {
  const { t } = useTranslation();
  const [courses, setCourses] = useState([]);
  const [instructors, setInstructors] = useState([]);
  const currentItems = courses.slice(0, 9);
  const currentInstructors = instructors.slice(0, 4);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const res = await axios.get("https://w3ey.runasp.net/api/Courses");

        const normalized = res.data.map((c) => ({
          id: c.id,
          title: c.title,
          description: c.description,
          image: c.thumbnail,
          duration: c.duration,
          students: c.studentCount,
          author: c.authorName,
          tags: c.filters,
        }));

        setCourses(normalized);
      } catch (error) {
        console.error("Failed to load courses:", error);
      }
    }

    fetchCourses();
  }, []);

  useEffect(() => {
    async function fetchInstructors() {
      try {
        const res = await axios.get("https://w3ey.runasp.net/api/Authors");

        const normalized = res.data.map((item) => ({
          name: item.name,
          specialization: `${item.courseCount} ${
            item.courseCount > 1 ? "Courses" : "Course"
          }`,
          rating: Number(item.rating),
          image: item.avatar,
          socials: item.socialLinks.reduce((acc, s) => {
            acc[s.platform.toLowerCase()] = s.url;
            return acc;
          }, {}),
        }));

        setInstructors(normalized);
      } catch (error) {
        console.error("API Fetch Error:", error);
      }
    }

    fetchInstructors();
  }, []);

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
                {t("home.hero.satisfaction")}
              </p>
              <h1 className="mb-4 mt-3 home-h1">
                {t("home.hero.title.part1")}{" "}
                <span className="highlight-text">
                  {t("home.hero.title.highlight")}
                </span>{" "}
                {t("home.hero.title.part2")}
              </h1>
              <p className="lead mb-5">{t("home.hero.description")}</p>
              <div className="buttons d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start align-items-center gap-4">
                <Link to="courses" className="buttons">
                  <button className="px-5 py-2 border-0 rounded-2 text-uppercase">
                    {t("home.hero.button.explore")}
                    <span className="ms-2">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="right-arrow"
                      />
                    </span>
                  </button>
                </Link>
                <div className="call d-flex align-items-center">
                  <FontAwesomeIcon
                    className="h2 m-0 me-2 icon"
                    icon={faPhoneVolume}
                    color="#082a5e"
                  />
                  <div className="content d-flex flex-column">
                    <p className="m-0">{t("home.hero.call.question")}</p>
                    <button className="border-0 bg-transparent p-0 text-start">
                      {t("home.hero.call.phone")}
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
                  <p className="m-0">{t("home.hero.box1.title")}</p>
                  <span>{t("home.hero.box1.value")}</span>
                </div>
                <div className="second-box d-flex flex-column align-items-center rounded-4 p-3 p-md-4 shadow-sm">
                  <FontAwesomeIcon className="second" icon={faGraduationCap} />
                  <p className="m-0">{t("home.hero.box2.title")}</p>
                  <span>{t("home.hero.box2.value")}</span>
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
                {t("home.about.badge")}
              </p>
              <h2 className="mb-4 mt-3">
                {t("home.about.title.part1")}{" "}
                <span className="highlight-text">
                  {t("home.about.title.highlight")}
                </span>{" "}
                {t("home.about.title.part2")}
              </h2>
              <div className="paragraph">
                <p>{t("home.about.p1")}</p>
                <br />
                <p>{t("home.about.p2")}</p>
                <br />
                <p>{t("home.about.p3")}</p>
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
                    {t("home.about.icons.expYears.p1")}
                    <br />
                    {t("home.about.icons.expYears.p2")}
                  </p>
                </div>
                <div className="icon d-flex gap-2">
                  <img
                    className="img-fluid w-15 w-md-20"
                    src={icon02}
                    alt="icon"
                  />
                  <p className="m-0">
                    {t("home.about.icons.programs.p1")}
                    <br />
                    {t("home.about.icons.programs.p2")}
                  </p>
                </div>
                <div className="icon d-flex gap-2">
                  <img
                    className="img-fluid w-15 w-md-20"
                    src={icon03}
                    alt="icon"
                  />
                  <p className="m-0">
                    {t("home.about.icons.students.p1")}
                    <br />
                    {t("home.about.icons.students.p2")}
                  </p>
                </div>
                <div className="icon d-flex gap-2">
                  <img
                    className="img-fluid w-15 w-md-20"
                    src={icon04}
                    alt="icon"
                  />
                  <p className="m-0">
                    {t("home.about.icons.curriculum.p1")}
                    <br />
                    {t("home.about.icons.curriculum.p2")}
                  </p>
                </div>
                <div className="icon d-flex gap-2">
                  <img
                    className="img-fluid w-15 w-md-20"
                    src={icon05}
                    alt="icon"
                  />
                  <p className="m-0">
                    {t("home.about.icons.support.p1")}
                    <br />
                    {t("home.about.icons.support.p2")}
                  </p>
                </div>
              </div>
              <Link to="about">
                <button className="px-5 py-2 border-0 rounded-2 text-uppercase">
                  {t("home.about.button")}
                  <span className="ms-2">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="right-arrow"
                    />
                  </span>
                </button>
              </Link>
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
            {t("home.featured.badge")}
          </p>
          <h2 className="mb-4 mt-3">
            {t("home.featured.title.part1")}{" "}
            <span className="highlight-text">
              {t("home.featured.title.highlight")}
            </span>{" "}
            {t("home.featured.title.part2")}
          </h2>
          <div className="row">
            {currentItems.map((course) => (
              <div className="col-md-6 col-lg-4 mb-4" key={course.id}>
                <div className="course-card shadow-sm card h-100">
                  <Link to={`/course/${course.id}`} className="a">
                    <img
                      src={course.image}
                      className="card-img-top"
                      alt={course.title}
                    />
                    <button className="small btn btn-success-subtle text-capitalize">
                      {course.tags?.[0] || "course"}
                    </button>
                  </Link>

                  <div className="card-body text-start">
                    <p className="card-text">
                      <FontAwesomeIcon icon={faClock} />
                      <span className="text-secondary me-3">
                        {course.duration || "0 h 0 m"}
                      </span>

                      <FontAwesomeIcon icon={faUserGroup} />
                      <span className="text-secondary">
                        {course.students || "0"} students
                      </span>
                    </p>

                    <Link
                      to={`/course/${course.id}`}
                      className="card-title fw-bold text-secondary text-decoration-none course-link-anim"
                    >
                      {course.title}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link to="courses" className="text-decoration-none">
            <button className="btn d-flex mx-auto mt-4 px-4 py-2">
              {t("home.featured.button")}
            </button>
          </Link>
        </section>
        <section className="w3ey py-5">
          <img className="d-none d-lg-block" src={rotation} alt="circle" />
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <p className="bg-babyblue paragraph px-4 py-1 rounded-1">
                  {t("home.w3ey.badge")}
                </p>
                <h2 className="mb-4 mt-3">
                  {t("home.w3ey.title.part1")}{" "}
                  <span className="highlight-text">
                    {t("home.w3ey.title.part2")}
                    <span className="three">
                      {t("home.w3ey.title.highlight")}
                    </span>
                    {t("home.w3ey.title.part3")}
                  </span>
                </h2>
                <p className="lead">
                  {t("home.w3ey.description.p1")}
                  <br /> {t("home.w3ey.description.p2")}
                  <br /> {t("home.w3ey.description.p3")}
                </p>
              </div>
              <div className="col-md-6 col-lg-8 cards">
                <div className="row justify-content-center h-100">
                  <div className="col-6 col-md-4 mb-3">
                    <div className="card h-100 d-flex justify-content-center align-items-center mx-auto">
                      <FontAwesomeIcon icon={faAtom} className="icon" />
                      <span>{t("home.w3ey.cards.science")}</span>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 mb-3">
                    <div className="card h-100 d-flex justify-content-center align-items-center mx-auto">
                      <FontAwesomeIcon icon={faComments} className="icon" />
                      <span>{t("home.w3ey.cards.debate")}</span>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 mb-3">
                    <div className="card h-100 d-flex justify-content-center align-items-center mx-auto">
                      <FontAwesomeIcon icon={faFilm} className="icon" />
                      <span>{t("home.w3ey.cards.movies")}</span>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 mb-3">
                    <div className="card h-100 d-flex justify-content-center align-items-center mx-auto">
                      <FontAwesomeIcon icon={faPenRuler} className="icon" />
                      <span>{t("home.w3ey.cards.drawing")}</span>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 mb-3">
                    <div className="card h-100 d-flex justify-content-center align-items-center mx-auto">
                      <FontAwesomeIcon icon={faCakeCandles} className="icon" />
                      <span>{t("home.w3ey.cards.fundays")}</span>
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
                  <p className="lead mx-auto">
                    {t("home.carousel.items.0.text")}
                  </p>
                  <h4 className="mt-3 mb-0">
                    {t("home.carousel.items.0.name")}
                  </h4>
                  <span className="text-muted small">
                    {t("home.carousel.items.0.meta")}
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
                  <p className="lead mx-auto">
                    {t("home.carousel.items.1.text")}
                  </p>
                  <h4 className="mt-3 mb-0">
                    {t("home.carousel.items.1.name")}
                  </h4>
                  <span className="text-muted small">
                    {t("home.carousel.items.1.meta")}
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
                  <p className="lead mx-auto">
                    {t("home.carousel.items.2.text")}
                  </p>
                  <h4 className="mt-3 mb-0">
                    {t("home.carousel.items.2.name")}
                  </h4>
                  <span className="text-muted small">
                    {t("home.carousel.items.2.meta")}
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
                  {t("home.instructors.badge")}
                </p>
                <h2 className="mb-4 mt-3">
                  {t("home.instructors.title.part1")}{" "}
                  <span className="highlight-text">
                    {t("home.instructors.title.highlight")}{" "}
                  </span>
                  {t("home.instructors.title.part2")}
                </h2>
                <p>{t("home.instructors.description")}</p>
              </div>
              <div className="button mb-3 col-lg-4 col-md-5 text-lg-end text-center mt-3 mt-md-0">
                <Link to="instructors">
                  <button className="px-3 py-2 text-uppercase rounded-2">
                    {t("home.instructors.button")}{" "}
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="right-arrow"
                    />
                  </button>
                </Link>
              </div>
            </div>
            <div className="row">
              {currentInstructors.map((inst, index) => (
                <div key={index} className="col-sm-6 col-md-3">
                  <div className="instructor-card h-100">
                    <img
                      src={inst.image}
                      className="instructor-card-img-top"
                      alt={inst.name}
                    />

                    <div className="instructor-card-body">
                      <h5 className="instructor-card-title">{inst.name}</h5>

                      <p className="instructor-card-text">
                        <i className="bi bi-briefcase-fill"></i>{" "}
                        {inst.specialization}
                      </p>

                      <div className="instructor-social-links mt-2">
                        {inst.socials.twitter && (
                          <a
                            href={inst.socials.twitter}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="bi bi-twitter-x"></i>
                          </a>
                        )}

                        {inst.socials.youtube && (
                          <a
                            href={inst.socials.youtube}
                            target="_blank"
                            rel="noreferrer"
                            className="mx-2"
                          >
                            <i className="bi bi-youtube"></i>
                          </a>
                        )}

                        {inst.socials.linkedin && (
                          <a
                            href={inst.socials.linkedin}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="bi bi-linkedin"></i>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="jobs mt-5 row flex-column flex-lg-row justify-content-between align-items-center mx-auto p-5 rounded-2 text-white">
              <div className="col-lg-3">
                <h2 className="fs-1">
                  {t("home.instructors.jobs.title.part1")}
                  <span>
                    {" "}
                    {t("home.instructors.jobs.title.highlight")}
                  </span>{" "}
                  {t("home.instructors.jobs.title.part2")}
                </h2>
              </div>
              <div className="col-lg-6">
                <p className="lead">{t("home.instructors.jobs.description")}</p>
              </div>
              <div className="col-lg-3">
                <Link to="contact">
                  <button className="text-uppercase px-2 py-2 rounded-2">
                    {t("home.instructors.jobs.button")}{" "}
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="right-arrow"
                    />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="blog">
          <div className="container">
            <div className="header text-center">
              <p className="bg-babyblue paragraph px-4 py-1 rounded-1 mx-auto">
                {t("home.blog.badge")}
              </p>
              <h2 className="mb-4 mt-3">
                {t("home.blog.title.part1")}{" "}
                <span className="highlight-text">
                  {" "}
                  {t("home.blog.title.highlight")}{" "}
                </span>
                {t("home.blog.title.part2")}
              </h2>
              <p className="w-50 mx-auto">{t("home.blog.description")}</p>
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
                        {t("home.blog.posts.0.tag")}
                      </button>
                    </div>
                    <h5 className="card-title">
                      <a className="text-decoration-none" href="#">
                        {t("home.blog.posts.0.title")}
                      </a>
                    </h5>
                    <div className="card-content d-flex gap-2 align-items-center">
                      <FontAwesomeIcon icon={faCalendar} />
                      <span>{t("home.blog.posts.0.date")}</span>
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
                        {t("home.blog.posts.1.tag")}
                      </button>
                    </div>
                    <h5 className="card-title">
                      <a className="text-decoration-none" href="#">
                        {t("home.blog.posts.1.title")}
                      </a>
                    </h5>
                    <div className="card-content d-flex gap-2 align-items-center">
                      <FontAwesomeIcon icon={faCalendar} />
                      <span>{t("home.blog.posts.1.date")}</span>
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
                        {t("home.blog.posts.2.tag")}
                      </button>
                    </div>
                    <h5 className="card-title">
                      <a className="text-decoration-none" href="#">
                        {t("home.blog.posts.2.title")}
                      </a>
                    </h5>
                    <div className="card-content d-flex gap-2 align-items-center">
                      <FontAwesomeIcon icon={faCalendar} />
                      <span>{t("home.blog.posts.2.date")}</span>
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
              <h4>{t("home.mail.title")}</h4>
              <img src={sub} alt="join" className="img-fluid" />
            </div>
            <div className="col-12 col-md-6">
              <div className="subscribe-box d-flex w-100">
                <input
                  type="email"
                  placeholder={t("home.mail.input.placeholder")}
                />
                <button type="button">{t("home.mail.button")}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
