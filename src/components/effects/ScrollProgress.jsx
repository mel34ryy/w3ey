import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progressWidth, setProgressWidth] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollY = window.scrollY;

      const scrollPercent = (scrollY / (documentHeight - windowHeight)) * 100;
      setProgressWidth(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      style={{
        height: "4px",
        width: "100%",
        backgroundColor: "#d1dced",
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        zIndex: "9999",
      }}
    >
      <div
        style={{
          height: "100%",
          backgroundColor: "#082a5e",
          width: `${progressWidth}%`,
        }}
      ></div>
    </div>
  );
}
