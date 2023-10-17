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
    </>
  );
};

export default CountryDetails;
