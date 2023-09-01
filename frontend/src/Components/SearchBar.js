import styles from "./SearchBar.module.css";
import SearchIcon from "../Icons/SearchIcon";

const SearchBar = ({ onSearch, searchQuery, darkMode }) => {
  return (
    <div className={styles.search_container}>
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
    </div>
  );
};

export default SearchBar;
