


export default function Card(props) {

  return (
    <div className="bg-gradient-to-t from-violet-800 to-violet-500 pb-3 w-48 text-white text-center rounded-3xl">
      <div className="text-left ml-4 mt-3">
        <span className="bg-violet-950 px-3 py-1 rounded-2xl text-xs font-medium">
          Today
        </span>
      </div>
      <div className="flex flex-col items-center">
        <img src={props.forecast.image} alt="" className="w-40" />

        <h2 className="text-6xl font-medium">
          {props.forecast.temp}<sup>°C</sup>
        </h2>
        <div className="text-lg pt-2">
          <span>
            {props.forecast.max}<sup>°C </sup>
          </span>
          <span className="">
            - {props.forecast.min}<sup>°C</sup>
          </span>
        </div>
      </div>
    </div>
  );
}
