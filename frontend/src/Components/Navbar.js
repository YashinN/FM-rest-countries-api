import styles from "./Navbar.module.css";
import MoonIcon from "../Icons/MoonIcon";

const Navbar = () => {
  return (
    <nav className={`${styles.navbar}`}>
      <div className={styles.nav_container}>
        <h1 className={`${styles.nav_title}  mb-0`}>Where in the world?</h1>
        <button className={`${styles.theme_btn}`}>
          {" "}
          <MoonIcon /> Dark Mode
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
