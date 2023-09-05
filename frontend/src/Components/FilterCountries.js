import styles from "./FilterCountries.module.css";
import Chevron from "../Icons/Chevron";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const filterVariant = {
  hidden: { x: "100vw" },
  visible: { x: 0, transition: { duration: 0.7, type: "spring", damping: 10 } },
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
    transition: { duration: 0.5, delay: 0.4, type: "spring" },
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
            className={`p-0  ${styles.filter_items}`}
            initial={{ height: 0 }}
            animate={{
              height: openFilter ? 144 : 0,
              transition: {
                duration: 0.2,
                type: "Spring",
                staggerChildren: 0.1,
                when: "beforeChildren",
              },
            }}
          >
            {filterTags.map((item) => (
              <motion.li
                onClick={() => onFilter(item)}
                variants={childVariants}
                initial="hidden"
                animate="visible"
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
