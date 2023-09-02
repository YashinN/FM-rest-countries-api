import { useEffect, useState } from "react";
import CountryCard from "../Components/CountryCard";
import SearchBar from "../Components/SearchBar";
import FilterCountries from "../Components/FilterCountries";
import styles from "./HomePage.module.css";

const HomePage = ({ TempData, handleCountryDetails, darkMode }) => {
  const [data, setData] = useState(TempData);
  const [searchQuery, setSearchQuery] = useState("");
  const [countryFilter, setCountryFilter] = useState("All");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleFilter = () => {
    countryFilter !== "All"
      ? setData(TempData.filter((country) => country.region === countryFilter))
      : setData(TempData);
  };

  useEffect(() => {
    setData(
      TempData.filter((country) =>
        country.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [TempData, searchQuery]);

  useEffect(() => {
    handleFilter();
  }, [countryFilter]);

  return (
    <main>
      <div
        className={`container p-0 general_container ${styles.search_container}`}
      >
        <SearchBar
          onSearch={handleSearch}
          searchQuery={searchQuery}
          darkMode={darkMode}
        />
        <FilterCountries onFilter={setCountryFilter} darkMode={darkMode} />
      </div>
      <section className={`container p-0  general_container `}>
        <div className={`  test  gy-4  ${styles.country_grid}`}>
          {data.map((country) => (
            <CountryCard
              darkMode={darkMode}
              country={country}
              onCountryDetails={handleCountryDetails}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
