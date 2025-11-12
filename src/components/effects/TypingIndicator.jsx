import { motion } from "framer-motion";

const TypingIndicator = () => {
  return (
    <div className="d-flex gap-1 align-items-center">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="rounded-circle bg-secondary"
          style={{
            width: "8px",
            height: "8px",
          }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );
};

export default TypingIndicator;
