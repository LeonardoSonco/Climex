import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/header/Header";

import Destaque from "./components/homepage/destaque/Destaque";

import Paises from "./components/homepage/paises/Paises";
import Semana from "./components/homepage/semana/Semana";
import Footer from "./components/footer/Footer";

function App() {
  const [climate, setClimate] = useState([]);
  const [location, setLocation] = useState("Alegrete");

  useEffect(() => {
    async function lookClimate() {
      const endpoint = "http://api.weatherapi.com/v1/forecast.json";

      try {
        const response = await axios.get(endpoint, {
          params: {
            key: "39a108a7f5244eeda04174349230810",
            q: location,
            days: "8",
          },
        });

        setClimate(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    }

    lookClimate();
  }, [location]);

  console.log(climate)

  const dataCityClimaDay = {
    name: climate.location?.name || "",
    temp: climate.forecast?.forecastday || 0,
    wind_kph: Math.round(climate.current?.wind_kph) || 0,
    precip_mm: Math.round(climate.current?.precip_mm) || 0,
    humidity: climate.current?.humidity || 0,
    cloud: climate.current?.cloud || 0,
    day: climate.current?.last_updated.split(" ")[0] || 0,
    country: climate.location?.country || "",
  };

  const dataCityClimaWeek = {
    hour: climate.forecast?.forecastday || "",
  };

  const handleLocation = (citySearch) => {
    setLocation(citySearch);
  };

  return (
    <div>
      <Header handleLocation={handleLocation} />
      <Destaque dataCityClimaDay={dataCityClimaDay} />
      <Semana dataCityClimaWeek={dataCityClimaWeek} />
      <Paises />
      <Footer />
    </div>
  );
}

export default App;
