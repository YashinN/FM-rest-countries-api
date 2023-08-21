import styles from "./CountryCard.module.css";

const CountryCard = ({ country }) => {
  return (
    <div className="col-3 p-0">
      <div className={`${styles.country_card} p-0`}>
        <img className={styles.flag_img} src={country.flag} alt="" />
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
