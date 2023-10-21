import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./pages/HomePage";
import CountryPage from "./pages/CountryPage";
// import TempData from "./data.json";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [TempData, setTempData] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      const response = await fetch(
        "https://fm-rest-countries-7gkfk90fs-yashinn.vercel.app/api/countries",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      setTempData(data);
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
          element={<HomePage TempData={TempData} darkMode={darkMode} />}
        />

        <Route
          path="/country/:id"
          element={<CountryPage TempData={TempData} darkMode={darkMode} />}
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
