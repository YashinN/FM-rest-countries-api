import styles from "./FilterCountries.module.css";
import Chevron from "../Icons/Chevron";
import { useState } from "react";

const filterTags = ["All", "Africa", "America", "Asia", "Europe", "Oceania"];

const FilterCountries = () => {
  const [openFilter, setOpenFilter] = useState(false);

  const handleFilterState = () => {
    setOpenFilter((state) => !state);
  };

  return (
    <div className={styles.filter_wrapper}>
      <div className={`${styles.filter_container}`} onClick={handleFilterState}>
        <p className="m-0">Filter by Region</p>
        <span>
          <Chevron />
        </span>
      </div>

      {openFilter && (
        <div className={`${styles.filter_items_container}`}>
          <ul className={`p-0  ${styles.filter_items}`}>
            {filterTags.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FilterCountries;
