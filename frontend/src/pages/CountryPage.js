import styles from "./CountryPage.module.css";
import BackArrow from "../Icons/BackArrow";

const CountryPage = ({ selectedCountry, setCountryDetails }) => {
  const {
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
  } = selectedCountry;
  return (
    <main>
      <section className="container p-0 general_container ">
        <button
          className={styles.back_btn}
          onClick={() => setCountryDetails(null)}
        >
          {" "}
          <BackArrow />
          Back
        </button>

        <div className={styles.main_container}>
          <div
            className={`container p-0 ${styles.img_wrapper}`}
            style={{ backgroundImage: `url(${selectedCountry.flags.svg})` }}
          ></div>

          <div className={`containerp-0 ${styles.details_wrapper}`}>
            <h2 className={styles.country_title}>{selectedCountry.name}</h2>
            <div className={styles.countryDetails}>
              <ul className="p-0">
                <li>
                  <strong>Native Name:</strong> {nativeName}
                </li>
                <li>
                  <strong>Population:</strong> {population}
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
          </div>
        </div>
      </section>
    </main>
  );
};

export default CountryPage;
