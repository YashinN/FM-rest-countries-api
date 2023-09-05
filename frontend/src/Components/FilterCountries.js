import styles from "./FilterCountries.module.css";
import Chevron from "../Icons/Chevron";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const filterVariant = {
  hidden: { x: "100vw" },
  visible: { x: 0, transition: { duration: 0.7, type: "spring", damping: 10 } },
};

const filterTags = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

const FilterCountries = ({ onFilter, darkMode }) => {
  const [openFilter, setOpenFilter] = useState(false);
  const filtersEl = useRef();

  const handleFilterState = () => {
    setOpenFilter((state) => !state);
  };

  useEffect(() => {
    function callback(e) {
      if (filtersEl.current && !filtersEl.current.contains(e.target)) {
        setOpenFilter(false);
      }
    }
    document.addEventListener("mousedown", callback);
    return () => document.removeEventListener("mousedown", callback);
  }, [openFilter]);

  return (
    <motion.div
      ref={filtersEl}
      className={styles.filter_wrapper}
      variants={filterVariant}
      animate="visible"
      initial="hidden"
    >
      <button
        id={darkMode ? "dark" : "light"}
        className={`${styles.filter_container}`}
        onClick={handleFilterState}
      >
        <p className="m-0">Filter by Region</p>
        <span>
          <Chevron darkMode={darkMode} />
        </span>
      </button>

      {openFilter && (
        <div
          id={darkMode ? "dark" : "light"}
          className={`${styles.filter_items_container}`}
        >
          <ul className={`p-0  ${styles.filter_items}`}>
            {filterTags.map((item) => (
              <li onClick={() => onFilter(item)}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
};

export default FilterCountries;
