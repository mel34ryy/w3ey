import "./MyCourses.css";
import img from "../assets/images/mine.jpg";

export default function MyCourses() {
  function moveSlide(direction) {
    const track = document.getElementById("track");
    const cardWidth = 320;
    track.scrollLeft += direction * cardWidth;
  }

  return (
    <>
      <section className="my-courses-banner d-flex align-items-center text-white">
        <div className="container pb-4">
          <h1 className="display-5 fw-bold mb-2">My Courses</h1>
          <p className="fw-semibold">
            W3ey Online School &gt; <span>My Courses</span>
          </p>
        </div>
      </section>
      <section className="my-courses-hero text-center">
        <div className="container">
          <h2 className="my-courses-title">Keep Going</h2>
          <p className="my-courses-subtitle">
            Start learning your purchased courses anytime.
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
          <div className="my-courses-card shadow mb-5 mt-3">
            <div className="my-courses-inner">
              <div className="my-courses-front">
                <img src={img} alt="course" />
                <h3 className="fw-semibold">Web Development</h3>
              </div>
              <div className="my-courses-back">
                <h3 className="px-4 pt-5">Web</h3>
                <p className="px-4 py-3">
                  Master HTML, CSS, JS and build real projects.
                </p>
                <a
                  href="#"
                  className="btn my-courses-btn px-4 py-3 text-uppercase fw-bold my-3"
                >
                  Start Course
                </a>
              </div>
            </div>
          </div>
          <div className="my-courses-card shadow mb-5 mt-3">
            <div className="my-courses-inner">
              <div className="my-courses-front">
                <img src={img} alt="course" />
                <h3 className="fw-semibold">Python Basics</h3>
              </div>
              <div className="my-courses-back">
                <h3 className="px-4 pt-5">Python Basics</h3>
                <p className="px-4 py-3">Learn Python with easy examples.</p>
                <a
                  href="#"
                  className="btn my-courses-btn px-4 py-3 text-uppercase fw-bold my-3"
                >
                  Start Course
                </a>
              </div>
            </div>
          </div>
          <div className="my-courses-card shadow  mb-5 mt-3">
            <div className="my-courses-inner">
              <div className="my-courses-front">
                <img src={img} alt="course" />
                <h3 className="fw-semibold">Graphic Design</h3>
              </div>
              <div className="my-courses-back">
                <h3 className="px-4 pt-5">Graphic Design</h3>
                <p className="px-4 py-3">Learn Photoshop & Illustrator.</p>
                <a
                  href="#"
                  className="btn my-courses-btn px-4 py-3 text-uppercase fw-bold my-3"
                >
                  Start Course
                </a>
              </div>
            </div>
          </div>
          <div className="my-courses-card shadow  mb-5 mt-3">
            <div className="my-courses-inner">
              <div className="my-courses-front">
                <img src={img} alt="course" />
                <h3 className="fw-semibold">UI / UX</h3>
              </div>
              <div className="my-courses-back">
                <h3 className="px-4 pt-5">UI / UX</h3>
                <p className="px-4 py-3"> Learn Figma & full workflow.</p>
                <a
                  href="#"
                  className="btn my-courses-btn px-4 py-3 text-uppercase fw-bold my-3"
                >
                  Start Course
                </a>
              </div>
            </div>
          </div>
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
