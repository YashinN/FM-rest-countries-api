import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./CountryPage.module.css";
import BorderCountries from "../Components/BorderCountries";
import CountryDetails from "../Components/CountryDetails";
import CountryDetailsImage from "../Components/CountryDetailsImage";
import BackButton from "../Components/BackButton";

const detailsVariant = {
  hidden: { x: "100vw" },
  visible: {
    x: 0,
    transition: {
      type: "tween",
    },
  },
};

const CountryPage = ({ TempData, darkMode }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const selectedCountry = TempData.filter((country) => country.name === id);

  const handleBorderCountry = (code) => {
    const country = TempData.filter((country) => country.alpha3Code === code);
    navigate(`/country/${country.at(0).name}`);
  };

  return (
    <main>
      <section
        className={`container  general_container ${styles.padding_control}`}
      >
        <BackButton darkMode={darkMode} styles={styles} />
        <div
          className={` ${
            darkMode ? "country_details_dark" : "country_details_light"
          } ${styles.main_container}`}
        >
          <CountryDetailsImage
            styles={styles}
            selectedCountry={selectedCountry}
          />

          <motion.div
            className={`container p-0 ${styles.details_wrapper}`}
            variants={detailsVariant}
            animate="visible"
            initial="hidden"
          >
            <CountryDetails styles={styles} selectedCountry={selectedCountry} />

            <BorderCountries
              styles={styles}
              onBorderCountry={handleBorderCountry}
              selectedCountry={selectedCountry}
              darkMode={darkMode}
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default CountryPage;
