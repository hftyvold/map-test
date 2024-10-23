import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = ({ setComponentValue }) => {
  const [position, setPosition] = useState(null);

  // Get the user's location
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setPosition([latitude, longitude]);
        setComponentValue({ latitude, longitude });  // Send position back to Streamlit
      });
    } else {
      console.error("Geolocation is not available.");
    }
  }, []);

  return position ? (
    <MapContainer center={position} zoom={13} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}></Marker>
    </MapContainer>
  ) : (
    <div>Fetching your location...</div>
  );
};

export default MapComponent;
