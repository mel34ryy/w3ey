import "./Courses.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/layout/Loader";
import { useTranslation } from "react-i18next";
import Banner from "../components/layout/Banner";
import Reveal from "../components/effects/Reveal";
export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 9;
  const { t } = useTranslation();
  useEffect(() => {
    async function fetchCourses() {
      try {
        setLoading(true);
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
      } finally {
        setLoading(false);
      }
    }

    fetchCourses();
  }, []);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = courses.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(courses.length / itemsPerPage);

  return (
    <>
      <main className="main">
        <Banner>{t("courses.banner.title")}</Banner>
      </main>
      <div className="courses-div text-center container">
        <div className="texts mt-5">
          <span className="babyblue blog-paragraph px-4 py-1 rounded-1 mx-auto text-center ">
            {t("courses.courses_badge")}
          </span>
          <Reveal>

          <h2 className="instructor-title mb-5 mt-3 fw-bold fs-1">
            {t("courses.courses_heading.part1")}
            <span className="instructor-highlight-text">
              {" "}
              {t("courses.courses_heading.highlight")}{" "}
            </span>{" "}
            {t("courses.courses_heading.part2")}
          </h2>
          </Reveal>
          
        </div>

        <div className="row row-cols-1 row-cols-md-2 mt-5 mb-5 row-cols-lg-3 g-4 justify-content-center align-content-center text-capitalize">
          {loading ? (
            <Loader />
          ) : (
            currentItems.map((course) => (
              <div className="col" key={course.id}>
                  <Reveal>

                <div className="course-card shadow-sm card h-100" id="course-card">
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
                        {course.students || "0"} {t("courses.students")}
                      </span>
                    </p>

                    <Link
                      to={`/course/${course.id}`}
                      className="card-title fw-bold text-secondary text-decoration-none course-link-anim"
                    >
                      {course.title}
                    </Link>
                    <div className="instructor-rating">
                      
                      <span></span>
                    </div>
                  </div>
                </div>
                  </Reveal>
              </div>
            ))
          )}
        </div>
        <div className="pag d-flex justify-content-center mt-4">
          <div>
            <ul className="pagination">
              <li
                className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                >
                  {t("courses.pagination_previous")}
                </button>
              </li>

              {Array.from({ length: totalPages }, (_, i) => (
                <li
                  key={i + 1}
                  className={`page-item ${
                    currentPage === i + 1 ? "active" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => setCurrentPage(i + 1)}
                  >
                    {i + 1}
                  </button>
                </li>
              ))}

              <li
                className={`page-item ${
                  currentPage === totalPages ? "disabled" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                >
                  {t("courses.pagination_next")}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section className="py-5 text-center">
          <p className="babyblue blog-paragraph px-4 py-1 rounded-1 mx-auto text-center ">
          {t("courses.tracks")}
          </p>
        
        <div className="container mt-5">
          <Reveal>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
            <div className="col">
              <div className="course-card card h-100 border-0 shadow-lg rounded-4">
                <div className="card-body">
                  <h4 className="card-title text-primary fw-bold">
                    {t("courses.track_ai_title")}
                  </h4>
                  <hr />
                  <p className="card-text text-secondary">
                    {t("courses.track_ai_desc")}
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="course-card card h-100 border-0 shadow-lg rounded-4">
                <div className="card-body">
                  <h4 className="card-title text-primary fw-bold">
                    {t("courses.track_ml_title")}
                  </h4>
                  <hr />
                  <p className="card-text text-secondary">
                    {t("courses.track_ml_desc")}
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="course-card card h-100 border-0 shadow-lg rounded-4">
                <div className="card-body">
                  <h4 className="card-title text-primary fw-bold">
                    {t("courses.track_web_title")}
                  </h4>
                  <hr />
                  <p className="card-text text-secondary">
                    {t("courses.track_web_desc")}
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="course-card card h-100 border-0 shadow-lg rounded-4 ">
                <div className="card-body">
                  <h4 className="card-title text-primary fw-bold">
                    {t("courses.track_se_title")}
                  </h4>
                  <hr />
                  <p className="card-text text-secondary">
                    {t("courses.track_se_desc")}
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="course-card card h-100 border-0 shadow-lg rounded-4 ">
                <div className="card-body">
                  <h4 className="card-title text-primary fw-bold">
                    {t("courses.track_cloud_title")}
                  </h4>
                  <hr />
                  <p className="card-text text-secondary">
                    {t("courses.track_cloud_desc")}
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="course-card  card h-100 border-0  shadow-lg rounded-4 ">
                <div className="card-body">
                  <h4 className="card-title text-primary fw-bold">
                    {t("courses.track_embedded_title")}
                  </h4>
                  <hr />
                  <p className="card-text text-secondary">
                    {t("courses.track_embedded_desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
