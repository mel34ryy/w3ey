import Navbar from "../components/layout/Navbar";
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

export default function Home({ onToggle }) {
  return (
    <>
      <div className="home">
        <Navbar onToggle={onToggle} />
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
                100% Satisfaction Guarantee
              </p>
              <h1 className="mb-4 mt-3">
                Learn <span className="highlight-text">Skills</span> From Our
                Top Instructors
              </h1>
              <p className="lead mb-5">
                Our online school is tailored for Egyptian students abroad,
                combining academic excellence with modern educational vision,
                all within a safe and smart environment that feels like home…
                and supports every home.
              </p>
              <div className="buttons d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start align-items-center gap-4">
                <button className="px-5 py-2 border-0 rounded-2 text-uppercase">
                  explore courses
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
                    <p className="m-0">Have any Question?</p>
                    <button className="border-0 bg-transparent p-0 text-start">
                      +201000000000
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
                  <p className="m-0">Enrolled Students</p>
                  <span>+200</span>
                </div>
                {/* todo: handle this on lg screens */}
                <div className="second-box d-flex flex-column align-items-center rounded-4 p-3 p-md-4 shadow-sm">
                  <FontAwesomeIcon className="second" icon={faGraduationCap} />
                  <p className="m-0">Experience Since</p>
                  <span>2020</span>
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
                Get To Know About Us
              </p>
              <h2 className="mb-4 mt-3">
                W3ey Online <span className="highlight-text">School</span> For
                Learning And Instruction
              </h2>
              <div className="paragraph">
                <p>
                  Welcome to W3ey — the accredited online Egyptian school
                  dedicated to educating Egyptian expat children, especially in
                  the Gulf region.
                </p>
                <br />
                <p>
                  If you’re looking for modern, flexible, and secure Egyptian
                  education that nurtures your children both academically and
                  emotionally, W3ey is your perfect choice.
                </p>
                <br />
                <p>
                  We deliver accredited education following the Egyptian
                  Experimental Curriculum (Languages) from Kindergarten (KG) to
                  Middle 1, through a smart and comprehensive digital platform
                  that blends flexibility with precision.
                </p>
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
                    10+ Yrs
                    <br />
                    Teachers Experience
                  </p>
                </div>
                <div className="icon d-flex gap-2">
                  <img
                    className="img-fluid w-15 w-md-20"
                    src={icon02}
                    alt="icon"
                  />
                  <p className="m-0">
                    4<br />
                    Enrichment Programs
                  </p>
                </div>
                <div className="icon d-flex gap-2">
                  <img
                    className="img-fluid w-15 w-md-20"
                    src={icon03}
                    alt="icon"
                  />
                  <p className="m-0">
                    200
                    <br />
                    Over Students
                  </p>
                </div>
                <div className="icon d-flex gap-2">
                  <img
                    className="img-fluid w-15 w-md-20"
                    src={icon04}
                    alt="icon"
                  />
                  <p className="m-0">
                    MOE
                    <br />
                    Curriculum
                  </p>
                </div>
                <div className="icon d-flex gap-2">
                  <img
                    className="img-fluid w-15 w-md-20"
                    src={icon05}
                    alt="icon"
                  />
                  <p className="m-0">
                    24/7
                    <br />
                    Support
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
            Welcome our Property.
          </p>
          <h2 className="mb-4 mt-3">
            Our <span className="highlight-text">Featured</span> Clubs &
            <br /> Subjects
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
                        <FontAwesomeIcon icon={faClock} /> 0h 0m
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faUserGroup} /> 0 Students
                      </li>
                    </ul>
                  </div>
                  <h5 className="card-title">
                    <a className="text-decoration-none" href="#">
                      W3ey
                    </a>
                  </h5>
                  <div className="card-content">
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <span className="ms-1">(0)</span>
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
                        <FontAwesomeIcon icon={faClock} /> 0h 0m
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faUserGroup} /> 0 Students
                      </li>
                    </ul>
                  </div>
                  <h5 className="card-title">
                    <a className="text-decoration-none" href="#">
                      W3ey
                    </a>
                  </h5>
                  <div className="card-content">
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <span className="ms-1">(0)</span>
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
                        <FontAwesomeIcon icon={faClock} /> 0h 0m
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faUserGroup} /> 0 Students
                      </li>
                    </ul>
                  </div>
                  <h5 className="card-title">
                    <a className="text-decoration-none" href="#">
                      W3ey
                    </a>
                  </h5>
                  <div className="card-content">
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <span className="ms-1">(0)</span>
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
                        <FontAwesomeIcon icon={faClock} /> 0h 0m
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faUserGroup} /> 0 Students
                      </li>
                    </ul>
                  </div>
                  <h5 className="card-title">
                    <a className="text-decoration-none" href="#">
                      W3ey
                    </a>
                  </h5>
                  <div className="card-content">
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <span className="ms-1">(0)</span>
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
                        <FontAwesomeIcon icon={faClock} /> 0h 0m
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faUserGroup} /> 0 Students
                      </li>
                    </ul>
                  </div>
                  <h5 className="card-title">
                    <a className="text-decoration-none" href="#">
                      W3ey
                    </a>
                  </h5>
                  <div className="card-content">
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <span className="ms-1">(0)</span>
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
                        <FontAwesomeIcon icon={faClock} /> 0h 0m
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faUserGroup} /> 0 Students
                      </li>
                    </ul>
                  </div>
                  <h5 className="card-title">
                    <a className="text-decoration-none" href="#">
                      W3ey
                    </a>
                  </h5>
                  <div className="card-content">
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <span className="ms-1">(0)</span>
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
                        <FontAwesomeIcon icon={faClock} /> 0h 0m
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faUserGroup} /> 0 Students
                      </li>
                    </ul>
                  </div>
                  <h5 className="card-title">
                    <a className="text-decoration-none" href="#">
                      W3ey
                    </a>
                  </h5>
                  <div className="card-content">
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <span className="ms-1">(0)</span>
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
                        <FontAwesomeIcon icon={faClock} /> 0h 0m
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faUserGroup} /> 0 Students
                      </li>
                    </ul>
                  </div>
                  <h5 className="card-title">
                    <a className="text-decoration-none" href="#">
                      W3ey
                    </a>
                  </h5>
                  <div className="card-content">
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <span className="ms-1">(0)</span>
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
                        <FontAwesomeIcon icon={faClock} /> 0h 0m
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faUserGroup} /> 0 Students
                      </li>
                    </ul>
                  </div>
                  <h5 className="card-title">
                    <a className="text-decoration-none" href="#">
                      W3ey
                    </a>
                  </h5>
                  <div className="card-content">
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <span className="ms-1">(0)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="btn d-flex mx-auto mt-4 px-4 py-2">
            All Courses
          </button>
        </section>
        <section className="w3ey py-5">
          <img className="d-none d-lg-block" src={rotation} alt="circle" />
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <p className="bg-babyblue paragraph px-4 py-1 rounded-1">
                  Unique online courses
                </p>
                <h2 className="mb-4 mt-3">
                  At{" "}
                  <span className="highlight-text">
                    W<span className="three">3</span>ey
                  </span>
                </h2>
                <p className="lead">
                  we don’t just teach what’s in the books — we shape
                  well-rounded, thoughtful individuals through free interactive
                  clubs and exceptional enrichment subjects.
                  <br /> From Science and Design Clubs to debates and
                  educational films, we fuel curiosity and creativity in every
                  student.
                  <br /> With French, Programming, and Critical Thinking
                  programs, we open new horizons and help build a generation
                  that’s aware, cultured, and balanced.
                </p>
              </div>
              <div className="col-md-6 col-lg-8 cards">
                <div className="row justify-content-center h-100">
                  <div className="col-6 col-md-4 mb-3">
                    <div className="card h-100 d-flex justify-content-center align-items-center mx-auto">
                      <FontAwesomeIcon icon={faAtom} className="icon" />
                      <span>Science Club</span>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 mb-3">
                    <div className="card h-100 d-flex justify-content-center align-items-center mx-auto">
                      <FontAwesomeIcon icon={faComments} className="icon" />
                      <span>Debate Club</span>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 mb-3">
                    <div className="card h-100 d-flex justify-content-center align-items-center mx-auto">
                      <FontAwesomeIcon icon={faFilm} className="icon" />
                      <span>Movie Club</span>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 mb-3">
                    <div className="card h-100 d-flex justify-content-center align-items-center mx-auto">
                      <FontAwesomeIcon icon={faPenRuler} className="icon" />
                      <span>Drawing Club</span>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 mb-3">
                    <div className="card h-100 d-flex justify-content-center align-items-center mx-auto">
                      <FontAwesomeIcon icon={faCakeCandles} className="icon" />
                      <span>Fun Days</span>
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
                    I used to be afraid of speaking in class, but at W3ey, my
                    teachers encouraged me to ask questions. Now I feel
                    confident and happy, and I love joining the activities.
                  </p>
                  <h4 className="mt-3 mb-0">Ali</h4>
                  <span className="text-muted small">Egypt - Age 10</span>
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
                    At W3ey, learning feels exciting — not stressful! I love how
                    we can express ideas and learn creatively every day.
                  </p>
                  <h4 className="mt-3 mb-0">Sara</h4>
                  <span className="text-muted small">UAE - Age 11</span>
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
                    W3ey changed how I see school — now I look forward to every
                    class because it’s fun and inspiring.
                  </p>
                  <h4 className="mt-3 mb-0">Omar</h4>
                  <span className="text-muted small">KSA - Age 9</span>
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
      </div>
    </>
  );
}
