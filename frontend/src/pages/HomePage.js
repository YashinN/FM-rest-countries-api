import { useEffect, useState } from "react";
import CountryCard from "../Components/CountryCard";
import SearchBar from "../Components/SearchBar";
import styles from "./HomePage.module.css";

const HomePage = ({ TempData }) => {
  const [data, setData] = useState(TempData);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <main>
      <div className="container p-0">
        <SearchBar onSearch={handleSearch} searchQuery={searchQuery} />
      </div>
      <section className={`container ${styles.countries} p-0`}>
        <div className="row m-0 gy-4">
          {data.map((country) => (
            <CountryCard country={country} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
