import CountryCard from "../Components/CountryCard";
import SearchBar from "../Components/SearchBar";
import styles from "./HomePage.module.css";

const HomePage = ({ TempData }) => {
  const demoCountry = TempData[10];

  return (
    <main>
      <div className="container p-0">
        <SearchBar />
      </div>
      <section className={`container ${styles.countries} p-0`}>
        <div className="row m-0 gy-4">
          {TempData.map((country) => (
            <CountryCard country={country} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
