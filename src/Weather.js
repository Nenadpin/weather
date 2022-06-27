import React, { useState, useEffect } from "react";
import axios from "axios";

const API_key = "a663b1f24d797e9ff0b8753ef033def5";

const Weather = ({ pos }) => {
  const [load, setLoad] = useState({});
  let nedelja1 = ["Danas"];
  let nedelja = [
    "Ponedeljak",
    "Utorak",
    "Sreda",
    "Cetvrtak",
    "Petak",
    "Subota",
    "Nedelja",
  ];
  let danas = new Date();
  nedelja1 = nedelja1.concat(nedelja.splice(danas.getDay()));
  nedelja1 = nedelja1.concat(nedelja);

  const getWeather = async () => {
    try {
      const weather = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${pos[0]}&lon=${pos[1]}&exclude=hourly&lang=hr&units=metric&appid=${API_key}`
      );
      setLoad(weather.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => getWeather(), [pos]);

  return (
    <>
      {load.current ? (
        <div className="weather">
          <div className="current">
            <div>
              {`Datum: `}
              {new Date(load.current.dt * 1000).toLocaleDateString("en-us", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </div>
            <div>{`Temperatura:  ${load.current.temp}  C`}</div>
            <div>{`Vetar: ${load.current.wind_speed}  m/s`}</div>
            <div>{`Opis: ${load.current.weather[0].description}`}</div>
          </div>
          <div className="daily">
            {load.daily.map((item) => {
              return (
                <div className="day" key={item.dt}>
                  <p>
                    {
                      nedelja1.shift() /* {new Date(item.dt * 1000).toLocaleDateString("en-us", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })} */
                    }
                  </p>
                  <p>{`Temp: ${item.temp.min} - ${item.temp.max} C`} </p>
                  <p>{`Vetar: ${item.wind_speed} m/s`}</p>
                  <p>{`Opis: ${item.weather[0].description}`}</p>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Weather;
