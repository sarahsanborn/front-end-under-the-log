import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import React, { useState, useMemo } from "react";
import { FaLeaf } from "react-icons/fa";

function ReactMap({ dataMarkers }) {
  const [viewState, setViewState] = useState({
    latitude: 47.31,
    longitude: -120.485,
    zoom: 6.4,
  });

  // const mapMarkers = () => {
  //   dataMarkers.map((dataMarker) => {
  //     console.log(dataMarker);
  //   return (
  //       <Marker
  //           // key={dataMarker.id}
  //           longitude={dataMarker.longitude}
  //           latitude={dataMarker.latitude}
  //           anchor="bottom"
  //       >
  //           <h1>HERE IS THE DOT</h1>
  //       </Marker>
  //       )
  //   }
  //   )
  // }
  const markers = useMemo(
    () =>
      dataMarkers.map((dataMarker) => (
        <Marker
          key={dataMarker.id}
          longitude={dataMarker.longitude}
          latitude={dataMarker.latitude}
        >
          <FaLeaf />
        </Marker>
      )),
    [dataMarkers]
  );

  return (
    <div className="map-container">
      <Map
        {...viewState}
        onMove={(event) => setViewState(event.viewState)}
        style={{ width: "100vw", height: "90vh" }}
        mapStyle="mapbox://styles/foragingcapstone/cldc9qo4i001m01lexygzvftr/draft"
        // mapStyle="mapbox://styles/foragingcapstone/cldj35obm000101p9dxvz40cc/draft"
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      >
        {/* <Marker longitude={-120.485} latitude={47.310} anchor="bottom" >
        <p>HERE HERE HERE</p>
      </Marker> */}
        {markers}
      </Map>
    </div>
  );
}

export default ReactMap;
