import styles from "./SearchBar.module.css";
import SearchIcon from "../Icons/SearchIcon";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const searchVariant = {
  hidden: { x: "-100vw" },
  visible: { x: 0, transition: { duration: 0.7, type: "spring", damping: 10 } },
  hover: {
    scale: 1.1,
  },
};

const SearchBar = ({ onSearch, searchQuery, darkMode }) => {
  const ref = useRef(null);

  return (
    <motion.div
      className={styles.search_container}
      variants={searchVariant}
      animate="visible"
      initial="hidden"
      whileHover="hover"
    >
      <motion.input
        ref={ref}
        id={darkMode ? "dark" : "light"}
        className={`${darkMode ? "search_input_dark" : "search_input_light"} ${
          styles.search_bar
        }`}
        type="text"
        placeholder="Search for a country..."
        value={searchQuery}
        onChange={(e) => onSearch(e.target.value)}
      />

      <motion.span className={styles.icon_container}>
        <SearchIcon darkMode={darkMode} />
      </motion.span>
    </motion.div>
  );
};

export default SearchBar;
