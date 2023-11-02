//import { useEffect, useState } from "react";
import sky from "../../../image/sky.jpg";
import Card from "../card/Card";
import Cidade from "../cidade/Cidade";
//import axios from "axios";

import React, { useEffect, useRef, useState } from "react";
import SwiperCore from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Importe os estilos básicos do Swiper
import "swiper/css/navigation"; // Importe os estilos de navegação
import "swiper/css/pagination"; // Importe os estilos de pagina

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Destaque(props) {
  const [slidesPerView, setSlidesPerView] = useState(1);
  const containerRef = useRef(null);
 


  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.clientWidth;
        const cardWeekWidth = 200; // Largura aproximada de um CardWeek
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




  const cardDays = Array.from({ length: 3 }, (_, index) => (
    
    <SwiperSlide key={index} className="h-screen">
      <Card forecast={props.dataCityClimaDay.temp[index]} index = {index}></Card>
    </SwiperSlide>
  ));

  return (
    <section className="container mx-auto mt-8 flex justify-center">
      <div className="relative w-11/12">
        <img
          src={sky}
          alt=""
          className="rounded-2xl object-fill w-full  max-w-full"
          style={{ height: "450px" }}
        />
        <div className="absolute inset-0 flex items-center justify-around ">
          <Cidade dataCity={props.dataCityClimaDay} />

          <div
            style={{ textAlign: "-webkit-center" }}
            className="w-1/3 flex items-center justify-center"
          >
            <Swiper
              navigation
              pagination={false}
              autoplay={{ delay: 10000 }}
              spaceBetween={0}
              slidesPerView={1}
            >
              {cardDays}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
