import styles from "./CountryPage.module.css";
import BackArrow from "../Icons/BackArrow";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const backVariant = {
  hidden: { y: "-100vw" },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      duration: 0.7,
    },
  },
  hover: {
    scale: 1.1,
  },
  tap: {
    scale: 0.9,
  },
};

const imageVariant = {
  hidden: { x: "-100vw" },
  visible: {
    x: 0,
    transition: {
      type: "tween",
    },
  },
};

const detailsVariant = {
  hidden: { x: "100vw" },
  visible: {
    x: 0,
    transition: {
      type: "tween",
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    scale: 0.3,
    x: 100,
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
  },
};

const borderVariants = {
  hidden: { x: "-100vw" },
  visible: {
    x: 0,
    transition: {
      duration: 0.2,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const CountryPage = ({
  selectedCountry,
  setCountryDetails,
  allCountries,
  darkMode,
}) => {
  const navigate = useNavigate();

  const {
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = selectedCountry;

  const handleBorderCountry = (code) => {
    const country = allCountries.filter(
      (country) => country.alpha3Code === code
    );
    setCountryDetails(country.at(0));
    navigate(`/country/${country.at(0).name}`);
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <main>
      <section
        className={`container  general_container ${styles.padding_control}`}
      >
        <motion.button
          variants={backVariant}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
          id={darkMode ? "dark" : "light"}
          className={styles.back_btn}
          onClick={handleBack}
        >
          <BackArrow darkMode={darkMode} />
          Back
        </motion.button>

        <div
          className={` ${
            darkMode ? "country_details_dark" : "country_details_light"
          } ${styles.main_container}`}
        >
          <motion.div
            className={`container p-0 ${styles.img_wrapper}`}
            variants={imageVariant}
            animate="visible"
            initial="hidden"
          >
            <img
              className={styles.country_img}
              src={selectedCountry.flags.svg}
              alt=""
            />
          </motion.div>

          <motion.div
            className={`container p-0 ${styles.details_wrapper}`}
            variants={detailsVariant}
            animate="visible"
            initial="hidden"
          >
            <h2 className={styles.country_title}>{selectedCountry.name}</h2>
            <div className={styles.countryDetails}>
              <ul className="p-0">
                <li>
                  <strong>Native Name:</strong> {nativeName}
                </li>
                <li>
                  <strong>Population:</strong>
                  {String(population)
                    .split("")
                    .reverse()
                    .map((num, i) =>
                      i === 0 ? num : (i + 1) % 3 === 0 ? "," + num : num
                    )
                    .reverse()
                    .join("")}
                </li>
                <li>
                  <strong>Region:</strong> {region}
                </li>
                <li>
                  <strong>Sub Region:</strong> {subregion}
                </li>
                <li>
                  <strong>Capital:</strong> {capital}
                </li>
              </ul>

              <ul className="p-0">
                <li>
                  <li>
                    <strong>Top Level Domain:</strong> {topLevelDomain}
                  </li>
                  <li>
                    <strong>Currencies:</strong>{" "}
                    {currencies?.map((cur, i) =>
                      currencies.length === i + 1 ? cur.name : cur.name + ","
                    )}
                  </li>
                  <li>
                    <strong>Languages:</strong>{" "}
                    {languages?.map((lan, i) =>
                      languages.length === i + 1 ? lan.name : lan.name + ","
                    )}
                  </li>
                </li>
              </ul>
            </div>

            <div className={styles.borders_container}>
              <p className="m-0">
                {" "}
                <strong>Border Countries:</strong>
              </p>
              <motion.div
                className={styles.border_btns}
                variants={borderVariants}
                initial="hidden"
                whileInView="visible"
              >
                {borders?.map((code) => (
                  <motion.button
                    variants={childVariants}
                    id={darkMode ? "dark" : "light"}
                    onClick={() => handleBorderCountry(code)}
                    className={styles.border_btn}
                  >
                    {code}
                  </motion.button>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default CountryPage;
