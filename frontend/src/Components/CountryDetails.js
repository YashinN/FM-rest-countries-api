import { thousandsSeparator, commaSeparateItems } from "../Utilities/utils";

const CountryDetails = ({ styles, selectedCountry }) => {
  const {
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
  } = selectedCountry[0];
  return (
    <>
      <h2 className={styles.country_title}>{selectedCountry.name}</h2>
      <div className={styles.countryDetails}>
        <ul className="p-0">
          <li>
            <strong>Native Name:</strong> {nativeName}
          </li>
          <li>
            <strong>Population:</strong>
            {thousandsSeparator(population)}
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
            <strong>Top Level Domain:</strong> {topLevelDomain}
          </li>
          <li>
            <strong>Currencies:</strong> {commaSeparateItems(currencies)}
          </li>
          <li>
            <strong>Languages:</strong>
            {commaSeparateItems(languages)}
          </li>
        </ul>
      </div>
    </>
  );
};

export default CountryDetails;
