import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./pages/HomePage";
import CountryPage from "./pages/CountryPage";
import TempData from "./data.json";

function App() {
  const [countryDetails, setCountryDetails] = useState(null);

  const handleCountryDetails = (country) => {
    setCountryDetails(country);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              !countryDetails ? (
                <HomePage
                  TempData={TempData}
                  handleCountryDetails={handleCountryDetails}
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
