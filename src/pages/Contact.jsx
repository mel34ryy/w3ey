import "./Contact.css";
import communication from "../assets/images/parent-communication-650x455.jpg.png";
import location from "../assets/images/location.png";
import phone from "../assets/images/phone.png";
import email from "../assets/images/email.png";

export default function Contact() {
  return (
    <>
      <section className="Contact-page-banner d-flex align-items-center text-white">
        <div className="container pb-4">
          <h1 className="display-5 fw-bold mb-2">Contact</h1>
          <p className="fw-semibold">
            W3ey Online School &gt; <span>Contact</span>
          </p>
        </div>
      </section>
      <section className="technical-support container py-5 my-5">
        <div className="row g-5 d-flex justify-content-between align-items-center">
          <div className="col-lg-6 mb-5">
            <h2 className="fw-bold mb-4">Technical Support</h2>
            <p className="mb-4">
              We provide 24/7 technical support to ensure a smooth and stable
              educational experience. This includes:
            </p>
            <ul>
              <li className="mb-2">
                A specialized tech support team to handle any issues students or
                parents may face
              </li>
              <li className="mb-2">
                A direct WhatsApp customer service channel — separate from
                teachers — for quick responses to technical inquiries
              </li>
            </ul>
          </div>

          <div className="col-lg-6 mb-4 mb-lg-0">
            <img
              src={communication}
              alt="Technical Support"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </section>
      <section className="contact container my-5 py-5">
        <div className="row g-5 d-flex justify-content-between align-items-center">
          <div className="col-lg-4">
            <h2 className="fw-bold mb-3">Keep In Touch With Us</h2>
            <hr className="rounded-2" />
            <p className="mb-4">
              We’re always happy to hear from you and answer any questions you
              may have. Whether you’re a parent, an educator interested in
              joining us, or a potential partner — we’re here to welcome you and
              support every step of the learning journey.
            </p>
            <div className="container">
              <div className="contact-item">
                <img src={location} />
                <ul>
                  <li>68 Street Holakt Street world</li>
                  <li>Alexandria</li>
                </ul>
              </div>

              <div className="contact-item py-">
                <img src={phone} />
                <ul>
                  <li>+123 555 69090</li>
                  <li>+123 555 69099</li>
                </ul>
              </div>

              <div className="contact-item">
                <img src={email} />
                <ul>
                  <li>info@eduaraonlineschool.com</li>
                  <li>web@eduaraonlineschool.com</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="contact-form rounded shadow pt-4 px-5 col-lg-7">
            <h3 className="fw-bold mb-3">Get in Touch</h3>
            <hr className="rounded-2" />

            <form className="row my-4">
              <div className="col-lg-6 my-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
              </div>

              <div className="col-lg-6 my-2">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email*"
                />
              </div>
              <div className="col-lg-6 my-2">
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Phone"
                />
              </div>

              <div className="col-lg-6 my-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject*"
                />
              </div>

              <div className="col-lg-12 my-2">
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Your Message*"
                ></textarea>
              </div>

              <button className="col-lg-3 my-4 py-2 mx-auto text-center rounded-2 border-0">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
