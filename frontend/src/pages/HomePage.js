import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import CountryCard from "../Components/CountryCard";
import SearchBar from "../Components/SearchBar";
import FilterCountries from "../Components/FilterCountries";
import Loader from "../Components/Loader";
import styles from "./HomePage.module.css";

const HomePage = ({ countriesData, darkMode, loading }) => {
  const [data, setData] = useState(countriesData);
  const [searchQuery, setSearchQuery] = useState("");
  const [countryFilter, setCountryFilter] = useState("All");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleFilter = () => {
    countryFilter !== "All"
      ? setData(
          countriesData.filter((country) => country.region === countryFilter)
        )
      : setData(countriesData);
  };

  useEffect(() => {
    setData(
      countriesData.filter((country) =>
        country.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [countriesData, searchQuery]);

  useEffect(() => {
    handleFilter();
  }, [countryFilter]);

  return (
    <main>
      {loading && <Loader />}

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
        {!loading && (
          <div className={`${styles.country_grid}`}>
            {data.map((country) => (
              <Link to={`/country/${country.name}`}>
                <CountryCard darkMode={darkMode} country={country} />
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default HomePage;
