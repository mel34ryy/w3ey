import "./About.css";
import img1 from "../assets/images/about-us3.png";
import img2 from "../assets/images/about-us2.png";
import img3 from "../assets/images/about-us.png";
import vision from "../assets/images/vision.png";
import target from "../assets/images/target.png";
import diamond from "../assets/images/diamond.png";
import zoom from "../assets/images/zoom.png";
import hat from "../assets/images/graduation-hat-1.png";
import choice from "../assets/images/choice-1.png";
import duration from "../assets/images/duration.png";
import communication from "../assets/images/communication-center.png";
import img from "../assets/images/0003-650x355.png.png";
import parent from "../assets/images/parent-communication-650x455.jpg.png";
import Banner from "../components/layout/Banner";

export default function About() {
  return (
    <div className="about-page">
      <Banner>About Us</Banner>
      <div className="about-us container py-5 my-5">
        <div className="row d-flex justify-content-between g-5 align-items-center">
          <div className="col-lg-5 col-md-12 mb-4 mb-md-0">
            <h6 className="rounded-2 px-3">Who we are</h6>
            <h2 className="fw-bold mb-4">
              W3ey Online <span className="about-highlight-text">School</span>{" "}
              For <br />
              Learning And Instruction
            </h2>

            <p className="info-text">
              W3ey is an accredited online Egyptian school for students abroad,
              particularly in Gulf countries. It offers the Egyptian
              Experimental Curriculum (Languages) from Kindergarten to Middle 1
              through an interactive platform, combining academics with
              psychological and developmental support.
            </p>

            <p className="info-text2">
              At W3ey, we respect each student's unique learning and believe in
              transparent, real-time family engagement. Our educational model
              values parents’ time and children’s needs in a digital
              environment. With highly experienced teachers, engaging
              activities, and enrichment programs (like Programming, Critical
              Thinking, Emotional Wellness), we nurture bright minds and growing
              spirits with confidence.
            </p>
          </div>

          <div className="col-lg-7 col-md-12 text-center">
            <div className="row g-3">
              <div className="col-6 py-2 my-2 py-md-5 my-md-5">
                <img
                  src={img1}
                  className="img-fluid rounded shadow"
                  alt="Student 1"
                />
              </div>
              <div className="col-6 ">
                <img
                  src={img2}
                  className="img-fluid rounded shadow my-2 my-md-5"
                  alt="Student 2"
                />
                <img
                  src={img3}
                  className="img-fluid rounded shadow"
                  alt="Student 3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="vision container my-5">
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow border-0 p-4">
              <div className="card-body">
                <div className="mb-3">
                  <img src={vision} alt="Our Vision" />
                </div>
                <h3 className="card-title fw-bold">Our Vision</h3>
                <p className="card-text">
                  To be the first choice for online Egyptian education for
                  Egyptians worldwide — by delivering a modern, safe, and
                  comprehensive learning experience that balances academic
                  excellence, emotional support, and 21st-century flexibility.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow border-0 p-4">
              <div className="card-body">
                <div className="mb-3">
                  <img src={target} alt="Our Mission" />
                </div>
                <h3 className="card-title fw-bold">Our Mission</h3>
                <p className="card-text">
                  To offer high-quality, accredited Egyptian education through
                  the latest interactive learning tools — while focusing on
                  student character development, life skills, and continuous
                  collaboration with families, all within a supportive
                  psychological and educational environment.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow border-0 p-4">
              <div className="card-body">
                <div className="mb-3">
                  <img src={diamond} alt="Our Philosophy" />
                </div>
                <h3 className="card-title fw-bold">Our Philosophy</h3>
                <p className="card-text">
                  We believe education is not just about transferring knowledge
                  — it's a journey to build conscious minds and well-rounded
                  personalities capable of thinking, creating, and adapting. At
                  **W3ey**, we teach with an eye on the future and a heart
                  present with every student.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="about-academic text-center">
        <div className="container">
          <div className="title row mb-5">
            <div className="col-lg-8 mx-auto">
              <h2 className="display-6 fw-bold mb-3">
                Academic <span className="about-highlight-text">System</span>
              </h2>
              <p>
                We implement the Egyptian Experimental Curriculum (Languages)
                from
                <br />
                KG to Middle 1 through:
              </p>
            </div>
          </div>

          <div className="row d-flex justify-content-center align-items-stretch">
            <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
              <div className="system h-100 py-4 shadow border rounded-2">
                <div className="system-body d-flex flex-column justify-content-center align-items-center">
                  <img src={zoom} alt="Zoom sessions icon" />
                  <p className="system-text fw-semibold">Live Zoom sessions</p>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
              <div className="system h-100 py-4 shadow border rounded-2">
                <div className="system-body d-flex flex-column justify-content-center align-items-center">
                  <img src={hat} alt="Educator icon" />
                  <p className="system-text fw-semibold">
                    Highly skilled online educators
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
              <div className="system h-100 py-4 shadow border rounded-2">
                <div className="system-body d-flex flex-column justify-content-center align-items-center">
                  <img src={choice} alt="Teaching methods icon" />
                  <p className="system-text fw-semibold">
                    Teaching methods visual, auditory, and kinesthetic
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
              <div className="system h-100 py-4 shadow border rounded-2">
                <div className="system-body d-flex flex-column justify-content-center align-items-center">
                  <img src={duration} alt="Duration icon" />
                  <p className="system-text fw-semibold">
                    10-minute academic support after class
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
              <div className="system h-100 py-4 shadow border rounded-2">
                <div className="system-body d-flex flex-column justify-content-center align-items-center">
                  <img src={communication} alt="Extra help icon" />
                  <p className="system-text fw-semibold">Weekly extra help</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hero-section d-flex align-items-center justify-content-center">
        <div className="overlay">
          <div className="container text-center text-white p-5">
            <p className="h5 fw-semibold text-uppercase mb-2">
              ARE YOU READY FOR THIS OFFER
            </p>
            <h3 className="fw-semibold pt-4">
              Take advantage of exclusive **W3ey** offers throughout the year
              start <br />a high-quality learning journey at a more affordable
              cost.
            </h3>
          </div>
        </div>
      </section>
      <div className="about-instructor container my-5 py-5">
        <h6 className="fw-semibold mb-2 rounded-1 px-3">
          Our Qualified People Matter
        </h6>
        <h2 className="fw-bold mb-3">
          Top <span className="about-highlight-text-ins">Class</span> Instructor
        </h2>
        <p className="mb-5">
          At W3ey, we carefully select our teachers — not just for their
          qualifications, but
          <br />
          for their ability to teach with heart and build trust from the very
          first class.
        </p>

        <div className="row g-5">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card border-1 shadow instructor-card rounded">
              <img
                src={img3}
                className="card-img-top"
                alt="Ms. Rana - Arabic Instructor"
              />
              <div className="card-body">
                <h5 className="fw-bold text-center">Ms. Rana</h5>
                <p className="text-center">Arabic</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card border-1 shadow instructor-card rounded">
              <img
                src={img3}
                className="card-img-top"
                alt="Ms. Karima - Math Instructor"
              />
              <div className="card-body">
                <h5 className="fw-bold text-center">Ms. Karima</h5>
                <p className="text-center">Math</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card border-1 shadow instructor-card rounded">
              <img
                src={img3}
                className="card-img-top"
                alt="Ms. Nadine - Science Instructor"
              />
              <div className="card-body">
                <h5 className="fw-bold text-center">Ms. Nadine</h5>
                <p className="text-center">Science</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card border-1 shadow instructor-card rounded">
              <img
                src={img3}
                className="card-img-top"
                alt="Ms. Salma - English Instructor"
              />
              <div className="card-body">
                <h5 className="fw-bold text-center">Ms. Salma</h5>
                <p className="text-center">English</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="about-platform text-center my-5">
        <div className="container">
          <div className="title row mb-5">
            <div className="col-lg-8 mx-auto">
              <h2 className="fw-bold mb-3">W3ey Platform</h2>
              <p className="fw-semibold mb-3">
                The W3ey platform is designed to be comprehensive and easy to
                use, effectively <br />
                serving both students and parents. It includes:
              </p>
            </div>
          </div>

          <div className="row d-flex justify-content-center align-items-stretch mb-4">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="platform-card border shadow rounded-2">
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <img
                    className="rounded-2 img-fluid"
                    src={img}
                    alt="Platform feature: Recorded videos"
                  />
                  <p className="fw-semibold">
                    Recorded educational videos explaining how to use the
                    platform, submit assignments, and take tests.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="platform-card border shadow rounded-2">
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <img
                    className="rounded-2 img-fluid"
                    src={img}
                    alt="Platform feature: Separate accounts"
                  />
                  <p className="fw-semibold">
                    Separate accounts for both the student and the parent.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="platform-card border shadow rounded-2">
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <img
                    className="rounded-2 img-fluid"
                    src={img}
                    alt="Platform feature: Timed tests"
                  />
                  <p className="fw-semibold">
                    Time tests in which the answers are sent automatically to
                    the teacher.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row d-flex justify-content-center align-items-stretch">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="platform-card border shadow rounded-2">
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <img
                    className="rounded-2 img-fluid"
                    src={img}
                    alt="Platform feature: Parent meetings"
                  />
                  <p className="fw-semibold">
                    Monthly official meetings with parents to follow up on the
                    student's development.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="platform-card border shadow rounded-2">
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <img
                    className="rounded-2 img-fluid"
                    src={img}
                    alt="Platform feature: Weekly reports"
                  />
                  <p className="fw-semibold">
                    Weekly and monthly psychological and academic reports are
                    sent to parents.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="about-Communication container my-5 py-5">
        <div className="row g-5 align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <h2 className="fw-bold mb-4">Parent Communication</h2>

            <p>
              We understand that every parent has a different level of
              availability and engagement. That’s why we offer:
            </p>

            <ul className="fw-semibold">
              <li>
                Real-time updates on student progress through our platform.
              </li>
              <li>Flexible communication channels to suit your schedule.</li>
              <li>
                Regular feedback sessions with teachers to discuss your child’s
                development.
              </li>
            </ul>
          </div>

          <div className="col-md-6">
            <img
              src={parent}
              className="img-fluid shadow rounded"
              alt="Parent communicating with school staff"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
