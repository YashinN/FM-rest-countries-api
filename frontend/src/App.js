import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./pages/HomePage";
import CountryPage from "./pages/CountryPage";
import TempData from "./data.json";

function App() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(true);
  const [countryDetails, setCountryDetails] = useState(null);

  const handleCountryDetails = (country) => {
    setCountryDetails(country);
    navigate(`/country/${country.name}`);
  };

  const handleDarkMode = () => {
    setDarkMode((theme) => !theme);
  };

  let color = darkMode ? "#202C36" : "#fafafa";
  document.body.style.background = color;

  return (
    <>
      <Navbar darkMode={darkMode} handleDarkMode={handleDarkMode} />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              TempData={TempData}
              handleCountryDetails={handleCountryDetails}
              darkMode={darkMode}
            />
          }
        />

        <Route
          path="/country/:id"
          element={
            <CountryPage
              selectedCountry={countryDetails}
              setCountryDetails={setCountryDetails}
              TempData={TempData}
              darkMode={darkMode}
            />
          }
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
