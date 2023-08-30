import { useEffect, useState } from "react";
import CountryCard from "../Components/CountryCard";
import SearchBar from "../Components/SearchBar";
import FilterCountries from "../Components/FilterCountries";
import styles from "./HomePage.module.css";

const HomePage = ({ TempData }) => {
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
        className={`container p-0 ${styles.search_container} ${styles.home_container}`}
      >
        <SearchBar onSearch={handleSearch} searchQuery={searchQuery} />
        <FilterCountries onFilter={setCountryFilter} />
      </div>
      <section className={`container p-0  ${styles.home_container} `}>
        <div
          className={` row  justify-content-between gy-4  ${styles.country_grid}`}
        >
          {data.map((country) => (
            <CountryCard country={country} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
