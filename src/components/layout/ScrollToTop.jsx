import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(document.documentElement.scrollTop > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const baseStyle = {
    width: "50px",
    height: "50px",
    position: "fixed",
    bottom: "80px",
    right: "-50px",
    backgroundColor: "var(--color-primary)",
    color: "white",
    fontSize: "12px",
    fontWeight: "bold",
    fontFamily: "Arial, Helvetica, sans-serif",
    padding: "16px",
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    transition: "right 0.3s",
    zIndex: 9999,
  };

  const showStyle = show ? { right: "20px" } : {};

  return (
    <button
      style={{ ...baseStyle, ...showStyle }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <FontAwesomeIcon icon={faAngleUp} />
    </button>
  );
}
