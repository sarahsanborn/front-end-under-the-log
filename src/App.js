import ReactMap from "./ReactMap";
import Dropdown from "./Dropdown";
import axios from "axios";
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import "./App.css";

import edibleList from "./edibleList";

function App() {
  const [observationsList, setObservationsList] = useState([]);
  const [filteredObservationsList, setFilteredObservationsList] = useState([]);
  const MONTHS = [
    "null",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const URL = "https://api.inaturalist.org/v1";

  // if you set new state multiple times, make sure your function is not capturing data from the
  // previous render
  // this was uses useDSate hook to get the incremental updates that are available to you in the hooks
  // this is the reducer pattern; supplying a less complicated reducer function to the setstate
  // "here is a function that does "
  // reducer = state +action produces new state --> always stateless
  // what use state is doing under the hood
  // https://blog.logrocket.com/using-react-usestate-object/
  // };

  // filter list comes from dropdown and search bar
  const getLatinFilterResults = (filterList) => {
    if (typeof filterList === "string") {
      filterList = [filterList];
    }
    const dbSearchTaxa = [];
    const apiSearchTaxa = [];

    // takes list of common names
    // loops through, and for each adds latin to return list:
    for (let item of edibleList) {
      for (let filter of filterList) {
        if (item.label.toLowerCase() === filter.toLowerCase()) {
          dbSearchTaxa.concat(item.value);
        } else if (!apiSearchTaxa.includes(filter)) {
          apiSearchTaxa.push(filter);
        }
      }
    }
    // but what happens if they plug in latin names? --> goes to api
    // what if name doesn't exist in db??? --> same

    return [dbSearchTaxa, apiSearchTaxa];
  };

  // USING LATIN NAMES ONLY
  const pullFilteredObservations = (filterList) => {
    const results = getLatinFilterResults(filterList);
    const dbSearchTaxa = results[0];
    const apiSearchTaxa = results[1];

    const updatedObservations = [];

    if (apiSearchTaxa) {
      for (let taxa of apiSearchTaxa) {
        getObservationsByTaxon(taxa, true);
      }
    }

    if (dbSearchTaxa) {
      for (let observation in observationsList) {
        for (let filter in dbSearchTaxa) {
          if (filter === observation.properties.latin_name) {
            updatedObservations.push(observation);
          }
        }
      }
    }

    setFilteredObservationsList((currentObservations) => [
      ...currentObservations,
      ...updatedObservations,
    ]);
  };

  // DATA UNPACKER FOR GEOJSON

  const dataUnpacker = (results, filter) => {
    const updatedObservations = [];

    for (let i in results) {
      let newImgUrl = "";
      if (
        results[i]["observation_photos"][0]["photo"]["url"].slice(-3) === "jpg"
      ) {
        newImgUrl = `${results[i]["observation_photos"][0]["photo"][
          "url"
        ].slice(0, -10)}large.jpg`;
      } else if (
        results[i]["observation_photos"][0]["photo"]["url"].slice(-3) === "peg"
      ) {
        newImgUrl = `${results[i]["observation_photos"][0]["photo"][
          "url"
        ].slice(0, -11)}large.jpeg`;
      } else if (
        results[i]["observation_photos"][0]["photo"]["url"].slice(-3) === "png"
      ) {
        newImgUrl = `${results[i]["observation_photos"][0]["photo"][
          "url"
        ].slice(0, -10)}large.png`;
      } else {
        continue;
      }

      const initialDate = results[i]["created_at_details"]["date"];
      const newDate = `${
        MONTHS[parseInt(initialDate.slice(5, 7))]
      } ${initialDate.slice(8)}, ${initialDate.slice(0, 4)}`;

      const info = {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: results[i]["geojson"]["coordinates"],
        },
        properties: {
          id: results[i]["id"],
          common_name: results[i]["taxon"]["preferred_common_name"],
          latin_name: results[i]["taxon"]["name"],
          date: newDate,
          image_url: newImgUrl,
          latitude: results[i]["geojson"]["coordinates"][1],
          longitude: results[i]["geojson"]["coordinates"][0],
          native: results[i]["taxon"]["native"],
        },
      };

      updatedObservations.push(info);
    }

    if (filter === false) {
      setObservationsList((currentObservations) => [
        ...currentObservations,
        ...updatedObservations,
      ]);
    } else {
      setFilteredObservationsList((currentObservations) => [
        ...currentObservations,
        ...updatedObservations,
      ]);
    }

    console.log(observationsList);
  };

  const getObservationsByTaxon = async (taxon, filter = false, page = 1) => {
    try {
      const response = await axios.get(`${URL}/observations`, {
        params: {
          taxon_name: taxon,
          place_id: 46,
          year: [2021, 2022, 2023],
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
        dataUnpacker(response.data.results, filter);
      } else {
        let currentPage = page;
        dataUnpacker(response.data.results, filter);

        if (currentPage === numOfPages) {
          return null;
        }

        currentPage++;
        // CALL FUNCTION RECURSIVELY WITH CURRENT PAGE
        getObservationsByTaxon(taxon, filter, currentPage);
      }
    } catch (err) {
      console.log("ERROR!", err);
    }
  };

  useEffect(() => {
    for (let item of edibleList) {
      for (let taxa of item.value) {
        getObservationsByTaxon(taxa);
      }
    }
    // getObservationsByTaxon does not have any dependencies that change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="grid-container">
      <header>
        <div>
          <h1 className="title">Under The Log</h1>
          <p className="tagline">Your Washington State foraging companion</p>
        </div>
        <ul className="search-filter-list">
          <Dropdown filterByTaxon={pullFilteredObservations}></Dropdown>
          <li>
            <SearchBar
              className="search-bar"
              searchByTaxon={pullFilteredObservations}
            />
          </li>
          <li></li>
        </ul>
      </header>

      <main>
        <ReactMap
          dataGeoJSON={{
            type: "FeatureCollection",
            features:
              filteredObservationsList.length !== 0
                ? filteredObservationsList
                : observationsList,
          }}
        ></ReactMap>
      </main>
    </div>
  );
}

export default App;
