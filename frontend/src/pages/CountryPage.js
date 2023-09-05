import styles from "./CountryPage.module.css";
import BackArrow from "../Icons/BackArrow";
import { useNavigate } from "react-router-dom";

const CountryPage = ({
  selectedCountry,
  setCountryDetails,
  TempData,
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
    const country = TempData.filter((country) => country.alpha3Code === code);
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
        <button
          id={darkMode ? "dark" : "light"}
          className={styles.back_btn}
          onClick={handleBack}
        >
          <BackArrow darkMode={darkMode} />
          Back
        </button>

        <div
          className={` ${
            darkMode ? "country_details_dark" : "country_details_light"
          } ${styles.main_container}`}
        >
          <div className={`container p-0 ${styles.img_wrapper}`}>
            <img
              className={styles.country_img}
              src={selectedCountry.flags.svg}
              alt=""
            />
          </div>

          <div className={`container p-0 ${styles.details_wrapper}`}>
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
              <div className={styles.border_btns}>
                {borders?.map((code) => (
                  <button
                    id={darkMode ? "dark" : "light"}
                    onClick={() => handleBorderCountry(code)}
                    className={styles.border_btn}
                  >
                    {code}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CountryPage;
