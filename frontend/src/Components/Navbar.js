import styles from "./Navbar.module.css";
import MoonIcon from "../Icons/MoonIcon";
import { motion } from "framer-motion";

const headerVariants = {
  hidden: { x: "-100vw" },
  visible: { x: 0, transition: { duration: 0.2, type: "spring", damping: 16 } },
};

const buttonVariants = {
  hidden: { x: "100vw" },
  visible: { x: 0, transition: { duration: 0.2, type: "spring", damping: 16 } },
};

const Navbar = ({ darkMode, handleDarkMode }) => {
  return (
    <nav id={darkMode ? "dark" : "light"} className={`${styles.navbar}`}>
      <div className={styles.nav_container}>
        <motion.h1
          className={`${styles.nav_title}  mb-0`}
          variants={headerVariants}
          animate="visible"
          initial="hidden"
        >
          Where in the world?
        </motion.h1>
        <motion.button
          id={darkMode ? "dark" : "light"}
          className={`${styles.theme_btn}`}
          onClick={handleDarkMode}
          variants={buttonVariants}
          animate="visible"
          initial="hidden"
        >
          <span className={styles.moon_icon}>
            <MoonIcon darkMode={darkMode} />
          </span>
          Dark Mode
        </motion.button>
      </div>
    </nav>
  );
};

export default Navbar;
