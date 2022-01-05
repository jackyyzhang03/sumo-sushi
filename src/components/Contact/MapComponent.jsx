import * as React from "react";
import MapGL, { Marker } from "react-map-gl";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiamFja3l5emhhbmciLCJhIjoiY2t5MHIwd2x4MDN0aDMwb2RwbXltejd6bCJ9.3Xii53XwWe-3TQA0Hd18Cg"; // Set your mapbox token here

function MapComponent() {
  const [viewport, setViewport] = React.useState({
    latitude: 45.505566367443315,
    longitude: -73.57652348543657,
    zoom: 14,
    bearing: 0,
    pitch: 0,
  });

  return (
    <MapGL
      {...viewport}
      width="100%"
      height="100%"
      mapStyle="mapbox://styles/mapbox/light-v10"
      onViewportChange={setViewport}
      mapboxApiAccessToken={MAPBOX_TOKEN}
      maxPitch="0"
    >
      <Marker
        latitude={45.505566367443315}
        longitude={-73.57652348543657}
      >
        <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" className="marker"/>
      </Marker>
    </MapGL>
  );
}

export default MapComponent;
