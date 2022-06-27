import React from "react";
import { GoogleMap } from "@react-google-maps/api";
import { Paper, Typography, useMediaQuery } from "@mui/material";
import { LocationOnOutlined } from "@mui/icons-material";
import { Rating } from "@mui/material";
import "./map.css";

const Map = () => {
  const isMobile = useMediaQuery("min-width:600px");
  const coordinates = { lat: 0, lng: 0 };

  return (
    <div>
      <GoogleMap
        bootstrapURLKeys={{ key: "AIzaSyCq2Xl4MrlpG6kScQvfO7j2Np6I0FddQks" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={""}
        onChildClick={""}
      ></GoogleMap>
    </div>
  );
};

export default Map;
