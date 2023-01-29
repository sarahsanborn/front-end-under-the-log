// import { useRef, useEffect, useState } from 'react';
// // import useSwr from 'swr';
// // import { Marker } from 'react-map-gl';
// // import useSupercluster from 'use-supercluster';
// // import mapboxgl from 'mapbox-gl';
// import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

// // const fakeData = {
// //   1:
// //     {
// //       common_name: 'salmonberry',
// //       latin_name: 'Rubus spectabilis',
// //       date: '2023-01-23',
// //       image_url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/253278614/square.jpg',
// //       lat: 47.643476464,
// //       lon: -122.3494747957,
// //       native: true,
// //     },
// //   2:
// //     {
// //       common_name: 'Pacific Glasswort',
// //       latin_name: 'Salicornia pacifica',
// //       date: '2021-10-26',
// //       image_url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/166211458/square.jpg',
// //       lat: 48.055336,
// //       lon: -122.910772,
// //       native: true,
// //     },
// //   3:
// //     {
// //       common_name: 'Pacific Glasswort',
// //       latin_name: 'Salicornia pacifica',
// //       date: '2019-09-16',
// //       image_url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/111517323/square.jpg',
// //       lat: 48.395858,
// //       lon: -122.585964,
// //       native: true,
// //     },
// //   4:
// //     {
// //       common_name: 'Pacific Glasswort',
// //       latin_name: 'Salicornia pacifica',
// //       date: '2018-09-16',
// //       image_url: 'https://static.inaturalist.org/photos/25011560/square.jpeg',
// //       lat: 48.404805,
// //       lon: -122.586822,
// //       native: true,
// //     }
// //   };

// mapboxgl.accessToken = 'pk.eyJ1IjoiZm9yYWdpbmdjYXBzdG9uZSIsImEiOiJjbGRjNmpwaDcwN2k1M25tamNhMXZycGY5In0.jI4XtoOVqLvBEXuXld6Cdw';

// function TheMap() {
//   // UPDATE THESE NEXT FIVE LINES WITH OUR MAP INFO
//   const mapContainer = useRef(null); // HERE
//   const map = useRef(null); // HERE
//   const [lng, setLng] = useState(-120.485); 
//   const [lat, setLat] = useState(47.410); 
//   const [zoom, setZoom] = useState(6.52); 
  
//   useEffect(() => {
//     if (map.current) return; // initialize map only once
//     map.current = new mapboxgl.Map({
//       container: mapContainer.current, // This tells Mapbox to render the map inside a specific DOM element
//       style: 'mapbox://styles/mapbox/streets-v12',
//       center: [lng, lat],
//       zoom: zoom
//     });
//   });
  
//   useEffect(() => {
//     if (!map.current) return; // wait for map to initialize
//     map.current.on('move', () => {
//       setLng(map.current.getCenter().lng.toFixed(4));
//       setLat(map.current.getCenter().lat.toFixed(4));
//       setZoom(map.current.getZoom().toFixed(2));
//     });
//   });

//   return (
//     <div>
//       <div className="sidebar">
//           Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
//         </div>
//         <div ref={mapContainer} className="map-container" />
//     </div>
//   )

// };

// export default TheMap;







// import React, { useState, useRef } from "react";
// import ReactMapGL from "react-map-gl";

// function TheMap() {
//   const [viewport, setViewport] = useState({
//     latitude: 47.410,
//     longitude: -120.485,
//     width: "100vw",
//     height: "100vh",
//     zoom: 6
//   });
//   const mapRef = useRef();

//   return (
//     <div className="map-container">
//       <ReactMapGL
//         {...viewport}
//         maxZoom={20}
//         mapStyle='mapbox://styles/mapbox/streets-v12'
//         mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN} // Also tried mapboxApiAccessToken. This resolved: https://stackoverflow.com/questions/72254578/how-to-solve-that-a-valid-mapbox-access-token-is-required-to-use-mapbox-gl-js
//         onViewportChange={(newViewport) => {
//           setViewport({ ...newViewport, zoom: viewport.zoom});
//         }}
//         ref={mapRef}
//       >
//       </ReactMapGL>
//     </div>
//   );
// };

// export default TheMap;



import Map, {Marker} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useState } from "react";

function TheMap() {
  const [viewState, setViewState] = useState({
    latitude: 47.010,
    longitude: -120.485,
    zoom: 6.4
  });

  return (
    <div className="map-container">
      <Map
        {...viewState}
        onMove={event => setViewState(event.viewState)}
        style={{width: '100vw', height: '100vh'}}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      >
      </Map>
    </div>
  );
};

export default TheMap;