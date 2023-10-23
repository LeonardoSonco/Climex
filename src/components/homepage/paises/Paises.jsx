import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Importe os estilos básicos do Swiper
import "swiper/css/navigation"; // Importe os estilos de navegação
import "swiper/css/pagination"; // Importe os estilos de pagina*/
import CardPaises from "./CardPaises";

import axios from "axios";

const cities = [
  "London",
  "Paris",
  "New_York",
  "Sao_Paulo",
  "Tokyo",
  "Milan",
  "Berlin",
  "Amsterdam",
];

export default function Paises() {
  const [slidesPerView, setSlidesPerView] = useState(1);
  const containerRef = useRef(null);

  const [climates, setClimates] = useState({});

  useEffect(() => {
    async function fetchDataForCities() {
      const endpoint = "http://api.weatherapi.com/v1/forecast.json";
      const newClimates = {};

      for (const city of cities) {
        try {
          const response = await axios.get(endpoint, {
            params: {
              key: "39a108a7f5244eeda04174349230810",
              q: city,
              days: "8",
            },
          });

          newClimates[city] = response.data;
        } catch (error) {
          console.error(`Erro ao buscar dados para ${city}:`, error);
        }
      }
      setClimates(newClimates);
    }

    fetchDataForCities();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.clientWidth;
        const cardWeekWidth = 210; // Largura aproximada de um CardWeek
        const newSlidesPerView = Math.floor(containerWidth / cardWeekWidth);
        if (newSlidesPerView !== slidesPerView) {
          setSlidesPerView(newSlidesPerView);
        }
      }
    };

    if (containerRef.current) {
      handleResize();
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [slidesPerView]);

  console.log(climates['London'])

  const cardPaises = Array.from({ length: 7 }, (_, index) => (
    <SwiperSlide key={index} className="h-screen">
      <CardPaises climates={climates[cities[index]]} />
    </SwiperSlide>
  ));

  return (
    <section className="grid grid-cols-2 my-8 bg-slate-50">
      <div className="text-center  pt-7">
        <h2 className="text-5xl font-semibold pb-5">
          Climates of most visited cities
        </h2>
        <p className="text-lg">
          Some climates to give you an idea of what its like in other places
        </p>
      </div>
      <div className="w-full mt-5" ref={containerRef}>
        <Swiper
          navigation
          pagination={false}
          autoplay={{ delay: 10000 }}
          spaceBetween={0}
          slidesPerView={slidesPerView}
        >
          {cardPaises}
        </Swiper>
      </div>
    </section>
  );
}
