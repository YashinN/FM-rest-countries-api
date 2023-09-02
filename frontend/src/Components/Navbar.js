import styles from "./Navbar.module.css";
import MoonIcon from "../Icons/MoonIcon";

const Navbar = ({ darkMode, handleDarkMode }) => {
  return (
    <nav id={darkMode ? "dark" : "light"} className={`${styles.navbar}`}>
      <div className={styles.nav_container}>
        <h1 className={`${styles.nav_title}  mb-0`}>Where in the world?</h1>
        <button
          id={darkMode ? "dark" : "light"}
          className={`${styles.theme_btn}`}
          onClick={handleDarkMode}
        >
          <span className={styles.moon_icon}>
            <MoonIcon darkMode={darkMode} />
          </span>
          Dark Mode
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
