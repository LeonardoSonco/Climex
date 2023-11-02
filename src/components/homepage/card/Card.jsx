


export default function Card(props) {
  const { forecast, index } = props;

  const dataTemp = {
    temp: Math.round(forecast?.day?.avgtemp_c || 0),
    maxtemp: Math.round(forecast?.day?.maxtemp_c || 0),
    mintemp:Math.round(forecast?.day?.mintemp_c || 0),
    image: forecast?.day?.condition.icon
    ? `https:${forecast.day.condition.icon}`
    : ""
  }

  let day = ''
  console.log(index)
  if(index === 0){
    day= "Today"
  }else if(index=== 1){
    day= "Tomorrow"
  }else{
    day= "After Tomorrow"
  }
 
  console.log(props)




  
  return (
    <div className="bg-gradient-to-t from-violet-800 to-violet-500 pb-3 w-48 text-white text-center rounded-3xl">
      <div className="text-left ml-4 mt-4 pt-1">
        <span className="bg-violet-950 px-3 py-1 rounded-2xl text-xs font-medium">
          {day}
        </span>
      </div>
      <div className="flex flex-col items-center">
        <img src={dataTemp.image} alt="" className="w-40" />

        <h2 className="text-6xl font-medium">
          {dataTemp.temp}<sup>°C</sup>
        </h2>
        <div className="text-lg pt-2">
          <span>
            {dataTemp.maxtemp}<sup>°C </sup>
          </span>
          <span className="">
            - {dataTemp.mintemp}<sup>°C</sup>
          </span>
        </div>
      </div>
    </div>
  );
}
