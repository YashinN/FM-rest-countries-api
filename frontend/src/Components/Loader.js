import styles from "./Loader.module.css";
import { motion } from "framer-motion";

const loaderVariant = {
  animation: {
    y: [0, -20],
    transition: {
      y: {
        repeat: Infinity,
        duration: 0.25,
        repeatType: "reverse",
        ease: "easeOut",
      },
    },
  },

  animationTwo: {
    y: [0, -40],
    transition: {
      y: {
        repeat: Infinity,
        duration: 0.25,
        repeatType: "reverse",
        ease: "easeOut",
      },
    },
  },
};

const animationType = [
  "animation",
  "animationTwo",
  "animation",
  "animationTwo",
];

const Loader = () => {
  return (
    <div className={styles.loading_wrapper}>
      {animationType.map((animation, i) => (
        <motion.div
          key={i + animation}
          variants={loaderVariant}
          animate={animation}
          className={styles.loader_dot}
        ></motion.div>
      ))}
    </div>
  );
};

export default Loader;
