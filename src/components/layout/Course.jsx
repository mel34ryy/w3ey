import edura from "../../assets/images/edura.png";
import mamaEdura from "../../assets/images/mama-edura.jpg";
import eduraEnglishImg from "../../assets/images/edura-english-power.png";
import coaching from "../../assets/images/life-coaching.png";
import frenchImg from "../../assets/images/French-Language.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faUserGroup,
  faNoteSticky,
  faUser,
  faBullhorn,
} from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";

export default function Course() {
  const navigate = useNavigate();
  return (
    <>
      <main className="main">
        <section className="course-banrpage text-capitalize">
          <button className="small btn btn-success-subtle text-bg-success mt-5 mx-3 px-4">
            thre
          </button>
          <h1 className="text-white mx-3 p-2">mama edura</h1>
          <img
            src={edura}
            className="rounded-circle m-3"
            width="50"
            height="50"
          />
          <span className="text-secondary">aya elhebashy</span>
          <FontAwesomeIcon icon={faNoteSticky} className="text-white" />
          <span className="text-white"> 0 </span>
          <FontAwesomeIcon icon={faUser} className="text-white" />
          <span className="text-white"> 0</span>
          <div className="card card-banr bg-body-secondary">
            <div className="card-body">
              <h2 className="card-title">free</h2>
              <p>Free access this course</p>
              <hr />
              <ul className="custom-square">
                <li>
                  <p>To all over the world</p>
                </li>
                <li>
                  <p>0 total registered</p>
                </li>
                <li>
                  <p>users</p>
                </li>
                <li>
                  <p>To all over the world</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <div className="container">
        <img
          src={mamaEdura}
          alt="edura"
          width="50%"
          height="auto"
          className="object-fit-cover m-4"
        />
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
                Course information
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
                Ratings & Reviews
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
                Advertisements
              </button>
            </li>
          </ul>

          <div className="tab-pane fade show active" id="info" role="tabpanel">
            <p className="m-4">
              We focus on developing, building, and supporting the
              psychological, educational, behavioral, social, and cognitive
              aspects of students. We address all the problems that a student
              may face through individual psychological sessions, conducted
              confidentially with the student or their guardian. Behavioral
              disorders related to personality (such as anger, stubbornness,
              aggression, lack of self-confidence, or introversion).
              Psychological disorders (such as anxiety, fear,
              obsessive-compulsive thoughts, depression, or frustration). Social
              problems (such as communication difficulties and issues in
              relationships with others). Learning problems (such as academic
              learning difficulties or developmental learning disorders like
              attention deficit and hyperactivity).
            </p>
          </div>

          <div className="tab-pane fade" id="ratings" role="tabpanel">
            <div className="text-center">
              <h1 className="display-1 text-secondary mw-100">
                <FontAwesomeIcon icon={faCircleXmark} />
              </h1>

              <h4 className="text-secondary">No reviews yet</h4>
            </div>
          </div>

          <div className="tab-pane fade" id="advertise" role="tabpanel">
            <div className="text-center">
              <h1 className="display-1 text-secondary mw-100">
                <FontAwesomeIcon icon={faBullhorn} />
              </h1>
              <h4 className="text-secondary">No advertisements yet</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="my-5 mx-4">
          <span className="text-bg-primary px-2 py-1 rounded text-white">
            Top Course
          </span>
          <div className="row justify-content-between align-items-center">
            <h1 className="col-5 text-primary-emphasis">
              More courses by Aya.habashy
            </h1>
            <button
              className="btn col-2 text-bg-primary text-white"
              onClick={() => navigate("/courses")}
            >
              view all courses <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="container m-5 mx-auto">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center align-content-center text-capitalize">
          <div className="col">
            <div className="course-card card h-100">
              <a href="#">
                <img
                  src={eduraEnglishImg}
                  className="card-img-top"
                  alt="english"
                />
                <button className="small btn btn-success-subtle">
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
            <div className="course-card card h-100">
              <a href="#">
                <img src={coaching} className="card-img-top" alt="..." />
                <button className="small btn btn-success-subtle">
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
            <div className="course-card card h-100">
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
        </div>
      </div>
    </>
  );
}
