import Map, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import React, { useState, useMemo } from "react";
import { FaLeaf } from "react-icons/fa";

function ReactMap({ dataMarkers }) {
  const [viewState, setViewState] = useState({
    latitude: 47.31,
    longitude: -120.485,
    zoom: 6.4,
  });

  
  const [popupInfo, setPopupInfo] = useState(null);
  
  const markers = useMemo(
    () =>
    dataMarkers.map((dataMarker) => (
      <Marker
      key={dataMarker.id}
      longitude={dataMarker.longitude}
      latitude={dataMarker.latitude}
      anchor="bottom"
      onClick={(event) => {
        event.originalEvent.stopPropagation();
        setPopupInfo(dataMarker);
      }}
      >
          <FaLeaf color="#265061"/>
        </Marker>
      )),
      [dataMarkers]
      );
      
      // Here is a function that will allow us to have a button so someone can open Google maps
      function mapsSelector() {
        console.log(navigator)
      //   if /* if we're on iOS, open in Apple Maps */
      //   ((navigator.userAgentData.vendor("iPhone") != -1) || 
      //    (navigator.userAgentData.vendor("iPad") != -1) || 
      //    (navigator.userAgentData.vendor("iPod") != -1))
      //   window.open(`maps://maps.google.com/maps?daddr=${popupInfo.latitude},${popupInfo.longitude}&amp;ll=`);
      // else /* else use Google */
        window.open(`https://maps.google.com/maps?daddr=${popupInfo.latitude},${popupInfo.longitude}&amp;ll=`);
      }

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
        {popupInfo && (
          <Popup
            anchor="top"
            id={Number(popupInfo.id)}
            latitude={Number(popupInfo.latitude)}
            longitude={Number(popupInfo.longitude)}
            onClose={() => setPopupInfo(null)}
          >
            <div>
              <h1>{popupInfo.common_name}</h1>
              <h2>{popupInfo.latin_name}</h2>
              <p>Date Observed: {popupInfo.date}</p>
              <p>Native: {popupInfo.native.toString()}</p>
              <img src={popupInfo.image_url} alt="observed species"></img>
              <div>
                <button onClick={() => mapsSelector()}>Get Directions</button>
              </div>
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
}

export default ReactMap;
