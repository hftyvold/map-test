import React from "react";
import 'leaflet/dist/leaflet.css';
import ReactDOM from "react-dom";
import MapComponent from "./App";
import { Streamlit } from "streamlit-component-lib";

const Component = () => {
  const onRender = (event) => {
    // Render map with the location
    ReactDOM.render(<MapComponent setComponentValue={Streamlit.setComponentValue} />, document.getElementById("root"));
  };

  Streamlit.events.addEventListener(Streamlit.RENDER_EVENT, onRender);
  Streamlit.setComponentReady();
};

Component();
