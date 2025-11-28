import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export default function SlideIn({
  children,
  direction = "left",
  threshold = 0.2,
  delay = 0,
  duration = 1,
  className = "",
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold,
  });

  const [isRTL, setIsRTL] = useState(false);

  useEffect(() => {
    const dir = document.documentElement.getAttribute("dir");
    setIsRTL(dir === "rtl");
  }, []);

  const flip = (dir) => {
    if (!isRTL) return dir;
    if (dir === "left") return "right";
    if (dir === "right") return "left";
    return dir;
  };

  const finalDirection = flip(direction);

  // 🔥 مسافة أكبر + سلاسة
  const offsets = {
    left: { x: -120, y: 0 },
    right: { x: 120, y: 0 },
    up: { x: 0, y: 120 },
    down: { x: 0, y: -120 },
  };

  const starting = offsets[finalDirection] || { x: 0, y: 120 };

  const variants = {
    hidden: {
      opacity: 0,
      ...starting,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // 🔥 السلاسة السينمائية
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={`smooth-slide ${className}`}
    >
      {children}
    </motion.div>
  );
}
