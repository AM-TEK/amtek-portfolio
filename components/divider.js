"use client"
import "@/app/globals.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
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

export default function Divider() {
  const { ref, inView } = useInView({
    triggerOnce: false, // Set this to true if you want the animation to trigger only once
    threshold: 0, // Change this value based on when you want the animation to trigger
  });
  return (
    <motion.div ref={ref} className="flex items-center justify-center">
      <motion.svg
        className="w-full h-auto max-w-screen-lg"
        width="600"
        height="200"
        viewBox="0 0 600 200"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.line
          x1="100"
          y1="30"
          x2="240"
          y2="170"
          stroke="#3ce37e"
          variants={draw}
          // custom={2.5}
        />
        <motion.line
          x1="220"
          y1="30"
          x2="360"
          y2="170"
          stroke="#d2d5da"
          variants={draw}
          // custom={3.5}
        />
        <motion.line
          x1="340"
          y1="30"
          x2="480"
          y2="170"
          stroke="#1a6bf9"
          variants={draw}
          // custom={4.5}
        />
      </motion.svg>
    </motion.div>
  );
}
