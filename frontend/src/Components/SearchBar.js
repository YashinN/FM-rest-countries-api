import styles from "./SearchBar.module.css";
import SearchIcon from "../Icons/SearchIcon";

const SearchBar = () => {
  return (
    <div className={styles.search_container}>
      <input
        className={styles.search_bar}
        type="text"
        placeholder="Search for a country..."
      />

      <span className={styles.icon_container}>
        <SearchIcon />
      </span>
    </div>
  );
};

export default SearchBar;
