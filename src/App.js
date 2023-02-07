import ReactMap from "./ReactMap";
import Dropdown from "./Dropdown";
import axios from "axios";
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import "./App.css";

import edibleList from "./edibleList";
import edibleListCommon from "./edibleList";

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

  // const dataUnpacker = (results) => {
  //   const updatedObservations = [];

  //   for (let i in results) {
  //     const info = {
  //       id: results[i]["id"],
  //       common_name: results[i]["taxon"]["preferred_common_name"],
  //       latin_name: results[i]["taxon"]["name"],
  //       date: results[i]["created_at_details"]["date"],
  //       image_url: results[i]["observation_photos"][0]["photo"]["url"],
  //       latitude: results[i]["geojson"]["coordinates"][1],
  //       longitude: results[i]["geojson"]["coordinates"][0],
  //       native: results[i]["taxon"]["native"],
  //     };

  //     updatedObservations.push(info);
  //   }

  //   setObservationsList((currentObservations) => [
  //     ...currentObservations,
  //     ...updatedObservations,
  //   ]);
  // if you set new state muultiple times, make sure your function is not capturing data from the
  // previous render
  // this was uses useDSate hook to get the incremental updates that are available to you in the hooks
  // this is the reducer pattern; supplying a less complicated reducer function to the setstate
  // "here is a function that does "
  // reducer = state +action produces new state --> always stateless
  // what use state is doing under the hood
  // https://blog.logrocket.com/using-react-usestate-object/
  // };

  // filter list comes from dropdown (and search bar??)
  const getLatinFilterResults = (filterList) => {
    //  input authentication, lowercase?
    const dbSearchTaxa = [];
    const apiSearchTaxa = [];

    // takes list of common names
    // loops through, and for each adds latin to return list:
    for (let item in edibleList) {
      for (let filter in filterList) {
        if (item.label.toLowerCase === filter.toLowerCase)
          dbSearchTaxa.concat(item.value);
        else {
          apiSearchTaxa.push(filter);
        }
      }
    }
    // but what happens if they plug in latin names? --> goes to api
    // what if name doesn't exist in db???

    return [dbSearchTaxa, apiSearchTaxa];
  };

  // USING LATIN NAMES i(in dbSearchTaxa) ONLY
  const pullFilteredObservations = (filterList) => {
    const results = getLatinFilterResults(filterList);
    const dbSearchTaxa = results[0];
    const apiSearchTaxa = results[1];

    const updatedObservations = [];

    if (apiSearchTaxa) {
      for (let taxa in apiSearchTaxa) {
        // getObservationsByTaxon(taxa);
        // BUT NEED TO CHANGE DATAUNPACKER TO SAVE TO DIFFENT STATE PIECES
        // in this case, we want it to save to filterobservationlist
      }
    }

    for (let observation in observationsList) {
      for (let filter in dbSearchTaxa) {
        if (filter === observation.properties.latin_name) {
          updatedObservations.push(observation);
        }
      }
    }
    setFilteredObservationsList((currentObservations) => [
      ...currentObservations,
      ...updatedObservations,
    ]);
  };

  // DATA UNPACKER FOR GEOJSON

  const dataUnpacker = (results) => {
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

    setObservationsList((currentObservations) => [
      ...currentObservations,
      ...updatedObservations,
    ]);

    console.log(observationsList);
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
    // // getObservationByID(147215905);
    getObservationsByTaxon("salmonberry");
    getObservationsByTaxon("borage");
    getObservationsByTaxon("wood sorrel");
    getObservationsByTaxon("pickleweed");
    // // getObservationsByTaxon("chanterelle");
    getObservationsByTaxon("Cantharellus cibarius");
    getObservationsByTaxon("Cantharellus formosus");
    getObservationsByTaxon("arrowleaf balsamroot");

    console.log("obs list state contains:", observationsList);
  }, []);

  // const fakeGeoJSON = {
  //   type: "FeatureCollection",
  //   features: [
  //     {
  //       type: "Feature",
  //       geometry: {
  //         type: "Point",
  //         coordinates: [-122.0909361111, 47.2195166667],
  //       },
  //       properties: {
  //         id: 97978216,
  //         common_name: "Borage",
  //         latin_name: "Borago officinalis",
  //         date: "2021-10-11",
  //         image_url:
  //           "https://inaturalist-open-data.s3.amazonaws.com/photos/163039385/square.jpeg",
  //         latitude: 47.2195166667,
  //         longitude: -122.0909361111,
  //         native: false,
  //       },
  //     },
  //     {
  //       type: "Feature",
  //       geometry: {
  //         type: "Point",
  //         coordinates: [-122.3088, 47.672345],
  //       },
  //       properties: {
  //         id: 103130022,
  //         common_name: "salmonberry",
  //         latin_name: "Rubus spectabilis",
  //         date: "2022-04-09",
  //         image_url:
  //           "https://inaturalist-open-data.s3.amazonaws.com/photos/172539904/square.jpg",
  //         latitude: 47.672345,
  //         longitude: -122.3088,
  //         native: true,
  //       },
  //     },
  //   ],
  // };

  return (
    <div className="grid-container">
      <header>
        <div>
          <h1 className="title">Under The Log</h1>
          <p className="tagline">Your Washington State foraging companion</p>
        </div>
        <ul className="search-filter-list">
          <li>
            <SearchBar searchByTaxon={getObservationsByTaxon} />
          </li>
          <li></li>
        </ul>
      </header>
      <Dropdown>dropdown filter</Dropdown>

      <main>
        {/* <ReactMap dataMarkers={observationsList}></ReactMap> */}
        <ReactMap
          dataGeoJSON={{
            type: "FeatureCollection",
            features: observationsList,
            // eventually want to replace w/this for filtering:
            // filteredObservationsList ? filteredObservationsList: observationsList,
          }}
        ></ReactMap>
      </main>
    </div>
  );
}

export default App;
