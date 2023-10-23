//import { useEffect, useState } from "react";
import sky from "../../../image/sky.jpg";
import Card from "../card/Card";
import Cidade from "../cidade/Cidade";
//import axios from "axios";

export default function Destaque(props) {

  return (
    <section className="container mx-auto mt-8 flex justify-center">
      <div className="relative w-11/12">
        <img
          src={sky}
          alt=""
          className="rounded-2xl object-fill w-full  max-w-full"
          style={{ height: "450px" }}
        />
        <div className="absolute inset-0 flex items-center justify-around">
          <Cidade dataCity = {props.dataCityClimaDay}/>
          <Card forecast ={props.dataCityClimaDay}></Card>
        </div>
      </div>
    </section>
  );
}
