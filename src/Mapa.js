import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "800px",
  height: "850px",
};

function Mapa({ pos }) {
  const center = {
    lat: pos[0],
    lng: pos[1],
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCq2Xl4MrlpG6kScQvfO7j2Np6I0FddQks">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      ></GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Mapa);
