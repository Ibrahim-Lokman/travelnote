import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import AppLayout from "./pages/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";

const BASE_URL = "http://localhost:8000";
function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const response = await fetch(`${BASE_URL}/cities`);
        const data = await response.json();
        setCities(data);
      } catch (error) {
        alert("Error fetching cities", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<Navigate to="cities" replace />} />
            <Route
              path="cities"
              element={<CityList cities={cities} isLoading={isLoading} />}
            />
            <Route path="cities/:id" element={<City />} />
            <Route
              path="countries"
              element={<CountryList cities={cities} isLoading={isLoading} />}
            />

            <Route path="form" element={<Form />} />
          </Route>
          <Route path="pricing" element={<Pricing />} />
          <Route path="product" element={<Product />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
