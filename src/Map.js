import { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoiZm9yYWdpbmdjYXBzdG9uZSIsImEiOiJjbGRjNmpwaDcwN2k1M25tamNhMXZycGY5In0.jI4XtoOVqLvBEXuXld6Cdw';

function Map() {
  // UPDATE THESE NEXT FIVE LINES WITH OUR MAP INFO
  const mapContainer = useRef(null); // HERE
  const map = useRef(null); // HERE
  const [lng, setLng] = useState(-120.485); // HERE
  const [lat, setLat] = useState(47.410); // HERE
  const [zoom, setZoom] = useState(6.52); // HERE
  
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current, // This tells Mapbox to render the map inside a specific DOM element
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom
    });
  });
  
  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <div>
      <div className="sidebar">
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
        <div ref={mapContainer} className="map-container" />
    </div>
  )

};

export default Map;
