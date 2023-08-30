import styles from "./FilterCountries.module.css";

import Chevron from "../Icons/Chevron";

const FilterCountries = () => {
  return (
    <div className={styles.filter_wrapper}>
      <div className={`${styles.filter_container}`}>
        <p className="m-0">Filter by Region</p>
        <span>
          <Chevron />
        </span>
      </div>

      <div className={`${styles.filter_items_container}`}>
        <ul className={`p-0  ${styles.filter_items}`}>
          <li>Africa</li>
          <li>America</li>
          <li>Asia</li>
          <li>Europe</li>
          <li>Oceania</li>
        </ul>
      </div>
    </div>
  );
};

export default FilterCountries;
