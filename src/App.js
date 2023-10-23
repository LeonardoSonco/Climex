import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/header/Header";

import Destaque from "./components/homepage/destaque/Destaque";
import Semana from "./components/homepage/semana/Semana";
import Paises from "./components/homepage/paises/Paises";

function App() {
  const [climate, setClimate] = useState([]);

  useEffect(() => {
    async function lookClimate() {
      const endpoint = "http://api.weatherapi.com/v1/forecast.json";

      try {
        const response = await axios.get(endpoint, {
          params: {
            key: "39a108a7f5244eeda04174349230810",
            q: "Alegrete",
            days: "8",
            
          },
        });

        setClimate(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    }

    lookClimate();
  }, []);

  const dataCityClimaDay = {
    name: climate.location?.name || "",
    temp: Math.round(climate.current?.temp_c) || 0, // Verifica se climate.current está definido
    max: Math.round(climate.forecast?.forecastday[0]?.day?.maxtemp_c) || 0, // Verifica aninhadas
    min: Math.round(climate.forecast?.forecastday[0]?.day?.mintemp_c) || 0, // propriedades
    image: climate.forecast?.forecastday[0]?.day?.condition?.icon
      ? `https:${climate.forecast.forecastday[0].day.condition.icon}`
      : "",
    wind_kph: Math.round(climate.current?.wind_kph) || 0,
    precip_mm: Math.round(climate.current?.precip_mm) || 0,
    humidity: climate.current?.humidity || 0,
    cloud: climate.current?.cloud || 0,
    day: climate.current?.last_updated.split(' ')[0] || 0
  };
  
  const dataCityClimaWeek = {
    hour: climate.forecast?.forecastday || 0,
  };

  return (
    <div>
      <Header />
      <Destaque dataCityClimaDay={dataCityClimaDay} />
      <Semana dataCityClimaWeek={dataCityClimaWeek} />
      <Paises />
    </div>
  );
}

export default App;
