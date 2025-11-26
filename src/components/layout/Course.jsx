import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faUserGroup,
  faNoteSticky,
  faUser,
  faBullhorn,
} from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import Loader from "./Loader";

export default function Course() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { t } = useTranslation();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    async function fetchCourse() {
      try {
        const res = await axios.get(
          `https://w3ey.runasp.net/api/Courses/${id}`
        );
        setCourse(res.data);
      } catch (error) {
        console.error("Failed to load course:", error);
      }
    }

    fetchCourse();
  }, [id]);

  if (!course) return <Loader />;

  const mainAuthor = course.authors?.[0];
  const tag = course.filters?.[0] || course.level || "course";

  return (
    <>
      <main className="main">
        <section className="course-banrpage text-capitalize">
          <div className="banr-content">
            <button className="small btn btn-success-subtle text-bg-success mt-5 mx-3 px-4">
              {tag}
            </button>

            <h1 className="text-white mx-3 p-2">{course.title}</h1>

            <div className="d-flex align-items-center mx-3">
              <img
                src={mainAuthor?.avatar}
                className="rounded-circle me-2"
                width="50"
                height="50"
                alt={mainAuthor?.name}
              />

              <div className="text-start">
                <div className="text-secondary">{mainAuthor?.name}</div>

                <div className="text-white d-inline-flex align-items-center gap-3">
                  <span className="me-2">
                    <FontAwesomeIcon
                      icon={faNoteSticky}
                      className="text-white"
                    />
                    <span className="ms-1">{course.sectionCount || 0}</span>
                  </span>

                  <span>
                    <FontAwesomeIcon icon={faUser} className="text-white" />
                    <span className="ms-1">{course.studentCount}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="card card-banr bg-body-secondary">
            <div className="card-body">
              <h2 className="card-title">{course.price || "Free"}</h2>
              <p>
                {course.price
                  ? t("coursePage.access_premium")
                  : t("coursePage.access_free")}
              </p>
              <hr />
              <ul className="custom-square">
                <li>
                  <p>{t("coursePage.to_world")}</p>
                </li>
                <li>
                  <p>
                    {course.studentCount}{" "}
                    {t("coursePage.total_registered", {
                      count: course.studentCount,
                    })}
                  </p>
                </li>
                <li>
                  <p>{t("coursePage.users")} </p>
                </li>
                <li>
                  <p>{course.features?.[0]}</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <div className="container text-center">
        <img
          src={course.thumbnail}
          alt={course.title}
          width="50%"
          height="auto"
          className="object-fit-cover m-4"
        />
        <div className="col-12 col-md-auto d-flex justify-content-center justify-content-md-end">
          <button className="btn btn-primary text-white">Add to card</button>
        </div>
      </div>

      <div className="container">
        <div className="tab-content mt-3">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="info-tab"
                data-bs-toggle="tab"
                data-bs-target="#info"
                type="button"
                role="tab"
              >
                {t("coursePage.course_information")}
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="ratings-tab"
                data-bs-toggle="tab"
                data-bs-target="#ratings"
                type="button"
                role="tab"
              >
                {t("coursePage.ratings_reviews")}
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="advertise-tab"
                data-bs-toggle="tab"
                data-bs-target="#advertise"
                type="button"
                role="tab"
              >
                {t("coursePage.advertisements")}
              </button>
            </li>
          </ul>

          <div className="tab-pane fade show active" id="info" role="tabpanel">
            <p className="m-4">{course.description}</p>
          </div>

          <div className="tab-pane fade" id="ratings" role="tabpanel">
            <div className="text-center">
              <h1 className="display-1 text-secondary mw-100">
                <FontAwesomeIcon icon={faCircleXmark} />
              </h1>

              <h4 className="text-secondary">{t("coursePage.no_reviews")}</h4>
            </div>
          </div>

          <div className="tab-pane fade" id="advertise" role="tabpanel">
            <div className="text-center">
              <h1 className="display-1 text-secondary mw-100">
                <FontAwesomeIcon icon={faBullhorn} />
              </h1>
              <h4 className="text-secondary">{t("coursePage.no_ads")}</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="my-5 mx-4">
          <span className="text-bg-primary px-2 py-1 rounded text-white">
            {t("coursePage.top_course")}
          </span>
          <div className="row justify-content-between align-items-center">
            <h1 className="col-5 text-primary-emphasis">
              {t("coursePage.more_courses_by")} {mainAuthor?.name}
            </h1>
            <button
              className="btn col-2 text-bg-primary text-white"
              onClick={() => navigate("/courses")}
            >
              {t("coursePage.view_all_courses")}
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="container m-5 mx-auto">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center align-content-center text-capitalize">
          {course.otherCoursesByAuthors?.map((c) => (
            <div className="col" key={c.id}>
              <div className="course-card card h-100">
                <Link to={`/course/${c.id}`}>
                  <img
                    src={c.thumbnail}
                    className="card-img-top"
                    alt={c.title}
                  />

                  <button className="small btn btn-success-subtle">
                    {c.filters?.[0] || "course"}
                  </button>
                </Link>

                <div className="card-body text-start">
                  <p className="card-text">
                    <FontAwesomeIcon icon={faClock} />
                    <span className="text-secondary me-3">
                      {c.duration || "0 h 0 m"}
                    </span>

                    <FontAwesomeIcon icon={faUserGroup} />
                    <span className="text-secondary">
                      {c.studentCount}
                      {t("coursePage.students")}
                    </span>
                  </p>

                  <Link
                    to={`/course/${c.id}`}
                    className="card-title fw-bold text-secondary text-decoration-none course-link-anim"
                  >
                    {c.title}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
