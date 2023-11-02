export default function CardPaises(props) {
  var dataCityClima = "";
  let backgroundImage = "";
  if (props.climates) {
  
    dataCityClima = {
      name: props.climates.location?.name || "",
      temp: Math.round(props.climates.current?.temp_c) || 0,
      image: props.climates.current?.condition?.icon
        ? `https:${props.climates.current?.condition.icon}`
        : "",
      codition: props.climates.current.condition?.text || "",
      time: props.climates.location?.localtime.split(" ")[1] || "",
    };

    if (
      dataCityClima.name === "Sao Paulo" ||
      dataCityClima.name === "New York"
    ) {
      var nameNoneSpace =
        dataCityClima.name.split(" ")[0] + dataCityClima.name.split(" ")[1];
      backgroundImage = require(`./../../../image/bg/${nameNoneSpace}.jpg`);
    } else {
      backgroundImage = require(`./../../../image/bg/${dataCityClima.name}.jpg`);
    }
  }

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div
      style={backgroundStyle}
      className="bg-gradient-to-t bg-cover bg-center bg-no-repeat pb-3 w-48 text-white text-center rounded-3xl "
    >
      <div className="flex flex-col items-center">
        <img src={dataCityClima.image} alt="" className="w-36" />
        <div className="flex flex-col  items-center bg-blue-900 bg-opacity-70 px-2 py-1 mb-2  font-medium w-full">
          <div className="flex align-middle gap-2">
            <span class="material-symbols-outlined">schedule</span>
            <span> {dataCityClima.time}</span>
          </div>
          <h2>
            {dataCityClima.name}({dataCityClima.codition})
          </h2>
        </div>

        
          <h2 className="text-6xl ml-10 font-medium ">
            {dataCityClima.temp}
            <sup className="text-4xl ">°C</sup>
          </h2>
        
      </div>
    </div>
  );
}
