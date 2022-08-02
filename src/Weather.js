import React, { useState, useEffect } from "react";
import axios from "axios";

const API_key = process.env.REACT_APP_API;

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
  const [detail, setDetail] = useState(0);

  let danas = new Date();
  nedelja1 = nedelja1.concat(nedelja.splice(danas.getDay()));
  nedelja1 = nedelja1.concat(nedelja);

  const getWeather = async () => {
    try {
      const weather = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${pos[0]}&lon=${pos[1]}&lang=hr&units=metric&appid=${API_key}`
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
        <>
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
          <div className="container-weather">
            <div className="weather">
              <div className="daily">
                {load.daily.map((item) => {
                  return (
                    <div
                      key={item.dt}
                      className={
                        detail === item.dt || detail === 0 ? "day" : "day1"
                      }
                      onClick={() => {
                        if (detail === item.dt) setDetail(0);
                        else setDetail(item.dt);
                      }}
                    >
                      <p className={detail !== item.dt ? "single" : "hidden"}>
                        {nedelja1.shift()}
                      </p>
                      {detail === item.dt ? (
                        <>
                          <p>
                            {`Temp: ${item.temp.min} - ${item.temp.max} C`}{" "}
                          </p>
                          <p>{`Nocu: ${item.temp.night} C`} </p>
                          <p>{`Pritisak: ${item.pressure} mBar`} </p>
                          <p>{`Vlaznost: ${item.humidity} %`} </p>
                          <p>{`Vetar: ${item.wind_speed} m/s`}</p>
                          <p>{`Opis: ${item.weather[0].description}`}</p>
                          <p>{`Kisa: ${item.pop * 100} %`}</p>
                        </>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="icons">
              {load.daily.map((icons) => {
                return (
                  <img
                    key={icons.dt}
                    src={`http://openweathermap.org/img/wn/${icons.weather[0].icon}@2x.png`}
                    alt=""
                  ></img>
                );
              })}
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Weather;
