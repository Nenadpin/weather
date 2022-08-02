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
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      ></GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Mapa);
