import Navbar from "./Components/Navbar";
import HomePage from "./pages/HomePage";
import TempData from "./data.json";

function App() {
  return (
    <>
      <Navbar />
      <HomePage TempData={TempData} />
    </>
  );
}

export default App;
