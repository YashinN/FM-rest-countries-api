import styles from "./FilterCountries.module.css";
import Chevron from "../Icons/Chevron";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const filterVariant = {
  hidden: { x: "100vw" },
  visible: { x: 0, transition: { duration: 0.2, type: "spring", damping: 16 } },
};

const childVariants = {
  hidden: {
    opacity: 0,
    scale: 0.3,
    x: 100,
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
  },
};

const ulVariants = {
  hidden: { height: 0 },
  visible: {
    height: 144,
    transition: {
      when: "beforeChildren",
      type: "spring",
      duration: 0.2,
      staggerChildren: 0.05,
    },
  },
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
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1 }}
        id={darkMode ? "dark" : "light"}
        className={`${styles.filter_container}`}
        onClick={handleFilterState}
      >
        <p className="m-0">Filter by Region</p>
        <motion.span animate={{ rotate: openFilter ? 0 : -180 }}>
          <Chevron darkMode={darkMode} />
        </motion.span>
      </motion.button>

      {openFilter && (
        <div
          id={darkMode ? "dark" : "light"}
          className={`${styles.filter_items_container}`}
        >
          <motion.ul
            variants={ulVariants}
            initial="hidden"
            animate="visible"
            className={`p-0  ${styles.filter_items}`}
            custom={onFilter}
          >
            {filterTags.map((item) => (
              <motion.li
                key={item}
                onClick={() => onFilter(item)}
                variants={childVariants}
              >
                {item}{" "}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      )}
    </motion.div>
  );
};

export default FilterCountries;
