import "./MyCourses.css";
import Banner from "../components/layout/Banner";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function MyCourses() {
  const [courses, setCourses] = useState([]);
  function moveSlide(direction) {
    const track = document.getElementById("track");
    const cardWidth = 320;
    track.scrollLeft += direction * cardWidth;
  }

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("myCourses")) || [];
    setCourses(saved);
  }, []);
    const { t } = useTranslation();
  
  return (
    <>
      <Banner>{ t("my-courses-banner.heading")}</Banner><section className="my-courses-hero text-center">
        <div className="container">
          <h2 className="my-courses-title">{t("my-courses-banner.heading")}</h2>
          <p className="my-courses-subtitle">
            {t("my-courses-banner.paragraph")} 
          </p>
        </div>
      </section>
      <div className="container my-courses-slider mb-5">
        <button
          className="my-courses-arrow left mb-5"
          onClick={() => moveSlide(-1)}
        >
          &#10094;
        </button>
        <div className="my-courses-track" id="track">
          {courses.length > 0 ? (
            courses.map((course) => (
              <div key={course.id} className="my-courses-card shadow mb-5 mt-3">
                <div className="my-courses-inner">
                  <div className="my-courses-front">
                    <img src={course.thumbnail} alt={course.altText} />
                    <h3 className="fw-semibold">{course.title}</h3>
                    <p className="text-secondary px-3">
                      {course.duration} • {course.studentCount} students
                    </p>
                  </div>

                  <div className="my-courses-back">
                    <h3 className="px-4 pt-5">{course.title}</h3>
                    <p className="px-4 py-3">{course.description}</p>

                    <a href="#" className="btn my-courses-btn px-4 py-3 my-3">
                      Start Course
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h3 className="text-center mt-5">No courses added yet</h3>
          )}
        </div>
        <button
          className="my-courses-arrow right mb-5"
          onClick={() => moveSlide(1)}
        >
          &#10095;
        </button>
      </div>
    </>
  );
}
