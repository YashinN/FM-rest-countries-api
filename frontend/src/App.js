import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./pages/HomePage";
import CountryPage from "./pages/CountryPage";
import TempData from "./data.json";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [countryDetails, setCountryDetails] = useState(null);

  const handleCountryDetails = (country) => {
    setCountryDetails(country);
  };

  useEffect(() => {
    let color = darkMode ? "#202C36" : "#fafafa";
    document.body.style.background = color;
  }, [darkMode]);

  return (
    <>
      <BrowserRouter>
        <Navbar darkMode={darkMode} />
        <Routes>
          <Route
            path="/"
            element={
              !countryDetails ? (
                <HomePage
                  TempData={TempData}
                  handleCountryDetails={handleCountryDetails}
                  darkMode={darkMode}
                />
              ) : (
                <Navigate to="/country" />
              )
            }
          />

          <Route
            path="/country"
            element={
              !countryDetails ? (
                <Navigate to="/" />
              ) : (
                <CountryPage
                  selectedCountry={countryDetails}
                  setCountryDetails={setCountryDetails}
                  TempData={TempData}
                  darkMode={darkMode}
                />
              )
            }
          />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
