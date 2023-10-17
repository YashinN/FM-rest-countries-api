import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./CountryPage.module.css";
import BackArrow from "../Icons/BackArrow";
import BorderCountries from "../Components/BorderCountries";
import CountryDetails from "../Components/CountryDetails";

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

const CountryPage = ({ TempData, darkMode }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const selectedCountry = TempData.filter((country) => country.name === id);

  // const {
  //   nativeName,
  //   population,
  //   region,
  //   subregion,
  //   capital,
  //   topLevelDomain,
  //   currencies,
  //   languages,
  //   borders,
  //   flags,
  // } = selectedCountry[0];

  const handleBorderCountry = (code) => {
    const country = TempData.filter((country) => country.alpha3Code === code);
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
          {/* <motion.div
            className={`container p-0 ${styles.img_wrapper}`}
            variants={imageVariant}
            animate="visible"
            initial="hidden"
          >
            <img className={styles.country_img} src={flags.svg} alt="" />
          </motion.div> */}

          <motion.div
            className={`container p-0 ${styles.details_wrapper}`}
            variants={detailsVariant}
            animate="visible"
            initial="hidden"
          >
            <CountryDetails styles={styles} selectedCountry={selectedCountry} />

            {/* 
            <BorderCountries
              styles={styles}
              onBorderCountry={handleBorderCountry}
              borderCountries={borders}
              darkMode={darkMode}
            /> */}
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default CountryPage;
