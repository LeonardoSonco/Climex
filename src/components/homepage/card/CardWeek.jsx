export default function CardWeek(props) {
  const { dataCityClimaWeek, index } = props;
  const time = new Date();
  let iterator = time.getHours() + (index + 1);
  let dataHours = {};
  if (dataCityClimaWeek) {
    if (iterator > 23) {
      iterator = iterator - 24;
    }

    dataHours = {
      temp: Math.round(dataCityClimaWeek.hour[iterator]?.temp_c) || 0,
      condition: dataCityClimaWeek.hour[iterator]?.condition?.text || "Loading",
      chance_rain: dataCityClimaWeek.hour[iterator]?.chance_of_rain || 0,
      image: dataCityClimaWeek.hour[iterator]?.condition?.icon
        ? `https:${dataCityClimaWeek.hour[iterator].condition.icon}`
        : "",
    };
  
  }

  return (
    <div className="w-auto bg-slate-100 flex flex-col items-center mt-3 mx-3 mb-5 rounded-3xl">
      <img src={dataHours.image} alt="" className="w-36 py-2" />
      <div className="flex gap-3 text-lg font-medium">
        <span className="bg-violet-950 text-white py-2 mt-2 mb-4 px-4 rounded-3xl text-xl font-semibold">
          {`${iterator} Hours`}
        </span>
      </div>
      <div className="flex flex-row gap-2 py-2 font-semibold">
        <h4 className="text-5xl text-violet-950">{dataHours.temp}</h4>
        <h5 className="text-3xl text-purple" style={{ color: "#353589" }}>
          {"°C"}
        </h5>
      </div>
      <div className=" flex gap-3">
        <div>
          <img src="" alt="" />
          <span>{"Rain"}</span>
        </div>

        <div>
          <img src="" alt="" />
          <span>{`${dataHours.chance_rain}%`}</span>
        </div>
      </div>
      <p className="pb-5 mt-2 text-xl font-bold">{dataHours.condition}</p>
    </div>
  );
}
