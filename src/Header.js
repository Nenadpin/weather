import React, { useState } from "react";
import axios from "axios";

const API2 = process.env.REACT_APP_API2;

const Header = ({ setPos }) => {
  const [location, setLocation] = useState("");
  const [position, setPosition] = useState({});

  const getData = async () => {
    try {
      const resp = await axios.get(
        `http://api.positionstack.com/v1/forward?access_key=${API2}&query=${location}`
      );

      setPosition(resp.data);
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

        {position.data ? (
          <select
            onFocus={(e) => {
              e.target.selectedIndex = -1;
            }}
            onChange={(e) => {
              setPos([
                position.data[e.target.selectedIndex].latitude,
                position.data[e.target.selectedIndex].longitude,
              ]);
            }}
          >
            <>
              {position.data
                .filter((places) => (places.name = location))
                .map((place, index) => (
                  <option key={place.latitude} value={place.name}>
                    {place.name} - {place.region}
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
