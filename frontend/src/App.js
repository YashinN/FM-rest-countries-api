import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./pages/HomePage";
import CountryPage from "./pages/CountryPage";
// import TempData from "./data.json";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [countriesData, setCountriesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCountries = async () => {
      setLoading(true);

      try {
        const response = await fetch(process.env.REACT_APP_API, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();
        setCountriesData(data);
      } catch (err) {
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    getCountries();
  }, []);

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
              countriesData={countriesData}
              darkMode={darkMode}
              loading={loading}
            />
          }
        />

        <Route
          path="/country/:id"
          element={
            <CountryPage countriesData={countriesData} darkMode={darkMode} />
          }
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
