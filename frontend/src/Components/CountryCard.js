import styles from "./CountryCard.module.css";

const CountryCard = ({ country, onCountryDetails, darkMode }) => {
  return (
    <div
      className={`col-3 p-0 ${styles.country_card}`}
      onClick={() => onCountryDetails(country)}
      id={darkMode ? "dark" : "light"}
    >
      <div className={`p-0`}>
        <div className={styles.img_container}>
          <img className={styles.flag_img} src={country.flags.png} alt="" />
        </div>

        <div className={styles.details_container}>
          <h2 className="">{country.name}</h2>
          <p>
            <strong> Population:</strong>
            {country.population}{" "}
          </p>
          <p>
            {" "}
            <strong>Region:</strong> {country.region}
          </p>
          <p>
            {" "}
            <strong>Capital:</strong>
            {country.capital}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
