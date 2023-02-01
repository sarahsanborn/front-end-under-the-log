import ReactMap from "./ReactMap";
import axios from "axios";
import ObservationsList from "./ObservationsList";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [observationsList, setObservationsList] = useState([]);
  // const [borageObservations, setBorageObservations] = useState([]);
  // const [salmonberryObservations, setSalmonberryObservations] = useState([]);
  // {latitude:47.3, longitude:-120.485, id:1}

  // Added by Sarah for Markers used in ReactMap
  // const [dataMarkers, setDataMarkers] = useState([]) // Does this need to be passed into ReactMap?

  //   useEffect(() => {
  //       fetch('/markers') // This needs to be updated to gather marker data
  //       .then(res => res.json())
  //       .then(data => setDataMarkers(data))
  //   }, []);

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

  const dataUnpacker = (results) => {
    const updatedObservations = [];

    for (let i in results) {
      const info = {
        id: results[i]["id"],
        common_name: results[i]["taxon"]["preferred_common_name"],
        latin_name: results[i]["taxon"]["name"],
        date: results[i]["created_at_details"]["date"],
        image_url: results[i]["observation_photos"][0]["photo"]["url"],
        latitude: results[i]["geojson"]["coordinates"][1],
        longitude: results[i]["geojson"]["coordinates"][0],
        native: results[i]["taxon"]["native"],
      };

      updatedObservations.push(info);
    }

    setObservationsList((currentObservations) => [
      ...currentObservations,
      ...updatedObservations,
    ]);
    // if you set new state muultiple times, make sure your function is not capturing data from the
    // previous render
    // this was uses useDSate hook to get the incremental updates that are available to you in the hooks
    // this is the reducer pattern; supplying a less complicated reducer function to the setstate
    // "here is a function that does "
    // reducer = state +action produces new state --> always stateless
    // what use state is doing under the hood
  };

  const getObservationsByTaxon = async (taxon, page = 1) => {
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
          per_page: 200,
          page: page,
        },
      });

      const numOfPages = 1 + Math.floor(response.data.total_results / 200);

      if (numOfPages === 1) {
        dataUnpacker(response.data.results);
      } else {
        let currentPage = page;
        dataUnpacker(response.data.results);

        if (currentPage === numOfPages) {
          return null;
        }

        currentPage++;
        // CALL AXIOS WITH CURRENT PAGE
        getObservationsByTaxon(taxon, currentPage);
      }
    } catch (err) {
      console.log("ERROR!", err);
    }
  };

  useEffect(() => {
    // getObservationByID(147215905);
    getObservationsByTaxon("salmonberry");
    getObservationsByTaxon("borage");
    getObservationsByTaxon("wood sorrel");
    getObservationsByTaxon("pickleweed");
    getObservationsByTaxon("chanterelle");

    console.log("obs list state contains:", observationsList);
  }, []);

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
        <ReactMap dataMarkers={observationsList}></ReactMap>
      </main>
    </div>
  );
}

export default App;
