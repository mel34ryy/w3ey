import { useState, useEffect } from "react";
import "./Instructors.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import instructor1 from "../assets/images/instructor01.jpg";
import instructor2 from "../assets/images/instructor02.jpeg";
import instructor3 from "../assets/images/instructor03.jpg";
import instructor4 from "../assets/images/instructor04.jpg";

export default function InstructorsPage() {
  const instructorsData = [
    {
      name: "John Smith",
      specialization: "Frontend Developer",
      rating: 4.9,
      image: instructor1,
      socials: { facebook: "#", twitter: "#", linkedin: "#" },
    },
    {
      name: "Emily Brown",
      specialization: "UI/UX Designer",
      rating: 4.7,
      image: instructor2,
      socials: { facebook: "#", twitter: "#", linkedin: "#" },
    },
    {
      name: "Michael Johnson",
      specialization: "Backend Engineer",
      rating: 5.0,
      image: instructor3,
      socials: { facebook: "#", twitter: "#", linkedin: "#" },
    },
    {
      name: "Sarah Williams",
      specialization: "Full Stack Developer",
      rating: 4.7,
      image: instructor4,
      socials: { facebook: "#", twitter: "#", linkedin: "#" },
    },
    {
      name: "David Clark",
      specialization: "React Instructor",
      rating: 4.5,
      image: instructor1,
      socials: { facebook: "#", twitter: "#", linkedin: "#" },
    },
    {
      name: "Jessica Taylor",
      specialization: "Mobile Developer",
      rating: 4.0,
      image: instructor2,
      socials: { facebook: "#", twitter: "#", linkedin: "#" },
    },
    {
      name: "Daniel Evans",
      specialization: "Python Instructor",
      rating: 4.8,
      image: instructor3,
      socials: { facebook: "#", twitter: "#", linkedin: "#" },
    },
    {
      name: "Sophia Miller",
      specialization: "Data Scientist",
      rating: 4.8,
      image: instructor4,
      socials: { facebook: "#", twitter: "#", linkedin: "#" },
    },
  ];

  const [instructors, setInstructors] = useState(instructorsData);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("none");

  useEffect(() => {
    handleFilterAndSort();
  }, [query, sort]);

  const generateStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<i key={i} className="bi bi-star-fill text-warning"></i>);
      } else if (rating >= i - 0.5) {
        stars.push(<i key={i} className="bi bi-star-half text-warning"></i>);
      } else {
        stars.push(
          <i key={i} className="bi bi-star text-warning opacity-25"></i>
        );
      }
    }

    return stars;
  };

  const handleFilterAndSort = () => {
    let filtered = instructorsData.filter(
      (inst) =>
        inst.name.toLowerCase().includes(query.toLowerCase()) ||
        inst.specialization.toLowerCase().includes(query.toLowerCase())
    );

    if (sort === "high") {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (sort === "low") {
      filtered.sort((a, b) => a.rating - b.rating);
    }

    setInstructors(filtered);
  };

  return (
    <div>
      <div className="cover"></div>

      <div className="container hero col-md-7 col-lg-10 my-5 text-center">
        <p className="bg-babyblue paragraph px-4 py-1 rounded-1 mx-auto text-center">
          Teaching Staff
        </p>
        <h2 className="title mb-4 mt-3 fw-bold fs-1">
          Top<span className="highlight-text"> Class</span> Instructor
        </h2>
        <div className="paragraph text-start">
          <p>
            Our team of educators is selected based on rigorous criteria that
            combine academic excellence with educational and psychological
            awareness. All teachers are:
          </p>
          <ul className="list mt-5 mb-5 fs-6">
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
            <option value="none">Sort by rating</option>
            <option value="high">Highest Rated</option>
            <option value="low">Lowest Rated</option>
          </select>
        </div>

        <div id="instructorsContainer" className="row g-4 mb-5">
          {instructors.map((inst, index) => (
            <div key={index} className="col-md-3 fade-in">
              <div className="card h-100">
                <img
                  src={inst.image}
                  className="card-img-top"
                  alt={inst.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{inst.name}</h5>
                  <p className="card-text">
                    <i class="bi bi-briefcase-fill"></i> {inst.specialization}
                  </p>
                  <div className="rating">
                    {generateStars(inst.rating)}{" "}
                    <span>({inst.rating.toFixed(1)})</span>
                  </div>
                  <div className="social-links mt-2">
                    <a
                      href={inst.socials.facebook}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i class="bi bi-facebook"></i>
                    </a>
                    <a
                      href={inst.socials.twitter}
                      target="_blank"
                      rel="noreferrer"
                      className="mx-2"
                    >
                      <i class="bi bi-twitter-x"></i>
                    </a>
                    <a
                      href={inst.socials.linkedin}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i class="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
