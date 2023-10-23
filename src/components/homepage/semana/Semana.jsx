import React, { useEffect, useRef, useState } from "react";
import SwiperCore from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Importe os estilos básicos do Swiper
import "swiper/css/navigation"; // Importe os estilos de navegação
import "swiper/css/pagination"; // Importe os estilos de pagina
import CardWeek from "../card/CardWeek";
SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Semana(props) {
    const [slidesPerView, setSlidesPerView] = useState(1);
    const containerRef = useRef(null);
    
 


    useEffect(() => {
        const handleResize = () => {
          const containerWidth = containerRef.current.clientWidth;
          const cardWeekWidth = 250; // Largura aproximada de um CardWeek
      
          const newSlidesPerView = Math.floor(containerWidth / cardWeekWidth);
      
          if (newSlidesPerView !== slidesPerView) {
            setSlidesPerView(newSlidesPerView);
          }
        };
        window.addEventListener("resize", handleResize);
      handleResize();
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, [slidesPerView]);
  
    const cardWeeks = Array.from({ length: 7 }, (_, index) => (
      <SwiperSlide key={index} className="h-screen">
        <CardWeek dataCityClimaWeek={props.dataCityClimaWeek} index={index} />
      </SwiperSlide>
    ));
  
    return (
      <div className="w-full mt-5" ref={containerRef}>
        <Swiper
          navigation
          pagination={false}
          autoplay={{ delay: 10000 }}
          spaceBetween={0}
          slidesPerView={slidesPerView}
        >
          {cardWeeks}
        </Swiper>
      </div>
    );
  }