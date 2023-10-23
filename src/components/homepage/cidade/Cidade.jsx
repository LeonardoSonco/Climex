import wWind from "../../../image/w-wind.png";
import wRain from "../../../image/w-rain.webp";
import wHumidity from "../../../image/w-humidity.png";
import wCloud from "../../../image/w-cloud.png";
import { format, parseISO } from "date-fns";
export default function Cidade(props) {
  let date = "";
  if (props.dataCity.day) {
    date = format(parseISO(props.dataCity.day), "EEEE, MMM d");
  }

  return (
    <div>
      <div className="text-center">
        <h3 className="text-6xl text-white font-bold">{props.dataCity.name}</h3>
        <div className="flex justify-around my-3">
          <span className="text-xl text-white font-medium">{date}</span>
        </div>
      </div>
      <div className="bg-neutral-200 grid grid-cols-2 gap-4 p-3 w-96 mx-auto rounded-3xl py-6">
        <div className="flex justify-start ml-2 gap-2 items-center">
          <div className="bg-purple-700 w-10 h-8 rounded-lg flex items-center justify-center">
            <img src={wWind} alt="" />
          </div>
          <span>Wind {props.dataCity.wind_kph} kph</span>
        </div>
        <div className="flex justify-start gap-2 items-center">
          <div className="bg-purple-700 w-10 h-8 rounded-lg flex items-center justify-center">
            <img src={wCloud} alt="" />
          </div>
          <span>Cloud {props.dataCity.cloud}%</span>
        </div>
        <div className="flex justify-start ml-2 gap-2 items-center">
          <div className="bg-purple-700 w-10 h-8 rounded-lg flex items-center justify-center">
            <img src={wRain} alt="" />
          </div>
          <span>Rain {props.dataCity.precip_mm} mm</span>
        </div>
        <div className="flex justify-start gap-2 items-center">
          <div className="bg-purple-700 w-10 h-8 rounded-lg flex items-center justify-center">
            <img src={wHumidity} alt="" className="w-8" />
          </div>
          <span>Humidity {props.dataCity.humidity}%</span>
        </div>
      </div>
    </div>
  );
}
