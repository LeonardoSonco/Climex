import { format, parseISO } from "date-fns";

export default function CardWeek(props) {
  const { dataCityClimaWeek, index } = props;

  if (
    dataCityClimaWeek.hour[index + 1]?.day?.condition?.text ===
    "Patchy rain possible"
  ) {
    dataCityClimaWeek.hour[index + 1].day.condition.text = "Rain Possible";
  }

  let date = "loading";
  if (
    dataCityClimaWeek.hour[index + 1] &&
    dataCityClimaWeek.hour[index + 1].date
  ) {
    date = format(parseISO(dataCityClimaWeek.hour[index + 1].date), "EEEE");
  }

  return (
    <div className="w-auto bg-slate-100 flex flex-col items-center mt-3 ml-5 mb-5 rounded-3xl">
      <img
        src={`https:${
          dataCityClimaWeek.hour[index + 1]?.day?.condition?.icon || ""
        }`}
        alt=""
        className="w-36 py-2"
      />
      <div className="flex gap-3 text-lg font-medium">
        <span className="bg-violet-950 text-white py-2 mt-2 mb-4 px-4 rounded-3xl text-xl font-semibold">
          {date}
        </span>
      </div>
      <div className="flex flex-row gap-2 py-2 font-semibold">
        <h4 className="text-5xl text-violet-950">{`${Math.round(
          dataCityClimaWeek.hour[index + 1]?.day?.mintemp_c
        )}°`}</h4>
        <h5
          className="text-3xl text-purple"
          style={{ color: "#353589" }}
        >{`${Math.round(
          dataCityClimaWeek.hour[index + 1]?.day?.maxtemp_c
        )}°`}</h5>
      </div>
      <div className=" flex gap-3">
        <div>
          <img src="" alt="" />
          <span>{`${
            dataCityClimaWeek.hour[index + 1]?.day?.avgvis_km
          }km/h`}</span>
        </div>

        <div>
          <img src="" alt="" />
          <span>{`${
            dataCityClimaWeek.hour[index + 1]?.day?.avghumidity
          }%`}</span>
        </div>
      </div>
      <p className="pb-5 mt-2 text-xl font-bold">
        {dataCityClimaWeek.hour[index + 1]?.day?.condition?.text || ""}
      </p>
    </div>
  );
}
