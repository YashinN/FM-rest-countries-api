import styles from "./SearchBar.module.css";
import SearchIcon from "../Icons/SearchIcon";
import { motion } from "framer-motion";

const searchVariant = {
  hidden: { x: "-100vw" },
  visible: { x: 0, transition: { duration: 0.7, type: "spring", damping: 10 } },
};

const SearchBar = ({ onSearch, searchQuery, darkMode }) => {
  return (
    <motion.div
      className={styles.search_container}
      variants={searchVariant}
      animate="visible"
      initial="hidden"
    >
      <input
        id={darkMode ? "dark" : "light"}
        className={`${darkMode ? "search_input_dark" : "search_input_light"} ${
          styles.search_bar
        }`}
        type="text"
        placeholder="Search for a country..."
        value={searchQuery}
        onChange={(e) => onSearch(e.target.value)}
      />

      <span className={styles.icon_container}>
        <SearchIcon darkMode={darkMode} />
      </span>
    </motion.div>
  );
};

export default SearchBar;
