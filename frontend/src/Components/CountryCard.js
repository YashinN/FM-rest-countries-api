import styles from "./CountryCard.module.css";
import { motion } from "framer-motion";

const CountryCard = ({ country, onCountryDetails, darkMode }) => {
  return (
    <motion.div
      initial={{ x: -100 }}
      whileInView={{ x: 0 }}
      transition={{
        duration: 0.7,
        type: "spring",
        damping: 10,
      }}
      viewport={{ once: true }}
      className={` p-0 ${styles.country_card}`}
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
    </motion.div>
  );
};

export default CountryCard;
