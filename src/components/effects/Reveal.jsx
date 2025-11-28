// src/components/effects/Reveal.jsx
import { motion } from "framer-motion";

export default function Reveal({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1], // 🔥 سلاسة سينمائية
      }}
      viewport={{ once: true, amount: 0.2 }}
      style={{ willChange: "opacity, transform, filter" }} // تحسين للأداء
    >
      {children}
    </motion.div>
  );
}
