import ReactMap from "./ReactMap";
import axios from "axios";
import ObservationsList from "./ObservationsList";
import { useState, useEffect } from "react";
import './App.css';

function App() {
  const [observationsList, setObservationsList] = useState(["cheese"]);

  // Added by Sarah for Markers used in ReactMap
  const [dataMarkers, setDataMarkers] = useState([]) // Does this need to be passed into ReactMap?

    useEffect(() => {
        fetch('/markers') // This needs to be updated to gather marker data
        .then(res => res.json())
        .then(data => setDataMarkers(data))
    }, []);


  const URL = "https://api.inaturalist.org/v1";

  // BELOW WILL CHANGE TO RETRIEVE FROM STATE ONCE
  // LARGER GET CALL IS SET UP
  const getObservationByID = async (id) => {
    try {
      const response = await axios.get(`${URL}/identifications`, {
        params: {
          id: id,
        },
      });
      setObservationsList(response.data.results);
      console.log("success!", response.data.results);
    } catch (err) {
      console.log("ERROR!", err);
    }
  };

  const getObservationsByTaxon = async (taxon) => {
    try {
      const response = await axios.get(`${URL}/observations`, {
        params: {
          taxon_name: taxon,
          place_id: 46,
          year: [2021, 2023],
          photos: true,
          quality_grade: "research",
          captive: false,
          geoprivacy: "open",
          per_page: 100,
        },
      });

      console.log("success! getObservationsByTaxon");

      const updatedObservations = [];

      for (let i in response.data.results) {
        const info = {
          id: response.data.results[i]["id"],
          common_name:
            response.data.results[i]["taxon"]["preferred_common_name"],
          latin_name: response.data.results[i]["taxon"]["name"],
          date: response.data.results[i]["created_at_details"],
          image_url:
            response.data.results[i]["observation_photos"][0]["photo"]["url"],
          lat: response.data.results[i]["geojson"]["coordinates"][1],
          lon: response.data.results[i]["geojson"]["coordinates"][0],
          native: response.data.results[i]["taxon"]["native"],
        };

        updatedObservations.push(info);
      }
      setObservationsList(updatedObservations);
    } catch (err) {
      console.log("ERROR!", err);
    }
  };

  // useEffect(() => {
  //   // getObservationByID(147215905);
  //   getObservationsByTaxon("borage");

  //   console.log("obs list state contains:", observationsList);
  // }, []);

  return (
    <div className="grid-container">
      <header>
        <h1>under the log</h1>
        <ul className="search-filter-list">
          <li>search bar</li>
          <li>dropdown filter</li>
        </ul>
      </header>
      <main>
        <ReactMap dataMarkers={dataMarkers}></ReactMap>
      </main>
    </div>
  );
}

export default App;
