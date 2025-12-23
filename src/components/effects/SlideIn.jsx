// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

  const offsets = {
    left: { x: -120, y: 0 },
    right: { x: 120, y: 0 },
    up: { x: 0, y: 120 },
    down: { x: 0, y: -120 },
  };

  const starting = offsets[direction] || { x: 0, y: 120 };

  const variants = {
    hidden: {
      opacity: 0,
      ...starting,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
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
      style={{ willChange: "opacity, transform, filter" }}
    >
      {children}
    </motion.div>
  );
}
