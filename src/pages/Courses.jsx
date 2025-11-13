import germanImg from "../assets/images/german-language.png";
import englishImg from "../assets/images/edura-english-power.png";
import frenchImg from "../assets/images/French-Language.png";
import mamaEduraImg from "../assets/images/mama-edura.jpg";
import lifeCoachingImg from "../assets/images/life-coaching.png";
import monazraClubImg from "../assets/images/monazra.jpg";
import scienceClubImg from "../assets/images/science.jpg";
import "./Courses.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Courses() {
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
          <div className="col">
            <div className="course-card shadow-sm card h-100">
              <Link to="course" className="a">
                <img src={germanImg} className="card-img-top" alt="german" />
                <button className="small btn btn-success-subtle">
                  german language
                </button>
              </Link>
              <div className="card-body text-start">
                <p className="card-text">
                  <FontAwesomeIcon icon={faClock} />
                  <span className="text-secondary me-3"> 0 h 0 m</span>
                  <FontAwesomeIcon icon={faUserGroup} />
                  <span className="text-secondary"> 0 students </span>
                </p>
                <a
                  className="card-title fw-bold text-secondary text-decoration-none course-link-anim"
                  href="#"
                >
                  german language
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="course-card  shadow-sm card h-100">
              <a href="#">
                <img
                  src={englishImg}
                  className="card-img-top"
                  alt="english-power"
                />
                <button href="#" className="small btn btn-success-subtle">
                  edura english power
                </button>
              </a>
              <div className="card-body text-start">
                <p className="card-text">
                  <FontAwesomeIcon icon={faClock} />
                  <span className="text-secondary me-3"> 0 h 0 m</span>
                  <FontAwesomeIcon icon={faUserGroup} />
                  <span className="text-secondary"> 0 students </span>
                </p>
                <a
                  className="card-title fw-bold text-secondary text-decoration-none course-link-anim"
                  href="#"
                >
                  english language
                </a>
              </div>
            </div>
          </div>

          <div className="col">

            <div className="course-card  shadow-sm card h-100">
               <Link to="course" className="a">
              <a href="#">
                <img src={mamaEduraImg} className="card-img-top" alt="..." />
                <button href="#" className="small btn btn-success-subtle">
                  thre
                </button>
              </a></Link>
              <div className="card-body text-start">
                <p className="card-text">
                  <FontAwesomeIcon icon={faClock} />
                  <span className="text-secondary me-3"> 0 h 0 m</span>
                  <FontAwesomeIcon icon={faUserGroup} />
                  <span className="text-secondary"> 0 students </span>
                </p>
                <Link to="course"
                  className="card-title fw-bold text-secondary text-decoration-none course-link-anim"
                  
                >
                  mama edura
                </Link>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="course-card shadow-sm card h-100">
              <a href="#">
                <img src={lifeCoachingImg} className="card-img-top" alt="..." />
                <button href="#" className="small btn btn-success-subtle">
                  thinking
                </button>
              </a>
              <div className="card-body text-start">
                <p className="card-text">
                  <FontAwesomeIcon icon={faClock} />
                  <span className="text-secondary me-3"> 0 h 0 m</span>
                  <FontAwesomeIcon icon={faUserGroup} />
                  <span className="text-secondary"> 0 students </span>
                </p>
                <a
                  className="card-title fw-bold text-secondary text-decoration-none course-link-anim"
                  href="#"
                >
                  life coaching
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="course-card shadow-sm card h-100">
              <a href="#">
                <img src={frenchImg} className="card-img-top" alt="..." />
                <button href="#" className="small btn btn-success-subtle">
                  french language
                </button>
              </a>
              <div className="card-body text-start">
                <p className="card-text">
                  <FontAwesomeIcon icon={faClock} />
                  <span className="text-secondary me-3"> 0 h 0 m</span>
                  <FontAwesomeIcon icon={faUserGroup} />
                  <span className="text-secondary"> 0 students </span>
                </p>
                <a
                  className="card-title fw-bold text-secondary text-decoration-none course-link-anim"
                  href="#"
                >
                  French-Language
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="course-card shadow-sm  card h-100">
              <a href="#">
                <img src={monazraClubImg} className="card-img-top" alt="..." />
                <button href="#" className="small btn btn-success-subtle">
                  english
                </button>
              </a>
              <div className="card-body text-start">
                <p className="card-text">
                  <FontAwesomeIcon icon={faClock} />
                  <span className="text-secondary me-3"> 0 h 0 m</span>
                  <FontAwesomeIcon icon={faUserGroup} />
                  <span className="text-secondary"> 0 students </span>
                </p>
                <a
                  className="card-title fw-bold text-secondary text-decoration-none course-link-anim"
                  href="#"
                >
                  Debate club
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="course-card shadow-sm card h-100">
              <a href="#">
                <img src={scienceClubImg} className="card-img-top" alt="..." />
                <button href="#" className="small btn btn-success-subtle">
                  english
                </button>
              </a>
              <div className="card-body text-start">
                <p className="card-text">
                  <FontAwesomeIcon icon={faClock} />
                  <span className="text-secondary me-3"> 0 h 0 m</span>
                  <FontAwesomeIcon icon={faUserGroup} />
                  <span className="text-secondary"> 0 students </span>
                </p>
                <a
                  className="card-title fw-bold text-secondary text-decoration-none course-link-anim"
                  href="#"
                >
                  science club
                </a>
              </div>
            </div>
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
