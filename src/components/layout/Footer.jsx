import logo from "../../../public/images/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
  faTwitter,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-3">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <p>Knowledge Without Borders. Education Without Limits.</p>
            <ul>
              <li>407 Gamal Abd El-Nasser, Aleaxndria</li>
              <li>+201011111111</li>
              <li className="d-flex gap-3">
                <FontAwesomeIcon icon={faFacebookF} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faWhatsapp} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faTiktok} />
              </li>
            </ul>
          </div>
          <div className="col-sm-6 col-md-3">
            <h4 className="mb-3">Quick Links</h4>
            <ul>
              <li>
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
              <li>About Us</li>
              <li>Courses</li>
              <li>
                <Link to="instructors" className="link">
                  Instructors
                </Link>
              </li>
              <li>Blogs</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="col-sm-6 col-md-3">
            <h4 className="mb-3">Policy</h4>
            <ul>
              <li>Asked Question</li>
            </ul>
          </div>
          <div className="col-sm-6 col-md-3">
            <h4 className="mb-3">Working Hours</h4>
            <div className="open d-flex justify-content-between">
              <span>Sat - Thu</span>
              <span>7:00 AM - 3:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
