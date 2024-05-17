"use client"
import "@/app/globals.css";
import { motion } from "framer-motion";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 2 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};
export default function DividerReverse() {
  return (
    <motion.div className="flex items-center justify-center">
      <motion.svg
        className="w-full h-auto max-w-screen-lg"
        width="600"
        height="200"
        viewBox="0 0 600 200"
        initial="hidden"
        animate="visible"
      >
        <motion.line
          x1="240"
          y1="30"
          x2="100"
          y2="170"
          stroke="#00cc88"
          variants={draw}
          custom={2.5}
        />
        <motion.line
          x1="360"
          y1="30"
          x2="220"
          y2="170"
          stroke="#ff0055"
          variants={draw}
          custom={3.5}
        />
        <motion.line
          x1="480"
          y1="30"
          x2="340"
          y2="170"
          stroke="#0099ff"
          variants={draw}
          custom={4.5}
        />
      </motion.svg>
    </motion.div>
  );
}
