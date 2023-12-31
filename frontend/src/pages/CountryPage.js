import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import useCountryData from "../hooks/useCountryData";

import styles from "./CountryPage.module.css";

import BorderCountries from "../Components/BorderCountries";
import CountryDetails from "../Components/CountryDetails";
import CountryDetailsImage from "../Components/CountryDetailsImage";
import BackButton from "../Components/BackButton";
import Loader from "../Components/Loader";

const detailsVariant = {
  hidden: { x: "100vw" },
  visible: {
    x: 0,
    transition: {
      type: "tween",
    },
  },
};

const CountryPage = ({ countriesData, darkMode }) => {
  const [selectedCountry, setSelectedCountry] = useState([
    {
      nativeName: "",
      population: "",
      region: "",
      subregion: "",
      capital: "",
      topLevelDomain: "",
      currencies: [],
      languages: [],
      flags: "",
      borders: [],
    },
  ]);

  const navigate = useNavigate();
  const { id } = useParams();

  const { loading } = useCountryData(
    `${process.env.REACT_APP_API}/` + `${id}`,
    setSelectedCountry,
    [id]
  );

  const handleBorderCountry = (code) => {
    const country = countriesData.filter(
      (country) => country.alpha3Code === code
    );
    navigate(`/country/${country.at(0).name}`);
  };

  return (
    <main>
      <section
        className={`container  general_container ${styles.padding_control}`}
      >
        <BackButton darkMode={darkMode} styles={styles} />

        {loading && <Loader />}
        <div
          className={` ${
            darkMode ? "country_details_dark" : "country_details_light"
          } ${styles.main_container}`}
        >
          {!loading && (
            <>
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
                <CountryDetails
                  styles={styles}
                  selectedCountry={selectedCountry}
                />

                <BorderCountries
                  styles={styles}
                  onBorderCountry={handleBorderCountry}
                  selectedCountry={selectedCountry}
                  darkMode={darkMode}
                />
              </motion.div>
            </>
          )}
        </div>
      </section>
    </main>
  );
};

export default CountryPage;
