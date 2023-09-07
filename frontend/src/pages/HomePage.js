import { useEffect, useState } from "react";
import CountryCard from "../Components/CountryCard";
import SearchBar from "../Components/SearchBar";
import FilterCountries from "../Components/FilterCountries";
import styles from "./HomePage.module.css";

const HomePage = ({ allCountries, handleCountryDetails, darkMode }) => {
  const [countriesData, setCountriesData] = useState(allCountries);
  const [searchQuery, setSearchQuery] = useState("");
  const [countryFilter, setCountryFilter] = useState("All");
  const [currPage, setCurrPage] = useState(13);

  let x = countriesData.filter((country) =>
    country.name.toLowerCase().includes("".toLowerCase())
  );

  // const numItemsPerPage = 20;
  // const page = 13;

  // const numpages = Math.ceil(TempData.length / numItemsPerPage);

  // const x = TempData.slice(
  //   currPage * numItemsPerPage - numItemsPerPage,
  //   currPage * numItemsPerPage
  // );

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleFilter = () => {
    countryFilter !== "All"
      ? setCountriesData(
          allCountries
            .filter((country) => country.region === countryFilter)
            .filter((country) =>
              country.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
        )
      : setCountriesData(allCountries);
  };

  useEffect(() => {
    setCountriesData(
      allCountries.filter((country) =>
        country.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [allCountries, searchQuery]);

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
      <button onClick={() => setCurrPage((prev) => prev++)}>click me</button>
      <section className={`container p-0  general_container `}>
        <div className={`${styles.country_grid}`}>
          {countriesData.map((country) => (
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
