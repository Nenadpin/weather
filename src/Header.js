import React, { useState } from "react";
import axios from "axios";

const API2 = process.env.REACT_APP_API;

const Header = ({ setPos }) => {
  const [location, setLocation] = useState("");
  const [position, setPosition] = useState([]);

  const getData = async () => {
    try {
      const resp = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${API2}`
      );

      setPosition(resp.data);
      console.log(position);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getData();
  };

  return (
    <div className="header">
      <form onSubmit={handleSubmit}>
        <label>
          Izberite mesto:
          <input
            type="text"
            placeholder="Unesite naziv mesta"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onFocus={() => {
              setLocation("");
              setPosition({});
              setPos([]);
            }}
          />
        </label>

        {position.length ? (
          <select
            onFocus={(e) => {
              e.target.selectedIndex = -1;
            }}
            onChange={(e) => {
              setPos([
                position[e.target.selectedIndex].lat,
                position[e.target.selectedIndex].lon,
              ]);
            }}
          >
            <>
              {position
                .filter((places) => (places.name = location))
                .map((place, index) => (
                  <option key={index} value={place.name}>
                    {place.name} - {place.country}
                  </option>
                ))}
            </>
          </select>
        ) : null}
      </form>
    </div>
  );
};

export default Header;
