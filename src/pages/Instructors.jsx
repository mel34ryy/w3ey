import { useState, useEffect } from "react";
import axios from "axios";
import "./Instructors.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Loader from "../components/layout/Loader";

export default function InstructorsPage() {
  const [instructors, setInstructors] = useState([]);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("none");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    async function fetchInstructors() {
      try {
        setLoading(true);
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
      } finally {
        setLoading(false);
      }
    }

    fetchInstructors();
  }, []);

  const filteredList = instructors
    .filter(
      (inst) =>
        inst.name.toLowerCase().includes(query.toLowerCase()) ||
        inst.specialization.toLowerCase().includes(query.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === "high") return b.rating - a.rating;
      if (sort === "low") return a.rating - b.rating;
      return 0;
    });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredList.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const totalPages = Math.ceil(filteredList.length / itemsPerPage);

  const generateStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i)
        stars.push(<i key={i} className="bi bi-star-fill text-warning"></i>);
      else if (rating >= i - 0.5)
        stars.push(<i key={i} className="bi bi-star-half text-warning"></i>);
      else
        stars.push(
          <i key={i} className="bi bi-star text-warning opacity-25"></i>
        );
    }
    return stars;
  };

  return (
    <div>
      <div className="instructor-cover"></div>

      <div className="container instructor-hero col-md-7 col-lg-10 my-5 text-center">
        <p className="instructor-bg-babyblue instructor-paragraph px-4 py-1 rounded-1 mx-auto">
          Teaching Staff
        </p>
        <h2 className="instructor-title mb-4 mt-3 fw-bold fs-1">
          Top<span className="instructor-highlight-text"> Class</span>{" "}
          Instructor
        </h2>
        <div className="instructor-paragraph text-start">
          <p>
            Our team of educators is selected based on rigorous criteria that
            combine academic excellence with educational and psychological
            awareness. All teachers are:
          </p>
          <ul className="instructor-list mt-5 mb-5 fs-6">
            <li>• Experienced in online teaching</li>
            <li>• Trained in both educational and psychological approaches</li>
            <li>
              • Skilled in using teaching methods tailored to different learning
              styles
            </li>
            <li>
              • Committed to providing personalized follow-up for each student
            </li>
          </ul>
        </div>
      </div>

      <div className="container py-5 mt-5">
        <div className="d-flex justify-content-between align-items-center mt-1 mb-5">
          <input
            type="text"
            id="searchInput"
            className="form-control w-50"
            placeholder="Search by name or specialization..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <select
            id="sortSelect"
            className="form-select w-25"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="none">Default Order</option>
            <option value="high">Highest Rated</option>
            <option value="low">Lowest Rated</option>
          </select>
        </div>

        <div className="row g-4 mb-5">
          {loading ? (
            <Loader />
          ) : (
            currentItems.map((inst, index) => (
              <div key={index} className="col-md-3 fade-in">
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

                    <div className="instructor-rating">
                      {generateStars(inst.rating)}
                      <span>({inst.rating})</span>
                    </div>

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
    </div>
  );
}
