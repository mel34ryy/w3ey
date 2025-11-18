import "./Courses.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/layout/Loader";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 9;

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
        <section className="courses-sec1 fs-3">
          <div className="courses-text">
            <h1>Courses</h1>
            <a href="#">Diora Online School</a>
            <span></span>
            <span> &gt; courses</span>
          </div>
        </section>
      </main>
      <div className="courses-div text-center container">
        <div className="texts">
          <span className="bg-primary-subtle py-2 px-4 rounded-pill fs-3 fw-bold text-uppercase shadow-sm">
            courses
          </span>
          <h6 className="m-3 p-1 fw-bold display-6">
            Enrichment materials and interactive clubs
          </h6>
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center align-content-center text-capitalize">
          {loading ? (
            <Loader />
          ) : (
            currentItems.map((course) => (
              <div className="col" key={course.id}>
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
            ))
          )}
        </div>
        <div className="d-flex justify-content-center mt-4">
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
                  Previous
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
                  Next
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section className="py-5 text-center">
        <span className="bg-primary-subtle py-2 px-4 rounded-pill fs-3 fw-bold text-uppercase shadow-sm">
          Tracks
        </span>
        <div className="container mt-5">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
            <div className="col">
              <div className="course-card card h-100 border-0 shadow-lg rounded-4">
                <div className="card-body">
                  <h4 className="card-title text-primary fw-bold">
                    Artificial Intelligence (AI)
                  </h4>
                  <hr />
                  <p className="card-text text-secondary">
                    AI is the science of making machines think and act like
                    humans. It focuses on creating systems that can solve
                    problems, understand language, and make decisions
                    intelligently.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="course-card card h-100 border-0 shadow-lg rounded-4">
                <div className="card-body">
                  <h4 className="card-title text-primary fw-bold">
                    Machine Learning
                  </h4>
                  <hr />
                  <p className="card-text text-secondary">
                    Machine Learning allows computers to learn from data and
                    improve automatically without being explicitly programmed.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="course-card card h-100 border-0 shadow-lg rounded-4">
                <div className="card-body">
                  <h4 className="card-title text-primary fw-bold">
                    web development
                  </h4>
                  <hr />
                  <p className="card-text text-secondary">
                    Web Development is about building and maintaining websites
                    and web applications, including both the front-end (user
                    interface) and back-end (server side).
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="course-card card h-100 border-0 shadow-lg rounded-4 ">
                <div className="card-body">
                  <h4 className="card-title text-primary fw-bold">
                    Software Engineering
                  </h4>
                  <hr />
                  <p className="card-text text-secondary">
                    Software Engineering is the process of designing,
                    developing, and maintaining high-quality software systems
                    efficiently and systematically.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="course-card card h-100 border-0 shadow-lg rounded-4 ">
                <div className="card-body">
                  <h4 className="card-title text-primary fw-bold">
                    cloud-computig
                  </h4>
                  <hr />
                  <p className="card-text text-secondary">
                    Cloud Computing is the delivery of computing services—like
                    storage, servers, and databases—over the internet instead of
                    using local hardware.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="course-card  card h-100 border-0  shadow-lg rounded-4 ">
                <div className="card-body">
                  <h4 className="card-title text-primary fw-bold">
                    Embedded Systems
                  </h4>
                  <hr />
                  <p className="card-text text-secondary">
                    Embedded Systems are small computer systems built into
                    larger devices (like cars, TVs, or medical machines) to
                    control specific functions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
