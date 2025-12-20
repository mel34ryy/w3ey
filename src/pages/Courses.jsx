import "./Courses.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import Loader from "../components/layout/Loader";
import { useTranslation } from "react-i18next";
import Banner from "../components/layout/Banner";
import Reveal from "../components/effects/Reveal";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  // 🔍 البحث
  const [searchTerm, setSearchTerm] = useState("");
  // 🏷️ الفلترة
  const [selectedTag, setSelectedTag] = useState("all");

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

  // 🟢 كل الـ tags المتاحة
  const tagsList = useMemo(() => {
    const allTags = courses.flatMap((c) => c.tags || []);
    return ["all", ...new Set(allTags)];
  }, [courses]);

  // 🟢 البحث + الفلترة
  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch = course.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesTag =
        selectedTag === "all" || course.tags?.includes(selectedTag);

      return matchesSearch && matchesTag;
    });
  }, [courses, searchTerm, selectedTag]);

  // 🟢 Pagination بعد الفلترة
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredCourses.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);

  return (
    <>
      <main className="main">
        <Banner>{t("courses.banner.title")}</Banner>
      </main>

      <div className="courses-div text-center container">
        <div className="texts mt-5">
          <span className="babyblue blog-paragraph px-4 py-1 rounded-1 mx-auto">
            {t("courses.courses_badge")}
          </span>

          <Reveal>
            <h2 className="instructor-title mb-5 mt-3 fw-bold fs-1">
              {t("courses.courses_heading.part1")}
              <span className="instructor-highlight-text">
                {" "}
                {t("courses.courses_heading.highlight")}{" "}
              </span>
              {t("courses.courses_heading.part2")}
            </h2>
          </Reveal>
        </div>

        {/* 🔍 البحث و الفلترة */}
        <div className="row g-3 my-4 justify-content-center courses-filter-bar d-flex justify-content-between align-items-center mt-1 mb-5">
          <div className="col-md-5">
            <input
              type="text"
              className="form-control"
              placeholder={t("courses.search_placeholder") || "ابحث عن كورس"}
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>

          <div className="col-md-4">
            <select
              className="form-select"
              value={selectedTag}
              onChange={(e) => {
                setSelectedTag(e.target.value);
                setCurrentPage(1);
              }}
            >
              {tagsList.map((tag, i) => (
                <option key={i} value={tag}>
                  {tag === "all" ? "All Categories" : tag}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* ======= COURSES ======= */}
        <div className="row row-cols-1 row-cols-md-2 mt-5 mb-5 row-cols-lg-3 g-4 justify-content-center text-capitalize">
          {loading ? (
            <Loader />
          ) : currentItems.length ? (
            currentItems.map((course) => (
              <div className="col" key={course.id}>
                <Reveal>
                  <div
                    className="course-card shadow-sm card h-100"
                    id="course-card"
                  >
                    <Link to={`/course/${course.id}`} className="a">
                      <img
                        src={course.image}
                        className="card-img-top"
                        alt={course.title}
                      />
                      <button className="small btn btn-success-subtle">
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
                    </div>
                  </div>
                </Reveal>
              </div>
            ))
          ) : (
            <p className="text-secondary text-center">
              No matching results found 🔍
            </p>
          )}
        </div>

        {/* ======= PAGINATION ======= */}
        <div className="pag d-flex justify-content-center mt-4">
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
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

      {/* ======= TRACKS SECTION (زي ما هي) ======= */}
      <section className="py-5 text-center">
        <p className="babyblue blog-paragraph px-4 py-1 rounded-1 mx-auto">
          {t("courses.tracks")}
        </p>

        <div className="container mt-5">
          <Reveal>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
              {[
                "ai",
                "ml",
                "web",
                "se",
                "cloud",
                "embedded",
              ].map((track) => (
                <div className="col" key={track}>
                  <div className="course-card card h-100 border-0 shadow-lg rounded-4">
                    <div className="card-body">
                      <h4 className="card-title text-primary fw-bold">
                        {t(`courses.track_${track}_title`)}
                      </h4>
                      <hr />
                      <p className="card-text text-secondary">
                        {t(`courses.track_${track}_desc`)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
